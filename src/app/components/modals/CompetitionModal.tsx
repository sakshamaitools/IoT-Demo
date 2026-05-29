"use client";

import React from "react";
import { ExternalLink } from "lucide-react";

const competitors = [
  {
    name: "Amazon Alexa / Echo",
    strengths: "#1 global speaker (~30% share); massive ecosystem; low device cost.",
    weaknesses: "Cloud-dependent (privacy risks); data collected centrally; relies on internet. Generic features.",
    href: "https://www.globenewswire.com/news-release/2025/02/17/3027178/0/en/global-smart-speaker-market-to-worth-over-us-46-87-billion-by-2033-astute-analytica.html",
    us: false,
  },
  {
    name: "Google Assistant / Nest",
    strengths: "Strong AI/ML engine; multi-language; Matter support.",
    weaknesses: "Cloud-centric; privacy concerns; premium devices are costly.",
    href: null,
    us: false,
  },
  {
    name: "Apple HomeKit",
    strengths: "Privacy-centric; highly cohesive ecosystem.",
    weaknesses: "Smallest share; expensive hardware; closed platform.",
    href: null,
    us: false,
  },
  {
    name: "Chinese OEMs (Xiaomi)",
    strengths: "Very low-cost; broad range; large presence in India.",
    weaknesses: "Questionable data practices; 'dumb' logic without true AI memory.",
    href: null,
    us: false,
  },
  {
    name: "Technogetic (Us)",
    strengths: "100% Offline Edge-AI; Semantic Memory; Integrated Hardware IP.",
    weaknesses: "Unmatched privacy & latency. Strong margins via direct manufacturing.",
    href: null,
    us: true,
  },
];

export default function CompetitionModal() {
  return (
    <div className="space-y-6">
      <p className="text-slate-300 leading-relaxed">
        Major players excel at connectivity and scale, but none offer a fully offline,
        memory-driven AI assistant. That is our niche.
      </p>

      <div className="overflow-x-auto rounded-xl border border-slate-800">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-700 text-slate-400 bg-slate-950/60">
              <th className="py-4 px-5 w-1/4 font-medium">Competitor</th>
              <th className="py-4 px-5 w-1/3 font-medium">Strengths</th>
              <th className="py-4 px-5 font-medium">Weaknesses / Our Edge</th>
            </tr>
          </thead>
          <tbody>
            {competitors.map((c, i) => (
              <tr
                key={i}
                className={`border-b border-slate-800/50 transition-colors group relative
                  ${c.us
                    ? "bg-blue-900/10 border-l-4 border-l-blue-500"
                    : "hover:bg-slate-800/20"
                  }`}
              >
                <td className={`py-5 px-5 font-bold ${c.us ? "text-blue-400" : "text-white"}`}>
                  {c.name}
                </td>
                <td className="py-5 px-5 pr-12 relative">
                  <span className={c.us ? "text-blue-200" : "text-slate-300"}>{c.strengths}</span>
                  {c.href && (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950 p-1.5 rounded border border-slate-600 hover:bg-indigo-600 text-slate-300 hover:text-white flex items-center gap-1 text-[10px] z-10"
                    >
                      <ExternalLink size={11} /> Source
                    </a>
                  )}
                </td>
                <td className={`py-5 px-5 font-medium ${c.us ? "text-emerald-400" : "text-rose-400"}`}>
                  {c.weaknesses}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-5">
        <p className="text-sm text-blue-200 leading-relaxed">
          <strong className="text-white">Key Insight:</strong> No existing player combines fully
          offline inference + semantic habit learning + in-house hardware manufacturing in a single
          integrated platform. Technogetic occupies this unclaimed intersection.
        </p>
      </div>
    </div>
  );
}
