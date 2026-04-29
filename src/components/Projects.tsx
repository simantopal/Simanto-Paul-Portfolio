"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Website",
    category: "Web Apps",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJVmO6rNjdyP9alN2vxUqQ1YenRRywl4VRdWOnnK0EDAeNVIP7SPZSqHZrVDF28sbGZ0EDc_4xzDpXdXmbDEjANzjHUPguK2JtMYXXJ1J-S5k6a-FlNdWcguIPeZz7PYG4-oDmZcgc28_hYsBav47wUUOENsfGAmyx9_fPC7proXPTRG84ESP1ox0Ws108umdoK3hqQa05dLUpWVqov82GNL24bSXrWq3TqCnQRo3Kx61CguwqK0lIrSfSmXeGwOAnvxt8TOJfHeg",
    tags: ["React", "Stripe"],
    link: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    category: "Web Apps",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_7qJvlfW9Nsgjakoq0gi0o5PsKgo6rHHBLyc-iCXZD0f2mG8Kf8yAIN-KcXHI5IHlxugDZZcm61dKFhnU7yA6VPZghfp6K6yg90o2uWrjkOIiLrVXT4CfZGYnpBJID9v9bgqb05rLYuK-eVkiEFv8w1n_MCHGAeQL6G1i9E_yFQTyqexG_Omv967NYX-m7YAJ9SRZlkpKfYVoFhWbIa-h1h5mW6t9dNLVpQqTP87RNr9Hxai9dW8mGDRL25MCk3a3aEr0bOupBaU",
    tags: ["Next.js", "Node.js"],
    link: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    category: "UI/UX",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABl5OO-PaLME2DqDCJ_1cYPwwpxFHsz2I_Omt1nBId7mWaUIuRj4U6T4MB2LTOZeJxdf7r45d0NNRdKDj5jLmY3b67Nbht_gM0cJaLRfrGDCS32TEgGdkY2dID66mt7YAt1OUQ1ZNAfrncjR7Us6zj3vd_aesf5uSoSOksfKiSBmLwTa3GtVigqVoI1Wmj5Xx2zdn4_9t4H6ntOGa0K9wum4BAnDWl85NqRjUeBEC17PUQj3lPp9GZaE1T-FZ0NcM320rJZ080zm0",
    tags: ["Framer", "Tailwind"],
    link: "#",
    github: "#",
  },
];

const categories = ["All", "Web Apps", "UI/UX"];

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
            href={project.link}
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
