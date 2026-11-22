import type { Messages } from "./en";

export const cs: Messages = {
  metaDescription: "Roman Perk, softwarový inženýr ve 2N, který pracuje na frontendu i backendu platformy My2N.",
  skipToContent: "Přeskočit na obsah",
  nav: {
    label: "Hlavní",
    logo: "Roman Perk, domů",
    home: "Domů",
    experience: "Zkušenosti",
    projects: "Projekty",
    contact: "Kontakt",
    openMenu: "Otevřít nabídku",
    closeMenu: "Zavřít nabídku",
  },
  languageSwitch: { short: "EN", label: "Switch to English" },
  theme: { light: "Přepnout na světlý motiv", dark: "Přepnout na tmavý motiv" },
  home: {
    role: "Experienced Software Engineer ve 2N",
    intro:
      "Pracuji na platformě My2N, především na frontendu, ale přispívám i do backendu. Mám bakalářský titul v oboru Softwarový vývoj z Unicorn University a ve 2N jsem vedl přípravu nového webu s firemní dokumentací.",
    emailMe: "Napište mi",
    stack: "Technologie",
    stackGroups: { frontend: "Frontend", backend: "Backend", tooling: "Nástroje" },
  },
  chartCaption: "Kariéra v časovém měřítku",
  experienceTitle: "Zkušenosti",
  projects: {
    title: "Projekty",
    personalProject: "Osobní projekt",
    atCompany: "Ve 2N",
    docs: {
      title: "Web s dokumentací pro integrátory",
      description:
        "Jeden web, kde všechny produktové skupiny 2N popisují, jak jejich produkty fungují, jak je používat a jak pracovat s partnerským API. Dřív byla dokumentace každého produktu jinde, vypadala jinak a každému integrátorovi se musel zvlášť přidělovat přístup. Web jsem postavil zhruba za měsíc, napsal první verzi dokumentace My2N, nastavil, jak mají týmy dokumentovat, a teď jim s tím pomáhám.",
    },
    accessGroup: {
      title: "Přístupová skupina My2N pro všechny uživatele",
      description:
        "Správce webu může přístupovou skupinu označit jako skupinu pro všechny uživatele. Přidají se do ní všichni stávající uživatelé a každý, koho na web později přidá, se do ní dostane automaticky. Dodal jsem to celé: frontend, backend i databázovou migraci.",
    },
    pokedexDescription:
      "Aplikace navržená především pro telefony, ve které lze procházet Pokémony, útoky, schopnosti a předměty z PokéAPI, ověřovat typové výhody, porovnávat statistiky, hrát kvíz se stíny a spravovat sbírku. Instaluje se na domovskou obrazovku jako PWA a funguje offline, ve světlém i tmavém režimu.",
    liveApp: "Spustit aplikaci",
    sourceCode: "Zdrojový kód",
    disclaimer: "Fanouškovský projekt, který není nijak spojen se společnostmi Nintendo, Game Freak ani The Pokémon Company.",
    alt: {
      discover: "Stránka Discover s vyhledáváním a Pokémonem dne",
      pokedex: "Seznam Pokédex s vyhledáváním, filtry typů a kartami Pokémonů",
      pikachu: "Detail Pikachua s artworkem, typem a záznamem z Pokédexu",
    },
  },
  gallery: {
    label: "Snímky obrazovky projektu",
    viewFullScreen: (alt) => `Zobrazit na celou obrazovku: ${alt}`,
    position: (current, total) => `${current} z ${total}`,
    close: "Zavřít",
    closeHint: "Zavřít (Esc)",
    previous: "Předchozí snímek",
    next: "Další snímek",
  },
  contact: {
    title: "Kontakt",
    location: "Místo",
    locationValue: "Praha, Česko",
    languages: "Jazyky",
    languagesValue: ["Čeština, rodilý mluvčí", "Angličtina, plně profesionální", "Němčina, základní"],
    copyEmail: "Kopírovat e-mail",
    copied: "Zkopírováno",
    copyFailed: "Kopírování se nezdařilo",
  },
  notFound: { title: "Stránka nenalezena", home: "Domovská stránka" },
  dates: {
    present: "současnost",
    month: ({ year, month }) => `${String(month).padStart(2, "0")}/${year}`,
    // Abbreviated, so these need no Czech plural forms.
    duration: (years, months) => [years && `${years} r.`, months && `${months} měs.`].filter(Boolean).join(" "),
  },
  career: {
    // Developer job titles stay in English, as they usually do on Czech CVs.
    "experienced-engineer": {
      title: "Experienced Software Engineer",
      shortTitle: "Experienced Software Engineer",
      type: "Plný úvazek",
      text: "Vedl jsem přípravu nového webu s dokumentací pro integrátory 2N a teď pomáhám ostatním týmům s dokumentováním jejich produktů. Jsem také členem AI Committee a aktivně prosazuji programování s pomocí AI, ve 2N k tomu používáme GitHub Copilot.",
    },
    "software-engineer": {
      title: "Software Engineer",
      shortTitle: "Software Engineer",
      type: "Plný úvazek",
      text: "Po bakalářském studiu jsem pracoval na frontendu i backendu My2N, na backendu hlavně s Javou, WebFluxem a Kafkou.",
    },
    "junior-developer": {
      title: "Junior JavaScript / React Developer",
      shortTitle: "Junior JavaScript / React Developer",
      type: "Částečný úvazek",
      text: "Na webu My2N jsem pracoval na frontendu v Reactu a nový kód psal v TypeScriptu, v agilním týmu spolu s backendem a QA.",
    },
    bachelor: {
      title: "Bakalářský titul v oboru Softwarový vývoj",
      shortTitle: "Bakalářský titul v oboru Softwarový vývoj",
      type: "Prezenční studium",
      text: "V bakalářské práci jsem srovnal Material UI, Ant Design a shadcn/ui na implementacích CRUD tabulky, vícekrokového formuláře a dashboardu v Reactu. Se spolužáky jsem pracoval na skupinových projektech, například na videotéce a měření teploty pomocí IoT zařízení.",
    },
    promoter: {
      title: "Promotér značek Acer a Microsoft v Alza.cz",
      shortTitle: "Promotér značek Acer a Microsoft",
      type: "Částečný úvazek",
      text: "Po školeních o nových produktech Acer, Microsoft a Intel jsem v showroomu Alzy v Holešovicích propagoval Acer a Microsoft a zákazníkům hlavně radil s výběrem notebooku.",
    },
  },
};
