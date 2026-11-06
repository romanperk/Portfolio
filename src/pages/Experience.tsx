import { Section } from "../components/Section";
import { TimeLine } from "../components/TimeLine";
import { t } from "../i18n";

export const Experience = () => (
  <Section id="experience" title={t.experienceTitle}>
    <TimeLine />
  </Section>
);
