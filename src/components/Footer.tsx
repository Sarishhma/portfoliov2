'use client';

import React from 'react';
import { RiGithubFill, RiLinkedinFill, RiInstagramLine } from 'react-icons/ri';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 lg:px-16 border-t border-surface-border bg-surface relative mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand / Copy */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold tracking-tight text-foreground font-serif">
            Sarishma<span className="text-brand-primary">.</span>
          </h3>
          <p className="text-sm text-foreground-muted mt-2">
            © {currentYear} Sarishma Zimba. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a 
            href="https://github.com/Sarishhma" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 rounded-sm bg-surface-muted border border-surface-border text-foreground-muted hover:text-foreground hover:border-brand-primary/40 transition-all duration-200"
            title="GitHub"
          >
            <RiGithubFill className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/sarishma-zimba-62508936a/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 rounded-sm bg-surface-muted border border-surface-border text-foreground-muted hover:text-brand-primary hover:border-brand-primary/40 transition-all duration-200"
            title="LinkedIn"
          >
            <RiLinkedinFill className="w-5 h-5" />
          </a>
          <a 
            href="https://www.instagram.com/sarishhma/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 rounded-sm bg-surface-muted border border-surface-border text-foreground-muted hover:text-brand-primary hover:border-brand-primary/40 transition-all duration-200"
            title="Instagram"
          >
            <RiInstagramLine className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}