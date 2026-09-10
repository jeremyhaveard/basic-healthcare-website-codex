# Pulse Health home screen QA report

Date: 2026-09-08  
Scope: landing page implementation in `app/page.tsx`, `app/layout.tsx`, and `app/globals.css` against `docs/design-requirements.md`, `docs/user-stories.md`, and Figma node `8:10`.

## Verification results

| Check | Command or method | Result |
|---|---|---|
| TypeScript | `npm.cmd run typecheck` | **PASS** — `tsc --noEmit` completed successfully. |
| Production build | `npm.cmd run build` | **PASS with warnings** — Next.js generated the static `/` route. Autoprefixer warned about mixed support for `start`/`end` flex alignment values in `app/globals.css`. |
| Lint | `npm.cmd run lint` | **BLOCKED** — Next.js opened the first-run ESLint configuration prompt; no non-interactive lint result was available. |
| Local HTTP smoke check | `Invoke-WebRequest http://localhost:3001` | **PASS** — HTTP 200, HTML returned, document language is `en`, and the Next.js stylesheet/scripts were present. |
| Desktop/mobile browser review | Browser automation | **UNVERIFIED** — browser tooling was unavailable in this constrained pass. No screenshot or pixel comparison was produced. |

## Coverage against requirements and stories

The implementation includes all major ordered regions required by REQ-HOME-001: header, hero, insurer bar, services, three-step journey, testimonials, benefits, FAQ, statistics, newsletter, and footer. The corresponding content is present for HS-04 through HS-11. The FAQ starts with item one expanded and uses buttons with `aria-expanded`, `aria-controls`, and answer regions. The newsletter has a labeled `type="email"` field, client-side invalid-email feedback, and an `aria-live` status. A skip link, semantic landmarks, one `h1`, responsive CSS breakpoints, and a mobile navigation toggle are present.

HS-12 is only partially verified. Typecheck/build and an HTTP smoke check passed, but browser interaction, keyboard traversal, responsive overflow, computed contrast, and visual comparison to Figma node `8:10` remain unverified.

## Findings and risks

1. **P1 — destination behavior remains provisional.** `Sign In` and `Book Appointment` use an alert-based unavailable treatment, while `Join Pulse` points to `#newsletter`. The stories require approved destinations or an explicit unavailable state; `Join Pulse` should not be treated as newsletter signup unless product approves that mapping.
2. **P1 — placeholder footer destinations.** `About Us`, `Our Providers`, and `Careers` point to `#top`, which is a misleading destination under HS-11. They need approved routes or the same explicit unavailable treatment.
3. **P2 — service and benefit Learn more links all point to `#contact`.** This is acceptable only as a provisional contact path; distinct service destinations are still an open requirement decision.
4. **P2 — visual fidelity is unverified.** The hero media is CSS-built artwork rather than the exported Figma hero asset, and avatars/icons are text initials/glyphs. Confirm whether these are acceptable substitutes before pixel-level sign-off.
5. **P2 — responsive and accessibility runtime checks are outstanding.** The CSS includes 900px and 650px breakpoints, but no browser evidence exists for mobile menu behavior, no horizontal overflow, visible focus states, touch target sizes, or contrast.
6. **P3 — build warnings.** Replace CSS alignment values that trigger Autoprefixer warnings with the supported `flex-start`/`flex-end` equivalents where visually equivalent.

## Blockers

- Interactive lint cannot complete until an ESLint configuration is selected or supplied non-interactively.
- Browser screenshot/interaction and Figma pixel comparison were not possible in this constrained pass because browser automation was unavailable.
- Product decisions remain open for canonical routes, approved claims/assets, mobile breakpoints, FAQ policy, and newsletter submission behavior.

## Recommended next QA actions

- Add a committed ESLint configuration and rerun `npm.cmd run lint`.
- Run desktop (1440px), tablet, and mobile browser checks with screenshots; compare section order, spacing, typography, colors, hero media, and card geometry to Figma node `8:10`.
- Exercise the mobile menu, every CTA/link, FAQ open/close behavior, invalid newsletter input, keyboard focus order, and page navigation.
- Resolve the P1 destination findings before release sign-off.
