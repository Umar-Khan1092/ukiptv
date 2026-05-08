import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog & News - IPTV UK",
  description: "Stay updated with the latest IPTV news, streaming tips, and entertainment updates.",
};

export default function BlogPage() {
  return (
    <main className="pt-20 bg-slate-950 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">Our <span className="text-blue-500">Blog</span></h1>
        <p className="text-slate-400 text-lg mb-16 max-w-2xl mx-auto">
          Coming soon! We are preparing high-quality content to keep you updated with the streaming world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-50 grayscale">
           {[1, 2, 3].map(i => (
             <div key={i} className="bg-slate-900 h-80 rounded-3xl border border-slate-800"></div>
           ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
