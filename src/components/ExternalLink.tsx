import type { ReactNode } from "react";
import { LuArrowUpRight } from "react-icons/lu";

export const ExternalLink = ({
  href,
  children,
  // 44px tall on phones, so the footer's text links are comfortable tap targets.
  className = "text-link inline-flex items-center gap-1 max-sm:min-h-11",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
    {children}
    <LuArrowUpRight size={16} strokeWidth={1.5} className="text-muted" aria-hidden="true" />
  </a>
);
