"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Download, Copy, Check } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/app/components/icons";
import { contact } from "@/app/data/content";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-ink-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="section-label mb-3">Contact</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-ink mb-6">
            Have a hard product problem? Let&apos;s talk.
          </h2>
          <p className="text-ink-500 text-lg mb-12">
            Open to APM, PM and AI Product roles where I can own decisions, work with strong teams, and build at scale.
          </p>

          {/* Email */}
          <div
            className="flex items-center justify-between gap-4 p-5 bg-white border border-ink-200 rounded-xl mb-4 group cursor-pointer hover:border-blue transition-all"
            onClick={copyEmail}
          >
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-blue flex-shrink-0" />
              <span className="font-medium text-ink text-sm">{contact.email}</span>
            </div>
            <button className="flex items-center gap-1.5 text-xs font-semibold text-ink-400 group-hover:text-blue transition-colors">
              {copied ? (
                <><Check size={13} className="text-green-500" /> Copied!</>
              ) : (
                <><Copy size={13} /> Copy</>
              )}
            </button>
          </div>

          {/* Socials */}
          <div className="grid sm:grid-cols-3 gap-3 mb-10">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white border border-ink-200 rounded-xl hover:border-blue hover:shadow-sm transition-all group"
            >
              <LinkedInIcon size={18} className="text-[#0A66C2]" />
              <div>
                <p className="text-xs font-bold text-ink">LinkedIn</p>
                <p className="text-ink-400 text-xs">aishwarye-jain</p>
              </div>
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white border border-ink-200 rounded-xl hover:border-ink hover:shadow-sm transition-all group"
            >
              <GitHubIcon size={18} />
              <div>
                <p className="text-xs font-bold text-ink">GitHub</p>
                <p className="text-ink-400 text-xs">aishjain02</p>
              </div>
            </a>
            <a
              href={contact.resume}
              download
              className="flex items-center gap-3 p-4 bg-blue text-white border border-blue rounded-xl hover:bg-blue-700 transition-all"
            >
              <Download size={18} />
              <div>
                <p className="text-xs font-bold">Resume</p>
                <p className="text-blue-200 text-xs">Download PDF</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
