"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Auto-show tooltip after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  // ⚠️ Apna WhatsApp number yahan daalein (country code ke saath, without +)
  const whatsappNumber = "919999999999"; // Example: 91 (India) + 9999999999
  const defaultMessage = "Hi LavixTech! I'm interested in your services.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  const handleClick = () => {
    if (showPopup) {
      window.open(whatsappLink, "_blank");
      setShowPopup(false);
    } else {
      setShowPopup(true);
      setShowTooltip(false);
    }
  };

  return (
    <>
      {/* ============ POPUP CARD ============ */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="fixed bottom-24 right-6 z-[95] 
                       w-[calc(100vw-3rem)] sm:w-80 
                       rounded-2xl overflow-hidden 
                       bg-slate-900 border border-white/10 
                       shadow-2xl shadow-black/50"
          >
            {/* Header */}
            <div className="relative p-4 bg-[#25D366]">
              <div className="absolute top-0 right-0 w-32 h-32 
                              bg-white/10 rounded-full blur-2xl" />

              <div className="relative flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 
                                backdrop-blur-md flex items-center 
                                justify-center border border-white/30">
                  <FaWhatsapp size={22} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-white">
                    LavixTech Support
                  </p>
                  <p className="text-xs text-white/90">
                    Typically replies instantly
                  </p>
                </div>
                <button
                  onClick={() => setShowPopup(false)}
                  className="p-1 rounded-full hover:bg-white/20 
                             transition-colors text-white"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-5 bg-slate-950/50">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-full 
                                bg-gradient-to-br from-[#25D366] to-[#128C7E] 
                                flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp size={16} className="text-white" />
                </div>
                <div className="flex-1 p-3 rounded-2xl rounded-tl-sm 
                                bg-white/5 border border-white/10">
                  <p className="text-sm text-slate-200 leading-relaxed">
                    Hi! 👋 How can we help you today? Chat with us on
                    WhatsApp for quick responses.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-full 
                           bg-[#25D366] hover:bg-[#20BD5A] 
                           text-white font-semibold text-sm 
                           shadow-lg shadow-[#25D366]/30 
                           flex items-center justify-center gap-2 
                           transition-colors duration-300"
              >
                <FaWhatsapp size={18} />
                Start Chat on WhatsApp
              </motion.a>

              <p className="text-[10px] text-slate-500 text-center mt-3">
                🔒 We typically reply within minutes
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============ FLOATING BUTTON ============ */}
      <motion.button
        initial={false}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className="fixed bottom-6 right-24 z-[90] w-14 h-14 rounded-full 
                   bg-[#25D366] hover:bg-[#20BD5A] 
                   shadow-2xl shadow-[#25D366]/50 
                   flex items-center justify-center 
                   text-white transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />

        {/* Pulse Ring */}
        <span className="absolute inset-0 rounded-full 
                         bg-[#25D366]/40 animate-ping" />

        {/* Green Dot */}
        <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full 
                         bg-green-400 border-2 border-slate-950" />
      </motion.button>

      {/* ============ TOOLTIP ============ */}
      <AnimatePresence>
        {showTooltip && !showPopup && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 right-40 z-[90] 
                       px-4 py-2.5 rounded-full 
                       bg-slate-900 border border-white/10 
                       shadow-xl shadow-black/30 
                       hidden md:flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-white font-medium whitespace-nowrap">
              Chat with us! 👋
            </span>
            {/* Arrow */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 
                            translate-x-full w-0 h-0 
                            border-l-8 border-l-slate-900 
                            border-y-6 border-y-transparent" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}