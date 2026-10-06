---
title: "OCR and text extraction for scanned documents"
parent_epic: "documentation (output)/epics/epic-document-processing-indexing.md"
summary: "Extract text accurately from scanned PDFs and images for indexing."
owner: "data-eng-team"
priority: "P0"
sprint: ""
story_points: 5
personas:
  - "Data Engineer"
dependencies:
  - "epic-document-processing-indexing"
acceptance_criteria:
  - "As a Data Engineer, I can extract text from scanned PDFs so that scanned docs are searchable."
  - "Text extraction accuracy >=98% on a representative test set."
  - "Extracted text includes page/section metadata for citation."
tasks:
  - "Integrate Azure Document Intelligence OCR"
  - "Create extraction validation tests"
  - "Flag problematic documents for manual review"
links:
  - "documentation (output)/epics/epic-document-processing-indexing.md"
---

As a Data Engineer, I can extract text from scanned PDFs so that they become searchable for retrieval.
