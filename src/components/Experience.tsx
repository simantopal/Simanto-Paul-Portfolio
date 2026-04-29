"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    year: "2022 - PRESENT",
    title: "Software Engineer",
    company: "Tech Solutions Ltd.",
    description: "Led development of high-traffic e-commerce platform using Next.js and Microservices architecture.",
  },
  {
    year: "2021 - 2022",
    title: "Web Developer",
    company: "Creative Digital Agency",
    description: "Built custom CMS solutions and interactive portfolios for international clients.",
  },
];

const education = [
  {
    year: "2017 - 2021",
    title: "B.Sc in Computer Science",
    company: "Technical University of Excellence",
    description: "Focused on Algorithms, Distributed Systems, and Software Engineering principles.",
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-20 px-8 relative overflow-hidden" id="experience">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 relative">
        {/* Experience Column */}
        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <span className="material-symbols-outlined text-accent text-3xl">work</span>
            <h2 className="font-h2 text-h2 text-text-primary">Experience</h2>
          </motion.div>

          <div className="relative pl-8 space-y-12 border-l border-border">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute left-[-1px] top-0 w-[1px] h-full bg-accent shadow-[0_0_10px_rgba(79,122,153,0.5)] z-10"
            />
            
            {experiences.map((exp, i) => (
              <TimelineItem key={i} item={exp} delay={i * 0.2} />
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <span className="material-symbols-outlined text-accent text-3xl">school</span>
            <h2 className="font-h2 text-h2 text-text-primary">Education</h2>
          </motion.div>

          <div className="relative pl-8 space-y-12 border-l border-border">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute left-[-1px] top-0 w-[1px] h-full bg-accent shadow-[0_0_10px_rgba(79,122,153,0.5)] z-10"
            />
            
            {education.map((edu, i) => (
              <TimelineItem key={i} item={edu} delay={i * 0.2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="relative"
    >
      <div className="absolute left-[-37px] top-2 w-4 h-4 rounded-full bg-bg-primary border-2 border-accent z-20">
        <motion.div 
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-accent/30"
        />
      </div>
      <div className="space-y-2">
        <span className="text-label-sm text-accent font-bold tracking-widest">{item.year}</span>
        <h3 className="font-h3 text-xl text-text-primary">{item.title}</h3>
        <p className="text-body-md text-accent/80 font-medium">{item.company}</p>
        <p className="text-body-sm text-text-secondary leading-relaxed pt-2">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
