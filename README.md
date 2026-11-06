# Roman Perk's portfolio

Personal site of Roman Perk, a software engineer at 2N working across the frontend and backend of the My2N platform. It is a single page covering experience, projects and contact details, in light and dark.

## What's on the page

- **Home:** a short introduction, contact links, the tech stack and a chart of the career drawn to scale.
- **Experience:** a timeline of jobs and education, with dates and durations.
- **Projects:** project descriptions and links, with screenshots that open in a full screen viewer.

The site also has:

- A theme toggle that follows the OS setting until the visitor picks a theme, then remembers that choice in `localStorage`.
- English at `/` and Czech at `/cs`, with a language switch in the nav bar.
- A not found page for any other path.
- A skip to content link for keyboard users.

## Tech stack

- React 19 and TypeScript
- Vite
- Tailwind CSS 4
- IBM Plex Sans and IBM Plex Mono, self-hosted through Fontsource
- React Icons
- Vercel for hosting and analytics

## Getting started

```sh
npm install
npm run dev
```

The dev server runs with `--host`, so it can also be opened from other devices on your network, such as a phone.

## Scripts

| Command           | What it does                                     |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Starts the dev server                            |
| `npm run build`   | Type checks the project and builds it to `dist`  |
| `npm run preview` | Serves the production build locally              |
| `npm run lint`    | Runs ESLint                                      |

## Project structure

```text
src/
  assets/       Logo, favicon and project screenshots
  components/   Shared UI: nav bar, career chart, timeline, gallery, theme toggle
  consts/       Career facts and date helpers
  i18n/         All text, in English (en.ts) and Czech (cs.ts)
  pages/        Page sections: Home, Experience, Projects, plus NotFound
  App.tsx       Puts the sections together
  index.css     Theme colors and global styles
```

## Updating the content

**Text:** all wording lives in `src/i18n/en.ts` and `src/i18n/cs.ts`. `cs.ts` is typed against `en.ts`, so the build fails if a Czech string is missing.

**Career:** dates and employers are in `src/consts/career.ts`, and the wording is under the same id in `src/i18n`. The experience list and the career chart both read from there. Entries go newest first, and the current role leaves out `end`.

**Tech stack:** edit the `stack` list in `src/pages/Home.tsx`.

**Projects:** edit `src/pages/Projects.tsx`, with the wording in `src/i18n`.

**Screenshots:** each one needs a light and a dark version in `src/assets/projects`. Import both in `src/pages/Projects.tsx` and add them to the `screenshots` list with a caption and alt text. `ScreenshotGallery` shows them as thumbnails, and the full screen viewer supports swiping, arrow keys and buttons.

## Deployment

The site is deployed on Vercel. `vercel.json` rewrites every path to `/`, and `App.tsx` shows the not found page for anything other than `/` and `/cs`.

## Links

- [GitHub](https://github.com/romanperk)
- [LinkedIn](https://www.linkedin.com/in/roman-perk/)
