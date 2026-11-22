import type { YearMonth } from "../consts/career";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const en = {
  metaDescription:
    "Roman Perk, software engineer at 2N working across the frontend and backend of the My2N platform.",
  skipToContent: "Skip to content",
  nav: {
    label: "Main",
    logo: "Roman Perk, home",
    home: "Home",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  /** Describes the other language, so it is written in that language. */
  languageSwitch: { short: "CS", label: "Přepnout do češtiny" },
  theme: { light: "Switch to light theme", dark: "Switch to dark theme" },
  home: {
    role: "Experienced Software Engineer at 2N",
    intro:
      "I work on the My2N platform, primarily on the frontend while also contributing to the backend. I hold a Bachelor’s degree in Software Development from Unicorn University and at 2N I led preparation of a new company documentation website.",
    core: "Core stack",
    emailMe: "Email me",
    stack: "Stack",
    stackGroups: { frontend: "Frontend", backend: "Backend", tooling: "Tooling" },
  },
  chartCaption: (promotions: number, years: number, months: number) =>
    `${promotions} ${promotions === 1 ? "promotion" : "promotions"} in ${[
      years && `${years} ${years === 1 ? "year" : "years"}`,
      months && `${months} ${months === 1 ? "month" : "months"}`,
    ]
      .filter(Boolean)
      .join(" ")} at 2N`,
  chart: { key: { current: "Current role", promotion: "Promotion", study: "Study" } },
  experienceTitle: "Experience",
  experienceEarlier: "Earlier",
  projects: {
    title: "Projects",
    personalProject: "Personal project",
    atCompany: "At 2N",
    docs: {
      title: "Documentation website for integrators",
      lead: "All 2N product documentation and the partner API, on one site for integrators.",
      description:
        "Before, each product’s docs lived separately, looked different and needed access granted to each integrator. I built the site in about a month, wrote the first draft of the My2N documentation, set out how teams should document, and now support them as they add their own.",
      facts: [
        { label: "Stack", value: "Docusaurus" },
        { label: "Built in", value: "~1 month" },
        { label: "For", value: "2N integrators" },
      ],
      diagram: { before: "A site per product", after: "One site" },
    },
    accessGroup: {
      title: "My2N access group for all users",
      lead: "An access group every user of a site belongs to, including users added later.",
      description:
        "A site admin marks the group as one for all users: every existing user is added, and each new one joins automatically. I delivered it end to end.",
      facts: [
        { label: "Scope", value: "Frontend · Backend · DB migration" },
      ],
      diagram: { existing: "Existing users", joining: "New users, automatically", group: "All users" },
    },
    pokedexDescription:
      "Phone-first app for browsing Pokémon, moves, abilities and items from PokéAPI, checking type matchups, comparing stats, playing a shadow quiz and tracking a collection. It installs to the home screen as a PWA and works offline, in light and dark.",
    liveApp: "Live app",
    sourceCode: "Source code",
    disclaimer: "Fan-made project, not affiliated with Nintendo, Game Freak or The Pokémon Company.",
    alt: {
      discover: "Discover page with search and the Pokémon of the day",
      pokedex: "Pokédex list with search, type filters and Pokémon cards",
      pikachu: "Pikachu detail page with artwork, type and a Pokédex entry",
    },
  },
  gallery: {
    label: "Project screenshots",
    viewFullScreen: (alt: string) => `View full screen: ${alt}`,
    position: (current: number, total: number) => `${current} of ${total}`,
    close: "Close",
    closeHint: "Close (Esc)",
    previous: "Previous screenshot",
    next: "Next screenshot",
  },
  contact: {
    title: "Contact",
    location: "Location",
    locationValue: "Prague, Czechia",
    languages: "Languages",
    languagesValue: ["Czech, native", "English, full professional", "German, elementary"],
    copyEmail: "Copy email",
    copied: "Copied",
    copyFailed: "Couldn’t copy",
    source: "Source of this site",
  },
  /** `otherLanguage` names the other language's home page, so it is written in that language. */
  notFound: { title: "Page not found", home: "Home page", otherLanguage: "Česká verze" },
  dates: {
    present: "Present",
    month: ({ year, month }: YearMonth) => `${MONTHS[month - 1]} ${year}`,
    duration: (years: number, months: number) =>
      [years && `${years} yr`, months && `${months} mo`].filter(Boolean).join(" "),
  },
  career: {
    "experienced-engineer": {
      title: "Experienced Software Engineer",
      shortTitle: "Experienced Software Engineer",
      type: "Full-time",
      text: "I led the preparation of the new documentation website for 2N integrators and now support other teams in documenting their products. I’m also on the AI Committee and actively push AI-assisted coding, which we do with GitHub Copilot.",
    },
    "software-engineer": {
      title: "Software Engineer",
      shortTitle: "Software Engineer",
      type: "Full-time",
      text: "After my degree I worked across the frontend and backend of My2N, with backend work mainly in Java, WebFlux and Kafka.",
    },
    "junior-developer": {
      title: "Junior JavaScript / React Developer",
      shortTitle: "Junior JavaScript / React Developer",
      type: "Part-time",
      text: "I worked on the React frontend of the My2N website, writing new code in TypeScript, in an Agile team alongside backend and QA.",
    },
    bachelor: {
      title: "Bachelor’s degree in Software Development",
      shortTitle: "Bachelor’s degree in Software Development",
      type: "Full-time study",
      text: "My thesis compared Material UI, Ant Design and shadcn/ui by implementing a CRUD table, a multistep form and a dashboard in React. Group projects included a video library and IoT temperature tracking.",
    },
    promoter: {
      title: "Promoter for Acer and Microsoft at Alza.cz",
      shortTitle: "Promoter for Acer and Microsoft",
      type: "Part-time",
      text: "After training on new Acer, Microsoft and Intel products, I promoted Acer and Microsoft at the Alza showroom in Holešovice, mostly helping customers choose the right laptop.",
    },
  },
};

export type Messages = typeof en;
