---
title: "Admin can add or remove SharePoint sources"
parent_epic: "documentation (output)/epics/epic-administration-interface-rbac.md"
summary: "Provide admin controls to add/remove SharePoint sources with audit trail."
owner: "admin-team"
priority: "P1"
sprint: ""
story_points: 3
personas:
  - "System Administrator"
dependencies:
  - "epic-administration-interface-rbac"
acceptance_criteria:
  - "As a System Administrator, I can add or remove SharePoint sources so that index scope is managed."
  - "Admin actions are logged with user, timestamp, and action details."
  - "Changes propagate to indexing jobs within defined window (e.g., 1 hour)."
tasks:
  - "Implement admin UI for source management"
  - "Add audit logging for admin actions"
  - "Test propagation to ingestion pipeline"
links:
  - "documentation (output)/epics/epic-administration-interface-rbac.md"
---

As a System Administrator, I can add or remove SharePoint sources so that I control which content is available to the agent.
