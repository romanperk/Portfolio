import { motion } from "framer-motion";
import { BackgroundTextEffect } from "../components/BackgroundTextEffect";
import { PageHeader } from "../components/PageHeader";
import { scrollAnimation } from "../consts/scrollAnimation";

export const Contact = () => {
  return (
    <div id="contact" className="min-h-screen relative lg:px-8">
      <BackgroundTextEffect text={"MSG"} />
      <PageHeader text1={"My"} text2={"Contact"} />
      <div className="mx-auto max-w-4xl text-center">
        <motion.div {...scrollAnimation(0)} className="mt-6 text-center">
          <h3 className="text-gray-200 text-2xl">You can find me on:</h3>
          <div className="flex justify-center space-x-4 mt-2">
            <motion.a
              href="https://github.com/romanperk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-purple-500 hover:underline text-lg"
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/roman-perk/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-purple-500 hover:underline text-lg"
            >
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
        <motion.div {...scrollAnimation(1)} className="mt-6 text-center">
          <h3 className="text-gray-300 text-xl">Or send me an email:</h3>
          <div className="flex justify-center space-x-4 mt-2">
            <motion.p
              whileHover={{ scale: 1.1 }}
              className="text-purple-400 text-md cursor-pointer"
              onClick={() =>
                (window.location.href = "mailto:perkroman@gmail.com")
              }
            >
              perkroman@gmail.com
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
