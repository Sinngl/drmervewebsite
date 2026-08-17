# Decisions

- The current static site remains on `main` during development.
- The rebuild is being developed on `redesign/nextjs-v2`.
- The approved stack is Next.js App Router, TypeScript and Tailwind CSS.
- The MVP does not require a database unless a later verified requirement appears.
- The existing visual assets are legacy references and are not approved final assets.
- Visual design must be approved before it is propagated to all pages.
- Google Ads requires a separate legal compliance decision.
- Forms must follow data-minimization and privacy-by-default principles.

## Phase 1 Business Decisions — 17 August 2026

### Target Audience

- Primary audience: parents seeking information and support for their children's speech and language development.
- Secondary audience: adults, including people seeking support related to aphasia and fluency difficulties.
- The adult service area must remain present but must not dominate the homepage and primary navigation experience.
- The website's main user journey will be parent-first.

### Professional Title

- The business-provided preferred title is: "Dr. Merve Zeybek – Konuşma Bozuklukları Uzmanı".
- This title is not yet approved for public implementation.
- Public use is blocked until its compatibility with the official diploma, licence and applicable professional-title rules is verified.
- Do not place the title in application source code yet.

### Service Delivery

- Face-to-face services are available only in Yenimahalle, Ankara.
- Çankaya is no longer an active location.
- The new website must not present Çankaya as an active location.
- Online services are available across all approved service areas.
- Online suitability is determined after an initial conversation together with the family or adult client.
- Online services include children, adults and aphasia-related support.
- Preschool and school-age children are the main child audience, but the service is not presented as having a fixed universal age restriction.

### International Audience

- A dedicated content journey will be created for families living abroad.
- An important audience is Turkish-speaking families who want to support their children's Turkish language development.
- Bilingual language development must be treated as a dedicated service/content area.
- Being a service audience does not mean that paid international advertising is legally approved.
- Paid or sponsored advertising remains blocked pending separate written legal approval.

### Contact

- Planned contact channels are telephone, WhatsApp, minimal-data contact form and appointment system.
- Current phone number, WhatsApp number, email address, exact Yenimahalle address and working hours must be reverified before public implementation.
- Do not add unverified contact data to the new application.

### Appointment System

- A custom, lightweight appointment-management system is the approved direction.
- This requirement changes the earlier assumption that the MVP may not need a database (see the general decision above: "The MVP does not require a database unless a later verified requirement appears" — that verified requirement has now appeared).
- A database will be required when appointment implementation begins.
- The appointment system is not a clinical-record or patient-record system.
- It must not request diagnosis, medical reports, detailed health history or the child's name during the initial public booking flow.
- Implementation remains pending a separate approved task.

### Online Tests

- Tests and online tests will have a dedicated area.
- Online tests must be informational screening/awareness tools, not diagnostic tools.
- They must not state that a user or child has a disorder.
- Test responses must not be sent to analytics.
- Client-side calculation without storing answers is preferred when technically suitable.
- Test content requires professional approval before implementation.

### Legal Gates

- Google Ads, sponsored social media and remarketing are not approved project features.
- Advertising implementation requires separate written legal approval.
- The business-provided professional title requires verification before public use.
- Do not use prices, discounts, campaigns, testimonials, outcome guarantees or superiority claims.
- Every future public information page must support author, reviewer and last-updated metadata.
