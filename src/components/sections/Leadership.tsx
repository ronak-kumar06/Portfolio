"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LEADERSHIP } from "@/lib/constants";
import { Users, CheckCircle2 } from "lucide-react";
import { staggerContainer, fadeInUp, slideInLeft } from "@/lib/utils";

export function Leadership() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading title="Leadership & Activities" subtitle="Beyond coding" />

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative border-l border-primary/30 pl-8 md:pl-12 ml-4 md:ml-6"
          >
            {LEADERSHIP.map((item, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                <motion.div variants={slideInLeft} className="absolute -left-[50px] md:-left-[66px] top-0">
                  <div className="w-12 h-12 rounded-full bg-surface border-2 border-primary flex items-center justify-center glow-sm">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="glass-strong p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group">
                  <h3 className="text-2xl font-bold text-foreground mb-1 gradient-text-primary">
                    {item.role}
                  </h3>
                  <p className="text-lg text-muted-foreground font-medium mb-6">
                    {item.organization}
                  </p>
                  
                  <ul className="space-y-3">
                    {item.highlights.map((highlight, hIndex) => (
                      <motion.li 
                        key={hIndex}
                        variants={fadeInUp}
                        className="flex items-start gap-3 text-muted"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
