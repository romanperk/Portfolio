import { career, formatDuration, formatRange, today, toMonths, type CareerEntry } from "../consts/career";
import { t } from "../i18n";

// One scale for the whole page, so every bar lines up with the chart's.
const end = today();
const scaleStart = Math.min(...career.map((entry) => toMonths(entry.start)));
const scaleEnd = toMonths(end) + 1;
const position = (months: number) => ((months - scaleStart) / (scaleEnd - scaleStart)) * 100;

const firstYear = Math.ceil(scaleStart / 12);
const years = Array.from({ length: end.year - firstYear + 1 }, (_, index) => firstYear + index);

/** The entry's span on the career scale: amber for the current role, outlined for education. */
export const CareerBar = ({ entry }: { entry: CareerEntry }) => {
  const left = position(toMonths(entry.start));
  const right = entry.end ? position(toMonths(entry.end) + 1) : 100;
  const barStyle = !entry.end ? "bg-accent" : entry.kind === "education" ? "border border-muted" : "bg-muted";

  return (
    <div aria-hidden="true" className="relative h-2">
      {/* Year gridlines sit behind the bar only, so they never cross label text. */}
      {years.map((year) => (
        <span key={year} className="absolute -inset-y-1 w-px bg-line" style={{ left: `${position(year * 12)}%` }} />
      ))}
      <span
        className={`absolute inset-y-0 rounded-[2px] ${barStyle}`}
        style={{ left: `${left}%`, width: `${right - left}%` }}
      />
    </div>
  );
};

export const CareerChart = () => (
  <figure className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
    <figcaption className="text-sm text-body">{t.chartCaption}</figcaption>

    <div className="mt-5">
      <ol className="space-y-4">
        {career.map((entry) => {
          const isCurrent = !entry.end;
          return (
            <li key={entry.id}>
              <div className="flex items-baseline justify-between gap-4">
                <span className={`text-sm ${isCurrent ? "font-medium text-ink" : "text-body"}`}>
                  {entry.shortTitle}
                  <span className="sr-only">, {formatRange(entry)}</span>
                </span>
                <span className="shrink-0 font-mono text-xs text-muted tabular-nums">{formatDuration(entry)}</span>
              </div>
              <div className="mt-1.5">
                <CareerBar entry={entry} />
              </div>
            </li>
          );
        })}
      </ol>

      <YearAxis />
    </div>
  </figure>
);

const YearAxis = () => (
  <div aria-hidden="true" className="relative mt-3 h-4">
    {years.map((year) => (
      <span
        key={year}
        className="absolute -translate-x-1/2 font-mono text-xs leading-4 text-muted tabular-nums"
        style={{ left: `${position(year * 12)}%` }}
      >
        {year}
      </span>
    ))}
  </div>
);
