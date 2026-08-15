"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Factory, Stethoscope, Warehouse, Truck, ShieldAlert, Zap, Cpu } from "lucide-react";

const sectorsData = [
  {
    title: "Manufacturing & Robotics",
    description: "Automated quality control, robotic assembly lines, and predictive equipment maintenance.",
    icon: Factory,
  },
  {
    title: "Healthcare Tech",
    description: "AI-assisted diagnostic vision, medical imaging pipelines, and robotic surgical tools.",
    icon: Stethoscope,
  },
  {
    title: "AgriTech & Machinery",
    description: "Smart yield prediction, autonomous field machinery, and computer vision crop monitoring.",
    icon: Zap,
  },
  {
    title: "Warehousing & Logistics",
    description: "Autonomous guided vehicles (AGVs), automated inventory tracking, and sorting systems.",
    icon: Warehouse,
  },
  {
    title: "Fleet & Mobility",
    description: "Real-time telemetry tracking, driver assistance systems, and route optimization.",
    icon: Truck,
  },
  {
    title: "Enterprise SaaS & AI Agents",
    description: "Custom self-hosted n8n workflows, automated API pipelines, and secure cloud agent deployment.",
    icon: Cpu,
  },
  {
    title: "Defense & Security",
    description: "Perimeter threat detection, autonomous surveillance drones, and encrypted feeds.",
    icon: ShieldAlert,
  },
];

export default function SectorGrid() {
  return (
    <section id="technology" className="py-24 px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#2FD8FF]">
          ◆ INDUSTRIES & SECTORS
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mt-2 text-white">
          Deployed Across Complex Domains
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {sectorsData.map((sector, index) => {
          const Icon = sector.icon;
          return (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-5 rounded-xl flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="p-2 rounded-lg bg-white/5 w-fit mb-4 group-hover:bg-[#2FD8FF]/10 transition-colors">
                  <Icon size={18} className="text-[#9BA1A8] group-hover:text-[#2FD8FF] transition-colors" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1.5 group-hover:text-[#2FD8FF] transition-colors">
                  {sector.title}
                </h3>
                <p className="text-xs text-[#9BA1A8] leading-relaxed">
                  {sector.description}
                </p>
              </div>
            </motion.div>
          );
        })}

        {/* Highlighted CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: sectorsData.length * 0.08 }}
          whileHover={{ scale: 1.02 }}
          className="glass-card p-5 rounded-xl border-[#2FD8FF]/50 bg-[#2FD8FF]/5 flex flex-col justify-between cursor-pointer group shadow-glow"
        >
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] font-mono text-[#2FD8FF] uppercase tracking-wider">NEW PROJECT?</span>
              <ArrowUpRight size={18} className="text-[#2FD8FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <h3 className="text-sm font-semibold text-white mb-1">
              Have a custom requirement?
            </h3>
            <p className="text-xs text-[#9BA1A8]">
              Let’s architect a tailored solution for your organization.
            </p>
          </div>
          <span className="text-xs font-semibold text-[#2FD8FF] mt-4 flex items-center gap-1">
            Initiate Contact &rarr;
          </span>
        </motion.div>
      </div>
    </section>
  );
}