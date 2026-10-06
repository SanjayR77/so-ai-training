---
title: "Dynamics ticket created on escalation"
parent_epic: "documentation (output)/epics/epic-integrations-salesforce-teams.md"
summary: "Create Dynamics 365 ticket with transcript when escalation occurs."
owner: "integration-team"
priority: "P1"
sprint: ""
story_points: 3
personas:
  - "Support Specialist"
dependencies:
  - "epic-integrations-salesforce-teams"
acceptance_criteria:
  - "As a Support Specialist, an escalation creates a Dynamics ticket with conversation context."
  - "Ticket includes product tags and priority mapping."
  - "Ticket creation logs success/failure for monitoring."
tasks:
  - "Implement Dynamics API integration"
  - "Map metadata to ticket fields"
  - "Add integration tests"
links:
  - "documentation (output)/epics/epic-integrations-salesforce-teams.md"
---

As a Support Specialist, I can escalate to a human which creates a Dynamics ticket containing the conversation transcript and metadata.
