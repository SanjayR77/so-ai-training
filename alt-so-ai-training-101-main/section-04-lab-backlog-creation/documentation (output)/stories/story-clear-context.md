---
title: "User can clear session context or start a new topic"
parent_epic: "documentation (output)/epics/epic-context-management-conversation-state.md"
summary: "Allow users to explicitly clear context or begin a new topic."
owner: "frontend-team"
priority: "P1"
sprint: ""
story_points: 2
personas:
  - "Support Specialist"
dependencies:
  - "epic-context-management-conversation-state"
acceptance_criteria:
  - "As a Support Specialist, I can clear the current conversation context so that the agent treats the next question as a new topic."
  - "Clearing context removes session state and any opt-in stored summary for the user."
  - "UI provides a clear affordance for starting a new topic."
tasks:
  - "Add 'Clear context' UI action"
  - "Implement API to drop session state"
  - "Add tests verifying context removal"
links:
  - "documentation (output)/epics/epic-context-management-conversation-state.md"
---

As a Support Specialist, I can clear session context so that I can start a new unrelated query without carryover.
