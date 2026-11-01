"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { localities } from "@/content/localities";
import { nexusPackages } from "@/content/nexusPackages";
import { site } from "@/content/site";
import { PREFILL_EVENT, type PrefillDetail } from "@/lib/prefill";

type Variant = "general" | "nexus";
type Props = { variant?: Variant; defaultRole?: string; defaultInterest?: string };

const generalRoles = ["Buyer", "Tenant", "Owner"];
const nexusRoles = ["Buyer", "Seller"];
const interests = [
  "Buy a resale home",
  "Rent a home",
  "Sell my property",
  "Rent out my property",
  "Free Property Valuation",
];
const services = [...nexusPackages.map((p) => `${p.name} — ${p.price}`), "Not sure yet"];

export default function EnquiryForm({ variant = "general", defaultRole = "", defaultInterest = "" }: Props) {
  const isNexus = variant === "nexus";
  const [values, setValues] = useState({
    name: "",
    phone: "",
    role: defaultRole,
    interest: defaultInterest,
    service: "",
    area: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [note, setNote] = useState<{ text: string; success: boolean; error?: boolean }>({
    text: isNexus
      ? "We will use these details only to respond to your enquiry."
      : "We follow up on WhatsApp or phone within a few hours.",
    success: false,
  });
  const nameRef = useRef<HTMLInputElement>(null);
  const autoNote = useRef(""); // details text we filled in ourselves, so we never overwrite what the person typed
  const messageRef = useRef("");
  messageRef.current = values.message;

  useEffect(() => {
    function onPrefill(e: Event) {
      const d = (e as CustomEvent<PrefillDetail>).detail ?? {};
      const note = d.note ?? "";
      const canReplace = messageRef.current.trim() === "" || messageRef.current === autoNote.current;
      if (canReplace) autoNote.current = note;
      setValues((v) => ({
        ...v,
        role: d.role ?? "",
        interest: d.interest ?? "",
        service: d.service ?? "",
        message: canReplace ? note : v.message,
      }));
      window.setTimeout(() => nameRef.current?.focus({ preventScroll: true }), 600);
    }
    window.addEventListener(PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill);
  }, []);

  function set(field: keyof typeof values) {
    return (e: { target: { value: string } }) => setValues((v) => ({ ...v, [field]: e.target.value }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (sending) return;
    const data: Record<string, string> = {
      source: isNexus ? "paperwork" : "index",
      name: values.name,
      phone: values.phone,
      role: values.role,
      area: values.area,
      message: values.message,
    };
    if (isNexus) data.service = values.service;
    else data.interest = values.interest;
    const url = `${site.sheetUrl}?${new URLSearchParams(data).toString()}`;

    setSending(true);
    setNote({ text: "Sending your enquiry…", success: false });
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 15000);
    try {
      const res = await fetch(url, { signal: controller.signal, cache: "no-store" });
      if (!res.ok) throw new Error(`Sheet responded ${res.status}`);
      setNote({ text: `Thanks, ${values.name.trim() || "there"}. Your enquiry has been submitted.`, success: true });
      autoNote.current = "";
      setValues({ name: "", phone: "", role: "", interest: "", service: "", area: "", message: "" });
    } catch {
      // We can't confirm delivery (script unreachable, not shared publicly, or blocked). Fire the
      // old fire-and-forget request as a best-effort backup, but keep what the person typed and
      // tell them how to reach us instead of showing a false "submitted".
      new Image().src = url;
      setNote({
        text: `We couldn't confirm your enquiry went through. Please WhatsApp or call us on ${site.phoneDisplay}, or email ${site.email}.`,
        success: false,
        error: true,
      });
    } finally {
      window.clearTimeout(timer);
      setSending(false);
    }
  }

  return (
    <form className="enquiry-form" id="enquiryForm" onSubmit={onSubmit}>
      {isNexus ? (
        <>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input ref={nameRef} id="name" name="name" type="text" autoComplete="name" required value={values.name} onChange={set("name")} />
          </div>
          <div className="form-row">
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required value={values.phone} onChange={set("phone")} />
          </div>
        </>
      ) : (
        <div className="form-row-2">
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input ref={nameRef} id="name" name="name" type="text" autoComplete="name" placeholder="Your name" required value={values.name} onChange={set("name")} />
          </div>
          <div className="form-row">
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="10-digit number" required value={values.phone} onChange={set("phone")} />
          </div>
        </div>
      )}

      <div className="form-row">
        <label htmlFor="role">I am a</label>
        <select id="role" name="role" required value={values.role} onChange={set("role")}>
          <option value="">Select one</option>
          {(isNexus ? nexusRoles : generalRoles).map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>

      {isNexus ? (
        <div className="form-row">
          <label htmlFor="service">Service</label>
          <select id="service" name="service" required value={values.service} onChange={set("service")}>
            <option value="">Select one</option>
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      ) : (
        <div className="form-row">
          <label htmlFor="interest">I want to</label>
          <select id="interest" name="interest" required value={values.interest} onChange={set("interest")}>
            <option value="">Select one</option>
            {interests.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </div>
      )}

      <div className="form-row">
        <label htmlFor="area">{isNexus ? "Property area" : "Area"}</label>
        <input
          id="area"
          name="area"
          type="text"
          list="localityList"
          placeholder="Whitefield, Bellandur, KR Puram..."
          required
          value={values.area}
          onChange={set("area")}
        />
        <datalist id="localityList">
          {localities.map((l) => (
            <option key={l} value={l} />
          ))}
        </datalist>
      </div>

      <div className="form-row">
        <label htmlFor="message">
          {isNexus ? "Message" : "Details"}
          {!isNexus && <span className="label-opt"> optional</span>}
        </label>
        <textarea
          id="message"
          name="message"
          rows={isNexus ? 4 : 3}
          placeholder={
            isNexus
              ? "Property type, budget, timeline, or any document concerns"
              : "Budget, BHK, society name, move-in timeline, or property details"
          }
          value={values.message}
          onChange={set("message")}
        />
      </div>

      <button className="button primary full" type="submit" disabled={sending}>
        {isNexus ? "Plan My Registration" : "Get My Shortlist"}
      </button>
      <p className={`form-note${note.success ? " success" : ""}${note.error ? " error" : ""}`} role="status" aria-live="polite">
        {note.text}
      </p>
    </form>
  );
}
