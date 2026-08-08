'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { RiGithubLine, RiExternalLinkLine } from 'react-icons/ri';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with Next.js, Prisma, and Stripe integration.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    github: '#',
    demo: '#',
    image: '/Projects/HamroStore.png'
  },
  {
    title: 'AI Dashboard',
    description: 'Analytics dashboard powered by machine learning for real-time data visualization.',
    tags: ['React', 'Python', 'FastAPI', 'Chart.js'],
    github: '#',
    demo: '#',
    image: '/Projects/movie.png'
  },
  {
    title: 'Social Connect',
    description: 'A social networking app focused on connecting developers worldwide.',
    tags: ['Node.js', 'MongoDB', 'Socket.io', 'React'],
    github: '#',
    demo: '#',
    image: null
  },
  {
    title: 'Portfolio V2',
    description: 'Modern, highly optimized portfolio built with Framer Motion and glassmorphism.',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    github: '#',
    demo: '#',
    image: null
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
          <span className="text-xs font-mono tracking-widest text-blue-400/90 uppercase mb-3 block">
            [ Portfolio ]
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
            Featured <span className="text-blue-400">Projects</span>
          </h2>

          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Curated projects showcasing my skills, creativity, and dedication to building exceptional digital experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={projectVariants}
              whileHover={{ y: -4 }}
              className="group rounded-2xl bg-slate-900/40 border border-slate-800/80 overflow-hidden flex flex-col h-full hover:border-blue-500/40 hover:bg-slate-900/60 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="h-52 w-full bg-slate-950 border-b border-slate-800/80 relative overflow-hidden flex items-center justify-center">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                  />
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-950/30 to-slate-950">
                    <span className="text-5xl font-black text-slate-800 group-hover:text-blue-500/20 transition-colors duration-300 select-none">
                      {project.title.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
              
              {/* Content Body */}
              <div className="p-6 md:p-7 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-2.5 py-1 text-xs font-medium text-blue-300/90 bg-blue-950/50 border border-blue-900/40 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Links */}
                <div className="flex items-center gap-5 pt-4 border-t border-slate-800/80">
                  <a 
                    href={project.github} 
                    className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    <RiGithubLine className="text-base text-slate-400" /> Code
                  </a>
                  <a 
                    href={project.demo} 
                    className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    <RiExternalLinkLine className="text-base text-blue-400" /> Live Demo
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