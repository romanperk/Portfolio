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
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              With BeerMeter, you can track spendings across the whole friend
              group fe. in a pub, restaurant or a club. App isn't still
              finished, but the main functionalities are there.
            </p>
            <motion.a
              href="https://fe-beer-meter.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-800 rounded-lg"
            >
              Visit
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </motion.a>
          </div>
        </motion.div>
        <h3 className="text-2xl font-bold tracking-tight text-gray-100 pb-10">
          More to come...
        </h3>
      </div>
    </div>
  );
};
