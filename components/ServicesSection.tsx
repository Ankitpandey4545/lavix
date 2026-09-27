"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Brain, BarChart3, ArrowUpRight, Check } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, fast & scalable websites built with the latest technologies for your brand.",
    features: ["Business Websites", "E-Commerce", "Landing Pages", "CMS Solutions"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-400",
    borderColor: "hover:border-blue-500/50",
    shadowColor: "hover:shadow-blue-500/20",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Powerful native and cross-platform apps for Android & iOS that your users love.",
    features: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)"],
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-400",
    borderColor: "hover:border-purple-500/50",
    shadowColor: "hover:shadow-purple-500/20",
  },
  {
    icon: Brain,
    title: "AI & Automation",
    description:
      "Smart AI solutions to save time, increase efficiency and accelerate business growth.",
    features: ["AI Chatbots", "Process Automation", "OpenAI Integration", "Custom AI"],
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    borderColor: "hover:border-emerald-500/50",
    shadowColor: "hover:shadow-emerald-500/20",
  },
  {
    icon: BarChart3,
    title: "CRM & Business Software",
    description:
      "Manage your leads, customers and operations — all in one powerful platform.",
    features: ["Custom CRM", "Admin Dashboards", "Lead Management", "Workflow Automation"],
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-500/10",
    iconColor: "text-orange-400",
    borderColor: "hover:border-orange-500/50",
    shadowColor: "hover:shadow-orange-500/20",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          
          {/* Badge */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
                       bg-white/5 border border-white/10 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-xs text-slate-300 font-medium uppercase tracking-wider">
              Our Services
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            Everything You Need to{" "}
            <span className="gradient-text">Go Digital</span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto"
          >
            End-to-end digital solutions designed to help your business grow,
            automate and stay ahead of the competition.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                whileHover={{ y: -6 }}
                className={`group relative p-6 rounded-2xl bg-slate-900/50 
                           backdrop-blur-sm border border-white/10 
                           ${service.borderColor} ${service.shadowColor}
                           hover:shadow-2xl transition-all duration-500 
                           cursor-pointer overflow-hidden`}
              >
                {/* Gradient Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} 
                              opacity-0 group-hover:opacity-5 transition-opacity 
                              duration-500 pointer-events-none`}
                />

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${service.bgColor} 
                              flex items-center justify-center mb-5 
                              group-hover:scale-110 transition-transform 
                              duration-500`}
                >
                  <Icon size={24} className={service.iconColor} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent 
                               group-hover:bg-clip-text group-hover:bg-gradient-to-r 
                               group-hover:${service.color} transition-all">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-xs text-slate-400"
                    >
                      <Check size={12} className={service.iconColor} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="flex items-center gap-1 text-xs font-semibold 
                                text-slate-500 group-hover:text-white 
                                transition-colors duration-300">
                  Learn more
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-0.5 
                               group-hover:-translate-y-0.5 
                               transition-transform duration-300"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-14"
        >
          <p className="text-slate-400 mb-4">
            Need something custom? We build tailored solutions.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full 
                       text-white font-semibold bg-gradient-to-r 
                       from-indigo-600 to-purple-600 
                       shadow-lg shadow-indigo-500/30 
                       hover:shadow-xl hover:shadow-purple-500/50 
                       hover:-translate-y-0.5 transition-all duration-300"
          >
            Get a Free Consultation
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}