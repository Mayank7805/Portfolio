import { ExternalLink, Github } from "lucide-react";
import { useExternalTarget } from "../../hooks/useExternalTarget";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: "AI Stock Predictor",
    description:
      "An web application is a digital platform that leverages machine learning (ML), deep learning (DL), and real-time data to forecast stock price movements, analyze market trends, and aid investment decisions.",
    tech: ["Python", "TensorFlow", "React", "FastAPI"],
    github: "https://github.com/Mayank7805/Stock-Market-Prediction",
    demo: "#",
  },
  {
    title: "Real-time Chat Application",
    description:
      "A web-based platform enabling teams to collaborate on projects with live editing, chat, and task management.",
    tech: ["TypeScript", "Node.js", "WebSocket", "MongoDB","Socket.io"],
    github: "https://github.com/Mayank7805/QuickChat",
    demo: "#",
  },
  {
    title: "E-commerce Platform",
    description:
      "specialized digital platforms designed to mimic the curated experience of a physical bookstore while offering the convenience of online shopping",
    tech: ["React Native", "Firebase", "ARKit", "Google Maps API"],
    github: "https://github.com/Mayank7805/BOOKSTORE.git",
    demo: "#",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const { target, rel } = useExternalTarget();
  return (
    <div className="border-l-2 border-cyan-500/30 pl-6 sm:pl-8 py-2 hover:border-cyan-500/60 transition-colors duration-300">
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-3">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm sm:text-base lg:text-lg mb-4 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs sm:text-sm rounded-md border border-cyan-500/20"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 text-sm">
        <a
          href={project.github}
          target={target}
          rel={rel}
          className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
        >
          <Github className="w-4 h-4" />
          Code
        </a>
        <a
          href={project.demo}
          target={target}
          rel={rel}
          className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Demo
        </a>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-20 lg:py-28">
      <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-cyan-400 mb-4">
        My Work
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 tracking-tight">
        Projects
      </h2>
      <div className="space-y-10 sm:space-y-12 max-w-3xl">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
