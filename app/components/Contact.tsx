"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Download, Copy, Check, ArrowRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/app/components/icons";
import { contact } from "@/app/data/content";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-8 sm:py-16 bg-ink relative overflow-hidden">
      {/* Decorative */}
      <div className="animate-blob absolute top-[-150px] right-[-100px] w-[500px] h-[500px] rounded-full bg-coral opacity-[0.06] blur-3xl pointer-events-none" />
      <div className="animate-blob animation-delay-2000 absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-gold opacity-[0.05] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 sm:mb-8"
          >
            <span className="label block mb-4">Contact</span>
            <h2 className="font-display font-extrabold text-white text-2xl sm:text-4xl leading-[1.1] mb-5">
              Have a hard product<br />problem?{" "}
              <span className="text-gradient">Let's talk.</span>
            </h2>
            <p className="text-ink-400 text-lg leading-relaxed max-w-xl">
              Open to APM, PM, and AI Product roles where I can own decisions, work with strong teams, and build at scale.
            </p>
          </motion.div>

          {/* Email click-to-copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onClick={copyEmail}
            className="flex items-center justify-between gap-4 p-3.5 bg-white/5 border border-white/10 rounded-2xl mb-4 cursor-pointer hover:border-coral/40 hover:bg-white/10 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-coral/20 flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-coral" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{contact.email}</p>
                <p className="text-ink-500 text-xs">Click to copy</p>
              </div>
            </div>
            <button className="flex items-center gap-1.5 text-xs font-bold text-ink-400 group-hover:text-coral transition-colors">
              {copied ? (
                <><Check size={13} className="text-emerald-400" /><span className="text-emerald-400">Copied!</span></>
              ) : (
                <><Copy size={13} /> Copy</>
              )}
            </button>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3"
          >
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 transition-all group">
              <LinkedInIcon size={18} className="text-[#0A66C2]" />
              <div>
                <p className="text-xs font-bold text-white">LinkedIn</p>
                <p className="text-ink-500 text-xs">aishwarye-jain</p>
              </div>
              <ArrowRight size={12} className="text-ink-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-white/30 hover:bg-white/10 transition-all group">
              <GitHubIcon size={18} className="text-ink-300" />
              <div>
                <p className="text-xs font-bold text-white">GitHub</p>
                <p className="text-ink-500 text-xs">aishjain02</p>
              </div>
              <ArrowRight size={12} className="text-ink-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href={contact.resume} download
              className="flex items-center gap-3 p-4 bg-coral text-white border border-coral rounded-2xl hover:bg-coral-600 transition-all group shadow-lg shadow-coral/20">
              <Download size={18} />
              <div>
                <p className="text-xs font-bold">Resume</p>
                <p className="text-coral-100 text-xs">Download PDF</p>
              </div>
              <ArrowRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
