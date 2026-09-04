import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pavii.tech"),
  title: "Hyper-Ox by Buckleson | One-stop AI Security",
  description:
    "Hyper-Ox is a trust, privacy, policy, and execution layer for enterprise AI systems.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Hyper-Ox by Buckleson | One-stop AI Security",
    description:
      "A one-stop AI security layer for private data access, controlled agent execution, and verifiable audit trails.",
    url: "/",
    siteName: "Hyper-Ox by Buckleson",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Hyper-Ox by Buckleson | One-stop AI Security",
    description:
      "Private, policy-controlled, and verifiable AI execution for enterprise systems."
  },
  robots: {
    index: true,
    follow: true
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
