import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://roofing.andigitalstudio.com"),
  title: "RidgeCraft Roofing — UK Roofing Website Concept",
  description: "An illustrative UK roofing website concept created by AN Digital Studio. Fictional example business content only.",
  alternates: { canonical: "/" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "RidgeCraft Roofing — Concept Website",
    description: "A premium UK roofing website concept by AN Digital Studio.",
    url: "https://roofing.andigitalstudio.com",
    siteName: "RidgeCraft Roofing Concept",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
