import { homePath, t } from "../i18n";

export const NotFound = () => (
  <main className="wrap flex min-h-svh flex-col items-start justify-center gap-6">
    <p className="font-mono text-[13px] text-muted">404</p>
    <h1 className="text-4xl font-medium tracking-[-0.02em] sm:text-5xl">{t.notFound.title}</h1>
    <a href={homePath} className="btn btn-secondary">
      {t.notFound.home}
    </a>
  </main>
);
