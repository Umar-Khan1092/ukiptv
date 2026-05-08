"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Mail, Shield, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="IPTV UK Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              The #1 UK IPTV service provider delivering ultra-fast 4K & 8K streaming with zero buffering. Experience entertainment without limits.
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://wa.me/447988579524" target="_blank" aria-label="Chat on WhatsApp" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <MessageSquare size={18} className="text-white" />
              </Link>
              <Link href="mailto:support@ukiptv.sbs" aria-label="Send us an Email" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Mail size={18} className="text-white" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Menu</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-slate-400 hover:text-blue-500 transition-colors text-sm">Home</Link></li>
              <li><Link href="/#pricing" className="text-slate-400 hover:text-blue-500 transition-colors text-sm">Pricing</Link></li>
              <li><Link href="/installation-guide" className="text-slate-400 hover:text-blue-500 transition-colors text-sm">Installation Guide</Link></li>
              <li><Link href="/faq" className="text-slate-400 hover:text-blue-500 transition-colors text-sm">FAQ</Link></li>
              <li><Link href="/blog" className="text-slate-400 hover:text-blue-500 transition-colors text-sm">Blog</Link></li>
              <li><Link href="/about-us" className="text-slate-400 hover:text-blue-500 transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact-us" className="text-slate-400 hover:text-blue-500 transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Legal</h3>
            <ul className="space-y-4">
              {["Privacy Policy", "Refund Policy", "Terms of Service", "DMCA Policy"].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(/\s+/g, "-")}`} className="text-slate-400 hover:text-blue-500 transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust Indicators */}
          <div className="space-y-6">
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Payment Methods</h3>
            <div className="flex flex-wrap gap-3">
              <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-400">VISA</div>
              <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-400">MASTERCARD</div>
              <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-400">PAYPAL</div>
              <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-400">CRYPTO</div>
            </div>
            <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10">
              <div className="flex items-center gap-3 text-white font-semibold text-sm mb-2">
                <Shield size={18} className="text-blue-500" />
                Secure Checkout
              </div>
              <p className="text-[11px] text-slate-400">
                Your data is encrypted and protected with industry-standard 256-bit SSL technology.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} IPTV UK. All rights reserved. Built for speed and reliability.
          </p>
          <div className="flex items-center gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <Globe size={12} />
              Server Status: Online
            </span>
            <span className="flex items-center gap-2">
              <Shield size={12} />
              VPN: Active
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
