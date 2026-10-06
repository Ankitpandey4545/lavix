"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  Brain,
  BarChart3,
  Check,
  ArrowRight,
  Clock,
  DollarSign,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Award,
  MessageCircle,
} from "lucide-react";

// ============ ROTATING WORD COMPONENT ============
function RotatingWord() {
  const words = [
    "Fair Pricing.",
    "Real Results.",
    "Zero Surprises.",
    "Global Standards.",
    "Fast Delivery.",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        className="gradient-text inline-block"
      >
        {words[index]}
      </motion.span>
    </span>
  );
}

// ============ WEB DEVELOPMENT ============
const webPlans = [
  {
    name: "Business Website",
    price: "$499",
    timeline: "2-3 weeks",
    idealFor: "Small businesses, consultants, local services",
    workType: "Static marketing website with modern design",
    benefits: [
      "Get found on Google (SEO optimized)",
      "Build trust with professional design",
      "Capture leads 24/7 with contact forms",
      "Mobile-friendly on all devices",
    ],
    deliverables: [
      "5-7 custom pages",
      "Mobile responsive design",
      "Basic SEO setup",
      "Contact form with email",
      "Google Analytics",
      "1 month free support",
    ],
  },
  {
    name: "E-Commerce Store",
    price: "$1,299",
    timeline: "4-6 weeks",
    idealFor: "Retailers, product sellers, D2C brands",
    workType: "Online store with payment gateway",
    benefits: [
      "Sell 24/7 without physical store",
      "Accept payments online (Stripe, PayPal)",
      "Automated inventory management",
      "Reach global customers",
    ],
    deliverables: [
      "Unlimited products",
      "Payment gateway integration",
      "Shopping cart + checkout",
      "Order management dashboard",
      "Email notifications",
      "3 months free support",
    ],
  },
  {
    name: "Custom Web Application",
    price: "$2,999+",
    timeline: "6-12 weeks",
    idealFor: "SaaS startups, enterprises, marketplaces",
    workType: "Full-stack custom web app with database",
    benefits: [
      "Automate complex business processes",
      "User accounts + authentication",
      "Real-time data & analytics",
      "Scalable to millions of users",
    ],
    deliverables: [
      "Custom features as needed",
      "User authentication system",
      "Admin dashboard",
      "Database + API",
      "Cloud deployment",
      "6 months free support",
    ],
  },
];

// ============ MOBILE APP DEVELOPMENT ============
const mobilePlans = [
  {
    name: "Simple App",
    price: "$999",
    timeline: "3-4 weeks",
    idealFor: "MVPs, single-feature apps, prototypes",
    workType: "Cross-platform app (Android + iOS)",
    benefits: [
      "Reach both Android & iOS users",
      "Test your idea quickly",
      "Lower development cost",
      "Fast launch to market",
    ],
    deliverables: [
      "1-3 core screens",
      "Basic authentication",
      "Push notifications",
      "App Store submission",
      "1 month free support",
    ],
  },
  {
    name: "Business App",
    price: "$2,499",
    timeline: "6-10 weeks",
    idealFor: "Service businesses, booking apps, delivery",
    workType: "Full-featured mobile app with backend",
    benefits: [
      "Direct connection with customers",
      "In-app payments & bookings",
      "Real-time notifications",
      "Customer loyalty & retention",
    ],
    deliverables: [
      "10-15 screens",
      "User profiles + dashboard",
      "Payment integration",
      "Real-time chat/support",
      "Admin panel",
      "3 months free support",
    ],
  },
  {
    name: "Enterprise App",
    price: "$5,999+",
    timeline: "10-16 weeks",
    idealFor: "Large businesses, marketplaces, on-demand",
    workType: "Native iOS + Android + Admin panel",
    benefits: [
      "Maximum performance & speed",
      "Complex features (maps, video, AI)",
      "Handle thousands of users",
      "Custom integrations",
    ],
    deliverables: [
      "Native iOS + Android",
      "Custom features",
      "Web admin dashboard",
      "Analytics & reporting",
      "Cloud infrastructure",
      "6 months free support",
    ],
  },
];

// ============ AI & AUTOMATION ============
const aiPlans = [
  {
    name: "AI Chatbot",
    price: "$799",
    timeline: "2-3 weeks",
    idealFor: "Customer support, sales, FAQs",
    workType: "GPT-powered chatbot for website/app",
    benefits: [
      "24/7 customer support without hiring",
      "Save 40+ hours/week on queries",
      "Handle multiple customers at once",
      "Never miss a sales opportunity",
    ],
    deliverables: [
      "Custom trained chatbot",
      "Website integration",
      "Knowledge base setup",
      "Multi-language support",
      "Analytics dashboard",
      "1 month free support",
    ],
  },
  {
    name: "Process Automation",
    price: "$1,499",
    timeline: "3-5 weeks",
    idealFor: "Repetitive tasks, data entry, reports",
    workType: "Automate manual workflows with AI",
    benefits: [
      "Eliminate repetitive manual work",
      "Reduce human errors to zero",
      "Free up team for important tasks",
      "Save 60%+ operational costs",
    ],
    deliverables: [
      "Custom automation workflows",
      "Integration with your tools",
      "Scheduled tasks",
      "Error handling",
      "Reports & logs",
      "3 months free support",
    ],
  },
  {
    name: "Custom AI Solution",
    price: "$3,999+",
    timeline: "6-12 weeks",
    idealFor: "Advanced use cases, ML models, predictions",
    workType: "Custom AI/ML model for your business",
    benefits: [
      "Predict customer behavior",
      "Personalized recommendations",
      "Fraud detection & security",
      "Data-driven decision making",
    ],
    deliverables: [
      "Custom ML model",
      "Training on your data",
      "API for integration",
      "Dashboard & monitoring",
      "Documentation",
      "6 months free support",
    ],
  },
];

// ============ CRM & BUSINESS SOFTWARE ============
const crmPlans = [
  {
    name: "Simple CRM",
    price: "$999",
    timeline: "3-4 weeks",
    idealFor: "Small sales teams, freelancers",
    workType: "Basic CRM with lead & contact management",
    benefits: [
      "Never lose a lead again",
      "Track every customer interaction",
      "Follow-up reminders",
      "Centralized customer data",
    ],
    deliverables: [
      "Lead management",
      "Contact database",
      "Task reminders",
      "Basic reports",
      "1 month free support",
    ],
  },
  {
    name: "Business CRM",
    price: "$2,499",
    timeline: "6-8 weeks",
    idealFor: "Growing sales teams, agencies",
    workType: "Full CRM with sales pipeline & automation",
    benefits: [
      "Increase sales by 30%+ with pipeline",
      "Automate follow-ups & emails",
      "Track team performance",
      "Detailed sales analytics",
    ],
    deliverables: [
      "Sales pipeline",
      "Email automation",
      "Team management",
      "Custom reports",
      "Mobile app access",
      "3 months free support",
    ],
  },
  {
    name: "Custom Business Software",
    price: "$4,999+",
    timeline: "8-16 weeks",
    idealFor: "Enterprises, custom workflows",
    workType: "Custom software for your specific needs",
    benefits: [
      "Perfect fit for your processes",
      "Automate entire operations",
      "Scale without limits",
      "Full ownership of code",
    ],
    deliverables: [
      "Custom modules",
      "Multi-user access",
      "Role-based permissions",
      "API integrations",
      "Cloud hosting",
      "6 months free support",
    ],
  },
];

// ============ COMMON BENEFITS ============
const commonBenefits = [
  {
    icon: Clock,
    title: "Fast Delivery",
    desc: "We deliver on time, every time. No excuses.",
  },
  {
    icon: Shield,
    title: "100% Code Ownership",
    desc: "You own all the code. No vendor lock-in.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    desc: "Direct access to developers, no middlemen.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    desc: "Fixed price. No hidden charges.",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    desc: "Free bug fixes for the entire support period.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    desc: "Built to grow with your business.",
  },
];

// ============ SERVICE SECTION COMPONENT ============
function ServiceSection({
  icon: Icon,
  title,
  subtitle,
  description,
  color,
  bgColor,
  iconColor,
  borderColor,
  plans,
  id,
}: {
  icon: any;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  bgColor: string;
  iconColor: string;
  borderColor: string;
  plans: any[];
  id: string;
}) {
  return (
    <section id={id} className="mb-24 scroll-mt-32">
      {/* Section Header */}
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <div
            className={`w-14 h-14 rounded-2xl ${bgColor} 
                        flex items-center justify-center`}
          >
            <Icon size={28} className={iconColor} />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {title}
            </h2>
            <p className={`text-sm font-medium ${iconColor}`}>{subtitle}</p>
          </div>
        </div>
        <p className="text-slate-400 text-lg max-w-3xl">{description}</p>
      </div>

      {/* Plans Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * idx }}
            whileHover={{ y: -6 }}
            className={`group relative p-7 rounded-3xl 
                       bg-slate-900/50 backdrop-blur-sm 
                       border border-white/10 ${borderColor} 
                       hover:shadow-2xl transition-all duration-500`}
          >
            {/* Gradient Glow */}
            <div
              className={`absolute -top-20 -right-20 w-64 h-64 
                          ${bgColor} rounded-full blur-[80px] 
                          opacity-0 group-hover:opacity-100 
                          transition-opacity duration-700`}
            />

            <div className="relative z-10">
              {/* Plan Name */}
              <h3 className="text-xl font-bold text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-xs text-slate-500 mb-5">{plan.idealFor}</p>

              {/* Price + Timeline */}
              <div className="mb-5 pb-5 border-b border-white/10">
                <div className="flex items-baseline gap-2 mb-2">
                  <p
                    className={`text-4xl font-bold bg-gradient-to-r 
                                ${color} bg-clip-text text-transparent`}
                  >
                    {plan.price}
                  </p>
                  <span className="text-xs text-slate-500">USD</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock size={12} />
                  Delivery: {plan.timeline}
                </div>
              </div>

              {/* Work Type */}
              <div className="mb-5">
                <p className="text-xs uppercase text-slate-500 tracking-wider mb-2">
                  What We&apos;ll Build
                </p>
                <p className="text-sm text-slate-300">{plan.workType}</p>
              </div>

              {/* Business Benefits */}
              <div className="mb-5">
                <p className="text-xs uppercase text-slate-500 tracking-wider mb-3">
                  Business Benefits
                </p>
                <ul className="space-y-2">
                  {plan.benefits.map((benefit: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <div
                        className={`w-4 h-4 rounded-full ${bgColor} 
                                    flex items-center justify-center 
                                    flex-shrink-0 mt-0.5`}
                      >
                        <TrendingUp size={10} className={iconColor} />
                      </div>
                      <span className="text-xs text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div className="mb-6">
                <p className="text-xs uppercase text-slate-500 tracking-wider mb-3">
                  What&apos;s Included
                </p>
                <ul className="space-y-2">
                  {plan.deliverables.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <div
                        className={`w-4 h-4 rounded-full ${bgColor} 
                                    flex items-center justify-center 
                                    flex-shrink-0 mt-0.5`}
                      >
                        <Check size={10} className={iconColor} />
                      </div>
                      <span className="text-xs text-slate-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className={`flex items-center justify-center gap-2 w-full 
                           py-3 rounded-full font-semibold text-sm 
                           bg-gradient-to-r ${color} 
                           text-white shadow-lg 
                           hover:shadow-xl hover:-translate-y-0.5 
                           transition-all duration-300 group/btn`}
              >
                Get Started
                <ArrowRight
                  size={14}
                  className="group-hover/btn:translate-x-1 
                             transition-transform duration-300"
                />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ============ MAIN PAGE ============
export default function PricingPage() {
  return (
    <main className="relative pt-32 pb-20 px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ============ HERO (Unique Version) ============ */}
        <section className="relative text-center mb-20 pt-4">
          
          {/* Animated Gradient Orbs */}
          <div className="absolute top-0 left-1/4 w-72 h-72 
                          bg-indigo-600/20 rounded-full blur-[100px] 
                          animate-pulse pointer-events-none" />
          <div className="absolute top-20 right-1/4 w-72 h-72 
                          bg-purple-600/20 rounded-full blur-[100px] 
                          animate-pulse pointer-events-none"
                          style={{ animationDelay: "1s" }} />

          <div className="relative z-10">
            
            {/* Top Badge - Live Indicator */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full 
                         bg-gradient-to-r from-emerald-500/10 to-teal-500/10 
                         border border-emerald-500/30 mb-8 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full 
                                 rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 
                                 bg-emerald-500" />
              </span>
              <span className="text-xs text-emerald-300 font-semibold uppercase tracking-wider">
                Trusted by clients in 8+ countries
              </span>
              <span className="text-[10px] text-emerald-400 font-bold 
                               px-2 py-0.5 rounded-full bg-emerald-500/20">
                NEW
              </span>
            </motion.div>

            {/* Main Heading with Rotating Word */}
            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white 
                         mb-6 tracking-tight max-w-5xl mx-auto leading-[1.05]"
            >
              World-Class Quality.
              <br />
              <span className="relative inline-block">
                <RotatingWord />
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 400 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8C100 3 300 3 398 8"
                    stroke="url(#pricingGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="pricingGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto 
                         leading-relaxed mb-10"
            >
              Transparent <span className="text-white font-semibold">USD pricing</span> for
              global clients. Fixed rates, clear deliverables, and{" "}
              <span className="text-white font-semibold">no hidden fees</span> — ever.
            </motion.p>

            {/* Dual CTA Buttons */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-10"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative px-7 py-3.5 rounded-full text-white font-semibold 
                             overflow-hidden group
                             bg-gradient-to-r from-indigo-600 to-purple-600
                             shadow-lg shadow-indigo-500/30 
                             hover:shadow-xl hover:shadow-purple-500/50 
                             transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get a Free Quote
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 
                                 group-hover:translate-x-1"
                    />
                  </span>
                  <span className="absolute inset-0 -translate-x-full 
                                   group-hover:translate-x-full 
                                   transition-transform duration-1000 
                                   bg-gradient-to-r from-transparent 
                                   via-white/30 to-transparent" />
                </motion.button>
              </Link>

              <a
                href="https://calendly.com/ankitpandey-ap8787/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full 
                             text-white font-medium 
                             border border-white/15 
                             hover:bg-white/5 hover:border-white/30 
                             transition-all duration-300"
                >
                  <MessageCircle size={16} />
                  Book a Free Call
                </motion.button>
              </a>
            </motion.div>

            {/* Trust Badges Row */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 
                         max-w-3xl mx-auto pt-8 border-t border-white/10"
            >
              {[
                { icon: DollarSign, text: "USD Payments", color: "text-emerald-400" },
                { icon: Shield, text: "100% Code Ownership", color: "text-blue-400" },
                { icon: Clock, text: "On-Time Delivery", color: "text-purple-400" },
                { icon: Users, text: "Direct Developer Access", color: "text-orange-400" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-2">
                    <Icon size={16} className={item.color} />
                    <span className="text-xs text-slate-400 font-medium">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ============ QUICK NAV ============ */}
        <motion.section
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-20"
        >
          {[
            { name: "Web Development", href: "#web", icon: Globe },
            { name: "Mobile Apps", href: "#mobile", icon: Smartphone },
            { name: "AI & Automation", href: "#ai", icon: Brain },
            { name: "CRM & Software", href: "#crm", icon: BarChart3 },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <a
                key={i}
                href={item.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full 
                           bg-white/5 border border-white/10 
                           text-sm text-slate-300 hover:text-white 
                           hover:bg-white/10 hover:border-indigo-500/50 
                           transition-all duration-300"
              >
                <Icon size={16} />
                {item.name}
              </a>
            );
          })}
        </motion.section>

        {/* ============ WEB DEVELOPMENT ============ */}
        <ServiceSection
          id="web"
          icon={Globe}
          title="Web Development"
          subtitle="Modern, Fast & Scalable Websites"
          description="We build websites that don't just look good — they convert visitors into customers, rank on Google, and grow your business 24/7."
          color="from-blue-500 to-cyan-500"
          bgColor="bg-blue-500/10"
          iconColor="text-blue-400"
          borderColor="hover:border-blue-500/50"
          plans={webPlans}
        />

        {/* ============ MOBILE APP DEVELOPMENT ============ */}
        <ServiceSection
          id="mobile"
          icon={Smartphone}
          title="Mobile App Development"
          subtitle="Native & Cross-Platform Apps"
          description="Mobile apps that your customers will love. We build apps for Android and iOS that are fast, beautiful, and packed with features your users need."
          color="from-purple-500 to-pink-500"
          bgColor="bg-purple-500/10"
          iconColor="text-purple-400"
          borderColor="hover:border-purple-500/50"
          plans={mobilePlans}
        />

        {/* ============ AI & AUTOMATION ============ */}
        <ServiceSection
          id="ai"
          icon={Brain}
          title="AI & Automation"
          subtitle="Smart Solutions That Save Time"
          description="Leverage AI to automate repetitive tasks, provide 24/7 customer support, and make data-driven decisions. Save time, reduce costs, scale faster."
          color="from-emerald-500 to-teal-500"
          bgColor="bg-emerald-500/10"
          iconColor="text-emerald-400"
          borderColor="hover:border-emerald-500/50"
          plans={aiPlans}
        />

        {/* ============ CRM & BUSINESS SOFTWARE ============ */}
        <ServiceSection
          id="crm"
          icon={BarChart3}
          title="CRM & Business Software"
          subtitle="Manage Everything in One Place"
          description="Custom CRM and business software that streamlines your operations. Track leads, automate follow-ups, and manage your entire business from one dashboard."
          color="from-orange-500 to-amber-500"
          bgColor="bg-orange-500/10"
          iconColor="text-orange-400"
          borderColor="hover:border-orange-500/50"
          plans={crmPlans}
        />

        {/* ============ COMMON BENEFITS ============ */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Every Plan <span className="gradient-text">Includes</span>
            </h2>
            <p className="text-slate-400">
              Standard benefits across all our services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonBenefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * idx }}
                  className="p-6 rounded-2xl bg-slate-900/50 
                             backdrop-blur-sm border border-white/10 
                             hover:border-indigo-500/30 
                             transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 
                                  flex items-center justify-center mb-4">
                    <Icon size={24} className="text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-400">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

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
              Not Sure Which Plan{" "}
              <span className="gradient-text">Fits You?</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project. We&apos;ll recommend the perfect
              solution for your business and budget.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full 
                           text-slate-900 font-bold bg-white hover:bg-slate-100 
                           shadow-lg hover:shadow-xl hover:-translate-y-1 
                           transition-all duration-300 group"
              >
                Get a Free Quote
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 
                             transition-transform duration-300"
                />
              </Link>
              <a
                href="https://calendly.com/ankitpandey-ap8787/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full 
                           text-white font-semibold border-2 border-white/20 
                           hover:bg-white/10 transition-all duration-300"
              >
                <MessageCircle size={18} />
                Book a Video Call
              </a>
            </div>

            {/* Payment Methods */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-xs text-slate-400 mb-4 uppercase tracking-wider">
                Accepted Payment Methods
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {["Stripe", "PayPal", "Wise", "Bank Transfer"].map(
                  (method, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-white/5 
                                 border border-white/10 text-xs 
                                 text-slate-300"
                    >
                      {method}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}