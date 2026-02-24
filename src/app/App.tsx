import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { SkillsBackground } from "./components/SkillsBackground";

const portraitImg = "/mypic.jpg";

export default function App() {
  return (
    <div className="relative flex flex-col lg:flex-row min-h-screen bg-[#0a0a0a]">
      {/* Three.js animated background across entire page */}
      <SkillsBackground />
      {/* Mobile: Full-screen hero with portrait + overlay */}
      <div className="relative z-10 w-full h-screen lg:hidden overflow-hidden">
        <img
          src={portraitImg}
          alt="Professional Portrait"
          className="w-full h-full object-cover object-top"
        />
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent opacity-70" />

        {/* Hero content overlay */}
        <div className="absolute inset-x-0 bottom-0 px-8 pb-12 flex flex-col">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-cyan-400 mb-4">
            Portfolio
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight leading-[0.95] mb-4">
            Mayank
            <br />
            <span className="text-cyan-400">Jangra</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 font-light tracking-wide mb-8">
            IT Student · AI Enthusiast · Builder
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-black font-semibold text-sm rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/25"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-medium text-sm rounded-full hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-300 backdrop-blur-sm"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-50">
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </div>
      </div>

      {/* Left Half — Content */}
      <div className="relative z-10 w-full lg:w-1/2">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>

      {/* Right Half — Sticky Image (Desktop only) */}
      <div className="relative z-10 hidden lg:block lg:w-1/2">
        <div className="sticky top-0 h-screen overflow-hidden">
          <img
            src={portraitImg}
            alt="Professional Portrait"
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />

          {/* Subtle gradient from left edge */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
}