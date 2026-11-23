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
    role: "Experienced Software Engineer ve\u00a02N",
    intro:
      "Pracuji na My2N, cloudové platformě společnosti 2N, která patří do skupiny Axis a vyrábí IP interkomy a přístupové systémy. Vyvíjím napříč celým stackem a mám bakalářský titul v oboru Softwarový vývoj z Unicorn University.",
    core: "Hlavní technologie",
    emailMe: "Napište mi",
    stack: "Technologie",
    stackGroups: { frontend: "Frontend", backend: "Backend", tooling: "Nástroje" },
  },
  // „povýšení“ has the same form for any count. Months use Czech plural forms: 1 měsíc, 2–4 měsíce, 5+ měsíců.
  chartCaption: (promotions, months) => {
    const unit = months === 1 ? "měsíc" : months >= 2 && months <= 4 ? "měsíce" : "měsíců";
    return `${promotions} povýšení za ${months} ${unit} ve\u00a02N`;
  },
  experienceTitle: "Zkušenosti",
  experienceEarlier: "Dříve",
  projects: {
    title: "Projekty",
    personalProject: "Osobní projekt",
    atCompany: "Ve 2N",
    howItWorks: "Jak to funguje",
    docs: {
      title: "Web s dokumentací pro integrátory",
      lead: "Veškerá dokumentace produktů 2N i partnerské API na jednom webu pro integrátory.",
      description:
        "Dřív byla dokumentace každého produktu jinde, vypadala jinak a každému integrátorovi se musel zvlášť přidělovat přístup. Web jsem navrhl a postavil zhruba za měsíc, napsal první verzi dokumentace My2N, nastavil, jak mají týmy dokumentovat, a teď jim s tím pomáhám.",
      details:
        "Stránky jsou v MDX, tedy v Markdownu, do kterého lze vložit React komponenty, a web je používá tam, kde prostý text nestačí. Díky tomu se v kódu pracuje rychleji a snáz, a to vývojářům i produktovému týmu. Referenci API nikdo nepíše ručně, generuje ji skript s npm balíčkem z YAML dokumentů.",
      facts: [
        { label: "Technologie", value: "Docusaurus" },
        { label: "Doba vývoje", value: "~1 měsíc" },
        { label: "Pro koho", value: "Integrátoři 2N" },
      ],
      diagram: { before: "Web pro každý produkt", after: "Jeden web" },
    },
    accessGroup: {
      title: "Přístupová skupina My2N pro všechny uživatele",
      lead: "Přístupová skupina, do které patří všichni uživatelé lokality, i ti přidaní později.",
      description:
        "Správce lokality ji označí jako skupinu pro všechny uživatele: přidají se do ní všichni stávající a každý nový se do ní dostane automaticky. Celou funkci jsem dotáhl od začátku do konce.",
      details:
        "Stojí na dědění skupin: každá lokalita má skrytou skupinu svých uživatelů, ze které cílová skupina dědí, takže členové se propojují, nekopírují. Zapnutí režimu načte uživatele lokality z jiné mikroslužby, vytvoří chybějící přístupy a pošle přístupové údaje na zařízení skupiny. Vypnutí propojení zruší a tyto údaje odvolá, ručně přidaní členové ve skupině zůstanou. Noví uživatelé se přidávají automaticky na základě tří událostí z Kafky.",
      facts: [
        { label: "Rozsah", value: "Frontend · Backend · Databáze" },
      ],
      diagram: { existing: "Stávající uživatelé", joining: "Noví, automaticky", group: "Všichni uživatelé" },
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
    source: "Zdrojový kód tohoto webu",
  },
  notFound: { title: "Stránka nenalezena", home: "Domovská stránka", otherLanguage: "English version" },
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
      type: "Plný\u00a0úvazek",
      text: "Teď pracuji napříč celým stackem a s větší odpovědností. Přidal jsem se k backendovému týmu, který plánuje novou backendovou aplikaci, a připravil jsem její výchozí kód. Jsem také členem AI Committee a aktivně prosazuji programování s pomocí AI, ve 2N k tomu používáme GitHub Copilot. Ostatním týmům pomáhám dokumentovat jejich produkty na webu, který jsem postavil.",
    },
    "software-engineer": {
      title: "Software Engineer",
      shortTitle: "Software Engineer",
      type: "Plný\u00a0úvazek",
      text: "Po bakalářském studiu jsem pracoval na frontendu i backendu My2N, na backendu hlavně s Javou, WebFluxem a Kafkou.",
    },
    "junior-developer": {
      title: "Junior JavaScript / React Developer",
      shortTitle: "Junior JavaScript / React Developer",
      type: "Částečný\u00a0úvazek",
      text: "Na webu My2N jsem pracoval na frontendu v Reactu a nový kód psal v TypeScriptu, v agilním týmu spolu s backendem a QA.",
    },
    bachelor: {
      title: "Bakalářský titul v oboru Softwarový vývoj",
      shortTitle: "Bakalářský titul v oboru Softwarový vývoj",
      type: "Prezenční\u00a0studium",
      text: "V bakalářské práci jsem srovnal Material UI, Ant Design a shadcn/ui na implementacích CRUD tabulky, vícekrokového formuláře a dashboardu v Reactu. Se spolužáky jsem pracoval na skupinových projektech, například na videotéce a měření teploty pomocí IoT zařízení.",
    },
    promoter: {
      title: "Promotér značek Acer a Microsoft v Alza.cz",
      shortTitle: "Promotér značek Acer a Microsoft",
      type: "Částečný\u00a0úvazek",
      text: "Po školeních o nových produktech Acer, Microsoft a Intel jsem v showroomu Alzy v Holešovicích propagoval Acer a Microsoft a zákazníkům hlavně radil s výběrem notebooku.",
    },
  },
};
