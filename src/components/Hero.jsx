import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="bg-white">
      <div
        className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8
        min-h-[520px] md:min-h-[580px]
        grid grid-cols-1 md:grid-cols-2
        gap-8 lg:gap-12
        items-center
        py-16 md:py-20"
      >
        {/* Hero Text */}
        <div className="max-w-xl">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
            Build Better. Build Smarter.
          </p>

          <h1
            className="mt-4 text-4xl sm:text-5xl lg:text-6xl
            font-bold tracking-[-0.03em]
            leading-[1.05] text-slate-950"
          >
            Build Your Ideal

            <span
              className="block mt-1
              bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600
              bg-clip-text text-transparent"
            >
              Development Stack
            </span>
          </h1>

          <p
            className="mt-6 max-w-lg
            text-base sm:text-lg
            leading-7 text-slate-500"
          >
            Explore frontend, backend, database, and tooling options.
            Compare them side by side and put together the stack that fits
            your next project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#technologies"
              className="inline-flex items-center justify-center
              px-6 py-3 rounded-lg
              text-sm font-medium text-white
              bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600
              shadow-sm
              hover:shadow-md hover:-translate-y-0.5
              transition-all duration-200"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center
              px-6 py-3 rounded-lg
              border border-slate-200 bg-white
              text-sm font-medium text-slate-700
              hover:bg-slate-50 hover:border-slate-300
              transition-all duration-200"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[480px]">
            <img
              src={heroImage}
              alt="Development technology stack"
              className="w-full h-auto object-contain
              transition-transform duration-300
              hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;