import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { googleSiteVerification, siteUrl } from "@/lib/site";
import { websiteSchema } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Print Layout Toolkit",
    template: "%s | Print Layout Toolkit",
  },
  description:
    "Free browser-based print helpers for paper sizes, DPI, images, booklets, posters, margins, and more.",
  openGraph: {
    title: "Print Layout Toolkit",
    description:
      "Free browser-based print helpers for paper sizes, DPI, images, booklets, posters, margins, and more.",
    url: siteUrl,
    siteName: "Print Layout Toolkit",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Print Layout Toolkit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Print Layout Toolkit",
    description:
      "Free browser-based print helpers for paper sizes, DPI, images, booklets, posters, margins, and more.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: googleSiteVerification
    ? {
        google: googleSiteVerification,
      }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-slate-50 text-slate-900">
        <JsonLd data={websiteSchema()} />
        <AnalyticsScripts />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
