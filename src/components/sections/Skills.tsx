"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SKILL_CATEGORIES } from "@/lib/constants";
import { Code2, Layout, Server, Database, Cpu } from "lucide-react";
import { cn, staggerContainer, fadeInUp } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Layout,
  Server,
  Database,
  Cpu,
};

export function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="relative py-20 overflow-hidden bg-surface/30">
      <div className="section-container relative z-10">
        <SectionHeading title="Skills & Technologies" subtitle="What I work with" />

        <div className="max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {SKILL_CATEGORIES.map((category, index) => {
              const Icon = iconMap[category.icon] as any;
              const isActive = activeTab === index;
              
              return (
                <button
                  key={category.title}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    "relative px-4 md:px-6 py-3 rounded-full flex items-center gap-2 text-sm md:text-base font-medium transition-all duration-300",
                    isActive ? "text-white" : "text-muted hover:text-foreground hover:bg-white/5"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-tab"
                      className="absolute inset-0 bg-primary/20 border border-primary/50 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Icon className="w-4 h-4 md:w-5 md:h-5 relative z-10" />
                  <span className="relative z-10">{category.title}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {SKILL_CATEGORIES[activeTab].skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={fadeInUp}
                    className="glass-strong p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all group"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-sm font-mono text-muted group-hover:text-primary transition-colors">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="h-2 w-full bg-background rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
