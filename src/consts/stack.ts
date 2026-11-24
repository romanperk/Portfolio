import type { Messages } from "../i18n/en";

/** Named under the role and set in full ink in the stack list. Every one also appears in `stack`. */
export const core = ["React", "TypeScript", "Java", "Kafka"];

export const stack: [keyof Messages["home"]["stackGroups"], string[]][] = [
  ["frontend", ["React", "JavaScript", "TypeScript", "Material UI", "Tailwind CSS"]],
  ["backend", ["Java", "Kotlin", "Spring WebFlux", "Kafka"]],
  ["tooling", ["AWS", "GitHub", "GitLab", "GitHub Copilot", "Claude Code"]],
];
