"use client";

import React from "react";

const bomRows = [
  { component: "MCU / Logic SoC",      cost: "₹200–400",   detail: "e.g., ESP32 (switch/sensor), ARM SoC (Hub)"     },
  { component: "Wireless / Radio Module", cost: "₹150–250", detail: "Integrated Wi-Fi / BT / Zigbee"                 },
  { component: "Actuators / Relays",   cost: "₹80–150",    detail: "AC Modules, Switching mechanism"                },
  { component: "Injection Enclosure",  cost: "₹60–120",    detail: "Custom ABS Plastic Housing"                     },
  { component: "PCB & Passives",       cost: "₹70–150",    detail: "2-Layer FR4, SMD components"                    },
];

const phases = [
  {
    label: "PHASE 1 (M1–6)",
    title: "R&D & Prototypes",
    desc: "Lab setup, small SMT station. 1-gang switch & hub prototypes. Initial IP filings.",
    color: "text-blue-400",
    borderColor: "border-blue-500/20",
  },
  {
    label: "PHASE 2 (M7–12)",
    title: "Pilot & AI Integration",
    desc: "Fabricate injection molds. Run pilot batch (200–500 units). Integrate offline LLM & semantic engine.",
    color: "text-indigo-400",
    borderColor: "border-indigo-500/20",
  },
  {
    label: "PHASE 3 (M16–24)",
    title: "Launch & Scale",
    desc: "Scale manufacturing via local EMS. B2B builder partnerships. Begin generating support/license revenue.",
    color: "text-emerald-400",
    borderColor: "border-emerald-500/20",
  },
];

export default function ManufacturingModal() {
  return (
    <div className="space-y-8">
      {/* BOM Table */}
      <div>
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          Unit Bill of Materials (BOM) &mdash; Smart Switch
        </h3>
        <div className="overflow-x-auto border border-slate-800 rounded-xl">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-slate-400 border-b border-slate-700 bg-slate-950/60">
                <th className="py-3 px-5 font-medium">Component</th>
                <th className="py-3 px-5 font-medium">Cost Estimate (₹)</th>
                <th className="py-3 px-5 font-medium">Technical Details</th>
              </tr>
            </thead>
            <tbody>
              {bomRows.map((row, i) => (
                <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                  <td className="py-3 px-5 text-white font-medium">{row.component}</td>
                  <td className="py-3 px-5 text-slate-300 font-mono">{row.cost}</td>
                  <td className="py-3 px-5 text-slate-400">{row.detail}</td>
                </tr>
              ))}
              <tr className="bg-emerald-900/15 border-t-2 border-emerald-900/50 font-bold">
                <td className="py-4 px-5 text-white">Total BOM Cost (Est.)</td>
                <td className="py-4 px-5 text-white font-mono">₹640–1,200</td>
                <td className="py-4 px-5 text-emerald-400">Targeting ~68% Gross Margin at ₹2,500 ASP</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Production Phasing */}
      <div>
        <h3 className="text-lg font-bold text-white mb-4">Production Phasing</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {phases.map(({ label, title, desc, color, borderColor }, i) => (
            <div key={i} className={`p-5 rounded-xl bg-slate-900/60 border ${borderColor} hover:-translate-y-0.5 transition-transform duration-200`}>
              <div className={`text-xs font-bold mb-2 uppercase tracking-wider ${color}`}>{label}</div>
              <strong className="text-white text-base block mb-2">{title}</strong>
              <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Manufacturing note */}
      <div className="bg-amber-900/10 border border-amber-500/20 rounded-xl p-5">
        <p className="text-sm text-amber-200 leading-relaxed">
          <strong className="text-white">Manufacturing Philosophy:</strong> We are not white-labeling 
          generic Chinese modules. Every PCB layout, enclosure design, and firmware stack is developed 
          in-house, giving us full IP ownership and the ability to iterate rapidly without supply-chain 
          dependencies.
        </p>
      </div>
    </div>
  );
}
