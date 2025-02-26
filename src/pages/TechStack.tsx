import { motion } from "framer-motion";

export const TechStack = () => {
  return (
    <div id="contact" className="relative isolate lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute text-[8rem] sm:text-[15rem] font-extrabold text-gray-800 opacity-40 top-[16vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]"
      >
        YES
      </motion.h1>
      <div className="mx-auto max-w-4xl pt-32 sm:pt-42 lg:pt-52 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-100 sm:text-6xl">
          My
        </h1>
        <h1 className="text-5xl font-bold tracking-tight text-gray-100 sm:text-7xl pb-2">
          Tech Stack
        </h1>
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
          <div className="text-center">
            <div
              x-data="{}"
              x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
              className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
              <ul
                x-ref="logos"
                className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
              >
                <li>
                  <img src="./facebook.svg" alt="Facebook" />
                </li>
                <li>
                  <img src="./disney.svg" alt="Disney" />
                </li>
                <li>
                  <img src="./airbnb.svg" alt="Airbnb" />
                </li>
                <li>
                  <img src="./apple.svg" alt="Apple" />
                </li>
                <li>
                  <img src="./spark.svg" alt="Spark" />
                </li>
                <li>
                  <img src="./samsung.svg" alt="Samsung" />
                </li>
                <li>
                  <img src="./quora.svg" alt="Quora" />
                </li>
                <li>
                  <img src="./sass.svg" alt="Sass" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
