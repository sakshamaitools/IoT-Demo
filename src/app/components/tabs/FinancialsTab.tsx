"use client";

import React from "react";
import { Target, TrendingUp, Briefcase, PieChart, ChevronRight } from "lucide-react";

interface FinancialsTabProps {
  openModal: (id: string) => void;
}

const revenueData = [
  { year: "2026", rev: 0.5,  pct: 5   },
  { year: "2027", rev: 6.0,  pct: 15  },
  { year: "2028", rev: 25.0, pct: 40, breakeven: true },
  { year: "2029", rev: 50.0, pct: 70  },
  { year: "2030", rev: 80.0, pct: 100 },
];

const fundsData = [
  { label: "R&D Lab & Proto Tools",  percent: 28, value: "₹84L",  color: "from-blue-600 to-blue-400"    },
  { label: "Team Salaries (Yr1)",    percent: 23, value: "₹69L",  color: "from-indigo-600 to-indigo-400" },
  { label: "Tooling (Molds/Jigs)",   percent: 19, value: "₹57L",  color: "from-cyan-600 to-cyan-400"    },
  { label: "Marketing, IP, Certs",   percent: 12, value: "₹36L",  color: "from-rose-600 to-rose-400"    },
  { label: "Inventory & Comps",      percent:  9, value: "₹27L",  color: "from-emerald-600 to-emerald-400" },
  { label: "Ops / Reserve",          percent:  9, value: "₹27L",  color: "from-slate-600 to-slate-400"  },
];

const tranches = [
  {
    id: "1",
    period: "M0–M8",
    amount: "₹1.2 Crore",
    desc: "Lab equipment (SMT), core engineering hires, PCB/case prototypes complete.",
    active: true,
  },
  {
    id: "2",
    period: "M8–M16",
    amount: "₹1.0 Crore",
    desc: "Injection molds delivered, pilot batch (200–500 units), AI beta ready.",
    active: false,
  },
  {
    id: "3",
    period: "M16–M24",
    amount: "₹0.8 Crore",
    desc: "Certifications cleared (BIS/Matter), commercial launch, initial revenue traction.",
    active: false,
  },
];

export default function FinancialsTab({ openModal }: FinancialsTabProps) {
  return (
    <div className="space-y-8 tab-enter">
      <div className="grid lg:grid-cols-2 gap-8">

        {/* ─── Left Column ─────────────────────────── */}
        <div className="space-y-6">

          {/* Funding Tranches */}
          <div className="grad-border p-6">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Target className="text-blue-500" size={20} />
              Funding Tranches (₹3.0 Cr)
            </h2>

            <div className="relative ml-3">
              {/* Vertical line */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500 via-slate-700 to-slate-800" />

              <div className="space-y-6">
                {tranches.map((t) => (
                  <div key={t.id} className="relative pl-7">
                    <div
                      className={`absolute w-3 h-3 rounded-full -left-[6px] top-1.5 border-2 border-[#0B1120] transition-colors
                        ${t.active ? "bg-blue-500 shadow-md shadow-blue-500/40" : "bg-slate-700"}`}
                    />
                    <div className={`text-[10px] font-bold mb-1 uppercase tracking-wider ${t.active ? "text-blue-400" : "text-slate-500"}`}>
                      TRANCHE {t.id} · {t.period}
                    </div>
                    <div className="font-bold text-white text-base mb-1">{t.amount}</div>
                    <div className="text-sm text-slate-400">{t.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Unit Economics */}
          <div className="grad-border p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Briefcase className="text-emerald-500" size={20} />
                Unit Economics
              </h2>
              <button
                onClick={() => openModal("manufacturing")}
                className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
              >
                Full BOM <ChevronRight size={14} />
              </button>
            </div>

            <div className="text-xs text-slate-500 mb-4">Smart Switch (per unit)</div>

            <div className="grid grid-cols-3 gap-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              {[
                { label: "Est. BOM",     value: "~₹800",  color: "text-rose-400"   },
                { label: "Target ASP",   value: "₹2,500", color: "text-emerald-400" },
                { label: "Gross Margin", value: "~68%",   color: "text-white"      },
              ].map(({ label, value, color }, i) => (
                <div key={i} className="text-center">
                  <div className="text-xs text-slate-500 mb-1">{label}</div>
                  <div className={`text-xl font-bold ${color}`}>{value}</div>
                </div>
              ))}
            </div>

            {/* Margin visual */}
            <div className="mt-4">
              <div className="flex justify-between text-[10px] text-slate-500 mb-1.5">
                <span>BOM cost</span>
                <span>Gross Margin (68%)</span>
              </div>
              <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex">
                <div className="h-full bg-rose-500/70 transition-all duration-700" style={{ width: "32%" }} />
                <div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 transition-all duration-700" style={{ width: "68%" }} />
              </div>
            </div>
          </div>
        </div>

        {/* ─── Right Column ────────────────────────── */}
        <div className="space-y-6">

          {/* Use of Funds */}
          <div className="grad-border p-6">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <PieChart size={18} className="text-blue-400" />
              Use of Funds (₹2.1–2.6 Cr Estimate + Buffer)
            </h3>
            <div className="space-y-4">
              {fundsData.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-300 font-medium">{item.label}</span>
                    <span className="text-slate-400">
                      {item.value} ({item.percent}%)
                    </span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${item.color} transition-all duration-1000`}
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue Projections */}
          <div className="grad-border p-6">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <TrendingUp size={18} className="text-emerald-400" />
              Revenue Projections (₹ Cr)
            </h3>
            <p className="text-xs text-slate-500 mb-6">Break-even projected at Year 3 (2028)</p>

            <div className="h-52 relative flex items-end justify-between gap-2 border-b border-slate-800 pb-2 px-1 pt-6">
              {/* Y-axis labels */}
              <div className="absolute inset-x-1 top-4 pointer-events-none">
                <div className="w-full border-t border-slate-800/70 flex justify-end">
                  <span className="text-[9px] text-slate-600 bg-[#0f172a] px-1 -mt-2.5">₹80 Cr</span>
                </div>
              </div>
              <div className="absolute inset-x-1 top-1/2 pointer-events-none -translate-y-1/2">
                <div className="w-full border-t border-slate-800/40 flex justify-end">
                  <span className="text-[9px] text-slate-600 bg-[#0f172a] px-1 -mt-2.5">₹40 Cr</span>
                </div>
              </div>

              {revenueData.map((bar, i) => (
                <div
                  key={i}
                  className="flex-1 flex flex-col items-center group h-full justify-end relative"
                >
                  {/* Hover tooltip */}
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-2 py-0.5 rounded text-xs font-mono font-bold pointer-events-none whitespace-nowrap shadow-xl border border-slate-700 transition-opacity z-10">
                    ₹{bar.rev} Cr
                  </div>

                  {/* Bar */}
                  <div
                    className={`w-full rounded-t bar-grow hover:brightness-110 transition-all
                      ${bar.breakeven
                        ? "bg-gradient-to-t from-blue-600 via-teal-500 to-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.15)]"
                        : i === revenueData.length - 1
                        ? "bg-gradient-to-t from-slate-700 to-blue-500"
                        : "bg-gradient-to-t from-slate-800 to-blue-600/70"
                      }`}
                    style={{
                      height: `${bar.pct}%`,
                      animationDelay: `${i * 80}ms`,
                    }}
                  />

                  <span className="text-xs text-slate-400 mt-2 font-medium">{bar.year}</span>
                  {bar.breakeven && (
                    <span className="absolute -bottom-5 text-[8px] text-emerald-400 font-bold tracking-wider whitespace-nowrap">
                      BREAK-EVEN
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
