# Visual Direction — Sıcak Klinik Editoryal

**Status: approved — 17 August 2026.**

This approval covers the visual system described in this document — see Section 14 for exactly what is and is not covered. It was prepared and reviewed at the temporary internal route `/tasarim-onizleme`.

## 1. Direction Name

Sıcak Klinik Editoryal ("Warm Clinical Editorial").

## 2. Design Objectives

- Calm, trustworthy, professional, human, warm.
- Parent-first: the primary audience (parents of children with speech/language concerns) should feel the site was designed for them first.
- Child-friendly without looking childish — no cartoon styling, no juvenile typography.
- Inclusive of adults as a secondary audience (aphasia, fluency) — nothing in the system should read as exclusively pediatric.
- Modern but not trend-dependent — avoid glassmorphism, intense gradients, oversized animation, anything that will look dated quickly.
- Spacious and easy to scan — reduce decision stress, generous whitespace, clear hierarchy.

## 3. Audience Hierarchy

Matches `docs/INFORMATION_ARCHITECTURE.md` Section 1:

1. Primary — parents seeking support for a child's speech/language development.
2. Secondary — adults (aphasia, fluency difficulties); present but not visually dominant.
3. Cross-cutting — families living abroad / bilingual Turkish-speaking families, given a dedicated feature treatment rather than folded into the general audience.

## 4. Color Tokens and Intended Use

All values verified for WCAG AA contrast where used as text/background pairs (see Section 11).

| Token | Hex | Intended Use |
|---|---|---|
| Ink | `#18322F` | Primary text, headings, body copy |
| Pine | `#245C55` | Primary actions, links, primary button fill |
| Deep Pine | `#193F3A` | Hover/active state for Pine |
| Sage | `#A9C1B6` | Supporting section fills, secondary surfaces (text on Sage must be Ink, never white) |
| Mist | `#E8F0EC` | Supporting section fills, card backgrounds (text on Mist must be Ink, never white) |
| Sand | `#F5F1E9` | Page surfaces, alternate section backgrounds |
| Paper | `#FFFCF7` | Primary page background |
| Terracotta | `#A9543F` | **Reserved for the conversion action ("Randevu Oluştur") only**, plus restrained text/border on the internal draft-annotation tag — never a large fill elsewhere |
| Terracotta Hover | `#8A4331` | Hover/active state for the Terracotta conversion action |
| Muted text | `#5F6F69` | Secondary/supporting text on Paper, Sand or White only |
| Border | `#D6DDD7` | Hairline borders, dividers, input borders |
| White | `#FFFFFF` | Surfaces, text on Pine/Deep Pine/Ink/Terracotta only |
| Error foreground | `#A4231A` | Validation-error text — dedicated red, distinct in hue from Terracotta |
| Error background | `#FBEAE8` | Validation-error surface |
| Error border | `#D9534F` | Validation-error border |
| Success foreground | `#193F3A` (Deep Pine) | Success-message text — reuses the approved Pine family |
| Success background | `#E8F0EC` (Mist) | Success-message surface — reuses the approved Pine family |

**Explicit rule, evidence-based (see Section 11): never place White or Muted-text on Sage or Mist — both combinations fail WCAG AA. Use Ink on Sage/Mist instead.**

### 4a. Action and Validation-State Color Semantics

Refined in Prompt 03.1 to resolve an inconsistency where the hero appointment CTA used Pine while the header appointment CTA used Terracotta.

| Role | Treatment | Where used |
|---|---|---|
| **Conversion action** | Terracotta fill (`#A9543F`), white text, Terracotta-Hover (`#8A4331`) on hover/active, visible focus ring | Every visible "Randevu Oluştur" — desktop header, mobile-menu sample, hero, buttons-and-links demonstration. All four now use the identical `.btnAppointment` treatment. |
| **Informational primary action** | Pine fill (`#245C55`), white text, Deep Pine (`#193F3A`) on hover | Standalone primary actions such as a generic "primary button" sample and content-discovery actions that aren't competing with a conversion CTA in the same composition. |
| **Secondary action** | Pine outline — white/Paper fill, Pine border and text, Mist fill on hover, Sage on active | Any action shown alongside a more prominent action in the same composition — e.g. "Çalışma Alanlarını İncele" next to the hero's Terracotta CTA. |
| **Validation error** | Dedicated red tokens (`#A4231A` fg / `#FBEAE8` bg / `#D9534F` border) | Form validation-error message. Deliberately a true red, distinct in hue from Terracotta, so an error state is never visually confused with the conversion action. Verified contrast: error foreground on error background = 6.36:1 (AA pass); on white = 7.41:1 (AA pass). |
| **Validation success** | Pine-family tokens (Deep Pine fg / Mist bg / Pine border) | Form success message. Verified contrast: 9.98:1 (AA pass). |
| **Draft/pending annotation** | Terracotta text and 1px border only, transparent fill, `--dp-radius-sm` (not a pill), `cursor: default`, no hover state | The "Taslak metin — profesyonel onay bekliyor" tag. Internal annotation only — restrained Terracotta styling is permitted here specifically because it never fills a background or reacts to interaction, so it cannot be mistaken for the conversion button. |

## 5. Typography

- Headings: **Lora** (serif, editorial character) — loaded via `next/font/google`, `subsets: ['latin', 'latin-ext']` for Turkish character support, `variable` CSS-variable method.
- Body and interface: **Manrope** (humanist sans, warm but modern) — same loading approach.
- Both fonts are route-scoped to `/tasarim-onizleme` only via the `variable` option and a wrapper class — not applied to the root layout, not applied globally.
- Verified rendering of Turkish characters (Ç ç Ğ ğ İ ı Ö ö Ş ş Ü ü) using the `latin-ext` subset, which both fonts support per Next.js's bundled Google Fonts metadata.
- The hero H1 uses its own responsive range, `clamp(2.75rem, 4.2vw, 4rem)`, independent of the generic "Display" sample shown in the Typography section — sized so the headline stays readable and controlled without visually overwhelming the photography column next to it (refined in Prompt 03.1).

## 6. Spacing Principles

- Generous section padding (comfortable vertical rhythm, not cramped) — but responsive, not fixed, so whitespace never becomes an unnecessarily large empty area on smaller viewports.
- Responsive section-padding scale (refined in Prompt 03.1):
  | Breakpoint | Vertical section padding |
  |---|---|
  | Desktop (default) | 96px |
  | Tablet (≤1024px) | 72px |
  | Mobile (≤640px) | 56px |
- Consistent content max-width with breathing room on wide viewports.
- A small, restrained spacing scale reused throughout rather than ad hoc values.

## 7. Radius and Shadow Principles

- Restrained border radius — enough to feel soft and human, never "toy-like" or bubble-shaped.
- Subtle borders (using the Border token) preferred over heavy shadows for separating surfaces.
- Shadows used very sparingly, only for a light sense of elevation (e.g. a card on hover), never dramatic drop shadows.

## 8. Button Hierarchy

See Section 4a for the full color-semantics table. Summary:

- **Conversion (Terracotta)** — reserved exclusively for "Randevu Oluştur," used identically everywhere it appears (header, mobile menu, hero, buttons-and-links). White text, Terracotta-Hover on hover/active, visible focus ring, minimum 44px height, `white-space: nowrap`.
- **Informational primary (Pine fill)** — White text, Deep Pine on hover, visible focus ring, minimum 44px height.
- **Secondary (Pine outline)** — Paper/White fill, Pine border and text, Mist fill on hover, Sage on active.
- **Text link** — Pine text, underline on hover/focus, no button chrome.
- **Disabled** — reduced-contrast styling plus a `disabled` state and a textual cue (not color alone) that the control is inactive.

All button variants use `white-space: nowrap` so labels never wrap mid-word inside the control.

## 9. Card Principles

- Clear category label, title, restrained supporting placeholder text, and a bottom-aligned link treatment — consistent card heights within a row (CSS Grid row-stretch plus `flex-grow` on the supporting text) so the four category cards read as one family regardless of copy length.
- A subtle top accent line (Pine, deepening to Deep Pine on hover) distinguishes cards from plain boxes without adding icons or illustration.
- A small decorative arrow (`→`, `aria-hidden`) nudges right on hover/focus-within alongside the link text — a restrained affordance, not an icon system.
- Hover and focus-visible states use a subtle border/accent-color change plus a very small vertical lift (`translateY(-2px)`) — never a large transform, heavy shadow, or exaggerated rounded corner.
- No symptoms, diagnoses, treatment explanations, or clinical claims in any card copy — placeholder text only, explicitly marked as pending professional review where applicable.

## 9a. Process Presentation

- Numbered circular badges (Pine fill, white numeral) in calm, bordered surfaces — no heavy shadow, no animation beyond the page's standard hover/focus transitions.
- A subtle connecting line (Border-color, 2px) reinforces horizontal progression on the true single-row four-column desktop layout only. It sits at the vertical center of the number circles and behind them (`z-index` below the circles), so the opaque circles visually interrupt the line at each step — it never crosses through step text.
- The horizontal line is intentionally hidden at the two-column tablet layout, where a single straight line would misleadingly connect non-adjacent steps. A vertical variant of the same line appears instead at the single-column mobile layout, where progression is truly sequential top-to-bottom.
- Process content remains draft and pending professional approval — the treatment is a layout/UI preview only.

## 9b. Header/Navigation Behavior

- At desktop widths, the brand name, all 7 primary navigation labels, and the appointment action must each stay on one line — `white-space: nowrap` on the brand, nav links and buttons, with `flex-wrap: nowrap` on the header bar and nav list.
- Rather than shrink type to force a fit, the compact (hamburger) menu activates at a dedicated breakpoint (`max-width: 1180px`, matching the container's own `--dp-max-width`) specific to the header — decoupled from the page's general `640px` content breakpoint used elsewhere (form grid, image comparison, etc.). Below 1180px the container shrinks 1:1 with the viewport and there isn't reliable room for all 7 labels on one line, so the header switches to the compact state there — meaning the ~1024px review width shows the compact header by design, while ~1440px (where the container is capped at 1180px, its confirmed-fitting width) shows the full nav with no wrapping. Both states were verified programmatically (`scrollWidth` vs. clientWidth of the header bar) to have zero overflow.
- The static mobile-menu-state mockup is a separate, clearly-labeled block below the header sample (not a toggle of the same element), so reviewers can see the open-menu state without resizing their browser.
- The desktop header bar also uses tighter internal spacing than the rest of the page (a dedicated compact appointment-button padding, reduced gaps) so the full nav has real margin under the container's 1180px cap — deliberate and balanced, not merely "as tight as possible."

## 9c. Form Demonstration Principles

- All form controls are non-functional visual samples (`disabled`, no `action`, no persistence) — see `docs/APPOINTMENT_SYSTEM.md` for the actual approved public flow.
- An explicit note beneath the textarea sample states in Turkish that: it is only a visual example; the real appointment flow follows data minimization; diagnosis, symptoms, medical reports and the child's name will not be requested; and whether any free-text field appears in the real system at all remains subject to privacy/legal review.

## 10. Photography Direction

**Preferred:** natural daylight, warm but realistic (not staged) environments, authentic interaction, uncluttered framing that leaves room for text, inclusive of a range of ages, real professional photographs once available.

**Avoid:** posed white-coat photography, distressed-child imagery, exaggerated emotion, cartoon mouths or speech-bubble clichés, misleading before/after imagery, imagery implying guaranteed outcomes, AI-generated imagery presented as the real professional.

The preview page's hero photography placeholder is an intentionally designed abstract composition with a visible label describing this direction — not a stock photo, not a generated photograph, and not implying any specific person.

## 11. Accessibility Requirements

- Normal text meets WCAG AA (≥4.5:1). Verified programmatically for every pairing used in the system; results:

  | Pair | Ratio | AA (normal text) |
  |---|---|---|
  | Ink on Paper | 13.36 | Pass |
  | Ink on Sand | 12.14 | Pass |
  | Ink on Mist | 11.79 | Pass |
  | Ink on White | 13.67 | Pass |
  | Ink on Sage | 7.15 | Pass |
  | Muted text on Paper | 5.18 | Pass |
  | Muted text on Sand | 4.70 | Pass |
  | Muted text on White | 5.30 | Pass |
  | Muted text on Mist | 4.57 | Pass (narrow) |
  | White on Pine | 7.67 | Pass |
  | White on Deep Pine | 11.58 | Pass |
  | White on Terracotta | 5.21 | Pass |
  | Pine on Paper/White/Sand | 6.81–7.67 | Pass |
  | Terracotta on Paper/White/Sand | 4.63–5.21 | Pass |
  | **White on Sage** | **1.91** | **Fail — do not use** |
  | **White on Mist** | **1.16** | **Fail — do not use** |
  | **Muted text on Sage** | **2.77** | **Fail — do not use** |

- Visible keyboard focus states on every interactive element (buttons, links, form controls) using `:focus-visible`.
- Interactive targets at least 44px high.
- State is never communicated by color alone — form validation/success states pair color with icon-equivalent text and copy; disabled buttons pair reduced contrast with the `disabled` attribute and cursor change.
- `prefers-reduced-motion` respected — all transitions are disabled under that media query; the page is fully understandable with motion off since motion is used only for subtle hover/focus feedback, never to convey information.

## 12. Prohibited Visual Patterns

Sterile hospital blue, childish cartoon styling, excessive pastel color, generic medical crosses, speech-bubble clichés, childish fonts, intense gradients, glassmorphism, excessive shadows, oversized animation, testimonial styling, success-rate statistics, awards or unverified badges, superiority claims, treatment-result claims, staged white-coat stock photography.

## 13. Temporary Preview Route

`/tasarim-onizleme` is a **temporary internal review/reference route** — approval of the visual direction does not change this:

- Not linked from primary navigation or service navigation.
- Not part of the approved public information architecture recorded in `docs/INFORMATION_ARCHITECTURE.md`.
- Carries explicit route-level `noindex`/`nofollow` metadata, in addition to (not instead of) the existing global temporary noindex in `src/app/layout.tsx`.
- All styling is scoped to this route via a CSS Module and route-local font loading — `src/app/globals.css` and the shared application layout are untouched.
- **Must be removed or explicitly access-restricted before production cutover.** It remains useful as an internal reference while the approved direction is propagated to real pages, but it is never itself a production route.

## 13b. Mobile Hero CTA Correction (Prompt 03.2)

At mobile widths ≤480px, the two hero CTA buttons ("Randevu Oluştur" and "Çalışma Alanlarını İncele") stack vertically and share the same full available width, each staying on one line, each ≥44px high, with a clear gap between them. This applies only inside `.heroCtas` — the factual service-format indicators (`.heroIndicators`) are a separate class and are unaffected, so they never stretch to full width or read as buttons. Desktop and tablet CTA layout (horizontal, natural button widths) is unchanged.

## 13a. Internal Terminology Changes (Prompt 03.1)

Two review-page section labels were corrected for clearer internal terminology. These are labels on the internal review page only — they do not affect any public route name or the canonical navigation labels in `src/config/navigation.ts`, which are unchanged.

| Previous label | Corrected label |
|---|---|
| Başlık Konsepti | Üst Menü Konsepti |
| Ana Sayfa Kahraman Alanı Konsepti | Ana Sayfa Açılış Alanı Konsepti |

## 14. Approval Status

**Approved — 17 August 2026.** Final project-manager visual review approved the following elements of the "Sıcak Klinik Editoryal" system as the basis for production propagation:

- The "Sıcak Klinik Editoryal" direction overall.
- The approved color tokens (Section 4) and action/state color semantics (Section 4a).
- Lora (headings) and Manrope (body/interface) typography.
- The Terracotta appointment-conversion action, reserved exclusively for "Randevu Oluştur."
- Pine informational actions and links (primary fill and outline/secondary treatments).
- The restrained card/radius/shadow system (Sections 7, 9).
- Responsive header behavior, including the compact/hamburger breakpoint approach (Section 9b).
- Mobile full-width hero CTAs (Section 13b).
- Photography direction and principles (Section 10).
- Accessibility requirements (Section 11).

**This approval is of the visual system only. It explicitly does not constitute:**
- Approval of any real medical or service page content — that still requires separate professional approval (`docs/CONTENT_MODEL.md`).
- Verification of the professional title — it remains legally unverified pending diploma/licence review (`docs/DECISIONS.md`).
- Approval of advertising — advertising remains legally blocked pending separate written legal approval (`docs/DECISIONS.md`).
- A change in status for `/tasarim-onizleme` — it remains an internal, noindexed review/reference route, not a production route, and must be removed or access-restricted before production cutover (Section 13).

## 15. Propagation

With the visual system approved, its components may now be propagated **deliberately** to real pages — starting with the homepage. Propagation happens **page by page**, not as a single bulk pass, and each page remains subject to its own visual review before being considered final. Propagating the visual system to a page is independent of, and does not substitute for, that page's separate content/professional/legal approval gates listed above.
