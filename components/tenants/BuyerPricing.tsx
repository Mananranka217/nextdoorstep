import FadeUp from "@/components/ui/FadeUp";
import PrefillLink from "@/components/ui/PrefillLink";
import { buyerConfig } from "@/content/pricing.config";
import { Arrow, Camera, Check, FileCheck, House, Manager, Percent } from "@/components/owners/icons";

// The four bullets that already sat on this page, in the same words.
const bullets = [
  { icon: <House size={24} />, text: "Shortlisted properties matched to your budget and area" },
  { icon: <Camera size={24} />, text: "Guided visits at no additional charge" },
  { icon: <Manager size={24} />, text: "Consultation on market value and documentation" },
  { icon: <FileCheck size={24} />, text: "Brokerage charged only on a confirmed purchase" },
];

export default function BuyerPricing() {
  const pct = buyerConfig.buyer_brokerage_percent;
  return (
    <FadeUp>
      <div className="bp">
        <div className="bp-price">
          <p className="bp-eyebrow"><Percent size={18} /> For Buyers</p>
          {pct ? (
            <>
              <p className="bp-number">{pct}</p>
              <p className="bp-unit">buyer-side brokerage</p>
            </>
          ) : (
            <p className="bp-number bp-number--text">Quote shared upfront</p>
          )}
          <p className="bp-copy">{buyerConfig.copy}</p>
          <PrefillLink
            className="op-cta"
            role="Buyer"
            interest="Buy a resale home"
            note="Interested in buying — please share shortlist options."
          >
            Start your search
            <span className="op-cta-arrow"><Arrow /></span>
          </PrefillLink>
        </div>

        <ul className="bp-list">
          {bullets.map((b, i) => (
            <li key={b.text} className={i === bullets.length - 1 ? "bp-row bp-row--key" : "bp-row"}>
              <span className="bp-icon" aria-hidden="true">{b.icon}</span>
              <span>{b.text}</span>
              {i === bullets.length - 1 && <Check size={20} />}
            </li>
          ))}
        </ul>
      </div>
    </FadeUp>
  );
}
