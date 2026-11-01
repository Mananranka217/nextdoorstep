// Contact details and site-wide settings. Change them here and every page updates.
export const site = {
  name: "NextDoorStep",
  url: "https://nextdoorstep.in",
  phoneTel: "9740447501",
  phoneDisplay: "+91 9740447501",
  whatsappNumber: "919740447501",
  email: "support@nextdoorstep.in",
  address:
    "4th Cross Rd, opp. Salarpuria Sattva Apts, Venkojirao Khane, Bommanahalli, Bengaluru 560068",
  rera: "PRM/KA/RERA/1251/310/AG/260423/007159",
  // Google Apps Script web app that writes enquiries into your sheet.
  // Override with NEXT_PUBLIC_SHEET_URL in .env.local if the script is ever redeployed.
  sheetUrl:
    process.env.NEXT_PUBLIC_SHEET_URL ??
    "https://script.google.com/macros/s/AKfycbzYasX4CxR3pgmixRN7JROfj1OwM15gr8IBRhg4NnAsKtvHOnmybA3Oj17FByQX7cyC/exec",
};

export const DEFAULT_WA_TEXT = "Hi NextDoorStep, I want help with resale or rental in East Bengaluru.";

export function waLink(text: string = DEFAULT_WA_TEXT) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
