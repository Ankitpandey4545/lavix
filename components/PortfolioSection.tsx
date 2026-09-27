 "use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "FashionHub E-Commerce",
    category: "Web",
    description: "Full-featured e-commerce platform with 10k+ products and secure payments.",
    tags: ["Next.js", "Stripe", "MongoDB"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    stats: "+250% Sales",
  },
  {
    title: "FitTrack Mobile App",
    category: "Mobile",
    description: "Cross-platform fitness app with AI workout plans and real-time tracking.",
    tags: ["React Native", "Firebase", "AI"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    stats: "50k+ Users",
  },
  {
    title: "SupportGenie AI Chatbot",
    category: "AI",
    description: "Intelligent customer support bot handling 80% queries automatically.",
    tags: ["OpenAI", "Node.js", "Python"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    stats: "80% Auto-Resolved",
  },
  {
    title: "SalesPro CRM Dashboard",
    category: "CRM",
    description: "Custom CRM with lead tracking, analytics and workflow automation.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    stats: "+180% Productivity",
  },
  {
    title: "CloudSaaS Landing Page",
    category: "Web",
    description: "High-converting landing page for a SaaS startup with A/B testing.",
    tags: ["Next.js", "Tailwind", "Framer"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    stats: "+45% Conversions",
  },
  {
    title: "MediCare Health App",
    category: "Mobile",
    description: "Healthcare app for appointment booking and telemedicine consultations.",
    tags: ["Flutter", "Firebase", "WebRTC"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    stats: "10k+ Downloads",
  },
];

export default function PortfolioSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          
          <div>
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
                Our Portfolio
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight"
            >
              Projects That{" "}
              <span className="gradient-text">Deliver Results</span>
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-400 text-base max-w-xl"
            >
              Real projects, real impact. Here&apos;s a glimpse of what we&apos;ve built
              for our clients.
            </motion.p>
          </div>

          {/* View All Button */}
          <motion.a
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            href="/portfolio"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full 
                       text-sm font-medium text-white border border-white/15 
                       hover:bg-white/5 hover:border-white/30 
                       transition-all duration-300 group whitespace-nowrap"
          >
            View All Projects
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 
                         group-hover:-translate-y-0.5 
                         transition-transform duration-300"
            />
          </motion.a>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden 
                         bg-slate-900/50 backdrop-blur-sm 
                         border border-white/10 hover:border-white/20 
                         hover:shadow-2xl hover:shadow-indigo-500/20 
                         transition-all duration-500 cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 
                             transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Dark Gradient Overlay (always visible) */}
                <div className="absolute inset-0 bg-gradient-to-t 
                                from-black/90 via-black/40 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full 
                                bg-black/60 backdrop-blur-md border border-white/20 z-10">
                  <span className="text-xs font-semibold text-white">
                    {project.category}
                  </span>
                </div>

                {/* Stats Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full 
                                bg-black/60 backdrop-blur-md border border-white/20 
                                flex items-center gap-1 z-10">
                  <TrendingUp size={12} className="text-green-400" />
                  <span className="text-xs font-semibold text-white">
                    {project.stats}
                  </span>
                </div>

                {/* Project Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>

                {/* Hover Overlay with External Link Icon */}
                <div className="absolute inset-0 bg-indigo-600/40 backdrop-blur-sm 
                                opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300 
                                flex items-center justify-center z-20">
                  <div className="w-14 h-14 rounded-full bg-white/20 
                                  backdrop-blur-md border border-white/30 
                                  flex items-center justify-center 
                                  group-hover:scale-110 transition-transform duration-300">
                    <ExternalLink size={22} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Description */}
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-xs font-medium 
                                 bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Case Study Link */}
                <div className="flex items-center gap-1 text-xs font-semibold 
                                text-slate-500 group-hover:text-white 
                                transition-colors duration-300 pt-3 
                                border-t border-white/5">
                  View Case Study
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-0.5 
                               group-hover:-translate-y-0.5 
                               transition-transform duration-300"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 
                     p-8 rounded-2xl bg-slate-900/30 border border-white/10 
                     backdrop-blur-sm"
        >
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "30+", label: "Happy Clients" },
            { number: "15+", label: "Industries Served" },
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
        </motion.div>
      </div>
    </section>
  );
}