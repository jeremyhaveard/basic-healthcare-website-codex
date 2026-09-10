# Pulse Health landing page design requirements

Source: [Figma Basic Healthcare Design](https://www.figma.com/design/MtFODCLvM5tffZ2txAvdVL/Basic-Healthcare-Design?node-id=8-10)  
Reviewed node: `screen-landing-page` (`8:10`)  
Observed canvas: `1440 × 5443px`; review date: 2026-09-08.

## Evidence and interpretation

“Observed” means directly visible in the Figma node or returned node metadata. “Assumption” is an implementation interpretation that should be confirmed by product or engineering. “Open question” requires a decision before the related interaction is considered complete.

## Screen inventory

| Area | Figma node | Observed structure and content | Interaction implication |
|---|---:|---|---|
| Header | `8:11` | 82px white header; Pulse Health logo at `8:12`; nav links Home, Services, How It Works, Testimonials, Contact; Sign In; pink Join Pulse button. Horizontal padding is 80px. | Nav items and auth controls must be keyboard reachable and expose real destinations/actions. |
| Hero | `8:27` | 723px white section. Left card `8:28` contains trusted badge, headline “Clinical excellence meets everyday accessibility”, supporting copy, Book Appointment and Explore Services CTAs, and rating avatars/copy. Right image `8:49` is 560×480 with rounded corners. | Primary CTA starts appointment flow; secondary CTA anchors/navigates to services. Hero image needs meaningful alternative text. |
| Trust bar | `8:51` | 105px pale slate bar with “Featured & Trusted In” and Aetna, BlueCross, UnitedHealthcare, Cigna, Humana wordmarks. | If logos are claims or links, legal/product approval and destinations are needed. |
| Services | `8:58` | Section header plus four 302×279 cards in `8:62`: Telehealth Visits, Prescription Sync, Lab Results Hub, Care Team Direct. Each has icon, description, Learn more link. | Each card/link needs a defined destination and focus/hover state. |
| How it works | `8:107` | Three 405×243 cards: 01 Create Your Profile, 02 Book Instant Visit, 03 Thrive In Good Health, with supporting copy. | Treat as explanatory content; the step cards may link to signup/booking if product confirms. |
| Testimonials | `8:127` | Two 624×294 review cards with five stars, quote, divider, avatar, reviewer name and role. | Reviews are static content in the design; confirm whether data is CMS/API driven. |
| Why choose Pulse | `24:603` | Three 410.67×256 benefit cards: 24/7 Access, HIPAA Compliant, Insurance Integration; each has icon, copy, Learn more. | “HIPAA Compliant” and insurance statements require approved content/legal review. |
| FAQ | `24:647` | Five FAQ rows in `24:651`; first question is expanded with answer, remaining four collapsed. Each row has a down-chevron. | Accordion must support keyboard controls, expanded state, and accessible relationship between question and answer. |
| By the numbers | `24:683` | Four 302×172 stat cards: 10,000+ active patients, 500+ providers, 98% satisfaction, 4.9 average rating. | Values are claims; confirm source, refresh policy, and whether they are static. |
| Newsletter | `24:700` | 128px strip with copy, email input placeholder `you@example.com`, Subscribe button. | Define validation, consent language, success/error states, and submission endpoint. |
| Footer | `8:170` | 395px dark footer; brand statement; Solutions and Company link groups; copyright “© 2026 Pulse Health System. HIPAA Compliant.” and design credit. | All links, legal copy, and accessibility/privacy links need confirmed destinations/content. |

## Traceable requirements

### Layout and visual system

- **REQ-HOME-001 (observed):** Implement the page as the ordered regions `8:11`, `8:27`, `8:51`, `8:58`, `8:107`, `8:127`, `24:603`, `24:647`, `24:683`, `24:700`, and `8:170`.
- **REQ-HOME-002 (observed):** Use the Figma palette: dark navy text `#0f172a`, slate body text `#475569`, teal brand/action color `#0d9488`, dark teal `#0f766e`, pink primary CTA `#f43f5e`, white surfaces, pale slate background `#f8fafc`, pale teal surface `#f0fdfa`, and border `#e2e8f0`.
- **REQ-HOME-003 (observed):** Preserve the visual hierarchy: Outfit is used for brand/headings and Instrument Sans for body/navigation/controls. The hero heading is 56px, section headings are 40px, card headings are 20px, and body copy is generally 15–18px at the reference viewport.
- **REQ-HOME-004 (observed):** Preserve the reference spacing and geometry at desktop: primary page gutters 80px; header height 82px; hero image 560×480; service cards 302×279; testimonial cards 624×294; benefit cards 410.67×256; stat cards 302×172.
- **REQ-HOME-005 (assumption):** Use a centered max-width content container equivalent to the 1280px content area at 1440px viewport, with fluid gutters below desktop width.
- **REQ-HOME-006 (observed):** Use rounded cards and controls: hero/media 24px radius, service/benefit/stat/review cards approximately 16px radius, and buttons/badge 8px/20px radius as shown.

### Navigation and conversion

- **REQ-HOME-010 (observed):** Header must expose Home, Services, How It Works, Testimonials, and Contact, plus Sign In and Join Pulse.
- **REQ-HOME-011 (observed):** Hero must show the badge “Trusted by 10,000+ Active Patients”, headline, supporting paragraph, Book Appointment CTA with arrow icon, Explore Services CTA, and 4.9/5 rating trust indicator.
- **REQ-HOME-012 (assumption):** Book Appointment routes to provider/time selection or authentication when unauthenticated; Join Pulse routes to signup; Sign In routes to login.
- **REQ-HOME-013 (assumption):** Explore Services and Learn more links scroll to or navigate to service detail content. Confirm whether the service cards need distinct detail pages.

### Content sections

- **REQ-HOME-020 (observed):** Services must include Telehealth Visits, Prescription Sync, Lab Results Hub, and Care Team Direct with the exact Figma descriptions unless approved copy changes are supplied.
- **REQ-HOME-021 (observed):** How It Works must present the three numbered steps and copy from nodes `8:113`–`8:126`.
- **REQ-HOME-022 (observed):** Testimonials must show both five-star reviews and reviewer details from nodes `8:144`–`8:169`, with image assets retained at the designed avatar size.
- **REQ-HOME-023 (observed):** Why Choose Pulse must show 24/7 Access, HIPAA Compliant, and Insurance Integration cards with their supporting copy.
- **REQ-HOME-024 (observed):** FAQ must initially render the first item expanded and the other four collapsed, matching `24:652`–`24:681`.
- **REQ-HOME-025 (observed):** By the Numbers must show the four supplied metric/value pairs from `24:688`–`24:699`.
- **REQ-HOME-026 (observed):** Newsletter must show the supplied title, supporting copy, email field, and Subscribe control.
- **REQ-HOME-027 (observed):** Footer must include the supplied brand statement, Solutions links, Company links, copyright, and credit text.

### Responsive behavior

- **REQ-HOME-030 (assumption):** At widths below the desktop layout, navigation should collapse to an accessible menu control; the Figma node provides no mobile header state.
- **REQ-HOME-031 (assumption):** Hero columns should stack with content before media; hero CTAs should wrap or become full-width controls without clipping.
- **REQ-HOME-032 (assumption):** Four-card and three-card rows should collapse to one or two columns based on available width while preserving card order and readable copy.
- **REQ-HOME-033 (assumption):** Trust bar, stats, newsletter, and footer should reflow vertically on narrow screens; no horizontal scrolling should be required.
- **REQ-HOME-034 (open):** Supply approved mobile/tablet breakpoints, screenshots, and intended nav/menu behavior before pixel-level responsive acceptance is declared.

### Accessibility and interaction quality

- **REQ-HOME-040 (assumption):** Use semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) and one logical `h1`; section headings should follow a meaningful hierarchy.
- **REQ-HOME-041 (assumption):** Every interactive item must be a native link/button or equivalent with visible keyboard focus, logical tab order, and pointer target of at least 44×44 CSS pixels where practical.
- **REQ-HOME-042 (assumption):** Provide descriptive alt text for the hero image and testimonial avatars when they convey meaning; decorative icons and background imagery should be hidden from assistive technology.
- **REQ-HOME-043 (assumption):** Maintain WCAG 2.2 AA contrast for text, controls, focus indicators, and links. Verify the light teal text and pale surfaces rather than relying on visual appearance alone.
- **REQ-HOME-044 (observed/interaction):** FAQ chevrons must communicate expanded/collapsed state with `aria-expanded` and associate each answer with its question; keyboard users must be able to open/close items.
- **REQ-HOME-045 (assumption):** Newsletter validation must identify the email field, announce invalid input and submission results, and retain user input after an error.
- **REQ-HOME-046 (assumption):** Do not expose protected health information in marketing-page analytics, forms, or testimonial content; confirm approved privacy and consent language.

## Assets and implementation notes

The design context identifies exported assets for the hero image, five avatar images, and icons including activity, arrow-right, video, chevrons, file-text, users, star, clock, shield, credit-card, and down-chevron. Use the corresponding exported assets or an existing project icon component only when the glyph and geometry match. Do not replace them with generic text symbols or placeholders.

The reference uses a 1440px desktop frame and does not show loading, error, empty, hover, focus, menu-open, FAQ-transition, newsletter-success, or newsletter-error states. Those states need product/engineering decisions and should be covered by implementation tests.

## Open questions

1. What are the canonical routes for every nav item, service Learn more link, footer link, Book Appointment, Join Pulse, and Sign In?
2. What are the approved mobile/tablet layouts and breakpoints? Is there a mobile Figma node elsewhere in the file?
3. Are the patient/provider counts, ratings, insurance names, HIPAA statement, testimonials, and 2026 copyright text approved production content or illustrative copy?
4. Should FAQ allow one expanded item at a time or multiple, and should it deep-link to a question?
5. What newsletter provider, consent text, validation rules, and success/error behavior should be used?
6. Are testimonial and hero imagery licensed production assets, and what alt text/names should be used?
7. Should “Contact” open an in-page section, a form, or a separate support channel?

