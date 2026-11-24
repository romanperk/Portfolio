import discoverDark from "../assets/projects/discover-dark.webp";
import discoverLight from "../assets/projects/discover-light.webp";
import pikachuDark from "../assets/projects/pikachu-dark.webp";
import pikachuLight from "../assets/projects/pikachu-light.webp";
import pokedexDark from "../assets/projects/pokedex-dark.webp";
import pokedexLight from "../assets/projects/pokedex-light.webp";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { LuArrowRight, LuChevronRight } from "react-icons/lu";
import { ExternalLink } from "../components/ExternalLink";
import { ScreenshotGallery } from "../components/ScreenshotGallery";
import { Row, Section } from "../components/Section";
import { links } from "../consts/links";
import { t } from "../i18n";

const screenshots = [
  {
    caption: "Discover",
    alt: t.projects.alt.discover,
    light: discoverLight,
    dark: discoverDark,
  },
  {
    caption: "Pokédex",
    alt: t.projects.alt.pokedex,
    light: pokedexLight,
    dark: pokedexDark,
  },
  {
    caption: "Pikachu",
    alt: t.projects.alt.pikachu,
    light: pikachuLight,
    dark: pikachuDark,
  },
];

type Project = typeof t.projects.docs | typeof t.projects.accessGroup;

/** Work projects lead the section, so they take the larger title, like the current role in the timeline. */
const WorkProject = ({ project, children }: { project: Project; children?: ReactNode }) => (
  <Row meta={t.projects.atCompany}>
    <h3 className="text-2xl font-medium text-balance">{project.title}</h3>
    <p className="mt-2 max-w-[60ch] text-lg leading-7 text-pretty text-ink">{project.lead}</p>
    <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[13px] leading-5">
      {project.facts.map((fact) => (
        <div key={fact.label}>
          <dt className="text-muted">{fact.label}</dt>
          <dd className="mt-0.5 text-ink">{fact.value}</dd>
        </div>
      ))}
    </dl>
    <p className="mt-5 max-w-[60ch] leading-7 text-pretty text-body">{project.description}</p>
    {/* How it works is for the technical reader, so it waits behind a native disclosure and the summary stays scannable. */}
    {"details" in project && (
      <details className="group mt-4 max-w-[60ch]">
        <summary className="-mx-1.5 inline-flex min-h-11 cursor-pointer list-none items-center gap-1.5 rounded-md px-1.5 text-[15px] font-medium text-ink transition-colors duration-150 hover:text-accent-ink [&::-webkit-details-marker]:hidden">
          <LuChevronRight
            size={16}
            strokeWidth={1.5}
            aria-hidden="true"
            className="transition-transform duration-200 group-open:rotate-90 motion-reduce:transition-none"
          />
          {t.projects.howItWorks}
        </summary>
        <p className="mt-2 leading-7 text-pretty text-body">{project.details}</p>
      </details>
    )}
    {children}
  </Row>
);

/**
 * Lets a diagram play once: "ready" as it scrolls near, so its parts wait in their start state,
 * then "play" once most of it is on screen. The animation itself is CSS (`.play-in`), and
 * without this the diagram is simply drawn.
 */
const usePlayOnView = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.6) {
          element.dataset.stage = "play";
          observer.disconnect();
        } else if (entry.isIntersecting) {
          element.dataset.stage = "ready";
        }
      },
      { threshold: [0, 0.6] },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return ref;
};

/** One part of a diagram that plays in: where it starts from, and when (ms) it moves. */
const playIn = (delay: number, from?: string) => ({ "--delay": delay, "--from": from }) as CSSProperties;

/** Before and after of the docs site: separate product sites become sections of one. The text says the same, so it's hidden from screen readers. */
const DocsDiagram = () => {
  const ref = usePlayOnView();
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="mt-10 grid w-fit grid-cols-[auto_auto_auto] items-center gap-x-6 gap-y-3 font-mono text-[13px] leading-5 text-muted"
    >
      <div className="flex flex-col gap-2">
        {[0, 1, 2].map((i) => (
          <span key={i} className="block h-6 w-28 rounded-[3px] border border-muted sm:w-32" />
        ))}
      </div>
      <LuArrowRight size={20} strokeWidth={1.5} className="play-in" style={playIn(0, "translateX(-8px)")} />
      {/* Each product's docs arrive as a section of the one site. */}
      <div className="flex h-[5.5rem] w-32 flex-col gap-1 rounded-[3px] border-2 border-accent p-1 sm:w-36">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="play-in flex-1 origin-left rounded-[2px] bg-accent/25"
            style={playIn(250 + i * 180, "scaleX(0)")}
          />
        ))}
      </div>
      <p>{t.projects.docs.diagram.before}</p>
      <span />
      <p className="text-ink">{t.projects.docs.diagram.after}</p>
    </div>
  );
};

/** Who ends up in the group: every existing user, plus each new one later (the dashed dot). Hidden like the docs diagram. */
const AccessGroupDiagram = () => {
  const ref = usePlayOnView();
  const user = "block size-4 shrink-0 rounded-full border";
  // One source of users: its dots, then a line that runs all the way to the group, so the flow
  // reads even when the label underneath makes the column wide.
  const source = (dots: ReactNode, label: string, delay: number) => (
    <div>
      <div className="flex items-center gap-2">
        {dots}
        <span className="play-in ml-1 h-px min-w-4 flex-1 origin-left bg-muted" style={playIn(delay, "scaleX(0)")} />
        <LuArrowRight size={16} strokeWidth={1.5} className="play-in -ml-2.5 shrink-0" style={playIn(delay + 150, "translateX(-6px)")} />
      </div>
      <p className="mt-1">{label}</p>
    </div>
  );
  return (
    <div
      ref={ref}
      aria-hidden="true"
      // Same spacing as the docs diagram: arrows stop 24px from the box, labels sit 12px under it.
      className="mt-10 grid w-fit grid-cols-[auto_auto] items-center gap-x-6 gap-y-3 font-mono text-[13px] leading-5 text-muted"
    >
      {source(
        [0, 1, 2].map((i) => <span key={i} className={`${user} border-muted`} />),
        t.projects.accessGroup.diagram.existing,
        0,
      )}
      {/* The existing users join at once; the new one arrives a beat later, on its own. */}
      <div className="row-span-2 flex h-full min-h-[6rem] w-36 flex-wrap content-center justify-center gap-2 rounded-[3px] border-2 border-accent p-4">
        {[0, 1, 2].map((i) => (
          <span key={i} className={`play-in ${user} border-ink`} style={playIn(300 + i * 120)} />
        ))}
        <span className={`play-in ${user} border-dashed border-ink`} style={playIn(1250)} />
      </div>
      {source(<span className={`${user} border-dashed border-muted`} />, t.projects.accessGroup.diagram.joining, 900)}
      <p className="col-start-2 text-ink">{t.projects.accessGroup.diagram.group}</p>
    </div>
  );
};

const pokedexStack = ["React", "TypeScript", "Vite", "TanStack Query", "React Router"];

/**
 * The Pokédex is the only working UI on the page, so it breaks out of the row rhythm into a
 * full-width band: the one place the scroll changes pace.
 */
const PokedexBand = () => (
  <div className="mt-8 border-y border-line bg-raised py-12 sm:mt-10 sm:py-16">
    <div className="wrap">
      <div className="grid gap-x-8 gap-y-2 md:grid-cols-[12rem_1fr]">
        <p className="font-mono text-[13px] leading-5 text-muted">{t.projects.personalProject}</p>
        <div className="min-w-0">
          {/* The only public code on the page, so the links sit by the title as actions. */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <h3 className="text-2xl font-medium">Pokédex</h3>
            <div className="flex flex-wrap gap-3">
              <ExternalLink href={links.pokedexApp} className="btn btn-secondary">
                {t.projects.liveApp}
              </ExternalLink>
              <ExternalLink href={links.pokedexSource} className="btn btn-secondary">
                {t.projects.sourceCode}
              </ExternalLink>
            </div>
          </div>
          <p className="mt-4 max-w-[60ch] leading-7 text-pretty text-body">{t.projects.pokedexDescription}</p>
          <ul className="mt-3 flex flex-wrap font-mono text-[13px] leading-5 text-muted">
            {pokedexStack.map((name, index) => (
              // The dot trails each name, so a wrapped line never starts with one.
              <li key={name} className="whitespace-nowrap">
                {name}
                {index < pokedexStack.length - 1 && (
                  <span aria-hidden="true" className="px-2">
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>

          <ScreenshotGallery screenshots={screenshots} />

          <p className="mt-6 max-w-[60ch] text-sm leading-5 text-pretty text-muted">{t.projects.disclaimer}</p>
        </div>
      </div>
    </div>
  </div>
);

export const Projects = () => (
  <Section id="projects" title={t.projects.title} band={<PokedexBand />}>
    <WorkProject project={t.projects.docs}>
      <DocsDiagram />
    </WorkProject>
    <WorkProject project={t.projects.accessGroup}>
      <AccessGroupDiagram />
    </WorkProject>
  </Section>
);
