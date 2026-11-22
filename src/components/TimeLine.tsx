import { career, formatDuration, formatRange } from "../consts/career";
import { CareerBar } from "./CareerChart";
import { Row } from "./Section";

// Each row repeats its bar from the career chart on the same scale, so read down the
// meta column the timeline redraws the chart, one role at a time.
export const TimeLine = () => (
  <ol>
    {career.map((entry) => (
      <li key={entry.id}>
        <Row
          meta={
            <>
              <div className="pt-2.5 pb-4 md:max-w-[12rem]">
                <CareerBar entry={entry} />
              </div>
              <p className={entry.end ? undefined : "text-accent-ink"}>{formatRange(entry)}</p>
              <p>{formatDuration(entry)}</p>
              <p>{entry.type}</p>
            </>
          }
        >
          <h3 className={`font-medium text-balance ${entry.end ? "text-xl" : "text-2xl"}`}>{entry.title}</h3>
          <p className="mt-1 text-sm text-body">{entry.employer}</p>
          <p className="mt-3 max-w-[65ch] leading-7 text-pretty text-body">{entry.text}</p>
        </Row>
      </li>
    ))}
  </ol>
);
