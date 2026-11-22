import discoverDark from "../assets/projects/discover-dark.webp";
import discoverLight from "../assets/projects/discover-light.webp";
import pikachuDark from "../assets/projects/pikachu-dark.webp";
import pikachuLight from "../assets/projects/pikachu-light.webp";
import pokedexDark from "../assets/projects/pokedex-dark.webp";
import pokedexLight from "../assets/projects/pokedex-light.webp";
import type { ReactNode } from "react";
import { LuArrowRight } from "react-icons/lu";
import { ExternalLink } from "../components/ExternalLink";
import { ScreenshotGallery } from "../components/ScreenshotGallery";
import { Row, Section } from "../components/Section";
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
    {children}
  </Row>
);

/** Before and after of the docs site: separate product sites become sections of one. The text says the same, so it's hidden from screen readers. */
const DocsDiagram = () => (
  <div
    aria-hidden="true"
    className="mt-8 grid w-fit grid-cols-[auto_auto_auto] items-center gap-x-4 gap-y-2 font-mono text-[13px] leading-5 text-muted"
  >
    <div className="flex flex-col gap-1.5">
      {[0, 1, 2].map((i) => (
        <span key={i} className="block h-4 w-20 rounded-sm border border-muted" />
      ))}
    </div>
    <LuArrowRight size={16} strokeWidth={1.5} />
    <div className="flex h-[3.75rem] w-24 flex-col divide-y divide-muted rounded-sm border border-ink">
      {[0, 1, 2].map((i) => (
        <span key={i} className="flex-1" />
      ))}
    </div>
    <p>{t.projects.docs.diagram.before}</p>
    <span />
    <p className="text-ink">{t.projects.docs.diagram.after}</p>
  </div>
);

export const Projects = () => (
  <Section id="projects" title={t.projects.title}>
    <WorkProject project={t.projects.docs}>
      <DocsDiagram />
    </WorkProject>
    <WorkProject project={t.projects.accessGroup} />
    <Row meta={t.projects.personalProject}>
      <h3 className="text-xl font-medium">Pokédex</h3>
      <p className="mt-3 max-w-[60ch] leading-7 text-pretty text-body">
        {t.projects.pokedexDescription}
      </p>
      <p className="mt-3 font-mono text-[13px] leading-5 text-muted">
        React, TypeScript, Vite, TanStack Query, React Router
      </p>
      <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[15px] leading-6">
        <ExternalLink href="https://pokedex-web-phi-umber.vercel.app">{t.projects.liveApp}</ExternalLink>
        <ExternalLink href="https://github.com/romanperk/Pokedex-Web">{t.projects.sourceCode}</ExternalLink>
      </p>

      <ScreenshotGallery screenshots={screenshots} />

      <p className="mt-6 max-w-[60ch] text-sm leading-5 text-pretty text-muted">
        {t.projects.disclaimer}
      </p>
    </Row>
  </Section>
);
