"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  className?: string;
}

export const MagneticButton = React.forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ children, variant = "primary", href, className, onClick, ...props }, ref) => {
    const internalRef = useRef<HTMLButtonElement>(null);
    const resolvedRef = (ref as React.MutableRefObject<HTMLButtonElement>) || internalRef;
    
    const [isHovered, setIsHovered] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      mouseX.set(0);
      mouseY.set(0);
    };

    const baseStyles = "relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:pointer-events-none disabled:opacity-50 px-6 py-3";
    
    const variants = {
      primary: "bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-primary/25 border border-white/10",
      secondary: "bg-surface border border-primary/30 text-foreground hover:bg-primary/10",
      ghost: "text-foreground hover:bg-white/10",
    };

    const InnerContent = (
      <motion.span
        style={{ x: springX, y: springY }}
        className="relative z-10 flex items-center gap-2"
      >
        {children}
      </motion.span>
    );

    const buttonProps = {
      ref: resolvedRef,
      onMouseMove: handleMouseMove,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: handleMouseLeave,
      onClick,
      className: cn(baseStyles, variants[variant], className, isHovered ? "ripple" : ""),
      ...props,
    };

    if (href) {
      if (href.startsWith("#") || href.startsWith("/")) {
        return (
          <Link href={href} passHref legacyBehavior>
            <button {...buttonProps}>{InnerContent}</button>
          </Link>
        );
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
          <button {...buttonProps}>{InnerContent}</button>
        </a>
      );
    }

    return <button {...buttonProps}>{InnerContent}</button>;
  }
);

MagneticButton.displayName = "MagneticButton";
