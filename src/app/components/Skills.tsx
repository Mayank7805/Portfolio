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

interface Skill {
  name: string;
  icon: IconType;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Java", icon: FaJava },
      { name: "C++", icon: SiCplusplus },
      { name: "SQL", icon: SiPostgresql },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Redux", icon: SiRedux },
      { name: "Vue.js", icon: SiVuedotjs },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Django", icon: SiDjango },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    category: "AI/ML",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "PyTorch", icon: SiPytorch },
      { name: "scikit-learn", icon: SiScikitlearn },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "Firebase", icon: SiFirebase },
      { name: "Linux", icon: SiLinux },
      { name: "VS Code", icon: VscCode },
    ],
  },
];

function SkillBadge({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-white/5 text-gray-300 rounded-lg border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-200 group">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
      <span className="text-sm sm:text-base">{skill.name}</span>
    </div>
  );
}

export function Skills() {
  return (
    <section className="flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-20 lg:py-28">
      <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-cyan-400 mb-4">
        Expertise
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 tracking-tight">
        Skills
      </h2>
      <div className="space-y-10 max-w-3xl">
        {skillCategories.map((category) => (
          <div key={category.category}>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-4">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {category.skills.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}