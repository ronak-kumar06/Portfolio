/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CURRENT_FOCUS } from "@/lib/constants";
import { Trophy, Layers, Brain, TrendingUp, GitBranch } from "lucide-react";
import { cn, staggerContainer, fadeInUp } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Trophy,
  Layers,
  Brain,
  TrendingUp,
  GitBranch,
};

export function CurrentFocus() {
  return (
    <section className="relative py-20 overflow-hidden bg-surface/30">
      <div className="section-container relative z-10">
        <SectionHeading title="Current Focus" subtitle="What I'm working on right now" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {CURRENT_FOCUS.map((item, i) => {
            const Icon = iconMap[item.icon] as any;
            
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="group relative glass p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full flex flex-col"
              >
                {/* Top Border Gradient */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 opacity-50 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
                />
                
                {/* Background Glow */}
                <div 
                  className="absolute top-10 left-10 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: item.color }}
                />
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
