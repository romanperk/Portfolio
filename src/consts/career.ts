export interface YearMonth {
  year: number;
  /** 1 to 12 */
  month: number;
}

export interface CareerEntry {
  id: string;
  title: string;
  /** Used where space is tight, like the career chart. */
  shortTitle: string;
  employer: string;
  type: string;
  kind: "work" | "education";
  start: YearMonth;
  /** Left out for the current role. */
  end?: YearMonth;
  text: string;
}

/** Newest first. The experience list and the career chart both read from here. */
export const career: CareerEntry[] = [
  {
    id: "experienced-engineer",
    title: "Experienced Software Engineer",
    shortTitle: "Experienced Software Engineer",
    employer: "2N TELEKOMUNIKACE a.s.",
    type: "Full-time",
    kind: "work",
    start: { year: 2026, month: 1 },
    text: "While taking on increased responsibility, I progressed into the role of Experienced Engineer. In this role, I led the preparation of a new website for company documentation, which is now finished.",
  },
  {
    id: "software-engineer",
    title: "Software Engineer",
    shortTitle: "Software Engineer",
    employer: "2N TELEKOMUNIKACE a.s.",
    type: "Full-time",
    kind: "work",
    start: { year: 2025, month: 7 },
    end: { year: 2025, month: 12 },
    text: "After completing my Bachelor’s degree, I expanded my skills across both the frontend and backend of My2N, with backend work mainly in Java, WebFlux and Kafka.",
  },
  {
    id: "junior-developer",
    title: "Junior JavaScript / React Developer",
    shortTitle: "Junior JavaScript / React Developer",
    employer: "2N TELEKOMUNIKACE a.s.",
    type: "Part-time",
    kind: "work",
    start: { year: 2024, month: 7 },
    end: { year: 2025, month: 6 },
    text: "Frontend developer in the My2N development team, contributing to the frontend codebase of the My2N website and working with backend, QA, the Scrum Master and the Product Owner, using Jira and an Agile process of stand-ups, refinements, estimations and user story mapping. The stack was React in JavaScript, with new code in TypeScript, plus MUI, React Hook Form, Redux, Redux Toolkit, the Jest testing library and GitLab.",
  },
  {
    id: "bachelor",
    title: "Bachelor’s degree in Software Development",
    shortTitle: "Bachelor’s degree in Software Development",
    employer: "Unicorn University",
    type: "Full-time study",
    kind: "education",
    start: { year: 2022, month: 9 },
    end: { year: 2025, month: 6 },
    text: "Gained knowledge in React.js, JavaScript, Java, AI, project management and mathematics. Worked with colleagues on group projects, including a video library and temperature tracking with an IoT device. Successfully defended a thesis comparing Material UI, Ant Design and shadcn/ui through React implementations of a CRUD table, a multistep form and a dashboard.",
  },
  {
    id: "promoter",
    title: "Promoter for Acer and Microsoft at Alza.cz",
    shortTitle: "Promoter for Acer and Microsoft",
    employer: "Acer s.r.o.",
    type: "Part-time",
    kind: "work",
    start: { year: 2021, month: 10 },
    end: { year: 2022, month: 6 },
    text: "Work included training on new products regarding the brand Acer, Microsoft and Intel.",
  },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const today = (): YearMonth => {
  const now = new Date();
  return { year: now.getFullYear(), month: now.getMonth() + 1 };
};

/** Months since year 0, so two dates can be subtracted or placed on a scale. */
export const toMonths = ({ year, month }: YearMonth) => year * 12 + month - 1;

const formatMonth = ({ year, month }: YearMonth) => `${MONTHS[month - 1]} ${year}`;

export const formatRange = ({ start, end }: CareerEntry) =>
  `${formatMonth(start)} – ${end ? formatMonth(end) : "Present"}`;

/** Counts both the first and the last month, the way LinkedIn does. */
export const formatDuration = ({ start, end }: CareerEntry) => {
  const total = toMonths(end ?? today()) - toMonths(start) + 1;
  const years = Math.floor(total / 12);
  const months = total % 12;
  return [years && `${years} yr`, months && `${months} mo`].filter(Boolean).join(" ");
};
