import { motion } from "framer-motion";
import { BackgroundTextEffect } from "../components/BackgroundTextEffect";
import { PageHeader } from "../components/PageHeader";
import { scrollAnimation } from "../consts/scrollAnimation";

export const Projects = () => {
  return (
    <div id="projects" className="relative lg:px-8 min-h-screen">
      <BackgroundTextEffect text="</>" />
      <PageHeader text1={"My"} text2={"Projects"} />
      <div className="mx-auto max-w-4xl flex text-center items-center flex-col">
        <motion.div
          {...scrollAnimation()}
          className="max-w-sm border rounded-lg shadow-sm bg-black border-gray-700 m-16"
        >
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              BeerMeter
            </h5>
            <p className="mb-3 text-md font-normal text-gray-700 dark:text-gray-400">
              With BeerMeter, you can track spendings across the whole friend
              group eg. in a pub, restaurant or a club. App isn't still
              finished, but the main functionalities are there.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              disabled
              className="inline-flex items-center px-3 py-2 text-md font-medium text-center text-white bg-purple-800 rounded-lg opacity-60 cursor-not-allowed pointer-events-none"
            >
              Work in progress
            </motion.button>
          </div>
        </motion.div>
        <h3 className="text-2xl font-bold tracking-tight text-gray-100 pb-10">
          More to come...
        </h3>
      </div>
    </div>
  );
};
