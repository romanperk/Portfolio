import { motion } from "framer-motion";
import { SiReact, SiTypescript, SiGithub } from "react-icons/si";
import { BackgroundTextEffect } from "../components/BackgroundTextEffect";
import { PageHeader } from "../components/PageHeader";

const techStack = [
  { icon: <SiReact size={14} color="#61DAFB" />, label: "React" },
  { icon: <SiTypescript size={14} color="#3178C6" />, label: "TypeScript" },
];

export const Projects = () => {
  return (
    <div id="projects" className="relative lg:px-8 min-h-screen">
      <BackgroundTextEffect text="</>" />
      <PageHeader text1={"My"} text2={"Projects"} />
      <div className="mx-auto max-w-4xl flex text-center items-center flex-col">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -4 }}
          className="max-w-sm w-full border border-gray-700 hover:border-purple-500 rounded-xl shadow-lg bg-gray-900/70 m-16 overflow-hidden transition-colors duration-300 focus-within:border-purple-500"
        >
          <div className="bg-gradient-to-br from-purple-900/40 to-gray-900 p-6 border-b border-gray-700">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              BeerMeter
            </h3>
            <div className="flex gap-2 mt-3 justify-center flex-wrap">
              {techStack.map((tech) => (
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
          <div className="p-5">
            <p className="mb-4 text-sm font-normal text-gray-400 text-left">
              Track spending across a friend group at pubs, restaurants, or
              clubs. Core functionalities complete — polish in progress.
            </p>
            <div className="flex items-center justify-center gap-3">
              <span className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-amber-300 bg-amber-950/60 border border-amber-800 rounded-lg">
                Work in progress
              </span>
              <motion.a
                href="https://github.com/romanperk"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                className="text-gray-500 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-500 rounded"
                aria-label="View on GitHub"
              >
                <SiGithub size={22} />
              </motion.a>
            </div>
          </div>
        </motion.div>
        <p className="text-lg font-medium text-gray-500 pb-10">
          More to come...
        </p>
      </div>
    </div>
  );
};
