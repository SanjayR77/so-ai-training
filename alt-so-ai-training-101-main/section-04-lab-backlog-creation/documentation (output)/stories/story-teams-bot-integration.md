---
title: "Teams bot integration for agent access"
parent_epic: "documentation (output)/epics/epic-multi-channel-access.md"
summary: "Expose the agent as a Microsoft Teams bot for pilot users."
owner: "platform-team"
priority: "P1"
sprint: ""
story_points: 3
personas:
  - "Field Sales Representative"
dependencies:
  - "epic-multi-channel-access"
acceptance_criteria:
  - "As a Field Sales Representative, I can query the agent via Teams so that I get answers within my workflow."
  - "Bot authenticates via Azure AD SSO and respects SharePoint permissions."
  - "Responses render citations and 'Talk to Human' action in adaptive cards."
tasks:
  - "Implement Teams bot using Bot Framework"
  - "Create adaptive card templates for responses"
  - "Test SSO and permissions flow"
links:
  - "documentation (output)/epics/epic-multi-channel-access.md"
---

As a Field Sales Representative, I can query the agent via Teams so that I can get product answers while on-site.
