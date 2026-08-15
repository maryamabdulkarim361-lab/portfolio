"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const capabilities = [
  { id: "01", title: "Autonomous Navigation", desc: "Real-time spatial mapping and collision-free dynamic path routing.", telemetry: "LATENCY: 1.2ms | ACCURACY: 99.8%" },
  { id: "02", title: "Neural Processing", desc: "Edge-computed multi-modal AI vision and sensor fusion models.", telemetry: "THROUGHPUT: 120 FPS | LOAD: 42%" },
  { id: "03", title: "Reinforcement Learning", desc: "Continuous policy training in high-fidelity simulated physics environments.", telemetry: "EPISODES: 4.8M | CONVERGENCE: OPTIMAL" },
  { id: "04", title: "Adaptive Kinematics", desc: "Closed-loop feedback control adjusting to unexpected load conditions.", telemetry: "TORQUE RATIO: 1:12 | STABILITY: HIGH" },
];

export default function CapabilityExplorer({ title, categoryTag }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % capabilities.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const activeItem = capabilities[activeIndex];

  return (
    <section className="py-20 px-8 max-w-7xl mx-auto">
      <div className="mb-10">
        <span className="text-xs font-mono uppercase tracking-widest text-[#2FD8FF]">◆ {categoryTag}</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-2 text-white">{title}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Interactive List */}
        <div className="lg:col-span-5 flex flex-col gap-3" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          {capabilities.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`p-5 rounded-xl cursor-pointer transition-all duration-300 ${
                  isActive 
                    ? "glass-card border-[#2FD8FF] shadow-glow bg-[#2FD8FF]/10" 
                    : "border border-white/10 bg-[#0D0F12]/60 hover:border-white/30"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-sm font-semibold ${isActive ? "text-[#2FD8FF]" : "text-white"}`}>{item.title}</span>
                  <span className="text-xs font-mono text-[#9BA1A8]">{item.id}</span>
                </div>
                <p className="text-xs text-[#9BA1A8] leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Right Column: Visual Radar Panel */}
        <div className="lg:col-span-7 glass-card rounded-xl p-8 flex flex-col justify-between relative overflow-hidden min-h-[380px]">
          {/* Animated Background Graphic */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="w-64 h-64 rounded-full border border-[#2FD8FF]/40 flex items-center justify-center shadow-glow relative"
              >
                <div className="w-48 h-48 rounded-full border border-dashed border-[#2FD8FF]/80 animate-[spin_12s_linear_infinite]" />
                <div className="w-24 h-24 rounded-full bg-[#2FD8FF]/20 backdrop-blur-md border border-[#2FD8FF] absolute shadow-glow" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Top Header */}
          <div className="relative z-10 flex justify-between items-center border-b border-white/10 pb-4">
            <span className="text-xs font-mono text-[#2FD8FF] uppercase">System Radar Visualizer</span>
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> LIVE READOUT
            </span>
          </div>

          {/* Bottom Telemetry */}
          <div className="relative z-10 border-t border-white/10 pt-4 mt-auto">
            <span className="text-[10px] font-mono text-[#9BA1A8] block mb-1">TELEMETRY STRIP</span>
            <p className="text-xs font-mono text-[#2FD8FF]">{activeItem.telemetry}</p>
          </div>
        </div>
      </div>
    </section>
  );
}