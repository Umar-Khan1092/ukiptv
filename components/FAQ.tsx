"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is IPTV and how does it work?",
    answer: "IPTV (Internet Protocol Television) streams TV content over the internet instead of satellite or cable. You only need a stable internet connection and a compatible device to start watching live TV channels, movies, and series instantly."
  },
  {
    question: "What devices are compatible with your service?",
    answer: "Our service works on almost all devices: Smart TVs (LG, Samsung, Android TV), Amazon Firestick, Android/iOS devices, MAG boxes, Enigma2, and PCs (Windows/Mac)."
  },
  {
    question: "Do I need a VPN to use your service?",
    answer: "A VPN is not required, but it is recommended for extra privacy. Our service is fully stable and works perfectly without a VPN on most networks."
  },
  {
    question: "How quickly will I receive my details?",
    answer: "Your IPTV login details are usually delivered within a few minutes after payment. In rare cases, it may take up to 15–30 minutes."
  },
  {
    question: "Can I use my subscription on multiple devices?",
    answer: "Yes, depending on your plan. We offer multi-device support on select plans. You can always contact support to upgrade your connections."
  },
  {
    question: "What internet speed do I need?",
    answer: "For smooth streaming, we recommend at least 15 Mbps for HD and 25 Mbps for 4K content. Stability is more important than raw speed."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Frequently Asked <span className="text-blue-500">Questions</span></h2>
            <p className="text-slate-400 text-lg">
              Everything you need to know about our IPTV service. Can&apos;t find the answer? Contact our 24/7 support.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={cn(
                  "rounded-2xl border transition-all overflow-hidden",
                  openIndex === i ? "border-blue-500 bg-slate-900" : "border-slate-800 bg-slate-900/50 hover:bg-slate-900"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  {openIndex === i ? (
                    <ChevronUp className="text-blue-500" />
                  ) : (
                    <ChevronDown className="text-slate-500" />
                  )}
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-6 text-slate-400 leading-relaxed animate-in fade-in slide-in-from-top-2">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
