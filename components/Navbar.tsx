 import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-white/10 py-4 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg transition-transform duration-300 group-hover:scale-110" />
          <span className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-purple-400">
            LavixTech
          </span>
        </Link>

        {/* Links (Desktop) */}
        <ul className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Technologies", href: "/technologies" },
            { name: "Portfolio", href: "/portfolio" },
            { name: "About", href: "/about" },
          ].map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors duration-300 py-2 group inline-block"
              >
                {link.name}
                {/* Smooth Gradient Underline */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="relative px-5 py-2 rounded-full text-sm font-semibold text-white overflow-hidden group bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-0.5"
        >
          <span className="relative z-10">Let&apos;s Talk</span>
          {/* Shimmer Effect */}
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </Link>
      </div>
    </nav>
  );
}