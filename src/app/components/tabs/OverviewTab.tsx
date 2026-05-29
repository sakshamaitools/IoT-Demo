"use client";

import React from "react";
import {
  ShieldCheck,
  WifiOff,
  TrendingUp,
  Target,
  BrainCircuit,
  BarChart3,
  ChevronRight,
  Globe,
  Layers,
  ExternalLink,
  Cpu,
  FileText,
} from "lucide-react";

interface OverviewTabProps {
  openModal: (id: string) => void;
}

export default function OverviewTab({ openModal }: OverviewTabProps) {
  return (
    <div className="space-y-8 tab-enter">
      {/* KPI Tear Sheet */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 stagger">
        {[
          {
            label: "Funding Ask (Seed)",
            value: "₹3.0 Cr",
            sub: "Over 3 Milestone Tranches",
            subColor: "text-blue-400",
            Icon: BarChart3,
          },
          {
            label: "Target Gross Margin",
            value: "60–70%",
            sub: "BOM ₹800 → ASP ₹2500",
            subColor: "text-emerald-400",
            Icon: Target,
          },
          {
            label: "Projected Y5 Revenue",
            value: "₹80 Cr",
            sub: "Break-even by Year 3",
            subColor: "text-emerald-400",
            Icon: TrendingUp,
          },
          {
            label: "India SAM (2026)",
            value: "$13.5B",
            sub: "Growing at 29.8% CAGR",
            subColor: "text-indigo-400",
            Icon: Globe,
          },
        ].map(({ label, value, sub, subColor, Icon }, i) => (
          <div
            key={i}
            className="card-enter grad-border p-5 relative overflow-hidden group hover:-translate-y-0.5 transition-transform duration-200 cursor-default"
          >
            <div className="absolute top-0 right-0 p-4 opacity-[0.07] group-hover:opacity-[0.12] transition-opacity">
              <Icon size={42} />
            </div>
            <div className="text-sm text-slate-400 font-medium mb-1">{label}</div>
            <div className="text-3xl font-bold text-white tracking-tight">{value}</div>
            <div className={`text-xs ${subColor} mt-2 font-medium`}>{sub}</div>
          </div>
        ))}
      </div>

      {/* Pitch & Moat */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left: Elevator Pitch + Market */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grad-border p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 live-dot" />
              Confidential · Seed Round 2026
            </div>
            <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
              India&apos;s First Local-First<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                IoT + Edge-AI
              </span>{" "}
              Smart Home Platform
            </h1>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              Technogetic is building a fully offline, privacy-guaranteed home automation ecosystem.
              We manufacture our own smart panels, plugs, and edge-AI hubs in India. Unlike
              cloud-dependent giants, our system uses on-device Semantic Memory (RAG) to adapt to
              user habits with{" "}
              <span className="text-cyan-400 font-semibold">zero latency</span> and{" "}
              <span className="text-emerald-400 font-semibold">absolute privacy</span>.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => openModal("gtm")}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-blue-900/30"
              >
                <FileText size={15} /> View IP &amp; Go-To-Market
              </button>
              <button
                onClick={() => openModal("competition")}
                className="px-5 py-2.5 rounded-xl bg-slate-800/70 text-white text-sm font-medium hover:bg-slate-700/70 transition-colors border border-slate-700 flex items-center gap-2"
              >
                <Layers size={15} /> Competitive Analysis
              </button>
            </div>
          </div>

          {/* Market Sizing */}
          <div className="grad-border p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Globe className="text-blue-500" size={20} />
                Market Sizing &amp; Opportunity
              </h2>
              <button
                onClick={() => openModal("market")}
                className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
              >
                Detailed View <ChevronRight size={14} />
              </button>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  label: "Global TAM (2030)",
                  value: "$537.3B",
                  sub: "27% CAGR from 2024",
                  color: "text-blue-400",
                  href: "https://www.grandviewresearch.com/industry-analysis/smart-homes-industry",
                },
                {
                  label: "India SAM (2026)",
                  value: "$13.57B",
                  sub: "~29.8% High-Growth CAGR",
                  color: "text-cyan-400",
                  href: "https://cionlabs.com/the-smart-home-revolution-a-2026-market-research-outlook-for-indias-home-automation-industry/",
                },
                {
                  label: "Target SOM (Yr 5)",
                  value: "₹100–150Cr",
                  sub: "0.5% of premium segment",
                  color: "text-emerald-400",
                  href: null,
                },
              ].map(({ label, value, sub, color, href }, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 group relative hover:-translate-y-0.5 transition-transform duration-200"
                >
                  {href && (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-slate-800 p-1.5 rounded border border-slate-600 hover:bg-blue-600 text-white flex items-center gap-1 text-[10px] transition-all"
                    >
                      <ExternalLink size={11} /> Source
                    </a>
                  )}
                  <div className={`text-xs font-bold mb-1 uppercase tracking-wider ${color}`}>{label}</div>
                  <div className="text-2xl font-bold text-white mb-1">{value}</div>
                  <div className="text-xs text-slate-500">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Moat */}
        <div className="grad-border p-6">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <ShieldCheck className="text-emerald-500" size={20} />
            Our Defensible Moat
          </h2>

          <div className="space-y-6">
            {[
              {
                Icon: WifiOff,
                color: "text-blue-400",
                bg: "bg-blue-500/10 border-blue-500/20",
                title: "100% Offline Edge-AI",
                desc: "Solves the massive privacy & latency issues of Alexa/Google. Operates entirely locally. Appeals heavily to privacy-conscious luxury buyers.",
              },
              {
                Icon: BrainCircuit,
                color: "text-indigo-400",
                bg: "bg-indigo-500/10 border-indigo-500/20",
                title: "Semantic Memory Engine",
                desc: "Proprietary on-device RAG algorithm. Instead of rigid rules (\"Turn on at 6PM\"), it learns context (\"User is sleeping, dim lights\").",
              },
              {
                Icon: Cpu,
                color: "text-amber-400",
                bg: "bg-amber-500/10 border-amber-500/20",
                title: "In-House Manufacturing",
                desc: "We aren't white-labeling Chinese imports. We control PCB design, enclosures, and IP, driving hardware gross margins to 60–70% at scale.",
              },
            ].map(({ Icon, color, bg, title, desc }, i) => (
              <div key={i} className="flex gap-4 group">
                <div className={`mt-0.5 p-2 rounded-xl border ${bg} ${color} shrink-0 transition-transform group-hover:scale-105 duration-200`}>
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-100 text-sm mb-1">{title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications row */}
          <div className="mt-8 pt-6 border-t border-slate-800">
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-3 font-medium">
              Compliance Roadmap
            </div>
            <div className="flex flex-wrap gap-2">
              {["BIS Certified", "Matter Protocol", "BLE 5.3", "Zigbee 3.0", "Made in India"].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
