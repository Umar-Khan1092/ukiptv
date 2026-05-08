import React from "react";
import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Frequently Asked Questions - IPTV UK",
  description: "Find answers to common questions about our IPTV service, compatibility, setup, and support.",
};

export default function FAQPage() {
  return (
    <main className="pt-20">
      <Navbar />
      <div className="bg-slate-950 min-h-screen">
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
