'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-16 py-20 overflow-hidden">
      
      {/* Abstract Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px] animate-pulse-slow -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[100px] animate-pulse-slow -z-10" style={{ animationDelay: '2s' }} />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          className="flex flex-col space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-lg md:text-xl font-medium tracking-wider text-brand-primary uppercase"
          >
            Welcome to my portfolio
          </motion.h2>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground"
          >
            Hi I'm <br/>
            <span className="text-gradient drop-shadow-sm">Sarishma Zimba</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed"
          >
            A passionate Web developer turning innovative ideas into seamless digital experiences, driven to build modern, high-performance applications that make a difference.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a 
              href="/cv/sarishma.pdf" 
              download="sarishma_zimba_cv.pdf"
              className="px-8 py-3 rounded-full bg-brand-primary text-white font-medium hover:bg-brand-secondary transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]"
            >
              Download CV
            </a>
            <a 
              href="#projects"
              className="px-8 py-3 rounded-full glass border border-white/10 text-foreground font-medium hover:bg-white/10 transition-all duration-300"
            >
              Explore My Projects
            </a>
          </motion.div>
        </motion.div>

        {/* Profile/Visual Content placeholder - we will upgrade ProfileCard here */}
        <motion.div 
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="w-full max-w-sm aspect-[4/5] glass-card overflow-hidden relative group">
  {/* Gradient overlay on hover */}
  <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
  
<div className="w-full h-full relative overflow-hidden">
  <img 
    src="/Picture/pic.jpg" 
    alt="Sarishma Zimba" 
    className="w-full h-full object-cover object-center"
    onError={(e) => {
      const target = e.currentTarget;
      target.style.display = 'none';
      const parent = target.parentElement;
      if (parent) {
        parent.innerHTML = `
          <div class="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
            <span class="text-6xl font-bold text-white opacity-50">SZ</span>
          </div>
        `;
      }
    }}
  />
  
  {/* Simple dark overlay for readability */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
  
  {/* Clean content overlay */}
 <div className="w-full h-full relative overflow-hidden">
  <img 
    src="/Picture/pic.jpg" 
    alt="Sarishma Zimba" 
    className="w-full h-full object-cover object-center"
    onError={(e) => {
      const target = e.currentTarget;
      target.style.display = 'none';
      const parent = target.parentElement;
      if (parent) {
        parent.innerHTML = `
          <div class="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
            <span class="text-6xl font-bold text-white opacity-50">SZ</span>
          </div>
        `;
      }
    }}
  />
  
  {/* Dark overlay for readability */}


</div>
</div>
</div>
        </motion.div>
      </div>
    </section>
  );
}
