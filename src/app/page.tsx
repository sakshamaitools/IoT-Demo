"use client";

import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  WifiOff, 
  TrendingUp, 
  Target, 
  Zap, 
  BrainCircuit, 
  Lock, 
  Activity,
  BarChart3,
  ChevronRight,
  X,
  Factory,
  Globe,
  Layers,
  CheckCircle2,
  ExternalLink,
  PieChart,
  Briefcase,
  FileText,
  Microscope,
  Cpu as Microchip,
  Thermometer,
  Sun,
  Moon,
  User,
  Database,
  Radio,
  Clock
} from 'lucide-react';

export default function TechnogeticPitch() {
  const [activeTab, setActiveTab] = useState('overview'); // overview, financials, demo
  const [activeModal, setActiveModal] = useState<string | null>(null); 
  
  // Advanced Demo State
  const [demoState, setDemoState] = useState({
    lights: { state: false, brightness: 0, color: 'OFF' },
    ac: { state: false, temp: 24, mode: 'STANDBY' },
    security: { state: true, level: 'MAX (PERIMETER + INDOOR)' }
  });
  
  const [telemetry, setTelemetry] = useState({ temp: 24.5, lux: 850, powerW: 120 });
  const [inferenceStats, setInferenceStats] = useState({ latency: 0, nodes: 1402, tokens: 0 });
  
  const [aiLogs, setAiLogs] = useState([
    { 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second:'2-digit' }), 
      sensor: 'System Boot', 
      rag: 'Loaded 1,402 semantic habit nodes into Edge RAM.',
      action: 'System initialized and isolated from WAN.' 
    }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);

  // Simulate Live Sensor Telemetry (Jitter)
  useEffect(() => {
    if (activeTab !== 'demo') return;
    const interval = setInterval(() => {
      setTelemetry(prev => ({
        temp: +(prev.temp + (Math.random() * 0.2 - 0.1)).toFixed(1),
        lux: Math.max(0, Math.floor(prev.lux + (Math.random() * 20 - 10))),
        powerW: demoState.ac.state ? Math.floor(1200 + Math.random() * 50) : Math.floor(120 + Math.random() * 10)
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, [activeTab, demoState.ac.state]);

  // Advanced Edge AI Scenario Simulation
  const runScenario = (scenarioType: string) => {
    setIsProcessing(true);
    
    // Simulate Edge Inference Latency (10-25ms)
    const latency = Math.floor(Math.random() * 15) + 10;
    
    setTimeout(() => {
      let newState = { ...demoState };
      let logEntry = { 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second:'2-digit' }),
        sensor: '', rag: '', action: '' 
      };

      if (scenarioType === 'night_trip') {
        newState.lights = { state: true, brightness: 10, color: 'WARM 2200K' };
        newState.ac = { state: true, temp: 22, mode: 'QUIET NIGHT' };
        newState.security = { state: true, level: 'PERIMETER ONLY' };
        
        logEntry.sensor = 'PIR Motion @ Hallway (03:14 AM)';
        logEntry.rag = 'Querying habit graph: User typically visits restroom and returns to bed within 5 mins.';
        logEntry.action = 'Engaged low-brightness warm pathway lights. Kept AC quiet. Perimeter remains armed.';
      } 
      else if (scenarioType === 'arrival') {
        newState.lights = { state: true, brightness: 80, color: 'DAYLIGHT 4000K' };
        newState.ac = { state: true, temp: 21, mode: 'RAPID COOL' };
        newState.security = { state: false, level: 'DISARMED' };
        
        logEntry.sensor = 'Local BLE Face ID Match @ Front Door (18:30)';
        logEntry.rag = 'Match confidence 99.8%. Post-work routine identified. High humidity detected.';
        logEntry.action = 'Disarmed security. AC set to Rapid Cool (21°C). Evening lights engaged.';
      }
      else if (scenarioType === 'empty') {
        newState.lights = { state: false, brightness: 0, color: 'OFF' };
        newState.ac = { state: false, temp: 24, mode: 'ECO STANDBY' }; // temp was null, set to 24 for type safety or just keep it
        newState.security = { state: true, level: 'MAX (PERIMETER + INDOOR)' };
        
        logEntry.sensor = 'Zero presence all zones for 45 mins.';
        logEntry.rag = 'No scheduled anomalies. Predicting house is empty until 18:00.';
        logEntry.action = 'Powered down HVAC & Lights to save energy. Armed all internal/external sensors.';
      }

      setDemoState(newState);
      setInferenceStats({ latency, nodes: inferenceStats.nodes + Math.floor(Math.random() * 10), tokens: Math.floor(Math.random() * 50) + 20 });
      setAiLogs(prev => [logEntry, ...prev].slice(0, 4));
      setIsProcessing(false);
    }, latency);
  };

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (activeModal) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [activeModal]);

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 font-sans selection:bg-blue-500/30 relative">
      
      {/* Top Navigation - Investor Portal Style */}
      <nav className="sticky top-0 z-40 bg-[#0B1120]/90 backdrop-blur-lg border-b border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                <BrainCircuit size={18} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight text-white leading-none">Technogetic Pvt. Ltd.</span>
                <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">Seed Round Data Room</span>
              </div>
            </div>
            <div className="flex space-x-2 bg-slate-900/50 p-1 rounded-lg border border-slate-800">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'overview' ? 'bg-slate-800 text-white shadow-sm border border-slate-700' : 'text-slate-400 hover:text-white'}`}
              >
                <Briefcase size={16} /> Exec Summary
              </button>
              <button 
                onClick={() => setActiveTab('financials')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'financials' ? 'bg-slate-800 text-white shadow-sm border border-slate-700' : 'text-slate-400 hover:text-white'}`}
              >
                <PieChart size={16} /> Financials & Ops
              </button>
              <button 
                onClick={() => setActiveTab('demo')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'demo' ? 'bg-slate-800 text-white shadow-sm border border-slate-700' : 'text-slate-400 hover:text-white'}`}
              >
                <Microscope size={16} /> Tech Validation
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* ========================================================= */}
        {/* TAB 1: EXECUTIVE SUMMARY & MARKET                         */}
        {/* ========================================================= */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* KPI Tear Sheet */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10"><BarChart3 size={40}/></div>
                <div className="text-sm text-slate-400 font-medium mb-1">Funding Ask (Seed)</div>
                <div className="text-3xl font-bold text-white">₹3.0 Cr</div>
                <div className="text-xs text-blue-400 mt-2 font-medium">Over 3 Milestone Tranches</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10"><Target size={40}/></div>
                <div className="text-sm text-slate-400 font-medium mb-1">Target Gross Margin</div>
                <div className="text-3xl font-bold text-white">60-70%</div>
                <div className="text-xs text-emerald-400 mt-2 font-medium">BOM ₹800 → ASP ₹2500</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10"><TrendingUp size={40}/></div>
                <div className="text-sm text-slate-400 font-medium mb-1">Projected Y5 Revenue</div>
                <div className="text-3xl font-bold text-white">₹80 Cr</div>
                <div className="text-xs text-emerald-400 mt-2 font-medium">Break-even by Year 3</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10"><Globe size={40}/></div>
                <div className="text-sm text-slate-400 font-medium mb-1">India SAM (2026)</div>
                <div className="text-3xl font-bold text-white">$13.5B</div>
                <div className="text-xs text-indigo-400 mt-2 font-medium">Growing at 29.8% CAGR</div>
              </div>
            </div>

            {/* Pitch & The Moat */}
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Left Col: Elevator Pitch */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                  <h1 className="text-3xl font-bold text-white mb-4">India's First Local-First IoT + Edge-AI Smart Home Platform</h1>
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    Technogetic is building a fully offline, privacy-guaranteed home automation ecosystem. We manufacture our own smart panels, plugs, and edge-AI hubs in India. Unlike cloud-dependent giants, our system uses on-device Semantic Memory (RAG) to adapt to user habits with zero latency and absolute privacy.
                  </p>
                  <div className="flex gap-4">
                    <button onClick={() => setActiveModal('gtm')} className="px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition-colors flex items-center gap-2 shadow-lg shadow-blue-900/20">
                      <FileText size={16} /> View IP & Go-To-Market
                    </button>
                    <button onClick={() => setActiveModal('competition')} className="px-5 py-2.5 rounded-lg bg-slate-800 text-white text-sm font-medium hover:bg-slate-700 transition-colors border border-slate-700 flex items-center gap-2">
                      <Layers size={16} /> Competitive Analysis
                    </button>
                  </div>
                </div>

                {/* Market Sizing */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2"><Globe className="text-blue-500"/> Market Sizing & Opportunity</h2>
                    <button onClick={() => setActiveModal('market')} className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1">Detailed View <ChevronRight size={14}/></button>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 group relative">
                      <a href="https://www.grandviewresearch.com/industry-analysis/smart-homes-industry" target="_blank" rel="noreferrer" className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-slate-800 p-1.5 rounded border border-slate-600 hover:bg-blue-600 text-white flex items-center gap-1 text-[10px]" title="Source: Grand View Research (2024)">
                        <ExternalLink size={12} /> Source
                      </a>
                      <div className="text-slate-400 text-xs font-bold mb-1 uppercase">Global TAM (2030)</div>
                      <div className="text-2xl font-bold text-white mb-1">$537.3B</div>
                      <div className="text-xs text-slate-500">27% CAGR from 2024</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 group relative">
                      <a href="https://cionlabs.com/the-smart-home-revolution-a-2026-market-research-outlook-for-indias-home-automation-industry/" target="_blank" rel="noreferrer" className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-slate-800 p-1.5 rounded border border-slate-600 hover:bg-blue-600 text-white flex items-center gap-1 text-[10px]" title="Source: Cionlabs">
                        <ExternalLink size={12} /> Source
                      </a>
                      <div className="text-slate-400 text-xs font-bold mb-1 uppercase">India SAM (2026)</div>
                      <div className="text-2xl font-bold text-white mb-1">$13.57B</div>
                      <div className="text-xs text-slate-500">~29.8% High-Growth CAGR</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800">
                      <div className="text-emerald-400 text-xs font-bold mb-1 uppercase">Target SOM (Yr 5)</div>
                      <div className="text-2xl font-bold text-white mb-1">₹100-150Cr</div>
                      <div className="text-xs text-slate-500">0.5% capture of premium segment</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Col: The Moat */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-full">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><ShieldCheck className="text-emerald-500"/> Our Defensible Moat</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="mt-1 bg-slate-800 p-2 rounded-lg text-blue-400 shrink-0 h-min"><WifiOff size={20}/></div>
                    <div>
                      <h3 className="font-bold text-slate-200 text-sm">100% Offline Edge-AI</h3>
                      <p className="text-sm text-slate-400 mt-1">Solves the massive privacy & latency issues of Alexa/Google. Operates entirely locally. Appeals heavily to privacy-conscious luxury buyers.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 bg-slate-800 p-2 rounded-lg text-indigo-400 shrink-0 h-min"><BrainCircuit size={20}/></div>
                    <div>
                      <h3 className="font-bold text-slate-200 text-sm">Semantic Memory Engine</h3>
                      <p className="text-sm text-slate-400 mt-1">Proprietary on-device RAG algorithm. Instead of rigid rules ("Turn on at 6PM"), it learns context ("User is sleeping, dim lights").</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 bg-slate-800 p-2 rounded-lg text-amber-400 shrink-0 h-min"><Microchip size={20}/></div>
                    <div>
                      <h3 className="font-bold text-slate-200 text-sm">In-House Manufacturing</h3>
                      <p className="text-sm text-slate-400 mt-1">We aren't white-labeling Chinese imports. We control PCB design, enclosures, and IP, driving hardware gross margins to 60-70% at scale.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: FINANCIALS & OPS                                   */}
        {/* ========================================================= */}
        {activeTab === 'financials' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Unit Economics & Tranches */}
              <div className="space-y-8">
                {/* Funding Tranches */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><Target className="text-blue-500"/> Funding Tranches (₹3.0 Cr)</h2>
                  <div className="relative border-l-2 border-slate-800 ml-3 space-y-6">
                    <div className="relative pl-6">
                      <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1.5 border-2 border-slate-900"></div>
                      <div className="text-xs font-bold text-blue-400 mb-1">TRANCHE 1 • M0-M8</div>
                      <div className="flex justify-between items-center mb-1">
                        <div className="font-bold text-white">₹1.2 Crore</div>
                      </div>
                      <div className="text-sm text-slate-400">Lab equipment (SMT), core engineering hires, PCB/case prototypes complete.</div>
                    </div>
                    <div className="relative pl-6">
                      <div className="absolute w-3 h-3 bg-slate-700 rounded-full -left-[7px] top-1.5 border-2 border-slate-900"></div>
                      <div className="text-xs font-bold text-slate-500 mb-1">TRANCHE 2 • M8-M16</div>
                      <div className="flex justify-between items-center mb-1">
                        <div className="font-bold text-white">₹1.0 Crore</div>
                      </div>
                      <div className="text-sm text-slate-400">Injection molds delivered, pilot batch (200-500 units), AI beta ready.</div>
                    </div>
                    <div className="relative pl-6">
                      <div className="absolute w-3 h-3 bg-slate-700 rounded-full -left-[7px] top-1.5 border-2 border-slate-900"></div>
                      <div className="text-xs font-bold text-slate-500 mb-1">TRANCHE 3 • M16-M24</div>
                      <div className="flex justify-between items-center mb-1">
                        <div className="font-bold text-white">₹0.8 Crore</div>
                      </div>
                      <div className="text-sm text-slate-400">Certifications cleared (BIS/Matter), commercial launch, initial revenue traction.</div>
                    </div>
                  </div>
                </div>

                {/* Unit Economics */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2"><Briefcase className="text-emerald-500"/> Unit Economics (Smart Switch)</h2>
                    <button onClick={() => setActiveModal('manufacturing')} className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1">View Full BOM <ChevronRight size={14}/></button>
                  </div>
                  <div className="flex items-center gap-4 bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                    <div className="flex-1 text-center">
                      <div className="text-sm text-slate-500 mb-1">Estimated BOM</div>
                      <div className="text-xl font-bold text-red-400">~₹800</div>
                    </div>
                    <div className="h-8 w-px bg-slate-800"></div>
                    <div className="flex-1 text-center">
                      <div className="text-sm text-slate-500 mb-1">Target ASP</div>
                      <div className="text-xl font-bold text-emerald-400">₹2,500</div>
                    </div>
                    <div className="h-8 w-px bg-slate-800"></div>
                    <div className="flex-1 text-center">
                      <div className="text-sm text-slate-500 mb-1">Gross Margin</div>
                      <div className="text-xl font-bold text-white">~68%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Visualization Column */}
              <div className="space-y-8">
                
                {/* Use of Funds Chart */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2"><PieChart size={18} className="text-blue-400"/> Use of Funds (₹2.1 - 2.6 Cr Estimate + Buffer)</h3>
                  <div className="space-y-4">
                    {[
                      { label: 'R&D Lab & Proto Tools', percent: 28, value: '₹84L', color: 'bg-blue-500' },
                      { label: 'Team Salaries (Yr1)', percent: 23, value: '₹69L', color: 'bg-indigo-500' },
                      { label: 'Tooling (Molds/Jigs)', percent: 19, value: '₹57L', color: 'bg-cyan-500' },
                      { label: 'Marketing, IP, Certs', percent: 12, value: '₹36L', color: 'bg-rose-500' },
                      { label: 'Inventory & Comps', percent: 9, value: '₹27L', color: 'bg-emerald-500' },
                      { label: 'Ops/Reserve', percent: 9, value: '₹27L', color: 'bg-slate-500' },
                    ].map((item, i) => (
                      <div key={i} className="group">
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="text-slate-300 font-medium">{item.label}</span>
                          <span className="text-slate-400">{item.value} ({item.percent}%)</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div className={`h-full ${item.color} transition-all duration-1000`} style={{ width: `${item.percent}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Revenue Projections */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <TrendingUp size={18} className="text-emerald-400"/> Revenue Projections (₹ Cr)
                  </h3>
                  
                  {/* Outer Wrapper with Explicit Height */}
                  <div className="h-56 mt-4 relative flex items-end justify-between border-b border-slate-800 pb-2 px-2 pt-8">
                    {/* Y-Axis guide lines */}
                    <div className="absolute top-4 left-0 right-0 border-t border-slate-800/60 pointer-events-none flex justify-end">
                      <span className="text-[10px] text-slate-500 bg-slate-900 px-1 -mt-2">₹80 Cr</span>
                    </div>
                    <div className="absolute top-1/2 left-0 right-0 border-t border-slate-800/40 pointer-events-none flex justify-end">
                      <span className="text-[10px] text-slate-500 bg-slate-900 px-1 -mt-2">₹40 Cr</span>
                    </div>
                    
                    {/* Chart Bars using dynamic Tailwind height rules */}
                    {[
                      { year: '2026', rev: '0.5', styleHeight: 'h-[5%]' },
                      { year: '2027', rev: '6.0', styleHeight: 'h-[15%]' },
                      { year: '2028', rev: '25.0', styleHeight: 'h-[40%]', breakeven: true },
                      { year: '2029', rev: '50.0', styleHeight: 'h-[70%]' },
                      { year: '2030', rev: '80.0', styleHeight: 'h-full' },
                    ].map((bar, i) => (
                      <div key={i} className="flex flex-col items-center group w-12 sm:w-14 h-full justify-end relative z-10">
                        {/* Hover Popup */}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-5 bg-slate-800 text-white px-2 py-1 rounded text-xs font-mono font-bold shadow-xl pointer-events-none whitespace-nowrap">
                          ₹{bar.rev} Cr
                        </div>
                        {/* Rendered Bar Element */}
                        <div className={`w-full rounded-t transition-all duration-500 hover:brightness-110 ${bar.styleHeight} ${bar.breakeven ? 'bg-gradient-to-t from-blue-600 to-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.1)]' : 'bg-gradient-to-t from-slate-800 to-blue-600'}`}></div>
                        {/* Labels */}
                        <span className="text-xs text-slate-400 mt-2 font-medium tracking-tight">{bar.year}</span>
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
        )}

        {/* ========================================================= */}
        {/* TAB 3: TECH VALIDATION (DEMO)                             */}
        {/* ========================================================= */}
        {activeTab === 'demo' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
            <div className="mb-6 p-6 bg-gradient-to-r from-slate-900 to-blue-950 border border-blue-500/30 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-lg">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  <Microscope className="text-blue-400"/> Edge-AI Platform Sandbox
                </h2>
                <p className="text-sm text-slate-400 max-w-2xl">
                  Simulating our proprietary local Semantic Memory engine. Inject physical events below to see how the system cross-references local habit graphs and triggers sub-30ms inferences without a single cloud ping.
                </p>
              </div>
              <div className="flex gap-4 shrink-0 bg-slate-950/50 p-3 rounded-xl border border-slate-800">
                <div className="text-center px-4 border-r border-slate-800">
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Cloud Packets</div>
                  <div className="text-xl font-mono font-bold text-emerald-400">0</div>
                </div>
                <div className="text-center px-4">
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Avg Latency</div>
                  <div className="text-xl font-mono font-bold text-cyan-400">{inferenceStats.latency || '--'}ms</div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-6">
              
              {/* Left Column: Live Telemetry & Injector */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Telemetry Stream */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm">
                  <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Radio size={16} className="text-rose-400 animate-pulse"/> Live Sensor Stream
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-slate-950 p-3 rounded-lg border border-slate-800/50">
                      <div className="flex items-center gap-3 text-sm text-slate-400"><Thermometer size={16}/> Avg Temp</div>
                      <div className="font-mono text-emerald-400 font-bold">{telemetry.temp}°C</div>
                    </div>
                    <div className="flex justify-between items-center bg-slate-950 p-3 rounded-lg border border-slate-800/50">
                      <div className="flex items-center gap-3 text-sm text-slate-400"><Sun size={16}/> Ambient Light</div>
                      <div className="font-mono text-amber-400 font-bold">{telemetry.lux} lux</div>
                    </div>
                    <div className="flex justify-between items-center bg-slate-950 p-3 rounded-lg border border-slate-800/50">
                      <div className="flex items-center gap-3 text-sm text-slate-400"><Zap size={16}/> Power Draw</div>
                      <div className="font-mono text-blue-400 font-bold">{telemetry.powerW} W</div>
                    </div>
                  </div>
                </div>

                {/* Scenario Injector */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm">
                  <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Activity size={16} className="text-indigo-400"/> Inject AI Scenario
                  </h3>
                  <div className="space-y-3">
                    <button 
                      onClick={() => runScenario('night_trip')}
                      disabled={isProcessing}
                      className="w-full text-left p-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors flex items-center gap-3 group"
                    >
                      <div className="p-2 bg-indigo-900/50 text-indigo-400 rounded-md group-hover:bg-indigo-500 group-hover:text-white transition-colors"><Moon size={18}/></div>
                      <div>
                        <div className="text-sm font-bold text-white">3:00 AM Bathroom Trip</div>
                        <div className="text-[10px] text-slate-400">Triggers hallway PIR sensor</div>
                      </div>
                    </button>

                    <button 
                      onClick={() => runScenario('arrival')}
                      disabled={isProcessing}
                      className="w-full text-left p-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors flex items-center gap-3 group"
                    >
                      <div className="p-2 bg-emerald-900/50 text-emerald-400 rounded-md group-hover:bg-emerald-500 group-hover:text-white transition-colors"><User size={18}/></div>
                      <div>
                        <div className="text-sm font-bold text-white">Evening Arrival (6:30 PM)</div>
                        <div className="text-[10px] text-slate-400">Triggers door BLE / Camera</div>
                      </div>
                    </button>

                    <button 
                      onClick={() => runScenario('empty')}
                      disabled={isProcessing}
                      className="w-full text-left p-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors flex items-center gap-3 group"
                    >
                      <div className="p-2 bg-rose-900/50 text-rose-400 rounded-md group-hover:bg-rose-500 group-hover:text-white transition-colors"><WifiOff size={18}/></div>
                      <div>
                        <div className="text-sm font-bold text-white">House is Empty</div>
                        <div className="text-[10px] text-slate-400">Zero motion for 45 mins</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Device State & Pipeline */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                
                {/* Physical Device State Map */}
                <div className="grid sm:grid-cols-3 gap-4">
                  {/* Lights */}
                  <div className={`p-4 rounded-xl border transition-all duration-500 ${demoState.lights.state ? 'bg-amber-900/20 border-amber-500/50' : 'bg-slate-900 border-slate-800'}`}>
                    <div className="flex justify-between items-center mb-4">
                      <div className={`p-2 rounded-lg ${demoState.lights.state ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-800 text-slate-500'}`}><Zap size={20} /></div>
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-full border ${demoState.lights.state ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 'bg-slate-800 text-slate-500 border-slate-700'}`}>
                        {demoState.lights.state ? `ON • ${demoState.lights.brightness}%` : 'OFF'}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">Smart Panels</h4>
                    <p className="text-xs font-mono text-slate-400">{demoState.lights.color}</p>
                  </div>

                  {/* AC */}
                  <div className={`p-4 rounded-xl border transition-all duration-500 ${demoState.ac.state ? 'bg-cyan-900/20 border-cyan-500/50' : 'bg-slate-900 border-slate-800'}`}>
                    <div className="flex justify-between items-center mb-4">
                      <div className={`p-2 rounded-lg ${demoState.ac.state ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-500'}`}><Activity size={20} /></div>
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-full border ${demoState.ac.state ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' : 'bg-slate-800 text-slate-500 border-slate-700'}`}>
                        {demoState.ac.state ? `${demoState.ac.temp}°C` : 'STANDBY'}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">HVAC Node</h4>
                    <p className="text-xs font-mono text-slate-400">{demoState.ac.mode}</p>
                  </div>

                  {/* Security */}
                  <div className={`p-4 rounded-xl border transition-all duration-500 ${demoState.security.state ? 'bg-emerald-900/20 border-emerald-500/50' : 'bg-rose-900/20 border-rose-500/50'}`}>
                    <div className="flex justify-between items-center mb-4">
                      <div className={`p-2 rounded-lg ${demoState.security.state ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-500'}`}><ShieldCheck size={20} /></div>
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-full border ${demoState.security.state ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-slate-800 text-slate-500 border-slate-700'}`}>
                        {demoState.security.state ? 'ARMED' : 'DISARMED'}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">Security Array</h4>
                    <p className="text-xs font-mono text-slate-400 truncate pr-2" title={demoState.security.level}>{demoState.security.level}</p>
                  </div>
                </div>

                {/* Processing Pipeline / RAG Log */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg flex-1 flex flex-col h-full min-h-[300px]">
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <Database className="text-indigo-400" size={18}/>
                      <h3 className="font-bold text-sm uppercase tracking-wider text-slate-300">RAG Context Engine Logs</h3>
                    </div>
                    <div className="text-xs text-slate-500 font-mono flex items-center gap-3">
                       <span>Graph Nodes: <strong className="text-indigo-400">{inferenceStats.nodes}</strong></span>
                       <span>Local Tokens Gen: <strong className="text-blue-400">{inferenceStats.tokens}</strong></span>
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                    {aiLogs.map((log, i) => (
                      <div key={i} className={`animate-in slide-in-from-right-2 fade-in duration-300 p-4 rounded-xl border ${i === 0 ? 'bg-slate-950/80 border-slate-700 shadow-inner' : 'bg-transparent border-slate-800/50 opacity-60'}`}>
                        <div className="text-[10px] text-slate-500 mb-3 flex items-center gap-2">
                          <Clock size={12}/> {log.time} 
                          {i === 0 && <span className="ml-2 px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 text-[9px] uppercase tracking-wider border border-blue-500/20">Latest Inference</span>}
                        </div>
                        
                        <div className="grid sm:grid-cols-3 gap-4 font-mono text-xs">
                          <div>
                            <div className="text-[9px] uppercase text-slate-500 mb-1">1. Edge Input</div>
                            <div className="text-slate-300">{log.sensor}</div>
                          </div>
                          <div>
                            <div className="text-[9px] uppercase text-indigo-400 mb-1 flex items-center gap-1"><Database size={10}/> 2. Semantic Search</div>
                            <div className="text-indigo-200">{log.rag}</div>
                          </div>
                          <div>
                            <div className="text-[9px] uppercase text-emerald-400 mb-1 flex items-center gap-1"><Cpu size={10}/> 3. Action Generated</div>
                            <div className="text-emerald-200">{log.action}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </main>

      {/* ================= MODALS / DEEP DIVES ================= */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1120]/90 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
            
            <div className="flex justify-between items-center p-6 border-b border-slate-800 bg-slate-900">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                {activeModal === 'competition' && <><Layers className="text-blue-400"/> Competitive Landscape diligence</>}
                {activeModal === 'market' && <><Globe className="text-cyan-400"/> Market Sizing Breakdown</>}
                {activeModal === 'manufacturing' && <><Factory className="text-emerald-400"/> Manufacturing & Bill of Materials (BOM)</>}
                {activeModal === 'gtm' && <><Target className="text-indigo-400"/> IP Portfolio & Go-To-Market</>}
              </h2>
              <button onClick={() => setActiveModal(null)} className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors text-slate-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto bg-[#0B1120]/50">
              
              {/* CONTENT 1: COMPETITION */}
              {activeModal === 'competition' && (
                <div className="space-y-6">
                  <p className="text-slate-300">Major players excel at connectivity and scale, but none offer a fully offline, memory-driven AI assistant. That is our niche.</p>
                  <div className="overflow-x-auto rounded-xl border border-slate-800">
                    <table className="w-full text-left border-collapse bg-slate-900">
                      <thead>
                        <tr className="border-b border-slate-700 text-slate-400 text-sm bg-slate-950/50">
                          <th className="py-4 px-6 w-1/4">Competitor</th>
                          <th className="py-4 px-6 w-1/3">Strengths</th>
                          <th className="py-4 px-6">Weaknesses / Our Edge</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr className="border-b border-slate-800/50 group relative hover:bg-slate-800/30 transition-colors">
                          <td className="py-5 px-6 font-bold text-white">Amazon Alexa / Echo</td>
                          <td className="py-5 px-6 text-slate-300 pr-20">
                            <span className="border-b border-dashed border-slate-500 cursor-help text-slate-200">#1 global speaker (~30% share)</span>; massive ecosystem; low device cost.
                            <a href="https://www.globenewswire.com/news-release/2025/02/17/3027178/0/en/global-smart-speaker-market-to-worth-over-us-46-87-billion-by-2033-astute-analytica.html" target="_blank" rel="noreferrer" className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950 p-1.5 rounded border border-slate-700 hover:bg-indigo-600 text-slate-300 hover:text-white flex items-center gap-1 text-[11px] z-10 shadow-lg">
                              <ExternalLink size={12} /> Source
                            </a>
                          </td>
                          <td className="py-5 px-6 text-red-400">Cloud-dependent (privacy risks); data collected centrally; relies on internet. Generic features.</td>
                        </tr>
                        <tr className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                          <td className="py-5 px-6 font-bold text-white">Google Assistant / Nest</td>
                          <td className="py-5 px-6 text-slate-300">Strong AI/ML engine; multi-language; Matter support.</td>
                          <td className="py-5 px-6 text-red-400">Cloud-centric; privacy concerns; premium devices are costly.</td>
                        </tr>
                        <tr className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                          <td className="py-5 px-6 font-bold text-white">Apple HomeKit</td>
                          <td className="py-5 px-6 text-slate-300">Privacy-centric; highly cohesive ecosystem.</td>
                          <td className="py-5 px-6 text-red-400">Smallest share; expensive hardware; closed platform.</td>
                        </tr>
                        <tr className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                          <td className="py-5 px-6 font-bold text-white">Chinese OEMs (Xiaomi)</td>
                          <td className="py-5 px-6 text-slate-300">Very low-cost; broad range; large presence in India.</td>
                          <td className="py-5 px-6 text-red-400">Questionable data practices; "dumb" logic without true AI memory.</td>
                        </tr>
                        <tr className="bg-blue-900/10 border-l-4 border-blue-500">
                          <td className="py-5 px-6 font-bold text-blue-400">Technogetic (Us)</td>
                          <td className="py-5 px-6 text-blue-200">100% Offline Edge-AI; Semantic Memory; Integrated Hardware IP.</td>
                          <td className="py-5 px-6 text-emerald-400 font-medium">Unmatched privacy & latency. Strong margins via direct manufacturing.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* CONTENT 2: MARKET */}
              {activeModal === 'market' && (
                <div className="space-y-8">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 relative group transition-colors hover:bg-slate-800 shadow-md">
                      <a href="https://www.grandviewresearch.com/industry-analysis/smart-homes-industry" target="_blank" rel="noreferrer" className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950 p-1.5 rounded-md border border-slate-600 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center gap-1 text-xs shadow-lg" title="Source: Grand View Research">
                        <ExternalLink size={14} /> Source
                      </a>
                      <div className="text-xl font-bold text-white mb-1">TAM</div>
                      <div className="text-sm text-blue-400 mb-3">Global IoT / Home Auto</div>
                      <p className="text-sm text-slate-300 leading-relaxed">~$150B (11-12 lakh Cr) in 2025, growing to ₹40-50 lakh Cr by 2030.</p>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 relative group transition-colors hover:bg-slate-800 shadow-md">
                      <a href="https://cionlabs.com/the-smart-home-revolution-a-2026-market-research-outlook-for-indias-home-automation-industry/" target="_blank" rel="noreferrer" className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950 p-1.5 rounded-md border border-slate-600 hover:bg-cyan-600 text-slate-300 hover:text-white flex items-center gap-1 text-xs shadow-lg" title="Source: Cionlabs Outlook">
                        <ExternalLink size={14} /> Source
                      </a>
                      <div className="text-xl font-bold text-white mb-1">SAM</div>
                      <div className="text-sm text-cyan-400 mb-3">India Home Automation</div>
                      <p className="text-sm text-slate-300 leading-relaxed">~₹11,000-12,000 Cr ($13-14B) by 2026, rising to ~₹20,000 Cr by 2030.</p>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 shadow-md">
                      <div className="text-xl font-bold text-white mb-1">SOM</div>
                      <div className="text-sm text-emerald-400 mb-3">Our Target Market</div>
                      <p className="text-sm text-slate-300 leading-relaxed">Urban premium homes. Targeting ~0.5% of SAM in first 5 years (₹100-150 Cr potential).</p>
                    </div>
                  </div>
                </div>
              )}

              {/* CONTENT 3: MANUFACTURING & ROADMAP */}
              {activeModal === 'manufacturing' && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-2">Unit Bill of Materials (BOM) & Margin Analysis</h3>
                    <div className="overflow-x-auto border border-slate-700 rounded-xl">
                      <table className="w-full text-left text-sm bg-slate-900">
                        <thead>
                          <tr className="text-slate-400 border-b border-slate-700 bg-slate-950/50">
                            <th className="py-3 px-4">Component</th>
                            <th className="py-3 px-4">Cost Estimate (₹)</th>
                            <th className="py-3 px-4">Technical Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-800/50 hover:bg-slate-800/30"><td className="py-3 px-4 text-white font-medium">MCU / Logic SoC</td><td className="py-3 px-4 text-slate-300">200 - 400</td><td className="py-3 px-4 text-slate-400">e.g., ESP32 (switch/sensor), ARM SoC (Hub)</td></tr>
                          <tr className="border-b border-slate-800/50 hover:bg-slate-800/30"><td className="py-3 px-4 text-white font-medium">Wireless / Radio module</td><td className="py-3 px-4 text-slate-300">150 - 250</td><td className="py-3 px-4 text-slate-400">Integrated Wi-Fi/BT/Zigbee</td></tr>
                          <tr className="border-b border-slate-800/50 hover:bg-slate-800/30"><td className="py-3 px-4 text-white font-medium">Actuators / Relays</td><td className="py-3 px-4 text-slate-300">80 - 150</td><td className="py-3 px-4 text-slate-400">AC Modules, Switching mech.</td></tr>
                          <tr className="border-b border-slate-800/50 hover:bg-slate-800/30"><td className="py-3 px-4 text-white font-medium">Injection Enclosure</td><td className="py-3 px-4 text-slate-300">60 - 120</td><td className="py-3 px-4 text-slate-400">Custom ABS Plastic Housing</td></tr>
                          <tr className="border-b border-slate-800/50 hover:bg-slate-800/30"><td className="py-3 px-4 text-white font-medium">PCB & Passives</td><td className="py-3 px-4 text-slate-300">70 - 150</td><td className="py-3 px-4 text-slate-400">2-Layer FR4, SMD components</td></tr>
                          <tr className="bg-emerald-900/20 font-bold border-t border-emerald-900/50"><td className="py-4 px-4 text-white">Total BOM Cost (Est.)</td><td className="py-4 px-4 text-white">₹640 - 1,200</td><td className="py-4 px-4 text-emerald-400">Targeting ~68% Gross Margin at ₹2,500 ASP</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Production Phasing</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-5 rounded-xl bg-slate-900 border border-slate-700 shadow-sm">
                        <div className="text-blue-400 text-sm font-bold mb-1">PHASE 1 (M1-6)</div>
                        <strong className="text-white text-lg block mb-2">R&D & Prototypes</strong>
                        <p className="text-sm text-slate-400">Lab setup, small SMT station. 1-gang switch & hub prototypes. Initial IP filings.</p>
                      </div>
                      <div className="p-5 rounded-xl bg-slate-900 border border-slate-700 shadow-sm">
                        <div className="text-blue-400 text-sm font-bold mb-1">PHASE 2 (M7-12)</div>
                        <strong className="text-white text-lg block mb-2">Pilot & AI Integration</strong>
                        <p className="text-sm text-slate-400">Fabricate injection molds. Run pilot batch (200-500 units). Integrate offline LLM & semantic engine.</p>
                      </div>
                      <div className="p-5 rounded-xl bg-slate-900 border border-slate-700 shadow-sm">
                        <div className="text-blue-400 text-sm font-bold mb-1">PHASE 3 (M16-24)</div>
                        <strong className="text-white text-lg block mb-2">Launch & Scale</strong>
                        <p className="text-sm text-slate-400">Scale manufacturing via local EMS. B2B builder partnerships. Begin generating support/license rev.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* CONTENT 4: IP & GTM */}
              {activeModal === 'gtm' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 shadow-sm">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><Lock className="text-indigo-400"/> Defensible IP Portfolio</h3>
                    <ul className="space-y-4">
                      <li className="bg-slate-950/50 p-4 rounded-lg border border-slate-800">
                        <strong className="text-white block mb-1 text-sm uppercase tracking-wide">Hardware Design Patents</strong>
                        <span className="text-slate-400 text-sm">"Wearable Touch Switch Hinge" (tactile feel), "Modular Multi-Gang Enclosure System" (flat-pack assembly).</span>
                      </li>
                      <li className="bg-slate-950/50 p-4 rounded-lg border border-slate-800">
                        <strong className="text-white block mb-1 text-sm uppercase tracking-wide">Software & AI Methods</strong>
                        <span className="text-slate-400 text-sm">"Context-aware Home Event Graph" (data structure for storing habits), "Offline RAG Engine on Edge".</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 shadow-sm">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><Target className="text-rose-400"/> Go-To-Market Execution</h3>
                    <ul className="space-y-5 text-sm">
                      <li className="flex gap-3">
                        <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={18}/>
                        <div><strong className="text-white block mb-1">Target Segments</strong> Premium housing, villas, luxury apts in tier-1 urban centers (Mumbai, Bengaluru) valuing absolute privacy.</div>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={18}/>
                        <div><strong className="text-white block mb-1">Sales Channels</strong> Direct B2B tie-ups with luxury builders/architects for pre-installed "Demo Homes". D2C via website later.</div>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={18}/>
                        <div><strong className="text-white block mb-1">Pricing Model</strong> High-margin Hardware (₹2,500 ASP). Upsell premium SaaS tier for advanced AI memory routines.</div>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-slate-800 bg-slate-900 flex justify-end">
              <button onClick={() => setActiveModal(null)} className="px-6 py-2 rounded-lg bg-slate-800 text-white font-medium hover:bg-slate-700 transition-colors border border-slate-700">
                Close Diligence Panel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Footer */}
      <footer className="text-center pb-8 pt-4 mt-8 border-t border-slate-800/50 max-w-7xl mx-auto px-4">
         <p className="text-slate-600 text-xs font-mono uppercase tracking-widest">Confidential Pitch Deck • Technogetic Pvt. Ltd. • Strict NDA Applies</p>
      </footer>

    </div>
  );
}