const projects = [
  {
    name: "BeerMeter",
    description: "A cool project that showcases my React skills.",
    link: "https://fe-beer-meter.vercel.app/",
  },
];

const timelineEvents = [
  {
    year: 2022,
    title: "Start of School",
    description: "Began my journey in Computer Science at XYZ University.",
  },
  {
    year: 2024,
    title: "New Job",
    description: "Started working as a Frontend Developer at ABC Company.",
  },
  {
    year: 2025,
    title: "End of School",
    description:
      "Graduated with a degree in Computer Science from XYZ University.",
  },
];

export const Experience = () => {
  return (
    <div id="experience" className="relative isolate lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath: "polygon(80% 0%, 50% 90%, 30% 100%, 10% 50%)",
          }}
          className="relative left-[calc(90%-9rem)] aspect-[1055/578] w-[36.125rem] -translate-x-1/2 rotate-[20deg] bg-gradient-to-tr from-pink-700 to-indigo-700 opacity-30 sm:left-[calc(90%-10rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl pt-24 sm:pt-18 lg:pt-22">
        <div className="mx-auto max-w-4xl pt-16 pb-4 text-center">
          <h2 className="text-4xl font-bold text-gray-100">
            My Career Experience
          </h2>
          <div className="relative mt-12 flex justify-between items-center">
            {/* Timeline Line */}
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-purple-500" />

            {/* Timeline Points */}
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <div className="w-6 h-6 bg-purple-500 rounded-full border-4 border-black" />
                <p className="mt-2 text-lg font-semibold text-gray-300">
                  {event.year}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className="border border-gray-700 p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-xl font-bold text-gray-100">{event.title}</h3>
              <p className="mt-4 text-gray-300">{event.description}</p>
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-semibold text-center text-gray-100 pt-6">
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
    </div>
  );
};
