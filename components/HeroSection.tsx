 "use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Star, Users, Award, Zap } from "lucide-react";
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
                       bg-slate-100 border border-slate-200 mb-6 backdrop-blur-sm
                       hover:bg-slate-200 transition-colors cursor-pointer group"
          >
            <span className="px-2 py-0.5 rounded-full bg-gradient-to-r 
                             from-indigo-500 to-purple-500 text-[10px] 
                             font-bold text-white uppercase tracking-wider">
              New
            </span>
            <span className="text-xs text-slate-600 font-medium pr-2">
              Available for new projects
            </span>
            <ArrowRight
              size={12}
              className="text-slate-500 mr-2 transition-transform 
                         duration-300 group-hover:translate-x-0.5"
            />
          </motion.div>

          {/* Heading with Rotating Word */}
          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold 
                       text-slate-900 leading-[1.05] mb-6 tracking-tight"
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
            className="text-slate-600 text-base md:text-lg max-w-xl mb-8 leading-relaxed"
          >
            We craft{" "}
            <span className="text-slate-900 font-medium bg-slate-100 px-1.5 py-0.5 rounded">
              powerful websites
            </span>
            ,{" "}
            <span className="text-slate-900 font-medium bg-slate-100 px-1.5 py-0.5 rounded">
              mobile apps
            </span>
            , and{" "}
            <span className="text-slate-900 font-medium bg-slate-100 px-1.5 py-0.5 rounded">
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

            {/* Secondary Button - Book a Free Meeting */}
            <a
              href="https://calendly.com/ankitpandey-ap8787/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 px-6 py-3.5 rounded-full 
                           text-white font-medium border border-emerald-500/30 
                           bg-emerald-500/5 hover:bg-emerald-500/10 
                           hover:border-emerald-500/50
                           transition-all duration-300 group"
              >
                <span className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center 
                                 justify-center group-hover:bg-emerald-500/30 
                                 transition-colors relative">
                  <Calendar size={16} className="text-emerald-400" />
                  <span className="absolute inset-0 rounded-full 
                                   bg-emerald-500/30 animate-ping" />
                </span>
                Book a Free Meeting
              </motion.button>
            </a>
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
                <p className="text-xs text-slate-500 mt-0.5">
                  <span className="text-slate-900 font-semibold">5.0</span> from 50+ clients
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

        {/* ============ RIGHT SIDE - LOCAL HERO IMAGE ============ */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className="relative hidden lg:flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 blur-[120px] rounded-full" />

          <div className="relative z-10 mx-auto w-[560px] rounded-[32px] bg-white shadow-[0_40px_90px_rgba(15,23,42,0.12)] overflow-hidden">
            <img
              src="/hero14.png"
              alt="LavixTech team collaborating on digital solutions"
              className="h-[560px] w-full object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}