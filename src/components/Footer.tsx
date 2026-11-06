import type { ReactNode } from "react";
import { ExternalLink } from "./ExternalLink";
import { t } from "../i18n";

const details: { label: string; value: ReactNode }[] = [
  { label: "GitHub", value: <ExternalLink href="https://github.com/romanperk">romanperk</ExternalLink> },
  { label: "LinkedIn", value: <ExternalLink href="https://www.linkedin.com/in/roman-perk/">roman-perk</ExternalLink> },
  { label: t.contact.location, value: t.contact.locationValue },
  {
    label: t.contact.languages,
    value: (
      <>
        {t.contact.languagesValue.map((language) => (
          <span key={language} className="block">
            {language}
          </span>
        ))}
      </>
    ),
  },
];

export const Footer = () => (
  <footer id="contact" aria-labelledby="contact-title" className="bg-raised">
    <div className="wrap pt-12 pb-6 sm:pt-16">
      <div className="grid gap-x-16 gap-y-10 xl:grid-cols-[auto_1fr]">
        <div>
          <h2 id="contact-title" className="text-body">
            {t.contact.title}
          </h2>
          <a
            href="mailto:perkroman@gmail.com"
            className="text-link mt-2 inline-block text-2xl font-medium tracking-[-0.02em] sm:text-[2rem] sm:leading-10"
          >
            perkroman@gmail.com
          </a>
        </div>

        <dl className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-6 sm:grid-cols-[repeat(4,auto)] sm:justify-between xl:justify-end xl:gap-x-12">
          {details.map(({ label, value }) => (
            <div key={label}>
              <dt className="font-mono text-[13px] leading-5 text-muted">{label}</dt>
              <dd className="mt-2 text-[15px] leading-6 sm:whitespace-nowrap">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <p className="mt-12 border-t border-line pt-6 text-sm text-muted">&copy; {new Date().getFullYear()} Roman Perk</p>
    </div>
  </footer>
);
