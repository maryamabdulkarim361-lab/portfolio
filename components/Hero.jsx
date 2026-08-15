"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">
      {/* Background Ambient Glow (Breathing Animation) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-[600px] h-[600px] rounded-full bg-[#2FD8FF] blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Mixed-weight Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 flex flex-col gap-2"
        >
          <span className="font-light text-white">Engineering</span>
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#9BA1A8]">
            Intelligence.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[#9BA1A8] text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          Building next-generation AI agents and autonomous robotics systems. From neural perception to adaptive kinematics.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <button className="px-8 py-3 rounded-full bg-[#2FD8FF] text-black font-semibold text-sm hover:bg-white transition-colors shadow-glow flex items-center gap-2">
            Deploy System <ArrowRight size={16} />
          </button>
          <button className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-[#2FD8FF] hover:text-[#2FD8FF] transition-colors flex items-center gap-2 glass-card">
            <PlayCircle size={16} /> Watch Simulation
          </button>
        </motion.div>
      </div>

      {/* Bottom Status Line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 text-xs font-mono text-[#9BA1A8] uppercase tracking-widest"
      >
        <span className="w-2 h-2 rounded-full bg-[#2FD8FF] animate-pulse shadow-glow" />
        System Online · Ready to Build
      </motion.div>
    </section>
  );
}