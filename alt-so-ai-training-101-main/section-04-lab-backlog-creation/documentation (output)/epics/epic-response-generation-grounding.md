---
title: "Response Generation & Grounding"
summary: "Generate concise, grounded answers with citations and confidence scores.
"
owner: ""
priority: "P0"
phase: "Phase 1 (Pilot)"
personas:
  - "Clinical Support Specialist"
okrs:
  objective: "Ensure responses are grounded, concise, and measurable for accuracy."
  key_results:
    - description: "All factual claims must include citation(s)"
      target: "100% citation coverage"
      timeframe: "Pilot"
business_value: "Improves trust and regulatory compliance of agent responses."
success_metrics:
  - "citation_coverage"
  - "accuracy_against_sources"
regulatory_requirements:
  - "Citations must include document name, section/page, and date"
security_considerations:
  - "Mask or avoid returning sensitive metadata in citations"
dependencies:
  - "Retrieval service, LLM model, prompt engineering configs"
estimated_effort: "2-3 sprints"
monitoring_metrics:
  - "hallucination_rate"
  - "confidence_distribution"
acceptance_criteria:
  - "Responses include required citation metadata and confidence level."
  - "Agent refuses to provide clinical advice and responds with standard disclaimer when needed."
  - "Follow-up question context is correctly applied within session."
out_of_scope:
  - "Automated therapeutic recommendations"
stakeholders:
  - "Clinical SME"
links:
  - "context (ingestion)/medical-device-support-agent-prd.md"
---

**Human-readable Summary**

Implement LLM prompting and grounding rules so generated answers are concise, traceable, and compliant.
