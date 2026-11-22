import { useEffect, useState, type ReactNode } from "react";
import { LuCheck, LuCopy } from "react-icons/lu";
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

const email = "perkroman@gmail.com";

const CopyEmail = () => {
  const [status, setStatus] = useState<"" | "copied" | "copyFailed">("");

  useEffect(() => {
    if (!status) return;
    const timer = setTimeout(() => setStatus(""), 2000);
    return () => clearTimeout(timer);
  }, [status]);

  // The Clipboard API only exists in secure contexts, so the button is left out elsewhere.
  if (!navigator.clipboard) return null;

  const copy = () =>
    navigator.clipboard.writeText(email).then(
      () => setStatus("copied"),
      () => setStatus("copyFailed"),
    );

  const Icon = status === "copied" ? LuCheck : LuCopy;

  return (
    <>
      <button
        type="button"
        onClick={copy}
        aria-label={t.contact.copyEmail}
        title={t.contact.copyEmail}
        className="flex size-11 shrink-0 items-center justify-center rounded-lg text-body transition-colors duration-150 hover:bg-page hover:text-ink"
      >
        <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
      </button>
      <span role="status" className="font-mono text-[13px] text-muted">
        {status && t.contact[status]}
      </span>
    </>
  );
};

export const Footer = () => (
  <footer id="contact" aria-labelledby="contact-title" className="bg-raised">
    <div className="wrap pt-12 pb-6 sm:pt-16">
      {/* Same heading as the other sections, so every nav link lands on one. */}
      <h2 id="contact-title" className="mb-8 text-3xl font-medium tracking-[-0.02em] sm:text-4xl">
        {t.contact.title}
      </h2>
      <div className="grid gap-x-16 gap-y-10 xl:grid-cols-[auto_1fr] xl:items-center">
        <div className="flex flex-wrap items-center gap-x-2">
          <a href={`mailto:${email}`} className="text-link text-xl font-medium sm:text-2xl">
            {email}
          </a>
          <CopyEmail />
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

      <div className="mt-12 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-line pt-6 text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Roman Perk</p>
        <ExternalLink href="https://github.com/romanperk/Portfolio">{t.contact.source}</ExternalLink>
      </div>
    </div>
  </footer>
);
