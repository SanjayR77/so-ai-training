---
title: "Edit guardrails and system prompts with audit history"
parent_epic: "documentation (output)/epics/epic-administration-interface-rbac.md"
summary: "Allow admins to update system prompts/guardrails while recording change history."
owner: "admin-team"
priority: "P1"
sprint: ""
story_points: 3
personas:
  - "Compliance Officer"
dependencies:
  - "epic-administration-interface-rbac"
acceptance_criteria:
  - "As a Compliance Officer, I can edit guardrails so that emerging risks can be mitigated."
  - "All edits are versioned with author, timestamp, and reason."
  - "Previous versions can be restored and changes are auditable."
tasks:
  - "Implement guardrail editing UI with versioning"
  - "Hook changes into audit log"
  - "Add approval workflow for high-risk edits"
links:
  - "documentation (output)/epics/epic-administration-interface-rbac.md"
---

As a Compliance Officer, I can edit guardrails with audit history so that changes are controlled and traceable.
