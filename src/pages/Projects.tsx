import discoverDark from "../assets/projects/discover-dark.webp";
import discoverLight from "../assets/projects/discover-light.webp";
import pikachuDark from "../assets/projects/pikachu-dark.webp";
import pikachuLight from "../assets/projects/pikachu-light.webp";
import pokedexDark from "../assets/projects/pokedex-dark.webp";
import pokedexLight from "../assets/projects/pokedex-light.webp";
import { ExternalLink } from "../components/ExternalLink";
import { Row, Section } from "../components/Section";

const screenshots = [
  {
    caption: "Discover",
    alt: "Discover page with search and the Pokémon of the day",
    light: discoverLight,
    dark: discoverDark,
  },
  {
    caption: "Pokédex",
    alt: "Pokédex list with search, type filters and Pokémon cards",
    light: pokedexLight,
    dark: pokedexDark,
  },
  {
    caption: "Pikachu",
    alt: "Pikachu detail page with artwork, type and a Pokédex entry",
    light: pikachuLight,
    dark: pikachuDark,
  },
];

export const Projects = () => (
  <Section id="projects" title="Projects">
    <Row meta="Personal project">
      <h3 className="text-xl font-medium">Pokédex</h3>
      <p className="mt-3 max-w-[65ch] leading-7 text-body">
        Phone-first app for browsing Pokémon, moves, abilities and items from PokéAPI, checking type matchups, comparing
        stats, playing a shadow quiz and tracking a collection. It installs to the home screen as a PWA and works
        offline, in light and dark.
      </p>
      <p className="mt-3 font-mono text-[13px] leading-5 text-muted">
        React, TypeScript, Vite, TanStack Query, React Router
      </p>
      <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[15px] leading-6">
        <ExternalLink href="https://pokedex-web-phi-umber.vercel.app">Live app</ExternalLink>
        <ExternalLink href="https://github.com/romanperk/Pokedex-Web">Source code</ExternalLink>
      </p>

      {/* A swipeable row until there is room, since three side by side would be too small to read. */}
      <ul className="-mx-6 mt-8 flex snap-x scroll-pl-6 gap-3 overflow-x-auto px-6 sm:-mx-8 sm:scroll-pl-8 sm:px-8 md:mx-0 md:scroll-pl-0 md:px-0 lg:grid lg:max-w-[48rem] lg:grid-cols-3 lg:gap-4 lg:overflow-visible">
        {screenshots.map(({ caption, alt, light, dark }) => (
          <li key={caption} className="w-[70%] shrink-0 snap-start sm:w-56 lg:w-auto">
            <figure>
              <div className="overflow-hidden rounded-xl border border-line">
                {/* The hidden image is display: none, so lazy loading skips it. */}
                <img src={light} alt={alt} width={720} height={1440} loading="lazy" decoding="async" className="only-light h-auto w-full" />
                <img src={dark} alt={alt} width={720} height={1440} loading="lazy" decoding="async" className="only-dark h-auto w-full" />
              </div>
              <figcaption className="mt-2 font-mono text-[13px] leading-5 text-muted">{caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <p className="mt-6 max-w-[65ch] text-sm leading-5 text-muted">
        Fan-made project, not affiliated with Nintendo, Game Freak or The Pokémon Company.
      </p>
    </Row>
  </Section>
);
