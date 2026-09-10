# Pulse Health home screen user stories

Prepared 2026-09-08 from the Figma landing page at [node 8:10](https://www.figma.com/design/MtFODCLvM5tffZ2txAvdVL/Basic-Healthcare-Design?node-id=8-10) and the current SCRUM Jira backlog. No `docs/design-requirements.md` exists yet, so implementation details below are provisional where the design does not show an interaction or responsive state.

## Delivery order

| Priority | Stories | Delivery intent | Current Jira relationship |
| --- | --- | --- | --- |
| P0 | HS-01, HS-02, HS-03 | Establish foundations, approved content, and visual/accessibility gates before public release. | SCRUM-24, SCRUM-27, SCRUM-28, SCRUM-7, SCRUM-25 |
| P1 | HS-04, HS-05, HS-06, HS-07 | Ship the first usable above-the-fold landing experience and core marketing sections. | Refines SCRUM-6, SCRUM-8, SCRUM-9, SCRUM-11, SCRUM-12 |
| P2 | HS-08, HS-09, HS-10, HS-11 | Complete trust, benefits, FAQ, statistics, newsletter, and footer content. | SCRUM-10, SCRUM-41, SCRUM-42, SCRUM-43, SCRUM-44, SCRUM-8 |
| P3 | HS-12 | Validate the assembled page against Figma, requirements, and responsive behavior. | Extends SCRUM-25 and the tester agent brief |

## P0 foundation and release controls

### HS-01 — Establish the landing-page application foundation

**As a** delivery team, **I want** a documented application shell, route, and shared component boundary **so that** the home screen can be implemented and tested consistently.

**Figma evidence:** parent frame `8:10`; header `8:11`; footer `8:170`.

**Acceptance criteria**

- **Given** a clean checkout, **when** the documented dev command runs, **then** the home route renders without runtime errors and has one canonical startup path.
- **Given** a visitor lands on the home route, **when** assistive technology inspects the page, **then** it exposes one main landmark, a usable document title, a skip link, and semantic header/footer landmarks.
- **Given** shared UI is implemented, **when** a section needs the site header, footer, button, card, or typography styles, **then** it consumes shared components/tokens rather than duplicating page-specific markup.
- **Given** the page is viewed at a viewport narrower than 1440px, **when** content reflows, **then** no section causes horizontal scrolling or clipped controls.

**Dependencies:** SCRUM-24 and SCRUM-29. The current checkout contains no application source, so the prior Jira implementation claims need reconciliation before estimation.

### HS-02 — Define approved copy, claims, destinations, and assets

**As a** product owner, **I want** every public claim and destination approved **so that** the home screen does not publish unsupported healthcare, insurer, privacy, or testimonial statements.

**Figma evidence:** all visible copy in `8:10`, including hero `8:29–8:48`, trust bar `8:51`, services `8:58–8:105`, testimonials `8:127–8:169`, benefits `24:603–24:645`, FAQ `24:647–24:681`, stats `24:683–24:699`, newsletter `24:700–24:708`, and footer `8:170–8:197`.

**Acceptance criteria**

- **Given** the Figma copy is reviewed, **when** a claim mentions HIPAA, secure care, prescriptions, lab-result timing, insurers, ratings, patient counts, provider counts, or testimonials, **then** the approval record identifies an owner and either approves the exact copy/assets or supplies replacement text.
- **Given** a visible CTA or footer link, **when** its destination is not implemented, **then** it is represented as an approved unavailable treatment or remains unlinked; no placeholder href is presented as a working product destination.
- **Given** logos, portraits, and icons are exported, **when** they are committed, **then** usage rights and canonical asset mappings are documented. The landing-page activity logo (`8:13–8:14`, `8:174–8:176`) is the provisional brand asset.

**Dependencies:** SCRUM-7 (Done) remains the approval record; confirm its approved revision covers the later benefits, FAQ, stats, and newsletter additions tracked in SCRUM-41–44.

### HS-03 — Establish accessible design tokens and automated gates

**As a** tester, **I want** shared visual tokens and repeatable checks **so that** the home screen remains accessible and visually stable while sections are delivered.

**Figma evidence:** repeated section headers/cards throughout `8:10` and `24:603–24:708`.

**Acceptance criteria**

- **Given** the token set is consumed by the page, **when** text, links, buttons, focus rings, and status treatments are checked, **then** normal text meets WCAG AA contrast and focus is visible for keyboard users.
- **Given** a pull request changes the home screen, **when** lint, typecheck/build, unit, integration, and browser checks run, **then** failures block delivery and produce inspectable artifacts without production credentials or patient data.
- **Given** a Figma comparison is run, **when** accepted token corrections differ from the source color, **then** the visual baseline records that correction rather than treating the original low-contrast color as the expected result.

**Dependencies:** SCRUM-27, SCRUM-28, SCRUM-25. The design review found white on the displayed teal/rose button fills is approximately 3.7:1; corrected accessible tokens are required before visual sign-off.

## P1 core landing experience

### HS-04 — Provide responsive header, navigation, and authentication actions

**As a** visitor, **I want** clear navigation and entry points **so that** I can reach a home section or begin sign-in/sign-up.

**Figma evidence:** header `8:11–8:26`.

**Acceptance criteria**

- **Given** the desktop home screen, **when** it renders, **then** it shows Pulse Health branding, Home, Services, How It Works, Testimonials, Contact, Sign In, and Join Pulse in the depicted hierarchy.
- **Given** a keyboard user tabs through the header, **when** focus moves, **then** every link/button has a visible focus state and follows a logical order.
- **Given** a small viewport, **when** the header reflows, **then** controls remain reachable without overlap, clipped labels, or horizontal scrolling; the collapse pattern is documented as a provisional responsive decision because no mobile Figma frame exists.
- **Given** the user activates Sign In or Join Pulse, **when** a destination is not available, **then** the product shows the approved unavailable state instead of silently routing to a bypass or placeholder.

**Jira mapping:** refines SCRUM-8. Depends on HS-02 and HS-03.

### HS-05 — Present the hero and primary calls to action

**As a** prospective patient, **I want** to understand Pulse Health's value and choose a next step **so that** I can book care or explore services.

**Figma evidence:** hero `8:27–8:50`, including badge `8:29–8:30`, headline/body `8:31–8:33`, CTAs `8:34–8:40`, trust indicators `8:41–8:48`, and media `8:49–8:50`.

**Acceptance criteria**

- **Given** the home route loads, **when** the hero is visible, **then** it renders the approved badge, headline, supporting copy, two CTAs, rating/review trust indicator, and hero media with the same hierarchy and approximate proportions as node `8:27`.
- **Given** hero media is decorative, **when** a screen reader encounters it, **then** it has an empty alternative; if it conveys meaning, **then** its alternative describes that meaning without repeating adjacent copy.
- **Given** the visitor activates Book Appointment or Explore Services, **when** the destination is approved, **then** navigation reaches that destination; otherwise the control uses the approved unavailable treatment.
- **Given** the hero is viewed on narrow screens, **when** content stacks, **then** the headline, copy, CTAs, and media remain readable and usable without overflow.

**Jira mapping:** refines SCRUM-11 and SCRUM-6. Depends on HS-02 and HS-03.

### HS-06 — Show insurer trust bar

**As a** prospective patient, **I want** to see supported insurer names **so that** I can assess whether Pulse Health may fit my coverage.

**Figma evidence:** trust bar `8:51–8:57` with Aetna, BlueCross, UnitedHealthcare, Cigna, and Humana.

**Acceptance criteria**

- **Given** approved insurer content is available, **when** the bar renders below the hero, **then** its label and five insurer names/logos follow the Figma order and spacing.
- **Given** insurer names are rendered, **when** assistive technology reads them, **then** each has a meaningful text alternative and the presentation does not imply coverage eligibility beyond the approved copy.
- **Given** a narrow viewport, **when** the row reflows, **then** names remain readable without horizontal scrolling or collisions.

**Jira mapping:** SCRUM-7 and SCRUM-6. Depends on HS-02.

### HS-07 — Present services and three-step journey

**As a** prospective patient, **I want** to scan services and understand the care journey **so that** I can choose an appropriate next action.

**Figma evidence:** services `8:58–8:105` and journey `8:107–8:126`.

**Acceptance criteria**

- **Given** the services section is visible, **when** it renders, **then** it shows the “What We Offer” eyebrow, heading, and four cards: Telehealth Visits (`8:63–8:73`), Prescription Sync (`8:74–8:84`), Lab Results Hub (`8:85–8:95`), and Care Team Direct (`8:96–8:106`), each with icon, title, description, and Learn more affordance.
- **Given** a service card is activated, **when** a destination is not approved, **then** Learn more does not navigate to a misleading placeholder.
- **Given** the journey section is visible, **when** it renders, **then** it shows Simplified Journey, “Your health coordinated in three steps,” and the ordered steps Create Your Profile (`8:112–8:116`), Book Instant Visit (`8:117–8:121`), and Thrive In Good Health (`8:122–8:126`).
- **Given** a screen reader or narrow viewport, **when** cards are consumed, **then** order and grouping remain understandable and no horizontal scrolling occurs.

**Jira mapping:** SCRUM-9 and SCRUM-12. Depends on HS-02 and HS-03.

## P2 trust and completion sections

### HS-08 — Present approved testimonials

**As a** visitor, **I want** credible patient/provider feedback **so that** I can assess trust in the service.

**Figma evidence:** testimonial section `8:127–8:169`, cards `8:132–8:150` and `8:151–8:169`.

**Acceptance criteria**

- **Given** names, roles, quotes, portraits, and ratings are approved, **when** the section renders, **then** both review cards match the source order and content hierarchy.
- **Given** the star rows render, **when** assistive technology reads them, **then** an accessible text alternative communicates the rating; stars are not the only signal.
- **Given** the viewport narrows, **when** the two cards stack, **then** quote text and reviewer metadata remain readable without clipping.

**Jira mapping:** SCRUM-10. Depends on HS-02.

### HS-09 — Present benefits, FAQ, and statistics

**As a** prospective patient, **I want** answers, benefits, and credible platform information **so that** I can decide whether to continue to booking or signup.

**Figma evidence:** benefits `24:603–24:645`, FAQ `24:647–24:681`, stats `24:683–24:699`.

**Acceptance criteria**

- **Given** approved content is available, **when** benefits render, **then** three cards show 24/7 Access (`24:608–24:620`), HIPAA Compliant (`24:621–24:633`), and Insurance Integration (`24:634–24:645`) using the shared service-card pattern.
- **Given** the FAQ renders, **when** the visitor activates a question, **then** the trigger is a real keyboard-operable button with `aria-expanded` and an associated answer region; Q1 (`24:652–24:658`) is the only designed expanded state. The open/close policy and Q2–Q5 answers remain product/content decisions and must be supplied before completion.
- **Given** approved numeric claims are available, **when** stats render, **then** the four semantic stat cards show 10,000+, 500+, 98%, and 4.9 with the captions in `24:688–24:699`; claims are not published before approval.

**Jira mapping:** SCRUM-41, SCRUM-42, SCRUM-43. Depends on HS-02 and explicit FAQ behavior/copy decisions.

### HS-10 — Provide newsletter signup with defined outcomes

**As a** visitor, **I want** to subscribe to service updates **so that** I can receive product announcements and care tips.

**Figma evidence:** newsletter strip `24:700–24:708`.

**Acceptance criteria**

- **Given** the strip is visible, **when** it renders, **then** it shows the approved two-line copy, an email field with placeholder `you@example.com`, and Subscribe in the copy-left/form-right arrangement.
- **Given** an email field is focused, **when** the visitor submits, **then** the field has an accessible label, `type="email"`, keyboard operability, and a visible focus state.
- **Given** invalid, duplicate, successful, or unavailable submission outcomes, **when** the service responds, **then** the UI presents the approved validation/error/success state and does not collect health information. These states are not shown in Figma and must be defined before integrated behavior is accepted.

**Jira mapping:** SCRUM-44. Depends on HS-02 and a submission/storage decision.

### HS-11 — Present the footer and legal information

**As a** visitor, **I want** a complete footer **so that** I can understand the organization and reach approved secondary destinations.

**Figma evidence:** footer `8:170–8:197`, including brand summary `8:172–8:178`, link groups `8:179–8:193`, divider `8:194`, and legal line `8:195–8:197`.

**Acceptance criteria**

- **Given** the page reaches its end, **when** the footer renders, **then** it shows the Pulse Health brand summary, Solutions links, Company links, divider, copyright, and HIPAA/legal line in the depicted grouping.
- **Given** a footer link has no approved destination, **when** it is activated, **then** it uses an explicit unavailable treatment and is not a dead placeholder route.
- **Given** the footer is viewed on narrow screens, **when** groups stack, **then** every link remains reachable and the legal text remains readable without overflow.

**Jira mapping:** SCRUM-8 and SCRUM-6. Depends on HS-02.

## P3 validation

### HS-12 — Verify the complete home screen against Figma and requirements

**As a** product owner, **I want** automated and reviewable evidence that the shipped page matches the approved design and stories **so that** regressions are caught before release.

**Figma evidence:** full frame `8:10` (1440 × 5443) and all child nodes referenced above.

**Acceptance criteria**

- **Given** the home screen is assembled, **when** the tester runs the visual comparison at the Figma desktop viewport, **then** section order, major dimensions, typography hierarchy, spacing, colors, imagery, and content are compared against node `8:10`, with approved accessibility token deviations recorded.
- **Given** desktop, tablet, and mobile viewport checks run, **when** navigation, cards, FAQ, newsletter, and footer reflow, **then** there is no horizontal overflow, clipped text, unreachable control, or loss of semantic order.
- **Given** keyboard and screen-reader-oriented integration checks run, **when** the tester exercises every CTA, link, FAQ trigger, input, and submit control, **then** focus order, names, roles, states, and destinations meet the relevant story criteria.
- **Given** the story-to-test mapping is updated, **when** a requirement changes, **then** its Figma node, Jira story, automated test, and visual baseline are traceable in the tester artifact.

**Dependencies:** HS-01 through HS-11; SCRUM-25. This is a release gate for the home-screen slice.

## Open decisions and provisional assumptions

- The only supplied design-requirements artifact is the prior review in `docs/design-backlog-review.md`; no authoritative `docs/design-requirements.md` is present. The story wording is therefore a delivery translation, not a replacement for product/compliance approval.
- Figma contains a 1440px desktop frame only. Breakpoints, mobile navigation, exact stacking order, and responsive image treatment require a product/design decision; stories require no overflow and preserve semantic order as the safe interim behavior.
- FAQ Q2–Q5 answers and the multi-open versus single-open accordion behavior are absent from the design. Do not invent them in implementation.
- Newsletter invalid, duplicate, success, and unavailable states plus submission destination are absent from the design. Static layout may proceed, but integrated completion waits for those decisions.
- “Learn more,” Sign In, Join Pulse, Book Appointment, Explore Services, and footer destinations must be mapped to real routes or explicitly marked unavailable before acceptance.
- The Figma frame uses healthcare, insurer, HIPAA, ratings, and patient/provider claims. Public release remains contingent on the approval record in SCRUM-7, even though that Jira issue is Done.
