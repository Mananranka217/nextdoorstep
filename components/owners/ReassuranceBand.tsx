import FadeUp from "@/components/ui/FadeUp";
import { FileCheck, Manager, ShieldCheck, Video } from "./icons";

// Every item is an existing fact from the owner packages and cards.
const items = [
  { icon: <ShieldCheck size={26} />, text: "Verified tenant screening" },
  { icon: <FileCheck size={26} />, text: "Legal documentation support" },
  { icon: <Manager size={26} />, text: "Dedicated relationship manager" },
  { icon: <Video size={26} />, text: "Professional video shoot" },
];

export default function ReassuranceBand() {
  return (
    <section className="rb" aria-label="Included with owner packages">
      <FadeUp>
        <ul className="rb-list">
          {items.map((it) => (
            <li key={it.text} className="rb-item">
              <span className="rb-icon" aria-hidden="true">{it.icon}</span>
              {it.text}
            </li>
          ))}
        </ul>
      </FadeUp>
    </section>
  );
}
