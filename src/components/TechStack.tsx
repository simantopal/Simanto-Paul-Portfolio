"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express", icon: "express" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "HTML5", icon: "html5" },
  { name: "CSS3", icon: "css3" },
  { name: "Tailwind", icon: "tailwindcss" },
  { name: "Sass", icon: "sass" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Figma", icon: "figma" },
];

export default function TechStack() {
  return (
    <section className="py-20 bg-bg-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="font-h2 text-h2 text-text-primary">Technologies Stack</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            I work with the most modern and performant technologies to build scalable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {technologies.map((tech, i) => (
            <TechCard key={tech.name} tech={tech} delay={i * 0.05} />
          ))}
        </div>
        
        {/* Infinite Marquee for more techs (Simulated with duplicates for demo) */}
        <div className="pt-20 overflow-hidden relative group">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg-primary to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg-primary to-transparent z-10" />
          
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 whitespace-nowrap"
          >
            {[...technologies, ...technologies].map((tech, i) => (
              <span key={i} className="text-h2 font-bold text-text-muted/10 uppercase tracking-tighter">
                {tech.name} • 
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TechCard({ tech, delay }: { tech: any; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 10, 
        rotateX: -10,
        boxShadow: "0 20px 40px rgba(0,0,0,0.3)" 
      }}
      className="p-6 rounded-2xl bg-bg-card border border-border flex flex-col items-center gap-4 transition-colors hover:border-accent/50 cursor-default transform-style-3d perspective-1000"
    >
      <div className="w-12 h-12 relative flex items-center justify-center">
        <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <Image 
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
          alt={tech.name}
          width={40}
          height={40}
          className="relative z-10 brightness-90 contrast-125"
        />
      </div>
      <span className="text-label-sm text-text-secondary font-medium">{tech.name}</span>
    </motion.div>
  );
}
