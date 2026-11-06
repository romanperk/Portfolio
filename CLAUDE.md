# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev`: start the dev server, also reachable from other devices on the network
- `npm run lint`: run ESLint
- `npm run build`: type check with `tsc -b`, then build to `dist`
- `npm run preview`: serve the production build
- `npm audit --omit=dev`: check production dependencies for known vulnerabilities

There is no test runner and no CI. The checks below are the only safety net, because nothing else stops a broken change from reaching production.

## Before finishing a change

1. Run `npm run lint` and `npm run build`. Both must pass.
2. If any wording changed, check it against the translation rules below.
3. If `package.json` or `package-lock.json` changed, run `npm audit --omit=dev`.
4. If behavior, scripts or content locations changed, update `README.md`.

Report any check you skipped or that failed.

## Translations

All visible text lives in `src/i18n/en.ts` and `src/i18n/cs.ts`, including aria labels and image alt text. Don't hardcode wording in components. Every change to one file needs the matching change in the other, written as natural Czech or English rather than a literal translation.

`cs.ts` is typed as `Messages`, which is `typeof en`, so the build catches missing keys. It does not catch these, so check them by hand:

- Lists with different lengths in the two languages, such as `contact.languagesValue`
- Empty strings
- Czech text left in English, apart from names and terms that stay the same in both languages

## Architecture

The site is one page per language, with no router and no global state.

- **Language:** `src/i18n/index.ts` reads the locale from the URL once at load, `/cs` for Czech and everything else for English, and exports `t`. Switching language is a normal link that reloads the page, so `locale` and `t` are plain module constants rather than React state.
- **Routing:** `vercel.json` rewrites every path to `/`. `App.tsx` compares the path with `homePath` and renders `NotFound` when it doesn't match. A new top-level path needs a change there.
- **Page metadata:** `index.html` holds the English defaults, and `main.tsx` sets `lang` and the description for the current locale at runtime.
- **Career data:** facts such as employer and dates are in `src/consts/career.ts`, and wording is in `t.career` under the same id. They are merged into `career`, which feeds both the experience list and `CareerChart`. Entries go newest first, and the current role leaves out `end`.
- **Theme:** an inline script in `index.html` applies the saved choice as `data-theme` on `<html>` before first paint, and without a saved choice the CSS follows the OS setting. Colors are CSS variables in `src/index.css`.
  - Dark values are defined twice, once for the OS setting and once for `[data-theme="dark"]`, so change both.
  - Use the color variables rather than fixed colors, and check new UI in both themes.
- **Screenshots:** each one needs a light and a dark version in `src/assets/projects`, imported in `src/pages/Projects.tsx`.

## Career content

Career content differs from LinkedIn on purpose, so don't reconcile the two. Don't reword or change roles, employers, dates or the degree title without asking first.
