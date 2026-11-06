# Roman Perk's portfolio

Personal site of Roman Perk, a software engineer at 2N working across the frontend and backend of the My2N platform. It is a single page covering experience, projects and contact details, in light and dark.

## What's on the page

- **Home:** a short introduction, contact links, the tech stack and a chart of the career drawn to scale.
- **Experience:** a timeline of jobs and education, with dates and durations.
- **Projects:** project descriptions and links, with screenshots that open in a full screen viewer.

The site also has:

- A theme toggle that follows the OS setting until the visitor picks a theme, then remembers that choice in `localStorage`.
- A not found page for any path other than `/`.
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
  consts/       Career data and date helpers
  pages/        Page sections: Home, Experience, Projects, plus NotFound
  App.tsx       Puts the sections together
  index.css     Theme colors and global styles
```

## Updating the content

**Career:** edit `src/consts/career.ts`. The experience list and the career chart both read from that file, so a change only has to be made once. Entries go newest first, and the current role leaves out `end`.

**Tech stack:** edit the `stack` list in `src/pages/Home.tsx`.

**Projects:** edit `src/pages/Projects.tsx`.

**Screenshots:** each one needs a light and a dark version in `src/assets/projects`. Import both in `src/pages/Projects.tsx` and add them to the `screenshots` list with a caption and alt text. `ScreenshotGallery` shows them as thumbnails, and the full screen viewer supports swiping, arrow keys and buttons.

## Deployment

The site is deployed on Vercel. `vercel.json` rewrites every path to `/`, and `App.tsx` shows the not found page for anything else.

## Links

- [GitHub](https://github.com/romanperk)
- [LinkedIn](https://www.linkedin.com/in/roman-perk/)
