import {
  SiReact,
  SiRedux,
  SiGithub,
  SiTypescript,
  SiMui,
  SiReacthookform,
  SiTailwindcss,
  SiJest,
} from "react-icons/si";
import { useEffect, useRef } from "react";
import GitLabLogo from "../assets/techstack/gitlab.svg?react";
import JsLogo from "../assets/techstack/javascript.svg?react";

export const InfiniteCarousel = () => {
  const logosRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (logosRef.current) {
      const ul = logosRef.current;
      ul.insertAdjacentHTML("afterend", ul.outerHTML);
      if (ul.nextSibling) {
        (ul.nextSibling as HTMLElement).setAttribute("aria-hidden", "true");
      }
    }
  }, []);

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul
        ref={logosRef}
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        <li>
          <SiReact size={30} color="#61DAFB" />
        </li>
        <li>
          <JsLogo />
        </li>
        <li>
          <SiTypescript size={30} color="#00c1ff" />
        </li>
        <li>
          <SiRedux size={30} color="#764ABC" />
        </li>
        <li>
          <SiMui size={30} color="#00c1ff" />
        </li>
        <li>
          <SiReacthookform size={30} color="#ff5ffa" />
        </li>
        <li>
          <SiTailwindcss size={30} color="00a6ea" />
        </li>
        <li>
          <SiJest size={30} color="#af6199" />
        </li>
        <li>
          <SiGithub size={30} color="#ffffff" />
        </li>
        <li>
          <GitLabLogo />
        </li>
      </ul>
    </div>
  );
};
