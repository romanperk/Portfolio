import React, { useState, useEffect, CSSProperties } from "react";
import { useTransition, animated, useSpringRef } from "@react-spring/web";

interface Slide {
  content: React.ReactNode;
  background?: string;
}

interface AnimatedSlidesProps {
  slides: Slide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const styles: { container: CSSProperties; slide: CSSProperties } = {
  container: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: "50%",
  },
  slide: {
    cursor: "pointer",
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
};

export function AnimatedSlides({
  slides,
  autoPlay = false,
  autoPlayInterval = 3000,
}: AnimatedSlidesProps) {
  const [index, set] = useState(0);
  const [lastInteraction, setLastInteraction] = useState(Date.now());

  const onClick = () => {
    set((state) => (state + 1) % slides.length);
    setLastInteraction(Date.now());
  };

  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  useEffect(() => {
    transRef.start();
  }, [index]);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        set((state) => (state + 1) % slides.length);
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, slides.length, lastInteraction]);

  return (
    <div style={styles.container} onClick={onClick}>
      {transitions((style, i) => {
        const slide = slides[i];
        return (
          <animated.div
            style={{
              ...styles.slide,
              ...style,
              background: slide.background || "transparent",
            }}
          >
            {slide.content}
          </animated.div>
        );
      })}
    </div>
  );
}
