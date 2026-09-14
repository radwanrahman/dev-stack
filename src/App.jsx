import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import Stack from "./components/Stack";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section id="technologies" className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">

            {/* Section Heading */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Explore the{" "}
                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                  Technologies
                </span>
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Pick one technology per category to build your ideal stack.
              </p>
            </div>

            {/* Technology Area */}
            {loading ? (
              <div className="py-20 text-center">
                <p className="text-sm text-slate-500">
                  Loading technologies...
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">

                {/* Technology Cards */}
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {technologies.map((technology) => (
                    <TechnologyCard
                      key={technology.id}
                      technology={technology}
                    />
                  ))}
                </div>

                {/* Your Stack */}
                <div>
                  <Stack />
                </div>

              </div>
            )}

          </div>
        </section>
      </main>
    </>
  );
}

export default App;