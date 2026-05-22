"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Front-end Developer",
    icon: "desktop_windows",
    skills: [
      { name: "Modern React Architecture & Hooks", level: 95 },
      { name: "State Management", level: 90 },
      { name: "Responsive UI with Tailwind CSS", level: 98 },
    ],
    direction: -100,
  },
  {
    title: "Back-end Developer",
    icon: "database",
    skills: [
      { name: "RESTful & GraphQL API Design", level: 85 },
      { name: "Database Optimization (MongoDB)", level: 80 },
      { name: "Authentication & JWT Implementation", level: 88 },
    ],
    direction: 100,
  },
];

export default function Skills() {
  return (
    <section className="py-20 px-8 bg-bg-primary relative" id="skills">
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-h2 text-h2 text-text-primary">My Core Skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: category.direction }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="p-10 rounded-3xl bg-bg-card border border-border glass-card space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-accent">{category.icon}</span>
                </div>
                <h3 className="font-h3 text-h3 text-text-primary">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-label-sm text-text-secondary">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-bg-primary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: i * 0.1, ease: "circOut" }}
                        className="h-full bg-accent relative"
                      >
                        <motion.div
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
