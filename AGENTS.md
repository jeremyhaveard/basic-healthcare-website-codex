# Pulse Health repository guidance

This repository contains a public healthcare marketing site and planned patient-platform work. Keep the current implementation static unless a story explicitly authorizes a backend or authenticated workflow.

## Code Review Rules

### Healthcare data boundary

- Flag any code that collects, stores, logs, transmits, or embeds real patient, clinical, credential, token, or insurance data. Use fictional fixtures and keep patient-platform capabilities behind approved privacy, security, clinical, and integration decisions.
- Do not treat Figma copy or a visual control as evidence that authentication, scheduling, billing, messaging, telehealth, HIPAA compliance, or clinical behavior is implemented.

### Next.js security boundary

- Flag secrets, privileged operations, authorization decisions, and sensitive data crossing into client components, browser storage, analytics, or logs. Check server-side authorization independently of client route guards.
- Flag unsafe redirects, unvalidated external URLs, unsanitized HTML, missing input validation, account enumeration, insecure cookies or sessions, missing security headers, and dependency changes with unresolved security impact.

### UI and release quality

- Check semantic HTML, keyboard operation, visible focus, accessible labels, responsive behavior, and no horizontal overflow for changed user flows. Keep deterministic lint, typecheck, build, and tests in CI rather than treating review comments as a substitute.
- Treat visual baselines as evidence that must be compared with the approved Figma node and requirements. Do not approve a snapshot merely because it matches the current implementation.
