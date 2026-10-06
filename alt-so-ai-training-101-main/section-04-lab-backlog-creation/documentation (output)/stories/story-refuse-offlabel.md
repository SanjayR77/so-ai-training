---
title: "Refuse off-label and medical advice requests"
parent_epic: "documentation (output)/epics/epic-response-generation-grounding.md"
summary: "Implement guardrails so the agent refuses medical advice and off-label requests with standard messaging."
owner: "safety-team"
priority: "P0"
sprint: ""
story_points: 3
personas:
  - "Regulatory Affairs Specialist"
dependencies:
  - "epic-response-generation-grounding"
acceptance_criteria:
  - "As a Regulatory Affairs Specialist, I can ensure the agent refuses requests for medical advice so that we remain compliant."
  - "Agent returns a standard disclaimer and 'Talk to Human' option for disallowed requests."
  - "Refusals are logged and flagged for review."
tasks:
  - "Implement refusal logic and standardized messaging"
  - "Add tests for detection of off-label/advice requests"
  - "Hook refusals into audit logging"
links:
  - "documentation (output)/epics/epic-response-generation-grounding.md"
---

As a Regulatory Affairs Specialist, I can ensure the agent refuses medical advice so that responses remain compliant with IFU and regulatory guidance.
