import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/app/components/icons";
import { contact } from "@/app/data/content";

export default function Footer() {
  return (
    <footer className="bg-ink py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display font-bold text-white text-sm">Aishwarye Jain</p>
          <p className="text-ink-400 text-xs mt-0.5">Product Specialist · Zepto · Bengaluru</p>
        </div>

        <div className="flex items-center gap-2">
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-ink-400 hover:text-white hover:bg-white/10 transition-all" aria-label="LinkedIn">
            <LinkedInIcon size={15} />
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-ink-400 hover:text-white hover:bg-white/10 transition-all" aria-label="GitHub">
            <GitHubIcon size={15} />
          </a>
          <a href={`mailto:${contact.email}`}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-ink-400 hover:text-white hover:bg-white/10 transition-all" aria-label="Email">
            <Mail size={15} />
          </a>
        </div>

        <p className="text-ink-500 text-xs">
          © {new Date().getFullYear()} Aishwarye Jain
        </p>
      </div>
    </footer>
  );
}
