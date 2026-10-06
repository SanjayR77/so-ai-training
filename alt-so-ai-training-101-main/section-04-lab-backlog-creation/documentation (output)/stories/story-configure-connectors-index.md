---
title: "Configure SharePoint connectors and index libraries"
parent_epic: "documentation (output)/epics/epic-sharepoint-integration-ingestion.md"
summary: "Enable connectors to index designated SharePoint libraries and file types."
owner: "integration-team"
priority: "P0"
sprint: ""
story_points: 5
personas:
  - "SharePoint Administrator"
dependencies:
  - "epic-sharepoint-integration-ingestion"
acceptance_criteria:
  - "As a SharePoint Administrator, I can configure connectors so that the specified libraries are indexed."
  - "Connector indexes PDF, DOCX, PPTX, XLSX, and transcript formats."
  - "Index metadata includes document id, version, date, and product line."
tasks:
  - "Implement connector configuration UI or config files"
  - "Implement ingestion pipelines and indexing jobs"
  - "Create end-to-end verification tests"
links:
  - "documentation (output)/epics/epic-sharepoint-integration-ingestion.md"
---

As a SharePoint Administrator, I can configure connectors so that the required libraries and file types are indexed for retrieval.
