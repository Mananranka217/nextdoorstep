import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, Fraunces } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { site } from "@/content/site";
import "./globals.css";

// Plus Jakarta Sans and Inter are variable fonts: one file covers every weight we use (600/700 and 400-700).
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Fraunces is only ever used at weight 500 (display headlines and big numbers), so load just that weight.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "500",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "NextDoorStep | Resale & Rentals Across East Bengaluru",
    template: "%s | NextDoorStep",
  },
  description:
    "NextDoorStep helps owners, tenants, and buyers with resale and rental enquiries across East Bengaluru's most active neighbourhoods.",
  icons: { icon: "/assets/favicon.svg" },
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_IN",
    images: [{ url: "/assets/og/og-image.jpg", width: 1200, height: 630, alt: "NextDoorStep: resale and rentals across East Bengaluru" }],
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} ${fraunces.variable}`}>
      <body>
        <Header />
        <main id="top">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
