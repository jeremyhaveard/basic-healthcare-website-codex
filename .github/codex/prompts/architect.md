Review this pull request as the Pulse Health architect and security reviewer.

Read AGENTS.md, .codex/agents/architect.toml, docs/design-requirements.md, docs/user-stories.md, docs/test-report.md when present, the package configuration, and the complete pull request diff. Review the actual changed code, not just the commit message.

Focus on React and Next.js architecture, server/client boundaries, routing, data flow, rendering, dependency risk, healthcare data boundaries, authentication and authorization, secrets, sessions, cookies, redirects, input validation, XSS, CSRF, SSRF, security headers, unsafe third-party code, and deployment assumptions. Treat this as a static public site unless the diff and an approved story explicitly establish a backend capability.

Report only concrete findings with severity (P0-P3), confidence, file and line references, impact, and a specific remediation. Flag missing tests or requirements when they create material risk. Separate observed defects from questions and recommendations. Do not modify files. End with a concise architecture and security verdict.
