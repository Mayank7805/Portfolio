import { Mail, Github, Linkedin, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useExternalTarget } from "../../hooks/useExternalTarget";

interface ContactLink {
  icon: LucideIcon;
  label: string;
  href: string;
  download?: string;
}

const contactLinks: ContactLink[] = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:mayankjr2005@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Mayank7805",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mayank-jangra-871880292/",
  },
  {
    icon: FileText,
    label: "Resume",
    href: "/Resume_Mayank.pdf",
    download: "Resume_Mayank.pdf",
  },
];

function SocialIcon({ link }: { link: ContactLink }) {
  const Icon = link.icon;
  const { target, rel } = useExternalTarget();
  const isExternal =
    link.href.startsWith("http") ||
    link.href.startsWith("mailto:") ||
    link.href.endsWith(".pdf");

  return (
    <a
      href={link.href}
      target={isExternal ? target : undefined}
      rel={isExternal ? rel : undefined}
      download={link.download}
      aria-label={link.label}
      className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:-translate-y-1.5 hover:shadow-[0_4px_20px_rgba(6,182,212,0.25)] transition-all duration-300"
    >
      <Icon className="w-5 h-5" />
      {/* Tooltip */}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        {link.label}
      </span>
    </a>
  );
}

export function Contact() {
  return (
    <section id="contact" className="flex flex-col px-8 sm:px-12 lg:px-20 pt-20 lg:pt-28 pb-0">
      <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-cyan-400 mb-4">
        Reach Out
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight">
        Contact
      </h2>
      <div className="max-w-2xl">
        <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-10">
          I'm currently open to internship opportunities and exciting projects.
          Feel free to reach out if you'd like to collaborate or just have a chat
          about technology.
        </p>

        {/* Social Icons Row */}
        <div className="flex items-center gap-5 mb-16">
          {contactLinks.map((link) => (
            <SocialIcon key={link.label} link={link} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/10 pt-8 pb-8 sm:pb-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-sm">Mayank Jangra</p>
            <p className="text-gray-500 text-xs mt-1">
              IT Student &middot; AI Enthusiast &middot; Builder
            </p>
          </div>
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Mayank Jangra.
          </p>
        </div>
      </footer>
    </section>
  );
}
