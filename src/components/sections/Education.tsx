"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EDUCATION_TIMELINE } from "@/lib/constants";
import { GraduationCap, Award, BookOpen, ChevronRight, Trophy } from "lucide-react";
import { staggerContainer, fadeInUp, slideInLeft } from "@/lib/utils";

// Helper to render icon
const IconWrapper = ({ name }: { name: string }) => {
  if (name === "Award") return <Award className="w-6 h-6 text-accent" />;
  return <GraduationCap className="w-6 h-6 text-primary" />;
};

export function Education() {
  return (
    <section id="education" className="relative py-20 overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading title="Education" subtitle="My Academic Journey" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Summary Card - 4 Columns */}
          <div className="lg:col-span-4 h-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="glass-strong rounded-3xl p-8 border border-white/10 h-full flex flex-col justify-center relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />
              
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Trophy className="w-6 h-6 text-primary" /> 
                Academic Journey
              </h3>

              <div className="space-y-6">
                <div className="glass p-4 rounded-xl border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1">
                  <p className="text-sm text-muted-foreground mb-1">Class X (CBSE)</p>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    92.40%
                  </p>
                </div>
                
                <div className="glass p-4 rounded-xl border border-white/5 hover:border-secondary/30 transition-all hover:-translate-y-1">
                  <p className="text-sm text-muted-foreground mb-1">Class XII (CBSE)</p>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                    87.60%
                  </p>
                </div>
                
                <div className="glass p-4 rounded-xl border border-white/5 hover:border-accent/30 transition-all hover:-translate-y-1">
                  <p className="text-sm text-muted-foreground mb-1">B.Tech CGPA</p>
                  <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                    7.39
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Timeline - 8 Columns */}
          <div className="lg:col-span-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative border-l border-primary/30 pl-8 md:pl-12 ml-4 md:ml-6"
            >
              {EDUCATION_TIMELINE.map((item, index) => (
                <div key={index} className="relative mb-12 last:mb-0">
                  <motion.div variants={slideInLeft} className="absolute -left-[50px] md:-left-[66px] top-0">
                    <motion.div 
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                      className={`w-12 h-12 rounded-full bg-surface border-2 flex items-center justify-center glow-sm ${
                        item.icon === 'Award' ? 'border-accent' : 'border-primary'
                      }`}
                    >
                      <IconWrapper name={item.icon} />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeInUp} 
                    whileHover={{ y: -5 }}
                    className="glass-strong p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_48px_rgba(var(--primary-rgb),0.1)]"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {item.institution}
                        </h3>
                        <p className="text-lg text-muted-foreground flex items-center gap-2">
                          <BookOpen className="w-4 h-4" /> {item.degree}
                        </p>
                      </div>
                      <div className="text-right flex flex-col md:items-end">
                        <div className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary font-bold whitespace-nowrap mb-2 md:mb-0">
                          {item.score}
                        </div>
                        <span className="text-sm font-medium text-muted-foreground mt-2">{item.duration}</span>
                      </div>
                    </div>
                    
                    {item.highlights && item.highlights.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-white/5">
                        <p className="text-sm text-foreground mb-3 font-semibold">Highlights:</p>
                        <div className="flex flex-wrap gap-2">
                          {item.highlights.map((highlight, hIndex) => (
                            <span 
                              key={hIndex}
                              className="px-3 py-1 text-xs rounded-full glass border border-white/10 text-muted-foreground flex items-center gap-1 group-hover:border-primary/20 transition-colors"
                            >
                              <ChevronRight className="w-3 h-3 text-primary" />
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
