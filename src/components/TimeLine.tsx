import { currentSpan, currentSteps, earlier, formatDuration, formatRange } from "../consts/career";
import { t } from "../i18n";
import { Row } from "./Section";

// The roles at the current employer share one row, newest first, so the promotions read
// as one path; the career chart on the home page draws the same path to scale. Each step
// carries its own dates, so the meta column names the employer and total time instead of
// repeating the range. Earlier entries follow as one compact, secondary row.
export const TimeLine = () => (
  <ol>
    <li>
      <Row
        meta={
          <>
            <h3 className="font-sans text-sm leading-5 text-ink">
              {currentSpan.employer}
              <span className="sr-only">, {formatRange(currentSpan)}</span>
            </h3>
            <p>{formatDuration(currentSpan)}</p>
          </>
        }
      >
        <ol className="space-y-8 border-l border-line">
          {currentSteps.map((entry) => (
            <li key={entry.id} className="relative pl-6">
              <span
                aria-hidden="true"
                className={`absolute top-2.5 -left-[3px] size-[7px] rounded-[2px] ${entry.end ? "bg-muted" : "bg-accent"}`}
              />
              <h4 className="text-xl font-medium text-balance">{entry.title}</h4>
              <p className="mt-1 font-mono text-[13px] leading-5 text-muted tabular-nums">
                <span className={entry.end ? undefined : "text-accent-ink"}>{formatRange(entry)}</span>
                {" · "}
                {formatDuration(entry)}
                {" · "}
                {entry.type}
              </p>
              <p className="mt-3 max-w-[60ch] leading-7 text-pretty text-body">{entry.text}</p>
            </li>
          ))}
        </ol>
      </Row>
    </li>
    <li>
      <Row meta={<h3 className="font-sans text-sm leading-5 text-ink">{t.experienceEarlier}</h3>}>
        <ol className="space-y-6">
          {earlier.map((entry) => (
            <li key={entry.id}>
              <h4 className="font-medium text-balance">{entry.title}</h4>
              <p className="mt-0.5 text-sm leading-6 text-body">{entry.employer}</p>
              <p className="font-mono text-[13px] leading-5 text-muted tabular-nums">
                {formatRange(entry)}
                {" · "}
                {formatDuration(entry)}
                {" · "}
                {entry.type}
              </p>
              <p className="mt-2 max-w-[60ch] text-sm leading-6 text-pretty text-body">{entry.text}</p>
            </li>
          ))}
        </ol>
      </Row>
    </li>
  </ol>
);
