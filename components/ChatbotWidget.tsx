"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";

type Message = {
  id: number;
  text: string;
  sender: "bot" | "user";
  time: string;
};

// Predefined bot responses (keyword-based)
const getBotResponse = (userMessage: string): string => {
  const msg = userMessage.toLowerCase();

  if (msg.includes("price") || msg.includes("cost") || msg.includes("pricing")) {
    return "Our pricing starts from ₹25,000 for websites, ₹50,000 for mobile apps, and ₹40,000 for AI solutions. Would you like a custom quote? Just share your requirements! 💰";
  }

  if (msg.includes("web") || msg.includes("website")) {
    return "We build modern, fast websites with Next.js, React, and Tailwind CSS. From landing pages to complex web apps — we've got you covered! 🌐 Want to see our portfolio?";
  }

  if (msg.includes("app") || msg.includes("mobile")) {
    return "We develop native and cross-platform mobile apps using React Native, Flutter, Swift, and Kotlin. Android + iOS, both covered! 📱 What kind of app do you need?";
  }

  if (msg.includes("ai") || msg.includes("chatbot") || msg.includes("automation")) {
    return "We build AI chatbots, automation systems, and custom ML models using OpenAI, LangChain, and Python. Perfect for saving time and scaling your business! 🤖";
  }

  if (msg.includes("crm") || msg.includes("dashboard")) {
    return "Our custom CRM solutions help you manage leads, customers, and workflows — all in one place. Starting from ₹60,000. 📊 Want a demo?";
  }

  if (msg.includes("time") || msg.includes("delivery") || msg.includes("how long")) {
    return "Typical timelines: Websites 2-6 weeks, Mobile Apps 4-12 weeks, AI solutions 3-8 weeks. We always deliver on time! ⏱️";
  }

  if (msg.includes("contact") || msg.includes("call") || msg.includes("talk")) {
    return "You can reach us at hello@lavixtech.com or +91 99999 99999. Or click the 'Contact Us' button in the navbar to fill our form! 📞";
  }

  if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey")) {
    return "Hello! 👋 Welcome to LavixTech. How can I help you today? Ask me about our services, pricing, or portfolio!";
  }

  if (msg.includes("thank")) {
    return "You're welcome! 😊 Feel free to ask if you have any other questions.";
  }

  if (msg.includes("portfolio") || msg.includes("work") || msg.includes("project")) {
    return "We've delivered 50+ projects across web, mobile, AI, and CRM. Check out our Portfolio page to see some of our best work! 🎨";
  }

  if (msg.includes("service")) {
    return "We offer: 🌐 Web Development, 📱 Mobile Apps, 🤖 AI & Automation, 📊 CRM & Software. Which one interests you?";
  }

  // Default response
  return "Thanks for your message! Our team will get back to you shortly. For faster response, you can also reach us at hello@lavixtech.com 📧";
};

const quickReplies = [
  "💰 Pricing",
  "🌐 Web Development",
  "📱 Mobile Apps",
  "🤖 AI Solutions",
];

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! 👋 I'm Lavix, your AI assistant. How can I help you today?",
      sender: "bot",
      time: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new message arrives
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      sender: "user",
      time: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: getBotResponse(messageText),
        sender: "bot",
        time: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* ============ FLOATING CHAT BUTTON ============ */}
      <motion.button
        initial={false}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[90] w-14 h-14 rounded-full 
                   bg-gradient-to-br from-indigo-600 to-purple-600 
                   shadow-2xl shadow-purple-500/50 
                   flex items-center justify-center 
                   text-white hover:shadow-purple-500/70 
                   transition-shadow duration-300 group"
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse Ring (only when closed) */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full 
                           bg-purple-500/40 animate-ping" />
        )}

        {/* Notification Dot */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full 
                           bg-green-400 border-2 border-slate-950 
                           flex items-center justify-center">
            <span className="text-[8px] font-bold text-slate-950">1</span>
          </span>
        )}
      </motion.button>

      {/* ============ CHAT WINDOW ============ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="fixed bottom-24 right-6 z-[90] 
                       w-[calc(100vw-3rem)] sm:w-96 
                       max-h-[calc(100vh-8rem)] 
                       rounded-2xl overflow-hidden 
                       bg-slate-900 border border-white/10 
                       shadow-2xl shadow-black/50 
                       flex flex-col"
          >
            
            {/* ===== Header ===== */}
            <div className="relative p-4 bg-gradient-to-r 
                            from-indigo-600 to-purple-600">
              
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 
                              bg-white/10 rounded-full blur-2xl" />

              <div className="relative flex items-center gap-3">
                {/* Bot Avatar */}
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/20 
                                  backdrop-blur-md flex items-center 
                                  justify-center border border-white/30">
                    <Bot size={20} className="text-white" />
                  </div>
                  {/* Online Dot */}
                  <span className="absolute -bottom-0.5 -right-0.5 
                                   w-3 h-3 rounded-full bg-green-400 
                                   border-2 border-slate-900" />
                </div>

                {/* Name + Status */}
                <div className="flex-1">
                  <p className="text-sm font-bold text-white flex items-center gap-1.5">
                    Lavix AI
                    <Sparkles size={12} className="text-yellow-300" />
                  </p>
                  <p className="text-xs text-white/80">
                    Online • Usually replies instantly
                  </p>
                </div>
              </div>
            </div>

            {/* ===== Messages Area ===== */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 
                            bg-slate-950/50 backdrop-blur-sm">
              
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-2 ${
                    msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center 
                               justify-center flex-shrink-0 ${
                                 msg.sender === "bot"
                                   ? "bg-gradient-to-br from-indigo-500 to-purple-500"
                                   : "bg-white/10"
                               }`}
                  >
                    {msg.sender === "bot" ? (
                      <Bot size={14} className="text-white" />
                    ) : (
                      <User size={14} className="text-slate-300" />
                    )}
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${
                      msg.sender === "bot"
                        ? "bg-white/5 border border-white/10 text-slate-200"
                        : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                    <p
                      className={`text-[10px] mt-1 ${
                        msg.sender === "bot"
                          ? "text-slate-500"
                          : "text-white/70"
                      }`}
                    >
                      {msg.time}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2"
                >
                  <div className="w-7 h-7 rounded-full 
                                  bg-gradient-to-br from-indigo-500 to-purple-500 
                                  flex items-center justify-center flex-shrink-0">
                    <Bot size={14} className="text-white" />
                  </div>
                  <div className="bg-white/5 border border-white/10 
                                  rounded-2xl px-4 py-3 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 
                                     animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 
                                     animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 
                                     animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* ===== Quick Replies (only when 1 message) ===== */}
            {messages.length === 1 && (
              <div className="px-4 py-3 bg-slate-950/50 
                              border-t border-white/5">
                <p className="text-[10px] text-slate-500 uppercase 
                              tracking-wider mb-2">
                  Quick Questions
                </p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(reply)}
                      className="px-3 py-1.5 rounded-full text-xs 
                                 bg-white/5 border border-white/10 
                                 text-slate-300 hover:bg-white/10 
                                 hover:text-white hover:border-indigo-500/50 
                                 transition-colors duration-300"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ===== Input Area ===== */}
            <div className="p-4 bg-slate-900 border-t border-white/10">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2.5 rounded-full 
                             bg-white/5 border border-white/10 
                             text-sm text-white placeholder-slate-500 
                             focus:outline-none focus:border-indigo-500/50 
                             focus:bg-white/10 transition-all duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSend()}
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-full 
                             bg-gradient-to-br from-indigo-600 to-purple-600 
                             flex items-center justify-center 
                             text-white shadow-lg shadow-indigo-500/30 
                             hover:shadow-purple-500/50 
                             disabled:opacity-50 disabled:cursor-not-allowed 
                             transition-all duration-300 flex-shrink-0"
                  aria-label="Send message"
                >
                  <Send size={16} />
                </motion.button>
              </div>

              <p className="text-[10px] text-slate-500 text-center mt-2">
                Powered by <span className="gradient-text font-semibold">Lavix AI</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}