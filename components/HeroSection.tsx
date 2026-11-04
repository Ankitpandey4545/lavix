 "use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Star,
  Users,
  Award,
  Zap,
  Terminal,
  Bot,
  Sparkles,
  Cpu,
  GitBranch,
  CheckCircle2,
  Code2,
} from "lucide-react";
import { useState, useEffect } from "react";

// ============ Rotating Word Component ============
function RotatingWord() {
  const words = ["Scale", "Perform", "Convert", "Grow", "Win"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        className="gradient-text inline-block"
      >
        {words[index]}
      </motion.span>
    </span>
  );
}

// ============ Main Hero Section ============
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden">

      {/* ============ BACKGROUND GLOW ============ */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* ============ LEFT SIDE ============ */}
        <div className="text-slate-900 relative">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="inline-flex items-center gap-2 px-1 py-1 rounded-full 
                       bg-slate-100 border border-slate-200 mb-6 backdrop-blur-sm
                       hover:bg-slate-200 transition-colors cursor-pointer group"
          >
            <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-[10px] font-bold text-white uppercase tracking-wider">
              New
            </span>
            <span className="text-xs text-slate-600 font-medium pr-2">
              Available for new projects
            </span>
            <ArrowRight size={12} className="text-slate-500 mr-2 transition-transform duration-300 group-hover:translate-x-0.5" />
          </motion.div>

          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.05] mb-6 tracking-tight"
          >
            We Build <span className="gradient-text">Modern</span> <br className="hidden md:block" />
            Web & Mobile{" "}
            <span className="relative inline-block">
              <RotatingWord />
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
                <path d="M1 5.5C50 2 150 2 199 5.5" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="text-slate-600 text-base md:text-lg max-w-xl mb-8 leading-relaxed"
          >
            We craft <span className="text-slate-900 font-medium bg-slate-100 px-1.5 py-0.5 rounded">powerful websites</span>,{" "}
            <span className="text-slate-900 font-medium bg-slate-100 px-1.5 py-0.5 rounded">mobile apps</span>, and{" "}
            <span className="text-slate-900 font-medium bg-slate-100 px-1.5 py-0.5 rounded">AI systems</span>{" "}
            that help businesses grow, automate, and stay ahead.
          </motion.p>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <a href="/contact">
              <motion.button
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                className="relative px-7 py-3.5 rounded-full text-white font-semibold overflow-hidden group bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-shadow duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </motion.button>
            </a>

            <a href="https://calendly.com/ankitpandey-ap8787/30min" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 px-6 py-3.5 rounded-full text-slate-900 font-medium border border-slate-200 bg-white hover:bg-slate-50 hover:border-emerald-500/50 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <span className="w-9 h-9 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors relative">
                  <Calendar size={16} className="text-emerald-600" />
                  <span className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping" />
                </span>
                Book a Free Meeting
              </motion.button>
            </a>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["#6366f1", "#a855f7", "#ec4899", "#f59e0b"].map((color, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[11px] font-bold text-white shadow-sm" style={{ backgroundColor: color }}>
                    {["A", "R", "S", "K"][i]}
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600 shadow-sm">
                  +46
                </div>
              </div>
              <div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-yellow-400" fill="#facc15" />
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  <span className="text-slate-900 font-semibold">5.0</span> from 50+ clients
                </p>
              </div>
            </div>

            <div className="h-8 w-px bg-slate-200 hidden sm:block" />

            <div className="flex items-center gap-2">
              <Award size={18} className="text-indigo-500" />
              <span className="text-sm text-slate-600 font-medium">Top Rated Agency</span>
            </div>
          </motion.div>
        </div>

        {/* ============ RIGHT SIDE - PREMIUM AI CODE EDITOR MOCKUP ============ */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className="relative hidden lg:block"
        >
          {/* Main Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/30 via-indigo-600/30 to-purple-600/30 blur-[120px] rounded-full" />

          {/* Code Editor Window */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 bg-[#0d1117] rounded-2xl border border-slate-800 shadow-2xl shadow-indigo-500/20 overflow-hidden"
          >
            {/* Top Bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-slate-800">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              
              <div className="ml-4 flex items-center gap-1">
                <div className="px-3 py-1 rounded-t-md bg-[#0d1117] text-xs text-white font-mono flex items-center gap-2 border-b-2 border-indigo-500">
                  <Code2 size={12} className="text-blue-400" />
                  lavix-app.tsx
                </div>
                <div className="px-3 py-1 text-xs text-slate-500 font-mono">ai-engine.py</div>
              </div>

              <div className="ml-auto flex items-center gap-2">
                <div className="flex items-center gap-1 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-emerald-400 font-mono font-semibold">Live Preview</span>
                </div>
              </div>
            </div>

            <div className="flex">
              {/* Left Sidebar - File Tree */}
              <div className="w-36 bg-[#0d1117] border-r border-slate-800 py-3 hidden md:block">
                <div className="px-3 text-[10px] uppercase text-slate-500 font-bold tracking-wider mb-2 flex items-center gap-1">
                  <span>▾</span> Explorer
                </div>
                <div className="space-y-0.5 text-xs font-mono">
                  <div className="px-3 py-1 text-slate-500 flex items-center gap-1.5">
                    <span>▾</span> src
                  </div>
                  <div className="px-3 py-1 pl-5 text-blue-400 bg-white/5 border-l-2 border-blue-400 flex items-center gap-1.5">
                    <span>⚛</span> app.tsx
                  </div>
                  <div className="px-3 py-1 pl-5 text-slate-400 flex items-center gap-1.5">
                    <span>⚛</span> Hero.tsx
                  </div>
                  <div className="px-3 py-1 pl-5 text-emerald-400 flex items-center gap-1.5">
                    <span>🤖</span> ai.ts
                  </div>
                  <div className="px-3 py-1 pl-5 text-yellow-400 flex items-center gap-1.5">
                    <span>📦</span> api.ts
                  </div>
                  <div className="px-3 py-1 pl-5 text-slate-400 flex items-center gap-1.5">
                    <span>🎨</span> styles.css
                  </div>
                </div>
              </div>

              {/* Code Area */}
              <div className="flex-1 p-4 font-mono text-xs leading-relaxed">
                <div className="flex">
                  {/* Line Numbers */}
                  <div className="text-slate-600 select-none pr-3 text-right space-y-1">
                    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map((n) => (
                      <p key={n}>{n}</p>
                    ))}
                  </div>
                  
                  {/* Code */}
                  <div className="space-y-1 flex-1">
                    <p>
                      <span className="text-purple-400">import</span>{" "}
                      <span className="text-slate-300">{"{ "}</span>
                      <span className="text-yellow-300">AI</span>
                      <span className="text-slate-300">{" }"}</span>{" "}
                      <span className="text-purple-400">from</span>{" "}
                      <span className="text-emerald-400">'lavix-core'</span>
                      <span className="text-slate-300">;</span>
                    </p>
                    <p>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-400">engine</span> ={" "}
                      <span className="text-purple-400">new</span>{" "}
                      <span className="text-yellow-300">AI</span>
                      <span className="text-slate-300">(</span>
                      <span className="text-slate-300">{"{"}</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-300">model:</span>{" "}
                      <span className="text-emerald-400">'gpt-4-turbo'</span>
                      <span className="text-slate-300">,</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-300">mode:</span>{" "}
                      <span className="text-emerald-400">'production'</span>
                      <span className="text-slate-300">,</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-300">speed:</span>{" "}
                      <span className="text-orange-400">'240ms'</span>
                    </p>
                    <p><span className="text-slate-300">{"}"});</span></p>
                    <p></p>
                    <p>
                      <span className="text-purple-400">await</span>{" "}
                      <span className="text-blue-400">engine</span>
                      <span className="text-slate-300">.</span>
                      <span className="text-yellow-300">deploy</span>
                      <span className="text-slate-300">();</span>
                    </p>
                    <p className="pt-2 text-slate-500">
                      <span className="text-emerald-400">// ✓ Build successful</span>
                    </p>
                    <p className="text-slate-500">
                      <span className="text-emerald-400">// → Live at lavixtech.app</span>
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                        className="inline-block w-1.5 h-3.5 bg-indigo-400 ml-1 align-middle"
                      />
                    </p>
                  </div>
                </div>

                {/* Live Stats Bar inside Editor */}
                <div className="mt-4 flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
                  <div className="flex items-center gap-1.5">
                    <Cpu size={14} className="text-indigo-400" />
                    <span className="text-[10px] text-slate-400">CPU</span>
                    <span className="text-[10px] font-bold text-white">12%</span>
                  </div>
                  <div className="w-px h-4 bg-slate-700" />
                  <div className="flex items-center gap-1.5">
                    <GitBranch size={14} className="text-purple-400" />
                    <span className="text-[10px] text-slate-400">main</span>
                  </div>
                  <div className="w-px h-4 bg-slate-700" />
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-emerald-400" />
                    <span className="text-[10px] font-bold text-emerald-400">0 errors</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Terminal Bar */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[#161b22] border-t border-slate-800 text-[10px] font-mono">
              <Terminal size={12} className="text-slate-500" />
              <span className="text-slate-500">Terminal</span>
              <span className="text-emerald-400">➜</span>
              <span className="text-slate-400">~/lavixtech</span>
              <span className="text-indigo-400">$ npm run dev</span>
              <span className="ml-auto flex items-center gap-1 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ready
              </span>
            </div>
          </motion.div>

          {/* Floating Card 1 - Top Right (AI Powered) */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
            transition={{
              opacity: { delay: 0.8, duration: 0.5 },
              scale: { delay: 0.8, duration: 0.5 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute -top-5 -right-5 z-30 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl px-4 py-3 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center relative">
                <Sparkles size={18} className="text-white" fill="white" />
                <span className="absolute inset-0 rounded-full bg-indigo-500/50 animate-ping" />
              </div>
              <div>
                <p className="text-xs text-slate-500">AI Powered</p>
                <p className="text-sm font-bold text-slate-900">Automation</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Card 2 - Bottom Left (Stats) */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1, y: [0, 5, 0] }}
            transition={{
              opacity: { delay: 1, duration: 0.5 },
              scale: { delay: 1, duration: 0.5 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
            }}
            className="absolute -bottom-6 -left-6 z-30 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl px-4 py-3 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center">
                <Zap size={18} className="text-white" fill="white" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Performance</p>
                <p className="text-sm font-bold text-slate-900">99 / 100</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}