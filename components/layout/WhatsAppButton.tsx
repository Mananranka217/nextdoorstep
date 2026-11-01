import { waLink } from "@/content/site";
import { WHATSAPP_PATH } from "@/components/ui/Icons";

export default function WhatsAppButton() {
  return (
    <a className="whatsapp-btn" href={waLink()} target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
      <span className="whatsapp-hint">Chat on WhatsApp</span>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d={WHATSAPP_PATH} />
      </svg>
    </a>
  );
}
