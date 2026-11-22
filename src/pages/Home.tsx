import { LuArrowUpRight } from "react-icons/lu";
import { CareerChart } from "../components/CareerChart";
import { t } from "../i18n";

const stack: [keyof typeof t.home.stackGroups, string[]][] = [
  ["frontend", ["React", "JavaScript", "TypeScript", "Redux", "Material UI", "React Hook Form", "Tailwind CSS", "Jest"]],
  ["backend", ["Java", "Kotlin", "Spring WebFlux", "Kafka"]],
  ["tooling", ["AWS", "GitHub", "GitLab", "GitHub Copilot", "Claude Code"]],
];

export const Home = () => (
  <section
    id="home"
    aria-labelledby="home-title"
    className="wrap"
  >
    <div className="grid items-center gap-x-16 gap-y-12 py-12 sm:py-16 lg:grid-cols-2">
      <div className="rise">
        <h1
          id="home-title"
          className="text-5xl leading-[1.05] font-medium tracking-[-0.03em] lg:text-7xl"
        >
          Roman Perk
        </h1>
        <p className="mt-6 text-xl leading-7">
          {t.home.role}
        </p>
        <p className="mt-4 max-w-[36rem] text-lg leading-8 text-pretty text-body">
          {t.home.intro}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="mailto:perkroman@gmail.com" className="btn btn-primary">
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
            className="btn btn-secondary"
          >
            LinkedIn
            <LuArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="rise [animation-delay:60ms]">
        <CareerChart />
      </div>
    </div>

    <div className="grid gap-x-8 gap-y-2 border-t border-line py-6 md:grid-cols-[12rem_1fr]">
      <h2 className="font-mono text-[13px] leading-6 text-muted">{t.home.stack}</h2>
      <dl className="grid gap-y-1 text-sm leading-6">
        {stack.map(([group, names]) => (
          <div key={group} className="grid grid-cols-[5.5rem_1fr] gap-x-4">
            <dt className="font-mono text-[13px] text-muted">{t.home.stackGroups[group]}</dt>
            <dd>
              <ul className="flex flex-wrap gap-x-4 text-body">
                {names.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);
