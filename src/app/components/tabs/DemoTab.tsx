"use client";

import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Cpu,
  WifiOff,
  Zap,
  Activity,
  BrainCircuit,
  Microscope,
  Thermometer,
  Sun,
  Database,
  Radio,
  Clock,
} from "lucide-react";

/* ─── Custom scenario SVG icons ─────────────────────────── */
function ScenarioIcon({ id }: { id: string }) {
  const base = { fill: "none", stroke: "white", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (id) {
    case "night_trip": return (
      <svg viewBox="0 0 24 24" width="26" height="26" {...base}>
        <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
        <circle cx="17" cy="5"  r="0.8" fill="white" stroke="none" />
        <circle cx="20" cy="8"  r="0.6" fill="white" stroke="none" />
        <circle cx="19" cy="3"  r="0.5" fill="white" stroke="none" />
      </svg>
    );
    case "arrival": return (
      <svg viewBox="0 0 24 24" width="26" height="26" {...base}>
        <rect x="3" y="3" width="12" height="18" rx="1.5" />
        <path d="M9 12h12" /><path d="m16 8 4 4-4 4" />
        <path d="M3 20h18" />
        <circle cx="7.5" cy="12" r="0.8" fill="white" stroke="none" />
      </svg>
    );
    case "empty": return (
      <svg viewBox="0 0 24 24" width="26" height="26" {...base}>
        <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
        <rect x="9" y="13" width="6" height="8" rx="1" />
        <path d="M12 13v-2" />
        <circle cx="12" cy="10" r="1.2" />
      </svg>
    );
    case "movie_night": return (
      <svg viewBox="0 0 24 24" width="26" height="26" {...base}>
        <rect x="2" y="8" width="20" height="13" rx="2" />
        <path d="M7 8V5" /><path d="M12 8V5" /><path d="M17 8V5" />
        <path d="M2 8h20" />
        <path d="m10 12 5 3-5 3z" fill="rgba(255,255,255,0.35)" stroke="white" strokeWidth="1.4" />
      </svg>
    );
    case "morning_routine": return (
      <svg viewBox="0 0 24 24" width="26" height="26" {...base}>
        <circle cx="12" cy="11" r="4" />
        <path d="M12 2v2" /><path d="M12 18v1" />
        <path d="m4.22 4.93 1.42 1.42" /><path d="m18.36 4.93-1.42 1.42" />
        <path d="M2 11h2" /><path d="M20 11h2" />
        <path d="M3 17h18" />
        <path d="M7 20h10" />
      </svg>
    );
    case "baby_sleep": return (
      <svg viewBox="0 0 24 24" width="26" height="26" {...base}>
        <path d="M12 22c5 0 9-2.69 9-6s-4-6-9-6-9 2.69-9 6 4 6 9 6z" />
        <path d="M9.5 8.5A3 3 0 0 0 15 6.5" />
        <path d="M16 3c.5.8.5 1.7 0 2.5" />
        <path d="M18 1c1 1.5 1 3.5 0 5" />
        <circle cx="12" cy="16" r="1.5" fill="rgba(255,255,255,0.3)" />
      </svg>
    );
    case "intruder": return (
      <svg viewBox="0 0 24 24" width="26" height="26" {...base}>
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <circle cx="12" cy="17" r="0.8" fill="white" stroke="none" />
        <path d="M19 5c.5 1 .5 2.2 0 3.2" strokeWidth="1.2" />
        <path d="M21 3c1 2 1 4.5 0 6.5" strokeWidth="1.2" />
      </svg>
    );
    case "grid_peak": return (
      <svg viewBox="0 0 24 24" width="26" height="26" {...base}>
        <polyline points="2,14 6,6 10,16 14,10 18,14 22,14" />
        <path d="M13 19h-2l1-5-3 1 4-8-1 5 3-1z" fill="rgba(255,255,255,0.3)" strokeWidth="1.4" />
      </svg>
    );
    case "guest_mode": return (
      <svg viewBox="0 0 24 24" width="26" height="26" {...base}>
        <circle cx="9" cy="7" r="3" />
        <path d="M2 21v-2a5 5 0 0 1 10 0v2" />
        <circle cx="17" cy="7" r="2.5" />
        <path d="M22 21v-1.5a4 4 0 0 0-5-3.9" />
        <path d="M17 14.5q.5-.3 1-.3" strokeWidth="1" />
      </svg>
    );
    case "air_quality": return (
      <svg viewBox="0 0 24 24" width="26" height="26" {...base}>
        <path d="M9 7c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3H3" />
        <path d="M6 17c0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3H3" />
        <path d="M17 11c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2H3" />
      </svg>
    );
    case "cooking_fire": return (
      <svg viewBox="0 0 24 24" width="26" height="26" {...base}>
        <path d="M12 22c4 0 7-3.13 7-7 0-2-.9-4-2.5-5.5C16 11 14.5 11 14 9c0 0-1 3-3 3-1 0-2-1-2-1C8 13 7 14.5 7 16c0 3.31 2.24 6 5 6z" fill="rgba(255,255,255,0.15)" />
        <path d="M12 6c0-3 2-4 2-4s0 3 2 4" strokeWidth="1.3" />
        <path d="M8 8c0-2 1.5-3 1.5-3s0 2 1.5 3" strokeWidth="1.2" />
        <circle cx="12" cy="17" r="1.5" fill="rgba(255,255,255,0.4)" stroke="none" />
      </svg>
    );
    case "energy_save": return (
      <svg viewBox="0 0 24 24" width="26" height="26" {...base}>
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M17 6c.6 1.2 1 2.5 1 4" />
        <path d="M22 2c-2 3-5 5-9 5" />
        <path d="M3 10.5h3l2-4 2 8 2-4h3" strokeWidth="1.3" />
      </svg>
    );
    default: return <svg viewBox="0 0 24 24" width="26" height="26" {...base}><circle cx="12" cy="12" r="9" /></svg>;
  }
}

interface DemoState {
  lights: { state: boolean; brightness: number; color: string };
  ac: { state: boolean; temp: number; mode: string };
  security: { state: boolean; level: string };
}

interface LogEntry {
  time: string;
  sensor: string;
  rag: string;
  action: string;
}

interface Scenario {
  id: string;
  label: string;
  sub: string;
  accent: string;
  wow?: boolean;
}

const SCENARIOS: Scenario[] = [
  { id: "night_trip",      label: "3 AM Bathroom Trip",         sub: "PIR fires in hallway at night",              accent: "indigo"                },
  { id: "arrival",         label: "Evening Arrival (6:30 PM)",  sub: "BLE face-ID match at front door",            accent: "emerald"               },
  { id: "empty",           label: "House is Empty",             sub: "Zero motion for 45 mins",                    accent: "rose"                  },
  { id: "movie_night",     label: "Movie Night Detected",       sub: "TV on + sofa occupancy for 20 min",          accent: "violet",  wow: true   },
  { id: "morning_routine", label: "Morning Routine",            sub: "Sunrise + bedroom motion at 6:45 AM",        accent: "amber",   wow: true   },
  { id: "baby_sleep",      label: "Baby Sleep Shield",          sub: "Baby monitor + silence threshold hit",       accent: "pink",    wow: true   },
  { id: "intruder",        label: "Intruder Pattern Detected",  sub: "Kitchen motion at 2 AM, no bedroom motion",  accent: "red",     wow: true   },
  { id: "grid_peak",       label: "Grid Peak-Hour Alert",       sub: "Smart meter signal: peak tariff window",     accent: "yellow",  wow: true   },
  { id: "guest_mode",      label: "Unknown Guest Arrived",      sub: "Unrecognised BLE beacon at entrance",        accent: "cyan",    wow: true   },
  { id: "air_quality",     label: "Air Quality Degraded",       sub: "CO₂ > 1100 ppm in living room",              accent: "teal",    wow: true   },
  { id: "cooking_fire",    label: "Cooking Heat Spike",         sub: "Kitchen temp +12°C + smoke particle rise",   accent: "orange",  wow: true   },
  { id: "energy_save",     label: "Eco Sleep Mode",             sub: "All residents asleep, no motion 30 min",     accent: "green"                 },
];

/* Scenario logic map ─────────────────────────────────────── */
type ScenarioResult = { state: DemoState; log: Omit<LogEntry, "time"> };

function resolveScenario(id: string, prev: DemoState): ScenarioResult {
  switch (id) {
    case "night_trip":
      return {
        state: {
          lights: { state: true, brightness: 10, color: "WARM 2200K" },
          ac: { state: true, temp: 22, mode: "QUIET NIGHT" },
          security: { state: true, level: "PERIMETER ONLY" },
        },
        log: {
          sensor: "PIR Motion @ Hallway (03:14 AM)",
          rag: "Habit graph: user visits restroom ~03:00–04:00 AM on 6/7 nights. Returns in <5 min. No external threats logged.",
          action: "Activated warm 10% pathway lights. Silenced HVAC fan. Security held at perimeter — indoor sensors paused to avoid false alarm.",
        },
      };
    case "arrival":
      return {
        state: {
          lights: { state: true, brightness: 80, color: "DAYLIGHT 4000K" },
          ac: { state: true, temp: 21, mode: "RAPID COOL" },
          security: { state: false, level: "DISARMED" },
        },
        log: {
          sensor: "Local BLE Face-ID @ Front Door (18:31) — confidence 99.8%",
          rag: "Post-work routine: typically sweaty from commute. Outdoor temp 34°C, humidity 78%. Prefers 21°C rapid cool for first 30 min.",
          action: "Disarmed all security zones. AC ramped to Rapid Cool at 21°C. Daylight lights at 80%. Charging pad enabled on bedside table.",
        },
      };
    case "empty":
      return {
        state: {
          lights: { state: false, brightness: 0, color: "OFF" },
          ac: { state: false, temp: 24, mode: "ECO STANDBY" },
          security: { state: true, level: "MAX (PERIMETER + INDOOR)" },
        },
        log: {
          sensor: "Zero motion across all 7 zones for 45 mins. Last BLE beacon departed 18:04.",
          rag: "Calendar check: no scheduled return until ~18:00. No anomalies expected. Weather: mild, no AC needed.",
          action: "Killed all lights & HVAC. Armed all 12 sensors (indoor + perimeter). Locked smart deadbolt. Estimated savings: ~₹6.40/hr.",
        },
      };
    case "movie_night":
      return {
        state: {
          lights: { state: true, brightness: 15, color: "CINEMA 1800K" },
          ac: { state: true, temp: 23, mode: "WHISPER QUIET" },
          security: { state: true, level: "PERIMETER ONLY" },
        },
        log: {
          sensor: "TV ON signal + sofa pressure sensors (2 persons) + lux drop to 40 lux at 21:15.",
          rag: "Pattern matched: movie night routine. User prefers 15% warm amber, 23°C AC in whisper mode. Do-not-disturb active till midnight.",
          action: "Dimmed all lights to 15% cinema amber. AC set to whisper-quiet 23°C. Door-bell notifications silenced. Blackout blinds lowered.",
        },
      };
    case "morning_routine":
      return {
        state: {
          lights: { state: true, brightness: 40, color: "SUNRISE 3200K" },
          ac: { state: true, temp: 25, mode: "GENTLE WARM" },
          security: { state: false, level: "HOME MODE" },
        },
        log: {
          sensor: "Sunrise lux crossing 200 lux threshold + bedroom PIR at 06:47. Heart-rate watch: awake state confirmed.",
          rag: "Morning routine graph: coffee machine on at 07:00, shower at 07:15, leaves home by 08:30. Today: Thursday, gym bag detected by door.",
          action: "Sunrise gradient lights (40%, 3200K). AC gentle warm 25°C. Coffee machine pre-heated. Gym playlist queued on speaker. Calendar read aloud in 10 min.",
        },
      };
    case "baby_sleep":
      return {
        state: {
          lights: { state: true, brightness: 3, color: "NIGHT 1500K" },
          ac: { state: true, temp: 26, mode: "ULTRA SILENT" },
          security: { state: true, level: "PERIMETER ONLY" },
        },
        log: {
          sensor: "Baby monitor: breathing pattern stable. Sound level <25dB in nursery. Nursery temp: 26.2°C.",
          rag: "Baby sleep protocol active. Optimal range: 26–28°C, <30dB. Parental presence in adjacent room confirmed. No guests logged.",
          action: "All floors: lights off or 3% night-light only. AC ultra-silent 26°C. Doorbell and phone notifications muted. Kitchen exhaust fan paused.",
        },
      };
    case "intruder":
      return {
        state: {
          lights: { state: true, brightness: 100, color: "ALERT 6500K" },
          ac: { state: prev.ac.state, temp: prev.ac.temp, mode: prev.ac.mode },
          security: { state: true, level: "🚨 INTRUSION ALERT — INDOOR" },
        },
        log: {
          sensor: "⚠️ PIR motion: Kitchen (02:11 AM). NO matching bedroom motion. BLE: 0 known beacons present. Last exit: 23:45.",
          rag: "ANOMALY: Motion at 02:11 AM with zero resident BLE. Not a bathroom pattern (wrong zone, wrong time). Confidence of unauthorized entry: 94%.",
          action: "🚨 All lights 100% full daylight. Owner phone silent alarm sent via LAN push. Front door locked. Camera recording started. Police dial-out pre-staged.",
        },
      };
    case "grid_peak":
      return {
        state: {
          lights: { state: true, brightness: 50, color: "REDUCED 3500K" },
          ac: { state: true, temp: 26, mode: "ECO PEAK SAVER" },
          security: { state: prev.security.state, level: prev.security.level },
        },
        log: {
          sensor: "Smart meter signal: Grid PEAK tariff window 14:00–17:00. Current draw: 1,840W.",
          rag: "Peak tariff at ₹12.40/unit (vs ₹6.20 off-peak). No critical tasks running. AC can safely raise setpoint 2°C. Washing machine idle.",
          action: "AC raised to 26°C ECO mode (-18% load). Lights reduced to 50%. Washing machine deferred to 17:15. EV charger paused. Savings estimate: ₹38 today.",
        },
      };
    case "guest_mode":
      return {
        state: {
          lights: { state: true, brightness: 70, color: "WARM WHITE 3000K" },
          ac: { state: true, temp: 24, mode: "COMFORT" },
          security: { state: true, level: "VISITOR MODE" },
        },
        log: {
          sensor: "Unknown BLE beacon (MAC: C3:4A:…) at entrance. Owner BLE confirmed present. Doorbell rang at 19:22.",
          rag: "Unknown visitor + owner present = guest arrival. Owner's evening preference: 70% warm lighting, 24°C comfort AC. Guest room: cold, lights off.",
          action: "Living & dining lights 70% warm white. AC set comfort 24°C. Guest bathroom light auto-enabled. Indoor security sensors switched to Visitor Mode (no false triggers).",
        },
      };
    case "air_quality":
      return {
        state: {
          lights: { state: prev.lights.state, brightness: prev.lights.brightness, color: prev.lights.color },
          ac: { state: true, temp: 22, mode: "FRESH AIR PURGE" },
          security: { state: prev.security.state, level: prev.security.level },
        },
        log: {
          sensor: "CO₂ sensor: 1,140 ppm in living room (threshold: 1,000 ppm). VOC index elevated. Outdoor AQI: 42 (good).",
          rag: "CO₂ > 1,100 ppm correlates with cognitive fatigue. Outdoor air is clean. Safe to ventilate. No rain. Windows: motorised.",
          action: "Opened motorised windows 30%. AC switched to Fresh Air Purge mode. Smart fan activated. Notification: 'Air quality low — ventilating home'. Re-check in 12 min.",
        },
      };
    case "cooking_fire":
      return {
        state: {
          lights: { state: true, brightness: 100, color: "ALERT 6500K" },
          ac: { state: true, temp: prev.ac.temp, mode: "EXHAUST PURGE" },
          security: { state: true, level: "FIRE WATCH MODE" },
        },
        log: {
          sensor: "Kitchen temp: +12.3°C spike in 4 min. Smoke particle sensor: 0.08 mg/m³ (rising). Stove current draw: 1,800W active.",
          rag: "Pattern analysis: stove ON + rapid temp rise + particle elevation = high-heat cooking, not a fire (no CO spike yet). Owner present in kitchen.",
          action: "Kitchen exhaust fan MAX speed. Kitchen window opened. Hallway lights full brightness for exit visibility. Fire alert staged but NOT triggered — monitoring 90s window.",
        },
      };
    case "energy_save":
      return {
        state: {
          lights: { state: false, brightness: 0, color: "OFF" },
          ac: { state: true, temp: 28, mode: "SLEEP ECO" },
          security: { state: true, level: "PERIMETER ONLY" },
        },
        log: {
          sensor: "Heart-rate bands: all residents in sleep state. Zero motion 30+ min. Last active device: TV off at 23:48.",
          rag: "All residents asleep. Night-time: no visitors expected. Outdoor temp 22°C (cool). AC can raise to 28°C without comfort impact during sleep.",
          action: "All lights off. AC raised to eco-sleep 28°C (-31% energy vs active). Hot water heater deferred to 05:30. Projected overnight saving: ₹22.",
        },
      };
    default:
      return { state: prev, log: { sensor: "", rag: "", action: "" } };
  }
}

/* Accent colour maps ─────────────────────────────────────── */
const ACCENT: Record<string, {
  gradient: string; ring: string; hover: string; badge: string; glow: string; text: string;
}> = {
  indigo:  { gradient: "from-indigo-600 to-indigo-900",   ring: "ring-indigo-500/30",  hover: "hover:border-indigo-500/50",  badge: "bg-indigo-500/10 border-indigo-500/20",  glow: "shadow-indigo-500/20",  text: "text-indigo-400"  },
  emerald: { gradient: "from-emerald-500 to-teal-700",    ring: "ring-emerald-500/30", hover: "hover:border-emerald-500/50", badge: "bg-emerald-500/10 border-emerald-500/20", glow: "shadow-emerald-500/20", text: "text-emerald-400" },
  rose:    { gradient: "from-rose-600 to-red-800",        ring: "ring-rose-500/30",    hover: "hover:border-rose-500/50",    badge: "bg-rose-500/10 border-rose-500/20",      glow: "shadow-rose-500/20",    text: "text-rose-400"    },
  violet:  { gradient: "from-violet-600 to-purple-800",   ring: "ring-violet-500/30",  hover: "hover:border-violet-500/50",  badge: "bg-violet-500/10 border-violet-500/20",  glow: "shadow-violet-500/20",  text: "text-violet-400"  },
  amber:   { gradient: "from-amber-500 to-orange-700",    ring: "ring-amber-500/30",   hover: "hover:border-amber-500/50",   badge: "bg-amber-500/10 border-amber-500/20",    glow: "shadow-amber-500/20",   text: "text-amber-400"   },
  pink:    { gradient: "from-pink-500 to-rose-700",       ring: "ring-pink-500/30",    hover: "hover:border-pink-500/50",    badge: "bg-pink-500/10 border-pink-500/20",      glow: "shadow-pink-500/20",    text: "text-pink-400"    },
  red:     { gradient: "from-red-600 to-rose-900",        ring: "ring-red-500/30",     hover: "hover:border-red-500/50",     badge: "bg-red-500/10 border-red-500/20",        glow: "shadow-red-500/20",     text: "text-red-400"     },
  yellow:  { gradient: "from-yellow-500 to-amber-700",    ring: "ring-yellow-500/30",  hover: "hover:border-yellow-500/50",  badge: "bg-yellow-500/10 border-yellow-500/20",  glow: "shadow-yellow-500/20",  text: "text-yellow-400"  },
  cyan:    { gradient: "from-cyan-500 to-blue-700",       ring: "ring-cyan-500/30",    hover: "hover:border-cyan-500/50",    badge: "bg-cyan-500/10 border-cyan-500/20",      glow: "shadow-cyan-500/20",    text: "text-cyan-400"    },
  teal:    { gradient: "from-teal-500 to-emerald-800",    ring: "ring-teal-500/30",    hover: "hover:border-teal-500/50",    badge: "bg-teal-500/10 border-teal-500/20",      glow: "shadow-teal-500/20",    text: "text-teal-400"    },
  orange:  { gradient: "from-orange-500 to-red-700",      ring: "ring-orange-500/30",  hover: "hover:border-orange-500/50",  badge: "bg-orange-500/10 border-orange-500/20",  glow: "shadow-orange-500/20",  text: "text-orange-400"  },
  green:   { gradient: "from-green-500 to-emerald-800",   ring: "ring-green-500/30",   hover: "hover:border-green-500/50",   badge: "bg-green-500/10 border-green-500/20",    glow: "shadow-green-500/20",   text: "text-green-400"   },
};

/* ─── Component ──────────────────────────────────────────── */
export default function DemoTab() {
  const [demoState, setDemoState] = useState<DemoState>({
    lights:   { state: false, brightness: 0, color: "OFF" },
    ac:       { state: false, temp: 24, mode: "STANDBY" },
    security: { state: true, level: "MAX (PERIMETER + INDOOR)" },
  });

  const [telemetry, setTelemetry] = useState({ temp: 24.5, lux: 850, powerW: 120 });
  const [inferenceStats, setInferenceStats] = useState({ latency: 0, nodes: 1402, tokens: 0 });
  const [aiLogs, setAiLogs] = useState<LogEntry[]>([
    {
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
      sensor: "System Boot",
      rag: "Loaded 1,402 semantic habit nodes into Edge RAM. All sensors nominal.",
      action: "System initialized and fully isolated from WAN. Ready for inference.",
    },
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [lastRun, setLastRun] = useState<string | null>(null);

  /* Live telemetry jitter */
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry((prev) => ({
        temp:   +(prev.temp + (Math.random() * 0.2 - 0.1)).toFixed(1),
        lux:    Math.max(0, Math.floor(prev.lux + (Math.random() * 20 - 10))),
        powerW: demoState.ac.state
          ? Math.floor(1200 + Math.random() * 50)
          : Math.floor(120  + Math.random() * 10),
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, [demoState.ac.state]);

  const runScenario = (id: string) => {
    if (isProcessing) return;
    setIsProcessing(true);
    setLastRun(id);
    const latency = Math.floor(Math.random() * 15) + 10;

    setTimeout(() => {
      const { state, log } = resolveScenario(id, demoState);
      const entry: LogEntry = {
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
        ...log,
      };
      setDemoState(state);
      setInferenceStats((prev) => ({
        latency,
        nodes:  prev.nodes + Math.floor(Math.random() * 12),
        tokens: Math.floor(Math.random() * 80) + 30,
      }));
      setAiLogs((prev) => [entry, ...prev].slice(0, 5));
      setIsProcessing(false);
    }, latency);
  };

  return (
    <div className="tab-enter max-w-6xl mx-auto space-y-6">

      {/* ── Header banner ──────────────────────────────── */}
      <div className="p-6 bg-gradient-to-r from-slate-900 via-blue-950/60 to-slate-900 border border-blue-500/20 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1.5 flex items-center gap-2">
            <Microscope className="text-blue-400" size={22} /> Edge-AI Platform Sandbox
          </h2>
          <p className="text-sm text-slate-400 max-w-xl">
            Fire real-world events and watch the Semantic Memory engine reason &amp; act —
            all in{" "}
            <span className="text-cyan-400 font-semibold">under 30ms</span>, with{" "}
            <span className="text-emerald-400 font-semibold">zero cloud packets</span>.
          </p>
        </div>
        <div className="flex gap-5 shrink-0 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
          <div className="text-center">
            <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Cloud Packets</div>
            <div className="text-2xl font-mono font-bold text-emerald-400">0</div>
          </div>
          <div className="w-px bg-slate-800" />
          <div className="text-center">
            <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Last Latency</div>
            <div className="text-2xl font-mono font-bold text-cyan-400">
              {inferenceStats.latency || "--"}ms
            </div>
          </div>
          <div className="w-px bg-slate-800" />
          <div className="text-center">
            <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Habit Nodes</div>
            <div className="text-2xl font-mono font-bold text-indigo-400">{inferenceStats.nodes}</div>
          </div>
        </div>
      </div>

      {/* ── Row 1: Sensor stream + Device state cards ──── */}
      <div className="grid lg:grid-cols-12 gap-4">

        {/* Live sensor stream — compact left column */}
        <div className="lg:col-span-4 grad-border p-5">
          <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Radio size={14} className="text-rose-400 live-dot" /> Live Sensor Stream
          </h3>
          <div className="space-y-2.5">
            {[
              { label: "Avg Temp",      value: `${telemetry.temp}°C`,    color: "text-emerald-400", Icon: Thermometer },
              { label: "Ambient Light", value: `${telemetry.lux} lux`,   color: "text-amber-400",  Icon: Sun },
              { label: "Power Draw",    value: `${telemetry.powerW} W`,  color: "text-blue-400",   Icon: Zap },
            ].map(({ label, value, color, Icon }) => (
              <div key={label} className="flex justify-between items-center bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                <div className="flex items-center gap-2.5 text-sm text-slate-400"><Icon size={14} />{label}</div>
                <div className={`font-mono text-sm font-bold ${color}`}>{value}</div>
              </div>
            ))}
          </div>

          {/* Processing pulse */}
          {isProcessing && (
            <div className="mt-4 flex items-center gap-2 text-xs text-indigo-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-indigo-400 live-dot" />
              Running inference…
            </div>
          )}
        </div>

        {/* Device state cards — 3 across */}
        <div className="lg:col-span-8 grid sm:grid-cols-3 gap-4">
          {/* Smart Panels */}
          <div className={`p-4 rounded-xl border transition-all duration-500 ${
            demoState.lights.state
              ? "bg-amber-900/20 border-amber-500/40 shadow-lg shadow-amber-500/5"
              : "bg-slate-900/60 border-slate-800"
          }`}>
            <div className="flex justify-between items-center mb-3">
              <div className={`p-2 rounded-lg ${demoState.lights.state ? "bg-amber-500/20 text-amber-400" : "bg-slate-800 text-slate-500"}`}>
                <Zap size={18} />
              </div>
              <span className={`text-[10px] font-bold px-2 py-1 rounded-full border ${
                demoState.lights.state ? "bg-amber-500/10 text-amber-400 border-amber-500/20" : "bg-slate-800 text-slate-500 border-slate-700"
              }`}>
                {demoState.lights.state ? `ON · ${demoState.lights.brightness}%` : "OFF"}
              </span>
            </div>
            <h4 className="text-sm font-bold text-white mb-0.5">Smart Panels</h4>
            <p className="text-xs font-mono text-slate-400">{demoState.lights.color}</p>
          </div>

          {/* HVAC */}
          <div className={`p-4 rounded-xl border transition-all duration-500 ${
            demoState.ac.state
              ? "bg-cyan-900/20 border-cyan-500/40 shadow-lg shadow-cyan-500/5"
              : "bg-slate-900/60 border-slate-800"
          }`}>
            <div className="flex justify-between items-center mb-3">
              <div className={`p-2 rounded-lg ${demoState.ac.state ? "bg-cyan-500/20 text-cyan-400" : "bg-slate-800 text-slate-500"}`}>
                <Activity size={18} />
              </div>
              <span className={`text-[10px] font-bold px-2 py-1 rounded-full border ${
                demoState.ac.state ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" : "bg-slate-800 text-slate-500 border-slate-700"
              }`}>
                {demoState.ac.state ? `${demoState.ac.temp}°C` : "STANDBY"}
              </span>
            </div>
            <h4 className="text-sm font-bold text-white mb-0.5">HVAC Node</h4>
            <p className="text-xs font-mono text-slate-400">{demoState.ac.mode}</p>
          </div>

          {/* Security */}
          <div className={`p-4 rounded-xl border transition-all duration-500 ${
            demoState.security.state
              ? "bg-emerald-900/20 border-emerald-500/40 shadow-lg shadow-emerald-500/5"
              : "bg-rose-900/20 border-rose-500/40"
          }`}>
            <div className="flex justify-between items-center mb-3">
              <div className={`p-2 rounded-lg ${demoState.security.state ? "bg-emerald-500/20 text-emerald-400" : "bg-rose-500/20 text-rose-400"}`}>
                <ShieldCheck size={18} />
              </div>
              <span className={`text-[10px] font-bold px-2 py-1 rounded-full border ${
                demoState.security.state
                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                  : "bg-rose-500/10 text-rose-400 border-rose-500/20"
              }`}>
                {demoState.security.state ? "ARMED" : "DISARMED"}
              </span>
            </div>
            <h4 className="text-sm font-bold text-white mb-0.5">Security Array</h4>
            <p className="text-xs font-mono text-slate-400 truncate" title={demoState.security.level}>
              {demoState.security.level}
            </p>
          </div>
        </div>
      </div>

      {/* ── Row 2: Scenario injector grid ──────────────── */}
      <div className="grad-border p-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <Activity size={15} className="text-indigo-400" />
            Inject AI Scenario
            <span className="ml-1 px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold">
              {SCENARIOS.length} scenarios
            </span>
          </h3>
          <span className="text-[10px] text-slate-500 font-mono">
            Click any scenario to fire it →
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {SCENARIOS.map((s) => {
            const ac = ACCENT[s.accent];
            const isActive = lastRun === s.id && !isProcessing;
            return (
              <button
                key={s.id}
                onClick={() => runScenario(s.id)}
                disabled={isProcessing}
                className={`relative text-left p-4 rounded-xl border transition-all duration-200 group
                  disabled:opacity-40 disabled:cursor-not-allowed
                  hover:-translate-y-1 hover:shadow-xl ${ac.hover}
                  ${isActive
                    ? `${ac.badge} ring-1 ${ac.ring} shadow-lg ${ac.glow}`
                    : "bg-slate-900/50 border-slate-800"
                  }`}
              >
                {/* WOW badge */}
                {s.wow && (
                  <span className="absolute top-2.5 right-2.5 text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow">
                    WOW
                  </span>
                )}

                {/* Premium gradient icon badge */}
                <div className={`
                  w-12 h-12 rounded-2xl mb-3.5 flex items-center justify-center
                  bg-gradient-to-br ${ac.gradient}
                  shadow-lg ${ac.glow}
                  ring-1 ring-white/10
                  group-hover:scale-105 group-hover:shadow-xl
                  transition-all duration-300
                `}>
                  <ScenarioIcon id={s.id} />
                </div>

                <div className="text-xs font-bold text-white mb-1 leading-snug pr-4">{s.label}</div>
                <div className="text-[10px] text-slate-500 leading-relaxed">{s.sub}</div>

                {/* Active indicator */}
                {isActive && (
                  <div className={`mt-2.5 flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider ${ac.text}`}>
                    <span className={`w-1.5 h-1.5 rounded-full live-dot ${ac.text.replace('text-', 'bg-')}`} />
                    Last fired
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Row 3: RAG inference log ───────────────────── */}
      <div className="grad-border p-5">
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Database className="text-indigo-400" size={16} />
            <h3 className="font-bold text-sm uppercase tracking-wider text-slate-300">RAG Context Engine — Inference Log</h3>
          </div>
          <div className="text-xs text-slate-500 font-mono flex items-center gap-4">
            <span>Tokens: <strong className="text-blue-400">{inferenceStats.tokens}</strong></span>
            <span>Nodes: <strong className="text-indigo-400">{inferenceStats.nodes}</strong></span>
          </div>
        </div>

        <div className="space-y-3">
          {aiLogs.map((log, i) => (
            <div
              key={i}
              className={`p-4 rounded-xl border transition-all ${
                i === 0
                  ? "bg-slate-950/80 border-slate-700"
                  : "bg-transparent border-slate-800/30 opacity-40"
              }`}
            >
              <div className="text-[10px] text-slate-500 mb-3 flex items-center gap-2">
                <Clock size={10} /> {log.time}
                {i === 0 && (
                  <span className="ml-1 px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 text-[9px] uppercase tracking-wider border border-blue-500/20">
                    Latest Inference
                  </span>
                )}
              </div>
              <div className="grid sm:grid-cols-3 gap-4 font-mono text-xs">
                <div>
                  <div className="text-[9px] uppercase text-slate-500 mb-1.5 flex items-center gap-1">
                    <BrainCircuit size={9} /> 1. Edge Input
                  </div>
                  <div className="text-slate-300 leading-relaxed">{log.sensor}</div>
                </div>
                <div>
                  <div className="text-[9px] uppercase text-indigo-400 mb-1.5 flex items-center gap-1">
                    <Database size={9} /> 2. Semantic Lookup
                  </div>
                  <div className="text-indigo-200 leading-relaxed">{log.rag}</div>
                </div>
                <div>
                  <div className="text-[9px] uppercase text-emerald-400 mb-1.5 flex items-center gap-1">
                    <Cpu size={9} /> 3. Action Dispatched
                  </div>
                  <div className="text-emerald-200 leading-relaxed">{log.action}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
