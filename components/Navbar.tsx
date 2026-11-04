 "use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Search, Command, Sparkles } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ============ FLOATING ISLAND NAVBAR ============ */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50">
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full px-3 py-2 flex items-center justify-between transition-all duration-300">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group pl-2">
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image
                src="/logo20.png"
                alt="LavixTech Logo"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="text-lg font-bold text-slate-900 hidden sm:block transition-colors duration-300 group-hover:text-indigo-600">
              Lavix<span className="gradient-text">Tech</span>
            </span>
          </Link>

          {/* Desktop Links (Pill Hover Effect) */}
          <ul className="hidden md:flex items-center gap-1 bg-slate-50/50 p-1 rounded-full border border-slate-100">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-600 
                             hover:text-slate-900 hover:bg-white hover:shadow-sm 
                             transition-all duration-300 inline-block"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side: Free Audit + Search + CTA + Hamburger */}
          <div className="flex items-center gap-2 pr-1">
            
            {/* 👇 Free Audit Button (NEW) */}
            <Link
              href="/free-audit"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full 
                         bg-indigo-50 border border-indigo-100 
                         text-indigo-700 hover:bg-indigo-100 
                         transition-colors text-xs font-semibold"
            >
              <Sparkles size={14} className="text-indigo-500" />
              Free Audit
            </Link>

            {/* Command K Search Hint */}
            <button className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors text-xs font-medium">
              <Search size={14} />
              <span className="text-slate-400">Search</span>
              <kbd className="flex items-center gap-0.5 bg-white px-1.5 py-0.5 rounded text-[10px] border border-slate-200 font-mono">
                <Command size={10} /> K
              </kbd>
            </button>

            {/* Contact Us Button */}
            <Link
              href="/contact"
              className="relative px-4 py-2 rounded-full text-xs md:text-sm font-semibold text-white 
                         overflow-hidden group bg-slate-900 hover:bg-slate-800 
                         shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span className="relative z-10">Contact Us</span>
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* ============ MOBILE MENU ============ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="fixed inset-0 z-[100] bg-white md:hidden overflow-y-auto"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8">
                  <Image
                    src="/logo20.png"
                    alt="LavixTech Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-bold text-slate-900">
                  Lavix<span className="gradient-text">Tech</span>
                </span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <div className="p-6 space-y-2">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 px-4 rounded-2xl text-lg font-medium text-slate-800 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* 👇 Free Audit Mobile Link (NEW) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
              >
                <Link
                  href="/free-audit"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 py-4 px-4 rounded-2xl text-lg font-medium 
                             text-indigo-600 bg-indigo-50/50 hover:bg-indigo-50 transition-colors"
                >
                  <Sparkles size={20} />
                  Free Website Audit
                </Link>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="pt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block py-4 text-center rounded-full text-white font-semibold bg-slate-900 shadow-lg"
                >
                  Contact Us
                </Link>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="mt-8 pt-6 border-t border-slate-100 space-y-3"
              >
                <a href="mailto:lavixtech@gmail.com" className="block text-sm text-slate-500 hover:text-slate-900">
                  📧 lavixtech@gmail.com
                </a>
                <a href="tel:+918787054829" className="block text-sm text-slate-500 hover:text-slate-900">
                  📞 +91 8787054829
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}