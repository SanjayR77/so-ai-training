---
title: "Operational dashboards for ingestion, retrieval, and generation"
parent_epic: "documentation (output)/epics/epic-monitoring-alerting-runbooks.md"
summary: "Provide health dashboards that show system metrics across key layers."
owner: "sre-team"
priority: "P0"
sprint: ""
story_points: 3
personas:
  - "SRE"
dependencies:
  - "epic-monitoring-alerting-runbooks"
acceptance_criteria:
  - "As an SRE, I can view ingestion, retrieval, and LLM generation metrics so that I can detect anomalies."
  - "Dashboards show p90 latency, error rates, and throughput across layers."
  - "Dashboards support drill-down to traces and logs."
tasks:
  - "Define dashboard metrics and panels"
  - "Implement dashboards in Application Insights/PowerBI"
  - "Add links from alerts to dashboard panels"
links:
  - "documentation (output)/epics/epic-monitoring-alerting-runbooks.md"
---

As an SRE, I can view operational dashboards so that I can quickly identify and investigate service issues.
