"use client";

import { motion } from "framer-motion";

const clients = [
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "Spotify",
  "Airbnb",
  "Uber",
  "Stripe",
];

export default function TrustedBy() {
  return (
    <section className="relative py-16 border-y border-white/5 bg-slate-950/50 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.p
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs uppercase tracking-[0.2em] 
                     text-slate-500 font-semibold mb-10"
        >
          Trusted by industry leaders worldwide
        </motion.p>

        {/* Logos Marquee */}
        <div className="relative">
          
          {/* Left Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 
                          bg-gradient-to-r from-slate-950 to-transparent z-10" />
          
          {/* Right Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-20 
                          bg-gradient-to-l from-slate-950 to-transparent z-10" />

          {/* Scrolling Container */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-16 whitespace-nowrap"
          >
            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="text-2xl md:text-3xl font-bold text-slate-600 
                           hover:text-slate-300 transition-colors duration-300 
                           cursor-pointer select-none"
              >
                {client}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "30+", label: "Happy Clients" },
            { number: "5.0", label: "Average Rating" },
            { number: "24/7", label: "Support" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                {stat.number}
              </p>
              <p className="text-xs md:text-sm text-slate-500 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}