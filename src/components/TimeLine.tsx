import { motion } from "framer-motion";
import { scrollAnimation } from "../consts/scrollAnimation";

interface TimeLineItem {
  date: string;
  header: string;
  text: string;
  type: string;
  employer: string;
}

interface TimeLineProps {
  data: { items: TimeLineItem[] };
}

export const TimeLine = ({ data }: TimeLineProps) => {
  const { items } = data;

  return (
    <>
      {items.map((item, index) => (
        <motion.div key={index} {...scrollAnimation(index)}>
          <div className="ps-2 mt-4">
            <h3 className="text-xs font-medium uppercase text-neutral-400">
              {item.date}
            </h3>
          </div>
          <div className="flex gap-x-3">
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-neutral-700">
              <div className="relative z-10 size-7 flex justify-center items-center">
                <div className="size-2 rounded-full bg-purple-600"></div>
              </div>
            </div>
            <div className="grow pt-0.5 pb-2">
              <h3 className="font-semibold text-white">
                <div className="text-sm flex flex-col items-start md:flex-row md:items-center md:gap-x-2 sm:text-xl">
                  <span>{item.header}</span>
                  <span className="mt-1 md:mt-0 inline-block whitespace-nowrap md:self-center self-start text-xs font-medium uppercase text-neutral-400 bg-neutral-800 px-2 py-0.5 rounded sm:text-sm">
                    {item.type}
                  </span>
                </div>
              </h3>
              <div className="mt-1 text-sm text-neutral-400 sm:text-md">
                {item.employer}
              </div>
              <p className="text-sm text-justify mt-1 text-neutral-300 sm:text-lg">
                {item.text}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};
