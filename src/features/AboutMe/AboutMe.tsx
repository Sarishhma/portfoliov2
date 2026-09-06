'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

const stats = [
  { number: '20+', label: 'Projects Finished' },
  { number: '1+', label: 'Years of Experience' },
 
];

export default function AboutMe() {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const statContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const statVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 120, damping: 14 } 
    }
  };

  return (
    <section id="about" className="py-24 px-6 lg:px-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="space-y-6"
          >
            <motion.div variants={textVariants} className="inline-block">
              <span className="badge mb-3 inline-block">
                Get To Know Me
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-serif">
                About <span className="text-brand-primary">Me</span>
              </h2>
            </motion.div>
            
            <motion.p variants={textVariants} className="text-lg text-foreground-muted leading-relaxed">
              I’m <span className="text-foreground font-medium">Sarishma Zimba</span>, a passionate Web developer dedicated to crafting modern, high-performance web applications. I love transforming creative ideas into seamless digital experiences that are both functional and user-friendly. 
            </motion.p>

            <motion.p variants={textVariants} className="text-lg text-foreground-muted leading-relaxed">
              With hands-on experience in React with vite , Nodejs, and API integrations, I focus on building projects that not only look great but also deliver real value. My goal is to continuously learn, innovate, and contribute to meaningful projects that push the boundaries of technology.
            </motion.p>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={statContainerVariants}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  variants={statVariants}
                  className={`flat-card-interactive p-6 flex flex-col justify-center items-center text-center ${index === 2 ? 'col-span-2' : ''}`}
                >
                  <span className="text-3xl md:text-4xl font-extrabold text-foreground mb-1 tracking-tight font-serif">
                    {stat.number}
                  </span>
                  <span className="text-xs font-semibold text-brand-primary uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Quote Card */}
            <motion.div 
              variants={statVariants}
              className="flat-card border-l-4 border-l-brand-primary p-6"
            >
              <p className="text-lg md:text-xl font-medium italic text-foreground-muted text-center leading-snug font-serif">
                "Turning ideas into code, and code into experiences."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}