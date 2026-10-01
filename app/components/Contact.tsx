"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Download, Send, CheckCircle } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/app/components/icons";
import { contact } from "@/app/data/content";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto as fallback — replace with Formspree/Resend for production
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:${contact.email}?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const socials = [
    {
      label: "LinkedIn",
      href: contact.linkedin,
      icon: <LinkedInIcon size={20} />,
      color: "#0A66C2",
    },
    {
      label: "GitHub",
      href: contact.github,
      icon: <GitHubIcon size={20} />,
      color: "#1A1A2E",
    },
    {
      label: "Email",
      href: `mailto:${contact.email}`,
      icon: <Mail size={20} />,
      color: "#FF6B4A",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-coral-50 text-coral text-sm font-semibold rounded-full mb-4">
            Contact
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-ink">
            {contact.cta}
          </h2>
          <p className="text-ink-400 mt-4 text-lg">{contact.subtext}</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left — Social Links + Resume */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Social cards */}
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target={s.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-cream rounded-2xl border border-cream-200 hover:border-coral-200 hover:shadow-md hover:-translate-y-0.5 transition-all group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm"
                  style={{ backgroundColor: s.color }}
                >
                  {s.icon}
                </div>
                <div>
                  <div className="font-semibold text-ink text-sm">{s.label}</div>
                  <div className="text-ink-400 text-xs truncate max-w-48">
                    {s.label === "Email"
                      ? contact.email
                      : s.label === "LinkedIn"
                      ? "aishwarye-jain"
                      : "aishjain02"}
                  </div>
                </div>
                <div className="ml-auto text-ink-300 group-hover:text-coral transition-colors">
                  →
                </div>
              </a>
            ))}

            {/* Resume Download */}
            <a
              href={contact.resume}
              download
              className="flex items-center justify-center gap-2 px-5 py-4 bg-coral text-white font-semibold rounded-2xl hover:bg-coral-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 p-12 bg-cream rounded-3xl border border-cream-200 text-center h-full"
              >
                <CheckCircle size={48} className="text-coral" />
                <h3 className="font-display font-bold text-2xl text-ink">
                  Message sent!
                </h3>
                <p className="text-ink-400">
                  Your email client should have opened. Talk soon!
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-cream rounded-3xl border border-cream-200 p-8 flex flex-col gap-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-ink-500">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="px-4 py-3 bg-white rounded-xl border border-cream-200 text-ink placeholder:text-ink-300 text-sm focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-ink-500">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="px-4 py-3 bg-white rounded-xl border border-cream-200 text-ink placeholder:text-ink-300 text-sm focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-ink-500">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="What's on your mind?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="px-4 py-3 bg-white rounded-xl border border-cream-200 text-ink placeholder:text-ink-300 text-sm focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-coral text-white font-semibold rounded-xl hover:bg-coral-600 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                >
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
