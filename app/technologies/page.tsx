"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code2,
  Smartphone,
  Brain,
  Database,
  Cloud,
  Palette,
  ArrowRight,
  Layers,
  Zap,
} from "lucide-react";

const technologies = {
  frontend: {
    title: "Frontend",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-400",
    borderColor: "hover:border-blue-500/50",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Vue.js", level: 80 },
      { name: "Framer Motion", level: 90 },
    ],
  },
  backend: {
    title: "Backend",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    iconColor: "text-green-400",
    borderColor: "hover:border-green-500/50",
    items: [
      { name: "Node.js", level: 95 },
      { name: "Express.js", level: 90 },
      { name: "Python", level: 90 },
      { name: "FastAPI", level: 85 },
      { name: "GraphQL", level: 80 },
      { name: "REST APIs", level: 95 },
    ],
  },
  mobile: {
    title: "Mobile",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-400",
    borderColor: "hover:border-purple-500/50",
    items: [
      { name: "React Native", level: 90 },
      { name: "Flutter", level: 85 },
      { name: "Swift (iOS)", level: 80 },
      { name: "Kotlin (Android)", level: 80 },
      { name: "Expo", level: 85 },
      { name: "Firebase", level: 90 },
    ],
  },
  ai: {
    title: "AI & ML",
    icon: Brain,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    borderColor: "hover:border-emerald-500/50",
    items: [
      { name: "OpenAI / GPT", level: 90 },
      { name: "LangChain", level: 85 },
      { name: "TensorFlow", level: 80 },
      { name: "PyTorch", level: 75 },
      { name: "Hugging Face", level: 80 },
      { name: "Vector DBs", level: 85 },
    ],
  },
  database: {
    title: "Database",
    icon: Layers,
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-500/10",
    iconColor: "text-orange-400",
    borderColor: "hover:border-orange-500/50",
    items: [
      { name: "MongoDB", level: 90 },
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "Redis", level: 80 },
      { name: "Prisma ORM", level: 85 },
      { name: "Supabase", level: 85 },
    ],
  },
  cloud: {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-500/10",
    iconColor: "text-indigo-400",
    borderColor: "hover:border-indigo-500/50",
    items: [
      { name: "Vercel", level: 95 },
      { name: "AWS", level: 85 },
      { name: "Docker", level: 85 },
      { name: "GitHub Actions", level: 90 },
      { name: "Firebase", level: 90 },
      { name: "Cloudflare", level: 85 },
    ],
  },
};

const categories = Object.values(technologies);

const additionalTools = [
  { name: "Figma", category: "Design" },
  { name: "Git", category: "Version Control" },
  { name: "Stripe", category: "Payments" },
  { name: "Razorpay", category: "Payments" },
  { name: "Twilio", category: "Communication" },
  { name: "SendGrid", category: "Email" },
  { name: "Sentry", category: "Monitoring" },
  { name: "Postman", category: "API Testing" },
];

export default function TechnologiesPage() {
  return (
    <main className="relative pt-32 pb-20 px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ============ HERO SECTION ============ */}
        <section className="text-center mb-20">
          
          {/* Badge */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
                       bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-xs text-slate-300 font-medium uppercase tracking-wider">
              Our Tech Stack
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 
                       tracking-tight max-w-4xl mx-auto leading-tight"
          >
            Powered by{" "}
            <span className="gradient-text">Modern Technologies</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            We use cutting-edge tools and frameworks to build fast, secure,
            and scalable digital solutions for your business.
          </motion.p>
        </section>

        {/* ============ TECH CATEGORIES GRID ============ */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {categories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                whileHover={{ y: -6 }}
                className={`group relative p-6 rounded-2xl 
                           bg-slate-900/50 backdrop-blur-sm 
                           border border-white/10 ${category.borderColor} 
                           hover:shadow-2xl transition-all duration-500`}
              >
                
                {/* Gradient Glow */}
                <div
                  className={`absolute -top-10 -right-10 w-40 h-40 
                              ${category.bgColor} rounded-full blur-[60px] 
                              opacity-0 group-hover:opacity-100 
                              transition-opacity duration-700`}
                />

                {/* Header */}
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl ${category.bgColor} 
                                flex items-center justify-center 
                                group-hover:scale-110 
                                transition-transform duration-500`}
                  >
                    <Icon size={24} className={category.iconColor} />
                  </div>
                  <h2 className="text-xl font-bold text-white">
                    {category.title}
                  </h2>
                </div>

                {/* Tech Items with Progress Bars */}
                <div className="space-y-4 relative z-10">
                  {category.items.map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-slate-300">
                          {item.name}
                        </span>
                        <span className={`text-xs font-mono ${category.iconColor}`}>
                          {item.level}%
                        </span>
                      </div>
                      {/* Progress Bar */}
                      <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          initial={false}
                          animate={{ width: `${item.level}%` }}
                          transition={{
                            duration: 1,
                            delay: 0.3 + i * 0.1,
                            ease: [0.25, 1, 0.5, 1],
                          }}
                          className={`h-full rounded-full 
                                     bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </section>

        {/* ============ ADDITIONAL TOOLS ============ */}
        <section className="mb-20">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Tools We <span className="gradient-text">Use</span>
            </h2>
            <p className="text-slate-400">
              Everyday tools that power our workflow
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalTools.map((tool, idx) => (
              <motion.div
                key={idx}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 * idx }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-4 rounded-xl bg-slate-900/50 backdrop-blur-sm 
                           border border-white/10 hover:border-white/20 
                           transition-all duration-300 cursor-pointer"
              >
                <p className="text-sm font-semibold text-white mb-1">
                  {tool.name}
                </p>
                <p className="text-xs text-slate-500">{tool.category}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ============ WHY OUR STACK ============ */}
        <section className="mb-20">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Why Our <span className="gradient-text">Tech Stack?</span>
            </h2>
            <p className="text-slate-400">
              Modern technologies for modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                desc: "Our stack is optimized for speed — from sub-second page loads to real-time updates.",
              },
              {
                icon: Layers,
                title: "Scalable Architecture",
                desc: "Built to grow with your business. Handles millions of users without breaking a sweat.",
              },
              {
                icon: Cloud,
                title: "Cloud Native",
                desc: "Deployed on modern cloud infrastructure with 99.9% uptime and global CDN.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * idx }}
                  className="p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm 
                             border border-white/10 hover:border-indigo-500/30 
                             transition-colors duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 
                                  flex items-center justify-center mb-5">
                    <Icon size={28} className="text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
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
              Want to Build with These{" "}
              <span className="gradient-text">Technologies?</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project and choose the perfect stack for
              your needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full 
                         text-slate-900 font-bold bg-white hover:bg-slate-100 
                         shadow-lg hover:shadow-xl hover:-translate-y-1 
                         transition-all duration-300 group"
            >
              Start Your Project
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 
                           transition-transform duration-300"
              />
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}