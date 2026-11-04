"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  X,
  Sparkles,
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";

export default function PopupLeadForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
  });

  // 1. Popup Dikhane Ka Logic (Session me ek baar)
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("lavixtech-lead-popup");
    
    if (!hasSeenPopup) {
      // 3 second baad popup dikhayein
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("lavixtech-lead-popup", "true");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS credentials missing.");
      }

      // EmailJS ko data bhejein
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: "Popup Lead", // Template me service variable use hua ho toh
          message: formData.requirement,
          reply_to: formData.email,
        },
        publicKey
      );

      setStatus("success");
      
      // 3 second baad popup band kar dein
      setTimeout(() => {
        setIsOpen(false);
        setStatus("idle");
        setFormData({ name: "", email: "", phone: "", requirement: "" });
      }, 3000);

    } catch (error: any) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error?.text || "Something went wrong. Please try again.");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Form Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/50 hover:bg-slate-100 text-slate-500 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Header (Gradient) */}
            <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 px-8 py-8 text-center overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto mb-4 border border-white/30">
                  <Sparkles size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Get a Free Consultation</h2>
                <p className="text-sm text-indigo-100">
                  Fill out this quick form and our experts will reach out to you within 24 hours.
                </p>
              </div>
            </div>

            {/* Form Body */}
            <div className="p-8">
              
              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <CheckCircle2 size={64} className="text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You! 🎉</h3>
                  <p className="text-slate-600">
                    Your details have been sent. We will contact you shortly!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name */}
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Phone Number (with country code)"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Requirement */}
                  <div className="relative">
                    <MessageSquare size={18} className="absolute left-4 top-4 text-slate-400" />
                    <textarea
                      name="requirement"
                      required
                      rows={3}
                      placeholder="Tell us about your project..."
                      value={formData.requirement}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Error Message */}
                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-500 text-xs bg-red-50 p-2 rounded-lg">
                      <AlertCircle size={14} />
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2 transition-all disabled:opacity-70 mt-2"
                  >
                    {status === "sending" ? (
                      <><Loader2 size={18} className="animate-spin" /> Sending...</>
                    ) : (
                      <>Submit Details <Send size={16} /></>
                    )}
                  </button>
                  
                  <p className="text-[10px] text-center text-slate-400 mt-3 flex items-center justify-center gap-1">
                    🔒 Your information is 100% safe and secure.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}