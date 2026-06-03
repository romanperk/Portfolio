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

interface ItemGroup {
  employer: string;
  items: TimeLineItem[];
}

function groupByEmployer(items: TimeLineItem[]): ItemGroup[] {
  return items.reduce<ItemGroup[]>((acc, item) => {
    const last = acc[acc.length - 1];
    if (last && last.employer === item.employer) {
      last.items.push(item);
    } else {
      acc.push({ employer: item.employer, items: [item] });
    }
    return acc;
  }, []);
}

export const TimeLine = ({ data }: TimeLineProps) => {
  const groups = groupByEmployer(data.items);
  let animIndex = 0;

  return (
    <>
      {groups.map((group, groupIndex) => {
        const isLastGroup = groupIndex === groups.length - 1;
        const currentAnimIndex = animIndex;
        animIndex += group.items.length;

        // ── Single-item group: original layout unchanged ──
        if (group.items.length === 1) {
          const item = group.items[0];
          return (
            <motion.div key={groupIndex} {...scrollAnimation(currentAnimIndex)}>
              <div className="ps-2 mt-4">
                <h3 className="text-xs font-medium uppercase text-neutral-400">
                  {item.date}
                </h3>
              </div>
              <div className="flex gap-x-3">
                <div
                  className={`relative ${
                    !isLastGroup
                      ? "after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-neutral-700"
                      : ""
                  }`}
                >
                  <div className="relative z-10 size-7 flex justify-center items-center">
                    <div className="size-2 rounded-full bg-purple-600" />
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
          );
        }

        // ── Multi-item group: one continuous line for the same employer ──
        return (
          <motion.div
            key={groupIndex}
            {...scrollAnimation(currentAnimIndex)}
            className="mt-4 flex gap-x-3"
          >
            {/* Left rail: single unbroken line from first to last item */}
            <div className="flex flex-col items-center w-7 flex-shrink-0">
              <div className="size-2 rounded-full bg-purple-500 mt-1 flex-shrink-0 z-10" />
              <div className="flex-1 w-px bg-purple-500" />
              <div className="size-2 rounded-full bg-purple-500 mb-1 flex-shrink-0 z-10" />
            </div>

            {/* Right: stacked items */}
            <div className="flex-1 space-y-6 pb-2">
              {group.items.map((item, i) => (
                <div key={i}>
                  <h3 className="text-xs font-medium uppercase text-neutral-400">
                    {item.date}
                  </h3>
                  <h3 className="font-semibold text-white mt-0.5">
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
              ))}
            </div>
          </motion.div>
        );
      })}
    </>
  );
};
