'use client';

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
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground font-serif"
          >
            Hi I'm <br/>
            <span className="text-foreground">Sarishma Zimba</span>
            <span className="text-brand-primary">.</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-foreground-muted max-w-xl leading-relaxed"
          >
            A passionate Web developer turning innovative ideas into seamless digital experiences, driven to build modern, high-performance applications that make a difference.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a 
              href="/cv/sarishmacv.pdf" 
              download="sarishmacv.pdf"
              className="px-8 py-3 rounded-sm bg-brand-primary text-surface font-medium hover:bg-brand-primary-hover transition-all duration-300"
            >
              Download CV
            </a>
            <a 
              href="#projects"
              className="px-8 py-3 rounded-sm border border-surface-border text-foreground font-medium hover:bg-surface transition-all duration-300"
            >
              Explore My Projects
            </a>
          </motion.div>
        </motion.div>

        {/* Profile/Visual Content placeholder */}
        <motion.div 
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="w-full max-w-sm aspect-[4/5] flat-card p-2 overflow-hidden relative group">
            <div className="w-full h-full relative overflow-hidden rounded-sm bg-surface-muted">
            <img 
  src="/Picture/image.png" 
  alt="Sarishma Zimba" 
  className="w-full h-full object-cover object-[center_20%]"
  onError={(e) => {
    const target = e.currentTarget;
    target.style.display = 'none';
    const parent = target.parentElement;
    if (parent) {
      parent.innerHTML = `
        <div class="w-full h-full bg-surface-muted flex items-center justify-center">
          <span class="text-6xl font-serif font-bold text-foreground opacity-50">SZ</span>
        </div>
      `;
    }
  }}
/>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
