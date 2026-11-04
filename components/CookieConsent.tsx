"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check karein ki user ne pehle accept kiya hai ya nahi
    const consent = localStorage.getItem("lavixtech-cookie-consent");
    if (!consent) {
      // Agar nahi kiya, toh 1.5 second baad banner dikhayein
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("lavixtech-cookie-consent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("lavixtech-cookie-consent", "declined");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto md:max-w-md z-[90]"
        >
          <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-slate-700 shadow-2xl p-5">
            
            {/* Header */}
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                <Cookie size={20} className="text-indigo-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-white mb-1">
                  We value your privacy
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. Read our{" "}
                  <Link href="/privacy" className="text-indigo-400 hover:text-indigo-300 underline">
                    Privacy Policy
                  </Link>.
                </p>
              </div>
              <button
                onClick={() => setShowBanner(false)}
                className="text-slate-500 hover:text-white transition-colors flex-shrink-0"
              >
                <X size={16} />
              </button>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2 mt-4">
              <button
                onClick={handleAccept}
                className="flex-1 px-4 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 
                           text-white font-semibold text-xs 
                           shadow-lg shadow-indigo-500/30 
                           hover:shadow-xl hover:-translate-y-0.5 
                           transition-all duration-300 flex items-center justify-center gap-1.5"
              >
                <CheckCircle2 size={14} />
                Accept All
              </button>
              <button
                onClick={handleDecline}
                className="px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 
                           text-slate-300 font-medium text-xs 
                           hover:bg-white/10 hover:text-white 
                           transition-colors duration-300"
              >
                Decline
              </button>
            </div>

            {/* Footer Note */}
            <p className="text-[10px] text-slate-500 mt-3 text-center">
              🔒 Your data is safe. We never sell your information.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}