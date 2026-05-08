import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "metadata";

export const metadata: Metadata = {
  title: "Refund Policy - IPTV UK",
  description: "Read our refund policy to understand our terms for cancellations and refunds at IPTV UK.",
};

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-slate-900/50 border-b border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Refund Policy</h1>
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
              We strive to provide high-quality IPTV services and ensure customer satisfaction. Please read our refund policy carefully before making a purchase.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">1. General Policy</h2>
            <p>
              Due to the nature of digital services, all purchases are generally non-refundable once the service has been activated. However, we may offer refunds under specific conditions outlined below.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">2. Eligibility for Refunds</h2>
            <p>You may be eligible for a refund if:</p>
            <ul>
              <li>The service is not delivered after purchase</li>
              <li>You are unable to access the service due to a technical issue from our side</li>
              <li>The issue is reported within 24–48 hours of purchase</li>
              <li>Our support team is unable to resolve your issue</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">3. Non-Refundable Situations</h2>
            <p>Refunds will not be issued in the following cases:</p>
            <ul>
              <li>Change of mind after purchase</li>
              <li>Incorrect device setup or lack of technical knowledge</li>
              <li>Poor internet connection on the user’s side</li>
              <li>Service interruption due to third-party providers</li>
              <li>Violation of our Terms & Conditions</li>
              <li>Requests made after the allowed refund period</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">4. Free Trial / Test Option</h2>
            <p>
              We recommend users try our trial service (if available) before purchasing a full subscription. This helps ensure compatibility with your device and satisfaction with our service.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">5. Refund Process</h2>
            <p>To request a refund:</p>
            <ol>
              <li>Contact our support team within the eligible time</li>
              <li>Provide your order details and issue description</li>
              <li>Allow our team time to investigate and resolve the issue</li>
            </ol>
            <p>If approved, refunds will be processed within 5–10 business days.</p>

            <h2 className="text-2xl font-bold mt-12 mb-6">6. Payment Method</h2>
            <p>
              Refunds will be issued using the original payment method whenever possible. Processing time may vary depending on your payment provider.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">7. Service Termination</h2>
            <p>If a refund is issued, your IPTV subscription will be immediately terminated.</p>

            <h2 className="text-2xl font-bold mt-12 mb-6">8. Changes to This Policy</h2>
            <p>
              We reserve the right to modify this Refund Policy at any time. Updates will be posted on this page with a revised effective date.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">9. Contact Us</h2>
            <p>If you have any questions regarding our Refund Policy, please contact us:</p>
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
