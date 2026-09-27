 "use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, Heart } from "lucide-react";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const footerLinks = {
  services: [
    { name: "Web Development", href: "/services/web" },
    { name: "Mobile Apps", href: "/services/mobile" },
    { name: "AI & Automation", href: "/services/ai" },
    { name: "CRM & Software", href: "/services/crm" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Case Studies", href: "/case-studies" },
    { name: "Documentation", href: "/docs" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

// Real brand icons from react-icons
const socialLinks = [
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:bg-[#0A66C2]" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter", color: "hover:bg-[#1DA1F2]" },
  { icon: FaGithub, href: "https://github.com", label: "Github", color: "hover:bg-[#333]" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram", color: "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCB045]" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950/50 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Column 1: Logo + Description + Social */}
          <div className="lg:col-span-2">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-500 
                              rounded-lg transition-transform duration-300 
                              group-hover:scale-110" />
              <span className="text-xl font-bold text-white">
                Lavix<span className="gradient-text">Tech</span>
              </span>
            </Link>

            {/* Description */}
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              We build modern web, mobile, AI and CRM solutions that help
              businesses grow, automate and stay ahead of the competition.
            </p>

            {/* Social Icons with Brand Colors */}
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
                    className={`w-10 h-10 rounded-full bg-white/5 
                               border border-white/10 
                               ${social.color}
                               hover:border-transparent
                               flex items-center justify-center 
                               text-slate-400 hover:text-white 
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
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white 
                               transition-colors duration-300 
                               inline-flex items-center gap-1 group"
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
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white 
                               transition-colors duration-300 
                               inline-flex items-center gap-1 group"
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

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@lavixtech.com"
                  className="text-sm text-slate-400 hover:text-white 
                             transition-colors duration-300 
                             flex items-center gap-2"
                >
                  <Mail size={14} className="text-indigo-400 flex-shrink-0" />
                  hello@lavixtech.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919999999999"
                  className="text-sm text-slate-400 hover:text-white 
                             transition-colors duration-300 
                             flex items-center gap-2"
                >
                  <Phone size={14} className="text-indigo-400 flex-shrink-0" />
                  +91 99999 99999
                </a>
              </li>
              <li>
                <div className="text-sm text-slate-400 flex items-start gap-2">
                  <MapPin size={14} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                  <span>Mumbai, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row 
                        items-center justify-between gap-4">
          
          {/* Copyright */}
          <p className="text-xs text-slate-500 flex items-center gap-1">
            © {new Date().getFullYear()} LavixTech. All rights reserved. Made with
            <Heart size={12} className="text-red-500" fill="currentColor" />
            in India
          </p>

          {/* Bottom Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-slate-500 hover:text-white 
                         transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-slate-500 hover:text-white 
                         transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              className="text-xs text-slate-500 hover:text-white 
                         transition-colors duration-300"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}