"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { NAV_LINKS, SOCIALS } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItemVariants = {
    hover: { y: -2, transition: { type: "spring" as const, stiffness: 300 } },
    tap: { y: 0 },
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "py-3 glass-strong border-b border-white/5 shadow-lg" : "py-5 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="#home" className="relative group">
            <span className="text-2xl font-bold tracking-tighter gradient-text">RK</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <motion.div key={link.label} variants={navItemVariants} whileHover="hover" whileTap="tap">
                <Link
                  href={link.href}
                  className="text-sm font-medium text-muted hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-white/10 text-muted hover:text-foreground transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-muted hover:text-foreground"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-semibold text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex gap-6"
              >
                <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-surface rounded-full text-foreground">
                  <FaGithub className="w-6 h-6" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
