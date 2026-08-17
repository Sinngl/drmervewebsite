# Content Model

Status: draft, Phase 1. Defines the future required fields for informational and service pages. This document is a field-level specification only — **no medical fields are populated, and no content is marked public.** Implementation (e.g. MDX frontmatter schemas or a typed loader) is a separate future task.

## Service Page Model

Applies to each entry under `/calisma-alanlari/[slug]`.

| Field | Purpose |
|---|---|
| `slug` | Route identifier, matches the typed service registry |
| `title` | Public page title |
| `audience` | `child` \| `adult` \| `shared` |
| `category` | `child-language-speech` \| `adult-language-speech` \| `assessment-family-support` |
| `shortSummary` | Brief, non-clinical summary for listings/cards |
| `userQuestion` | The question a parent/adult is likely asking when they land here |
| `observableSigns` | What a non-professional might notice (informational, not diagnostic) |
| `evaluationOverview` | Plain-language overview of how assessment works for this area |
| `supportApproach` | Plain-language overview of the general support approach |
| `familyRole` | How family/caregivers are involved |
| `onlineSuitability` | Explanation of how online suitability is determined for this area |
| `frequentlyAskedQuestions` | Page-specific FAQ entries |
| `author` | Content author |
| `professionalReviewer` | Professional who reviewed/approved the content |
| `sources` | Cited sources supporting any claims made |
| `lastReviewedAt` | Date of last professional review |
| `legalReviewStatus` | Legal review state for this page |
| `contentStatus` | Content lifecycle state (e.g. `pending-professional-content`, see below) |

## Article Model

Applies to `/bilgi-merkezi` entries.

| Field | Purpose |
|---|---|
| `slug` | Route identifier |
| `title` | Article title |
| `summary` | Brief summary |
| `category` | Topic grouping |
| `audience` | `child` \| `adult` \| `shared` |
| `author` | Content author |
| `professionalReviewer` | Professional who reviewed/approved the content |
| `publishedAt` | First publish date |
| `lastReviewedAt` | Date of last professional review |
| `sources` | Cited sources supporting any claims made |
| `contentStatus` | Content lifecycle state |
| `legalReviewStatus` | Legal review state for this article |

## Online Test Model — Documentation Only

Applies to the future `testler-ve-online-testler` area. **Documentation only — no test is implemented.**

| Field | Purpose |
|---|---|
| `slug` | Route identifier |
| `title` | Test title |
| `purpose` | What the test screens/raises awareness for |
| `audience` | `child` \| `adult` \| `shared` |
| `disclaimer` | Mandatory non-diagnostic disclaimer text |
| `questions` | The screening questions |
| `scoringMethod` | How responses are scored |
| `resultBands` | Result ranges and their informational (non-diagnostic) meaning |
| `sources` | Cited sources supporting the screening tool |
| `professionalReviewer` | Professional who approved the test content |
| `storesAnswers` | Whether individual answers are persisted (see constraint below) |
| `sendsAnswersToAnalytics` | Whether answers are sent to analytics (see constraint below) |
| `contentStatus` | Content lifecycle state |
| `legalReviewStatus` | Legal review state for this test |

## Mandatory Constraints

- `storesAnswers` **should default to `false`.** Client-side calculation without storing answers is the preferred pattern where technically suitable.
- `sendsAnswersToAnalytics` **must always be `false`.** No test response may ever reach analytics, regardless of `storesAnswers`.
- Tests **must not provide a diagnosis.** Result bands are informational/awareness framing only, never a statement that a user or child has a disorder.
- Service and article content **must support `sources` and `lastReviewedAt`** — no page type may omit them.
- **No content of any type may be marked public before professional approval** (`professionalReviewer` populated and `contentStatus` reflecting approval), and legal-sensitive content additionally requires `legalReviewStatus` to reflect completed review.
