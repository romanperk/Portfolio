import { Link } from "react-scroll";

const navigation = [
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
];

const projects = [
  {
    name: "BeerMeter",
    description: "A cool project that showcases my React skills.",
    link: "https://fe-beer-meter.vercel.app/",
  },
];

export default function Example() {
  return (
    <div className="bg-gray-900 text-white min-h-screen w-full">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex gap-x-12 mx-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                smooth={true}
                duration={700}
                className="text-sm font-semibold text-gray-300 hover:text-white cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <div id="home" className="relative isolate lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-700 to-indigo-700 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-42 lg:py-52">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-gray-100 sm:text-7xl">
              Roman Perk
            </h1>
            <p className="mt-8 text-lg font-medium text-gray-400 sm:text-xl">
              Frontend Developer | React & TypeScript Enthusiast
            </p>
          </div>
        </div>
      </div>

      <section id="projects" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center text-gray-100">
            Projects
          </h2>
          <div className="mt-6 text-center ">
            {projects.map((project, id) => (
              <div
                key={id}
                className="bg-transparent border border-gray-700 p-4 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-100">
                  {project.name}
                </h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-indigo-400 hover:underline"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center text-gray-100">
            My Contact
          </h2>
          <div className="mt-6 text-center">
            <p className="text-gray-400">You can find me on:</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a
                href="https://github.com/romanperk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/roman-perk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
