 "use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Heart,
  ArrowRight,
  Send,
  CheckCircle2,
  Sparkles,
  Globe,
  Shield,
  Clock,
  ArrowUp,
} from "lucide-react";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const footerLinks = {
  services: [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile Apps", href: "/services/mobile-app-development" },
    { name: "AI & Automation", href: "/services/ai-automation" },
    { name: "CRM & Software", href: "/services/crm-software" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    // 👇 Free Website Audit link added
    { name: "Free Website Audit", href: "/free-audit" },
    { name: "Case Studies", href: "/portfolio" },
    { name: "Documentation", href: "/docs" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:bg-[#0A66C2]" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter", color: "hover:bg-[#1DA1F2]" },
  { icon: FaGithub, href: "https://github.com", label: "Github", color: "hover:bg-[#333]" },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/lavix.tech/",
    label: "Instagram",
    color: "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCB045]",
  },
];

const trustBadges = [
  { icon: Shield, text: "100% Secure", color: "text-emerald-500" },
  { icon: Clock, text: "24/7 Support", color: "text-blue-500" },
  { icon: Globe, text: "Global Clients", color: "text-purple-500" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    console.log("Subscribed:", email);
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-200 bg-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ============ TOP CTA BANNER ============ */}
        <div className="relative -mt-0 py-12 border-b border-slate-200">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden 
                       bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 
                       p-1 shadow-2xl shadow-purple-500/20"
          >
            <div className="relative rounded-[22px] bg-slate-950/95 backdrop-blur-xl px-8 py-10 md:px-12 md:py-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                
                {/* Left - Text */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
                                  bg-emerald-500/10 border border-emerald-500/20 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] text-emerald-300 font-bold uppercase tracking-wider">
                      Let&apos;s Work Together
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Ready to Build Something{" "}
                    <span className="gradient-text">Amazing?</span>
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Get a free consultation. No commitment, no pressure.
                  </p>
                </div>

                {/* Right - CTA */}
                <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-6 py-3 
                               rounded-full bg-white text-slate-900 font-bold text-sm 
                               shadow-lg hover:shadow-xl hover:-translate-y-0.5 
                               transition-all duration-300"
                  >
                    Start Your Project
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                  <a
                    href="https://calendly.com/ankitpandey-ap8787/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-6 py-3 
                               rounded-full text-white font-medium text-sm 
                               border-2 border-white/20 hover:bg-white/10 
                               transition-all duration-300"
                  >
                    Book a Call
                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ============ MAIN FOOTER WITH WATERMARK ============ */}
        <div className="relative py-16">
          
          {/* WATERMARK TEXT */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
            <h1 className="text-[20vw] md:text-[16vw] font-black text-slate-100/80 whitespace-nowrap leading-none tracking-tighter">
              LavixTech
            </h1>
          </div>

          {/* Content (Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 relative z-10">
            
            {/* Column 1: Logo + Description + Social */}
            <div className="lg:col-span-2">
              
              <Link href="/" className="flex items-center gap-2 mb-5 group">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src="/logo20-cropped.png"
                    alt="LavixTech Logo"
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span className="text-2xl font-bold text-slate-900">
                  Lavix<span className="gradient-text">Tech</span>
                </span>
              </Link>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-sm">
                We build modern web, mobile, AI and CRM solutions that help
                businesses grow, automate and stay ahead of the competition.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                {trustBadges.map((badge, i) => {
                  const Icon = badge.icon;
                  return (
                    <div key={i} className="flex items-center gap-1.5">
                      <Icon size={14} className={badge.color} />
                      <span className="text-xs text-slate-600 font-medium">
                        {badge.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center gap-3">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className={`w-10 h-10 rounded-xl bg-slate-100 
                                 border border-slate-200 ${social.color}
                                 hover:border-transparent flex items-center justify-center 
                                 text-slate-600 hover:text-white 
                                 transition-colors duration-300`}
                    >
                      <Icon size={16} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Services */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-5">
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="group text-sm text-slate-600 hover:text-slate-900 
                                 transition-colors duration-300 
                                 inline-flex items-center gap-1"
                    >
                      {link.name}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 
                                   -translate-x-2 group-hover:translate-x-0 
                                   transition-all duration-300"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-5">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="group text-sm text-slate-600 hover:text-slate-900 
                                 transition-colors duration-300 
                                 inline-flex items-center gap-1"
                    >
                      {link.name}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 
                                   -translate-x-2 group-hover:translate-x-0 
                                   transition-all duration-300"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Resources */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-5">
                Resources
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className={`group text-sm transition-colors duration-300 
                                 inline-flex items-center gap-1 ${
                                   link.name === "Free Website Audit"
                                     ? "text-indigo-600 font-semibold hover:text-indigo-800"
                                     : "text-slate-600 hover:text-slate-900"
                                 }`}
                    >
                      {link.name === "Free Website Audit" && (
                        <Sparkles size={12} className="text-indigo-500" />
                      )}
                      {link.name}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 
                                   -translate-x-2 group-hover:translate-x-0 
                                   transition-all duration-300"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Contact */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-5">
                Get in Touch
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:lavixtech@gmail.com"
                    className="text-sm text-slate-600 hover:text-slate-900 
                               transition-colors duration-300 
                               flex items-start gap-2 break-all"
                  >
                    <Mail size={14} className="text-indigo-500 flex-shrink-0 mt-0.5" />
                    lavixtech@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+918787054829"
                    className="text-sm text-slate-600 hover:text-slate-900 
                               transition-colors duration-300 
                               flex items-center gap-2"
                  >
                    <Phone size={14} className="text-indigo-500 flex-shrink-0" />
                    +91 8787054829
                  </a>
                </li>
                <li>
                  <div className="text-sm text-slate-600 flex items-start gap-2">
                    <MapPin size={14} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                    <span>Delhi, India</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ============ NEWSLETTER BAR ============ */}
        <div className="py-8 border-t border-slate-200 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 
                              flex items-center justify-center flex-shrink-0">
                <Sparkles size={18} className="text-white" fill="white" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Get weekly tech insights
                </p>
                <p className="text-xs text-slate-500">
                  Join 500+ founders &amp; developers
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSubscribe}
              className="flex w-full md:w-auto items-center gap-2"
            >
              <div className="relative flex-1 md:w-72">
                <Mail
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full pl-11 pr-4 py-2.5 rounded-full 
                             bg-slate-100 border border-slate-200 
                             text-sm text-slate-900 placeholder-slate-400 
                             focus:outline-none focus:border-indigo-500/50 
                             focus:bg-white transition-all duration-300"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 px-5 py-2.5 
                           rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 
                           text-white font-semibold text-sm 
                           shadow-lg shadow-indigo-500/30 hover:shadow-xl 
                           hover:shadow-purple-500/50 hover:-translate-y-0.5 
                           transition-all duration-300 flex-shrink-0"
              >
                {subscribed ? (
                  <>
                    <CheckCircle2 size={16} />
                    Done
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* ============ BOTTOM BAR ============ */}
        <div className="pt-6 pb-8 border-t border-slate-200 flex flex-col md:flex-row 
                        items-center justify-between gap-4 relative z-10">
          
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <p className="flex items-center gap-1">
              © {new Date().getFullYear()} LavixTech. All rights reserved.
            </p>
            <span className="hidden md:inline text-slate-300">•</span>
            <p className="flex items-center gap-1">
              Made with
              <Heart size={10} className="text-red-500" fill="currentColor" />
              in India
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full 
                          bg-emerald-50 border border-emerald-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[10px] font-semibold text-emerald-700 uppercase tracking-wider">
              All Systems Operational
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs text-slate-500 hover:text-slate-900 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-slate-500 hover:text-slate-900 transition-colors"
            >
              Terms
            </Link>
            
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 
                         flex items-center justify-center text-slate-600 
                         hover:bg-slate-900 hover:text-white hover:border-slate-900 
                         transition-all duration-300 group"
              aria-label="Back to top"
            >
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
