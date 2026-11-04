 "use client";

import { motion } from "framer-motion";
import Image from "next/image"; // 👈 Yeh import add kiya gaya hai
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Code2,
  Globe,
  Shield,
  Server,
  Database,
  Layout,
  Smartphone,
  Search,
  ShoppingCart,
  Palette,
  Rocket,
  Clock,
  ChevronRight,
  DollarSign,
  Calendar,
  MessageCircle,
  FileCode,
  Layers,
  Gauge,
  X,
} from "lucide-react";

// ============ DATA ============
const techStack = {
  Frontend: [
    { name: "React / Next.js", desc: "Fast, SEO-friendly web apps", icon: Code2 },
    { name: "Tailwind CSS", desc: "Beautiful responsive designs", icon: Palette },
    { name: "TypeScript", desc: "Error-free, scalable code", icon: FileCode },
  ],
  Backend: [
    { name: "Node.js / Express", desc: "Powerful server-side logic", icon: Server },
    { name: "Python / Django", desc: "Complex web applications", icon: Layers },
    { name: "PHP / Laravel", desc: "Classic & reliable", icon: Server },
  ],
  Database: [
    { name: "MongoDB", desc: "Flexible NoSQL database", icon: Database },
    { name: "PostgreSQL", desc: "Enterprise-grade DB", icon: Database },
    { name: "MySQL", desc: "Trusted by millions", icon: Database },
  ],
  Hosting: [
    { name: "Vercel / Netlify", desc: "Lightning-fast hosting", icon: Server },
    { name: "AWS / Google Cloud", desc: "Enterprise infrastructure", icon: Server },
    { name: "Cloudflare", desc: "Global CDN + Security", icon: Shield },
  ],
};

const websiteTypes = [
  {
    icon: Layout,
    title: "Business Website",
    desc: "5-10 page professional website for your company. Perfect for lead generation.",
    price: "From $499",
    timeline: "2-3 weeks",
    color: "from-blue-500 to-cyan-500",
    features: ["Home, About, Services", "Contact form", "SEO optimized", "Mobile responsive"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Store",
    desc: "Sell products online with payment gateway, inventory & order management.",
    price: "From $1,299",
    timeline: "4-6 weeks",
    color: "from-purple-500 to-pink-500",
    features: ["Unlimited products", "Stripe/PayPal", "Cart & checkout", "Order dashboard"],
  },
  {
    icon: Smartphone,
    title: "Web Application",
    desc: "Custom SaaS, dashboards, marketplaces — full-stack web apps built to scale.",
    price: "From $2,999",
    timeline: "6-12 weeks",
    color: "from-emerald-500 to-teal-500",
    features: ["User auth", "Admin panel", "Real-time data", "API integrations"],
  },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "We understand your business, goals, and requirements.", icon: MessageCircle, duration: "1-2 days" },
  { step: "02", title: "Design", desc: "We create wireframes and UI designs for your approval.", icon: Palette, duration: "3-5 days" },
  { step: "03", title: "Development", desc: "Our developers build your site with weekly updates.", icon: Code2, duration: "2-8 weeks" },
  { step: "04", title: "Testing", desc: "Cross-browser, mobile testing, speed & security checks.", icon: Shield, duration: "2-3 days" },
  { step: "05", title: "Launch", desc: "We deploy to your domain, set up analytics, handover.", icon: Rocket, duration: "1 day" },
  { step: "06", title: "Support", desc: "Post-launch support included — bug fixes and updates.", icon: Clock, duration: "Ongoing" },
];

const faqs = [
  { q: "Do you build with WordPress or custom code?", a: "Both! We build WordPress sites for small businesses that need quick updates, and custom-coded sites (React/Next.js) for businesses that need speed, scalability, and unique features." },
  { q: "How do I get a domain name?", a: "We help you register a domain on Namecheap, GoDaddy, or Cloudflare — typically $10-15/year. The domain is 100% owned by you." },
  { q: "Where will my website be hosted?", a: "We host on Vercel, Netlify, AWS, or Google Cloud based on your needs. Hosting typically costs $0-50/month. SSL, CDN, backups included." },
  { q: "Will my website be fast and SEO-friendly?", a: "Absolutely. Our websites score 90+ on Google PageSpeed and follow technical SEO best practices — meta tags, sitemap, fast loading, mobile-first design." },
  { q: "Can I update content myself?", a: "Yes! We build websites with easy-to-use CMS (WordPress, Sanity, or custom admin panels) so you can update text, images, and blogs easily." },
  { q: "Do you provide maintenance after launch?", a: "Yes — every project includes 30 days free support. After that, we offer monthly maintenance plans starting at $99/month." },
];

export default function WebDevelopmentPage() {
  return (
    <main className="relative pt-32 pb-20 overflow-hidden bg-white">
      
      {/* Background Glow */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ============ BREADCRUMB ============ */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm mb-8"
        >
          <Link href="/" className="text-slate-500 hover:text-slate-900 transition-colors">Home</Link>
          <ChevronRight size={14} className="text-slate-400" />
          <Link href="/services" className="text-slate-500 hover:text-slate-900 transition-colors">Services</Link>
          <ChevronRight size={14} className="text-slate-400" />
          <span className="text-slate-900 font-medium">Web Development</span>
        </motion.div>

        {/* ============ HERO ============ */}
        <section className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 mb-6"
            >
              <Globe size={14} className="text-blue-600" />
              <span className="text-xs text-blue-700 font-semibold uppercase tracking-wider">
                Web Development Service
              </span>
            </motion.div>

            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight"
            >
              Custom Websites That{" "}
              <span className="gradient-text">Convert & Scale</span>
            </motion.h1>

            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              className="text-slate-600 text-lg mb-8 leading-relaxed max-w-xl"
            >
              From simple business websites to complex web apps — we build 
              high-performance, SEO-optimized, mobile-friendly websites that help 
              you get more customers. <strong className="text-slate-900">WordPress or custom code</strong> — 
              your choice, our expertise.
            </motion.p>

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/30 hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
                >
                  Get Free Quote
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <a
                href="https://calendly.com/ankitpandey-ap8787/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full text-slate-900 font-semibold border-2 border-slate-200 hover:border-indigo-500/50 hover:bg-slate-50 transition-all duration-300 flex items-center gap-2"
              >
                <Calendar size={18} />
                Book a Call
              </a>
            </motion.div>

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200"
            >
              {[
                { value: "50+", label: "Websites Built" },
                { value: "90+", label: "PageSpeed Score" },
                { value: "100%", label: "Client Ownership" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs text-slate-500 font-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ============ RIGHT SIDE - REAL IMAGE WITH FLOATING CARDS ============ */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-[100px] rounded-full" />

            {/* Main Image Container */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full h-[500px] rounded-3xl overflow-hidden 
                         border border-slate-200 shadow-2xl shadow-indigo-500/20 group"
            >
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" // Coding/Tech Image
                alt="Web Development"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Dark Gradient Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />
            </motion.div>

            {/* Floating Card 1 - PageSpeed (Top Right) */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -top-5 -right-5 z-30 
                         bg-white/95 backdrop-blur-xl 
                         border border-slate-200 rounded-2xl 
                         px-4 py-3 shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <Gauge size={20} className="text-emerald-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Google PageSpeed</p>
                <p className="text-sm font-bold text-slate-900">98 / 100</p>
              </div>
            </motion.div>

            {/* Floating Card 2 - SEO (Bottom Left) */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 z-30 
                         bg-white/95 backdrop-blur-xl 
                         border border-slate-200 rounded-2xl 
                         px-4 py-3 shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Search size={20} className="text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Technical SEO</p>
                <p className="text-sm font-bold text-slate-900">100% Ready</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ============ WEBSITE TYPES ============ */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              What Type of <span className="gradient-text">Website</span> Do You Need?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {websiteTypes.map((type, idx) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={idx}
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  className="group relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-5`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{type.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{type.desc}</p>
                  <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-100">
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-semibold">Starting</p>
                      <p className="text-lg font-bold gradient-text">{type.price}</p>
                    </div>
                    <div className="w-px h-8 bg-slate-200" />
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-semibold">Timeline</p>
                      <p className="text-sm font-bold text-slate-900">{type.timeline}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-5">
                    {type.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check size={12} className="text-emerald-500" /> {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ============ TECH STACK ============ */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Our <span className="gradient-text">Tech Stack</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(techStack).map(([category, items], catIdx) => (
              <motion.div
                key={catIdx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200"
              >
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <div className="space-y-3">
                  {items.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex items-start gap-3 p-2 rounded-lg">
                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0">
                          <Icon size={14} className="text-indigo-500" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900">{item.name}</p>
                          <p className="text-[10px] text-slate-500">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ============ WORDPRESS VS CUSTOM ============ */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              WordPress vs <span className="gradient-text">Custom Code</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-white border-2 border-blue-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Globe size={20} className="text-blue-600"/> WordPress
              </h3>
              <ul className="space-y-2 mb-6">
                {["Blogs & content sites", "Small business websites", "Quick launch", "Budget-friendly"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                    <Check size={14} className="text-emerald-500" /> {f}
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {["Slower performance", "Security risks", "Limited customization"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                    <X size={14} className="text-red-400" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 relative">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Code2 size={20} className="text-indigo-600"/> Custom Code
              </h3>
              <ul className="space-y-2 mb-6">
                {["High-traffic websites", "E-commerce at scale", "Lightning-fast speed", "Full ownership"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                    <Check size={14} className="text-emerald-500" /> {f}
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {["Starts at $2,999", "Long-term value", "Scalable for years"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                    <DollarSign size={14} className="text-indigo-500" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ============ PROCESS ============ */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              How We <span className="gradient-text">Work</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative p-6 rounded-2xl bg-white border border-slate-200">
                  <div className="absolute top-4 right-4 text-4xl font-bold text-slate-100">{step.step}</div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
                      <Icon size={24} className="text-indigo-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600 mb-3">{step.desc}</p>
                    <div className="flex items-center gap-1 text-xs text-indigo-600 font-semibold">
                      <Clock size={12} /> {step.duration}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ============ HOSTING & DOMAIN ============ */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Domain & <span className="gradient-text">Hosting</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-white border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Domain Name</h3>
              <ul className="space-y-3">
                {[
                  { label: "Providers", value: "Namecheap, GoDaddy" },
                  { label: "Cost", value: "$10 - $15 / year" },
                  { label: "Ownership", value: "100% Yours" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start justify-between gap-4 pb-3 border-b border-slate-100 last:border-0">
                    <span className="text-xs text-slate-500 font-semibold uppercase">{item.label}</span>
                    <span className="text-sm text-slate-900 font-medium">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Hosting</h3>
              <ul className="space-y-3">
                {[
                  { label: "Provider", value: "Vercel / AWS" },
                  { label: "Cost", value: "$0 - $50 / month" },
                  { label: "SSL", value: "Free (HTTPS)" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start justify-between gap-4 pb-3 border-b border-slate-100 last:border-0">
                    <span className="text-xs text-slate-500 font-semibold uppercase">{item.label}</span>
                    <span className="text-sm text-slate-900 font-medium">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group p-5 rounded-xl bg-white border border-slate-200">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-sm font-bold text-slate-900 pr-4">{faq.q}</span>
                  <ChevronRight size={16} className="text-slate-400 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-sm text-slate-600 mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
        
        {/* ============ FINAL CTA ============ */}
        <section className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
            <Link href="/contact" className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-full font-bold">
                Get a Free Quote
            </Link>
        </section>

      </div>
    </main>
  );
}