import type { ReactNode } from "react";
import { LuArrowUpRight } from "react-icons/lu";

export const ExternalLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-link inline-flex items-center gap-1">
    {children}
    <LuArrowUpRight size={16} strokeWidth={1.5} className="text-muted" aria-hidden="true" />
  </a>
);
