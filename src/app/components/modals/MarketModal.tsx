"use client";

import React from "react";
import { ExternalLink } from "lucide-react";

const markets = [
  {
    label: "TAM",
    title: "Global IoT / Home Automation",
    color: "text-blue-400",
    borderColor: "border-blue-500/20",
    value: "~$150B (2025)",
    detail: "Growing to ~$537B by 2030 at 27% CAGR. Global smart home adoption accelerating across North America, Europe, and Asia.",
    href: "https://www.grandviewresearch.com/industry-analysis/smart-homes-industry",
    hoverColor: "hover:bg-blue-600",
  },
  {
    label: "SAM",
    title: "India Home Automation",
    color: "text-cyan-400",
    borderColor: "border-cyan-500/20",
    value: "$13.57B (2026)",
    detail: "~₹11,000–12,000 Cr by 2026, rising to ~₹20,000 Cr by 2030. India growing at 29.8% CAGR driven by urban premiumization.",
    href: "https://cionlabs.com/the-smart-home-revolution-a-2026-market-research-outlook-for-indias-home-automation-industry/",
    hoverColor: "hover:bg-cyan-600",
  },
  {
    label: "SOM",
    title: "Our Target Market",
    color: "text-emerald-400",
    borderColor: "border-emerald-500/20",
    value: "₹100–150 Cr (Yr 5)",
    detail: "Urban premium homes in Mumbai, Bengaluru. Targeting ~0.5% of the SAM in first 5 years via luxury builder partnerships.",
    href: null,
    hoverColor: "",
  },
];

export default function MarketModal() {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        {markets.map(({ label, title, color, borderColor, value, detail, href, hoverColor }, i) => (
          <div
            key={i}
            className={`bg-slate-900/60 p-6 rounded-xl border ${borderColor} relative group hover:bg-slate-800/40 transition-colors`}
          >
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950 p-1.5 rounded border border-slate-600 ${hoverColor} text-slate-300 hover:text-white flex items-center gap-1 text-[10px] shadow-lg`}
              >
                <ExternalLink size={11} /> Source
              </a>
            )}
            <div className={`text-2xl font-bold text-white mb-1`}>{label}</div>
            <div className={`text-sm font-semibold ${color} mb-3`}>{title}</div>
            <div className="text-base font-bold text-white mb-2">{value}</div>
            <p className="text-sm text-slate-400 leading-relaxed">{detail}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-5 space-y-3">
        <h4 className="text-sm font-bold text-white">Demand Drivers — India</h4>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "Rising disposable income in Tier-1 cities",
            "Smartphone penetration enabling IoT control",
            "Growing data privacy awareness post-2023",
            "Luxury real estate boom — premium home market growing 15%+ YoY",
            "Power grid reliability issues → offline AI demand",
            "'Make in India' policy tailwinds for local hardware",
          ].map((driver, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
              <span className="text-emerald-400 shrink-0 mt-0.5">→</span>
              {driver}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
