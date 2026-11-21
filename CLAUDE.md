# Homepage — notes for Claude

## Accessibility is part of every change

Blind and low-vision visitors use this site. Hye-Young does not write alt text;
Claude does, every time content is added or changed.

- **Every image and clip needs alt text.** In project markdown write
  `![One line describing what is shown](./file.jpg)`, never `![](./file.jpg)`.
  Look at the image (for a `.gif`, extract frames from `public/p/<slug>/<name>.mp4`)
  and read the surrounding text before writing it. Describe only what is visible,
  in one plain sentence, no "Image of", no colons.
- **Teasers need `teaserAlt`, news photos need `imageAlt`.**
- The build enforces all three: `src/plugins/remark-require-alt.mjs` fails on an
  empty markdown alt, and `src/content.config.ts` fails on a missing `teaserAlt`
  or `imageAlt`. Do not loosen these checks to get a build through.
- Ask Hye-Young only when the meaning of an artwork is unclear; describe the rest yourself.
- Links inside running text stay underlined; looping clips keep their pause button.
- After a content change, run axe (or an equivalent check) on the touched pages.

## Build gotcha

After editing a remark plugin, delete `node_modules/.astro/data-store.json` before
building. Astro caches rendered markdown by file content and will otherwise reuse
the old HTML.
