"use client";

import { motion } from "motion/react";
import { cn, fadeInUp } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn("flex flex-col items-center justify-center text-center mb-16", className)}
    >
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 gradient-text">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mt-6 opacity-50" />
    </motion.div>
  );
}
