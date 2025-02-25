import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <div id="projects" className="relative isolate lg:px-8 min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute text-[8rem] sm:text-[15rem] font-extrabold text-gray-800 opacity-40 top-[16vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]"
      >
        {"</>"}
      </motion.h1>
      <div className="mx-auto max-w-4xl pt-32 sm:pt-42 lg:pt-52 flex text-center items-center flex-col">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-100 sm:text-6xl">
          My
        </h1>
        <h1 className="text-5xl font-bold tracking-tight text-gray-100 sm:text-7xl pb-2">
          Projects
        </h1>
        <div className="max-w-sm border rounded-lg shadow-sm bg-black border-gray-700 m-16">
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </motion.a>
          </div>
        </div>
        <h3 className="text-2xl font-bold tracking-tight text-gray-100 pb-10">
          More to come...
        </h3>
      </div>
    </div>
  );
};
