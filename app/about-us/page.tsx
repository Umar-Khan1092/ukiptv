import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Shield, Globe, Zap, Tv, PlayCircle, Heart, Lock, Headset, Star } from "lucide-react";

export const metadata = {
  title: "About Us - Best IPTV UK Service",
  description: "Experience the power of premium IPTV with stunning 4K & Ultra HD streaming quality. Join the #1 UK IPTV service today.",
};

export default function AboutPage() {
  return (
    <main className="pt-20 bg-slate-950 min-h-screen">
      <Navbar />
      
      {/* Hero Section for About Us */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />
        
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              🚀 Best IPTV UK Service – <br />
              <span className="text-blue-500">Your Ultimate Streaming Solution</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Experience the power of premium IPTV with stunning 4K & Ultra HD streaming quality. Enjoy access to top UK and international TV channels, including all major sports networks, movies, and entertainment—delivered with speed and reliability.
            </p>
            <div className="inline-block p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold">
              🛡️ We offer a 30-day money-back guarantee, so you can try our service risk-free with complete peace of mind.
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {[
              { icon: <Tv />, text: "Full Access to PPV Events", emoji: "🎟️" },
              { icon: <Globe />, text: "Global Coverage (Europe, Asia, Africa, America)", emoji: "🌍" },
              { icon: <Shield />, text: "Built-in VPN for Secure Streaming", emoji: "🔒" },
              { icon: <PlayCircle />, text: "Weekly Updates for Movies & TV Series (VOD)", emoji: "🎬" },
              { icon: <Heart />, text: "Request Your Favourite Content Anytime", emoji: "📩" },
              { icon: <Lock />, text: "Optional Adult Channels (Can Be Disabled)", emoji: "🔞" },
              { icon: <Headset />, text: "24/7 Customer Support", emoji: "💬" },
              { icon: <Zap />, text: "Compatible with All Devices", emoji: "📱" },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500 transition-all flex items-center gap-4">
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-slate-200 font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Worth It Section */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16">
              🔥 What Makes Our <span className="text-blue-500">IPTV Worth It?</span>
            </h2>

            <div className="space-y-8">
              {[
                {
                  title: "Smooth Streaming – No Buffering",
                  desc: "Never miss a key moment again. Our high-performance servers deliver stable, lag-free streaming, even during peak hours and live events."
                },
                {
                  title: "Ultra HD, 4K & 8K Quality",
                  desc: "Enjoy stunning picture clarity across all channels, movies, and sports. Experience entertainment the way it’s meant to be—sharp, smooth, and immersive."
                },
                {
                  title: "Premium UK & Sports Channels",
                  desc: "Access top UK channels, live sports, and exclusive content that many basic IPTV providers simply don’t offer."
                },
                {
                  title: "24/7 Dedicated Customer Support",
                  desc: "Get real help when you need it. Our support team is available around the clock to assist with setup, issues, or questions—no bots, no delays."
                },
                {
                  title: "Secure & Reliable Service",
                  desc: "Your privacy matters. Our advanced infrastructure ensures safe, stable, and protected streaming at all times."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:bg-slate-900 transition-all">
                  <CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">✅ {item.title}</h3>
                    <p className="text-slate-400 text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Conclusion */}
          <div className="mt-24 max-w-4xl mx-auto p-12 rounded-[40px] bg-gradient-to-br from-blue-600/20 to-purple-600/5 border border-blue-500/20 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-500/20 mb-8">
              <Star className="text-blue-500" size={40} fill="currentColor" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">💡 Quality You Can Trust</h2>
            <p className="text-xl text-slate-300 leading-relaxed italic">
              "Cheap IPTV often means buffering, missing channels, and no support. Our service is designed for users who want consistent performance, premium quality, and peace of mind—every time they stream."
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
