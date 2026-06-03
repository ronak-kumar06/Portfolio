"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "primary" | "secondary" | "accent";
}

export function GlassCard({ children, className, glowColor = "primary" }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Maximum tilt angle
  const maxTilt = 8;
  const rotateX = useTransform(smoothY, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothX, [0, 1], [-maxTilt, maxTilt]);

  // Glare position
  const glareX = useTransform(smoothX, [0, 1], [100, -100]);
  const glareY = useTransform(smoothY, [0, 1], [100, -100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const glowColors = {
    primary: "rgba(59, 130, 246, 0.4)",
    secondary: "rgba(139, 92, 246, 0.4)",
    accent: "rgba(6, 182, 212, 0.4)",
  };

  return (
    <div className="relative [perspective:1000px] w-full h-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "glass-strong relative w-full h-full rounded-2xl overflow-hidden transition-shadow duration-300",
          isHovered ? "shadow-2xl" : "shadow-lg",
          className
        )}
      >
        {/* Border glow */}
        <div 
          className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 rounded-2xl pointer-events-none"
          style={{
            opacity: isHovered ? 1 : 0,
            boxShadow: `inset 0 0 20px ${glowColors[glowColor]}`,
          }}
        />
        
        {/* Dynamic glare */}
        <motion.div
          className="absolute inset-0 z-10 opacity-0 pointer-events-none mix-blend-overlay transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.4 : 0,
            background: `radial-gradient(circle at ${useTransform(smoothX, [0, 1], [0, 100])}% ${useTransform(smoothY, [0, 1], [0, 100])}%, rgba(255,255,255,0.8) 0%, transparent 50%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-20 h-full w-full [transform:translateZ(30px)]">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
