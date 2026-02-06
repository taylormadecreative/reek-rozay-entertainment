import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Reek Rozay Entertainment | Dallas' Premier Haitian Kompa Events & Dance",
    template: "%s | Reek Rozay Entertainment",
  },
  description:
    "Reek Rozay Entertainment brings Dallas the best in Haitian Kompa events, dance workshops, and live entertainment. Experience the culture.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Reek Rozay Entertainment",
    title: "Reek Rozay Entertainment | Dallas' Premier Haitian Kompa Events & Dance",
    description:
      "Reek Rozay Entertainment brings Dallas the best in Haitian Kompa events, dance workshops, and live entertainment.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`}>
      <head>
        {/* META PIXEL: Install Facebook/Meta Pixel script here */}
      </head>
      <body className="bg-brand-black text-brand-cream antialiased">
        {/* Noise texture overlay for depth */}
        <div className="noise-overlay" />

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
