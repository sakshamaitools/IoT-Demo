"use client";

import React from "react";
import { BrainCircuit, Briefcase, PieChart, Microscope, User, Presentation } from "lucide-react";

interface NavBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  { id: "intro",      label: "Introduction",     Icon: Presentation },
  { id: "overview",   label: "Exec Summary",    Icon: Briefcase },
  { id: "financials", label: "Financials & Ops", Icon: PieChart },
  { id: "demo",       label: "Tech Validation",  Icon: Microscope },
  { id: "founder",    label: "Founder",          Icon: User },
];

export default function NavBar({ activeTab, setActiveTab }: NavBarProps) {
  return (
    <nav className="sticky top-0 z-40 glass border-b border-white/[0.06] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-900/30">
              <BrainCircuit size={18} className="text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-base tracking-tight text-white">Technogetic Pvt. Ltd.</span>
              <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase mt-0.5">
                Seed Round · Data Room
              </span>
            </div>
          </div>

          {/* Tabs — horizontally scrollable on small screens */}
          <div className="overflow-x-auto scrollbar-none flex-1 flex justify-end">
            <div className="flex space-x-1 bg-slate-900/60 p-1 rounded-xl border border-slate-800 min-w-max">
              {tabs.map(({ id, label, Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`px-3 sm:px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap
                    ${activeTab === id
                      ? "bg-gradient-to-r from-blue-600/80 to-indigo-600/80 text-white shadow-md border border-blue-500/30"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                    }`}
                >
                  <Icon size={14} />
                  <span className="hidden sm:inline">{label}</span>
                  <span className="sm:hidden">{label.split(" ")[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
