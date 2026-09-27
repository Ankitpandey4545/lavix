"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  TrendingUp,
  Filter,
  Star,
} from "lucide-react";

const categories = ["All", "Web", "Mobile", "AI", "CRM"];

const projects = [
  {
    id: 1,
    title: "FashionHub E-Commerce",
    category: "Web",
    client: "FashionHub India",
    description:
      "Full-featured e-commerce platform with 10,000+ products, secure payments, and AI-powered recommendations.",
    tags: ["Next.js", "Stripe", "MongoDB", "Redis"],
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    stats: "+250% Sales",
    year: "2025",
    duration: "8 weeks",
    rating: 5,
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: 2,
    title: "FitTrack Mobile App",
    category: "Mobile",
    client: "FitTrack Wellness",
    description:
      "Cross-platform fitness app with AI workout plans, real-time tracking, and social features.",
    tags: ["React Native", "Firebase", "AI", "Redux"],
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    stats: "50k+ Users",
    year: "2025",
    duration: "12 weeks",
    rating: 5,
    gradient: "from-purple-600 to-pink-500",
  },
  {
    id: 3,
    title: "SupportGenie AI Chatbot",
    category: "AI",
    client: "SupportGenie SaaS",
    description:
      "Intelligent customer support bot handling 80% queries automatically with GPT-4 and custom training.",
    tags: ["OpenAI", "LangChain", "Python", "FastAPI"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    stats: "80% Auto-Resolved",
    year: "2025",
    duration: "6 weeks",
    rating: 5,
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    id: 4,
    title: "SalesPro CRM Dashboard",
    category: "CRM",
    client: "SalesPro Solutions",
    description:
      "Custom CRM with lead tracking, analytics, workflow automation, and team collaboration.",
    tags: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    stats: "+180% Productivity",
    year: "2024",
    duration: "10 weeks",
    rating: 5,
    gradient: "from-orange-600 to-amber-500",
  },
  {
    id: 5,
    title: "CloudSaaS Landing Page",
    category: "Web",
    client: "CloudSaaS Inc",
    description:
      "High-converting SaaS landing page with A/B testing, analytics, and lead capture.",
    tags: ["Next.js", "Tailwind", "Framer"],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    stats: "+45% Conversions",
    year: "2024",
    duration: "3 weeks",
    rating: 5,
    gradient: "from-indigo-600 to-purple-500",
  },
  {
    id: 6,
    title: "MediCare Health App",
    category: "Mobile",
    client: "MediCare Hospitals",
    description:
      "Healthcare app for appointment booking, telemedicine consultations, and medical records.",
    tags: ["Flutter", "Firebase", "WebRTC"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    stats: "10k+ Downloads",
    year: "2024",
    duration: "14 weeks",
    rating: 5,
    gradient: "from-rose-600 to-red-500",
  },
  {
    id: 7,
    title: "EduPro Learning Platform",
    category: "Web",
    client: "EduPro Academy",
    description:
      "Online learning platform with video courses, live classes, and certification system.",
    tags: ["Next.js", "Node.js", "AWS"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    stats: "25k+ Students",
    year: "2024",
    duration: "12 weeks",
    rating: 5,
    gradient: "from-cyan-600 to-blue-500",
  },
  {
    id: 8,
    title: "FoodieHub Delivery App",
    category: "Mobile",
    client: "FoodieHub",
    description:
      "Food delivery app with real-time tracking, multiple restaurants, and secure payments.",
    tags: ["React Native", "Node.js", "Maps API"],
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    stats: "100k+ Orders",
    year: "2024",
    duration: "16 weeks",
    rating: 5,
    gradient: "from-amber-600 to-yellow-500",
  },
  {
    id: 9,
    title: "LegalBot AI Assistant",
    category: "AI",
    client: "LegalBot LLP",
    description:
      "AI legal assistant that helps draft contracts, answer legal queries, and analyze documents.",
    tags: ["OpenAI", "Python", "Vector DB"],
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    stats: "5k+ Documents",
    year: "2024",
    duration: "8 weeks",
    rating: 5,
    gradient: "from-violet-600 to-purple-500",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="relative pt-32 pb-20 px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ============ HERO SECTION ============ */}
        <section className="text-center mb-16">
          
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
              Our Portfolio
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
            Projects That{" "}
            <span className="gradient-text">Made an Impact</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            A showcase of our best work — from e-commerce platforms to AI
            systems, we&apos;ve built solutions that deliver real results.
          </motion.p>
        </section>

        {/* ============ FILTER TABS ============ */}
        <motion.section
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <div className="flex items-center gap-2 px-3 py-2 rounded-full 
                          bg-white/5 border border-white/10 mr-2">
            <Filter size={14} className="text-slate-400" />
            <span className="text-xs text-slate-400 font-medium">Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium 
                         transition-all duration-300 ${
                           activeCategory === cat
                             ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30"
                             : "bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10 hover:text-white"
                         }`}
            >
              {cat}
            </button>
          ))}
        </motion.section>

        {/* ============ PROJECTS GRID ============ */}
        <section className="mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={false}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-2xl overflow-hidden 
                             bg-slate-900/50 backdrop-blur-sm 
                             border border-white/10 hover:border-white/20 
                             hover:shadow-2xl hover:shadow-indigo-500/20 
                             transition-all duration-500 cursor-pointer"
                >
                  {/* Project Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 
                                 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Dark Gradient Overlay */}
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

                    {/* Year Badge */}
                    <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded-md 
                                    bg-black/60 backdrop-blur-md border border-white/20 
                                    z-10">
                      <span className="text-xs font-mono text-slate-300">
                        {project.year}
                      </span>
                    </div>

                    {/* Project Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-300">
                        {project.client}
                      </p>
                    </div>

                    {/* Hover Overlay */}
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

                    {/* Rating + Duration */}
                    <div className="flex items-center gap-4 mb-4 text-xs">
                      <div className="flex items-center gap-1">
                        {[...Array(project.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className="text-yellow-400"
                            fill="#facc15"
                          />
                        ))}
                      </div>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400">
                        {project.duration}
                      </span>
                    </div>

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

                    {/* View Case Study */}
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
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400">No projects found in this category.</p>
            </div>
          )}
        </section>

        {/* ============ STATS BAR ============ */}
        <motion.section
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 
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
        </motion.section>

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
              Want to Be Our Next{" "}
              <span className="gradient-text">Success Story?</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s build something amazing together. Get a free
              consultation with our team.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full 
                         text-slate-900 font-bold bg-white hover:bg-slate-100 
                         shadow-lg hover:shadow-xl hover:-translate-y-1 
                         transition-all duration-300 group"
            >
              Start Your Project
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