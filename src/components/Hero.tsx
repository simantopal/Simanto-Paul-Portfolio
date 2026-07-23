"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import simanto from "@/asset/myself1.png";


export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-20 px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
    >
      <div className="flex-grow space-y-8 min-w-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="reveal-text inline-flex items-center gap-2 px-4 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-label-sm tracking-widest"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          Available for Projects
        </motion.div>

        <h1 ref={textRef} className="reveal-text font-h1 text-h1 text-text-primary w-full flex flex-wrap items-center gap-x-4">
          <span>Hello,</span>
          <motion.span
            animate={{ rotate: [0, 15, -15, 15, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1
            }}
            whileHover={{ scale: 1.2, rotate: 0 }}
            className="text-5xl cursor-default inline-block origin-bottom-right"
          >
            👋
          </motion.span>
          <span>I&apos;m <span className="text-accent relative">
            Simanto
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-2 left-0 h-[8px] bg-accent/20 -z-10"
            />
          </span></span>
          <br />
          <span className="text-text-secondary opacity-80">Web Developer</span>
        </h1>

        <p className="reveal-text text-body-lg text-text-secondary w-full max-w-2xl">
          Building high-performance web applications with precision and modern architectural patterns. Specialist in React and Node.js ecosystems.
        </p>

        <div className="reveal-text flex flex-wrap gap-4 pt-4">
          <motion.a
            href="/Simanto-Paul-Resume.pdf"
            download="Simanto-Paul-Resume.pdf"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(79, 122, 153, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg"
          >
            <span className="material-symbols-outlined text-xl">
              download
            </span>

            DOWNLOAD CV
          </motion.a>
        </div>
      </div>

      <div className="relative w-72 h-72 md:w-[480px] md:h-[480px] flex-shrink-0">
        {/* Rotating Gradient Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-20px] rounded-full border border-blue-400/10 opacity-50"
        />

        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 1, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-4 rounded-3xl overflow-hidden border-2 border-white/10 glow-accent group bg-[#0A1621]"
        >
          <Image
            src={simanto}
            alt="Simanto"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          {/* Subtle Color Blend Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1621]/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-text-muted text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
