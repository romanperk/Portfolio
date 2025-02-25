import { motion } from "framer-motion";

export const NotFound = () => {
  return (
    <div id="notFound" className="relative isolate lg:px-8 min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute text-[8rem] sm:text-[15rem] font-extrabold text-gray-800 opacity-40 top-[16vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]"
      >
        LOL
      </motion.h1>
      <div className="mx-auto max-w-2xl py-32 sm:py-42 lg:py-52 text-center flex items-center justify-center flex-col gap-7">
        <h2 className="text-3xl sm:text-5xl font-bold text-white">
          404 - Page Not Found
        </h2>
        <motion.a
          href="/"
          whileHover={{ scale: 1.1 }}
          className="w-30 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-purple-600"
        >
          Home page
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
  );
};
