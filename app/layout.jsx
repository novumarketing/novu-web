import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700", "800"], variable: "--font-poppins" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  metadataBase: new URL("https://novu-web-ten.vercel.app"),
  title: "NOVU Marketing — Agencia de Marketing Digital",
  description: "Redes sociales, contenido, publicidad pagada y sitios web para negocios que quieren crecer. Resultados medibles, sin humo.",
  keywords: ["agencia de marketing digital", "redes sociales", "community manager", "Meta Ads", "Google Ads", "diseño web", "branding", "Pachuca", "Hidalgo", "México"],
  openGraph: {
    title: "NOVU Marketing — Agencia de Marketing Digital",
    description: "Redes sociales, contenido, ads y sitios web. Resultados medibles, sin humo. Pide tu auditoría gratuita.",
    type: "website",
    locale: "es_MX",
    url: "https://novu-web-ten.vercel.app",
    siteName: "NOVU Marketing",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "NOVU Marketing — Agencia de Marketing Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NOVU Marketing — Agencia de Marketing Digital",
    description: "Redes sociales, contenido, ads y sitios web. Resultados medibles, sin humo.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Nav />
        {children}
        <Footer />
        <WhatsApp />
      </body>
    </html>
  );
}
