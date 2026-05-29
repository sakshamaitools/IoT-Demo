"use client";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import IntroTab from "./components/tabs/IntroTab";
import OverviewTab from "./components/tabs/OverviewTab";
import FinancialsTab from "./components/tabs/FinancialsTab";
import DemoTab from "./components/tabs/DemoTab";
import FounderTab from "./components/tabs/FounderTab";
import ModalShell from "./components/modals/ModalShell";

export default function TechnogeticPitch() {
  const [activeTab, setActiveTab] = useState("intro");
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (id: string) => setActiveModal(id);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 relative">

      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "intro"       && <IntroTab onNavigate={setActiveTab} />}
        {activeTab === "overview"    && <OverviewTab openModal={openModal} />}
        {activeTab === "financials"  && <FinancialsTab openModal={openModal} />}
        {activeTab === "demo"        && <DemoTab />}
        {activeTab === "founder"     && <FounderTab />}
      </main>

      <ModalShell activeModal={activeModal} onClose={closeModal} />

      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-4 mt-8 border-t border-slate-800/50 text-center">
        <p className="text-slate-600 text-xs font-mono uppercase tracking-widest">
          Confidential Pitch Deck · Technogetic Pvt. Ltd. · Strict NDA Applies
        </p>
      </footer>
    </div>
  );
}