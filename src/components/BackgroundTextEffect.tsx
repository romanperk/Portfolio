import { motion } from "framer-motion";

export const BackgroundTextEffect = ({ text }: { text: string }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 0.4, y: 0 }}
      transition={{ duration: 1 }}
      className="absolute text-[8rem] sm:text-[15rem] font-extrabold text-gray-800 opacity-40 top-[16vh] lg:top-[22vh] xl:top-[16vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]"
    >
      {text}
    </motion.h1>
  );
};
