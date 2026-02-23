import { Mail, Github, Linkedin, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useExternalTarget } from "../../hooks/useExternalTarget";

interface ContactLink {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}

const contactLinks: ContactLink[] = [
  {
    icon: Mail,
    label: "Email",
    value: "mayankjr2005@gmail.com",
    href: "mailto:mayankjr2005@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@Mayank7805",
    href: "https://github.com/Mayank7805",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Mayank Jangra",
    href: "https://www.linkedin.com/in/mayank-jangra-871880292/",
  },
  {
    icon: FileText,
    label: "Resume",
    value: "Download PDF",
    href: "/Resume_Mayank.pdf",
  },
];

function ContactCard({ link }: { link: ContactLink }) {
  const Icon = link.icon;
  const { target, rel } = useExternalTarget();
  const isExternal = link.href.startsWith("http") || link.href.startsWith("mailto:") || link.href.endsWith(".pdf");
  return (
    <a
      href={link.href}
      target={isExternal ? target : undefined}
      rel={isExternal ? rel : undefined}
      download={link.label === "Resume" ? "Resume_Mayank.pdf" : undefined}
      className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-200 group"
    >
      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors shrink-0">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs sm:text-sm text-gray-500 mb-1">{link.label}</div>
        <div className="text-base sm:text-lg text-white group-hover:text-cyan-400 transition-colors truncate">
          {link.value}
        </div>
      </div>
    </a>
  );
}

export function Contact() {
  return (
    <section id="contact" className="flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-20 lg:py-28">
      <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-cyan-400 mb-4">
        Reach Out
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 tracking-tight">
        Contact
      </h2>
      <div className="max-w-2xl">
        <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-10 sm:mb-12">
          I'm currently open to internship opportunities and exciting projects.
          Feel free to reach out if you'd like to collaborate or just have a chat
          about technology.
        </p>
        <div className="space-y-4 sm:space-y-6">
          {contactLinks.map((link) => (
            <ContactCard key={link.label} link={link} />
          ))}
        </div>
      </div>
      <div className="mt-16 sm:mt-20 pt-10 sm:pt-12 border-t border-white/10">
        <p className="text-gray-500 text-xs sm:text-sm">
          &copy; 2026 Mayank Jangra. Built with React &amp; Tailwind CSS.
        </p>
      </div>
    </section>
  );
}
