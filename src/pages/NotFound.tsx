import { homePath, otherHomePath, t } from "../i18n";

export const NotFound = () => {
  const otherLang = t.languageSwitch.short.toLowerCase();

  return (
    <main className="wrap flex min-h-svh flex-col items-start justify-center gap-6">
      <p className="font-mono text-[13px] text-muted">404</p>
      <h1 className="text-4xl font-medium tracking-[-0.02em] text-balance sm:text-5xl">{t.notFound.title}</h1>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
        <a href={homePath} className="btn btn-secondary">
          {t.notFound.home}
        </a>
        <a href={otherHomePath} hrefLang={otherLang} lang={otherLang} className="text-link text-[15px] text-body">
          {t.notFound.otherLanguage}
        </a>
      </div>
    </main>
  );
};
