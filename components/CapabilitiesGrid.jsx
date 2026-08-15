"use client";

import { motion } from "framer-motion";
import { Cpu, Eye, Network, Bot, ShieldCheck, Workflow } from "lucide-react";

const capabilitiesData = [
  {
    id: "01",
    title: "AI & Machine Learning",
    description: "Custom neural network architectures, predictive modeling, and scalable large language model integrations.",
    icon: Cpu,
  },
  {
    id: "02",
    title: "Computer Vision",
    description: "Edge-computed object detection, real-time spatial mapping, and multi-modal optical perception.",
    icon: Eye,
  },
  {
    id: "03",
    title: "Autonomous Systems",
    description: "Closed-loop motion control, dynamic route optimization, and collision-free kinetic pathing.",
    icon: Bot,
  },
  {
    id: "04",
    title: "Sensor Fusion & IoT",
    description: "High-throughput telemetry integration combining LiDAR, radar, and thermal hardware feeds.",
    icon: Network,
  },
  {
    id: "05",
    title: "Automation Workflows",
    description: "Enterprise self-hosted automation infrastructure designed for maximum security and zero-data leakage.",
    icon: Workflow,
  },
  {
    id: "06",
    title: "System Architecture",
    description: "End-to-end full-stack software development, cloud infrastructure, and custom API pipelines.",
    icon: ShieldCheck,
  },
];

export default function CapabilitiesGrid() {
  return (
    <section id="capabilities" className="py-24 px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#2FD8FF]">
          ◆ SERVICES & CAPABILITIES
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mt-2 text-white">
          Solutions for Complex Operations
        </h2>
      </div>

      {/* 2x3 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilitiesData.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 rounded-xl flex flex-col justify-between group transition-all duration-300 relative"
            >
              {/* Top Row: Index & Icon Badge */}
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono text-[#9BA1A8] group-hover:text-[#2FD8FF] transition-colors">
                  {item.id}
                </span>
                <div className="p-2.5 rounded-lg bg-[#2FD8FF]/10 border border-[#2FD8FF]/20 group-hover:border-[#2FD8FF] group-hover:shadow-glow transition-all">
                  <Icon size={20} className="text-[#2FD8FF]" />
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#2FD8FF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#9BA1A8] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}