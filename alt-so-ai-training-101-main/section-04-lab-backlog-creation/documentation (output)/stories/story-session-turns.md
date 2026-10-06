---
title: "Support up to 20 conversation turns per session"
parent_epic: "documentation (output)/epics/epic-context-management-conversation-state.md"
summary: "Preserve session context reliably across multiple turns."
owner: "backend-team"
priority: "P1"
sprint: ""
story_points: 3
personas:
  - "Support Specialist"
dependencies:
  - "epic-context-management-conversation-state"
acceptance_criteria:
  - "As a Support Specialist, I can have follow-up interactions up to 20 turns so that context is maintained."
  - "Conversation state is serialized and restored correctly across re-entries in the session."
  - "Session storage is secured and respects opt-in for long-term summaries."
tasks:
  - "Implement session persistence in CosmosDB"
  - "Add serialization and rehydration tests"
  - "Add opt-in flag for saving summaries"
links:
  - "documentation (output)/epics/epic-context-management-conversation-state.md"
---

As a Support Specialist, I can maintain context for up to 20 turns so that follow-up questions work naturally.
