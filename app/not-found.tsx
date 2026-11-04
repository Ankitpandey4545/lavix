"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Ghost, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-slate-50">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Dot Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #cbd5e1 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 relative"
        >
          {/* Floating Ghost Icon */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center mx-auto mb-6 border border-slate-200 relative z-10"
          >
            <Ghost size={48} className="text-indigo-500" />
          </motion.div>

          <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 tracking-tighter">
            404
          </h1>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-slate-600 mb-8 max-w-md mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold bg-slate-900 hover:bg-slate-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <Home size={18} />
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-slate-900 font-semibold bg-white border border-slate-200 hover:bg-slate-50 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <Search size={18} />
              Contact Support
            </Link>
          </div>
        </motion.div>

      </div>
    </main>
  );
}