import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { SITE } from "@/lib/site";
import { LanguageProvider } from "@/lib/language-context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  
  title: {
    default: "GenoVision | Análisis Genético para Riesgo de Cáncer",
    template: "%s | GenoVision",
  },
  description:
    "Análisis genómico avanzado para evaluar predisposición hereditaria a cáncer y apoyar decisiones preventivas personalizadas.",
  keywords: [
    "análisis genético",
    "cáncer hereditario",
    "predisposición genética",
    "NGS",
    "panel de cáncer",
    "Mérida",
    "Yucatán",
    "genómica clínica",
    "GenoVision",
  ],
  authors: [{ name: "GenoVision" }],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE.url,
    siteName: SITE.name,
    title: "GenoVision | Análisis Genético para Riesgo de Cáncer",
    description:
      "Análisis genómico avanzado para evaluar predisposición hereditaria a cáncer y apoyar decisiones preventivas personalizadas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GenoVision | Análisis Genético para Riesgo de Cáncer",
    description:
      "Análisis genómico avanzado para evaluar predisposición hereditaria a cáncer y apoyar decisiones preventivas personalizadas.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#061B3A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen font-sans text-ink">
        <LanguageProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
          >
            Saltar al contenido principal
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </LanguageProvider>
      </body>
    </html>
  );
}
