import DateLogo from "../assets/date.svg?react";
import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <div id="experience" className="relative isolate lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute text-[8rem] sm:text-[15rem] font-extrabold text-gray-800 opacity-40 top-[16vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]"
      >
        EXP
      </motion.h1>
      <div className="mx-auto max-w-4xl pt-32 sm:pt-42 lg:pt-52 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-100 sm:text-6xl">
          My
        </h1>
        <h1 className="text-5xl font-bold tracking-tight text-gray-100 sm:text-7xl pb-2">
          Experience
        </h1>
      </div>
      <ol className="items-center sm:flex p-8">
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0  bg-purple-900  shrink-0">
              <DateLogo />
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Study of SW Development studium at UUN
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              September of 2022
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              React.js, JavaScript, Java, AI, Project Management, Mathematics
              etc.
            </p>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0  bg-purple-900  shrink-0">
              <DateLogo />
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Job as Junior React Developer at 2N
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              July of 2024
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Redux, Jira, TypeScript, Unit Testing, GitLab, Jest, RHF, MUI
            </p>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0  bg-purple-900  shrink-0">
              <DateLogo />
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Expected finish of SW Development studium at UUN
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              June of 2025
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Bachelor's work on Comparison of component libraries for
              development in React
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
};
