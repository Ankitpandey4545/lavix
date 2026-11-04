"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Search,
  Home,
  Globe,
  Smartphone,
  Brain,
  BarChart3,
  DollarSign,
  Info,
  Mail,
  ArrowRight,
  Command,
  Calendar,
  X,
} from "lucide-react";

// ============ ROUTES LIST ============
const routes = [
  { name: "Home", href: "/", icon: Home, category: "Pages" },
  { name: "Services", href: "/services", icon: Globe, category: "Pages" },
  { name: "Web Development", href: "/services/web-development", icon: Globe, category: "Services" },
  { name: "Mobile Apps", href: "/services/mobile-app-development", icon: Smartphone, category: "Services" },
  { name: "AI & Automation", href: "/services/ai-automation", icon: Brain, category: "Services" },
  { name: "CRM & Software", href: "/services/crm-software", icon: BarChart3, category: "Services" },
  { name: "Pricing", href: "/pricing", icon: DollarSign, category: "Pages" },
  { name: "Portfolio", href: "/portfolio", icon: Info, category: "Pages" },
  { name: "About Us", href: "/about", icon: Info, category: "Pages" },
  { name: "Contact", href: "/contact", icon: Mail, category: "Pages" },
  { name: "Book a Call", href: "https://calendly.com/ankitpandey-ap8787/30min", icon: Calendar, category: "Actions", external: true },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  // Filter routes based on search query
  const filteredRoutes = query === ""
    ? routes
    : routes.filter((route) =>
        route.name.toLowerCase().includes(query.toLowerCase())
      );

  // Group by category
  const groupedRoutes = filteredRoutes.reduce((acc, route) => {
    if (!acc[route.category]) acc[route.category] = [];
    acc[route.category].push(route);
    return acc;
  }, {} as Record<string, typeof routes>);

  // Keyboard shortcut listener (Ctrl+K / Cmd+K and Escape)
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (href: string, external?: boolean) => {
    setIsOpen(false);
    setQuery("");
    if (external) {
      window.open(href, "_blank");
    } else {
      router.push(href);
    }
  };

  return (
    <>
      {/* ============ FLOATING BUTTON (For Mobile/Click Users) ============ */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-[80] hidden md:flex items-center gap-2 px-4 py-2.5 rounded-full 
                   bg-white/80 backdrop-blur-md border border-slate-200 shadow-lg 
                   text-slate-500 hover:text-slate-900 hover:shadow-xl 
                   transition-all duration-300 group"
      >
        <Search size={16} />
        <span className="text-xs font-medium">Search</span>
        <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-[10px] font-mono text-slate-500">
          <Command size={10} /> K
        </kbd>
      </button>

      {/* ============ COMMAND PALETTE MODAL ============ */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
              className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl 
                         border border-slate-200 overflow-hidden"
            >
              {/* Search Input Header */}
              <div className="flex items-center gap-3 px-4 py-4 border-b border-slate-100">
                <Search size={20} className="text-slate-400" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search pages, services, or actions..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none text-base"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded bg-slate-100 text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Results List */}
              <div className="max-h-[60vh] overflow-y-auto p-2">
                {Object.keys(groupedRoutes).length === 0 ? (
                  <div className="py-12 text-center text-slate-500">
                    <p className="text-sm">No results found for &quot;{query}&quot;</p>
                  </div>
                ) : (
                  Object.entries(groupedRoutes).map(([category, items]) => (
                    <div key={category} className="mb-2">
                      <p className="px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        {category}
                      </p>
                      {items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.name}
                            onClick={() => runCommand(item.href, item.external)}
                            className="w-full flex items-center justify-between px-3 py-3 rounded-xl 
                                       hover:bg-indigo-50 transition-colors group text-left"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-white 
                                              flex items-center justify-center transition-colors">
                                <Icon size={16} className="text-slate-500 group-hover:text-indigo-600" />
                              </div>
                              <span className="text-sm font-medium text-slate-700 group-hover:text-indigo-900">
                                {item.name}
                              </span>
                            </div>
                            <ArrowRight
                              size={16}
                              className="text-slate-300 opacity-0 group-hover:opacity-100 
                                         -translate-x-2 group-hover:translate-x-0 
                                         transition-all duration-300"
                            />
                          </button>
                        );
                      })}
                    </div>
                  ))
                )}
              </div>

              {/* Footer (Keyboard hints) */}
              <div className="px-4 py-2 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-[10px] text-slate-400">
                <div className="flex gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200">↑</kbd>
                    <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200">↓</kbd>
                    to navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200">↵</kbd>
                    to select
                  </span>
                </div>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200">esc</kbd>
                  to close
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}