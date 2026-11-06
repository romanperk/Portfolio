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
    emailMe: "Email me",
    stack: "Stack",
  },
  chartCaption: "Career, drawn to scale",
  experienceTitle: "Experience",
  projects: {
    title: "Projects",
    personalProject: "Personal project",
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
  },
  notFound: { title: "Page not found", home: "Home page" },
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
      text: "While taking on increased responsibility, I progressed into the role of Experienced Engineer. In this role, I led the preparation of a new website for company documentation, which is now finished.",
    },
    "software-engineer": {
      title: "Software Engineer",
      shortTitle: "Software Engineer",
      type: "Full-time",
      text: "After completing my Bachelor’s degree, I expanded my skills across both the frontend and backend of My2N, with backend work mainly in Java, WebFlux and Kafka.",
    },
    "junior-developer": {
      title: "Junior JavaScript / React Developer",
      shortTitle: "Junior JavaScript / React Developer",
      type: "Part-time",
      text: "Frontend developer in the My2N development team, contributing to the frontend codebase of the My2N website and working with backend, QA, the Scrum Master and the Product Owner, using Jira and an Agile process of stand-ups, refinements, estimations and user story mapping. The stack was React in JavaScript, with new code in TypeScript, plus MUI, React Hook Form, Redux, Redux Toolkit, the Jest testing library and GitLab.",
    },
    bachelor: {
      title: "Bachelor’s degree in Software Development",
      shortTitle: "Bachelor’s degree in Software Development",
      type: "Full-time study",
      text: "Gained knowledge in React.js, JavaScript, Java, AI, project management and mathematics. Worked with colleagues on group projects, including a video library and temperature tracking with an IoT device. Successfully defended a thesis comparing Material UI, Ant Design and shadcn/ui through React implementations of a CRUD table, a multistep form and a dashboard.",
    },
    promoter: {
      title: "Promoter for Acer and Microsoft at Alza.cz",
      shortTitle: "Promoter for Acer and Microsoft",
      type: "Part-time",
      text: "Work included training on new products regarding the brand Acer, Microsoft and Intel.",
    },
  },
};

export type Messages = typeof en;
