"use client";

import React, { useState, useEffect } from "react";
import {
  WifiOff,
  BrainCircuit,
  Zap,
  ShieldCheck,
  ChevronRight,
  Home,
  AlertTriangle,
  Thermometer,
  Wifi,
  Eye,
  Server,
  ArrowRight,
  Cpu,
  Radio,
  CheckCircle2,
  Leaf,
  Moon,
  DoorOpen,
  Plug,
  Smartphone,
  Clock,
} from "lucide-react";

/* ─── Animated counter hook ─────────────────────────────── */
function useCounter(target: number, duration = 1800, suffix = "") {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return `${value}${suffix}`;
}

/* ─── Sub-components ─────────────────────────────────────── */

function ImpactStat({
  target, suffix, label, sub, color,
}: { target: number; suffix: string; label: string; sub: string; color: string }) {
  const val = useCounter(target, 1600, suffix);
  return (
    <div className="text-center group">
      <div className={`text-4xl font-black tracking-tight mb-1 ${color}`}>{val}</div>
      <div className="text-sm font-bold text-white mb-0.5">{label}</div>
      <div className="text-xs text-slate-500">{sub}</div>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────── */

export default function IntroTab({ onNavigate }: { onNavigate: (tab: string) => void }) {
  const [activeScenario, setActiveScenario] = useState(0);

  const scenarios = [
    {
      time: "3:14 AM",
      Icon: Moon,
      iconBg: "bg-indigo-500/15",
      iconColor: "text-indigo-400",
      title: "Middle-of-the-Night Trip",
      story:
        "You get up for water. Before you take a step, the hallway softly glows warm amber at 10% brightness — your regular path. The bedroom stays cool and quiet. Security stays armed on the perimeter. All of this happened in 18ms. No internet. No voice command. The house just… knew.",
      devices: ["Hallway lights at 10% warm", "Bedroom AC in quiet mode", "Security on perimeter only"],
      color: "indigo",
    },
    {
      time: "6:30 PM",
      Icon: DoorOpen,
      iconBg: "bg-emerald-500/15",
      iconColor: "text-emerald-400",
      title: "Coming Home After Work",
      story:
        "Your BLE signal is detected at the front door. The hub cross-checks your arrival pattern — Thursday, post-gym, hot weather outside. By the time you push the door open: AC is blasting at 21°C, lights are at 80% daylight, and security has disarmed. Zero interaction needed.",
      devices: ["AC rapid cool at 21°C", "Living room at 80% daylight", "Security disarmed"],
      color: "emerald",
    },
    {
      time: "11:00 AM",
      Icon: Home,
      iconBg: "bg-rose-500/15",
      iconColor: "text-rose-400",
      title: "House Has Been Empty",
      story:
        "No motion detected for 45 minutes. The AI cross-checks your calendar — no one is home until 6 PM. Every light and HVAC node powers down. All motion sensors activate indoors. The house enters a watchful, energy-saving sleep. Your electricity bill will thank you.",
      devices: ["All lights OFF", "HVAC in eco standby", "All sensors at MAX armed"],
      color: "rose",
    },
  ];

  const colorMap: Record<string, { badge: string; dot: string; border: string; text: string; bg: string }> = {
    indigo: { badge: "bg-indigo-500/15 border-indigo-500/25 text-indigo-300", dot: "bg-indigo-400", border: "border-indigo-500/30", text: "text-indigo-400", bg: "bg-indigo-900/10" },
    emerald: { badge: "bg-emerald-500/15 border-emerald-500/25 text-emerald-300", dot: "bg-emerald-400", border: "border-emerald-500/30", text: "text-emerald-400", bg: "bg-emerald-900/10" },
    rose: { badge: "bg-rose-500/15 border-rose-500/25 text-rose-300", dot: "bg-rose-400", border: "border-rose-500/30", text: "text-rose-400", bg: "bg-rose-900/10" },
  };

  const active = scenarios[activeScenario];
  const c = colorMap[active.color];

  return (
    <div className="tab-enter space-y-16 max-w-6xl mx-auto">

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section className="text-center pt-4 pb-2">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 live-dot" />
          Technogetic Pvt. Ltd. — Seed Pitch 2026
        </div>

        <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-[1.08] tracking-tight">
          Your Home Should Think
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">
            Not Just Listen.
          </span>
        </h1>

        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
          We&apos;re building India&apos;s first smart home platform where the intelligence lives{" "}
          <span className="text-white font-semibold">inside your home</span> — not in a data centre
          in Virginia. No cloud. No latency. No privacy trade-offs. Just a home that genuinely
          understands you.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => onNavigate("overview")}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-blue-900/30"
          >
            See Full Pitch <ChevronRight size={16} />
          </button>
          <button
            onClick={() => onNavigate("demo")}
            className="px-6 py-3 rounded-xl bg-slate-800/60 text-white font-medium text-sm hover:bg-slate-700/60 transition-colors border border-slate-700 flex items-center gap-2"
          >
            <Cpu size={15} /> Watch the AI in Action
          </button>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          THE PROBLEM — split visual
      ══════════════════════════════════════════════════════ */}
      <section className="space-y-5">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-3">
            Today&apos;s &ldquo;Smart&rdquo; Homes Are{" "}
            <span className="text-rose-400">Broken by Design</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            You paid ₹20,000+ for an Alexa-powered home. Here&apos;s what you actually got.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              Icon: Wifi,
              color: "text-rose-400",
              bg: "bg-rose-500/10 border-rose-500/20",
              title: "Internet Goes Down",
              desc: "Your lights stop working. Your thermostat freezes. Your \"smart\" home becomes dumb the moment your ISP has a bad day.",
            },
            {
              Icon: Eye,
              color: "text-amber-400",
              bg: "bg-amber-500/10 border-amber-500/20",
              title: "You Are the Product",
              desc: "Every voice command, every sensor event, every habit is shipped to Amazon/Google servers. Your daily routine is their training data.",
            },
            {
              Icon: Clock,
              color: "text-orange-400",
              bg: "bg-orange-500/10 border-orange-500/20",
              title: "300–800ms Delay",
              desc: "Cloud round-trips add real, perceptible lag. You say \"turn off the light\" and wait. A computer in another country has to agree first.",
            },
            {
              Icon: AlertTriangle,
              color: "text-red-400",
              bg: "bg-red-500/10 border-red-500/20",
              title: "Rigid, Dumb Rules",
              desc: "\"Turn on at 6 PM.\" If your schedule changes, your home doesn't know. It just keeps running the same script, every single day.",
            },
          ].map(({ Icon, color, bg, title, desc }, i) => (
            <div
              key={i}
              className="card-enter p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:-translate-y-1 transition-transform duration-200 group"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${bg} ${color} group-hover:scale-110 transition-transform duration-200`}>
                <Icon size={20} />
              </div>
              <h3 className="font-bold text-white text-sm mb-2">{title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          OUR ANSWER — Architecture Flow
      ══════════════════════════════════════════════════════ */}
      <section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">
            The Technogetic Answer:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Intelligence at the Edge
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            We put a brain inside your home. It learns. It adapts. It acts — all without touching the internet.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="grad-border p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">

            {/* Step 1 — Sensors */}
            <div className="flex-1 text-center group">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200 shadow-lg shadow-blue-900/10">
                <Radio size={28} className="text-blue-400" />
              </div>
              <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Step 1</div>
              <h3 className="text-base font-bold text-white mb-2">Sense the World</h3>
              <p className="text-xs text-slate-400 leading-relaxed max-w-[180px] mx-auto">
                Motion sensors, temperature, ambient light, BLE presence — all feeding data in real time.
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-1">
                {["PIR", "BLE", "Temp", "Lux", "Camera"].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/15 text-blue-300 text-[10px]">{t}</span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center gap-1 text-slate-700">
              <div className="hidden lg:block w-12 h-px bg-gradient-to-r from-blue-500/40 to-indigo-500/40" />
              <ArrowRight size={20} className="text-slate-600 hidden lg:block" />
              <div className="hidden lg:block w-12 h-px bg-gradient-to-r from-indigo-500/40 to-violet-500/40" />
              <div className="lg:hidden text-2xl text-slate-700">↓</div>
            </div>

            {/* Step 2 — Edge Brain */}
            <div className="flex-1 text-center group relative">
              {/* Glow ring */}
              <div className="absolute inset-0 flex items-start justify-center pt-0 pointer-events-none">
                <div className="w-20 h-20 rounded-full bg-indigo-500/10 blur-xl" />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200 shadow-lg shadow-indigo-900/20 relative">
                <BrainCircuit size={28} className="text-indigo-400" />
              </div>
              <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">Step 2</div>
              <h3 className="text-base font-bold text-white mb-2">Edge AI Thinks Locally</h3>
              <p className="text-xs text-slate-400 leading-relaxed max-w-[180px] mx-auto">
                Our proprietary Semantic Memory Engine cross-references 1,400+ habit nodes stored in edge RAM. Zero cloud.
              </p>
              <div className="mt-3">
                <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-bold tracking-wider uppercase">
                  sub-30ms inference
                </span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center gap-1">
              <div className="hidden lg:block w-12 h-px bg-gradient-to-r from-violet-500/40 to-emerald-500/40" />
              <ArrowRight size={20} className="text-slate-600 hidden lg:block" />
              <div className="hidden lg:block w-12 h-px bg-gradient-to-r from-emerald-500/40 to-teal-500/40" />
              <div className="lg:hidden text-2xl text-slate-700">↓</div>
            </div>

            {/* Step 3 — Act */}
            <div className="flex-1 text-center group">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200 shadow-lg shadow-emerald-900/10">
                <Zap size={28} className="text-emerald-400" />
              </div>
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">Step 3</div>
              <h3 className="text-base font-bold text-white mb-2">Smart Action Happens</h3>
              <p className="text-xs text-slate-400 leading-relaxed max-w-[180px] mx-auto">
                The right lights, the right temperature, the right security mode — all triggered perfectly, every time.
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-1">
                {["Lights", "HVAC", "Security", "Locks"].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/15 text-emerald-300 text-[10px]">{t}</span>
                ))}
              </div>
            </div>

          </div>

          {/* Cloud comparison strip */}
          <div className="mt-8 pt-6 border-t border-slate-800 grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 bg-rose-900/10 border border-rose-500/15 rounded-xl p-4">
              <Server size={20} className="text-rose-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-rose-400 mb-0.5">Others: Cloud Route</div>
                <div className="text-xs text-slate-400">
                  Sensor → Your Router → ISP → AWS/Google → Back to your home → Device acts{" "}
                  <span className="text-rose-300 font-semibold">(300–800ms + internet required)</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-emerald-900/10 border border-emerald-500/15 rounded-xl p-4">
              <WifiOff size={20} className="text-emerald-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-emerald-400 mb-0.5">Technogetic: Local Route</div>
                <div className="text-xs text-slate-400">
                  Sensor → Edge Hub (in your home) → Device acts{" "}
                  <span className="text-emerald-300 font-semibold">(&lt;30ms, zero internet needed)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          A DAY IN YOUR HOME (interactive scenario)
      ══════════════════════════════════════════════════════ */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-3">
            A Day in a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              Technogetic Home
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            No app. No commands. No rules to set up. Just a home that reads the moment.
          </p>
        </div>

        <div className="grad-border p-1 rounded-2xl">
          {/* Scenario selector */}
          <div className="flex rounded-xl overflow-hidden">
            {scenarios.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveScenario(i)}
                className={`flex-1 px-4 py-3 text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2
                  ${activeScenario === i
                    ? "bg-slate-800/80 text-white"
                    : "text-slate-500 hover:text-slate-300 hover:bg-slate-800/30"
                  }`}
              >
                <s.Icon size={15} />
                <span className="hidden sm:inline">{s.title.split(" ").slice(0, 3).join(" ")}</span>
                <span className="sm:hidden">{s.time}</span>
              </button>
            ))}
          </div>

          {/* Scenario content */}
          <div className={`p-6 rounded-b-2xl ${c.bg}`}>
            <div className="flex flex-col md:flex-row gap-6 items-start">

              {/* Story */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${active.iconBg} ${active.iconColor}`}>
                    <active.Icon size={20} />
                  </div>
                  <div>
                    <div className={`text-xs font-bold uppercase tracking-widest ${c.text} mb-0.5`}>
                      {active.time}
                    </div>
                    <h3 className="text-lg font-bold text-white">{active.title}</h3>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed border-l-2 pl-4 border-slate-700 italic">
                  &ldquo;{active.story}&rdquo;
                </p>
              </div>

              {/* Device action strip */}
              <div className="md:w-56 shrink-0 space-y-2">
                <div className={`text-[10px] font-bold uppercase tracking-widest ${c.text} mb-3`}>
                  What the home did
                </div>
                {active.devices.map((device, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-2.5 px-3 py-2.5 rounded-xl border text-xs font-mono ${c.badge} ${c.border}`}
                  >
                    <CheckCircle2 size={13} className={`${c.text} shrink-0 mt-0.5`} />
                    {device}
                  </div>
                ))}
                <div className="pt-2 flex items-center gap-1.5 text-[10px] text-slate-500">
                  <WifiOff size={11} /> No internet used
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          IMPACT STATS
      ══════════════════════════════════════════════════════ */}
      <section className="grad-border p-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-2">The Real-World Impact</h2>
          <p className="text-slate-400">What our platform delivers for every household</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <ImpactStat target={30} suffix="ms" label="Max Inference Time" sub="vs 300–800ms cloud" color="text-cyan-400" />
          <ImpactStat target={40} suffix="%" label="Energy Saved" sub="vs always-on cloud homes" color="text-emerald-400" />
          <ImpactStat target={0} suffix="" label="Cloud Packets Sent" sub="100% offline operation" color="text-blue-400" />
          <ImpactStat target={68} suffix="%" label="Gross Margin" sub="on our hardware units" color="text-indigo-400" />
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {[
            {
              Icon: ShieldCheck,
              color: "text-emerald-400",
              bg: "bg-emerald-500/10 border-emerald-500/20",
              title: "Absolute Privacy",
              desc: "No data ever leaves your home. Your habits belong to you — not Amazon, not Google, not us.",
            },
            {
              Icon: Leaf,
              color: "text-teal-400",
              bg: "bg-teal-500/10 border-teal-500/20",
              title: "Smarter Energy Use",
              desc: "The system automatically powers down when no one is home, reducing energy wastage by up to 40% compared to rule-based automation.",
            },
            {
              Icon: Home,
              color: "text-violet-400",
              bg: "bg-violet-500/10 border-violet-500/20",
              title: "A Home That Evolves",
              desc: "Every week the semantic memory gets richer. The home gets better at anticipating you without anyone programming anything.",
            },
          ].map(({ Icon, color, bg, title, desc }, i) => (
            <div key={i} className={`p-5 rounded-xl border ${bg} hover:-translate-y-0.5 transition-transform duration-200`}>
              <div className={`p-2.5 rounded-xl ${bg} ${color} w-fit mb-3`}>
                <Icon size={18} />
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">{title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          WHAT WE MAKE — product snapshot
      ══════════════════════════════════════════════════════ */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-3">
            What We&apos;re Building
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            An integrated hardware + software ecosystem — designed and manufactured in India.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              Icon: Plug,
              iconGradient: "from-blue-600 to-blue-900",
              name: "Smart Touch Panels",
              desc: "In-wall switches with capacitive touch, local BLE, and edge firmware. BOM ~₹800. ASP ₹2,500.",
              tag: "Core Product",
              tagColor: "text-blue-400 border-blue-500/20 bg-blue-500/10",
            },
            {
              Icon: BrainCircuit,
              iconGradient: "from-indigo-600 to-indigo-900",
              name: "Edge-AI Hub",
              desc: "The brain of the home. Runs our Semantic Memory Engine locally. ARM SoC + Wi-Fi/Zigbee/BLE mesh.",
              tag: "Proprietary",
              tagColor: "text-indigo-400 border-indigo-500/20 bg-indigo-500/10",
            },
            {
              Icon: Thermometer,
              iconGradient: "from-cyan-500 to-cyan-800",
              name: "Sensor Array",
              desc: "PIR, temperature, humidity, ambient light — all feeding data into the edge brain continuously.",
              tag: "In-House Design",
              tagColor: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10",
            },
            {
              Icon: Smartphone,
              iconGradient: "from-slate-600 to-slate-800",
              name: "Local App",
              desc: "A companion app that talks only to your hub on your LAN. Analytics, habit overrides — zero cloud.",
              tag: "Coming Phase 2",
              tagColor: "text-slate-400 border-slate-600 bg-slate-800/60",
            },
          ].map(({ Icon, iconGradient, name, desc, tag, tagColor }, i) => (
            <div
              key={i}
              className="card-enter p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:-translate-y-1 transition-all duration-200 group flex flex-col"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${iconGradient} flex items-center justify-center mb-4 shadow-lg ring-1 ring-white/10 group-hover:scale-105 transition-transform duration-300`}>
                <Icon size={22} className="text-white" strokeWidth={1.5} />
              </div>
              <div className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border mb-3 ${tagColor} w-fit`}>
                {tag}
              </div>
              <h3 className="text-sm font-bold text-white mb-2">{name}</h3>
              <p className="text-xs text-slate-400 leading-relaxed flex-1">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════════════════════ */}
      <section className="text-center pb-4">
        <div className="inline-block grad-border p-px rounded-2xl">
          <div className="bg-gradient-to-br from-slate-900 to-blue-950/60 rounded-[15px] px-10 py-10">
            <BrainCircuit size={40} className="text-blue-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">
              Ready to go deeper?
            </h2>
            <p className="text-slate-400 text-sm mb-6 max-w-sm mx-auto">
              Explore our business model, technology validation, and the founder
              behind the vision.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Exec Summary", tab: "overview", primary: true },
                { label: "Financials & Ops", tab: "financials", primary: false },
                { label: "Tech Validation", tab: "demo", primary: false },
                { label: "Founder", tab: "founder", primary: false },
              ].map(({ label, tab, primary }) => (
                <button
                  key={tab}
                  onClick={() => onNavigate(tab)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-1.5 transition-all
                    ${primary
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:brightness-110 shadow-lg shadow-blue-900/30"
                      : "bg-slate-800/70 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700/70"
                    }`}
                >
                  {label} <ChevronRight size={14} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
