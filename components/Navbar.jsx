"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-8 py-4 flex items-center justify-between ${
        scrolled ? "bg-bgDark/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-cyanAccent animate-pulse" />
        <span className="font-bold tracking-wider text-lg">[CLIENT]</span>
      </div>

      <div className="hidden md:flex gap-8 text-xs font-medium tracking-widest text-mutedGray uppercase">
        {["Solutions", "Technology", "Capabilities", "Timeline", "Impact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyanAccent transition-colors">
            {item}
          </a>
        ))}
      </div>

      <button className="px-5 py-2 rounded-full border border-cyanAccent/40 text-cyanAccent text-xs font-semibold hover:bg-cyanAccent hover:text-black transition-all shadow-glow">
        Contact Us
      </button>
    </motion.nav>
  );
}