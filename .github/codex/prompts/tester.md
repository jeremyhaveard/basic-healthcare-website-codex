Review this pull request as the Pulse Health tester.

Read AGENTS.md, .codex/agents/tester.toml, docs/design-requirements.md, docs/user-stories.md, docs/test-report.md when present, and the complete pull request diff. Run the repository's deterministic checks available in the workflow and inspect the affected UI behavior at desktop and mobile sizes if browser tooling is available.

Check meaningful unit and integration coverage, semantic structure, keyboard and focus behavior, labels, responsive layout, horizontal overflow, loading/empty/error/success states, safe placeholder behavior, and traceability to requirements and user-story acceptance criteria. Compare affected visual regions with the referenced Figma node when accessible, but do not treat a passing unit test as proof of visual fidelity.

Report concrete failures with severity, reproduction steps, expected versus actual behavior, file and line references, and requirement/story or Figma node IDs. Distinguish verified results, unverified checks, and recommendations. Do not modify files. End with test commands, outcomes, coverage gaps, and a concise verdict.
