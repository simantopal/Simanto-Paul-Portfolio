"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Projects Done", value: 15, suffix: "+" },
  { label: "Technologies", value: 10, suffix: "+" },
];

export default function About() {
  return (
    <section className="py-20 px-8 relative" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-h2 text-h2 text-text-primary"
          >
            About me
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body-lg text-text-secondary leading-relaxed"
          >
            I am a results-driven Software Developer with a passion for creating seamless user experiences. With over 3 years of experience in the tech industry, I have developed a strong foundation in full-stack development. I focus on writing clean, maintainable code and optimizing application performance.
          </motion.p>
          
          <div className="grid grid-cols-3 gap-4 pt-4">
            {stats.map((stat, i) => (
              <CounterCard key={stat.label} stat={stat} delay={i * 0.1} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <AboutCard 
            title="Design" 
            icon="palette" 
            text="Crafting beautiful interfaces with modern aesthetics." 
            color="bg-accent/20"
          />
          <AboutCard 
            title="Performance" 
            icon="bolt" 
            text="Optimizing for speed and efficiency." 
            color="bg-accent/10"
            delay={0.2}
          />
          <AboutCard 
            title="Clean Code" 
            icon="code" 
            text="Writing maintainable and scalable solutions." 
            color="bg-accent/10"
            delay={0.1}
          />
          <AboutCard 
            title="Innovation" 
            icon="lightbulb" 
            text="Exploring new technologies and patterns." 
            color="bg-accent/20"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}

function CounterCard({ stat, delay }: { stat: any; delay: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = stat.value;
    const duration = 2000;
    let timer: any;

    const run = () => {
      const step = end / (duration / 16);
      timer = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        run();
        observer.disconnect();
      }
    });

    const el = document.getElementById(`stat-${stat.label}`);
    if (el) observer.observe(el);

    return () => clearInterval(timer);
  }, [stat.value, stat.label]);

  return (
    <motion.div 
      id={`stat-${stat.label}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="p-6 rounded-2xl bg-bg-card border border-border flex flex-col items-center justify-center text-center"
    >
      <div className="text-h2 font-bold text-accent">
        {count}{stat.suffix}
      </div>
      <div className="text-body-sm text-text-muted">{stat.label}</div>
    </motion.div>
  );
}

function AboutCard({ title, icon, text, color, delay = 0 }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -10, rotateZ: 2 }}
      className="p-8 rounded-3xl bg-bg-card border border-border glass-card space-y-4"
    >
      <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center`}>
        <span className="material-symbols-outlined text-accent">{icon}</span>
      </div>
      <h3 className="font-h3 text-xl text-text-primary">{title}</h3>
      <p className="text-body-sm text-text-secondary">{text}</p>
    </motion.div>
  );
}
