---
title: "Preserve follow-up context across turns"
parent_epic: "documentation (output)/epics/epic-information-retrieval-rag.md"
summary: "Maintain conversation context to support natural follow-up questions."
owner: "backend-team"
priority: "P0"
sprint: ""
story_points: 3
personas:
  - "Clinical Support Specialist"
dependencies:
  - "epic-information-retrieval-rag"
acceptance_criteria:
  - "As a Clinical Support Specialist, I can ask a follow-up question so that the agent remembers context."
  - "Context is preserved correctly for up to 20 turns within a session."
  - "Context changes (clear/start new topic) are respected when user requests."
tasks:
  - "Implement session context store (CosmosDB)"
  - "Add APIs to manage context lifecycle"
  - "Add integration tests for multi-turn flows"
links:
  - "documentation (output)/epics/epic-information-retrieval-rag.md"
---

As a Clinical Support Specialist, I can ask follow-up questions so that the agent retains conversation context and provides coherent answers.
