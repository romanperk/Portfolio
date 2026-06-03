import { motion } from "framer-motion";

type HeadingLevel = "h1" | "h2";

export const PageHeader = ({
  text1,
  text2,
  as: Tag = "h2",
}: {
  text1: string;
  text2: string;
  as?: HeadingLevel;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-4xl pt-32 sm:pt-42 lg:pt-52 text-center"
    >
      <p className="text-4xl font-semibold tracking-tight text-gray-400 sm:text-6xl">
        {text1}
      </p>
      <Tag className="text-5xl font-bold tracking-tight sm:text-7xl pb-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
        {text2}
      </Tag>
    </motion.div>
  );
};
