// Buttons across the site (for example "Rent out my property") fill in the enquiry form.
// They send this event; EnquiryForm listens for it.
export const PREFILL_EVENT = "nds:prefill";

export type PrefillDetail = {
  role?: string;
  interest?: string;
  service?: string;
  note?: string;
};
