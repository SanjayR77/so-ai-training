---
title: "'Talk to Human' button creates Dynamics 365 ticket"
parent_epic: "documentation (output)/epics/epic-escalation-dynamics365-integration.md"
summary: "Provide a visible escalation button that creates a Dynamics 365 ticket with full context."
owner: "integration-team"
priority: "P0"
sprint: ""
story_points: 3
personas:
  - "Support Specialist"
dependencies:
  - "epic-escalation-dynamics365-integration"
acceptance_criteria:
  - "As a Support Specialist, I can click 'Talk to Human' so that a Dynamics 365 ticket is created with conversation context."
  - "Ticket includes transcript, product line tag, and priority."
  - "User receives ticket number and confirmation message."
tasks:
  - "Implement ticket creation API call"
  - "Design escalation modal and UX"
  - "Add integration tests with Dynamics sandbox"
links:
  - "documentation (output)/epics/epic-escalation-dynamics365-integration.md"
---

As a Support Specialist, I can click 'Talk to Human' so that a ticket is created and humans can follow up with full context.
