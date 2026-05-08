import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - IPTV UK",
  description: "Read our terms of service to understand the rules and regulations for using IPTV UK services.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-slate-900/50 border-b border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
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
              By accessing or using our website and services, you agree to comply with and be bound by the following Terms of Service. If you do not agree with these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">1. Services Provided</h2>
            <p>
              We provide IPTV subscription services that allow users to access digital streaming content via supported devices. We do not guarantee the availability of specific channels or content at all times.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">2. User Responsibilities</h2>
            <p>By using our services, you agree:</p>
            <ul>
              <li>To provide accurate and complete information</li>
              <li>Not to share your account with others (unless allowed by your plan)</li>
              <li>Not to misuse, resell, or redistribute our services without permission</li>
              <li>To use the service in compliance with all applicable laws</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">3. Account & Access</h2>
            <ul>
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>We reserve the right to suspend or terminate accounts for misuse or violation of terms</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">4. Payments & Subscription</h2>
            <ul>
              <li>All subscriptions must be paid in advance</li>
              <li>Prices may change at any time without prior notice</li>
              <li>Failure to complete payment may result in service interruption</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">5. No Guarantee of Service</h2>
            <p>We strive to provide stable and high-quality service, but we do not guarantee:</p>
            <ul>
              <li>100% uptime</li>
              <li>Uninterrupted streaming</li>
              <li>Availability of all channels</li>
            </ul>
            <p>Service may be affected by internet issues, device compatibility, or third-party providers.</p>

            <h2 className="text-2xl font-bold mt-12 mb-6">6. Prohibited Activities</h2>
            <p>You agree NOT to:</p>
            <ul>
              <li>Copy, distribute, or modify our service</li>
              <li>Attempt to hack, damage, or overload our system</li>
              <li>Use the service for illegal purposes</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">7. Intellectual Property</h2>
            <p>
              All website content, branding, and materials are the property of Best IPTV Subscription / UKIPTV.LTD and may not be copied or reused without permission.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">8. Contact Us</h2>
            <p>If you have any questions regarding these Terms, please contact us:</p>
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
