import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/app/components/icons";
import { hero } from "@/app/data/content";

const navLinks = [
  { label: "Work", href: "#experience" },
  { label: "Builds", href: "#builds" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-coral flex items-center justify-center text-white font-bold font-display text-sm">
              AJ
            </div>
            <div>
              <div className="font-display font-bold text-white text-sm">
                Aishwarye Jain
              </div>
              <div className="text-ink-300 text-xs">Product Builder</div>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-ink-300 hover:text-white text-sm font-medium transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2">
            <a
              href={hero.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-ink-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <LinkedInIcon size={16} />
            </a>
            <a
              href={hero.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-ink-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <GitHubIcon size={16} />
            </a>
            <a
              href={hero.links.email}
              aria-label="Email"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-ink-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-ink-400 text-xs">
          <span>© {year} Aishwarye Jain. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Built with Next.js & Tailwind CSS
            <span className="text-coral ml-1">♥</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
