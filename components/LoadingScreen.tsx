"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar animation: 0 → 100 in 1.8 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    // Hide loading screen after 2.2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="fixed inset-0 z-[9999] bg-white 
                     flex items-center justify-center overflow-hidden"
        >
          {/* ===== Background Glow Effects ===== */}
          <div className="absolute top-1/4 -left-40 w-96 h-96 
                          bg-indigo-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-40 w-96 h-96 
                          bg-purple-600/20 rounded-full blur-[120px]" />

          {/* ===== Grid Pattern ===== */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          {/* ===== Main Content ===== */}
          <div className="relative z-10 flex flex-col items-center">
            
            {/* ===== Animated Logo ===== */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="relative mb-8"
            >
              {/* Rotating Ring (outer) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 -m-4 rounded-3xl 
                           border-2 border-transparent 
                           border-t-indigo-500 border-r-purple-500"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, #6366f1 90deg, transparent 180deg)",
                  WebkitMask:
                    "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
                  mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
                }}
              />

              {/* Rotating Ring (inner, opposite direction) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 -m-2 rounded-2xl 
                           border-2 border-transparent 
                           border-b-purple-500 border-l-indigo-500"
              />

              {/* Logo Square */}
              <div className="relative w-20 h-20 rounded-2xl 
                              bg-gradient-to-br from-indigo-500 to-purple-500 
                              flex items-center justify-center 
                              shadow-2xl shadow-purple-500/50">
                
                {/* Inner Glow */}
                <div className="absolute inset-0 rounded-2xl 
                                bg-white/10 backdrop-blur-sm" />

                {/* "L" Letter */}
                <span className="relative text-white text-4xl font-black 
                                 tracking-tight">
                  L
                </span>

                {/* Shimmer Effect */}
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 w-1/2 h-full 
                             bg-gradient-to-r from-transparent 
                             via-white/40 to-transparent 
                             skew-x-[-20deg]"
                />
              </div>
            </motion.div>

            {/* ===== Brand Name ===== */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-white 
                         mb-2 tracking-tight"
            >
              Lavix<span className="gradient-text">Tech</span>
            </motion.h1>

            {/* ===== Tagline ===== */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-sm text-slate-400 mb-8 tracking-wider"
            >
              Ideas <span className="text-indigo-400">›</span> Code{" "}
              <span className="text-purple-400">›</span> Real Solutions
            </motion.p>

            {/* ===== Progress Bar ===== */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "240px" }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="relative w-60 h-1 rounded-full 
                         bg-white/5 overflow-hidden"
            >
              <motion.div
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3 }}
                className="h-full rounded-full 
                           bg-gradient-to-r from-indigo-500 to-purple-500"
              />
            </motion.div>

            {/* ===== Progress Percentage ===== */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-xs text-slate-500 mt-3 font-mono"
            >
              {Math.min(Math.round(progress), 100)}%
            </motion.p>

            {/* ===== Loading Text ===== */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex items-center gap-2 mt-6"
            >
              <span className="text-xs text-slate-400">
                Loading your experience
              </span>
              <div className="flex gap-1">
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
                  className="w-1 h-1 rounded-full bg-indigo-400"
                />
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
                  className="w-1 h-1 rounded-full bg-purple-400"
                />
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
                  className="w-1 h-1 rounded-full bg-pink-400"
                />
              </div>
            </motion.div>

            {/* ===== Bottom Floating Dots ===== */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 
                            flex gap-3">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0], opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                  className="w-1.5 h-1.5 rounded-full 
                             bg-gradient-to-r from-indigo-500 to-purple-500"
                />
              ))}
            </div>
          </div>

          {/* ===== Bottom Text ===== */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute bottom-8 left-0 right-0 text-center"
          >
            <p className="text-xs text-slate-600 tracking-wider">
              © 2026 LAVIXTECH — BUILDING THE FUTURE
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}