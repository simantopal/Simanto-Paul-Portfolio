"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValue, useSpring, useTransform } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const updateVisibility = () => {
      const currentScrollY = scrollY.get();
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    const unsubscribe = scrollY.onChange(updateVisibility);
    return () => unsubscribe();
  }, [scrollY, lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 flex items-center px-8 h-16 glass-nav"
    >
      <div className="flex-1 flex justify-start">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold text-accent tracking-tighter font-h1 cursor-pointer"
        >
          Mishu
        </motion.div>
      </div>
      
      <div className="hidden md:flex justify-center items-center gap-1">
        {navLinks.map((link) => (
          <MagneticNavLink key={link.name} href={link.href}>
            {link.name}
          </MagneticNavLink>
        ))}
      </div>

      <div className="flex-1 flex justify-end items-center gap-4">
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(79, 122, 153, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-accent text-white px-5 py-2 text-label-sm font-bold rounded-full transition-all"
        >
          LET&apos;S TALK
        </motion.button>
        <motion.span
          whileHover={{ rotate: 90 }}
          className="material-symbols-outlined text-accent text-2xl cursor-pointer"
        >
          terminal
        </motion.span>
      </div>
    </motion.nav>
  );
}

function MagneticNavLink({ children, href }: { children: React.ReactNode; href: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="relative px-4 py-2 text-text-secondary font-medium hover:text-accent transition-colors group"
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-accent/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"
        layoutId="nav-glow"
      />
    </motion.a>
  );
}
