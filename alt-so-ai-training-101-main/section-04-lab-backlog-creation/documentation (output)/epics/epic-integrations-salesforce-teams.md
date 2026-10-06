---
title: "Integrations: Dynamics 365, Salesforce & Teams"
summary: "Integrate with Dynamics for tickets, Salesforce for field access, and Teams for chat to fit into existing workflows."
owner: ""
priority: "P1"
phase: "Phase 1 (Pilot - Dynamics & Teams)"
personas:
  - "Field Sales Representative"
  - "Support Specialist"
okrs:
  objective: "Seamlessly route escalations and enable field agent access."
  key_results:
    - description: "Dynamics ticket creation and Teams bot functionality"
      target: "End-to-end integration for pilot users"
      timeframe: "8 weeks"
business_value: "Reduces friction and keeps context across enterprise systems."
success_metrics:
  - "integration_success_rate"
regulatory_requirements:
  - "Transfer only required metadata; avoid PHI transfer"
security_considerations:
  - "OAuth flows and least-privilege API permissions"
dependencies:
  - "Dynamics API, Salesforce API, Bot Framework"
estimated_effort: "2-3 sprints"
monitoring_metrics:
  - "integration_errors"
acceptance_criteria:
  - "Dynamics tickets created with transcript and metadata on escalation."
  - "Field reps can access agent via Salesforce integration (pilot scope)."
out_of_scope:
  - "Full two-way CRM sync beyond ticket creation"
stakeholders:
  - "Salesforce Admin"
links:
  - "context (ingestion)/medical-device-support-agent-prd.md"
---

**Human-readable Summary**

Connect the agent to enterprise systems for ticketing and field access while protecting sensitive data.
