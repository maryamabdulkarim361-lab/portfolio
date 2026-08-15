"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const projectsData = [
  {
    id: "01",
    title: "AgriTech Laser Land Leveling Campaign",
    category: "COMPUTER VISION & MARKETING",
    description: "High-impact promotional campaign visuals and autonomous machinery showcase for Crossfield Agro.",
    tag: "AgriTech",
  },
  {
    id: "02",
    title: "Self-Hosted n8n Automation Engine",
    category: "AI AGENTS & CLOUD PIPELINES",
    description: "Private, zero-data-leakage enterprise workflow automation deployed on AWS with DuckDNS and Caddy.",
    tag: "Automation",
  },
  {
    id: "03",
    title: "Real-time Telemetry & Kinematics Radar",
    category: "AUTONOMOUS ROBOTICS",
    description: "Closed-loop feedback and multi-sensor spatial mapping dashboard for edge-computed robotics.",
    tag: "Robotics",
  },
];

export default function ProjectShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const activeProject = projectsData[currentIndex];

  return (
    <section id="timeline" className="py-24 px-8 max-w-7xl mx-auto">
      {/* Section Header with Carousel Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#2FD8FF]">
            ◆ FEATURED DEPLOYMENTS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-white">
            System Case Studies
          </h2>
        </div>

        {/* Arrow Navigation */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full border border-white/10 glass-card text-white hover:border-[#2FD8FF] hover:text-[#2FD8FF] transition-colors"
            aria-label="Previous Project"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full border border-white/10 glass-card text-white hover:border-[#2FD8FF] hover:text-[#2FD8FF] transition-colors"
            aria-label="Next Project"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Main Project Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="glass-card rounded-2xl p-8 md:p-12 border border-white/10 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Content Area */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-[#2FD8FF]/10 text-[#2FD8FF] border border-[#2FD8FF]/20 uppercase">
                  {activeProject.tag}
                </span>
                <span className="text-xs font-mono text-[#9BA1A8]">
                  {activeProject.category}
                </span>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                {activeProject.title}
              </h3>
              <p className="text-sm md:text-base text-[#9BA1A8] leading-relaxed mb-8">
                {activeProject.description}
              </p>
            </div>

            <button className="w-fit px-6 py-2.5 rounded-full bg-[#2FD8FF] text-black font-semibold text-xs hover:bg-white transition-colors flex items-center gap-2 shadow-glow">
              Explore Case Study <ExternalLink size={14} />
            </button>
          </div>

          {/* Visual Preview Container */}
          <div className="lg:col-span-5 h-64 lg:h-80 rounded-xl bg-[#0D0F12] border border-white/10 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2FD8FF]/10 via-transparent to-transparent opacity-50" />
            <div className="w-32 h-32 rounded-full border border-[#2FD8FF]/30 flex items-center justify-center animate-pulse">
              <span className="text-xs font-mono text-[#2FD8FF] uppercase tracking-wider">
                [{activeProject.id} PREVIEW]
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}