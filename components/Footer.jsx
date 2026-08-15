"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Globe, Share2, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer id="impact" className="pt-20 pb-12 px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Contact CTA Banner */}
      <div className="glass-card rounded-2xl p-8 md:p-14 mb-16 relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-[#2FD8FF]/30 shadow-glow">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-[#2FD8FF] block mb-2">
            ◆ INITIATE COLLABORATION
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Ready to build intelligent systems?
          </h2>
          <p className="text-sm text-[#9BA1A8] leading-relaxed">
            Whether you need custom AI agents, computer vision models, or autonomous control architecture, let's turn complex requirements into deployed software.
          </p>
        </div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:contact@example.com"
          className="px-8 py-4 rounded-full bg-[#2FD8FF] text-black font-semibold text-sm hover:bg-white transition-colors shadow-glow flex items-center gap-2 whitespace-nowrap"
        >
          <Mail size={18} /> Get in Touch <ArrowUpRight size={18} />
        </motion.a>
      </div>

      {/* Footer Navigation & Brand Row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-[#9BA1A8] font-mono border-b border-white/10 pb-8 mb-8">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#2FD8FF] animate-pulse" />
          <span className="text-white font-bold tracking-widest">[CLIENT]</span>
          <span>— Autonomous Systems Architecture</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#solutions" className="hover:text-[#2FD8FF] transition-colors">SOLUTIONS</a>
          <a href="#technology" className="hover:text-[#2FD8FF] transition-colors">TECHNOLOGY</a>
          <a href="#capabilities" className="hover:text-[#2FD8FF] transition-colors">CAPABILITIES</a>
          <a href="#timeline" className="hover:text-[#2FD8FF] transition-colors">TIMELINE</a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 text-white">
          <a href="#" className="p-2 rounded-full glass-card hover:text-[#2FD8FF] transition-colors" aria-label="Website">
            <Globe size={16} />
          </a>
          <a href="#" className="p-2 rounded-full glass-card hover:text-[#2FD8FF] transition-colors" aria-label="Network">
            <Share2 size={16} />
          </a>
          <a href="#" className="p-2 rounded-full glass-card hover:text-[#2FD8FF] transition-colors" aria-label="Message">
            <MessageSquare size={16} />
          </a>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono text-[#9BA1A8]/60 gap-2">
        <p>© {new Date().getFullYear()} [CLIENT]. All rights reserved.</p>
        <p>SYSTEM STATUS: OPERATIONAL</p>
      </div>
    </footer>
  );
}