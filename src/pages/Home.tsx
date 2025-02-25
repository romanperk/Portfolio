import { motion } from "framer-motion";

export const Home = () => {
  return (
    <div id="home" className="relative isolate lg:px-8 min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute text-[8rem] sm:text-[15rem] font-extrabold text-gray-800 opacity-40 top-[16vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]"
      >
        HEY
      </motion.h1>
      <div className="mx-auto max-w-4xl py-32 sm:py-42 lg:py-52 text-center p-8">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-100 sm:text-6xl">
          I'm
        </h1>
        <h1 className="text-5xl font-bold tracking-tight text-gray-100 sm:text-7xl">
          Roman Perk
        </h1>
        <p className="mt-8 text-lg font-medium text-purple-500 sm:text-xl">
          Frontend Developer | SW Development Student
        </p>
        <p className="mt-8 text-md font-medium text-gray-300 sm:text-xl">
          Bachelor's student in Software Development at Unicorn University,
          React developer at 2N, passionate about programming and continuously
          expanding my knowledge in the field.
        </p>
      </div>
    </div>
  );
};
