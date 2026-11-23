import { useLayoutEffect, useRef, type ReactNode } from "react";
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
// From the first day at 2N to the latest promotion: the speed, not the tenure (the 2N row shows that).
const promotionMonths = toMonths(currentSteps[0].start) - toMonths(currentSpan.start);
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

// Oldest step is lowest; each promotion raises the bar by a full step, tall enough to read as a climb.
const stepHeight = (entry: CareerEntry) => (currentSteps.length - currentSteps.indexOf(entry)) * 18 - 2;

/*
 * The intro plots the staircase like a pen: a marker rides along the top of each step, oldest
 * first, the bar drawing in behind it, then climbs to the next. Steady speed reads as plotting;
 * only the last step eases in. The headline and the role list never animate, so a glance or a
 * screenshot mid-intro still reads the true count.
 */
const drawMs = 1400;
const climbMs = 180;
const settle = "cubic-bezier(0.16, 1, 0.3, 1)";
const promotions = currentSteps.length - 1;
const plotStart = position(toMonths(currentSpan.start));

let clock = 250;
const plot = [...currentSteps].reverse().map((entry, index) => {
  if (index > 0) clock += climbMs;
  const from = position(toMonths(entry.start));
  const to = entry.end ? position(toMonths(entry.end) + 1) : 100;
  const start = clock;
  clock += ((to - from) / (100 - plotStart)) * drawMs;
  return { entry, from, to, height: stepHeight(entry), start, end: clock, last: index === promotions };
});
const plotMs = clock;

// Read once, like the locale: the intro either plays or the chart is drawn from the start.
const motion = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const CareerChart = () => {
  const figureRef = useRef<HTMLElement>(null);
  const markerRef = useRef<HTMLSpanElement>(null);
  const barRefs = useRef<Record<string, HTMLSpanElement | null>>({});

  // A layout effect, so the chart hides before its first paint instead of flashing fully drawn.
  useLayoutEffect(() => {
    if (!motion || !figureRef.current || !markerRef.current) return;

    const animations = plot.map(({ entry, start, end, last }) =>
      barRefs.current[entry.id]!.animate([{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }], {
        delay: start,
        duration: end - start,
        easing: last ? settle : "linear",
        fill: "both",
      }),
    );
    animations.push(
      markerRef.current.animate(
        [
          { left: `${plot[0].from}%`, bottom: `${plot[0].height}px`, opacity: 0, offset: 0 },
          ...plot.flatMap(({ from, to, height, start, end, last }) => [
            { left: `${from}%`, bottom: `${height}px`, opacity: 1, offset: start / plotMs, easing: last ? settle : "linear" },
            { left: `${to}%`, bottom: `${height}px`, opacity: 1, offset: end / plotMs },
          ]),
        ],
        { duration: plotMs, fill: "both" },
      ),
    );
    animations.forEach((animation) => animation.pause());

    // On a phone the chart sits below the fold, so it plays when it's actually seen.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        animations.forEach((animation) => animation.play());
      },
      // Low enough to fire on a landscape phone, where the whole chart never fits on screen.
      { threshold: 0.3 },
    );
    observer.observe(figureRef.current);

    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
  }, []);

  return (
    // No card or legend: every row is labelled where it is drawn, so the chart explains itself.
    <figure ref={figureRef}>
      {/* The headline is the chart's point; the bars below are its evidence. */}
      <figcaption className="text-lg leading-7 font-medium tracking-[-0.01em] text-balance text-ink sm:text-xl">
        {t.chartCaption(promotions, promotionMonths)}
      </figcaption>

      <div className="mt-6">
        {/* The 2N row has the same anatomy as the rows below it: name and duration over the bar. */}
        <div className="flex items-baseline justify-between gap-4 text-[13px]">
          <span className="font-medium text-ink">
            {currentSpan.shortName}
            <span className="sr-only">, {formatRange(currentSpan)}</span>
          </span>
          <span className="shrink-0 font-mono text-muted tabular-nums">{formatDuration(currentSpan)}</span>
        </div>
        <Track className="mt-2 h-[52px]">
          {currentSteps.map((entry) => (
            <span
              key={entry.id}
              ref={(element) => {
                barRefs.current[entry.id] = element;
              }}
              className={`absolute bottom-0 origin-left rounded-[2px] ${entry.end ? "bg-body" : "bg-accent"}`}
              style={{ ...span(entry), height: stepHeight(entry), boxShadow: "-2px 0 0 var(--page)" }}
            />
          ))}
          {/* Where the staircase stands today; the same square as the markers in the experience timeline. */}
          <span
            ref={markerRef}
            className="absolute size-[7px] -translate-x-1/2 translate-y-1/2 rounded-[2px] bg-ink"
            style={{ left: "100%", bottom: plot[promotions].height, boxShadow: "0 0 0 2px var(--page)" }}
          />
        </Track>

        <ol className="mt-5 space-y-3">
          {earlier.map((entry) => (
            <li key={entry.id}>
              <div className="flex items-baseline justify-between gap-4 text-[13px] text-muted">
                <span>
                  {entry.shortTitle}
                  <span className="sr-only">, {formatRange(entry)}</span>
                </span>
                <span className="shrink-0 font-mono tabular-nums">{formatDuration(entry)}</span>
              </div>
              {/* Full muted keeps 3:1 against the page; thinner bars, not fainter ones, keep these quieter than 2N. */}
              <Track className="mt-1.5 h-1.5">
                <span
                  className={`absolute inset-y-0 rounded-[2px] ${entry.kind === "education" ? "border border-muted" : "bg-muted"}`}
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
              className="absolute -translate-x-1/2 font-mono text-[13px] leading-4 text-muted tabular-nums"
              style={{ left: `${position(year * 12)}%` }}
            >
              {year}
            </span>
          ))}
        </div>
      </div>

      {/* The steps of the 2N staircase, oldest at the bottom like the bars, each marked like the timeline below. */}
      <ol className="mt-5 space-y-1 border-t border-line pt-4">
        {currentSteps.map((entry) => (
          <li key={entry.id} className="grid grid-cols-[7px_4.5rem_1fr] items-baseline gap-x-3 text-sm leading-5">
            <span aria-hidden="true" className={`size-[7px] rounded-[2px] ${entry.end ? "bg-body" : "bg-accent"}`} />
            <span
              aria-hidden="true"
              className={`font-mono text-[13px] leading-5 tabular-nums ${entry.end ? "text-muted" : "text-accent-ink"}`}
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
    </figure>
  );
};
