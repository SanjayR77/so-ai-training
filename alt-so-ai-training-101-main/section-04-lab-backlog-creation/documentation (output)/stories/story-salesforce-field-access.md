---
title: "Salesforce access for field reps"
parent_epic: "documentation (output)/epics/epic-integrations-salesforce-teams.md"
summary: "Embed agent access within Salesforce for field representatives."
owner: "integration-team"
priority: "P1"
sprint: ""
story_points: 3
personas:
  - "Field Sales Representative"
dependencies:
  - "epic-integrations-salesforce-teams"
acceptance_criteria:
  - "As a Field Sales Representative, I can access the agent from Salesforce so that I get answers while in CRM."
  - "Access is authenticated and respects user permissions."
  - "Performance meets mobile/CRM constraints (acceptable latency)."
tasks:
  - "Implement Salesforce integration (iframe or Lightning component)"
  - "Ensure SSO and permission mapping"
  - "Test performance in Salesforce contexts"
links:
  - "documentation (output)/epics/epic-integrations-salesforce-teams.md"
---

As a Field Sales Representative, I can access the agent inside Salesforce so that I can get product answers during customer interactions.
