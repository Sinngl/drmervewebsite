# Project Status

- Repository audit: completed
- Migration decision: approved
- Next.js foundation: completed
- Information architecture: completed
- Visual direction: completed
- Homepage design: pending
- Service pages: pending
- Forms and integrations: pending
- QA and staging: pending
- Production cutover: pending

## Notes

- The current home page (`src/app/page.tsx`) is a design-neutral internal development screen, not the real homepage.
- The current `<title>` and `<meta name="description">` in `src/app/layout.tsx` ("Dr. Merve Zeybek | Geliştirme Ortamı" / "Dr. Merve Zeybek yeni web sitesi geliştirme ortamı.") are **temporary placeholder metadata** and must be replaced with approved SEO metadata once information architecture and homepage design are finalized.
- The root layout's typography, color tokens and CSS remain the neutral placeholder system — the approved visual direction (see below) has not yet been propagated to `src/app/globals.css` or the real layout; that happens deliberately during homepage design.
- Business requirements are documented (`docs/DECISIONS.md`, Phase 1 Business Decisions).
- Information architecture is approved (`docs/INFORMATION_ARCHITECTURE.md`).
- Route skeletons are approved (all placeholder routes under `src/app/`).
- The typed service registry and navigation configuration are approved (`src/content/services.ts`, `src/config/navigation.ts`).
- Content models are approved as structural models only — no real content (`docs/CONTENT_MODEL.md`).
- Appointment architecture is documented but not implemented (`docs/APPOINTMENT_SYSTEM.md`).
- Real page content still requires professional approval.
- The visual direction ("Sıcak Klinik Editoryal") was approved on 17 August 2026; see `docs/VISUAL_DIRECTION.md` Section 14 for exactly what is and is not covered by that approval.
- Homepage design is the next active phase — approved visual-system components may now be propagated deliberately, page by page, starting with the homepage, with each page subject to its own visual review.
- Visual-system approval does not constitute professional-content approval — real page content, the professional title, and advertising remain separately gated (see below).
- `/tasarim-onizleme` is a temporary internal design-review/reference route — it is not a public production route and is not part of the approved public information architecture. It must be removed or explicitly access-restricted before production cutover.
- Professional-title verification remains pending.
- Advertising legal review remains pending.
