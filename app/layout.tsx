import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { JsonLd, organizationSchema, websiteSchema } from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flyairlogistics.com"),
  title: {
    default: "FLY AIR LOGISTICS | International Freight Forwarders Pakistan",
    template: "%s | FLY AIR LOGISTICS",
  },
  description:
    "Moving Your Cargo Worldwide from Pakistan Since 2012 (Roots from 1980s). International air freight, sea freight, dry ports drayage, and customs clearance connecting Karachi, Lahore, and Islamabad to 150+ countries.",
  keywords: [
    "Freight Forwarder Pakistan",
    "Air Cargo Lahore",
    "Sea Freight Karachi",
    "Customs Clearance Pakistan",
    "WeBOC Broker",
    "PSW Agent",
    "LCL Consolidation",
    "Door to Door Cargo Pakistan",
    "Fly Air Logistics",
    "Brandreth Road Lahore Logistics",
  ],
  authors: [{ name: "FLY AIR LOGISTICS" }],
  creator: "FLY AIR LOGISTICS",
  publisher: "FLY AIR LOGISTICS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "FLY AIR LOGISTICS | International Freight Forwarders Pakistan",
    description:
      "Moving Your Cargo Worldwide from Pakistan Since 2012 (Roots from 1980s). Premier air and sea freight forwarders.",
    url: "https://flyairlogistics.com",
    siteName: "FLY AIR LOGISTICS",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "FLY AIR LOGISTICS - International Freight Forwarders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FLY AIR LOGISTICS | International Freight Forwarders",
    description:
      "Moving Your Cargo Worldwide from Pakistan Since 2012 (Roots from 1980s).",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

