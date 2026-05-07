"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PlayCircle, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
            The Future of Television
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            #1 UK IPTV Service – <br />
            <span className="text-gradient">Ultra-Fast 4K & 8K</span> Streaming
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
            Experience the ultimate UK IPTV service with blazing-fast 4K and 8K streaming, zero buffering, and instant activation. Access thousands of live UK and worldwide channels on any device.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="https://wa.me/447988579524" target="_blank" className="btn-primary text-lg px-10 py-4 w-full sm:w-auto flex items-center justify-center gap-2">
              <PlayCircle size={22} />
              Get Your Subscription
            </Link>
            <Link href="#pricing" className="px-10 py-4 text-white font-semibold border border-white/20 rounded-full hover:bg-white/10 transition-all w-full sm:w-auto">
              View Plans
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <Zap className="text-blue-400" />, text: "Instant Activation" },
              { icon: <ShieldCheck className="text-blue-400" />, text: "Built-in VPN" },
              { icon: <PlayCircle className="text-blue-400" />, text: "No Contracts" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                {item.icon}
                <span className="text-white font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-1 h-10 rounded-full bg-gradient-to-b from-blue-500 to-transparent opacity-50" />
      </div>
    </section>
  );
}
