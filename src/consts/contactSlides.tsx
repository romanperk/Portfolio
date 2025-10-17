import { motion } from "framer-motion";

export const contactSlides = [
  {
    content: (
      <div className="flex flex-col items-center justify-center h-full">
        <h3 className="text-gray-200 text-xl mb-4 sm:text-2xl">
          You can find me on:
        </h3>
        <div className="flex flex-col items-center justify-center space-y-4">
          <motion.a
            href="https://github.com/romanperk"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-purple-500 text-lg hover:underline sm:text-xl"
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/roman-perk/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-purple-500 text-lg hover:underline sm:text-xl"
          >
            LinkedIn
          </motion.a>
        </div>
      </div>
    ),
  },
  {
    content: (
      <div className="flex flex-col items-center justify-center h-full p-8">
        <h3 className="text-gray-300 text-xl mb-4 sm:text-2xl">
          Or send me an email:
        </h3>
        <motion.p
          whileHover={{ scale: 1.1 }}
          className="text-purple-400 text-lg cursor-pointer sm:text-xl"
          onClick={() => (window.location.href = "mailto:perkroman@gmail.com")}
        >
          perkroman@gmail.com
        </motion.p>
      </div>
    ),
  },
];
