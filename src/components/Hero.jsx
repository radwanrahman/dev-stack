function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Hero Text */}
        <div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Build Your Ideal
            <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
            Explore frontend, backend, database, and tooling options to build
            the right stack for your next project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#technologies"
              className="px-6 py-3 rounded-full text-white font-medium text-center bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 hover:opacity-90 transition"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="px-6 py-3 rounded-full border border-gray-300 text-gray-800 font-medium text-center hover:bg-gray-50 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center">
          <img
            src="/assets/banner-stack.png"
            alt="Development technology stack"
            className="w-full max-w-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;