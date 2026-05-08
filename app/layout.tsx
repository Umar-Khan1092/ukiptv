import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ukiptv.sbs"),
  title: "#1 UK IPTV Service – Ultra-Fast 4K & 8K Streaming",
  description: "Experience the ultimate UK IPTV service with blazing-fast 4K/8K streaming, zero buffering, and instant activation. 30,000+ live channels and 200,000+ VOD content.",
  keywords: ["IPTV UK", "UK IPTV Service", "Best IPTV UK", "4K Streaming UK", "Live TV UK", "IPTV Subscription"],
  authors: [{ name: "IPTV UK" }],
  openGraph: {
    title: "#1 UK IPTV Service – Ultra-Fast 4K & 8K Streaming",
    description: "Experience the ultimate UK IPTV service with blazing-fast 4K/8K streaming. 30,000+ live channels.",
    url: "https://ukiptv.sbs",
    siteName: "IPTV UK",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IPTV UK Service",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "#1 UK IPTV Service",
    description: "Blazing-fast 4K/8K streaming, zero buffering, and instant activation.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://ukiptv.sbs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://wa.me" />
        <link rel="preconnect" href="https://www.transparenttextures.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://www.transparenttextures.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col font-sans`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
