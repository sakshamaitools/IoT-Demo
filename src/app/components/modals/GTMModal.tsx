"use client";

import React from "react";
import { Lock, Target, CheckCircle2 } from "lucide-react";

const ipItems = [
  {
    title: "Hardware Design Patents",
    desc: "\"Wearable Touch Switch Hinge\" (tactile feel), \"Modular Multi-Gang Enclosure System\" (flat-pack assembly).",
  },
  {
    title: "Software & AI Methods",
    desc: "\"Context-aware Home Event Graph\" (data structure for storing habits), \"Offline RAG Engine on Edge\".",
  },
];

const gtmItems = [
  {
    title: "Target Segments",
    desc: "Premium housing, villas, luxury apartments in Tier-1 urban centres (Mumbai, Bengaluru) valuing absolute privacy.",
  },
  {
    title: "Sales Channels",
    desc: "Direct B2B tie-ups with luxury builders/architects for pre-installed \"Demo Homes\". D2C via website in Phase 3.",
  },
  {
    title: "Pricing Model",
    desc: "High-margin Hardware (₹2,500 ASP). Upsell premium SaaS tier for advanced AI memory routines and priority support.",
  },
  {
    title: "Revenue Diversification",
    desc: "Hardware sales → Installation services → Annual AI subscription → White-label licensing to builders (Year 3+).",
  },
];

export default function GTMModal() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* IP */}
      <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-700/60">
        <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
          <Lock className="text-indigo-400" size={18} />
          Defensible IP Portfolio
        </h3>
        <ul className="space-y-4">
          {ipItems.map(({ title, desc }, i) => (
            <li key={i} className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              <strong className="text-white block mb-1 text-xs uppercase tracking-wider">{title}</strong>
              <span className="text-slate-400 text-sm leading-relaxed">{desc}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 p-4 bg-indigo-900/15 border border-indigo-500/20 rounded-xl">
          <p className="text-xs text-indigo-200 leading-relaxed">
            IP filings planned in Tranche 1. Hardware design patents provide 10–15 year competitive
            moat. Software method patents create licensing revenue opportunities with global OEMs.
          </p>
        </div>
      </div>

      {/* GTM */}
      <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-700/60">
        <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
          <Target className="text-rose-400" size={18} />
          Go-To-Market Execution
        </h3>
        <ul className="space-y-4">
          {gtmItems.map(({ title, desc }, i) => (
            <li key={i} className="flex gap-3">
              <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={17} />
              <div>
                <strong className="text-white block mb-1 text-sm">{title}</strong>
                <span className="text-slate-400 text-sm leading-relaxed">{desc}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
