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
    </section>
  );
}
