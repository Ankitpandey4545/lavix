 "use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  Zap,
  Award,
  Users,
  Rocket,
  Shield,
  ArrowRight,
  ArrowUpRight,
  Check,
} from "lucide-react";

const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "30+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
  { number: "15+", label: "Team Members" },
];

const values = [
  {
    icon: Target,
    title: "Client First",
    description:
      "Your success is our success. We listen, understand, and deliver what actually matters to your business.",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We stay ahead of the curve, using the latest technologies and best practices to build future-proof solutions.",
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-400",
  },
  {
    icon: Shield,
    title: "Quality First",
    description:
      "We never compromise on quality. Every line of code, every design pixel is crafted with precision.",
    bgColor: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "We love what we do. That passion reflects in every project we deliver and every relationship we build.",
    bgColor: "bg-orange-500/10",
    iconColor: "text-orange-400",
  },
];

const timeline = [
  {
    year: "2020",
    title: "The Beginning",
    description:
      "LavixTech was founded with a vision to help businesses go digital.",
  },
  {
    year: "2022",
    title: "Growing Team",
    description:
      "Expanded to a team of 10+ experts across development, design, and AI.",
  },
  {
    year: "2024",
    title: "50+ Projects",
    description:
      "Crossed 50 successful projects and 30+ happy clients worldwide.",
  },
  {
    year: "2026",
    title: "AI-First Future",
    description:
      "Focused on AI automation, helping businesses scale with intelligent solutions.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative pt-32 pb-20 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ============ HERO SECTION ============ */}
        <section className="text-center mb-24">

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
                       bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-xs text-slate-300 font-medium uppercase tracking-wider">
              About Us
            </span>
          </motion.div>

          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 
                       tracking-tight max-w-4xl mx-auto leading-tight"
          >
            We&apos;re on a Mission to{" "}
            <span className="gradient-text">Transform Businesses</span>
          </motion.h1>

          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            LavixTech is a modern digital agency helping businesses grow with
            cutting-edge web, mobile, and AI solutions.
          </motion.p>
        </section>

        {/* ============ STORY SECTION ============ */}
        <section className="grid lg:grid-cols-2 gap-12 items-center mb-24">

          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden 
                            border border-white/10 shadow-2xl 
                            shadow-purple-500/20">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="LavixTech Team Working"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t 
                              from-slate-950/80 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 
                              flex items-center gap-4 p-4 rounded-2xl 
                              bg-slate-950/80 backdrop-blur-xl 
                              border border-white/10">
                <div className="w-12 h-12 rounded-full 
                                bg-gradient-to-br from-indigo-500 to-purple-500 
                                flex items-center justify-center flex-shrink-0">
                  <Rocket size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    Founded in 2020
                  </p>
                  <p className="text-xs text-slate-400">
                    Growing ever since 🚀
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-4 -right-4 p-4 rounded-2xl 
                         bg-slate-900/90 backdrop-blur-xl 
                         border border-white/10 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <Award size={24} className="text-yellow-400" />
                <div>
                  <p className="text-xs text-slate-400">Top Rated</p>
                  <p className="text-sm font-bold text-white">Agency 2026</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="gradient-text">Story</span>
            </h2>

            <div className="space-y-4 text-slate-400 leading-relaxed mb-6">
              <p>
                LavixTech started in 2020 with a simple idea: build digital
                solutions that actually help businesses grow. What began as a
                one-person team has now grown into a full-service digital
                agency.
              </p>
              <p>
                We&apos;ve helped startups, small businesses, and enterprises
                transform their operations with modern web apps, mobile
                applications, AI automation, and custom CRM systems.
              </p>
              <p>
                Today, we&apos;re proud to be a trusted partner for 30+
                businesses across India and beyond — delivering solutions that
                make a real impact.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {[
                "Founded by developers, for developers",
                "100% transparent communication",
                "Modern tech stack, future-proof solutions",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 
                                  flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-green-400" />
                  </div>
                  <span className="text-sm text-slate-300">{point}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full 
                         text-white font-semibold bg-gradient-to-r 
                         from-indigo-600 to-purple-600 
                         shadow-lg shadow-indigo-500/30 
                         hover:shadow-xl hover:shadow-purple-500/50 
                         hover:-translate-y-0.5 transition-all duration-300 group"
            >
              Work With Us
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 
                           transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </section>

        {/* ============ STATS BAR ============ */}
        <motion.section
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 
                     p-8 rounded-2xl bg-slate-900/30 border border-white/10 
                     backdrop-blur-sm"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                {stat.number}
              </p>
              <p className="text-xs md:text-sm text-slate-500 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.section>

        {/* ============ MISSION & VISION ============ */}
        <section className="grid md:grid-cols-2 gap-6 mb-24">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm 
                       border border-white/10 hover:border-indigo-500/30 
                       transition-colors duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 
                            flex items-center justify-center mb-5">
              <Target size={28} className="text-indigo-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
            <p className="text-slate-400 leading-relaxed">
              To empower businesses of all sizes with modern, scalable digital
              solutions that drive real growth — without the complexity or
              high costs of traditional agencies.
            </p>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm 
                       border border-white/10 hover:border-purple-500/30 
                       transition-colors duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 
                            flex items-center justify-center mb-5">
              <Eye size={28} className="text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
            <p className="text-slate-400 leading-relaxed">
              To become India&apos;s most trusted digital partner — known for
              quality, innovation, and results. We want to help 1000+
              businesses go digital by 2030.
            </p>
          </motion.div>
        </section>

        {/* ============ VALUES SECTION ============ */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-slate-400">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * idx }}
                  whileHover={{ y: -6 }}
                  className="group p-6 rounded-2xl bg-slate-900/50 
                             backdrop-blur-sm border border-white/10 
                             hover:border-white/20 
                             hover:shadow-2xl transition-all duration-500"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${value.bgColor} 
                                flex items-center justify-center mb-4 
                                group-hover:scale-110 
                                transition-transform duration-500`}
                  >
                    <Icon size={24} className={value.iconColor} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ============ TIMELINE ============ */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-slate-400">From 2020 to today</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px 
                            bg-gradient-to-b from-indigo-500/50 
                            via-purple-500/50 to-transparent 
                            hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * idx }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 text-center md:text-right md:pr-12">
                    <div
                      className={`inline-block p-6 rounded-2xl 
                                 bg-slate-900/50 backdrop-blur-sm 
                                 border border-white/10 hover:border-indigo-500/30 
                                 transition-colors duration-300 
                                 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                    >
                      <p className="text-xs font-mono text-indigo-400 mb-2">
                        {item.year}
                      </p>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex w-4 h-4 rounded-full 
                                  bg-gradient-to-br from-indigo-500 to-purple-500 
                                  border-4 border-slate-950 shadow-lg 
                                  shadow-purple-500/50 z-10" />

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ WHY CHOOSE US ============ */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Why Choose <span className="gradient-text">LavixTech?</span>
            </h2>
            <p className="text-slate-400">
              Here&apos;s what makes us different
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Expert Team",
                desc: "Senior developers, designers, and AI engineers with years of experience.",
              },
              {
                icon: Zap,
                title: "Fast Delivery",
                desc: "We deliver projects on time, every time — without compromising quality.",
              },
              {
                icon: Shield,
                title: "Secure & Scalable",
                desc: "Built with security best practices and architecture that scales.",
              },
              {
                icon: Heart,
                title: "Long-Term Support",
                desc: "We don't just deliver — we stay with you through the journey.",
              },
              {
                icon: Award,
                title: "Proven Results",
                desc: "50+ successful projects with measurable business impact.",
              },
              {
                icon: Rocket,
                title: "Modern Tech",
                desc: "Always using the latest, most reliable technologies.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * idx }}
                  className="p-6 rounded-2xl bg-slate-900/50 backdrop-blur-sm 
                             border border-white/10 hover:border-indigo-500/30 
                             transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 
                                  flex items-center justify-center mb-4">
                    <Icon size={24} className="text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <motion.section
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden 
                     bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 
                     p-1 shadow-2xl shadow-purple-500/30"
        >
          <div className="relative rounded-[22px] bg-slate-950/90 
                          backdrop-blur-xl px-8 py-16 md:px-16 md:py-20 
                          text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Amazing Together</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s talk. Get a free consultation
              with our team.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full 
                         text-slate-900 font-bold bg-white hover:bg-slate-100 
                         shadow-lg hover:shadow-xl hover:-translate-y-1 
                         transition-all duration-300 group"
            >
              Get in Touch
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-1 
                           group-hover:-translate-y-1 
                           transition-transform duration-300"
              />
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}