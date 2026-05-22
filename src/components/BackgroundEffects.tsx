"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BackgroundEffects() {
  const [stars, setStars] = useState<any[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 50 }, () => ({
      opacity: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: Math.random() * 0.5 + 0.5,
      duration: 3 + Math.random() * 5,
      delay: Math.random() * 5,
    }));

    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-bg-primary">
      {/* Noise Texture */}
      <div className="noise-bg" />

      {/* Star Field */}
      <div className="absolute inset-0 z-0">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: star.opacity,
              x: `${star.x}%`,
              y: `${star.y}%`,
              scale: star.scale,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
            }}
            className="absolute w-[2px] h-[2px] rounded-full bg-white shadow-[0_0_10px_white]"
          />
        ))}
      </div>

      {/* Gradient Blob 1 */}
      <motion.div
        animate={{
          x: [0, 150, -100, 0],
          y: [0, -150, 100, 0],
          scale: [1, 1.4, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-15%] left-[-15%] h-[60%] w-[60%] rounded-full bg-blue-600/10 blur-[140px]"
      />

      {/* Gradient Blob 2 */}
      <motion.div
        animate={{
          x: [0, -120, 180, 0],
          y: [0, 200, -100, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-15%] right-[-15%] h-[50%] w-[50%] rounded-full bg-cyan-500/5 blur-[120px]"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #3B82F6 1px, transparent 1px),
            linear-gradient(to bottom, #3B82F6 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />
    </div>
  );
}