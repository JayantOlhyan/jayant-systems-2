import type { Metadata } from "next";
import { Geist, Inter, Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const ibmMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jayant Web & AI Systems | Elite AI, Automation & Software Design",
  description: "I build intelligent digital systems, custom business software, high-converting websites, WhatsApp automation, CRM integrations, and custom dashboards for startups and professional services.",
  metadataBase: new URL("https://jayant-systems.online"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#FF5A00",
      },
    ],
  },
  authors: [{ name: "Jayant Olhyan" }],
  applicationName: "Jayant Web & AI Systems",
  appleWebApp: {
    title: "Jayant Web & AI Systems",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    "msapplication-TileColor": "#0B0A08",
  },
  robots: "index,follow",
  openGraph: {
    title: "Jayant Web & AI Systems | Intelligent Software & AI Automation",
    description: "Designing and engineering custom software, AI workflows, WhatsApp chatbots, and bespoke websites that scale business operations.",
    url: "https://jayant-systems-2.netlify.app",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayant Web & AI Systems",
    description: "Intelligent software, custom AI systems, modern business websites, and automated workflows.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Jayant Web & AI Systems",
    "url": "https://jayant-systems.online",
    "logo": "https://jayant-systems.online/logo.png",
    "sameAs": [
      "https://github.com/JayantOlhyan",
      "https://linkedin.com/company/jayant-systems",
      "https://www.instagram.com/jayantolhyan/",
      "https://www.youtube.com/@JayantWebAISystems",
      "https://x.com/JayantSystems"
    ],
    "email": "jayantwebaisystems@gmail.com",
    "telephone": "+919667344125"
  };

  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <head></head>
      <body
        className={`${geist.variable} ${inter.variable} ${instrumentSerif.variable} ${ibmMono.variable} min-h-full bg-bg-base text-text-base flex flex-col justify-between selection:bg-primary/20 selection:text-primary transition-colors duration-300 antialiased`}
      >
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScrollProvider>
          <CustomCursor />
          <Navbar />
          <div id="main-content" className="flex-1 w-full pt-16">
            <Breadcrumbs />
            {children}
          </div>
          <FloatingWhatsApp />
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
