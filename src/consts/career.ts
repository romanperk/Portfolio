import { t } from "../i18n";
import type { Messages } from "../i18n/en";

export interface YearMonth {
  year: number;
  /** 1 to 12 */
  month: number;
}

type CareerId = keyof Messages["career"];

export type CareerEntry = Messages["career"][CareerId] & {
  id: CareerId;
  employer: string;
  kind: "work" | "education";
  start: YearMonth;
  /** Left out for the current role. */
  end?: YearMonth;
};

/** Newest first. The wording of each entry lives in src/i18n, under the same id. */
const entries: Omit<CareerEntry, keyof Messages["career"][CareerId]>[] = [
  {
    id: "experienced-engineer",
    employer: "2N TELEKOMUNIKACE a.s.",
    kind: "work",
    start: { year: 2026, month: 1 },
  },
  {
    id: "software-engineer",
    employer: "2N TELEKOMUNIKACE a.s.",
    kind: "work",
    start: { year: 2025, month: 7 },
    end: { year: 2025, month: 12 },
  },
  {
    id: "junior-developer",
    employer: "2N TELEKOMUNIKACE a.s.",
    kind: "work",
    start: { year: 2024, month: 7 },
    end: { year: 2025, month: 6 },
  },
  {
    id: "bachelor",
    employer: "Unicorn University",
    kind: "education",
    start: { year: 2022, month: 9 },
    end: { year: 2025, month: 6 },
  },
  {
    id: "promoter",
    employer: "Acer s.r.o.",
    kind: "work",
    start: { year: 2021, month: 10 },
    end: { year: 2022, month: 6 },
  },
];

/** The experience list and the career chart both read from here. */
export const career: CareerEntry[] = entries.map((entry) => ({ ...entry, ...t.career[entry.id] }));

export const today = (): YearMonth => {
  const now = new Date();
  return { year: now.getFullYear(), month: now.getMonth() + 1 };
};

/** Months since year 0, so two dates can be subtracted or placed on a scale. */
export const toMonths = ({ year, month }: YearMonth) => year * 12 + month - 1;

export const formatRange = ({ start, end }: CareerEntry) =>
  `${t.dates.month(start)} – ${end ? t.dates.month(end) : t.dates.present}`;

/** Counts both the first and the last month, the way LinkedIn does. */
export const formatDuration = ({ start, end }: CareerEntry) => {
  const total = toMonths(end ?? today()) - toMonths(start) + 1;
  return t.dates.duration(Math.floor(total / 12), total % 12);
};
