import { currentSpan, currentSteps, earlier, formatDuration, formatRange, type CareerEntry } from "../consts/career";
import { Row } from "./Section";

const Body = ({ entry }: { entry: CareerEntry }) => (
  <p className="mt-3 max-w-[60ch] leading-7 text-pretty text-body">{entry.text}</p>
);

// The roles at the current employer share one row, newest first, so the promotions read
// as one path; the career chart on the home page draws the same path to scale.
export const TimeLine = () => (
  <ol>
    <li>
      <Row
        meta={
          <>
            <p className="text-accent-ink">{formatRange(currentSpan)}</p>
            <p>{formatDuration(currentSpan)}</p>
          </>
        }
      >
        <h3 className="text-sm text-body">{currentSpan.employer}</h3>
        <ol className="mt-4 space-y-8 border-l border-line">
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
              <Body entry={entry} />
            </li>
          ))}
        </ol>
      </Row>
    </li>
    {earlier.map((entry) => (
      <li key={entry.id}>
        <Row
          meta={
            <>
              <p>{formatRange(entry)}</p>
              <p>{formatDuration(entry)}</p>
              <p>{entry.type}</p>
            </>
          }
        >
          <h3 className="text-xl font-medium text-balance">{entry.title}</h3>
          <p className="mt-1 text-sm text-body">{entry.employer}</p>
          <Body entry={entry} />
        </Row>
      </li>
    ))}
  </ol>
);
