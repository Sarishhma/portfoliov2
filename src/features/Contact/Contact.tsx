
'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { useContact } from './hooks/contact.hook';
import type { ContactFormData } from './types/contact.types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const {
    submitContact,
    isLoading,
    error,
    success,
  } = useContact();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const wasSuccessful = await submitContact(formData);

    if (wasSuccessful) {
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="chat" className="py-16 md:py-24 px-4 sm:px-6 lg:px-16 relative">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 tracking-tight text-foreground font-serif">
            Get In <span className="text-brand-primary">Touch</span>
          </h2>

          <p className="text-foreground-muted max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed px-2">
            Have a question or want to work together? Let's discuss your project.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flat-card p-5 sm:p-8 md:p-12 relative overflow-hidden"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 sm:gap-6 relative z-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-xs font-semibold text-foreground uppercase tracking-wider"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  onChange={handleChange}
                  value={formData.name}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 rounded-sm bg-background border border-surface-border text-foreground placeholder-foreground-muted/60 text-base sm:text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all duration-200 disabled:opacity-50"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold text-foreground uppercase tracking-wider"
                >
                  Your Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  onChange={handleChange}
                  value={formData.email}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 rounded-sm bg-background border border-surface-border text-foreground placeholder-foreground-muted/60 text-base sm:text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all duration-200 disabled:opacity-50"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-xs font-semibold text-foreground uppercase tracking-wider"
              >
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="How can I help you?"
                onChange={handleChange}
                value={formData.message}
                required
                disabled={isLoading}
                rows={5}
                className="w-full px-4 py-3 rounded-sm bg-background border border-surface-border text-foreground placeholder-foreground-muted/60 text-base sm:text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all duration-200 resize-none disabled:opacity-50"
              />
            </div>

            {/* Submit Button & Status */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">

              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-brand-primary hover:bg-brand-primary-hover text-surface font-medium text-sm transition-colors duration-200 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed shadow-none"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>

              {success && (
                <p className="text-sm font-medium text-emerald-700 text-center sm:text-left">
                  {success}
                </p>
              )}

              {error && (
                <p className="text-sm font-medium text-rose-700 text-center sm:text-left">
                  {error}
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

