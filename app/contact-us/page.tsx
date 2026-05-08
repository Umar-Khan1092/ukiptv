import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageSquare, Mail, Shield, Zap } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact Us - IPTV UK",
  description: "Get in touch with our 24/7 support team. We're here to help with your IPTV subscription and setup.",
};

export default function ContactPage() {
  return (
    <main className="pt-20 bg-slate-950 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">Get In <span className="text-blue-500">Touch</span></h1>
          <p className="text-slate-400 text-lg mb-16">
            Have questions? Our support team is available 24/7 to assist you. Most inquiries are answered within minutes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link 
              href="https://wa.me/447988579524" 
              target="_blank"
              className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500 transition-all group text-left"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">WhatsApp Support</h3>
              <p className="text-slate-400 mb-6">Instant support for sales and technical setup.</p>
              <span className="text-blue-500 font-bold">Chat Now →</span>
            </Link>

            <Link 
              href="mailto:support@ukiptv.sbs" 
              className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500 transition-all group text-left"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Email Support</h3>
              <p className="text-slate-400 mb-6">For detailed inquiries and partnership requests.</p>
              <span className="text-blue-500 font-bold">Email Us →</span>
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 text-left bg-slate-900/50 p-10 rounded-3xl border border-slate-800">
            <div className="flex gap-4">
              <Zap className="text-blue-500 shrink-0" size={24} />
              <div>
                <h4 className="text-white font-bold mb-2">Fast Response</h4>
                <p className="text-slate-400 text-sm">We value your time. Our average response time is under 15 minutes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Shield className="text-blue-500 shrink-0" size={24} />
              <div>
                <h4 className="text-white font-bold mb-2">Technical Expertise</h4>
                <p className="text-slate-400 text-sm">Our team consists of experts who can guide you through any device setup.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
