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
  },
  chartCaption: "Kariéra v časovém měřítku",
  experienceTitle: "Zkušenosti",
  projects: {
    title: "Projekty",
    personalProject: "Osobní projekt",
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
      text: "S rostoucí odpovědností jsem se posunul na pozici Experienced Engineer. V této roli jsem vedl přípravu nového webu s firemní dokumentací, který je nyní hotový.",
    },
    "software-engineer": {
      title: "Software Engineer",
      shortTitle: "Software Engineer",
      type: "Plný úvazek",
      text: "Po dokončení bakalářského studia jsem rozšířil své dovednosti na frontendu i backendu My2N, přičemž na backendu jsem pracoval hlavně s Javou, WebFluxem a Kafkou.",
    },
    "junior-developer": {
      title: "Junior JavaScript / React Developer",
      shortTitle: "Junior JavaScript / React Developer",
      type: "Částečný úvazek",
      text: "Frontendový vývojář ve vývojovém týmu My2N. Přispíval jsem do frontendového kódu webu My2N a spolupracoval s backendem, QA, Scrum Masterem a Product Ownerem. Používali jsme Jiru a agilní proces se stand-upy, refinementy, odhady a user story mappingem. Stack tvořil React v JavaScriptu, nový kód v TypeScriptu, dále MUI, React Hook Form, Redux, Redux Toolkit, testovací knihovna Jest a GitLab.",
    },
    bachelor: {
      title: "Bakalářský titul v oboru Softwarový vývoj",
      shortTitle: "Bakalářský titul v oboru Softwarový vývoj",
      type: "Prezenční studium",
      text: "Získal jsem znalosti v oblasti React.js, JavaScriptu, Javy, AI, projektového řízení a matematiky. S kolegy jsem pracoval na skupinových projektech, mezi něž patřila videotéka a měření teploty pomocí IoT zařízení. Úspěšně jsem obhájil bakalářskou práci srovnávající Material UI, Ant Design a shadcn/ui na implementacích CRUD tabulky, vícekrokového formuláře a dashboardu v Reactu.",
    },
    promoter: {
      title: "Promotér značek Acer a Microsoft v Alza.cz",
      shortTitle: "Promotér značek Acer a Microsoft",
      type: "Částečný úvazek",
      text: "Součástí práce byla školení o nových produktech značek Acer, Microsoft a Intel.",
    },
  },
};
