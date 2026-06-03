import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiGithub,
  SiNodedotjs,
  SiSupabase,
} from "react-icons/si";
import { BackgroundTextEffect } from "../components/BackgroundTextEffect";
import { PageHeader } from "../components/PageHeader";

interface TechBadge {
  icon?: React.ReactNode;
  label: string;
}

interface Project {
  name: string;
  description: string;
  techStack: TechBadge[];
  githubUrl: string;
  status: "wip" | "live";
}

const projects: Project[] = [
  {
    name: "BeerMeter",
    description:
      "Track spending across a friend group at pubs, restaurants or clubs. Features authentication and a SQL database powered by Supabase with a Node.js backend.",
    techStack: [
      { icon: <SiReact size={14} color="#61DAFB" />, label: "React" },
      { icon: <SiTypescript size={14} color="#3178C6" />, label: "TypeScript" },
      { icon: <SiNodedotjs size={14} color="#68A063" />, label: "Node.js" },
      { icon: <SiSupabase size={14} color="#3ECF8E" />, label: "Supabase" },
    ],
    githubUrl: "https://github.com/romanperk",
    status: "wip",
  },
  {
    name: "Pokédex",
    description:
      "React Native app fetching Pokémon data from PokéAPI. Browse all Pokémon with their stats, types and evolutions.",
    techStack: [
      { icon: <SiReact size={14} color="#61DAFB" />, label: "React Native" },
      { label: "PokéAPI" },
    ],
    githubUrl: "https://github.com/romanperk/pokedex",
    status: "wip",
  },
];

export const Projects = () => {
  return (
    <div id="projects" className="relative lg:px-8 min-h-screen">
      <BackgroundTextEffect text="</>" />
      <PageHeader text1={"My"} text2={"Projects"} />
      <div className="mx-auto max-w-4xl px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="w-full border border-gray-700 hover:border-purple-500 rounded-xl shadow-lg bg-gray-900/70 overflow-hidden transition-colors duration-300 flex flex-col"
            >
              <div className="bg-gradient-to-br from-purple-900/40 to-gray-900 p-6 border-b border-gray-700">
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  {project.name}
                </h3>
                <div className="flex gap-2 mt-3 flex-wrap">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech.label}
                      className="flex items-center gap-1.5 text-xs bg-gray-800 text-gray-300 px-2.5 py-1 rounded-full"
                    >
                      {tech.icon}
                      {tech.label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="mb-4 text-sm font-normal text-gray-400 text-left">
                  {project.description}
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  {project.status === "wip" && (
                    <span className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-amber-300 bg-amber-950/60 border border-amber-800 rounded-lg">
                      Work in progress
                    </span>
                  )}
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    className="text-gray-500 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-500 rounded"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    <SiGithub size={22} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-lg font-medium text-gray-500 pb-10 text-center">
          More to come...
        </p>
      </div>
    </div>
  );
};
