import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <div id="contact" className="relative isolate lg:px-8 min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute text-[8rem] sm:text-[15rem] font-extrabold text-gray-800 opacity-40 top-[16vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]"
      >
        MSG
      </motion.h1>
      <div className="mx-auto max-w-4xl pt-32 sm:pt-42 lg:pt-52 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-100 sm:text-6xl">
          My
        </h1>
        <h1 className="text-5xl font-bold tracking-tight text-gray-100 sm:text-7xl pb-2">
          Contact
        </h1>
        <div className="mt-6 text-center">
          <h3 className="text-gray-300 text-2xl">You can find me on:</h3>
          <div className="flex justify-center space-x-4 mt-2">
            <motion.a
              href="https://github.com/romanperk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-indigo-400 hover:underline"
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/roman-perk/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-indigo-400 hover:underline"
            >
              LinkedIn
            </motion.a>
          </div>
        </div>
        <div className="mt-6 text-center">
          <h3 className="text-gray-400 text-xl">Or send me an email:</h3>
          <div className="flex justify-center space-x-4 mt-2">
            <motion.p
              whileHover={{ scale: 1.1 }}
              className="text-indigo-300 text-sm cursor-pointer"
              onClick={() =>
                (window.location.href = "mailto:perkroman@gmail.com")
              }
            >
              perkroman@gmail.com
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};
