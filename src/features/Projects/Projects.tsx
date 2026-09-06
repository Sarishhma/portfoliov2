'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { RiGithubLine, RiExternalLinkLine } from 'react-icons/ri';

const projects = [
  {
    title: 'Bijeshwori Mala Traders',
    description: 'Bijeshwori Mala Traders is an e-commerce website built for a Nepal-based family business that sells handcrafted goods home décor,  jewelry, and traditional clothing from their stores in Thamel and Boudha, Kathmandu. ',
    tags: ['React', 'TypeScript', 'Tailwind CSS','React hook'],
    github: 'https://github.com/Sarishhma/ecommerce.git',
    demo: 'https://bijeshworimalatraders.com/',
    image: '/Projects/BMT.png'
  },
  {
    title: 'Himalayan Neo Tech',
    description: 'A modern and responsive company website designed to showcase the company’s services, products, and information. It provides a professional online presence with a clean interface and easy navigation for visitors.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    github: '#',
    demo: 'https://www.himalayaneotech.com/',
    image: '/Projects/Himalayan.png'
  },
  {
    title: 'Health Pal',
    description: 'HealthPal, a platform aimed at making healthcare in Nepal more transparent and accessible.',
    tags: ['Node.js', 'MongoDB', 'Socket.io', 'Next.js','Typescript'],
    github: 'https://github.com/Sarishhma/Healthpal.git',
    demo: 'https://healthpal-three.vercel.app/',
    image: '/Projects/healthpal.png'
  },
  {
    title: ' Sudarshan Security Website',
    description: 'A modern, professional security service website built to showcase the services, trust, and reliability of Sudarshan Security',
    tags: ['React', 'Framer Motion', 'Tailwind CSS','Javascript'],
    github: 'https://github.com/Sarishhma/sudarshansecurity.git',
    demo: 'https://www.sudarshansecurity.com.np/',
    image: '/Projects/sudarshanSecurity.png'
  }
];

export default function Projects() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.12 } 
    }
  };

  const projectVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section id="projects" className="py-24 px-6 lg:px-16 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge mb-3 inline-block">
            Portfolio
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-foreground font-serif">
            Featured <span className="text-brand-primary">Projects</span>
          </h2>

          <p className="text-foreground-muted max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Curated projects showcasing my skills, creativity, and dedication to building exceptional digital experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={projectVariants}
              className="flat-card-interactive flex flex-col h-full overflow-hidden"
            >
              {/* Image Container */}
              <div className="h-56 w-full bg-surface-muted border-b border-surface-border relative overflow-hidden flex items-center justify-center">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover" 
                  />
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center bg-surface-muted">
                    <span className="text-4xl font-serif font-bold text-foreground-muted/40 select-none">
                      {project.title.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
              
              {/* Content Body */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold font-serif text-foreground mb-3">
                  {project.title}
                </h3>

                <p className="text-foreground-muted text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-2.5 py-1 text-xs font-medium text-brand-primary bg-brand-primary-tint border border-brand-primary/20 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Links */}
                <div className="flex items-center gap-6 pt-4 border-t border-surface-border mt-auto">
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-foreground-muted hover:text-foreground transition-colors"
                  >
                    <RiGithubLine className="text-base" /> Source Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-brand-primary hover:text-brand-primary-hover transition-colors ml-auto"
                  >
                    View Project <RiExternalLinkLine className="text-base" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}