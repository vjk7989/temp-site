import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { baseUrl } from "@/lib/site-data";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap"
});

const title = "Hyper-Ox by Buckleson | AI Trust and Execution Layer";
const description =
  "Hyper-Ox controls, abstracts, and verifies enterprise AI execution with routing, privacy-preserving data abstraction, and cryptographic audit trails.";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: title,
    template: "%s | Hyper-Ox by Buckleson"
  },
  description,
  applicationName: "Hyper-Ox",
  alternates: {
    canonical: "/"
  },
  keywords: [
    "Hyper-Ox",
    "Buckleson",
    "AI security",
    "AI agents",
    "cryptographic audit trails",
    "privacy preserving AI",
    "quantum proof cryptography",
    "enterprise AI infrastructure"
  ],
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Hyper-Ox by Buckleson",
    type: "website"
  },
  twitter: {
    card: "summary",
    title,
    description
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}
