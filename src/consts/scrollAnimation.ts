export const scrollAnimation = (index?: number) => ({
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  transition: { duration: 0.5, delay: index ? index * 0.2 : 0 },
  variants: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
});