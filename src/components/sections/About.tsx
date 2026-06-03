"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EDUCATION } from "@/lib/constants";
import { GraduationCap, BookOpen, Target, Sparkles } from "lucide-react";
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from "@/lib/utils";

export function About() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading title="About Me" subtitle="Education & Focus Areas" />

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative border-l border-primary/30 pl-8 md:pl-12 ml-4 md:ml-6"
          >
            {/* Education Node */}
            <div className="relative mb-16">
              <motion.div variants={slideInLeft} className="absolute -left-[50px] md:-left-[66px] top-0">
                <div className="w-12 h-12 rounded-full bg-surface border-2 border-primary flex items-center justify-center glow-sm">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="glass-strong p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {EDUCATION.institution}
                    </h3>
                    <p className="text-lg text-muted-foreground flex items-center gap-2">
                      <BookOpen className="w-4 h-4" /> {EDUCATION.degree}
                    </p>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary font-bold">
                    CGPA: {EDUCATION.cgpa}
                  </div>
                </div>
                <p className="text-muted mt-4">
                  Currently pursuing my Bachelor of Technology, building a strong foundation in computer science and engineering principles.
                </p>
              </motion.div>
            </div>

            {/* Focus Areas Node */}
            <div className="relative">
              <motion.div variants={slideInLeft} className="absolute -left-[50px] md:-left-[66px] top-0">
                <div className="w-12 h-12 rounded-full bg-surface border-2 border-secondary flex items-center justify-center glow-sm">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="glass p-8 rounded-2xl border border-white/5">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent" /> Key Focus Areas
                </h3>
                <div className="flex flex-wrap gap-3">
                  {EDUCATION.focusAreas.map((area, index) => (
                    <motion.span
                      key={area}
                      variants={fadeInUp}
                      custom={index}
                      className="px-4 py-2 rounded-full text-sm font-medium glass border border-white/10 hover:border-secondary/50 hover:bg-secondary/10 transition-all cursor-default"
                    >
                      {area}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
