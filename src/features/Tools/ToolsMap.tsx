'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  SiTypescript, 
  SiNodedotjs, 
  SiNextdotjs, 
  SiPrisma,
  SiMongodb,
  SiReact,
  SiTailwindcss,
  SiJavascript, 
  SiHtml5, 
  SiCss,
  SiVite,
  SiGit,
  SiGithub,
  SiFigma
} from 'react-icons/si';

const DBeaverIcon = () => (
  <svg className="w-7 h-7 text-amber-600" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 4.02 2 6.5v11C2 19.98 6.48 22 12 22s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2zm0 3c4.14 0 8 1.34 8 2.5S16.14 10 12 10 4 8.66 4 7.5 7.86 5 12 5zm0 14c-4.14 0-8-1.34-8-2.5V14.2c2.09 1.12 5.02 1.8 8 1.8s5.91-.68 8-1.8V16.5c0 1.16-3.86 2.5-8 2.5zm0-4.5c-4.14 0-8-1.34-8-2.5V9.7c2.09 1.12 5.02 1.8 8 1.8s5.91-.68 8-1.8V12c0 1.16-3.86 2.5-8 2.5z"/>
  </svg>
);

const skills = [
  { name: 'TypeScript', icon: <SiTypescript className="w-7 h-7 text-[#3178C6]" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="w-7 h-7 text-foreground" /> },
  { name: 'React', icon: <SiReact className="w-7 h-7 text-[#61DAFB]" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="w-7 h-7 text-[#5FA04E]" /> },
  { name: 'Prisma', icon: <SiPrisma className="w-7 h-7 text-foreground" /> },
  { name: 'MongoDB', icon: <SiMongodb className="w-7 h-7 text-[#47A248]" /> },
  { name: 'DBeaver', icon: <DBeaverIcon /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-7 h-7 text-[#06B6D4]" /> },
  { name: 'JavaScript', icon: <SiJavascript className="w-7 h-7 text-[#F7DF1E]" /> },
  { name: 'HTML5', icon: <SiHtml5 className="w-7 h-7 text-[#E34F26]" /> },
  { name: 'CSS3', icon: <SiCss className="w-7 h-7 text-[#1572B6]" /> },
  { name: 'Vite', icon: <SiVite className="w-7 h-7 text-[#646CFF]" /> },
  { name: 'Git', icon: <SiGit className="w-7 h-7 text-[#F05032]" /> },
  { name: 'GitHub', icon: <SiGithub className="w-7 h-7 text-foreground" /> },
  { name: 'Figma', icon: <SiFigma className="w-7 h-7 text-[#F24E1E]" /> },
];

export default function ToolsMap() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: "easeOut" } 
    }
  };

  return (
    <section id="tools" className="py-24 px-6 lg:px-16 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge mb-3 inline-block">
            Tech Stack
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-foreground font-serif">
            Tools & <span className="text-brand-primary">Technologies</span>
          </h2>

          <p className="text-foreground-muted max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            My technology stack is constantly evolving. Here are the modern tools and frameworks I use to build robust applications.
          </p>
        </motion.div>

        {/* Minimal Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group p-5 flat-card-interactive flex flex-col items-center justify-center gap-3 cursor-default"
            >
              {/* Icon Container */}
              <div className="p-3 rounded-sm bg-surface-muted border border-surface-border group-hover:border-brand-primary/30 transition-colors duration-200">
                {skill.icon}
              </div>

              {/* Text */}
              <span className="font-medium text-xs md:text-sm text-foreground group-hover:text-brand-primary transition-colors duration-200">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}