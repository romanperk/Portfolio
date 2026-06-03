import { motion } from "framer-motion";
import { PageHeader } from "../components/PageHeader";
import { InfiniteCarousel } from "../components/InfiniteCarousel";
import { BackgroundTextEffect } from "../components/BackgroundTextEffect";

export const Home = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div id="home" className="relative lg:px-8 min-h-screen">
      <BackgroundTextEffect text="HEY" />
      <PageHeader as="h1" text1="I'm" text2="Roman Perk" />
      <div className="mx-auto max-w-5xl text-center p-8">
        <p className="mt-8 text-sm font-medium text-purple-400 sm:text-xl">
          Experienced Engineer at 2N · Bachelor's degree in SW Development
        </p>
        <p className="mt-6 text-sm font-medium text-gray-400 sm:text-lg text-center max-w-2xl mx-auto">
          Bachelor of Software Development from Unicorn University, passionate
          about building great software. Currently at 2N as an Experienced
          Engineer — primarily focused on frontend while also contributing to
          the backend of My2N.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("projects")}
            className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("contact")}
            className="px-6 py-2.5 border border-gray-600 hover:border-purple-500 text-gray-300 hover:text-white font-semibold rounded-lg transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400"
          >
            Get In Touch
          </motion.button>
        </div>
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 pt-18 sm:pt-24">
          <InfiniteCarousel />
        </div>
      </div>
    </div>
  );
};
