"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Search,
  Globe,
  Zap,
  Shield,
  Smartphone,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Loader2,
  TrendingUp,
  FileText,
  Clock,
} from "lucide-react";

// Fake Audit Data Generator
const generateAuditData = () => {
  return {
    performance: Math.floor(Math.random() * 30) + 35, // 35-65
    seo: Math.floor(Math.random() * 30) + 40, // 40-70
    accessibility: Math.floor(Math.random() * 25) + 50, // 50-75
    bestPractices: Math.floor(Math.random() * 20) + 55, // 55-75
    issues: [
      "Images are not optimized (WebP format missing)",
      "Missing Meta Descriptions on key pages",
      "Slow server response time (LCP > 3.5s)",
      "Mobile touch targets are too small",
    ],
  };
};

export default function FreeAuditPage() {
  const [url, setUrl] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [auditData, setAuditData] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setIsScanning(true);
    setShowResults(false);

    // Fake scanning delay (2.5 seconds)
    setTimeout(() => {
      setAuditData(generateAuditData());
      setIsScanning(false);
      setShowResults(true);
    }, 2500);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-emerald-500";
    if (score >= 50) return "text-orange-500";
    return "text-red-500";
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return "bg-emerald-50 border-emerald-200";
    if (score >= 50) return "bg-orange-50 border-orange-200";
    return "bg-red-50 border-red-200";
  };

  return (
    <main className="relative pt-32 pb-20 px-6 overflow-hidden bg-slate-50 min-h-screen">
      
      {/* Background Glow */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* ============ HERO & INPUT ============ */}
        <div className="text-center mb-12">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-xs text-slate-700 font-bold uppercase tracking-wider">
              100% Free Tool
            </span>
          </motion.div>

          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight"
          >
            How Fast is Your <span className="gradient-text">Website?</span>
          </motion.h1>
          
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto mb-8"
          >
            Enter your website URL below to get an instant SEO and Performance audit. 
            Find out what&apos;s holding your business back.
          </motion.p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto relative">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Globe size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="url"
                  required
                  placeholder="https://yourwebsite.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 text-slate-900 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all text-base"
                />
              </div>
              <button
                type="submit"
                disabled={isScanning}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-base shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isScanning ? (
                  <><Loader2 size={20} className="animate-spin" /> Scanning...</>
                ) : (
                  <>Run Free Audit <Search size={20} /></>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* ============ SCANNING STATE ============ */}
        <AnimatePresence>
          {isScanning && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-16 bg-white rounded-3xl border border-slate-200 shadow-xl"
            >
              <div className="w-16 h-16 rounded-full border-4 border-indigo-100 border-t-indigo-600 animate-spin mx-auto mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Analyzing your website...</h3>
              <p className="text-slate-500 text-sm">Checking Performance, SEO, Accessibility & Best Practices.</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ============ RESULTS ============ */}
        <AnimatePresence>
          {showResults && auditData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-900">
                  Audit Report for <span className="text-indigo-600 break-all">{url}</span>
                </h2>
                <p className="text-slate-500 text-sm mt-1">Here is how your website is performing.</p>
              </div>

              {/* Score Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Performance", score: auditData.performance, icon: Zap },
                  { label: "SEO", score: auditData.seo, icon: Search },
                  { label: "Accessibility", score: auditData.accessibility, icon: Smartphone },
                  { label: "Best Practices", score: auditData.bestPractices, icon: Shield },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-3">
                        <Icon size={20} className="text-slate-500" />
                      </div>
                      <p className="text-sm font-medium text-slate-600 mb-1">{item.label}</p>
                      <div className={`text-4xl font-black ${getScoreColor(item.score)}`}>
                        {item.score}
                      </div>
                      <p className="text-xs text-slate-400 mt-1">out of 100</p>
                    </div>
                  );
                })}
              </div>

              {/* Issues List */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                  <AlertTriangle size={20} className="text-orange-500" />
                  <h3 className="text-lg font-bold text-slate-900">Critical Issues Found</h3>
                </div>
                
                <div className="space-y-3">
                  {auditData.issues.map((issue: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-red-50/50 border border-red-100">
                      <AlertTriangle size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-700">{issue}</p>
                    </div>
                  ))}
                </div>

                {/* CTA Box */}
                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-bold mb-1">Want us to fix this for you?</h4>
                    <p className="text-indigo-100 text-sm">Get a free consultation with our experts.</p>
                  </div>
                  <Link href="/contact">
                    <button className="px-6 py-3 rounded-full bg-white text-indigo-700 font-bold hover:bg-slate-50 transition-colors whitespace-nowrap flex items-center gap-2">
                      Talk to an Expert <ArrowRight size={16} />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-center text-xs text-slate-400 flex items-center justify-center gap-1">
                <Clock size={12} /> This is a simulated audit. For a detailed report, contact us.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ============ FEATURES (Show before search) ============ */}
        {!showResults && !isScanning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 mt-16"
          >
            {[
              { icon: Zap, title: "Speed Check", desc: "Is your website slowing down your business?" },
              { icon: Search, title: "SEO Analysis", desc: "Are you ranking on the first page of Google?" },
              { icon: Shield, title: "Security Audit", desc: "Is your customer data safe and secure?" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 text-center">
                  <Icon size={24} className="text-indigo-500 mx-auto mb-3" />
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              );
            })}
          </motion.div>
        )}

      </div>
    </main>
  );
}