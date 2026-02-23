import { useState, useRef, useCallback } from "react";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiDjango,
  SiMongodb,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiGit,
  SiDocker,
  SiAmazonwebservices,
  SiFirebase,
  SiLinux,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import type { IconType } from "react-icons";

/* ─── Types ─── */
interface Skill {
  name: string;
  icon: IconType;
  color: string; // brand color for the icon
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

/* ─── Data ─── */
const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "SQL", icon: SiPostgresql, color: "#4169E1" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    category: "AI / ML",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "VS Code", icon: VscCode, color: "#007ACC" },
    ],
  },
];

/* ─── 3D Tilt Skill Card ─── */
function SkillCard({ skill, delay }: { skill: Skill; delay: number }) {
  const Icon = skill.icon;
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setTilt({
        x: (y - 0.5) * -20,
        y: (x - 0.5) * 20,
      });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <div
      className="group"
      style={{
        perspective: "600px",
        animationDelay: `${delay}ms`,
      }}
    >
      <div
        ref={cardRef}
        onMouseEnter={() => setHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative flex flex-col items-center justify-center w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] rounded-lg cursor-pointer transition-all duration-300 ease-out"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hovered ? "translateZ(12px) scale(1.2)" : "scale(1)"}`,
          transformStyle: "preserve-3d",
          background: hovered
            ? `radial-gradient(circle at 50% 50%, ${skill.color}30 0%, ${skill.color}08 60%, transparent 100%)`
            : `radial-gradient(circle at 50% 50%, ${skill.color}12 0%, transparent 80%)`,
          border: hovered
            ? `1px solid ${skill.color}80`
            : `1px solid ${skill.color}30`,
          boxShadow: hovered
            ? `0 0 24px ${skill.color}50, 0 8px 32px rgba(0,0,0,0.4), inset 0 0 16px ${skill.color}15`
            : `0 0 8px ${skill.color}15, 0 2px 8px rgba(0,0,0,0.2)`,
          backdropFilter: "blur(8px)",
        }}
      >
        {/* Icon */}
        <Icon
          style={{
            color: skill.color,
            filter: hovered ? `drop-shadow(0 0 10px ${skill.color}90) drop-shadow(0 0 20px ${skill.color}40)` : `drop-shadow(0 0 4px ${skill.color}40)`,
            transition: "all 0.3s ease",
            width: hovered ? "20px" : "18px",
            height: hovered ? "20px" : "18px",
          }}
        />

        {/* Glow ring on hover */}
        <div
          className="absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none"
          style={{
            opacity: hovered ? 1 : 0,
            background: `conic-gradient(from 0deg, ${skill.color}20, transparent, ${skill.color}20, transparent)`,
          }}
        />

        {/* Name tooltip below card */}
        <div
          className="absolute whitespace-nowrap pointer-events-none transition-all duration-300 z-10 flex justify-center"
          style={{
            bottom: "-22px",
            left: "50%",
            transform: `translateX(-50%) ${hovered ? "translateY(0)" : "translateY(-6px)"}`,
            opacity: hovered ? 1 : 0,
          }}
        >
          <span
            className="px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-medium text-center block"
            style={{
              background: `${skill.color}20`,
              color: skill.color,
              border: `1px solid ${skill.color}40`,
              backdropFilter: "blur(8px)",
              textShadow: `0 0 10px ${skill.color}60`,
            }}
          >
            {skill.name}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Skills Section ─── */
export function Skills() {
  return (
    <section className="relative flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-20 lg:py-28 overflow-hidden">
      <div className="relative z-10">
        <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-cyan-400 mb-4">
          Expertise
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-14 tracking-tight">
          Skills
        </h2>

        <div className="space-y-14 max-w-3xl">
          {skillCategories.map((category) => (
            <div key={category.category}>
              <h3 className="text-base sm:text-lg font-semibold text-white/80 mb-6 tracking-wide uppercase">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-4 sm:gap-5">
                {category.skills.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} delay={i * 60} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}