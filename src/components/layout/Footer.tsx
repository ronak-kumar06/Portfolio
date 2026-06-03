"use client";

import { SOCIALS } from "@/lib/constants";
import { Code2, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative glass border-t border-white/5 py-12">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-2xl font-bold tracking-tighter gradient-text">RK</span>
          <p className="text-sm text-muted">
            © {currentYear} Ronak Kumar. Built with Next.js & ❤️
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-white/10 text-muted hover:text-primary transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-white/10 text-muted hover:text-primary transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href={SOCIALS.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-white/10 text-muted hover:text-primary transition-colors"
          >
            <Code2 className="w-5 h-5" />
          </a>
          <a
            href={SOCIALS.codeforces}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-white/10 text-muted hover:text-primary transition-colors"
          >
            <Terminal className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
