
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
    <section id="chat" className="py-24 px-6 lg:px-16 relative">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-mono tracking-widest text-purple-300/80 uppercase mb-3 block">
            [ Contact ]
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
            Get In <span className="text-purple-300">Touch</span>
          </h2>

          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Have a question or want to work together? Let's discuss your project.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="rounded-2xl bg-purple-950/10 border border-purple-900/30 p-8 md:p-10 backdrop-blur-xl relative overflow-hidden"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 relative z-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-xs font-medium text-slate-300 uppercase tracking-wider"
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
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-purple-900/20 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all duration-200 disabled:opacity-50"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-slate-300 uppercase tracking-wider"
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
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-purple-900/20 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all duration-200 disabled:opacity-50"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-xs font-medium text-slate-300 uppercase tracking-wider"
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
                className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-purple-900/20 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all duration-200 resize-none disabled:opacity-50"
              />
            </div>

            {/* Submit Button & Status */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">

              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-purple-900/40 hover:bg-purple-900/60 border border-purple-700/40 text-purple-100 font-medium text-sm transition-all duration-200 hover:border-purple-500/50 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>

              {success && (
                <p className="text-sm font-medium text-emerald-400">
                  {success}
                </p>
              )}

              {error && (
                <p className="text-sm font-medium text-rose-400">
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

