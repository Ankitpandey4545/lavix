"use client";

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
} from "lucide-react";

const services = [
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
    startingPrice: "₹25,000",
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
    startingPrice: "₹50,000",
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI & Automation",
    tagline: "Smart Solutions That Save Time",
    description:
      "Leverage the power of Artificial Intelligence to automate repetitive tasks, enhance customer support, and make data-driven decisions. We build custom AI solutions tailored to your business.",
    features: [
      "AI Chatbots & Virtual Assistants",
      "Process Automation (RPA)",
      "OpenAI / GPT Integration",
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
    startingPrice: "₹40,000",
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
    startingPrice: "₹60,000",
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

export default function ServicesPage() {
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
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-xs text-slate-300 font-medium uppercase tracking-wider">
              Our Services
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
            Complete{" "}
            <span className="gradient-text">Digital Solutions</span>{" "}
            for Your Business
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            From web development to AI automation — we offer end-to-end
            services to help your business grow, automate, and stay ahead of
            the competition.
          </motion.p>
        </section>

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
                           transition-all duration-500 p-8 md:p-12`}
              >
                
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
                          <span className="text-sm text-slate-500">onwards</span>
                        </div>
                      </div>

                      {/* Quick Benefits */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-slate-300">
                          <Zap size={16} className={service.iconColor} />
                          Free consultation call
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-300">
                          <Zap size={16} className={service.iconColor} />
                          100% source code ownership
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-300">
                          <Zap size={16} className={service.iconColor} />
                          30-day post-launch support
                        </div>
                      </div>
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
              Get a free consultation with our experts. No commitment required.
            </p>
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
          </div>
        </motion.section>
      </div>
    </main>
  );
}