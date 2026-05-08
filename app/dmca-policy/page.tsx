import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA Policy - IPTV UK",
  description: "Read our DMCA policy regarding copyright infringement claims and procedures at IPTV UK.",
};

export default function DMCAPolicy() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-slate-900/50 border-b border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">DMCA Policy</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Effective Date: May 7, 2026
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-invert prose-slate prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-white">
            <p className="text-lg mb-8 italic">
              Welcome to Best IPTV Subscription / UKIPTV.LTD.
            </p>
            <p>
              We respect the intellectual property rights of others and expect our users to do the same. In accordance with the Digital Millennium Copyright Act (DMCA), we respond promptly to valid copyright infringement claims.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">1. Copyright Infringement Notification</h2>
            <p>
              If you believe that your copyrighted work has been used or displayed on our website in a way that constitutes copyright infringement, please send us a written DMCA notice with the following details:
            </p>
            <ul>
              <li>Your full name and contact information (email address)</li>
              <li>Description of the copyrighted work</li>
              <li>The exact URL or location of the allegedly infringing content</li>
              <li>A statement of good faith belief that the use is unauthorized</li>
              <li>Your electronic or physical signature</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">2. How to Submit a DMCA Complaint</h2>
            <p>Please send your DMCA notice to:</p>
            <ul>
              <li>Email: support@ukiptv.sbs</li>
              <li>Subject Line: DMCA Takedown Request</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">3. Counter-Notification</h2>
            <p>
              If you believe that your content was removed by mistake or misidentification, you may submit a counter-notification including your name, contact details, and a statement under good faith that the content was removed in error.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">4. Repeat Infringers</h2>
            <p>
              We reserve the right to suspend or terminate accounts of users who repeatedly violate copyright laws.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">5. Contact Information</h2>
            <p>For all DMCA-related inquiries, contact us:</p>
            <ul>
              <li>Email: support@ukiptv.sbs</li>
              <li>Website: https://ukiptv.sbs</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
