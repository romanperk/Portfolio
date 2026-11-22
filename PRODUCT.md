# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Recruiters and hiring managers** screening candidates, usually quickly and often on a phone. They need to see role, seniority, stack and contact within seconds.
- **The Czech job market** specifically: Czech companies and recruiters, served by the Czech version at `/cs`.
- **A personal home on the web**: the canonical place people land when they look Roman up, not only during a job search.

## Product Purpose

A single-page personal portfolio for Roman Perk, a software engineer at 2N working across the frontend and backend of the My2N platform. It presents experience, projects and contact details in English and Czech, in light and dark. Success means a recruiter understands who Roman is, what he works with and how to reach him without scrolling far, and comes away wanting to talk.

## Positioning

Expertise first, proven by growth (recommended during init; the user was unsure between the two and can revise this). The first read is concrete expertise: frontend-first engineering in React and TypeScript, with real backend work in Java, WebFlux and Kafka on a production platform. The trajectory is the evidence behind it: part-time junior to Software Engineer to Experienced Software Engineer at 2N between mid-2024 and early 2026, leading the new company documentation website, alongside a completed Bachelor's degree. Growth supports the expertise claim rather than replacing it.

## Operating Context

- Visitors arrive from LinkedIn, CVs, job applications and direct links, often on mobile.
- English at `/`, Czech at `/cs`; switching language reloads the page.
- Light and dark themes, following the OS until the visitor chooses.
- Hosted on Vercel with Vercel Analytics.

## Capabilities and Constraints

- Sections: Home (intro, contact links, stack, career chart drawn to scale), Experience (timeline with dates), Projects (descriptions, links, screenshot gallery with full screen viewer), Contact, plus a not found page.
- React 19, TypeScript, Vite, Tailwind CSS 4, no router and no global state. See `CLAUDE.md` for architecture.
- All visible text lives in `src/i18n/en.ts` and `src/i18n/cs.ts`; every wording change needs both languages, written naturally.
- Every screenshot needs light and dark versions.
- No test runner or CI; lint and build are the only checks.

## Brand Commitments

- Name: Roman Perk. Existing logo and favicon in `src/assets`.
- Voice: plain, factual, first person, no hype.
- Career content (roles, employers, dates, degree title) differs from LinkedIn on purpose and must not be reworded or reconciled without asking.

## Evidence on Hand

- Career facts in `src/consts/career.ts`, wording in `t.career`.
- Two text-only 2N projects: the Docusaurus documentation website for 2N integrators, and the My2N all-users access group feature (delivered end to end). No public links; the user prefers not to link the docs site, and its screenshots would need light and dark versions.
- AI Committee member at 2N (GitHub Copilot at work, Claude Code at home).
- A personal project: a fan-made Pokédex PWA, with light and dark screenshots in `src/assets/projects` and live and source links. It must keep its fan-made disclaimer (not affiliated with Nintendo, Game Freak or The Pokémon Company).
- No testimonials, client logos, metrics or press exist. Future work must not fabricate any.

## Product Principles

1. Scannable in seconds: role, stack, seniority and contact come before anything else.
2. Show, don't claim: let dates, promotions and shipped work prove growth and skill instead of adjectives.
3. Truthful to the record: no invented facts, and career content stays exactly as written.
4. Equal in both languages: Czech is a first-class version, not a translation afterthought.
5. Finished over sprawling: a short page where every part is polished beats more sections.
