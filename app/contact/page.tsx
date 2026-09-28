 "use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  User,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  Video,
  Calendar,
} from "lucide-react";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Load Calendly script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    }, 4000);
  };

  return (
    <main className="relative pt-32 pb-20 px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ============ HERO SECTION ============ */}
        <section className="text-center mb-16">
          
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
                       bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-xs text-slate-300 font-medium uppercase tracking-wider">
              Contact Us
            </span>
          </motion.div>

          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 
                       tracking-tight max-w-4xl mx-auto leading-tight"
          >
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Together</span>
          </motion.h1>

          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Have a project in mind? Fill out the form below or book a video
            call — we&apos;ll get back to you within 24 hours.
          </motion.p>
        </section>

        {/* ============ MAIN CONTENT ============ */}
        <div className="grid lg:grid-cols-5 gap-8 mb-20">
          
          {/* ============ LEFT - FORM ============ */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="p-8 md:p-10 rounded-3xl bg-slate-900/50 
                            backdrop-blur-sm border border-white/10">
              
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Send Us a Message
                </h2>
                <p className="text-sm text-slate-400">
                  We usually respond within a few hours.
                </p>
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl bg-green-500/10 
                             border border-green-500/30 flex items-center gap-3"
                >
                  <CheckCircle2 size={20} className="text-green-400" />
                  <p className="text-sm text-green-300">
                    Message sent successfully! We&apos;ll get back to you soon.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User
                        size={16}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                      />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full pl-11 pr-4 py-3 rounded-xl 
                                   bg-white/5 border border-white/10 
                                   text-white placeholder-slate-500 
                                   focus:outline-none focus:border-indigo-500/50 
                                   focus:bg-white/10 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail
                        size={16}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full pl-11 pr-4 py-3 rounded-xl 
                                   bg-white/5 border border-white/10 
                                   text-white placeholder-slate-500 
                                   focus:outline-none focus:border-indigo-500/50 
                                   focus:bg-white/10 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone
                        size={16}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 99999 99999"
                        className="w-full pl-11 pr-4 py-3 rounded-xl 
                                   bg-white/5 border border-white/10 
                                   text-white placeholder-slate-500 
                                   focus:outline-none focus:border-indigo-500/50 
                                   focus:bg-white/10 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl 
                                 bg-white/5 border border-white/10 
                                 text-white focus:outline-none 
                                 focus:border-indigo-500/50 
                                 focus:bg-white/10 transition-all duration-300"
                    >
                      <option value="" className="bg-slate-900">
                        Select a service
                      </option>
                      <option value="web" className="bg-slate-900">
                        Web Development
                      </option>
                      <option value="mobile" className="bg-slate-900">
                        Mobile App Development
                      </option>
                      <option value="ai" className="bg-slate-900">
                        AI & Automation
                      </option>
                      <option value="crm" className="bg-slate-900">
                        CRM & Business Software
                      </option>
                      <option value="other" className="bg-slate-900">
                        Other
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Your Message *
                  </label>
                  <div className="relative">
                    <MessageSquare
                      size={16}
                      className="absolute left-4 top-4 text-slate-500"
                    />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full pl-11 pr-4 py-3 rounded-xl 
                                 bg-white/5 border border-white/10 
                                 text-white placeholder-slate-500 
                                 focus:outline-none focus:border-indigo-500/50 
                                 focus:bg-white/10 transition-all duration-300 
                                 resize-none"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="w-full py-4 rounded-xl text-white font-bold 
                             bg-gradient-to-r from-indigo-600 to-purple-600 
                             shadow-lg shadow-indigo-500/30 
                             hover:shadow-xl hover:shadow-purple-500/50 
                             transition-all duration-300 
                             flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 
                               group-hover:-translate-y-1 
                               transition-transform duration-300"
                  />
                </motion.button>

                <p className="text-xs text-slate-500 text-center">
                  🔒 Your information is safe with us. We&apos;ll never share
                  your data.
                </p>
              </form>
            </div>
          </motion.div>

          {/* ============ RIGHT - INFO ============ */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            
            {/* Contact Info Card */}
            <div className="p-8 rounded-3xl bg-slate-900/50 
                            backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-5">
                <a
                  href="mailto:hello@lavixtech.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/10 
                                  flex items-center justify-center flex-shrink-0 
                                  group-hover:bg-indigo-500/20 transition-colors">
                    <Mail size={20} className="text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <p className="text-sm font-medium text-white 
                                  group-hover:text-indigo-400 transition-colors">
                      hello@lavixtech.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+919999999999"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-purple-500/10 
                                  flex items-center justify-center flex-shrink-0 
                                  group-hover:bg-purple-500/20 transition-colors">
                    <Phone size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                      Phone
                    </p>
                    <p className="text-sm font-medium text-white 
                                  group-hover:text-purple-400 transition-colors">
                      +91 99999 99999
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 
                                  flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                      Location
                    </p>
                    <p className="text-sm font-medium text-white">
                      Mumbai, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-yellow-500/10 
                                  flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                      Response Time
                    </p>
                    <p className="text-sm font-medium text-white">
                      Within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ============ VIDEO MEETING - CALENDLY ============ */}
            <div className="p-8 rounded-3xl bg-slate-900/50 
                            backdrop-blur-sm border border-white/10 
                            hover:border-emerald-500/30 transition-colors duration-300">

              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 
                                flex items-center justify-center">
                  <Video size={22} className="text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Book a Video Meeting
                  </h3>
                  <p className="text-xs text-slate-400">
                    30-min free consultation
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-400 mb-5 leading-relaxed">
                Schedule a video call with our team. We&apos;ll discuss your project 
                requirements, share ideas, and give you a free quote.
              </p>

              {/* Benefits */}
              <div className="space-y-2 mb-5">
                {[
                  "Google Meet link auto-generated",
                  "Choose your own time slot",
                  "Instant email confirmation",
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 
                                    flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={10} className="text-emerald-400" />
                    </div>
                    {benefit}
                  </div>
                ))}
              </div>

              {/* Calendly Button */}
              <a
                href="https://calendly.com/ankitpandey-ap8787/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 
                           rounded-full text-white font-semibold text-sm
                           bg-gradient-to-r from-emerald-600 to-teal-600
                           shadow-lg shadow-emerald-500/30 
                           hover:shadow-xl hover:shadow-emerald-500/50 
                           hover:-translate-y-0.5
                           transition-all duration-300 group"
              >
                <Calendar size={16} />
                Schedule a Meeting
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 
                             group-hover:-translate-y-0.5 
                             transition-transform duration-300"
                />
              </a>

              <p className="text-[10px] text-slate-500 text-center mt-3">
                🔒 Powered by Calendly — secure & spam-free
              </p>
            </div>

            {/* Social Links Card */}
            <div className="p-8 rounded-3xl bg-slate-900/50 
                            backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">
                Follow Us
              </h3>

              <div className="flex items-center gap-3">
                {[
                  { icon: FaLinkedin, href: "#", bg: "hover:bg-[#0A66C2]" },
                  { icon: FaTwitter, href: "#", bg: "hover:bg-[#1DA1F2]" },
                  { icon: FaGithub, href: "#", bg: "hover:bg-[#333]" },
                  { icon: FaInstagram, href: "#", bg: "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCB045]" },
                ].map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={i}
                      href={social.href}
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-11 h-11 rounded-xl bg-white/5 
                                 border border-white/10 
                                 ${social.bg}
                                 flex items-center justify-center 
                                 text-slate-400 hover:text-white 
                                 hover:border-transparent 
                                 transition-colors duration-300`}
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ============ MAP / LOCATION SECTION ============ */}
        <motion.section
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="rounded-3xl overflow-hidden border border-white/10 
                     bg-slate-900/50 backdrop-blur-sm p-8 md:p-12 
                     text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Visit Our <span className="gradient-text">Office</span>
          </h3>
          <p className="text-slate-400 mb-6">
            We&apos;d love to meet you in person. Drop by for a coffee ☕
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 
                          text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-indigo-400" />
              Mumbai, Maharashtra, India
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-purple-400" />
              Mon - Fri: 9 AM - 7 PM
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}