"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tv, Wind, Zap, Shield, FileX, Headset } from "lucide-react";

const features = [
  {
    title: "Ultra HD 4K & 8K Quality",
    description: "Enjoy unmatched clarity with SD, HD, Full HD, 4K, and 8K streaming for the best viewing experience.",
    icon: <Tv className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Zero Buffering Experience",
    description: "Our high-speed, anti-freeze servers ensure smooth streaming with 99.9% uptime—even during live events.",
    icon: <Wind className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Instant Activation",
    description: "Get your login details instantly after purchase and start watching within seconds.",
    icon: <Zap className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Built-in VPN & Privacy",
    description: "Stay secure with integrated VPN and anti-block technology for safe, unrestricted streaming.",
    icon: <Shield className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "No Contracts & No Auto Billing",
    description: "Pay only for what you need. No subscriptions, no automatic charges, full control.",
    icon: <FileX className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "24/7 Dedicated Support",
    description: "Our expert support team is always available to help with setup, issues, and guidance.",
    icon: <Headset className="w-8 h-8 text-blue-500" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-blue-500">IPTV UK</span>?
          </h2>
          <p className="text-slate-400 text-lg">
            We know our customers value quality, reliability, and real support—that’s exactly what we deliver. Built for users who expect a premium experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all text-left group"
            >
              <div className="bg-blue-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
