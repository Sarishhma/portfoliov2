'use client';

import React from 'react';
import { RiGithubLine, RiLinkedinLine, RiInstagramLine } from 'react-icons/ri';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 lg:px-16 border-t border-slate-800/80 bg-slate-950/60 relative mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1.5">
          <a href="#home" className="text-2xl font-bold text-white tracking-tight group">
            Sarishma<span className="text-blue-400 group-hover:text-blue-300 transition-colors">.</span>
          </a>
          <p className="text-xs md:text-sm text-slate-400">
            Building digital experiences that matter.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-3">
          <a 
            href="https://github.com/Sarishhma" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
            className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-slate-800/60 transition-all duration-200"
          >
            <RiGithubLine className="text-lg" />
          </a>
          <a 
            href="https://www.linkedin.com/in/sarishma-zimba-62508936a/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
            className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-slate-800/60 transition-all duration-200"
          >
            <RiLinkedinLine className="text-lg" />
          </a>
          <a 
            href="https://www.instagram.com/sarishhma/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram"
            className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-pink-400 hover:border-pink-500/30 hover:bg-slate-800/60 transition-all duration-200"
          >
            <RiInstagramLine className="text-lg" />
          </a>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-slate-800/60 text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-500">
          © {currentYear} Sarishma Zimba. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-slate-500">
          <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}