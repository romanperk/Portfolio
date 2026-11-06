import type { ReactNode } from "react";

export const Section = ({ id, title, children }: { id: string; title: string; children: ReactNode }) => (
  // Spacing above is a margin, not padding, so nav links land right at the heading.
  <section id={id} aria-labelledby={`${id}-title`} className="mt-16 sm:mt-24">
    <div className="wrap pb-16 sm:pb-24">
      <h2 id={`${id}-title`} className="mb-8 text-3xl font-medium tracking-[-0.02em] sm:text-4xl">
        {title}
      </h2>
      {children}
    </div>
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
