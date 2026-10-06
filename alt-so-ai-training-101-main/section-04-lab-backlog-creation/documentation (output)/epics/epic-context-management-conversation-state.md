---
title: "Context Management & Conversation State"
summary: "Maintain session context, support follow-ups, and offer opt-in conversation summaries."
owner: ""
priority: "P1"
phase: "Phase 1 (Pilot)"
personas:
  - "Support Specialist"
okrs:
  objective: "Provide reliable short-term context and optional summaries for returning users."
  key_results:
    - description: "Support up to 20 conversation turns with correct context"
      target: "20 turns retained per session"
      timeframe: "Pilot"
business_value: "Improves user experience and reduces repeated queries."
success_metrics:
  - "context_consistency_rate"
regulatory_requirements:
  - "Conversation summaries are opt-in and stored per retention policy"
security_considerations:
  - "Opt-in storage; redact identifiers for analytics"
dependencies:
  - "CosmosDB (conversation store), session tokens"
estimated_effort: "1-2 sprints"
monitoring_metrics:
  - "session_turns_per_conversation"
acceptance_criteria:
  - "Context preserved correctly for up to 20 turns within session."
  - "User can clear context or start a new topic."
out_of_scope:
  - "Long-term storage of conversation content without explicit opt-in"
stakeholders:
  - "Support Manager"
links:
  - "context (ingestion)/medical-device-support-agent-prd.md"
---

**Human-readable Summary**

Manage conversational state so follow-ups work naturally and users can opt to save summaries for later reference.
