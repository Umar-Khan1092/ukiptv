import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Tv, Smartphone, Laptop, Tablet, Gamepad2, Monitor, Zap, Shield, Headset, MessageSquare, Info } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Installation Guide - Setup IPTV on Any Device",
  description: "Complete step-by-step setup guides for Firestick, Android, Smart TV, Apple, PC, and more. Start watching UKIPTV.sbs in minutes.",
};

export default function InstallationPage() {
  return (
    <main className="pt-20 bg-slate-950 min-h-screen">
      <Navbar />
      
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />
        
        <div className="container mx-auto px-6">
          {/* 3 Step Process */}
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 uppercase tracking-tight">How To Get Your <span className="text-blue-500">IPTV Subscription</span>?</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Choose Your Plan", emoji: "🛒", step: "1" },
                { title: "Receive Your Account", emoji: "📩", step: "2" },
                { title: "Start Watching Instantly", emoji: "📺", step: "3" }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col items-center">
                  <span className="text-5xl mb-6">{item.emoji}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{item.step}. {item.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Service Overview */}
          <div className="max-w-4xl mx-auto text-center mb-24">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">🚀 UKIPTV.sbs – The Ultimate 4K & 8K IPTV Experience in the UK</h2>
             <p className="text-2xl text-blue-500 font-bold mb-6">Premium IPTV Entertainment Without Limits</p>
             <p className="text-lg text-slate-300 leading-relaxed mb-8">
               Step into the future of television with UKIPTV.sbs, built for viewers who demand speed, quality, and reliability. Access 50,000+ live TV channels and a massive library of 200,000+ movies and TV series on demand—all in stunning HD, 4K, and even 8K quality. From live sports and blockbuster movies to international channels, everything you need is available in one powerful streaming platform.
             </p>
          </div>

          {/* Pricing Summary */}
          <div className="max-w-5xl mx-auto p-10 rounded-3xl bg-blue-600/5 border border-blue-500/20 mb-24">
            <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
              <span className="text-blue-500">💳</span> Affordable Plans – No Hidden Costs
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-10">
              {["1 Month – £15", "3 Months – £35", "6 Months – £45", "12 Months – £65"].map((price, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-white font-bold">{price}</div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-slate-300 font-semibold">
              <span className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-blue-500" /> Instant Activation</span>
              <span className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-blue-500" /> Full EPG Support</span>
              <span className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-blue-500" /> Anti-Freeze Technology</span>
              <span className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-blue-500" /> Free VPN Included</span>
            </div>
          </div>

          {/* Main Setup Guides */}
          <div className="max-w-5xl mx-auto mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4">🚀 IPTV Setup Tutorials</h2>
            <p className="text-slate-400 text-center mb-16 text-lg">Easy Installation Guide for All Devices. Most apps require either M3U URL or Xtream Codes (Username, Password, Server URL).</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Firestick / Fire TV", emoji: "🔥", steps: ["Install Downloader from App Store", "Enable Apps from Unknown Sources", "Enter APK URL (e.g. IPTV Smarters / Tivimate)", "Install & open app", "Enter your IPTV login details"] },
                { name: "Android (Phone / TV Box)", emoji: "📱", steps: ["Open Google Play Store", "Install IPTV Smarters / Tivimate / OTT Navigator", "Open app", "Add playlist via M3U or Xtream Codes"] },
                { name: "LG Smart TV", emoji: "📺", steps: ["Go to LG Content Store", "Install IPTV Smarters Player / Smart IPTV", "Open app", "Upload M3U via app website or enter Xtream Codes"] },
                { name: "Samsung Smart TV", emoji: "📺", steps: ["Open Smart Hub", "Install IPTV Smarters / Smart IPTV / IBO Player", "Add your playlist via MAC or login details"] },
                { name: "MAG Box", emoji: "📦", steps: ["Go to Settings > System > Servers > Portals", "Enter Portal URL provided", "Save & restart", "Channels will load automatically"] },
                { name: "Apple / iOS", emoji: "📺", steps: ["Download IPTV Smarters / GSE Smart IPTV", "Open app", "Add M3U or Xtream Codes", "Start streaming"] },
                { name: "Apple TV (iPlayTV)", emoji: "🍎", steps: ["Install iPlayTV from App Store", "Open app", "Add playlist URL", "Wait for channels to load"] },
                { name: "Chromecast", emoji: "📡", steps: ["Install IPTV app on phone", "Load channels", "Tap cast icon", "Stream to TV"] },
                { name: "Windows / PC (VLC)", emoji: "🎮", steps: ["Open VLC Media Player", "Go to Media > Open Network Stream", "Paste M3U URL", "Click Play"] },
                { name: "Kodi", emoji: "📺", steps: ["Open Kodi", "Go to Add-ons", "Install PVR IPTV Simple Client", "Enter M3U URL", "Restart Kodi"] },
                { name: "Tivimate", emoji: "📺", steps: ["Install Tivimate", "Add Playlist", "Enter M3U or Xtream Codes", "Load channels"] },
                { name: "IBO Player / Duplex", emoji: "📺", steps: ["Install app", "Get Device ID & Key", "Upload M3U via app portal", "Restart app"] },
              ].map((device, i) => (
                <div key={i} className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-2xl">{device.emoji}</span> {device.name}
                  </h3>
                  <ul className="space-y-3">
                    {device.steps.map((step, idx) => (
                      <li key={idx} className="flex gap-3 text-slate-400 text-sm">
                        <span className="text-blue-500 font-bold">•</span> {step}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Quick List for other devices */}
            <div className="mt-12 p-8 rounded-3xl bg-slate-900 border border-slate-800">
               <h4 className="text-white font-bold mb-6 text-lg">Other Supported Apps:</h4>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-slate-400 text-sm">
                 <div className="flex items-center gap-2">• Smart IPTV / Net IPTV</div>
                 <div className="flex items-center gap-2">• OTT Navigator</div>
                 <div className="flex items-center gap-2">• GSE Smart IPTV</div>
                 <div className="flex items-center gap-2">• Perfect Player</div>
                 <div className="flex items-center gap-2">• Formuler Z7+ (MyTV Online)</div>
                 <div className="flex items-center gap-2">• Smart STB</div>
                 <div className="flex items-center gap-2">• IPTV Smarters Pro</div>
                 <div className="flex items-center gap-2">• My IPTV Player (Windows)</div>
               </div>
            </div>
          </div>

          {/* Important Tips */}
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-yellow-500/5 border border-yellow-500/20 mb-24 flex gap-6 items-start">
            <Info className="text-yellow-500 shrink-0" size={32} />
            <div>
              <h4 className="text-yellow-500 font-bold mb-4 text-xl">💡 Important Tips</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Always use stable internet (20+ Mbps recommended)</li>
                <li>• Use VPN if needed</li>
                <li>• Restart app if channels don’t load</li>
                <li>• Contact support if login fails</li>
              </ul>
            </div>
          </div>

          {/* Firestick Section */}
          <div className="max-w-5xl mx-auto mb-24 p-12 rounded-[40px] bg-slate-900 border border-blue-500/30">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">🚀 Best IPTV Provider for Firestick UK (2026 & Beyond)</h2>
              <p className="text-slate-400 text-lg">Enjoy a fully optimized IPTV experience designed specifically for Amazon Firestick and Fire TV users. Our service delivers smooth performance, fast navigation, and effortless setup.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">🔥 Optimized for Firestick Users</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Zap className="text-blue-500 shrink-0" size={24} />
                    <div>
                      <h4 className="text-white font-bold mb-1">Easy Installation</h4>
                      <p className="text-slate-400 text-sm">Get started in minutes with simple step-by-step setup guides for all Firestick models. No technical skills required.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Zap className="text-blue-500 shrink-0" size={24} />
                    <div>
                      <h4 className="text-white font-bold mb-1">Smooth & Fast Performance</h4>
                      <p className="text-slate-400 text-sm">Experience ultra-smooth streaming with quick channel switching, stable playback, and zero buffering optimization on Fire TV devices.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">📱 Compatible IPTV Apps</h3>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-500" size={18} /> IPTV Smarters Pro</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-500" size={18} /> TiviMate</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-500" size={18} /> OTT Navigator</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-500" size={18} /> Other popular IPTV players</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="max-w-5xl mx-auto mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">💬 24/7 Premium Customer Support</h2>
              <p className="text-slate-400 text-lg mb-8">We are committed to providing a reliable and stress-free IPTV experience with full customer assistance whenever you need it.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white font-semibold">
                  <Headset className="text-blue-500" size={20} /> 🕒 Always Available Support
                </div>
                <div className="flex items-center gap-3 text-white font-semibold">
                  <Zap className="text-blue-500" size={20} /> ⚡ Fast Response Time
                </div>
                <div className="flex items-center gap-3 text-white font-semibold">
                  <MessageSquare className="text-blue-500" size={20} /> 📚 Complete Setup Guidance
                </div>
              </div>
            </div>
            <div className="bg-blue-600/10 border border-blue-500/20 p-10 rounded-3xl text-center">
              <h3 className="text-2xl font-bold text-white mb-6">Need Help Setting Up?</h3>
              <p className="text-slate-400 mb-8">Our expert team is ready to guide you through the installation process on any device.</p>
              <Link href="https://wa.me/447988579524" target="_blank" className="btn-primary block w-full py-4 text-lg">
                Contact via WhatsApp
              </Link>
            </div>
          </div>

          {/* Why Prefer Us */}
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-10 underline decoration-blue-500 underline-offset-8">🌟 Why Firestick Users Prefer Us</h3>
            <div className="flex flex-wrap justify-center gap-4 text-slate-300 font-bold">
               <span className="px-6 py-2 rounded-full bg-slate-900 border border-slate-800">✔ Quick setup</span>
               <span className="px-6 py-2 rounded-full bg-slate-900 border border-slate-800">✔ Smooth HD/4K streaming</span>
               <span className="px-6 py-2 rounded-full bg-slate-900 border border-slate-800">✔ Reliable servers</span>
               <span className="px-6 py-2 rounded-full bg-slate-900 border border-slate-800">✔ Easy app compatibility</span>
               <span className="px-6 py-2 rounded-full bg-slate-900 border border-slate-800">✔ Dedicated support</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
