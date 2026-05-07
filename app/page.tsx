"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import Tutorials from "@/components/Tutorials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      
      {/* Quick Trust Section */}
      <section className="py-12 border-y border-white/5 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2 font-bold text-slate-300">4K ULTRA HD</div>
            <div className="flex items-center gap-2 font-bold text-slate-300">ANTI-FREEZE</div>
            <div className="flex items-center gap-2 font-bold text-slate-300">INSTANT SETUP</div>
            <div className="flex items-center gap-2 font-bold text-slate-300">NO CONTRACTS</div>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Premium Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                Everything You Get With <br />
                <span className="text-blue-500">Our IPTV Service</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "30,000+ Live TV Channels",
                  "200,000+ Movies & Series",
                  "Instant Automated Delivery",
                  "Supports All Devices",
                  "Advanced Security & Encryption",
                  "Anti-Freeze Technology",
                  "Worldwide Content Access",
                  "Live Sports & PPV Events",
                  "Daily Content Updates",
                  "Money-Back Guarantee",
                  "No ISP Blocking",
                  "User-Friendly Setup"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <CheckCircle2 size={20} className="text-blue-500 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
               <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10">
                 <div className="aspect-video bg-slate-900 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/40">
                         <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                      </div>
                      <h4 className="text-white font-bold text-xl mb-2">Premium 4K Streaming</h4>
                      <p className="text-slate-400">Optimized for stability and quality</p>
                    </div>
                 </div>
               </div>
               {/* Decorative elements */}
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 blur-[80px] rounded-full" />
               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 blur-[80px] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      <Pricing />
      <Tutorials />
      <FAQ />
      
      {/* Final CTA */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Start Your Streaming Journey?</h2>
          <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
            Join thousands of satisfied customers in the UK and worldwide. Get instant access to premium content today.
          </p>
          <Link href="https://wa.me/447988579524" target="_blank" className="bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl">
            Get Your Subscription Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

