"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { PERSONAL, METRICS, SOCIALS } from "@/lib/constants";
import { ChevronDown, FileText, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { staggerContainer, fadeInUp, fadeIn } from "@/lib/utils";

const Scene = dynamic(() => import("@/components/three/Scene"), { ssr: false });

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* 3D Background */}
      <Scene />

      <div className="section-container relative z-10 w-full flex flex-col items-center justify-center text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong text-sm text-muted border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              👋 Welcome to my portfolio
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            Hi, I&apos;m <br className="md:hidden" />
            <span className="gradient-text">{PERSONAL.name}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2 variants={fadeInUp} className="text-lg md:text-2xl text-muted font-medium mb-6">
            {PERSONAL.title}
          </motion.h2>

          {/* Description */}
          <motion.p variants={fadeInUp} className="text-base md:text-lg text-muted/80 max-w-2xl mb-10 leading-relaxed">
            {PERSONAL.description}
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <MagneticButton href="#projects" variant="primary">
              View Projects <ArrowRight className="w-4 h-4" />
            </MagneticButton>
            
            <MagneticButton href={PERSONAL.resumeUrl} variant="secondary">
              <FileText className="w-4 h-4" /> Resume
            </MagneticButton>
            
            <MagneticButton href={SOCIALS.github} variant="secondary" className="px-4">
              <FaGithub className="w-5 h-5" />
            </MagneticButton>
            
            <MagneticButton href="#contact" variant="ghost">
              Contact Me
            </MagneticButton>
          </motion.div>

          {/* Metrics */}
          <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
            {METRICS.map((metric, i) => (
              <div key={i} className="glass-strong p-4 rounded-2xl flex flex-col items-center justify-center border border-white/5 hover:border-primary/30 transition-colors">
                <span className="text-2xl md:text-3xl font-bold gradient-text-primary mb-1">
                  {metric.isText ? (
                    metric.text
                  ) : (
                    <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  )}
                </span>
                <span className="text-xs md:text-sm text-muted text-center">{metric.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center text-muted"
      >
        <span className="text-xs mb-2 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
