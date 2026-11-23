import type { ReactNode } from "react";

export const Section = ({
  id,
  title,
  children,
  band,
}: {
  id: string;
  title: string;
  children: ReactNode;
  /** Full-width content after the rest of the section, outside the page column. */
  band?: ReactNode;
}) => (
  // Spacing above is a margin, not padding, so nav links land right at the heading.
  // Only spacing above, so stacked sections don't double up; <main> pads below the last one.
  <section id={id} aria-labelledby={`${id}-title`} className="mt-16 sm:mt-24">
    <div className="wrap">
      <h2 id={`${id}-title`} className="section-title mb-8 sm:mb-10">
        {title}
      </h2>
      {children}
    </div>
    {band}
  </section>
);

/** One line of the changelog: quiet mono meta on the left, content on the right. */
export const Row = ({ meta, children, dense = false }: { meta: ReactNode; children: ReactNode; dense?: boolean }) => (
  <div
    className={`grid gap-x-8 gap-y-2 border-t border-line md:grid-cols-[12rem_1fr] ${dense ? "py-4 md:items-baseline" : "py-8"}`}
  >
    <div className="font-mono text-[13px] leading-5 text-muted tabular-nums">{meta}</div>
    <div className="min-w-0">{children}</div>
  </div>
);
