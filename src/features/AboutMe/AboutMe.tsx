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
    <section id="about" className="py-24 px-6 lg:px-16 relative overflow-hidden bg-slate-950/50">
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
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full border border-brand-primary/20 mb-3 inline-block">
                Get To Know Me
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                About <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Me</span>
              </h2>
            </motion.div>
            
            <motion.p variants={textVariants} className="text-lg text-slate-300 leading-relaxed">
              I’m <span className="text-white font-medium">Sarishma Zimba</span>, a passionate Web developer dedicated to crafting modern, high-performance web applications. I love transforming creative ideas into seamless digital experiences that are both functional and user-friendly. 
            </motion.p>

            <motion.p variants={textVariants} className="text-lg text-slate-400 leading-relaxed">
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
                  className={`group relative overflow-hidden rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md p-6 flex flex-col justify-center items-center text-center transition-all duration-300 hover:border-brand-primary/40 hover:bg-slate-900/80 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/5 ${index === 2 ? 'col-span-2' : ''}`}
                >
                  {/* Subtle inner hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <span className="text-3xl md:text-4xl font-extrabold text-white mb-1 tracking-tight bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text group-hover:text-transparent">
                    {stat.number}
                  </span>
                  <span className="text-xs font-semibold text-brand-primary/90 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Quote Card */}
            <motion.div 
              variants={statVariants}
              className="relative overflow-hidden rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-md p-6 border-l-4 border-l-brand-primary shadow-lg"
            >
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-brand-primary/10 rounded-full blur-2xl pointer-events-none" />
              <p className="text-lg md:text-xl font-medium italic text-slate-300 text-center leading-snug">
                "Turning ideas into code, and code into experiences."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Lighting Elements */}
      <div className="absolute -left-[10%] top-[20%] w-[40%] h-[50%] bg-brand-primary/15 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute -right-[10%] bottom-[10%] w-[35%] h-[40%] bg-indigo-500/10 rounded-full blur-[140px] -z-10 pointer-events-none" />
    </section>
  );
}