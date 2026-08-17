# Dr. Merve Zeybek Website

## Purpose of This Branch

`redesign/nextjs-v2` is a from-scratch rebuild of the Dr. Merve Zeybek website on a modern stack, developed alongside the existing production site rather than in place of it. This branch currently contains only the foundation: a design-neutral placeholder home page, no real routes, no content, and no approved visual design yet.

## Technology Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- ESLint

## Local Development

```bash
npm run dev
```

## Quality Control

```bash
npm run lint
npm run typecheck
npm run build
```

## Branch Strategy

- **`main`** represents the existing, live production website (static HTML/CSS). **Do not modify `main` as part of this rebuild** — it must remain deployable at all times.
- **`redesign/nextjs-v2`** is where this rebuild is developed. It will only be merged or cut over to production after explicit approval.

## Legacy Site

The previous production site (HTML, CSS, images, `CNAME`) is preserved unchanged for reference at [`legacy-static/`](legacy-static/). These files are historical reference only and are not part of the new application.

**The legacy logo and illustrations in `legacy-static/images/` are not approved final assets.** They must not be reused, copied, or imported into this application without a separate, explicit approval for that specific asset.

## Project Status

Next.js foundation: completed. Information architecture, visual direction, and real page content are still pending. See [`docs/PROJECT_STATUS.md`](docs/PROJECT_STATUS.md) for the current phase-by-phase status.

## Governance

Project rules and constraints are defined in [`CLAUDE.md`](CLAUDE.md). Architectural and process decisions are recorded in [`docs/DECISIONS.md`](docs/DECISIONS.md), and planned work is tracked at a high level in [`docs/BACKLOG.md`](docs/BACKLOG.md).
