import FadeUp from "@/components/ui/FadeUp";
import { Bank, Certificate, Desk, ShieldCheck } from "@/components/owners/icons";

const items = [
  { icon: <ShieldCheck size={26} />, value: "RERA", title: "Registered support", text: "PRM/KA/RERA/1251/310/AG/260423/007159 for added confidence." },
  { icon: <Bank size={26} />, value: "70+", title: "Bank partners", text: "Loan comparison and bank-side document coordination when needed." },
  { icon: <Certificate size={26} />, value: "30+", title: "Nexus services", text: "Verification, deed preparation, registration, khata, BESCOM, and tax transfers." },
  { icon: <Desk size={26} />, value: "Same day", title: "Clear next step", text: "Share the property stage and we map the right package within a few hours." },
];

export default function NexusTrust() {
  return (
    <section className="nx-trust" aria-label="Why clients trust NextDoorStep Nexus">
      <FadeUp>
        <div className="nx-trust-head">
          <p className="eyebrow">Built for resale safety</p>
          <h2>One team for title checks, registration, and post-purchase transfers.</h2>
        </div>
        <ul className="nx-trust-list">
          {items.map((it) => (
            <li key={it.title}>
              <span className="nx-trust-icon" aria-hidden="true">{it.icon}</span>
              <span>
                <strong><em>{it.value}</em> {it.title}</strong>
                <span className="nx-trust-text">{it.text}</span>
              </span>
            </li>
          ))}
        </ul>
      </FadeUp>
    </section>
  );
}
