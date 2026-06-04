"use client";

import { motion } from "motion/react";
import { GraduationCap, BookOpen, Code2 } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/utils";

export function AcademicHighlights() {
  return (
    <section id="academic-highlights" className="relative py-10 pb-20 overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {/* Card 1 */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="glass p-8 rounded-3xl border border-white/10 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
              <GraduationCap className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">IIT Roorkee</h3>
            <p className="text-muted-foreground">
              Pursuing B.Tech Civil Engineering at one of India&apos;s Top Engineering Institutes, focusing on analytical thinking and problem solving.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="glass p-8 rounded-3xl border border-white/10 hover:border-secondary/50 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-colors" />
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-6">
              <BookOpen className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Strong Academic Foundation</h3>
            <p className="text-muted-foreground">
              Maintained consistent academic excellence with <strong className="text-foreground">92.40%</strong> in Class X and <strong className="text-foreground">87.60%</strong> in Class XII.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="glass p-8 rounded-3xl border border-white/10 hover:border-accent/50 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors" />
            <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
              <Code2 className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2">Technical Growth</h3>
            <p className="text-muted-foreground">
              Successfully transitioned core skills into Software Development, Machine Learning, and Competitive Programming.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
