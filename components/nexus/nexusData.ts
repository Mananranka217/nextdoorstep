// Copy for the Nexus checks and timeline lives here so the page sections and the enquiry panel share it.
export const checks = [
  { title: "Ownership chain", text: "Title search going back 30 years — confirming the seller is the legitimate owner with no ongoing dispute." },
  { title: "Encumbrance certificate", text: "Checks whether the property carries any registered mortgages, liabilities, or legal claims that don't show up on the sale deed." },
  { title: "Khata status", text: "Verifies that the property is correctly listed with BBMP or the local body — and that the khata is in the seller's name." },
  { title: "Outstanding bank loans", text: "Confirms that no active home loan or bank lien is attached to the property that must be cleared before transfer." },
  { title: "Sanctioned plan", text: "Checks that the building plan is approved by the relevant authority and that the construction matches the sanctioned layout." },
  { title: "Property tax dues", text: "Verifies all tax payments are up to date — so you don't inherit years of unpaid dues when the property changes hands." },
  { title: "Sale deed review", text: "The final deed is checked for accurate details — owner names, schedule of property, measurements, and registered encumbrances." },
] as const;

export const steps = [
  { title: "Lock the deal", text: "Confirm buyer, seller, price, timeline, and property basics before any money moves." },
  { title: "Collect documents", text: "Gather title, EC, khata, tax receipts, sanctioned plan, and society NOC from the seller." },
  { title: "Legal review", text: "Professional scrutiny of all documents — ownership chain, liabilities, and approvals verified." },
  { title: "Sign agreements", text: "Sale agreement and sale deed drafted, TDS and stamp duty paid, bank steps coordinated." },
  { title: "Registration day", text: "SRO appointment scheduled, both parties accompanied, registration completed and receipt collected." },
  { title: "Post-purchase transfers", text: "Khata, BESCOM, and property tax name changes tracked to completion after handover." },
] as const;
