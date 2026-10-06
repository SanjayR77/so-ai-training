---
title: "Respect SharePoint permission boundaries"
parent_epic: "documentation (output)/epics/epic-sharepoint-integration-ingestion.md"
summary: "Ensure users only see documents they are authorized to view."
owner: "integration-team"
priority: "P0"
sprint: ""
story_points: 3
personas:
  - "Clinical Support Specialist"
dependencies:
  - "epic-sharepoint-integration-ingestion"
acceptance_criteria:
  - "As a Clinical Support Specialist, I only see results from documents I have access to."
  - "Search results honor SharePoint permissions for each authenticated user."
  - "Unauthorized documents are never surfaced even in citations."
tasks:
  - "Implement tokenized document filtering per user"
  - "Add tests verifying permission enforcement"
links:
  - "documentation (output)/epics/epic-sharepoint-integration-ingestion.md"
---

As a Clinical Support Specialist, I can only retrieve documents I am authorized to view so that confidential content is protected.
