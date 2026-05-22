"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 w-full z-50 flex items-center px-8 h-16 glass-nav"
      >
        <div className="flex-1 flex justify-start">
          <Logo />
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
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-white px-5 py-2 text-label-sm font-bold rounded-full transition-all"
          >
            LET&apos;S TALK
          </motion.button>
          
          <button 
            className="md:hidden text-accent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>

          <motion.span
            whileHover={{ rotate: 90 }}
            className="hidden md:block material-symbols-outlined text-accent text-2xl cursor-pointer"
          >
            terminal
          </motion.span>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            className="fixed top-16 left-0 w-full z-[40] md:hidden glass-nav border-b border-accent/20 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-text-primary hover:text-accent transition-colors flex items-center justify-between group"
                >
                  {link.name}
                  <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">
                    arrow_forward
                  </span>
                </motion.a>
              ))}
              <div className="pt-6 border-t border-border flex justify-between items-center">
                <div className="flex gap-4">
                  <SocialIcon name="github" />
                  <SocialIcon name="linkedin" />
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent text-white px-6 py-3 rounded-xl font-bold text-sm"
                >
                  HIRE ME
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Logo() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 cursor-pointer group"
    >
      <div className="relative w-10 h-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-2 border-dashed border-accent/30 rounded-lg"
        />
        <div className="absolute inset-1 bg-accent/10 rounded-lg flex items-center justify-center border border-accent/20 overflow-hidden">
          <span className="text-xl font-bold text-accent font-h1 group-hover:scale-110 transition-transform">S</span>
          {/* Subtle Glow */}
          <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
      <div className="hidden sm:flex flex-col leading-none">
        <span className="text-sm font-bold tracking-tighter text-text-primary">SIMANTO</span>
        <span className="text-[10px] font-medium text-accent tracking-[0.2em]">WEB DEV</span>
      </div>
    </motion.div>
  );
}

function SocialIcon({ name }: { name: string }) {
  return (
    <motion.a
      whileHover={{ scale: 1.2, color: "#3B82F6" }}
      href="#"
      className="text-text-muted transition-colors"
    >
      <img 
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`}
        className="w-8 h-8 opacity-60 hover:opacity-100 transition-opacity"
        alt={name}
      />
    </motion.a>
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
