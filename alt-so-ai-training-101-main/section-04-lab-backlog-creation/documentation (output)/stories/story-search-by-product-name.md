---
title: "Search by product name returns citation-backed results"
parent_epic: "documentation (output)/epics/epic-information-retrieval-rag.md"
summary: "Enable product-name queries to return concise answers with citations."
owner: "frontend-team"
priority: "P0"
sprint: ""
story_points: 3
personas:
  - "Clinical Support Specialist"
dependencies:
  - "epic-information-retrieval-rag"
acceptance_criteria:
  - "As a Clinical Support Specialist, I can search by product name so that I quickly find device specs."
  - "Search results include at least one citation showing document name and version/date."
  - "Results load in the UI within p90 processing time <5s."
tasks:
  - "Implement retrieval API call for product-name queries"
  - "Render citations and links in UI"
  - "Add unit and integration tests"
links:
  - "documentation (output)/epics/epic-information-retrieval-rag.md"
---

As a Clinical Support Specialist, I can search by product name so that I quickly find device specifications and supporting documents.
