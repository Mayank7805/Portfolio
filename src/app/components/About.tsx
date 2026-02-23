interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timeline: TimelineItem[] = [
  {
    year: "2026 – Present",
    title: "Core Team Member – IDEA Club, GGSIPU",
    description:
      "Contributing to strategic planning and execution of innovation-driven technical initiatives while fostering a collaborative tech ecosystem within the university.",
  },
  {
    year: "2025",
    title: "Technical Event Organizer – IEEE Student Branch",
    description:
      "Managed and coordinated technical competitions and multi-day events, ensuring smooth logistics and strong participant engagement.",
  },
  {
    year: "2025",
    title: "Web Wars Event Organizer",
    description:
      "Led the execution of a competitive web development event, handling registrations, technical setup, and judging coordination.",
  },
];

function TimelineCard({ item, isLast }: { item: TimelineItem; isLast: boolean }) {
  return (
    <div className="relative pl-8 sm:pl-10 group">
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-[7px] sm:left-[9px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/40 to-transparent" />
      )}

      {/* Dot */}
      <div className="absolute left-0 top-[6px] w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-cyan-500/60 bg-[#0a0a0a] group-hover:border-cyan-400 group-hover:shadow-[0_0_8px_rgba(6,182,212,0.4)] transition-all duration-300" />

      {/* Year badge */}
      <span className="inline-block text-xs font-medium tracking-wider uppercase text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-3 py-1 mb-2">
        {item.year}
      </span>

      <h4 className="text-base sm:text-lg font-semibold text-white mt-1 group-hover:text-cyan-300 transition-colors duration-200">
        {item.title}
      </h4>

      <p className="text-gray-400 text-sm sm:text-base mt-2 leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}

export function About() {
  return (
    <section className="flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-20 lg:py-28">
      <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-cyan-400 mb-4">
        About Me
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight">
        About
      </h2>
      <div className="space-y-6 text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
        <p>
          I'm a passionate software engineering student focused on building intelligent,
          user-centered applications. My interests span across artificial intelligence,
          full-stack development, and creating tools that solve real-world problems.
        </p>
        <p>
          Currently pursuing my degree in Information Technology, I spend my time learning
          new technologies, contributing to open source, and building projects that push
          my technical boundaries.
        </p>
        <p>
          I believe in clean code, continuous learning, and the power of technology to
          make a meaningful impact.
        </p>
      </div>

      {/* Leadership Timeline */}
      <div className="mt-16 sm:mt-20 max-w-2xl">
        <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-cyan-400 mb-4">
          Experience
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-10 tracking-tight">
          Leadership &amp; Positions
        </h3>

        <div className="space-y-10 sm:space-y-12">
          {timeline.map((item, index) => (
            <TimelineCard
              key={item.title}
              item={item}
              isLast={index === timeline.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
