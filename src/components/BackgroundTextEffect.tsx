import { motion } from "framer-motion";

export const BackgroundTextEffect = ({ text }: { text: string }) => {
  return (
    <motion.h1
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 0.4, y: 0 },
      }}
      className="absolute text-[8rem] sm:text-[15rem] font-extrabold text-gray-800 opacity-40 top-[16vh] lg:top-[26vh] xl:top-[20vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]"
    >
      {text}
    </motion.h1>
  );
};
