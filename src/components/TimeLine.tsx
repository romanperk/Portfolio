import { career, formatRange } from "../consts/career";
import { Row } from "./Section";

export const TimeLine = () => (
  <ol>
    {career.map((entry) => (
      <li key={entry.id}>
        <Row
          meta={
            <>
              <p className={entry.end ? undefined : "text-accent-ink"}>{formatRange(entry)}</p>
              <p>{entry.type}</p>
            </>
          }
        >
          <h3 className="text-xl font-medium">{entry.title}</h3>
          <p className="mt-1 text-sm text-body">{entry.employer}</p>
          <p className="mt-3 max-w-[65ch] leading-7 text-body">{entry.text}</p>
        </Row>
      </li>
    ))}
  </ol>
);
