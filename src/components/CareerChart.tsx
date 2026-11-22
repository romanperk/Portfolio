import type { ReactNode } from "react";
import {
  career,
  currentSpan,
  currentSteps,
  earlier,
  formatDuration,
  formatRange,
  today,
  toMonths,
  type CareerEntry,
} from "../consts/career";
import { t } from "../i18n";

const end = today();
const scaleStart = Math.min(...career.map((entry) => toMonths(entry.start)));
const scaleEnd = toMonths(end) + 1;
const position = (months: number) => ((months - scaleStart) / (scaleEnd - scaleStart)) * 100;
const span = ({ start, end }: Pick<CareerEntry, "start" | "end">) => {
  const left = position(toMonths(start));
  return { left: `${left}%`, width: `${(end ? position(toMonths(end) + 1) : 100) - left}%` };
};

const firstYear = Math.ceil(scaleStart / 12);
const years = Array.from({ length: end.year - firstYear + 1 }, (_, index) => firstYear + index);

/** Year gridlines sit behind a bar only, so they never cross label text. */
const Track = ({ className, children }: { className: string; children: ReactNode }) => (
  <div aria-hidden="true" className={`relative ${className}`}>
    {years.map((year) => (
      <span key={year} className="absolute -inset-y-1 w-px bg-line" style={{ left: `${position(year * 12)}%` }} />
    ))}
    {children}
  </div>
);

// Oldest step is lowest; each promotion raises the bar by one step.
const stepHeight = (entry: CareerEntry) => (currentSteps.length - currentSteps.indexOf(entry)) * 6 - 2;

export const CareerChart = () => (
  <figure className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
    <figcaption className="text-sm text-body">
      {t.chartCaption(formatDuration(currentSpan), currentSteps.length - 1)}
    </figcaption>

    <div className="mt-5">
      <p className="text-sm font-medium text-ink">
        {currentSpan.employer}
        <span className="sr-only">, {formatRange(currentSpan)}</span>
      </p>
      <Track className="mt-2 h-4">
        {currentSteps.map((entry) => (
          <span
            key={entry.id}
            className={`absolute bottom-0 rounded-[2px] ${entry.end ? "bg-body" : "bg-accent"}`}
            style={{ ...span(entry), height: stepHeight(entry), boxShadow: "-2px 0 0 var(--surface)" }}
          />
        ))}
      </Track>
      <ol className="mt-3 space-y-1">
        {currentSteps.map((entry) => (
          <li key={entry.id} className="grid grid-cols-[4.5rem_1fr] gap-x-3 text-sm leading-5">
            <span
              aria-hidden="true"
              className={`font-mono text-xs leading-5 tabular-nums ${entry.end ? "text-muted" : "text-accent-ink"}`}
            >
              {t.dates.month(entry.start)}
            </span>
            <span className={entry.end ? "text-body" : "text-ink"}>
              {entry.shortTitle}
              <span className="sr-only">, {formatRange(entry)}</span>
            </span>
          </li>
        ))}
      </ol>

      <ol className="mt-6 space-y-3">
        {earlier.map((entry) => (
          <li key={entry.id}>
            <div className="flex items-baseline justify-between gap-4 text-xs text-muted">
              <span>
                {entry.shortTitle}
                <span className="sr-only">, {formatRange(entry)}</span>
              </span>
              <span className="shrink-0 font-mono tabular-nums">{formatDuration(entry)}</span>
            </div>
            <Track className="mt-1.5 h-1.5">
              <span
                className={`absolute inset-y-0 rounded-[2px] ${entry.kind === "education" ? "border border-muted/70" : "bg-muted/50"}`}
                style={span(entry)}
              />
            </Track>
          </li>
        ))}
      </ol>

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
    </div>

    {/* The key repeats what the text above already says, so screen readers skip it. */}
    <ul aria-hidden="true" className="mt-5 flex flex-wrap gap-x-5 gap-y-1 border-t border-line pt-4 text-xs text-muted">
      <li className="flex items-center gap-2">
        <span className="h-2 w-3 rounded-[2px] bg-accent" />
        {t.chart.key.current}
      </li>
      <li className="flex items-center gap-2">
        <span className="flex items-end gap-px">
          <span className="h-1 w-1.5 rounded-[1px] bg-body" />
          <span className="h-2 w-1.5 rounded-[1px] bg-body" />
        </span>
        {t.chart.key.promotion}
      </li>
      <li className="flex items-center gap-2">
        <span className="h-1.5 w-3 rounded-[2px] border border-muted/70" />
        {t.chart.key.study}
      </li>
    </ul>
  </figure>
);
