"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 px-8 bg-bg-primary border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-4 text-center md:text-left">
          <div className="text-2xl font-bold text-accent tracking-tighter font-h1">
            Simanto
          </div>
          <p className="text-body-sm text-text-muted max-w-xs">
            Built with Next.js, Framer Motion, and GSAP.
            Designed with precision and passion.
          </p>
        </div>

        <div className="flex gap-6">
          <SocialLink
            href="https://github.com/simantopal"
            type="devicon"
            icon="github"
          />
          <SocialLink
            href="https://www.linkedin.com/in/simanto-paul14/"
            type="devicon"
            icon="linkedin"
          />
          <SocialLink
            href="mailto:simantop13@gmail.com"
            type="material"
            icon="mail"
          />
        </div>

        <div className="text-body-sm text-text-muted">
          © 2026 Simanto. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon, href, type }: { icon: string; href: string; type: 'devicon' | 'material' }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -5, borderColor: "#4F7A99" }}
      className="w-12 h-12 rounded-xl bg-bg-card border border-border flex items-center justify-center text-text-secondary transition-all group"
    >
      {type === 'devicon' ? (
        <Image
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
          alt={icon}
          width={24}
          height={24}
          className="opacity-70 group-hover:opacity-100 transition-opacity"
        />
      ) : (
        <span className="material-symbols-outlined text-2xl group-hover:text-accent transition-colors">
          {icon}
        </span>
      )}
    </motion.a>
  );
}
