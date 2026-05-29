"use client";

import React, { useEffect } from "react";
import { X, Layers, Globe, Factory, Target } from "lucide-react";
import CompetitionModal from "./CompetitionModal";
import MarketModal from "./MarketModal";
import ManufacturingModal from "./ManufacturingModal";
import GTMModal from "./GTMModal";

interface ModalShellProps {
  activeModal: string | null;
  onClose: () => void;
}

const modalMeta: Record<string, { label: string; Icon: React.ElementType; iconColor: string }> = {
  competition:    { label: "Competitive Landscape Diligence",      Icon: Layers,  iconColor: "text-blue-400"    },
  market:         { label: "Market Sizing Breakdown",               Icon: Globe,   iconColor: "text-cyan-400"    },
  manufacturing:  { label: "Manufacturing & Bill of Materials",     Icon: Factory, iconColor: "text-emerald-400" },
  gtm:            { label: "IP Portfolio & Go-To-Market Strategy",  Icon: Target,  iconColor: "text-indigo-400"  },
};

export default function ModalShell({ activeModal, onClose }: ModalShellProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [activeModal]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!activeModal) return null;

  const meta = modalMeta[activeModal];
  if (!meta) return null;

  const { Icon, iconColor, label } = meta;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1120]/85 backdrop-blur-sm modal-backdrop"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-slate-900 border border-slate-700/60 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col modal-content">

        {/* Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm shrink-0">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Icon size={20} className={iconColor} />
            {label}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors text-slate-400 hover:text-white"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 p-6 bg-slate-950/40">
          {activeModal === "competition"   && <CompetitionModal />}
          {activeModal === "market"        && <MarketModal />}
          {activeModal === "manufacturing" && <ManufacturingModal />}
          {activeModal === "gtm"           && <GTMModal />}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 text-white font-medium hover:bg-slate-700 transition-colors border border-slate-700 text-sm"
          >
            Close Panel
          </button>
        </div>
      </div>
    </div>
  );
}
