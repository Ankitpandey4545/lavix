 "use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Users, Award, Zap } from "lucide-react";
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
        <div className="text-white relative">

          {/* Background Blur Behind Heading */}
          <div className="absolute -top-20 -left-20 w-96 h-96 
                          bg-purple-600/10 rounded-full blur-[120px] 
                          pointer-events-none" />

          {/* Badge with NEW tag */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="inline-flex items-center gap-2 px-1 py-1 rounded-full 
                       bg-white/5 border border-white/10 mb-6 backdrop-blur-sm
                       hover:bg-white/10 transition-colors cursor-pointer group"
          >
            <span className="px-2 py-0.5 rounded-full bg-gradient-to-r 
                             from-indigo-500 to-purple-500 text-[10px] 
                             font-bold text-white uppercase tracking-wider">
              New
            </span>
            <span className="text-xs text-slate-300 font-medium pr-2">
              Available for new projects
            </span>
            <ArrowRight
              size={12}
              className="text-slate-400 mr-2 transition-transform 
                         duration-300 group-hover:translate-x-0.5"
            />
          </motion.div>

          {/* Heading with Rotating Word */}
          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold 
                       text-white leading-[1.05] mb-6 tracking-tight"
          >
            We Build{" "}
            <span className="gradient-text">Modern</span>{" "}
            <br className="hidden md:block" />
            Web & Mobile{" "}
            <span className="relative inline-block">
              <RotatingWord />
              {/* Gradient Underline */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M1 5.5C50 2 150 2 199 5.5"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </motion.h1>

          {/* Paragraph with Highlighted Keywords */}
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="text-slate-400 text-base md:text-lg max-w-xl mb-8 leading-relaxed"
          >
            We craft{" "}
            <span className="text-white font-medium bg-white/5 px-1.5 py-0.5 rounded">
              powerful websites
            </span>
            ,{" "}
            <span className="text-white font-medium bg-white/5 px-1.5 py-0.5 rounded">
              mobile apps
            </span>
            , and{" "}
            <span className="text-white font-medium bg-white/5 px-1.5 py-0.5 rounded">
              AI systems
            </span>{" "}
            that help businesses grow, automate, and stay ahead.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            {/* Primary Button */}
            <a href="/contact">
              <motion.button
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                className="relative px-7 py-3.5 rounded-full text-white font-semibold 
                           overflow-hidden group
                           bg-gradient-to-r from-indigo-600 to-purple-600
                           shadow-lg shadow-indigo-500/30 
                           hover:shadow-xl hover:shadow-purple-500/50 
                           transition-shadow duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 
                               group-hover:translate-x-1"
                  />
                </span>
                <span className="absolute inset-0 -translate-x-full 
                                 group-hover:translate-x-full 
                                 transition-transform duration-1000 
                                 bg-gradient-to-r from-transparent 
                                 via-white/30 to-transparent" />
              </motion.button>
            </a>

            {/* Secondary Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-6 py-3.5 rounded-full 
                         text-white font-medium border border-white/15 
                         hover:bg-white/5 hover:border-white/30
                         transition-all duration-300 group"
            >
              <span className="w-9 h-9 rounded-full bg-white/10 flex items-center 
                               justify-center group-hover:bg-white/20 
                               transition-colors relative">
                <Play size={12} className="ml-0.5 relative z-10" fill="white" />
                <span className="absolute inset-0 rounded-full 
                                 bg-purple-500/30 animate-ping" />
              </span>
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Trust Badges with Avatars */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10"
          >
            {/* Avatars + Rating */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["#6366f1", "#a855f7", "#ec4899", "#f59e0b"].map((color, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-slate-950 
                               flex items-center justify-center text-[10px] 
                               font-bold text-white"
                    style={{ backgroundColor: color }}
                  >
                    {["A", "R", "S", "K"][i]}
                  </div>
                ))}
                <div className="w-7 h-7 rounded-full border-2 border-slate-950 
                                bg-slate-800 flex items-center justify-center 
                                text-[9px] font-bold text-slate-300">
                  +46
                </div>
              </div>
              <div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-yellow-400" fill="#facc15" />
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  <span className="text-white font-semibold">5.0</span> from 50+ clients
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-8 w-px bg-white/10" />

            {/* Award */}
            <div className="flex items-center gap-2">
              <Award size={18} className="text-indigo-400" />
              <span className="text-sm text-slate-400">Top Rated Agency</span>
            </div>
          </motion.div>
        </div>

        {/* ============ RIGHT SIDE - CODE EDITOR MOCKUP ============ */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className="relative hidden lg:block"
        >
          {/* Floating Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/40 
                          to-purple-600/40 blur-[120px] rounded-full" />

          {/* Code Editor Mockup */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 bg-[#0d1117] rounded-2xl 
                       border border-white/10 shadow-2xl shadow-purple-500/30 
                       overflow-hidden backdrop-blur-sm"
          >
            {/* ===== Top Window Controls ===== */}
            <div className="flex items-center gap-2 px-4 py-3 
                            bg-[#161b22] border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />

              {/* File Tabs */}
              <div className="ml-4 flex items-center gap-1">
                <div className="px-3 py-1 rounded-t-md bg-[#0d1117] 
                                text-xs text-white font-mono flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  Hero.tsx
                </div>
                <div className="px-3 py-1 text-xs text-slate-500 font-mono">
                  Navbar.tsx
                </div>
                <div className="px-3 py-1 text-xs text-slate-500 font-mono">
                  data.ts
                </div>
              </div>

              {/* Live Indicator */}
              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-400 font-mono">live</span>
              </div>
            </div>

            <div className="flex">
              {/* ===== Left Sidebar - Files ===== */}
              <div className="w-32 bg-[#0d1117] border-r border-white/5 py-4 hidden md:block">
                <p className="px-3 text-[10px] uppercase text-slate-500 
                              font-bold tracking-wider mb-2">
                  Explorer
                </p>
                <div className="space-y-1 text-xs font-mono">
                  <div className="px-3 py-1 text-slate-500 flex items-center gap-2">
                    <span>▾</span> src
                  </div>
                  <div className="px-3 py-1 pl-6 text-blue-400 bg-white/5 
                                  border-l-2 border-blue-400 flex items-center gap-2">
                    <span>⚛</span> Hero.tsx
                  </div>
                  <div className="px-3 py-1 pl-6 text-slate-400 flex items-center gap-2">
                    <span>⚛</span> Navbar.tsx
                  </div>
                  <div className="px-3 py-1 pl-6 text-slate-400 flex items-center gap-2">
                    <span>⚛</span> Footer.tsx
                  </div>
                  <div className="px-3 py-1 pl-6 text-yellow-400 flex items-center gap-2">
                    <span>📄</span> data.ts
                  </div>
                  <div className="px-3 py-1 pl-6 text-slate-400 flex items-center gap-2">
                    <span>🎨</span> globals.css
                  </div>
                </div>
              </div>

              {/* ===== Code Content ===== */}
              <div className="flex-1 p-4 md:p-6 font-mono text-xs md:text-sm">
                <div className="flex">
                  {/* Line Numbers */}
                  <div className="text-slate-600 select-none pr-4 text-right space-y-1.5">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                    <p>12</p>
                    <p>13</p>
                    <p>14</p>
                    <p>15</p>
                    <p>16</p>
                  </div>

                  {/* Code Lines */}
                  <div className="space-y-1.5 flex-1">
                    <p>
                      <span className="text-purple-400">import</span>{" "}
                      <span className="text-slate-300">{"{"}</span>{" "}
                      <span className="text-yellow-300">motion</span>{" "}
                      <span className="text-slate-300">{"}"}</span>{" "}
                      <span className="text-purple-400">from</span>{" "}
                      <span className="text-green-400">&quot;framer-motion&quot;</span>
                      <span className="text-slate-300">;</span>
                    </p>
                    <p></p>
                    <p>
                      <span className="text-purple-400">export default function</span>{" "}
                      <span className="text-yellow-300">LavixTech</span>
                      <span className="text-slate-300">() {"{"}</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-400">services</span>{" "}
                      <span className="text-slate-300">= [</span>
                    </p>
                    <p className="pl-8">
                      <span className="text-green-400">&quot;Web&quot;</span>
                      <span className="text-slate-300">,</span>{" "}
                      <span className="text-green-400">&quot;Mobile&quot;</span>
                      <span className="text-slate-300">,</span>
                    </p>
                    <p className="pl-8">
                      <span className="text-green-400">&quot;AI&quot;</span>
                      <span className="text-slate-300">,</span>{" "}
                      <span className="text-green-400">&quot;CRM&quot;</span>
                      <span className="text-slate-300">,</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-300">];</span>
                    </p>
                    <p></p>
                    <p className="pl-4">
                      <span className="text-purple-400">return</span>{" "}
                      <span className="text-slate-300">(</span>
                    </p>
                    <p className="pl-8 text-slate-300">
                      &lt;<span className="text-red-400">Solutions</span>&gt;
                    </p>
                    <p className="pl-12 text-slate-300">
                      &lt;<span className="text-red-400">Web</span> /&gt;
                    </p>
                    <p className="pl-12 text-slate-300">
                      &lt;<span className="text-red-400">Mobile</span> /&gt;
                    </p>
                    <p className="pl-12 text-slate-300">
                      &lt;<span className="text-red-400">AI</span> /&gt;
                    </p>
                    <p className="pl-12 text-slate-300">
                      &lt;<span className="text-red-400">CRM</span> /&gt;
                    </p>
                    <p className="pl-8 text-slate-300">
                      &lt;/<span className="text-red-400">Solutions</span>&gt;
                    </p>
                    <p className="pl-4 text-slate-300">);</p>
                    <p className="text-slate-300">{"}"}</p>
                    <p className="pt-2 text-green-400">
                      // ✓ Build successful — 0 errors
                    </p>
                    <p className="text-slate-500">
                      // → Ready for deployment
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                        className="inline-block w-1.5 h-3.5 bg-purple-400 ml-1 align-middle"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== Bottom Status Bar ===== */}
            <div className="flex items-center justify-between px-4 py-1.5 
                            bg-[#161b22] border-t border-white/5 text-[10px] 
                            font-mono text-slate-500">
              <div className="flex items-center gap-3">
                <span className="text-purple-400">⎇ main</span>
                <span>✓ 0 errors</span>
                <span>⚡ Fast</span>
              </div>
              <div className="flex items-center gap-3">
                <span>TypeScript</span>
                <span>UTF-8</span>
                <span className="text-green-400">● Live</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Card 1 - Top Right */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -top-6 -right-6 z-30 
                       bg-slate-900/90 backdrop-blur-xl 
                       border border-white/10 rounded-2xl 
                       px-4 py-3 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 
                              flex items-center justify-center">
                <span className="text-green-400 font-bold">✓</span>
              </div>
              <div>
                <p className="text-xs text-slate-400">Project Delivered</p>
                <p className="text-sm font-semibold text-white">On Time</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Card 2 - Bottom Right */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -bottom-6 -right-8 z-30 
                       bg-slate-900/90 backdrop-blur-xl 
                       border border-white/10 rounded-2xl 
                       px-4 py-3 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full 
                              bg-gradient-to-r from-indigo-500 to-purple-500 
                              flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <div>
                <p className="text-xs text-slate-400">Powered by</p>
                <p className="text-sm font-semibold text-white">Automation</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Card 3 - Bottom Left */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute -bottom-8 -left-8 z-30 
                       bg-slate-900/90 backdrop-blur-xl 
                       border border-white/10 rounded-2xl 
                       px-4 py-3 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full 
                              bg-gradient-to-r from-blue-500 to-cyan-500 
                              flex items-center justify-center">
                <Zap size={18} className="text-white" fill="white" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Fast Delivery</p>
                <p className="text-sm font-semibold text-white">Production Ready</p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}