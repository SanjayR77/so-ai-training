---
title: "Auto-escalate low-confidence or adverse-event queries"
parent_epic: "documentation (output)/epics/epic-escalation-dynamics365-integration.md"
summary: "Automatically escalate queries below confidence threshold or containing adverse-event keywords."
owner: "backend-team"
priority: "P0"
sprint: ""
story_points: 3
personas:
  - "Support Specialist"
dependencies:
  - "epic-escalation-dynamics365-integration"
acceptance_criteria:
  - "As a Support Specialist, the system auto-escalates low-confidence (<70%) queries so that humans handle risky cases."
  - "Adverse-event keywords trigger high-priority escalations."
  - "Escalation creates a Dynamics ticket with reason and confidence score attached."
tasks:
  - "Implement confidence threshold checks and keyword detection"
  - "Wire auto-escalation into ticket creation flow"
  - "Add monitoring for escalation volume"
links:
  - "documentation (output)/epics/epic-escalation-dynamics365-integration.md"
---

As a Support Specialist, I can rely on auto-escalation for low-confidence or adverse-event queries so that high-risk interactions receive human attention.
