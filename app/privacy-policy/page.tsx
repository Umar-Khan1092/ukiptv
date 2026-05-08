import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - IPTV UK",
  description: "Read our privacy policy to understand how we collect, use, and protect your personal information at IPTV UK.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-20 bg-slate-900/50 border-b border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Your privacy is very important to us. Learn how we handle your data with care and transparency.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-invert prose-slate prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-white">
            <p className="text-lg mb-8 italic">
              Welcome to Best IPTV Subscription / UKIPTV.LTD.
            </p>
            <p>
              Your privacy is very important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or purchase our services.
            </p>
            <p className="mb-12">
              By using our website, you agree to the terms outlined in this policy.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">1.1 Personal Information</h3>
            <p>We may collect the following details when you interact with our website:</p>
            <ul>
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Payment Information (processed securely via third-party providers)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">1.2 Automatically Collected Data</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP Address</li>
              <li>Browser type and version</li>
              <li>Device type</li>
              <li>Operating system</li>
              <li>Pages visited and time spent</li>
              <li>Referral source</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">1.3 Communication Data</h3>
            <p>We may collect information when you contact us, including:</p>
            <ul>
              <li>Support messages</li>
              <li>Email correspondence</li>
              <li>Feedback or inquiries</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Process and deliver your IPTV subscription</li>
              <li>Provide customer support</li>
              <li>Send service updates and important notifications</li>
              <li>Improve website performance and user experience</li>
              <li>Prevent fraud and ensure security</li>
              <li>Comply with legal requirements</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">3. Cookies & Tracking Technologies</h2>
            <p>We use cookies to:</p>
            <ul>
              <li>Enhance your browsing experience</li>
              <li>Understand user behavior</li>
              <li>Improve website functionality</li>
            </ul>
            <p>You can disable cookies anytime through your browser settings.</p>

            <h2 className="text-2xl font-bold mt-12 mb-6">4. How We Share Your Information</h2>
            <p>We respect your privacy and do not sell your data. However, we may share your information with:</p>
            <ul>
              <li>Trusted Service Providers (payment processors, hosting providers)</li>
              <li>Legal Authorities (if required by law)</li>
              <li>Business Transfers (in case of merger or sale)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">5. Data Retention</h2>
            <p>We only keep your personal data for as long as necessary to:</p>
            <ul>
              <li>Provide our services</li>
              <li>Meet legal obligations</li>
              <li>Resolve disputes</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">6. Your Rights</h2>
            <p>You have full control over your data. You can:</p>
            <ul>
              <li>Request access to your data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Object to marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>To exercise these rights, contact us below.</p>

            <h2 className="text-2xl font-bold mt-12 mb-6">7. Data Security</h2>
            <p>
              We use industry-standard security measures to protect your data. However, no online system is 100% secure, so we cannot guarantee absolute protection.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for their privacy practices.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">9. Children’s Privacy</h2>
            <p>
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect data from children.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. All changes will be posted on this page with an updated effective date.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">11. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, you can contact us:</p>
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
