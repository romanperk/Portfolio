import { motion } from "framer-motion";
import { scrollAnimation } from "../consts/scrollAnimation";

interface TimeLineProps {
  data: { dates: string[]; headers: string[]; texts: string[] };
}

export const TimeLine = ({ data }: TimeLineProps) => {
  const { dates, headers, texts } = data;

  return (
    <>
      {dates.map((date, index) => (
        <motion.div key={index} {...scrollAnimation(index)}>
          <div className="ps-2 mt-4">
            <h3 className="text-xs font-medium uppercase text-neutral-400">
              {date}
            </h3>
          </div>
          <div className="flex gap-x-3">
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-neutral-700">
              <div className="relative z-10 size-7 flex justify-center items-center">
                <div className="size-2 rounded-full bg-purple-600"></div>
              </div>
            </div>
            <div className="grow pt-0.5 pb-2">
              <h3 className="flex gap-x-1.5 font-semibold text-white">
                {headers[index]}
              </h3>
              <p className="mt-1 text-sm text-neutral-300">{texts[index]}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};
