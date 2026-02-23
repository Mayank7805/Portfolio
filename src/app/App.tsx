import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

const portraitImg = "/mypic.jpg";

export default function App() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#0a0a0a]">
      {/* Mobile: Portrait image banner at top */}
      <div className="relative w-full h-[60vh] lg:hidden overflow-hidden">
        <img
          src={portraitImg}
          alt="Professional Portrait"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      {/* Left Half — Content */}
      <div className="w-full lg:w-1/2">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>

      {/* Right Half — Sticky Image (Desktop only) */}
      <div className="hidden lg:block lg:w-1/2">
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