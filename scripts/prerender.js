// Writes the server-rendered app into the built index.html for every route, so crawlers and
// link previews get the content, and React hydrates it in the browser. Run after both builds.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { pathToFileURL } from "node:url";

const template = readFileSync("dist/index.html", "utf8");
const entry = pathToFileURL("dist-ssr/entry-server.js").href;
const routes = [
  { path: "/", file: "dist/index.html", text: "Experienced Software Engineer" },
  { path: "/cs", file: "dist/cs/index.html", text: "Projekty" },
  // Vercel serves 404.html, with a 404 status, for any path without a file.
  { path: "/404", file: "dist/404.html", text: "Page not found" },
];

for (const { path, file, text } of routes) {
  globalThis.location = { pathname: path };
  // The app reads the locale once at load, so each route imports a fresh copy of the bundle.
  const app = await import(`${entry}?path=${path}`);
  const body = app.render();
  if (!body.includes(text)) throw new Error(`${path} rendered without "${text}"`);

  const headTags = path === "/404" ? '<meta name="robots" content="noindex" />' : app.head();
  const html = template
    .replace('<html lang="en">', `<html lang="${app.locale}">`)
    .replace(/\s*<meta (name="description"|property="og:description")[^>]*>/g, "")
    .replace("</head>", `  ${headTags}\n  </head>`)
    .replace('<div id="root"></div>', () => `<div id="root">${body}</div>`);
  if (html === template) throw new Error("index.html no longer has the expected markers");

  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  if (path === "/") writeFileSync("dist/llms.txt", app.llms());
  console.log(`prerendered ${path} -> ${file}`);
}

rmSync("dist-ssr", { recursive: true });
