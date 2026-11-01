"use client";

import { motion } from "framer-motion";
import { ArrowRight, Gauge, ShieldCheck, Users, Layers3 } from "lucide-react";

const reasons = [
  {
    icon: Gauge,
    title: "Results-first execution",
    description:
      "We focus on business outcomes, not just design. Every build is structured to improve speed, clarity, and growth.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable delivery",
    description:
      "Clear processes, transparent communication, and quality checks at every phase keep projects dependable and on track.",
  },
  {
    icon: Layers3,
    title: "Scalable digital systems",
    description:
      "From websites to internal workflows, we build solutions that are ready to grow with your business as it expands.",
  },
  {
    icon: Users,
    title: "Partnership mindset",
    description:
      "We act like an extension of your team, combining strategy, design, and technology to solve real challenges together.",
  },
];

const stats = [
  { value: "24h", label: "response time" },
  { value: "120+", label: "projects delivered" },
  { value: "99.9%", label: "uptime focus" },
  { value: "4.9/5", label: "client experience" },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative bg-slate-50 py-24 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.08),_transparent_45%)]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 mb-5 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-700">
                Why choose us
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-5">
              A smarter technology partner for ambitious brands.
            </h2>

            <p className="text-lg text-slate-600 max-w-xl mb-8">
              LavixTech helps businesses turn ideas into polished digital experiences that perform,
              convert, and scale with confidence.
            </p>

            <div className="space-y-4">
              {reasons.map(({ icon: Icon, title, description }) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45 }}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">{title}</h3>
                    <p className="text-sm leading-6 text-slate-600">{description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 p-[1px]">
                <div className="rounded-[1.4rem] bg-slate-950 p-6 text-white">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Performance</p>
                      <h3 className="mt-2 text-2xl font-bold">Business impact</h3>
                    </div>
                    <div className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-indigo-100">
                      Growth
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {stats.map((stat) => (
                      <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-sm text-slate-300">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm text-slate-300">Project momentum</p>
                      <span className="text-sm font-semibold text-emerald-300">+38%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400" />
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm text-slate-300">
                      <span>Quarterly growth</span>
                      <span>78% of target</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-4 py-3 shadow-lg border border-slate-200">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <ArrowRight size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Strategy</p>
                  <p className="font-semibold text-slate-900">Built for scale</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
