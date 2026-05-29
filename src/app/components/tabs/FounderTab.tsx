"use client";

import React from "react";
import {
  BrainCircuit,
  Cpu,
  Building2,
  CheckCircle2,
  Zap,
  Shield,
  Target,
  Lightbulb,
} from "lucide-react";

export default function FounderTab() {
  return (
    <div className="tab-enter max-w-5xl mx-auto space-y-8">

      {/* Section header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-4 uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 live-dot" />
          Founding Team
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">
          The Person Behind the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
            Vision
          </span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
          A commerce graduate who somehow ended up building IoT hardware and edge-AI systems —
          proof that the best disruptions rarely come from inside the building.
        </p>
      </div>

      {/* Main Founder Card */}
      <div className="grad-border p-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* Avatar */}
          <div className="shrink-0 flex flex-col items-center gap-3">
            <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 flex items-center justify-center shadow-2xl shadow-blue-900/40 relative">
              <span className="text-4xl font-bold text-white select-none">SA</span>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-emerald-500 border-2 border-[#0f172a] flex items-center justify-center">
                <CheckCircle2 size={14} className="text-white" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-white">Saksham Agarwal</div>
              <div className="text-sm text-indigo-400 font-medium">Founder &amp; CEO</div>
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1 space-y-5">
            <p className="text-slate-300 text-base leading-relaxed">
              Saksham studied commerce — not computer science, not electrical engineering.
              He then went ahead and built{" "}
              <span className="text-white font-semibold">two technology companies anyway</span>.
              One runs enterprise IT for businesses. The other ships IoT-AI products.
              Somewhere between the balance sheets and the circuit boards, he found the
              exact gap this market was missing.
            </p>
            <p className="text-slate-500 text-xs italic border-l-2 border-slate-700 pl-3">
              &ldquo;If an accountant can figure out edge inference and BLE mesh networking,
              imagine what the product becomes when the business model is just as sharp as the firmware.&rdquo;
            </p>

            {/* Company Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-950/60 border border-blue-500/20 rounded-xl p-5 group hover:-translate-y-0.5 transition-transform duration-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Building2 size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Technogetic Pvt. Ltd.</div>
                    <div className="text-[10px] text-blue-400 uppercase tracking-wider font-medium mt-0.5">
                      IT &amp; Software Services
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Enterprise IT services company providing software, infrastructure, and digital transformation
                  solutions. Builds the business acumen, client management, and systems-thinking behind Technogetic&apos;s platform.
                </p>
              </div>

              <div className="bg-slate-950/60 border border-emerald-500/20 rounded-xl p-5 group hover:-translate-y-0.5 transition-transform duration-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Cpu size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Vanraksh AI Solutions Pvt. Ltd.</div>
                    <div className="text-[10px] text-emerald-400 uppercase tracking-wider font-medium mt-0.5">
                      IoT &amp; AI Products
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  IoT-focused AI products company — direct hands-on experience designing, deploying, and scaling
                  connected device systems. Ground-level understanding of real-world IoT architecture challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why This Founder */}
      <div className="grad-border p-8">
        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
          <Lightbulb className="text-amber-400" size={20} />
          Why This Founder?
        </h3>
        <p className="text-slate-400 text-sm mb-6">
          Most smart home startups fail because they are either pure hardware players who cannot build intelligent software,
          or pure software teams who underestimate manufacturing complexity. Saksham has both.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              Icon: BrainCircuit,
              color: "text-indigo-400",
              bg: "bg-indigo-500/10 border-indigo-500/20",
              title: "AI/Software Depth",
              desc: "Builds AI-powered products at Vanraksh. Understands model deployment, on-device inference, and edge constraints.",
            },
            {
              Icon: Cpu,
              color: "text-emerald-400",
              bg: "bg-emerald-500/10 border-emerald-500/20",
              title: "IoT Hardware Experience",
              desc: "Directly involved in IoT product design and deployment. Not learning IoT — already doing it commercially.",
            },
            {
              Icon: Shield,
              color: "text-blue-400",
              bg: "bg-blue-500/10 border-blue-500/20",
              title: "Operator, Not Just Ideator",
              desc: "Running two active Pvt. Ltd. companies means proven ability to build teams, manage finances, and deliver.",
            },
            {
              Icon: Target,
              color: "text-amber-400",
              bg: "bg-amber-500/10 border-amber-500/20",
              title: "Market Proximity",
              desc: "Deep understanding of Indian B2B enterprise clients and premium tech buyers — Technogetic's core targets.",
            },
          ].map(({ Icon, color, bg, title, desc }, i) => (
            <div
              key={i}
              className={`card-enter p-5 rounded-xl bg-slate-950/60 border ${bg.split(" ")[1]} group hover:-translate-y-1 transition-transform duration-200`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className={`p-2.5 rounded-xl ${bg} ${color} w-fit mb-3 group-hover:scale-110 transition-transform duration-200`}>
                <Icon size={18} />
              </div>
              <div className="text-sm font-bold text-white mb-1">{title}</div>
              <div className="text-xs text-slate-400 leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* The Convergence Narrative */}
      <div className="bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-slate-900 border border-blue-500/15 rounded-2xl p-8 text-center">
        <Zap className="text-blue-400 mx-auto mb-4" size={28} />
        <h3 className="text-xl font-bold text-white mb-3">
          AI &times; IoT &times; Operations
        </h3>
        <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
          Technogetic is not a pivot or a side-project. It is the{" "}
          <span className="text-white font-semibold">natural convergence</span> of Saksham&apos;s two
          existing businesses — taking the AI/IoT product capabilities of Vanraksh and the enterprise
          delivery infrastructure of Technogetic to build India&apos;s first truly private, locally intelligent
          smart home platform.
        </p>
        <p className="text-slate-500 text-sm mt-4 italic">
          The smart home market is being disrupted by someone who once thought a &ldquo;transistor&rdquo;
          was a type of radio. That&apos;s the point.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {[
            "Active IT Company",
            "Active IoT Company",
            "Hardware + Software IP",
            "Enterprise Client Network",
            "India-First Mindset",
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
