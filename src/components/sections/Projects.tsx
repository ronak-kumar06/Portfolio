"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { PROJECTS } from "@/lib/constants";
import { ExternalLink, ArrowUpRight, FolderGit2 } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="relative py-20 overflow-hidden bg-surface/30">
      <div className="section-container relative z-10">
        <SectionHeading title="Featured Projects" subtitle="Things I've built" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {PROJECTS.map((project, index) => (
            <motion.div key={project.title} variants={fadeInUp} className="h-full">
              <GlassCard glowColor={index % 2 === 0 ? "primary" : "secondary"} className="h-full flex flex-col group p-1">
                <div className="flex-1 bg-surface/80 rounded-[14px] p-6 sm:p-8 flex flex-col h-full border border-white/5 group-hover:bg-surface/60 transition-colors">
                  
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                      <FolderGit2 className="w-8 h-8" />
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted hover:text-white transition-colors"
                    >
                      <ArrowUpRight className="w-6 h-6" />
                    </a>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted mb-8 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-white/5 text-muted-foreground border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
