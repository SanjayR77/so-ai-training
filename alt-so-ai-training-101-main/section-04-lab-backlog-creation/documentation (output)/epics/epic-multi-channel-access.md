---
title: "Multi-Channel Access (Web, Teams, Mobile, API)"
summary: "Expose the agent across web, Teams, mobile web, and API for field rep integrations."
owner: ""
priority: "P1"
phase: "Phase 1 (Pilot - Web + Teams)"
personas:
  - "Field Sales Representative"
  - "Clinical Support Specialist"
okrs:
  objective: "Make the agent accessible where users already work."
  key_results:
    - description: "Teams bot and web portal operational"
      target: "Deploy Teams bot + web portal in pilot"
      timeframe: "8 weeks"
business_value: "Increases adoption by meeting users in their workflows."
success_metrics:
  - "channel_uptime"
  - "mobile_usage_percent"
regulatory_requirements:
  - "Ensure channel authentication via Azure AD"
security_considerations:
  - "No anonymous access; SSO required"
dependencies:
  - "Bot Framework, Teams app manifest, mobile-responsive UI"
estimated_effort: "2-3 sprints"
monitoring_metrics:
  - "channel_latency"
acceptance_criteria:
  - "Web portal and Teams bot available to pilot users with SSO."
  - "Mobile web renders correctly across iOS/Android browsers."
out_of_scope:
  - "Native mobile apps (Phase 2)"
stakeholders:
  - "Field Sales Lead"
links:
  - "context (ingestion)/medical-device-support-agent-prd.md"
---

**Human-readable Summary**

Deliver initial access via web portal and Microsoft Teams; add mobile and API integrations in later phases.
