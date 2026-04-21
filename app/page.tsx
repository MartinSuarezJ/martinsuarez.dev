export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-8 py-16">
      
      {/* HERO */}
      <section className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tight">
          Martin Suarez Jaramillo
        </h1>

        <p className="mt-4 text-xl text-gray-600">
          Mechanical Engineering • Energy Systems • Computational Modeling
        </p>

        <p className="mt-6 text-gray-700 leading-relaxed">
          I build and analyze systems at the intersection of mechanical engineering,
          sustainable energy, and computational simulation. My work focuses on
          energy systems, fluid dynamics, and applied modeling for real-world engineering problems.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="/projects" className="px-4 py-2 bg-black text-white rounded-lg">
            View Projects
          </a>
          <a href="https://github.com" className="px-4 py-2 border border-gray-400 rounded-lg">
            GitHub
          </a>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-4xl mx-auto my-16 border-t" />

      {/* RESEARCH / FOCUS AREAS */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold">Focus Areas</h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium">Energy Systems</h3>
            <p className="text-sm text-gray-600 mt-2">
              Modeling renewable and hybrid energy systems with emphasis on efficiency and scalability.
            </p>
          </div>

          <div>
            <h3 className="font-medium">Fluid & Thermal Systems</h3>
            <p className="text-sm text-gray-600 mt-2">
              Simulation of fluid dynamics and heat transfer in mechanical systems.
            </p>
          </div>

          <div>
            <h3 className="font-medium">Computational Engineering</h3>
            <p className="text-sm text-gray-600 mt-2">
              Numerical methods, simulation tools, and system-level modeling.
            </p>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-4xl mx-auto my-16 border-t" />

      {/* FEATURED PROJECTS */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold">Selected Work</h2>

        <div className="mt-6 space-y-6">
          
          <div className="p-6 border rounded-xl">
            <h3 className="font-medium">Energy System Simulation Framework</h3>
            <p className="text-sm text-gray-600 mt-2">
              A computational model for analyzing multi-source energy systems under dynamic load conditions.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-medium">Fluid Flow Optimization Study</h3>
            <p className="text-sm text-gray-600 mt-2">
              Numerical analysis of turbulence and flow efficiency in constrained geometries.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-medium">Sustainable Systems Modeling</h3>
            <p className="text-sm text-gray-600 mt-2">
              System-level modeling of renewable integration in mechanical infrastructure.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-4xl mx-auto mt-20 text-sm text-gray-500">
        Built with Next.js • Engineering Portfolio
      </footer>

    </main>
  );
}