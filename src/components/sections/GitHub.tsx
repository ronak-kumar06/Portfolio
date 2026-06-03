"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GITHUB_STATS, SOCIALS } from "@/lib/constants";
import { GitCommit, Flame, Calendar, GitPullRequest } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { cn, staggerContainer, fadeInUp } from "@/lib/utils";

export function GitHub() {
  // Generate random data for the contribution graph
  const generateGraphData = () => {
    const data = [];
    for (let col = 0; col < 52; col++) {
      const colData = [];
      for (let row = 0; row < 7; row++) {
        // Create a pattern that looks somewhat realistic but is completely deterministic to avoid hydration errors
        const val = Math.sin(col * 0.2 + row * 0.5) * 2 + Math.abs(Math.cos(col * 0.7 + row * 0.3)) * 3;
        let level = 0;
        if (val > 4) level = 4;
        else if (val > 3) level = 3;
        else if (val > 1.5) level = 2;
        else if (val > 0.5) level = 1;
        colData.push(level);
      }
      data.push(colData);
    }
    return data;
  };

  const graphData = generateGraphData();
  
  const getLevelColor = (level: number) => {
    switch(level) {
      case 4: return "bg-primary";
      case 3: return "bg-primary/80";
      case 2: return "bg-primary/50";
      case 1: return "bg-primary/20";
      default: return "bg-white/5";
    }
  };

  return (
    <section id="github" className="relative py-20 overflow-hidden">
      <div className="section-container relative z-10">
        <SectionHeading title="GitHub Activity" subtitle="My open source contributions" />

        <div className="max-w-5xl mx-auto">
          {/* Stats Row */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {[
              { label: "Total Repos", value: GITHUB_STATS.totalRepos, icon: FaGithub, color: "text-blue-400", bg: "bg-blue-400/10" },
              { label: "Contributions", value: GITHUB_STATS.totalContributions, icon: GitCommit, color: "text-green-400", bg: "bg-green-400/10" },
              { label: "Longest Streak", value: GITHUB_STATS.longestStreak, icon: Flame, color: "text-orange-400", bg: "bg-orange-400/10" },
              { label: "Current Streak", value: GITHUB_STATS.currentStreak, icon: Calendar, color: "text-purple-400", bg: "bg-purple-400/10" }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="glass p-5 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center group hover:border-white/20 transition-all">
                <div className={cn("p-3 rounded-xl mb-3 transition-transform group-hover:scale-110", stat.bg)}>
                  <stat.icon className={cn("w-6 h-6", stat.color)} />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-sm text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contribution Graph */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="glass-strong p-6 md:p-8 rounded-3xl border border-white/5 mb-10 overflow-hidden"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <GitPullRequest className="w-5 h-5 text-primary" /> Contribution Heatmap
              </h3>
              <span className="text-sm text-muted">Last 365 Days</span>
            </div>

            <div className="overflow-x-auto pb-4 hide-scrollbar">
              <div className="flex gap-1.5 min-w-max">
                {graphData.map((col, colIndex) => (
                  <div key={colIndex} className="flex flex-col gap-1.5">
                    {col.map((level, rowIndex) => (
                      <motion.div
                        key={`${colIndex}-${rowIndex}`}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: (colIndex * 7 + rowIndex) * 0.001 }}
                        viewport={{ once: true }}
                        className={cn("w-3.5 h-3.5 rounded-[3px] transition-colors hover:ring-2 hover:ring-white/50", getLevelColor(level))}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-end items-center gap-2 mt-4 text-xs text-muted">
              <span>Less</span>
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map(level => (
                  <div key={level} className={cn("w-3 h-3 rounded-[2px]", getLevelColor(level))} />
                ))}
              </div>
              <span>More</span>
            </div>
          </motion.div>

          <div className="flex justify-center">
            <MagneticButton href={SOCIALS.github} variant="primary">
              <FaGithub className="w-5 h-5 mr-2" /> View GitHub Profile
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
