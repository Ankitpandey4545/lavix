 "use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  Brain,
  BarChart3,
  Check,
  ArrowRight,
  ArrowUpRight,
  Zap,
  Code2,
  Palette,
  ShoppingCart,
  Users,
  Clock,
  DollarSign,
  TrendingUp,
  Shield,
  Sparkles,
  Bot,
  Cpu,
  MessageCircle,
  Star,
} from "lucide-react";

// ============ ROTATING WORD COMPONENT ============
function RotatingWord() {
  const words = [
    "AI-Powered.",
    "Future-Ready.",
    "Automated.",
    "Intelligent.",
    "Scalable.",
  ];
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

const services = [
  {
    id: "ai",
    icon: Brain,
    title: "AI & Automation",
    tagline: "Smart Solutions That Save Time & Money",
    description:
      "Leverage the power of Artificial Intelligence to automate repetitive tasks, enhance customer support, and make data-driven decisions. We build custom AI solutions tailored to your business — from chatbots to full ML pipelines.",
    features: [
      "AI Chatbots & Virtual Assistants",
      "Process Automation (RPA)",
      "OpenAI / GPT-4 Integration",
      "Custom Machine Learning Models",
      "Voice Assistants & NLP",
      "Document Processing & OCR",
    ],
    techStack: ["Python", "OpenAI", "LangChain", "TensorFlow", "FastAPI"],
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    borderColor: "hover:border-emerald-500/50",
    shadowColor: "hover:shadow-emerald-500/20",
    deliverTime: "3-8 weeks",
    startingPrice: "$799",
    businessBenefits: [
      "24/7 customer support without hiring",
      "Save 40+ hours/week on queries",
      "Reduce errors to zero",
      "Save 60%+ operational costs",
    ],
    href: "/pricing#ai",
    trending: true,
  },
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    tagline: "Modern, Fast & Scalable Websites",
    description:
      "We build high-performance websites that load fast, rank high on Google, and convert visitors into customers. From simple landing pages to complex web applications — we've got you covered.",
    features: [
      "Business Websites & Corporate Portals",
      "E-Commerce Stores (Shopify, WooCommerce, Custom)",
      "Landing Pages with High Conversion",
      "CMS & Custom Web Applications",
      "Progressive Web Apps (PWA)",
      "API Development & Integration",
    ],
    techStack: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-400",
    borderColor: "hover:border-blue-500/50",
    shadowColor: "hover:shadow-blue-500/20",
    deliverTime: "2-6 weeks",
    startingPrice: "$499",
    businessBenefits: [
      "Get found on Google (SEO optimized)",
      "Build trust with professional design",
      "Capture leads 24/7 with contact forms",
      "Sell products online without physical store",
    ],
    href: "/pricing#web",
    trending: false,
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Native & Cross-Platform Apps",
    description:
      "Beautiful, powerful mobile apps for Android and iOS. We build apps that your users will love — with smooth animations, offline support, and seamless performance.",
    features: [
      "Native iOS Apps (Swift)",
      "Native Android Apps (Kotlin)",
      "Cross-Platform (React Native, Flutter)",
      "App Store & Play Store Publishing",
      "Push Notifications & Analytics",
      "Ongoing Maintenance & Updates",
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-400",
    borderColor: "hover:border-purple-500/50",
    shadowColor: "hover:shadow-purple-500/20",
    deliverTime: "4-12 weeks",
    startingPrice: "$999",
    businessBenefits: [
      "Direct connection with customers",
      "In-app payments & bookings",
      "Real-time notifications & updates",
      "Customer loyalty & retention",
    ],
    href: "/pricing#mobile",
    trending: false,
  },
  {
    id: "crm",
    icon: BarChart3,
    title: "CRM & Business Software",
    tagline: "Manage Everything in One Place",
    description:
      "Custom CRM systems, admin dashboards, and business software that streamline your operations. Track leads, manage customers, and automate workflows — all from one powerful platform.",
    features: [
      "Custom CRM Development",
      "Admin Dashboards & Analytics",
      "Lead & Customer Management",
      "Invoice & Billing Systems",
      "Workflow Automation",
      "Role-Based Access Control",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Prisma", "Chart.js"],
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-500/10",
    iconColor: "text-orange-400",
    borderColor: "hover:border-orange-500/50",
    shadowColor: "hover:shadow-orange-500/20",
    deliverTime: "4-10 weeks",
    startingPrice: "$999",
    businessBenefits: [
      "Never lose a lead again",
      "Increase sales by 30%+ with pipeline",
      "Automate follow-ups & emails",
      "Track team performance",
    ],
    href: "/pricing#crm",
    trending: false,
  },
];

const additionalServices = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-friendly, beautiful interfaces that convert.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Sell online with powerful, scalable platforms.",
  },
  {
    icon: Code2,
    title: "API Development",
    description: "Robust REST & GraphQL APIs for your apps.",
  },
  {
    icon: Users,
    title: "IT Consulting",
    description: "Expert guidance for your tech decisions.",
  },
];

const trustPoints = [
  { icon: DollarSign, text: "USD Payments", color: "text-emerald-400" },
  { icon: Shield, text: "100% Code Ownership", color: "text-blue-400" },
  { icon: Clock, text: "On-Time Delivery", color: "text-purple-400" },
  { icon: Users, text: "Direct Developer Access", color: "text-orange-400" },
];

export default function ServicesPage() {
  return (
    <main className="relative pt-32 pb-20 px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ============ AI-FIRST HERO SECTION ============ */}
        <section className="relative mb-24 pt-4">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* ===== LEFT SIDE ===== */}
            <div className="text-white">
              
              {/* AI Badge */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full 
                           bg-gradient-to-r from-emerald-500/10 to-teal-500/10 
                           border border-emerald-500/30 mb-6 backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full 
                                   rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 
                                   bg-emerald-500" />
                </span>
                <Sparkles size={14} className="text-emerald-400" />
                <span className="text-xs text-emerald-300 font-semibold uppercase tracking-wider">
                  AI-First Development Agency
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white 
                           mb-6 tracking-tight leading-[1.1]"
              >
                We Build{" "}
                <span className="relative inline-block">
                  <RotatingWord />
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="10"
                    viewBox="0 0 400 10"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 7C100 2 300 2 398 7"
                      stroke="url(#servicesGradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="servicesGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="50%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <br />
                Digital Solutions
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-slate-400 text-base md:text-lg max-w-xl 
                           leading-relaxed mb-8"
              >
                From <span className="text-emerald-400 font-semibold">AI automation</span> to{" "}
                <span className="text-white font-semibold">web & mobile apps</span> — we help
                US & global businesses grow with{" "}
                <span className="text-white font-semibold">cutting-edge technology</span>.
              </motion.p>

              {/* Dual CTAs */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 mb-10"
              >
                <Link href="/contact">
                  <motion.button
                    whileHover={{ y: -3, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative px-7 py-3.5 rounded-full text-white font-semibold 
                               overflow-hidden group
                               bg-gradient-to-r from-indigo-600 to-purple-600
                               shadow-lg shadow-indigo-500/30 
                               hover:shadow-xl hover:shadow-purple-500/50 
                               transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Get Free AI Consultation
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
                </Link>

                <Link href="/pricing">
                  <motion.button
                    whileHover={{ y: -3, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-7 py-3.5 rounded-full 
                               text-white font-medium border border-white/15 
                               hover:bg-white/5 hover:border-white/30 
                               transition-all duration-300"
                  >
                    <DollarSign size={16} />
                    View Pricing
                  </motion.button>
                </Link>
              </motion.div>

              {/* Trust Points */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap items-center gap-x-6 gap-y-3 
                           pt-6 border-t border-white/10"
              >
                {trustPoints.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-2">
                      <Icon size={14} className={item.color} />
                      <span className="text-xs text-slate-400 font-medium">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* ===== RIGHT SIDE - AI MOCKUP ===== */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/30 
                              via-indigo-600/30 to-purple-600/30 
                              blur-[100px] rounded-full" />

              {/* AI Dashboard Mockup */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 bg-[#0d1117] rounded-2xl 
                           border border-white/10 shadow-2xl shadow-emerald-500/20 
                           overflow-hidden backdrop-blur-sm"
              >
                {/* Window Header */}
                <div className="flex items-center gap-2 px-4 py-3 
                                bg-[#161b22] border-b border-white/10">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <span className="ml-4 text-xs text-slate-500 font-mono">
                    lavixtech-ai.config
                  </span>
                  <div className="ml-auto flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-emerald-400 font-mono">live</span>
                  </div>
                </div>

                {/* Mockup Body - AI Assistant Panel */}
                <div className="p-6 space-y-4">
                  
                  {/* AI Assistant Header */}
                  <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                    <div className="w-10 h-10 rounded-xl 
                                    bg-gradient-to-br from-emerald-500 to-teal-500 
                                    flex items-center justify-center">
                      <Bot size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">
                        Lavix AI Assistant
                      </p>
                      <p className="text-xs text-emerald-400">
                        ● Online • Processing 47 queries
                      </p>
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Queries Handled", value: "12,847", color: "text-emerald-400" },
                      { label: "Time Saved", value: "340 hrs", color: "text-blue-400" },
                      { label: "Response Rate", value: "98.5%", color: "text-purple-400" },
                      { label: "Cost Saved", value: "$24,000", color: "text-yellow-400" },
                    ].map((metric, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg bg-white/5 border border-white/10"
                      >
                        <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">
                          {metric.label}
                        </p>
                        <p className={`text-lg font-bold ${metric.color}`}>
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Chat Preview */}
                  <div className="space-y-2 pt-2">
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-white/10 
                                      flex items-center justify-center flex-shrink-0">
                        <Users size={12} className="text-slate-400" />
                      </div>
                      <div className="flex-1 p-2.5 rounded-lg bg-white/5 
                                      border border-white/10 text-xs text-slate-300">
                        Can you help me with pricing?
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full 
                                      bg-gradient-to-br from-emerald-500 to-teal-500 
                                      flex items-center justify-center flex-shrink-0">
                        <Bot size={12} className="text-white" />
                      </div>
                      <div className="flex-1 p-2.5 rounded-lg 
                                      bg-gradient-to-r from-emerald-500/20 to-teal-500/20 
                                      border border-emerald-500/30 text-xs text-white">
                        Our web development starts at $499. Would you like a custom quote? 🚀
                      </div>
                    </div>
                  </div>

                  {/* Bottom Status */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <Cpu size={12} className="text-emerald-400" />
                      <span className="text-[10px] text-slate-500 font-mono">
                        GPT-4 Turbo • Latency: 240ms
                      </span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono">
                      ● Active
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card - Top Right */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -top-4 -right-4 z-30 
                           bg-slate-900/90 backdrop-blur-xl 
                           border border-white/10 rounded-2xl 
                           px-4 py-3 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full 
                                  bg-gradient-to-r from-yellow-500 to-orange-500 
                                  flex items-center justify-center">
                    <Star size={18} className="text-white" fill="white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Top Rated</p>
                    <p className="text-sm font-semibold text-white">AI Agency 2026</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card - Bottom Left */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 z-30 
                           bg-slate-900/90 backdrop-blur-xl 
                           border border-white/10 rounded-2xl 
                           px-4 py-3 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full 
                                  bg-gradient-to-r from-indigo-500 to-purple-500 
                                  flex items-center justify-center">
                    <TrendingUp size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">AI Projects</p>
                    <p className="text-sm font-semibold text-white">50+ Shipped</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ============ QUICK STATS BAR ============ */}
        <motion.section
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 
                     p-8 rounded-2xl bg-slate-900/30 border border-white/10 
                     backdrop-blur-sm"
        >
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "30+", label: "Happy Clients" },
            { number: "8+", label: "Countries Served" },
            { number: "99%", label: "Client Satisfaction" },
          ].map((stat, i) => (
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

        {/* ============ SECTION HEADER ============ */}
        <motion.section
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
                          bg-white/5 border border-white/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-xs text-slate-300 font-medium uppercase tracking-wider">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Go Digital</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            End-to-end digital solutions — from AI automation to web & mobile
            apps — tailored for growing businesses.
          </p>
        </motion.section>

        {/* ============ MAIN SERVICES ============ */}
        <section className="space-y-8 mb-24">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                className={`group relative rounded-3xl overflow-hidden 
                           bg-slate-900/50 backdrop-blur-sm 
                           border border-white/10 ${service.borderColor} 
                           ${service.shadowColor} hover:shadow-2xl 
                           transition-all duration-500 p-8 md:p-12
                           ${service.trending ? "ring-1 ring-emerald-500/20" : ""}`}
              >
                
                {/* Trending Badge */}
                {service.trending && (
                  <div className="absolute top-6 right-6 z-20 
                                  flex items-center gap-1.5 px-3 py-1 
                                  rounded-full bg-gradient-to-r 
                                  from-emerald-500 to-teal-500 
                                  text-white text-[10px] font-bold 
                                  uppercase tracking-wider
                                  shadow-lg shadow-emerald-500/50">
                    <Sparkles size={10} />
                    Trending in US
                  </div>
                )}

                {/* Gradient Glow */}
                <div
                  className={`absolute -top-20 -right-20 w-64 h-64 
                              ${service.bgColor} rounded-full blur-[80px] 
                              opacity-0 group-hover:opacity-100 
                              transition-opacity duration-700`}
                />

                <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                  
                  {/* Left Side - Content */}
                  <div>
                    
                    {/* Icon + Title */}
                    <div className="flex items-center gap-4 mb-5">
                      <div
                        className={`w-14 h-14 rounded-2xl ${service.bgColor} 
                                    flex items-center justify-center 
                                    group-hover:scale-110 
                                    transition-transform duration-500`}
                      >
                        <Icon size={28} className={service.iconColor} />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                          {service.title}
                        </h2>
                        <p className={`text-sm font-medium ${service.iconColor}`}>
                          {service.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="grid md:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-slate-300"
                        >
                          <div
                            className={`w-5 h-5 rounded-full ${service.bgColor} 
                                        flex items-center justify-center 
                                        flex-shrink-0 mt-0.5`}
                          >
                            <Check size={12} className={service.iconColor} />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-md text-xs font-medium 
                                     bg-white/5 text-slate-300 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className={`inline-flex items-center gap-2 px-6 py-3 
                                 rounded-full text-white font-semibold 
                                 bg-gradient-to-r ${service.color} 
                                 shadow-lg hover:shadow-xl 
                                 hover:-translate-y-0.5 
                                 transition-all duration-300 group/btn`}
                    >
                      Get Started
                      <ArrowRight
                        size={18}
                        className="group-hover/btn:translate-x-1 
                                   transition-transform duration-300"
                      />
                    </Link>
                  </div>

                  {/* Right Side - Info Card */}
                  <div className="lg:pl-8">
                    <div
                      className={`relative rounded-2xl p-8 
                                 bg-slate-950/50 border border-white/10 
                                 backdrop-blur-sm`}
                    >
                      {/* Decorative Icon */}
                      <div className="absolute top-6 right-6 opacity-5">
                        <Icon size={80} className="text-white" />
                      </div>

                      {/* Deliver Time */}
                      <div className="mb-6 pb-6 border-b border-white/10">
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">
                          Delivery Time
                        </p>
                        <p className="text-2xl font-bold text-white">
                          {service.deliverTime}
                        </p>
                      </div>

                      {/* Starting Price */}
                      <div className="mb-6 pb-6 border-b border-white/10">
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">
                          Starting From
                        </p>
                        <div className="flex items-baseline gap-2">
                          <p className="text-3xl font-bold gradient-text">
                            {service.startingPrice}
                          </p>
                          <span className="text-sm text-slate-500">USD</span>
                        </div>
                      </div>

                      {/* Business Benefits */}
                      <div className="mb-6">
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">
                          Business Benefits
                        </p>
                        <div className="space-y-2">
                          {service.businessBenefits.map((benefit, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 text-xs text-slate-300"
                            >
                              <div
                                className={`w-4 h-4 rounded-full ${service.bgColor} 
                                            flex items-center justify-center 
                                            flex-shrink-0 mt-0.5`}
                              >
                                <TrendingUp size={10} className={service.iconColor} />
                              </div>
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* View Pricing Link */}
                      <Link
                        href={service.href}
                        className={`flex items-center justify-center gap-2 w-full 
                                   py-3 rounded-full font-semibold text-sm 
                                   bg-gradient-to-r ${service.color} 
                                   text-white shadow-lg 
                                   hover:shadow-xl hover:-translate-y-0.5 
                                   transition-all duration-300 group/btn`}
                      >
                        View Pricing Plans
                        <ArrowRight
                          size={14}
                          className="group-hover/btn:translate-x-1 
                                     transition-transform duration-300"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </section>

        {/* ============ ADDITIONAL SERVICES ============ */}
        <section className="mb-24">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Additional <span className="gradient-text">Services</span>
            </h2>
            <p className="text-slate-400">
              More ways we can help your business grow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, idx) => {
              const Icon = service.icon;
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
                             hover:shadow-2xl hover:shadow-indigo-500/10 
                             transition-all duration-500 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 
                                  flex items-center justify-center mb-4 
                                  group-hover:scale-110 transition-transform 
                                  duration-500">
                    <Icon size={24} className="text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-1 text-xs font-semibold 
                                  text-slate-500 group-hover:text-white 
                                  transition-colors duration-300">
                    Learn more
                    <ArrowUpRight
                      size={12}
                      className="group-hover:translate-x-0.5 
                                 group-hover:-translate-y-0.5 
                                 transition-transform duration-300"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ============ PROCESS SECTION ============ */}
        <section className="mb-24">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              How We <span className="gradient-text">Work</span>
            </h2>
            <p className="text-slate-400">
              A simple, transparent process from start to finish
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "We understand your goals, requirements, and vision." },
              { step: "02", title: "Design", desc: "We create wireframes and designs for your approval." },
              { step: "03", title: "Development", desc: "We build your solution with regular updates." },
              { step: "04", title: "Launch", desc: "We deploy, test, and provide ongoing support." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                className="relative p-6 rounded-2xl bg-slate-900/50 
                           border border-white/10 backdrop-blur-sm"
              >
                <p className="text-5xl font-bold text-white/5 absolute 
                              top-4 right-4">
                  {item.step}
                </p>
                <div className="relative z-10">
                  <p className="text-xs font-bold text-indigo-400 mb-2">
                    STEP {item.step}
                  </p>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
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
              Ready to Start Your{" "}
              <span className="gradient-text">Project?</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Get a free consultation with our AI experts. No commitment
              required.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full 
                           text-slate-900 font-bold bg-white hover:bg-slate-100 
                           shadow-lg hover:shadow-xl hover:-translate-y-1 
                           transition-all duration-300 group"
              >
                Book a Free Call
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 
                             transition-transform duration-300"
                />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full 
                           text-white font-semibold border-2 border-white/20 
                           hover:bg-white/10 transition-all duration-300"
              >
                <DollarSign size={18} />
                View Pricing
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}