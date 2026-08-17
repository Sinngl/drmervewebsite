# Appointment System — Architecture Documentation

Status: architecture documentation only. **Nothing described here is implemented.** No database, no admin panel, no booking API, and no appointment UI exist in the codebase as a result of this document. Implementation is pending a separate approved task. This changes the earlier assumption that the MVP might not need a database — see [`docs/DECISIONS.md`](DECISIONS.md), Phase 1 Business Decisions.

## New-Client Appointment Types

- Yüz yüze ilk görüşme/değerlendirme
- Online ilk görüşme
- Telefonla ön bilgilendirme

## Public Flow

1. Select appointment type.
2. Select available date and time.
3. Provide minimum contact details.
4. Read the KVKK disclosure.
5. Submit appointment request.
6. Receive request-received email.
7. Await confirmation, rejection or reschedule response.
8. Receive confirmation and optional calendar file.

## Minimum Public Data

- Parent/adult contact name
- Email
- Phone
- General age group
- Appointment type
- Online or face-to-face selection
- Date and time
- KVKK disclosure acknowledgement

## Prohibited Initial-Booking Data

The public booking flow is explicitly **not** a clinical-record or patient-record system. It must never request:

- Child's name
- Diagnosis
- Medical report
- Detailed symptoms
- Therapy notes
- Test answers
- Uploaded medical documents

## Appointment Status Model

- `pending`
- `confirmed`
- `reschedule_requested`
- `rejected`
- `cancelled`
- `completed`
- `no_show`

`rejected` and `cancelled` are distinct: `rejected` means the appointment request was not accepted (admin declines a `pending` request); `cancelled` means a previously active/requested appointment was called off after that point.

## Admin Requirements

- Secure admin authentication
- Weekly calendar
- Monthly calendar
- Pending-request list
- Confirm, reject and reschedule
- Availability rules
- Closed days and holidays
- Appointment duration
- Buffer duration
- Online/face-to-face slot types
- CSV/Excel-compatible export
- Printable weekly/monthly schedule
- Audit trail
- Data-retention controls

## Future Phase

- Existing-client private booking links
- Recurring appointments
- Cancellation/reschedule links
- Email reminders
- ICS calendar attachments
- Optional Google Calendar synchronization
- WhatsApp Business API evaluation

## Security Requirements

- Server-side validation
- Rate limiting
- Bot protection
- Double-booking prevention at database level
- Secure admin sessions
- No health data in analytics
- No secrets in client code
- Minimal logging
- Retention and deletion policy
- Europe/Istanbul timezone handling
- Emails must not include detailed health information

## Unresolved Inputs

The following must be provided/decided by the project owner before implementation can begin:

- Working days and hours
- Appointment durations
- Buffer times
- Online and face-to-face capacity
- Cancellation/reschedule policy
- Administrator users
- Notification email
- Hosting/database provider
- Calendar-integration decision
