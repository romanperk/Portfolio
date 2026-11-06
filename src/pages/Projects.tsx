import discoverDark from "../assets/projects/discover-dark.webp";
import discoverLight from "../assets/projects/discover-light.webp";
import pikachuDark from "../assets/projects/pikachu-dark.webp";
import pikachuLight from "../assets/projects/pikachu-light.webp";
import pokedexDark from "../assets/projects/pokedex-dark.webp";
import pokedexLight from "../assets/projects/pokedex-light.webp";
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

export const Projects = () => (
  <Section id="projects" title={t.projects.title}>
    <Row meta={t.projects.personalProject}>
      <h3 className="text-xl font-medium">Pokédex</h3>
      <p className="mt-3 max-w-[65ch] leading-7 text-body">
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

      <p className="mt-6 max-w-[65ch] text-sm leading-5 text-muted">
        {t.projects.disclaimer}
      </p>
    </Row>
  </Section>
);
