import { renderToString } from "react-dom/server";
import App from "./App";
import { career, currentSpan, currentSteps, formatDuration, formatRange } from "./consts/career";
import { links } from "./consts/links";
import { stack } from "./consts/stack";
import { en } from "./i18n/en";
import { homePath, locale, otherHomePath, t } from "./i18n";

/** Built by `vite build --ssr` and run by scripts/prerender.js, once per route. */
export { locale };

export const render = () => renderToString(<App />);

const url = (path: string) => links.site + (path === "/" ? "/" : path);
const escape = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Roman Perk",
  jobTitle: currentSteps[0].title,
  worksFor: { "@type": "Organization", name: currentSpan.employer },
  url: url(homePath),
  sameAs: [links.github, links.linkedin],
  knowsAbout: [...new Set(stack.flatMap(([, names]) => names))],
};

/** Per-language tags, added to the English defaults in index.html. */
export const head = () => {
  const description = escape(t.metaDescription);
  const enUrl = url(locale === "en" ? homePath : otherHomePath);
  const csUrl = url(locale === "cs" ? homePath : otherHomePath);
  return [
    `<meta name="description" content="${description}" />`,
    `<link rel="canonical" href="${url(homePath)}" />`,
    `<link rel="alternate" hreflang="en" href="${enUrl}" />`,
    `<link rel="alternate" hreflang="cs" href="${csUrl}" />`,
    `<link rel="alternate" hreflang="x-default" href="${enUrl}" />`,
    `<meta property="og:url" content="${url(homePath)}" />`,
    `<meta property="og:locale" content="${locale === "cs" ? "cs_CZ" : "en_US"}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="Roman Perk" />`,
    `<meta name="twitter:description" content="${description}" />`,
    // `<` escaped so no text in the data can close the script tag.
    `<script type="application/ld+json">${JSON.stringify(person).replace(/</g, "\\u003c")}</script>`,
  ].join("\n    ");
};

/** /llms.txt, in English, from the same data as the page. */
export const llms = () => {
  const current = currentSteps[0];
  const p = en.projects;
  return `# Roman Perk

> ${current.title} at 2N in ${en.contact.locationValue}. ${en.home.intro}

- Current role: ${current.title}, ${currentSpan.employer} (since ${en.dates.month(current.start)})
- Experience: ${formatDuration(currentSpan)} as a developer at 2N, since ${en.dates.month(currentSpan.start)}, promoted ${currentSteps.length - 1} times
- Languages: ${en.contact.languagesValue.join("; ")}
- Website: ${url("/")} (Czech: ${url("/cs")})

## Tech stack

${stack.map(([group, names]) => `- ${en.home.stackGroups[group]}: ${names.join(", ")}`).join("\n")}

## Key projects

- ${p.docs.title} (at 2N): ${p.docs.lead}
- ${p.accessGroup.title} (at 2N): ${p.accessGroup.lead}
- [Pokédex](${links.pokedexApp}) (personal, [source](${links.pokedexSource})): ${p.pokedexDescription}

## Experience

${career.map((entry) => `- ${entry.title}, ${entry.employer} (${formatRange(entry)}): ${entry.text}`).join("\n")}

## Contact

- Email: ${links.email}
- GitHub: ${links.github}
- LinkedIn: ${links.linkedin}
`;
};
