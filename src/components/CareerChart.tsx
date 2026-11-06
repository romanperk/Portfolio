import { career, formatDuration, formatRange, today, toMonths } from "../consts/career";

export const CareerChart = () => {
  const end = today();
  const scaleStart = Math.min(...career.map((entry) => toMonths(entry.start)));
  const scaleEnd = toMonths(end) + 1;
  const position = (months: number) => ((months - scaleStart) / (scaleEnd - scaleStart)) * 100;

  const firstYear = Math.ceil(scaleStart / 12);
  const years = Array.from({ length: end.year - firstYear + 1 }, (_, index) => firstYear + index);

  return (
    <figure className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
      <figcaption className="text-sm text-body">Career, drawn to scale</figcaption>

      <div className="relative mt-5">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 bottom-7">
          {years.map((year) => (
            <span
              key={year}
              className="absolute inset-y-0 w-px bg-line"
              style={{ left: `${position(year * 12)}%` }}
            />
          ))}
        </div>

        <ol className="relative space-y-4">
          {career.map((entry) => {
            const left = position(toMonths(entry.start));
            const right = entry.end ? position(toMonths(entry.end) + 1) : 100;
            const isCurrent = !entry.end;
            const barStyle = isCurrent
              ? "bg-accent"
              : entry.kind === "education"
                ? "border border-muted"
                : "bg-muted";

            return (
              <li key={entry.id}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className={`text-sm ${isCurrent ? "font-medium text-ink" : "text-body"}`}>
                    {entry.shortTitle}
                    <span className="sr-only">, {formatRange(entry)}</span>
                  </span>
                  <span className="shrink-0 font-mono text-xs text-muted tabular-nums">
                    {formatDuration(entry)}
                  </span>
                </div>
                <div aria-hidden="true" className="relative mt-1.5 h-2">
                  <span
                    className={`absolute inset-y-0 rounded-[2px] ${barStyle}`}
                    style={{ left: `${left}%`, width: `${right - left}%` }}
                  />
                </div>
              </li>
            );
          })}
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
    </figure>
  );
};
