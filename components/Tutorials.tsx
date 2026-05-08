"use client";

import React, { useState } from "react";
import { Search, ChevronDown, Monitor, Smartphone, Tv, Laptop, Gamepad2 } from "lucide-react";
import { cn } from "@/lib/utils";

const guides = [
  {
    id: "firestick",
    name: "Firestick / Fire TV",
    icon: Gamepad2,
    steps: [
      "Install Downloader from App Store",
      "Enable Apps from Unknown Sources in Settings",
      "Enter APK URL (e.g. IPTV Smarters / Tivimate)",
      "Install and open the app",
      "Enter your IPTV login details provided"
    ]
  },
  {
    id: "android",
    name: "Android (Phone/Box)",
    icon: Smartphone,
    steps: [
      "Open Google Play Store",
      "Install IPTV Smarters / Tivimate / OTT Navigator",
      "Open the app",
      "Add playlist via M3U URL or Xtream Codes"
    ]
  },
  {
    id: "smart-tv",
    name: "Smart TV (LG/Samsung)",
    icon: Tv,
    steps: [
      "Open your TV's App Store (LG Content Store / Smart Hub)",
      "Search and install 'IPTV Smarters' or 'Smart IPTV'",
      "Open the app and note the MAC address if required",
      "Enter your login details or upload M3U via the app website"
    ]
  },
  {
    id: "apple",
    name: "Apple / iOS",
    icon: Monitor,
    steps: [
      "Download IPTV Smarters or GSE Smart IPTV from App Store",
      "Open the app",
      "Add M3U or Xtream Codes details",
      "Start streaming instantly"
    ]
  },
  {
    id: "pc",
    name: "Windows / PC",
    icon: Laptop,
    steps: [
      "Download and install VLC Media Player",
      "Go to Media > Open Network Stream",
      "Paste your M3U URL",
      "Click Play and enjoy"
    ]
  }
];

export default function Tutorials() {
  const [activeId, setActiveId] = useState("firestick");

  return (
    <section id="tutorials" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Easy <span className="text-blue-500">Installation</span> Guide</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Follow these simple steps to set up your IPTV service on any device. Start watching in minutes.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          {/* Sidebar Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-2">
            {guides.map((guide) => (
              <button
                key={guide.id}
                onClick={() => setActiveId(guide.id)}
                className={cn(
                  "flex items-center gap-4 p-5 rounded-2xl text-left transition-all",
                  activeId === guide.id 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" 
                    : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                )}
              >
                <span className={cn(activeId === guide.id ? "text-white" : "text-blue-500")}>
                  <guide.icon size={24} />
                </span>
                <span className="font-semibold">{guide.name}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3 glass p-8 md:p-12 rounded-3xl min-h-[400px]">
            {guides.map((guide) => (
              activeId === guide.id && (
                <div key={guide.id} className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    How to setup on {guide.name}
                  </h3>
                  <div className="space-y-6">
                    {guide.steps.map((step, index) => (
                      <div key={index} className="flex gap-5">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 font-bold text-sm">
                          {index + 1}
                        </div>
                        <p className="text-slate-300 text-lg pt-0.5">{step}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-12 p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10 text-sm text-slate-400 italic">
                    💡 <strong>Pro Tip:</strong> Always use a stable internet connection (20+ Mbps) for the best 4K experience. Need help? Our 24/7 support is one click away.
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
