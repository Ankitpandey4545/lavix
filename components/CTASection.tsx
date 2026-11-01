"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Check, MessageSquareText, Sparkles } from "lucide-react";

const trustPoints = [
  "No pressure strategy call",
  "Fast response time",
  "Clear project roadmap",
];

const quickInfo = [
  {
    title: "Free discovery call",
    text: "Tell us what you need and we’ll map the right solution.",
    icon: CalendarDays,
  },
  {
    title: "Practical guidance",
    text: "We help you reduce friction and move faster with less confusion.",
    icon: MessageSquareText,
  },
  {
    title: "No commitment",
    text: "A straightforward conversation with zero sales pressure.",
    icon: Check,
  },
];

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.08),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.08),_transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-1 shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
        >
          <div className="rounded-[1.75rem] bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-violet-100 shadow-sm shadow-violet-500/10">
                  <Sparkles size={12} className="text-violet-300" />
                  Let&apos;s get together
                </div>

                <h2 className="max-w-xl text-3xl font-bold leading-tight text-white md:text-5xl">
                  Ready to build what&apos;s next for your business?
                </h2>

                <p className="mt-5 max-w-xl text-base leading-7 text-slate-200 md:text-lg">
                  Let&apos;s talk about your website, app, automation, or digital growth goals. We&apos;ll help you map the right solution with zero pressure and clear direction.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/40"
                  >
                    Book a strategy call
                    <ArrowRight size={18} />
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                  >
                    Share your project
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                  {trustPoints.map((point) => (
                    <div key={point} className="flex items-center gap-2 text-sm text-slate-200">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
                        <Check size={12} />
                      </div>
                      {point}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="rounded-[1.25rem] bg-slate-950/80 p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">What happens next</p>
                  <div className="mt-6 space-y-4">
                    {quickInfo.map(({ title, text, icon: Icon }) => (
                      <div key={title} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="font-semibold text-white">{title}</p>
                          <p className="mt-1 text-sm leading-6 text-slate-300">{text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}