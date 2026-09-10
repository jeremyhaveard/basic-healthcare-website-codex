# Figma and Jira review

Reviewed: 2026-09-08.

The desktop designs provide a coherent visual direction, and the backlog is strongest around marketing and authentication. It is not yet a complete implementation plan for the eight designed screens. The highest-value next step is to reconcile existing stories with the current designs, resolve the few workflow decisions that affect implementation, and establish explicit testing coverage.

## Evidence and scope

- Inspected the only Figma page, Page 1 (`0:1`), and retrieved design context and screenshots for all eight screens listed below.
- Retrieved every issue returned by `project = SCRUM ORDER BY Rank ASC` on [Basic Healthcare Jira](https://basic-healthcare.atlassian.net/jira/software/projects/SCRUM/list). The response was complete: 44 issues, comprising 31 stories, 2 epics, 9 tasks, and 2 subtasks. Statuses: 41 To Do, 2 In Progress, 1 Done. This is a project-wide review; board filters and actual sprint membership were not inspected.
- Read issue descriptions throughout and comments on SCRUM-7, SCRUM-8, and SCRUM-39. General Rovo search failed because its app is not installed on the instance; direct Jira project and JQL reads succeeded.
- This checkout currently contains agent configurations, a license, and a gitignore, with no application source or existing design/delivery documents. Jira's references to an implemented application and passing tests are historical reports, not results independently verified in this checkout.

## Screen coverage

| Figma screen | Current Jira coverage | Review finding |
| --- | --- | --- |
| [Landing page, 8:10](https://www.figma.com/design/MtFODCLvM5tffZ2txAvdVL/Basic-Healthcare-Design?node-id=8-10), 1440 × 5443 | SCRUM-6 through SCRUM-12; SCRUM-41 through SCRUM-44 | All main sections have stories. The epic's screen inventory is stale: it omits benefits, FAQ, statistics, and newsletter. |
| [Dashboard, 8:198](https://www.figma.com/design/MtFODCLvM5tffZ2txAvdVL/Basic-Healthcare-Design?node-id=8-198), 1440 × 954 | SCRUM-20, SCRUM-21, SCRUM-22, SCRUM-35 cover related workflows/access | No dedicated story owns the complete dashboard: metric cards, chart descriptions, appointment summary, personalized tip, and care-plan destination. |
| [Provider directory, 8:473](https://www.figma.com/design/MtFODCLvM5tffZ2txAvdVL/Basic-Healthcare-Design?node-id=8-473), 1440 × 1246 | SCRUM-14 mentions provider integration; SCRUM-20 covers scheduling | No explicit directory browsing/filtering story, including keyword search, specialty/location filters, applied chips, clear-all, empty results, and selected-provider handoff. |
| [Appointment booking, 8:653](https://www.figma.com/design/MtFODCLvM5tffZ2txAvdVL/Basic-Healthcare-Design?node-id=8-653), 1440 × 1632 | SCRUM-20 | Extend the existing story with practitioner changes, selected time, visit notes, timezone, price summary, submission errors, and availability conflicts. |
| [Login, 24:5](https://www.figma.com/design/MtFODCLvM5tffZ2txAvdVL/Basic-Healthcare-Design?node-id=24-5), 1440 × 1222 | SCRUM-17 and SCRUM-35 through SCRUM-39 | Good separation of static UI and working authentication. Existing notes already identify footer differences, contrast, and the incorrect Google icon. |
| [Signup, 24:83](https://www.figma.com/design/MtFODCLvM5tffZ2txAvdVL/Basic-Healthcare-Design?node-id=24-83), 1440 × 1342 | SCRUM-19 and SCRUM-40 | Update SCRUM-40's incorrect statement that no registration design exists. Clarify ownership between profile/consent and account creation. Step 2 is still missing. |
| [Medical records, 24:190](https://www.figma.com/design/MtFODCLvM5tffZ2txAvdVL/Basic-Healthcare-Design?node-id=24-190), 1440 × 1196 | SCRUM-18; related medication work in SCRUM-22 | Partial coverage. Define ownership for visit history, immunizations, upload, referral requests, individual downloads, and Export All. |
| [Account settings, 24:353](https://www.figma.com/design/MtFODCLvM5tffZ2txAvdVL/Basic-Healthcare-Design?node-id=24-353), 1440 × 1408 | SCRUM-19, SCRUM-23, SCRUM-37 | Partial coverage. Profile editing, notification preferences, device connections, insurance verification, 2FA enrollment, and save/discard behavior need distinct acceptance criteria. |

## Design findings

### Strengths

The screens share strong heading hierarchy, recognizable cards, restrained backgrounds, and prominent actions. Outfit headings and Instrument Sans body text establish a consistent typographic direction. Booking keeps the appointment summary beside the form; the portal separates navigation from task content. These patterns should become shared components with explicit marketing, authentication, and portal variants.

### Resolve before implementing the affected interaction

1. **Directory filters contradict the visible results.** The active Cardiology chip is displayed alongside Neurology, Pediatrics, and Internal Medicine cards. Either the chips represent applied filters and the results must match, or their meaning must change. The specialty dropdown also reads All Specialties. Define draft versus applied filter state. Source: `8:473`.
2. **Booking selection is ambiguous.** The summary says 09:30 AM, but that slot does not have a distinct selected treatment. The muted 10:00 AM slot needs an explicit unavailable meaning. Add month/year and timezone context, an unselected summary state, and the outcome when a selected slot becomes unavailable. Source: `8:653`, scheduler `8:689` and summary `8:744`.
3. **Booking price labels need clarification.** The summary subtracts an amount labeled Insurance Co-pay from the consultation fee. Clarify whether this is an insurance contribution, adjustment, or another amount, and define how estimates change. This is a UI/domain-label question, not a verified billing rule. Source: `8:757`.
4. **Signup is an incomplete flow.** The form says Step 1 of 2 but its action is Create Account; only step 1 is shown. Decide whether the action advances or creates an account, then supply step 2, completion, and recovery states. The consent checkbox is depicted checked: specify the intended initial state and deliberate user action. Source: `24:83`.
5. **Settings mixes several save models.** Save All Changes, Edit Profile, independent notification switches, Sync Now, and 2FA all appear together. Define what is staged, what is immediate, how discard works, and how partial failures appear. A 2FA switch needs an enrollment/verification outcome, beyond a visual toggle. Source: `24:353`.
6. **Responsive and failure-state specifications are incomplete.** All eight inspected screens are 1440px desktop frames. No separate mobile/tablet screens or complete error/loading/empty flows were found. Define navigation collapse, card stacking, booking summary placement, records-table behavior, and field error placement. Existing selected dates, toggles, and one expanded FAQ answer are useful partial state examples, not complete interaction specifications.

### Improve consistency and readability

- **Contrast needs a shared correction.** From retrieved design colors, calculated contrast is approximately 3.67:1 for white on rose `#f43f5e`, 3.74:1 for white on teal `#0d9488`, and 3.75:1 for footer gray `#64748b` on navy `#0f172a`. SCRUM-27 already records button/link corrections; extend its review to footer text and portal status badges. Record accepted accessible deviations so visual tests do not demand the original colors.
- **Brand assets drift between screens.** Directory/booking use a circled-X-like logo, the landing/login use an activity mark, and records/settings use bars. The Google login control also shows a circled symbol rather than the expected Google mark. Choose canonical assets and explicit variants. These are visible design inconsistencies, not proven defects in application code.
- **Navigation destinations need one map.** Marketing uses Services and Testimonials; directory/booking use Doctors & Services and Patient Portal. Portal Clinical Labs opens a broader My Health Records surface. Decide intentional differences and give each action an agreed destination or unavailable treatment.
- **Provider identity assets differ.** Dr. Amanda Ross has different portraits in the directory and booking screens. Use a consistent provider fixture and asset mapping across the journey.
- **Some landing content is unresolved rather than absent from Jira.** FAQ answers 2–5 and newsletter feedback states are already called out in SCRUM-42 and SCRUM-44. Resolve those existing items instead of creating duplicates. The long landing page would also benefit from a later booking/signup action near the lower sections; this is a proposed improvement, not a missing requirement.

## Backlog findings and proposed changes

| Priority proposed by this review | Action | Existing issues |
| --- | --- | --- |
| First | Locate the authoritative implementation branch/repository and reconcile evidence before estimating or closing work. SCRUM-8 reports completed implementation and passing focused tests but remains In Progress; its files are absent here. SCRUM-24 also assumes a legacy static app that is absent here. | SCRUM-8, SCRUM-24, SCRUM-39 |
| First | Update the registration source to `24:83`, retaining the genuine missing step-2 and state questions. | SCRUM-40, SCRUM-19 |
| First | Add explicit unit and integration test framework work, with commands, fixtures, CI execution, and requirement mapping. Browser baseline and lint/build gates do not cover this responsibility. | Extend the plan around SCRUM-25 and SCRUM-28 |
| Next | Establish the corrected token palette and intentional shared layout/asset variants before building more screens. | SCRUM-27, SCRUM-8, SCRUM-39 |
| Next | Add a provider discovery story and dashboard composition story; refine booking against the actual frame. | New scoped stories plus SCRUM-14 and SCRUM-20 |
| Next | Split records and settings into independently testable slices. Mark integrations as dependent work and static/demo presentation as such where intended. | SCRUM-18, SCRUM-19, SCRUM-23, SCRUM-37 plus uncovered actions |
| Next | Resolve FAQ behavior/copy and newsletter validation/submission outcomes within their current stories. | SCRUM-42, SCRUM-44 |
| Planning cleanup | Add actual dependency links and meaningful priority ordering. Every returned `issuelinks` array is empty, although prose describes dependencies. All 39 non-onboarding issues are Medium. Rank places the browser baseline above its foundation prerequisite. | Project-wide |
| Planning cleanup | Restore epic parenting for older stories and group deployment work intentionally. The returned parent field is populated for the newer auth and landing additions, but absent for older related stories such as SCRUM-8 and SCRUM-20. | SCRUM-6, SCRUM-13 and related stories |
| Planning cleanup | Review overlap: account umbrella versus credential/OAuth/recovery stories; onboarding versus profile/consent; routing versus booking; environment readiness versus AWS delivery. Clarify ownership rather than deleting work automatically. Separate whole-page validation from the testimonials story. | SCRUM-17/35–38; SCRUM-19/40; SCRUM-14/20; SCRUM-26/30–34; SCRUM-10 |

SCRUM-1 through SCRUM-5 are Jira onboarding items. Consider moving them out of product planning once their onboarding purpose is finished.

### Existing approvals and scope boundaries

[SCRUM-7](https://basic-healthcare.atlassian.net/browse/SCRUM-7) is Done and includes Jeremy's 2026-08-26 product approval for implementing landing-page copy and claims. [SCRUM-39](https://basic-healthcare.atlassian.net/browse/SCRUM-39) has a recorded approval for the static login UI. Those implementation approvals already exist; do not present them as newly blocked. Their comments distinguish implementation from production release and working patient services. Preserve that distinction and attach the approved content revision when reconciling later design additions.

AWS stories SCRUM-30 through SCRUM-34 deliberately describe a static public site. SCRUM-35 explicitly requires authenticated backend authorization. These can be separate delivery phases, but a static-hosting milestone must not be treated as completing the patient platform.

## Suggested delivery and test sequence

1. Recover the authoritative source and previous test evidence; reconcile statuses and document paths. Jira references `design/requirements/` and `delivery/tickets/`, while the new agents default to `docs/`. Choose one convention so requirements do not diverge.
2. Complete the application foundation, shared tokens, and unit/integration/browser test setup together.
3. Finish the existing landing and static-login scope, resolving the documented FAQ, newsletter, footer, and unavailable-control behavior.
4. Define the provider → booking → account journey, including the missing signup step and booking outcomes; deliver vertical slices with clearly stated demo or integrated behavior.
5. Deliver authenticated dashboard, records, and settings slices with their dependencies, followed by the selected release path.

The tester should maintain a Figma-node → requirement → Jira-story → test mapping. Initial meaningful cases: applied filters match results; chosen provider survives navigation; selected time matches summary; stale booking availability is handled; account errors and access rules follow their stories; save/discard and partial failures behave consistently; FAQ and newsletter states match decisions. Use unit tests for logic, integration tests for collaborating UI/service boundaries, and browser checks for journeys, keyboard access, responsive behavior, and visual comparisons. Review visual baselines against Figma and accepted changes before adopting them. These are proposed tests; none ran as part of this review.

No Figma designs, Jira issues, statuses, comments, or application code were changed by this review.
