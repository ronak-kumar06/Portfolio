"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useTransform, motion } from "motion/react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    duration: duration * 1000,
  });
  
  const rounded = useTransform(springValue, (latest) => Math.round(latest));
  const display = useTransform(rounded, (latest) => `${prefix}${latest}${suffix}`);

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  return <motion.span ref={ref} className={className}>{display}</motion.span>;
}
