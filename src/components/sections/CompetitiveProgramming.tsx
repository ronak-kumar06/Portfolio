"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { CP_STATS } from "@/lib/constants";
import { Trophy, Target, Code2, Terminal, ExternalLink } from "lucide-react";
import { cn, staggerContainer, fadeInUp } from "@/lib/utils";

export function CompetitiveProgramming() {
  return (
    <section id="competitive-programming" className="relative py-20 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading title="Competitive Programming" subtitle="Problem solving journey & achievements" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* LeetCode Card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="glass-strong rounded-3xl p-8 border border-white/5 relative overflow-hidden group hover:shadow-[0_0_40px_rgba(245,158,11,0.15)] transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#F59E0B]/10 rounded-xl">
                    <Code2 className="w-8 h-8 text-[#F59E0B]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">LeetCode</h3>
                    <p className="text-sm text-muted">Algorithm & Data Structures</p>
                  </div>
                </div>
                <a
                  href={CP_STATS.leetcode.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted hover:text-[#F59E0B] transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <div className="flex items-end gap-4 mb-8">
                <div className="text-6xl font-bold text-[#F59E0B] tracking-tighter">
                  <AnimatedCounter value={CP_STATS.leetcode.rating} />
                </div>
                <div className="text-muted pb-2">Max Rating</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass p-4 rounded-xl border border-white/5">
                  <Target className="w-5 h-5 text-primary mb-2" />
                  <div className="text-2xl font-bold text-foreground">
                    <AnimatedCounter value={CP_STATS.leetcode.problems} suffix="+" />
                  </div>
                  <div className="text-sm text-muted">Problems Solved</div>
                </div>
                <div className="glass p-4 rounded-xl border border-white/5">
                  <Trophy className="w-5 h-5 text-secondary mb-2" />
                  <div className="text-2xl font-bold text-foreground">
                    Top <AnimatedCounter value={CP_STATS.leetcode.topPercentage} />%
                  </div>
                  <div className="text-sm text-muted">Global Rank</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Codeforces Card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="glass-strong rounded-3xl p-8 border border-white/5 relative overflow-hidden group hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#06B6D4]/10 rounded-xl">
                    <Terminal className="w-8 h-8 text-[#06B6D4]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Codeforces</h3>
                    <p className="text-sm text-muted">Competitive Programming</p>
                  </div>
                </div>
                <a
                  href={CP_STATS.codeforces.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted hover:text-[#06B6D4] transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <div className="flex items-end gap-4 mb-8">
                <div className="text-6xl font-bold text-[#06B6D4] tracking-tighter">
                  <AnimatedCounter value={CP_STATS.codeforces.maxRating} />
                </div>
                <div className="text-muted pb-2">Max Rating</div>
              </div>

              <div className="glass p-6 rounded-xl border border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted mb-1">Current Rank</div>
                  <div className="text-2xl font-bold text-[#06B6D4]">{CP_STATS.codeforces.rank}</div>
                </div>
                
                {/* Rating Bar Visualization */}
                <div className="w-32 h-16 flex items-end gap-1">
                  {[40, 60, 80, 100, 70, 90].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="w-full bg-[#06B6D4]/40 rounded-t-sm relative overflow-hidden"
                    >
                      {i === 3 && (
                        <div className="absolute inset-0 bg-[#06B6D4]" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
