import "./App.css";

const projects = [
  {
    title: "Project One",
    description: "A cool project that showcases my React skills.",
    link: "#",
  },
  {
    title: "Project Two",
    description: "Another awesome project using TypeScript and Vite.",
    link: "#",
  },
];

const App: React.FC = () => {
  return (
    <div className="text-white p-6">
      {/* Hero Section */}
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold">Roman Perk</h1>
        <p className="text-xl text-gray-400 mt-2">
          Frontend Developer | React & TypeScript Enthusiast
        </p>
      </header>

      {/* Projects Section */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold text-center">Projects</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <a
                href={project.link}
                className="inline-block mt-3 text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <footer className="text-center mt-16">
        <p className="text-gray-400">Find me on:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-blue-400 hover:underline">
            GitHub
          </a>
          <a href="#" className="text-blue-400 hover:underline">
            LinkedIn
          </a>
          <a href="#" className="text-blue-400 hover:underline">
            Twitter
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
