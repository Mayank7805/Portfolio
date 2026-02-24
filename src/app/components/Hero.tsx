export function Hero() {
  return (
    <section className="hidden lg:flex min-h-screen flex-col justify-center px-8 sm:px-12 lg:px-20 py-16 lg:py-0">
      <div className="mb-6">
        <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-cyan-400 mb-6">
          Portfolio
        </span>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[0.95]">
          Mayank
          <br />
          Jangra
        </h1>
      </div>
      <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 font-light tracking-wide max-w-md">
        IT Student | AI Enthusiast | Builder
      </p>
      <div className="mt-10 flex items-center gap-4">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-black font-medium text-sm rounded-lg hover:bg-cyan-400 transition-colors duration-200"
        >
          Get in Touch
        </a>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-medium text-sm rounded-lg hover:border-cyan-500/40 hover:text-cyan-400 transition-colors duration-200"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}
