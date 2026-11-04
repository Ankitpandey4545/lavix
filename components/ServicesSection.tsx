 "use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Brain,
  BarChart3,
  ArrowUpRight,
  Check,
} from "lucide-react";

// ============ BACKGROUND IMAGES (JSON ARRAY) ============
// Opacity badha di hai taaki images clearly dikhein
const backgroundImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80", 
    position: "top-left",
    opacity: 0.15, // 15% - Clearly visible
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80", 
    position: "bottom-right",
    opacity: 0.15, // 15%
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80", 
    position: "center",
    opacity: 0.10, // 10%
  },
];

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, fast & scalable websites built with the latest technologies for your brand.",
    features: ["Business Websites", "E-Commerce", "Landing Pages", "CMS Solutions"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-500",
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
    iconColor: "text-purple-500",
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
    iconColor: "text-emerald-500",
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
    iconColor: "text-orange-500",
    borderColor: "hover:border-orange-500/50",
    shadowColor: "hover:shadow-orange-500/20",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-slate-50">

      {/* ============ BACKGROUND IMAGES (CLEARLY VISIBLE) ============ */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* JSON Images Map */}
        {backgroundImages.map((img) => {
          let positionClasses = "";
          if (img.position === "top-left") positionClasses = "-top-20 -left-20 w-[600px] h-[600px]";
          if (img.position === "bottom-right") positionClasses = "-bottom-20 -right-20 w-[600px] h-[600px]";
          if (img.position === "center") positionClasses = "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]";

          return (
            <div
              key={img.id}
              className={`absolute ${positionClasses}`}
              style={{
                backgroundImage: `url(${img.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: img.opacity,
                // Edges ko smooth fade karne ke liye mask
                maskImage: "radial-gradient(circle, black 40%, transparent 70%)",
                WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 70%)",
              }}
            />
          );
        })}

        {/* White Overlay - Taaki text padhne me dikkat na ho */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80" />
      </div>

      {/* ============ MAIN CONTENT ============ */}
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 mb-4 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-xs text-slate-700 font-medium uppercase tracking-wider">
              Our Services
            </span>
          </motion.div>

          <motion.h2
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight"
          >
            Build Your Next Digital Advantage with{" "}
            <span className="gradient-text">LavixTech</span>
          </motion.h2>

          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto"
          >
            End-to-end digital solutions designed to help your business launch faster,
            automate smarter, and grow with confidence.
          </motion.p>
        </div>

        {/* Services Grid (Glass Cards) */}
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
                className={`group relative p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${service.borderColor} ${service.shadowColor} hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden`}
              >
                {/* Gradient Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                />

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${service.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}
                >
                  <Icon size={24} className={service.iconColor} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-xs text-slate-600"
                    >
                      <Check size={12} className={service.iconColor} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More */}
                <div className="flex items-center gap-1 text-xs font-semibold text-slate-700 group-hover:text-indigo-600 transition-colors duration-300">
                  Learn more
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
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
          <p className="text-slate-600 mb-4">
            Need something custom? We build tailored solutions for your business goals.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-purple-500/50 hover:-translate-y-0.5 transition-all duration-300"
          >
            Get a Free Consultation
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}