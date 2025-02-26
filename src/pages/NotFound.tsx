import { motion } from "framer-motion";
import { BackgroundTextEffect } from "../components/BackgroundTextEffect";

export const NotFound = () => {
  return (
    <div id="notFound" className="relative isolate lg:px-8 min-h-screen">
      <BackgroundTextEffect text={"404"} />
      <div className="mx-auto max-w-2xl py-32 sm:py-42 lg:py-52 text-center flex items-center justify-center flex-col gap-7">
        <h2 className="text-3xl sm:text-5xl font-bold text-white">
          404 - Page Not Found
        </h2>
        <motion.a
          href="/"
          whileHover={{ scale: 1.1 }}
          className="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-white rounded-lg bg-purple-600"
        >
          Home page
        </motion.a>
      </div>
    </div>
  );
};
