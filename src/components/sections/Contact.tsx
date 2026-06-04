"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { PERSONAL, SOCIALS } from "@/lib/constants";
import { Mail, Send, MapPin, CheckCircle, Code2, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from "@/lib/utils";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSuccess(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden bg-surface/30">
      <div className="section-container relative z-10">
        <SectionHeading title="Get In Touch" subtitle="Let's work together" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column - Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col justify-center"
          >
            <motion.h3 variants={slideInLeft} className="text-3xl font-bold mb-6 text-foreground">
              Let&apos;s connect
            </motion.h3>
            <motion.p variants={slideInLeft} className="text-lg text-muted mb-10 leading-relaxed">
              I&apos;m currently open for new opportunities. Whether you have a question, a project proposal, or just want to say hi, I&apos;ll try my best to get back to you!
            </motion.p>
            
            <div className="space-y-6 mb-12">
              <motion.a 
                variants={slideInLeft} 
                href={`mailto:${PERSONAL.email}`}
                className="flex items-center gap-4 text-muted hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">{PERSONAL.email}</span>
              </motion.a>
              
              <motion.div 
                variants={slideInLeft} 
                className="flex items-center gap-4 text-muted"
              >
                <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">{PERSONAL.location}</span>
              </motion.div>
            </div>

            <motion.div variants={slideInLeft} className="flex gap-4">
              <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-muted hover:text-white hover:bg-white/10 transition-all hover:-translate-y-1">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-muted hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all hover:-translate-y-1">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href={SOCIALS.leetcode} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-muted hover:text-[#F59E0B] hover:bg-[#F59E0B]/10 transition-all hover:-translate-y-1">
                <Code2 className="w-5 h-5" />
              </a>
              <a href={SOCIALS.codeforces} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-muted hover:text-[#06B6D4] hover:bg-[#06B6D4]/10 transition-all hover:-translate-y-1">
                <Terminal className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={slideInRight}
          >
            <form onSubmit={handleSubmit} className="glass-strong p-8 md:p-10 rounded-3xl border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
              
              <div className="space-y-6 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="How can I help you?"
                  />
                </div>
                
                <MagneticButton 
                  type="submit" 
                  variant="primary" 
                  className="w-full py-4 text-lg mt-4 disabled:opacity-80"
                  disabled={isSubmitting || isSuccess}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : isSuccess ? (
                    <span className="flex items-center gap-2 text-green-100">
                      <CheckCircle className="w-5 h-5" /> Message Sent!
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message <Send className="w-5 h-5" />
                    </span>
                  )}
                </MagneticButton>
              </div>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
