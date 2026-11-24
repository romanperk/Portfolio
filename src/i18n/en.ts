import type { YearMonth } from "../consts/career";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const en = {
  metaDescription:
    "Roman Perk, Experienced Software Engineer at 2N in Prague, building the My2N cloud platform across the frontend and backend with React, TypeScript, Java and Kafka.",
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
    role: "Experienced Software Engineer at\u00a02N",
    intro:
      "I work on My2N, the cloud platform of 2N, an Axis company that makes IP intercoms and access control. I develop across the full stack, and I hold a Bachelor’s degree in Software Development from Unicorn University.",
    core: "Core stack",
    emailMe: "Email me",
    stack: "Stack",
    stackGroups: { frontend: "Frontend", backend: "Backend", tooling: "Tooling" },
  },
  // The time from joining 2N to the latest promotion, so the headline shows the pace.
  chartCaption: (promotions: number, months: number) =>
    `${promotions} ${promotions === 1 ? "promotion" : "promotions"} in ${months} ${months === 1 ? "month" : "months"} at\u00a02N`,
  experienceTitle: "Experience",
  experienceEarlier: "Earlier",
  projects: {
    title: "Projects",
    personalProject: "Personal project",
    atCompany: "At 2N",
    howItWorks: "How it works",
    docs: {
      title: "Documentation website for integrators",
      lead: "All 2N product documentation and the partner API, on one site for integrators.",
      description:
        "Before, each product’s docs lived separately, looked different and needed access granted to each integrator. I designed and built the site in about a month, wrote the first draft of the My2N documentation, set out how teams should document, and now support them as they add their own.",
      details:
        "The pages are MDX: Markdown that can use React components, which the site uses where plain text isn’t enough. That makes the codebase faster and easier to work with, for developers and product people alike. The API reference isn’t written by hand: a script generates it from the YAML documents with an npm package.",
      facts: [
        { label: "Stack", value: "Docusaurus" },
        { label: "Built in", value: "~1 month" },
        { label: "For", value: "2N integrators" },
      ],
      diagram: { before: "A site per product", after: "One site" },
    },
    accessGroup: {
      title: "My2N access group for all users",
      lead: "An access group that every user at a site belongs to, including users added later.",
      description:
        "A site admin marks the group as one for all users: every existing user is added, and each new one joins automatically. I delivered it end to end.",
      details:
        "It’s built on group inheritance: each site has a hidden group of its users that the target group inherits from, so members are linked, not copied. Switching the mode on fetches the site’s users from another microservice, creates any missing accesses and sends credentials to the group’s devices. Switching it off removes the link and revokes those credentials, while members added by hand before stay in the group. New users join automatically, driven by three Kafka events.",
      facts: [
        { label: "Scope", value: "Frontend · Backend · Database" },
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
      text: "I now work across the full stack with more responsibility. I joined the backend team planning a new backend application and set up its starting codebase. I’m also on the AI Committee and actively push AI-assisted coding, which we do with GitHub Copilot, and I help other teams document their products on the docs site I built.",
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
