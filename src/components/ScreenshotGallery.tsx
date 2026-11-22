import { useRef, useState } from "react";
import type { KeyboardEvent, MouseEvent } from "react";
import { LuChevronLeft, LuChevronRight, LuX } from "react-icons/lu";
import { t } from "../i18n";

interface Screenshot {
  caption: string;
  alt: string;
  light: string;
  dark: string;
}

const iconButton =
  "flex size-10 items-center justify-center rounded-lg text-body transition-colors duration-150 hover:bg-raised hover:text-ink aria-disabled:pointer-events-none aria-disabled:opacity-40";

const ThemedImage = ({ screenshot, className }: { screenshot: Screenshot; className: string }) => (
  <>
    {/* The hidden image is display: none, so lazy loading skips it. */}
    <img src={screenshot.light} alt={screenshot.alt} width={720} height={1440} loading="lazy" decoding="async" className={`only-light ${className}`} />
    <img src={screenshot.dark} alt={screenshot.alt} width={720} height={1440} loading="lazy" decoding="async" className={`only-dark ${className}`} />
  </>
);

export const ScreenshotGallery = ({ screenshots }: { screenshots: Screenshot[] }) => {
  const [current, setCurrent] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const slidesRef = useRef<HTMLUListElement>(null);
  const thumbnailsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const usingKeyboard = useRef(false);

  const open = (index: number, event: MouseEvent) => {
    usingKeyboard.current = event.detail === 0; // A click from Enter or Space has a detail of 0.
    setCurrent(index);
    dialogRef.current?.showModal();
    // showModal focuses the close button, and some browsers show its outline even after a tap.
    if (!usingKeyboard.current) dialogRef.current?.focus();
    const slides = slidesRef.current;
    slides?.scrollTo({ left: index * slides.clientWidth, behavior: "instant" });
  };

  const close = () => dialogRef.current?.close();

  // Scrolling is the single source of position, so swipes, buttons and keys can't disagree.
  const goTo = (index: number) => {
    const slides = slidesRef.current;
    if (slides && index >= 0 && index < screenshots.length) slides.scrollTo({ left: index * slides.clientWidth });
  };

  // Focus the screenshot last shown, not the one that opened the viewer. Only keyboard users need focus there.
  const onClose = () => {
    const thumbnail = thumbnailsRef.current[current];
    if (usingKeyboard.current) {
      thumbnail?.focus();
    } else {
      if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
      thumbnail?.scrollIntoView({ block: "nearest", inline: "nearest" });
    }
  };

  const onKeyDown = (event: KeyboardEvent) => {
    usingKeyboard.current = true;
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault(); // Otherwise the browser also scrolls the slides by a small step.
    goTo(current + (event.key === "ArrowRight" ? 1 : -1));
  };

  const closeOnEmptySpace = (event: MouseEvent) => {
    if (event.target === event.currentTarget) close();
  };

  return (
    <>
      {/* Small previews so the personal project stays below the work projects; the viewer shows them full size. */}
      <ul className="mt-6 grid max-w-[26rem] grid-cols-3 gap-3">
        {screenshots.map((screenshot, index) => (
          <li key={screenshot.caption}>
            <figure>
              {/* The outline sits inside the button, matching the rounded border. */}
              <button
                ref={(button) => {
                  thumbnailsRef.current[index] = button;
                }}
                type="button"
                onClick={(event) => open(index, event)}
                aria-haspopup="dialog"
                aria-label={t.gallery.viewFullScreen(screenshot.alt)}
                className="block w-full cursor-zoom-in overflow-hidden rounded-xl border border-line transition-colors duration-150 hover:border-muted focus-visible:-outline-offset-2"
              >
                <ThemedImage screenshot={screenshot} className="h-auto w-full" />
              </button>
              <figcaption className="mt-2 font-mono text-[13px] leading-5 text-muted">{screenshot.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label={t.gallery.label}
        tabIndex={-1}
        onKeyDown={onKeyDown}
        onPointerDown={() => {
          usingKeyboard.current = false;
        }}
        onClose={onClose}
        className="h-dvh max-h-none w-full max-w-none overflow-hidden bg-page text-ink outline-none"
      >
        <div className="fade-down flex h-full flex-col">
          <div className="shrink-0 border-b border-line">
            <div className="wrap flex h-14 items-center justify-between">
              <p aria-live="polite" className="font-mono text-[13px] leading-5 text-muted">
                {screenshots[current].caption}, {t.gallery.position(current + 1, screenshots.length)}
              </p>
              <div className="flex items-center gap-1">
                {/* Close comes first in the DOM so it takes focus when opened by keyboard, and stays usable at either end of the list. */}
                <button type="button" onClick={close} aria-label={t.gallery.close} title={t.gallery.closeHint} className={`${iconButton} order-last`}>
                  <LuX size={18} strokeWidth={1.5} aria-hidden="true" />
                </button>
                {/* aria-disabled rather than disabled, so reaching an end doesn't drop keyboard focus. */}
                <button type="button" onClick={() => goTo(current - 1)} aria-label={t.gallery.previous} aria-disabled={current === 0} className={iconButton}>
                  <LuChevronLeft size={18} strokeWidth={1.5} aria-hidden="true" />
                </button>
                <button type="button" onClick={() => goTo(current + 1)} aria-label={t.gallery.next} aria-disabled={current === screenshots.length - 1} className={iconButton}>
                  <LuChevronRight size={18} strokeWidth={1.5} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <ul
            ref={slidesRef}
            onScroll={(event) => setCurrent(Math.round(event.currentTarget.scrollLeft / event.currentTarget.clientWidth))}
            className="flex min-h-0 flex-1 snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] motion-safe:scroll-smooth"
          >
            {screenshots.map((screenshot) => (
              <li
                key={screenshot.caption}
                onClick={closeOnEmptySpace}
                className="flex w-full shrink-0 snap-center items-center justify-center p-4"
              >
                <ThemedImage screenshot={screenshot} className="h-auto max-h-full w-auto max-w-full rounded-xl border border-line" />
              </li>
            ))}
          </ul>
        </div>
      </dialog>
    </>
  );
};
