import { cs } from "./cs";
import { en } from "./en";

/**
 * The language comes from the URL: English at `/`, Czech at `/cs`. Switching language is a normal
 * link and reloads the page, so this never changes while the app runs and needs no React state.
 */
export const locale = window.location.pathname.split("/")[1] === "cs" ? "cs" : "en";

export const t = locale === "cs" ? cs : en;

export const homePath = locale === "cs" ? "/cs" : "/";
export const otherHomePath = locale === "cs" ? "/" : "/cs";
