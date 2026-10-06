---
title: "Failover tested between primary and secondary Azure regions"
parent_epic: "documentation (output)/epics/epic-performance-scalability-reliability.md"
summary: "Validate failover and recovery procedures between Azure regions."
owner: "sre-team"
priority: "P0"
sprint: ""
story_points: 3
personas:
  - "SRE"
dependencies:
  - "epic-performance-scalability-reliability"
acceptance_criteria:
  - "As an SRE, I can execute a region failover so that service recovers within RTO targets."
  - "Failover runbook executed and verified in staging and production simulations."
  - "No data loss beyond RPO during tested failover scenarios."
tasks:
  - "Document and automate failover runbook"
  - "Run scheduled failover drills in staging"
  - "Validate recovery time objectives and report results"
links:
  - "documentation (output)/epics/epic-performance-scalability-reliability.md"
---

As an SRE, I can perform region failover tests so that recovery behavior meets RTO/RPO.
