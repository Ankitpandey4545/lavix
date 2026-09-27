"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Check, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Main CTA Card */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="relative rounded-3xl overflow-hidden 
                     bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 
                     p-1 shadow-2xl shadow-purple-500/30"
        >
          {/* Inner Card */}
          <div className="relative rounded-[22px] bg-slate-950/90 backdrop-blur-xl 
                          px-8 py-16 md:px-16 md:py-20 overflow-hidden">
            
            {/* Decorative Grid Pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Decorative Blur Circles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 
                            bg-purple-600/30 rounded-full blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 
                            bg-indigo-600/30 rounded-full blur-[80px]" />

            {/* Content */}
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              
              {/* Badge */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full 
                           bg-white/10 border border-white/20 mb-6 backdrop-blur-sm"
              >
                <Sparkles size={14} className="text-yellow-400" />
                <span className="text-xs text-white font-semibold uppercase tracking-wider">
                  Let&apos;s Work Together
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-white 
                           mb-6 leading-tight tracking-tight"
              >
                Ready to Build{" "}
                <span className="gradient-text">Something Amazing?</span>
              </motion.h2>

              {/* Subtext */}
              <motion.p
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-slate-300 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
              >
                Let&apos;s discuss your project and bring your ideas to life. Get a
                free consultation with our experts — no commitment required.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap items-center justify-center gap-4 mb-10"
              >
                {/* Primary Button */}
                <a href="/contact">
                  <motion.button
                    whileHover={{ y: -3, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                    className="relative px-8 py-4 rounded-full text-slate-900 
                               font-bold overflow-hidden group
                               bg-white hover:bg-slate-100
                               shadow-lg shadow-black/20 
                               hover:shadow-xl hover:shadow-black/30 
                               transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Start Your Project
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 
                                   group-hover:translate-x-1"
                      />
                    </span>
                  </motion.button>
                </a>

                {/* Secondary Button */}
                <a href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-7 py-4 rounded-full 
                               text-white font-semibold 
                               border-2 border-white/20 
                               hover:bg-white/10 hover:border-white/40 
                               transition-all duration-300 group"
                  >
                    <Phone size={16} />
                    Book a Free Call
                  </motion.button>
                </a>
              </motion.div>

              {/* Trust Points */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 
                           pt-8 border-t border-white/10"
              >
                {[
                  "No commitment",
                  "Free consultation",
                  "24hr response time",
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 
                                    flex items-center justify-center">
                      <Check size={12} className="text-green-400" />
                    </div>
                    <span className="text-sm text-slate-300">{point}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Info Row */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
        >
          {[
            {
              title: "Quick Response",
              text: "We reply within 24 hours",
              icon: "⚡",
            },
            {
              title: "Free Consultation",
              text: "30-min discovery call — free",
              icon: "🎯",
            },
            {
              title: "No Obligation",
              text: "Zero commitment required",
              icon: "✨",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 rounded-2xl 
                         bg-slate-900/50 border border-white/10 
                         backdrop-blur-sm hover:border-white/20 
                         transition-colors duration-300"
            >
              <div className="text-2xl">{item.icon}</div>
              <div>
                <p className="text-sm font-bold text-white mb-1">
                  {item.title}
                </p>
                <p className="text-xs text-slate-400">{item.text}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}