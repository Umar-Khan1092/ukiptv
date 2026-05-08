"use client";

import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "MONTH",
    duration: "per month",
    price: "15",
    features: [
      { icon: "📺", text: "28K+ Live Channels" },
      { icon: "🎬", text: "100K+ Movies & Series" },
      { icon: "🖥️", text: "4K / FHD / HD Quality" },
      { icon: "⚽", text: "Sports & PPV" },
      { icon: "❄️", text: "Anti-Freeze Tech" },
      { icon: "📱", text: "All Devices" },
      { icon: "📅", text: "EPG & Catch-Up" },
      { icon: "💬", text: "24/7 Support" },
    ],
    popular: false,
  },
  {
    name: "3 MONTHS",
    duration: "every 3 months",
    price: "35",
    features: [
      { icon: "📺", text: "28K+ Live Channels" },
      { icon: "🎬", text: "100K+ Movies & Series" },
      { icon: "🖥️", text: "4K / FHD / HD Quality" },
      { icon: "⚽", text: "Sports & PPV" },
      { icon: "❄️", text: "Anti-Freeze Tech" },
      { icon: "📱", text: "All Devices" },
      { icon: "📅", text: "EPG & Catch-Up" },
      { icon: "💬", text: "24/7 Support" },
    ],
    popular: false,
  },
  {
    name: "12 MONTHS",
    duration: "per year",
    price: "65",
    features: [
      { icon: "📺", text: "28K+ Live Channels" },
      { icon: "🎬", text: "100K+ Movies & Series" },
      { icon: "🖥️", text: "4K / FHD / HD Quality" },
      { icon: "⚽", text: "Sports & PPV" },
      { icon: "❄️", text: "Anti-Freeze Tech" },
      { icon: "📱", text: "All Devices" },
      { icon: "📅", text: "EPG & Catch-Up" },
      { icon: "💬", text: "24/7 Support" },
    ],
    popular: true,
  },
  {
    name: "6 MONTHS",
    duration: "every six months",
    price: "45",
    features: [
      { icon: "📺", text: "28K+ Live Channels" },
      { icon: "🎬", text: "100K+ Movies & Series" },
      { icon: "🖥️", text: "4K / FHD / HD Quality" },
      { icon: "⚽", text: "Sports & PPV" },
      { icon: "❄️", text: "Anti-Freeze Tech" },
      { icon: "📱", text: "All Devices" },
      { icon: "📅", text: "EPG & Catch-Up" },
      { icon: "💬", text: "24/7 Support" },
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">Flexible <span className="text-blue-500">Subscription</span> Plans</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Get the best entertainment experience with our premium IPTV service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={cn(
                "relative p-8 rounded-xl flex flex-col transition-all duration-300 bg-[#0a0f1d]",
                plan.popular 
                  ? "border-2 border-blue-500 scale-100 z-10" 
                  : "border border-slate-800"
              )}
            >
              <div className="text-center mb-10">
                <h3 className="text-lg font-bold text-slate-300 mb-2 tracking-widest">{plan.name}</h3>
                <div className="flex justify-center items-start gap-0.5">
                  <span className="text-5xl font-extrabold text-white">£{plan.price}</span>
                </div>
                <p className="text-slate-400 text-sm mt-2">{plan.duration}</p>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span className="text-lg">{feature.icon}</span>
                    <span className="text-slate-300">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <Link
                  href={`https://wa.me/447988579524?text=Hi, I would like to subscribe to the ${plan.name} plan.`}
                  target="_blank"
                  className={cn(
                    "block w-full py-4 rounded-xl font-bold text-center uppercase tracking-widest transition-all",
                    plan.popular 
                      ? "bg-[#00a3ff] text-black hover:bg-[#0082cc]" 
                      : "bg-[#161b2c] text-white hover:bg-[#1e253a]"
                  )}
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
