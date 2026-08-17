# Information Architecture

Status: draft, Phase 1. Records the approved navigation model, route inventory and content ownership for the Next.js rebuild. No real page content, medical explanations or contact data exist yet — see [`docs/DECISIONS.md`](DECISIONS.md) for the underlying business decisions this document implements.

## 1. Audience Hierarchy

1. **Primary — Parents.** Seeking information and support for their children's speech and language development. The main user journey is parent-first; this audience drives the homepage and primary navigation.
2. **Secondary — Adults.** People seeking support related to aphasia and fluency difficulties. Present throughout the site (its own service slugs, online-therapy content) but must not dominate the homepage or primary navigation.
3. **Cross-cutting — Families living abroad.** A dedicated content journey overlays both parent and adult audiences, with particular emphasis on Turkish-speaking families supporting their children's Turkish language development and bilingual language development generally.

## 2. User Journeys

**Parent, local (Yenimahalle/Ankara or online), child concern →**
`/` → `/calisma-alanlari` → `/calisma-alanlari/[ilgili-slug]` → `/surec-nasil-isler` or `/sik-sorulan-sorular` → `/randevu` or `/iletisim`

**Parent or adult, considering online delivery →**
`/` → `/online-terapi` → relevant `/calisma-alanlari/[slug]` → `/randevu`

**Adult, aphasia or fluency concern →**
`/` → `/calisma-alanlari/afazi` or `/calisma-alanlari/yetiskinlerde-akici-konusma-guclukleri` → `/surec-nasil-isler` → `/randevu`

**Family living abroad →**
`/` → `/yurt-disindaki-aileler` → `/online-terapi` and/or `/calisma-alanlari/cift-dilli-cocuklarda-dil-gelisimi` → `/randevu`

**Prospective client verifying credibility/logistics →**
`/hakkimda`, `/ankara-yenimahalle`, `/sik-sorulan-sorular`, `/bilgi-merkezi` (accessible from anywhere, not a linear funnel)

**Legal/compliance reader →**
`/kvkk-aydinlatma-metni`, `/gizlilik-politikasi`, `/cerez-politikasi` (footer-level, not part of the primary journey)

## 3. Navigation Model

Primary navigation (Turkish labels, approved order):

1. Ana Sayfa
2. Çalışma Alanları
3. Online Terapi
4. Yurt Dışındaki Aileler
5. Hakkımda
6. Bilgi Merkezi
7. İletişim
8. **Randevu Oluştur** — future visually prominent action (e.g. a button distinct from the text nav items). Not designed in this task; only reserved as a navigation-model slot and a routing target (`/randevu`).

Legal routes (`/kvkk-aydinlatma-metni`, `/gizlilik-politikasi`, `/cerez-politikasi`) and the location page (`/ankara-yenimahalle`) are **not** part of primary navigation — they are secondary/footer-tier destinations, linked from content and from each other, consistent with keeping the adult/legal/location content from crowding the parent-first primary journey.

No header, footer, mobile menu, or navigation UI is implemented in this task — see [`src/config/navigation.ts`](../src/config/navigation.ts) for the data-only configuration this model maps to.

## 4. Complete Route Inventory

### Top-level routes

| Route | Audience | Page Purpose | Content Status | Professional Approval Required | Legal Review Required | Implementation Status |
|---|---|---|---|---|---|---|
| `/` | shared (parent-first) | Homepage / entry point | Temporary dev screen | Yes | Yes | Existing dev screen retained (unchanged this task) |
| `/hakkimda` | shared | Professional background | No content | Yes | Yes (title verification) | Skeleton created |
| `/calisma-alanlari` | shared | Service-area index/hub | No content | Yes | Yes | Skeleton created |
| `/online-terapi` | shared | Explain online delivery across children, adults, aphasia | No content | Yes | Yes | Skeleton created |
| `/yurt-disindaki-aileler` | parent (international) | Dedicated journey for families abroad, incl. Turkish/bilingual language development | No content | Yes | Yes (advertising boundary) | Skeleton created |
| `/surec-nasil-isler` | shared | Explain evaluation/process flow | No content | Yes | Yes | Skeleton created |
| `/sik-sorulan-sorular` | shared | FAQ hub | No content | Yes | Yes | Skeleton created |
| `/ankara-yenimahalle` | shared (face-to-face) | Location info for the only active face-to-face location | No content | Yes (address/hours reverification) | Yes | Skeleton created |
| `/bilgi-merkezi` | shared | Informational article hub | No content | Yes | Yes | Skeleton created |
| `/randevu` | shared | Future appointment entry point | No content | No | Yes (KVKK, data minimization) | Skeleton created; no booking functionality |
| `/iletisim` | shared | Contact channels | No content | No | Yes (no unverified data) | Skeleton created; no real contact data |
| `/kvkk-aydinlatma-metni` | shared | KVKK disclosure | Draft placeholder | No | Yes (legal drafting) | Skeleton created; explicitly draft/not-public |
| `/gizlilik-politikasi` | shared | Privacy policy | Draft placeholder | No | Yes (legal drafting) | Skeleton created; explicitly draft/not-public |
| `/cerez-politikasi` | shared | Cookie policy | Draft placeholder | No | Yes (legal drafting) | Skeleton created; explicitly draft/not-public |

### Service routes — `/calisma-alanlari/[slug]`

Dynamic route, statically generated for all 15 approved slugs via [`src/content/services.ts`](../src/content/services.ts). Per-slug detail in Section 5. For every slug: content status is "no content" (registry carries only routing metadata), professional approval and legal review are both required before any real content is written, and implementation status is "dynamic route skeleton, statically generated."

## 5. Service Grouping

| Category | Audience | Slugs |
|---|---|---|
| Child-focused | child | `gelisimsel-dil-bozukluklari`, `gecikmis-dil-ve-konusma`, `artikulasyon-bozuklugu`, `fonolojik-bozukluk`, `cocukluk-cagi-apraksisi`, `kekemelik`, `hizli-bozuk-konusma`, `erken-okuryazarlik-becerileri`, `cift-dilli-cocuklarda-dil-gelisimi` |
| Adult-focused | adult | `afazi`, `yetiskinlerde-akici-konusma-guclukleri` |
| Assessment and family support | shared | `gelisimsel-degerlendirme`, `degerlendirme-sureci`, `testler-ve-online-testler`, `aile-egitimleri` |

This grouping matches the `category`/`audience` values in the typed service registry (`child-language-speech` / `adult-language-speech` / `assessment-family-support`, and `child` / `adult` / `shared`).

## 6. Content Ownership and Approval Status

- **Author/owner of business decisions:** project owner (Dr. Merve Zeybek), recorded in `docs/DECISIONS.md`.
- **Professional content approval:** required for every service page, `/hakkimda`, `/online-terapi`, `/yurt-disindaki-aileler`, `/surec-nasil-isler`, `/sik-sorulan-sorular`, `/ankara-yenimahalle`, `/bilgi-merkezi`, and all articles/tests — no real medical, credential, or process content may be published without it.
- **Legal review:** required for all legal-route content (`/kvkk-aydinlatma-metni`, `/gizlilik-politikasi`, `/cerez-politikasi`), the professional title, advertising of any kind, and international-audience content.
- **Current status:** every route in this task carries no real content — only design-neutral placeholders. Nothing is marked public-ready.

## 7. SEO Intent Category

| Route group | Intent |
|---|---|
| `/`, `/calisma-alanlari`, `/calisma-alanlari/[slug]` | Commercial/informational — primary discovery surface for specific concerns |
| `/online-terapi`, `/yurt-disindaki-aileler` | Informational — delivery-model and audience-specific discovery |
| `/hakkimda`, `/ankara-yenimahalle` | Trust/local — credibility and local-service discovery |
| `/surec-nasil-isler`, `/sik-sorulan-sorular`, `/bilgi-merkezi` | Informational — supports decision-making, top-of-funnel |
| `/randevu`, `/iletisim` | Transactional/navigational |
| `/kvkk-aydinlatma-metni`, `/gizlilik-politikasi`, `/cerez-politikasi` | Non-indexable legal/compliance content |

All routes are currently under the temporary site-wide `noindex`/`nofollow` protection described in Step 11 — real per-route indexing rules are deferred until content, legal review, and production approval (see `src/app/layout.tsx`).

## 8. Route Implementation Status

- **Existing, unchanged:** `/` (retains its current temporary development screen).
- **Newly created as design-neutral skeletons (this task):** all 13 remaining top-level routes listed in Section 4, plus the dynamic `/calisma-alanlari/[slug]` route statically generated for all 15 approved slugs.
- **Not created:** anything outside the approved route list (see Section 9).

## 9. Explicitly Excluded or Deferred Items

- No Çankaya location route — Çankaya is no longer an active location.
- No treatment-result, testimonial, pricing, campaign, or promotion routes.
- No actual online test-question routes yet — `/bilgi-merkezi` and the `testler-ve-online-testler` service slug are placeholders only; see `docs/CONTENT_MODEL.md` for the future test model.
- No admin or appointment-management routes yet — see `docs/APPOINTMENT_SYSTEM.md` for the documented, unimplemented flow.
- No duplicate `adult-online-therapy` service page — online delivery for all audiences is explained through `/online-terapi`, not a separate adult-specific service route.
- No header, footer, mobile menu, or final navigation UI — only the data-only `src/config/navigation.ts` configuration exists.
- No real contact data, credentials, professional title, medical claims, or legacy visual assets anywhere in this route set.
