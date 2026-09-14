import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import Stack from "./components/Stack";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Load technology data
  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        return response.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
        toast.error("Unable to load technologies.");
      });
  }, []);

  // Add technology to stack
  const addToStack = (technology) => {
    const alreadyAdded = selectedStack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setSelectedStack([...selectedStack, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  // Remove one technology
  const removeFromStack = (id) => {
    const technology = selectedStack.find((item) => item.id === id);

    const updatedStack = selectedStack.filter(
      (technology) => technology.id !== id
    );

    setSelectedStack(updatedStack);

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  // Remove all technologies
  const removeAll = () => {
    if (selectedStack.length === 0) {
      return;
    }

    setSelectedStack([]);
    toast.info("All technologies removed from your stack.");
  };

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

            {/* Loading State */}
            {loading && (
              <div className="py-20 text-center">
                <div className="inline-block w-8 h-8 border-2 border-slate-200 border-t-slate-900 rounded-full animate-spin"></div>

                <p className="mt-4 text-sm text-slate-500">
                  Loading technologies...
                </p>
              </div>
            )}

            {/* Error State */}
            {!loading && error && (
              <div className="py-20 text-center">
                <p className="text-base font-medium text-slate-800">
                  Something went wrong.
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  We could not load the technology list.
                </p>

                <button
                  type="button"
                  onClick={() => window.location.reload()}
                  className="mt-5 px-5 py-2.5 rounded-md bg-slate-950 text-white text-sm font-medium hover:bg-slate-800 transition"
                >
                  Try Again
                </button>
              </div>
            )}

            {/* Technology Area */}
            {!loading && !error && (
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">

                {/* Technology Cards */}
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {technologies.map((technology) => (
                    <TechnologyCard
                      key={technology.id}
                      technology={technology}
                      onAdd={addToStack}
                      isAdded={selectedStack.some(
                        (item) => item.id === technology.id
                      )}
                    />
                  ))}
                </div>

                {/* Your Stack */}
                <div>
                  <Stack
                    selectedStack={selectedStack}
                    onRemove={removeFromStack}
                    onRemoveAll={removeAll}
                  />
                </div>

              </div>
            )}

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;