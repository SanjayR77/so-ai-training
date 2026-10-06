---
title: "" # Short, descriptive story title
parent_epic: "" # Path or ID of the parent epic (e.g., documentation (output)/epics/epic-information-retrieval-rag.md)
summary: "" # One-line summary of the story
owner: "" # Assignee or team
priority: "" # e.g., P0 / P1
sprint: "" # Sprint name or number
story_points: "" # e.g., 3, 5, 8
personas:
  - "" # primary persona impacted
dependencies:
  - ""
acceptance_criteria:
  - "" # list of testable acceptance criteria
tasks:
  - "" # implementation tasks (dev, test, docs)
links:
  - "" # design docs, PRD snippets, JIRA ticket links
---

User story (required format):

As a <persona>, I can <do task> so that <benefit>.

Guidance:
- Keep the user story to a single sentence following the template above.
- Include the parent epic path in `parent_epic` to link work to its epic.
- Put atomic, testable acceptance criteria under `acceptance_criteria` (one per line).
- Use `tasks` to track implementation steps and break down work for sprint planning.

Acceptance Criteria formatting examples:

- As a Clinical Support Specialist, I can search by product name so that I quickly find device specs.

Acceptance Criteria (example, list each as a separate item):

- The search returns relevant results within p90 processing time <5s.
- Results include clickable citations with document name, section, and version date.
- If no results, system responds "Information not found" and logs the query as a documentation gap.

Example story (filled):

title: "Search by product name returns citation-backed results"
parent_epic: "documentation (output)/epics/epic-information-retrieval-rag.md"
summary: "Enable product-name queries to return concise answers with citations."
owner: "frontend-team"
priority: "P0"
sprint: "Sprint 3"
story_points: 3
personas:
  - "Clinical Support Specialist"
acceptance_criteria:
  - "As a Clinical Support Specialist, I can search by product name so that I quickly find device specs."
  - "Search returns results with at least one citation showing document name and date."
  - "Results load in UI within p90 processing time <5s."
tasks:
  - "Implement search API call to retrieval service"
  - "Render citations in UI"
  - "Add unit and integration tests"
links:
  - "documentation (output)/epics/epic-information-retrieval-rag.md"

Notes:
- Keep acceptance criteria specific and measurable. Prefer numeric targets where possible.
- Use the `parent_epic` field to enable automation or reporting that groups stories under epics.
