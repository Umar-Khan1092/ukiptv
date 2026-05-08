"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "📺 What is IPTV and how does it work?",
    answer: "IPTV (Internet Protocol Television) streams TV content over the internet instead of satellite or cable. You only need a stable internet connection and a compatible device to start watching. It gives you instant access to live TV channels, movies, and series in high quality."
  },
  {
    question: "📱 What devices are compatible with your service?",
    answer: "Our IPTV service works on a wide range of devices including Smart TVs, Android and iOS devices, Firestick, MAG boxes, and Enigma2. You can easily install it using our step-by-step setup guides. No special hardware is required."
  },
  {
    question: "🔒 Do I need a VPN to use your service?",
    answer: "A VPN is not required, but it is recommended for extra privacy and secure streaming. Some users prefer using a VPN for additional protection and smoother access. However, our service is fully stable even without it."
  },
  {
    question: "⚡ How quickly will I receive my subscription details?",
    answer: "Your IPTV login details are usually delivered within a few minutes after payment. In rare cases, it may take up to 15–30 minutes. Everything is sent directly to your email for instant setup."
  },
  {
    question: "📺 Can I use my subscription on multiple devices?",
    answer: "Yes, depending on your subscription plan, you can use IPTV on more than one device. Some plans are single-device, while others support multi-device usage. You can always upgrade if you need more connections."
  },
  {
    question: "🌐 What internet speed do I need?",
    answer: "For smooth streaming, we recommend at least 15 Mbps for HD and 25 Mbps for 4K content. Higher speeds ensure better performance and no buffering. A stable connection is more important than very high speed."
  },
  {
    question: "🎁 Do you offer a free trial?",
    answer: "Yes, we may offer a short trial for new users depending on availability. This allows you to test the service before purchasing a full subscription. Contact support to check trial availability."
  },
  {
    question: "💬 How do I get support if I have issues?",
    answer: "Our support team is available 24/7 via WhatsApp, live chat, and email. We respond quickly to help with setup, login, or technical issues. Most problems are resolved within minutes."
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
