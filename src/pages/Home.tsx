import { LuArrowUpRight } from "react-icons/lu";
import { CareerChart } from "../components/CareerChart";
import { t } from "../i18n";

/** Named under the role and set in full ink in the stack list. Every one also appears in `stack`. */
const core = ["React", "TypeScript", "Java", "Kafka"];

const stack: [keyof typeof t.home.stackGroups, string[]][] = [
  ["frontend", ["React", "JavaScript", "TypeScript", "Redux", "Material UI", "React Hook Form", "Tailwind CSS", "Jest"]],
  ["backend", ["Java", "Kotlin", "Spring WebFlux", "Kafka"]],
  ["tooling", ["AWS", "GitHub", "GitLab", "GitHub Copilot", "Claude Code"]],
];

// DOM order is the phone order (intro, stack, chart). On wide screens the chart moves up beside the intro.
export const Home = () => (
  <section id="home" aria-labelledby="home-title" className="wrap">
    <div className="grid gap-x-16 pt-12 sm:pt-16 lg:grid-cols-2 lg:items-center">
      <div className="rise">
        <h1
          id="home-title"
          className="text-5xl leading-[1.05] font-medium tracking-[-0.03em] lg:text-7xl"
        >
          Roman Perk
        </h1>
        <p className="mt-6 text-xl leading-7">{t.home.role}</p>
        <ul aria-label={t.home.core} className="mt-2 flex flex-wrap font-mono text-sm leading-6 text-body">
          {core.map((name, index) => (
            <li key={name}>
              {index > 0 && (
                <span aria-hidden="true" className="px-2 text-muted">
                  ·
                </span>
              )}
              {name}
            </li>
          ))}
        </ul>
        <p className="mt-5 max-w-[36rem] text-lg leading-8 text-pretty text-body">{t.home.intro}</p>
        <div className="mt-8 grid grid-cols-2 gap-2 sm:flex sm:gap-3">
          <a href="mailto:perkroman@gmail.com" className="btn btn-primary col-span-2">
            {t.home.emailMe}
          </a>
          <a
            href="https://github.com/romanperk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            GitHub
            <LuArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/roman-perk/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            LinkedIn
            <LuArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="mt-12 border-t border-line py-6 lg:order-last lg:col-span-2 lg:mt-16">
        <h2 className="text-[15px] leading-6 font-medium">{t.home.stack}</h2>
        <dl className="mt-3 grid gap-y-1 text-sm leading-6">
          {stack.map(([group, names]) => (
            <div key={group} className="grid grid-cols-[5.5rem_1fr] gap-x-4 md:grid-cols-[12rem_1fr] md:gap-x-8">
              <dt className="font-mono text-[13px] text-muted">{t.home.stackGroups[group]}</dt>
              <dd>
                <ul className="flex flex-wrap gap-x-4">
                  {names.map((name) => (
                    <li key={name} className={core.includes(name) ? "font-medium text-ink" : "text-muted"}>
                      {name}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="rise pt-2 pb-6 [animation-delay:60ms] lg:pt-0 lg:pb-0">
        <CareerChart />
      </div>
    </div>
  </section>
);
