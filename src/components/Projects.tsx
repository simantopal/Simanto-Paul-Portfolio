"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import orvantaImage from "@/asset/Orvanta-ai.png";
import ticketBariImage from "@/asset/ticket-bari.png";
import mediQueueImage from "@/asset/mediqueue.png";

const projects = [
  {
    slug: "orvanta-ai",
    title: "Orvanta AI",
    category: "Full-Stack",
    image: orvantaImage,
    tags: ["Next.js", "TypeScript", "AI"],
    link: "https://orvanta-ai.vercel.app",
    github: "https://github.com/simantopal/Orvanta-Ai",
  },
  {
    slug: "online-ticket-booking",
    title: "Online Ticket Booking Platform",
    category: "Web Apps",
    image: ticketBariImage,
    tags: ["Next.js", "Node.js", "MongoDB"],
    link: "https://online-ticket-booking-platform-six.vercel.app",
    github: "https://github.com/simantopal/online-ticket-booking-platform",
  },
  {
    slug: "mediQueue",
    title: "MediQueue",
    category: "Web Apps",
    image: mediQueueImage,
    tags: ["Next.js", "MongoDB"],
    link: "https://medi-queue-client-side.vercel.app",
    github: "https://github.com/simantopal/MediQueue-client-side",
  },
];

const categories = ["All", "Web Apps", "Full-Stack"];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All"
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <section className="py-20 px-8 bg-bg-secondary/20" id="projects">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4">
            <h2 className="font-h2 text-h2 text-text-primary">My Projects</h2>
            <p className="text-text-secondary">A selection of my recent work across various domains.</p>
          </div>

          <div className="flex bg-bg-card p-1 rounded-full border border-border">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative px-6 py-2 text-label-sm transition-colors rounded-full ${activeTab === cat ? 'text-white' : 'text-text-muted hover:text-text-primary'}`}
              >
                {activeTab === cat && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 bg-accent rounded-full z-0"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: any) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      className="group relative bg-bg-card rounded-3xl overflow-hidden border border-border glass-card"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-60" />

        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={`/projects/${project.slug}`}
            className="w-12 h-12 bg-white text-bg-primary rounded-full flex items-center justify-center shadow-xl"

          >
            <span className="material-symbols-outlined">visibility</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={project.github}
            className="w-12 h-12 bg-white text-bg-primary rounded-full flex items-center justify-center shadow-xl"
          >
            <span className="material-symbols-outlined">code</span>
          </motion.a>
        </div>
      </div>

      <div className="p-8 space-y-4">
        <div className="flex gap-2">
          {project.tags.map((tag: string) => (
            <span key={tag} className="text-[10px] px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 uppercase font-bold tracking-wider">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-h3 text-xl text-text-primary group-hover:text-accent transition-colors">
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
}
