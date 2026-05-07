"use client";

import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    duration: "1 Month",
    price: "15",
    features: ["Instant Activation", "Full EPG Support", "Anti-Freeze Technology", "Free VPN Included", "All UK & Int Channels"],
    popular: false,
  },
  {
    name: "Value",
    duration: "3 Months",
    price: "35",
    features: ["Instant Activation", "Full EPG Support", "Anti-Freeze Technology", "Free VPN Included", "Multi-Device Support"],
    popular: false,
  },
  {
    name: "Best Seller",
    duration: "6 Months",
    price: "45",
    features: ["Instant Activation", "Full EPG Support", "Anti-Freeze Technology", "Free VPN Included", "Premium Sports & PPV"],
    popular: true,
  },
  {
    name: "Premium",
    duration: "12 Months",
    price: "65",
    features: ["Instant Activation", "Full EPG Support", "Anti-Freeze Technology", "Free VPN Included", "VIP Support Support"],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Choose Your <span className="text-blue-500">Subscription</span> Plan</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Experience the future of streaming with our flexible plans. No contracts, no auto-billing, just premium entertainment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={cn(
                "relative p-8 rounded-3xl flex flex-col transition-all duration-300",
                plan.popular 
                  ? "bg-slate-900 border-2 border-blue-500 scale-105 z-10 shadow-2xl shadow-blue-500/10" 
                  : "bg-slate-900/50 border border-slate-800 hover:border-slate-700"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-6">{plan.duration}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">£{plan.price}</span>
                  <span className="text-slate-400">/period</span>
                </div>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                    <Check size={18} className="text-blue-500 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href={`https://wa.me/447988579524?text=Hi, I would like to subscribe to the ${plan.duration} plan.`}
                target="_blank"
                className={cn(
                  "w-full py-4 rounded-xl font-bold text-center transition-all",
                  plan.popular ? "btn-primary" : "bg-white/5 hover:bg-white/10 text-white"
                )}
              >
                Get Subscription
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-slate-500 text-sm">
          * 30-day money-back guarantee. Try our service risk-free.
        </div>
      </div>
    </section>
  );
}
