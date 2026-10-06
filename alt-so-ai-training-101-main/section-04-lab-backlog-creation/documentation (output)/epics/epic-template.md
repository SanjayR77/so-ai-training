---
title: ""
summary: "" # Short human-readable summary (1-3 sentences)
owner: "" # Primary owner or team
priority: "" # e.g., P0 / P1 / P2
phase: "" # e.g., Phase 1 (Pilot)
personas:
  - ""
okrs:
  objective: "" # Short objective statement
  key_results:
    - description: "" # e.g., "Reduce avg response time to <5 mins"
      target: "" # numeric or qualitative target
      timeframe: "" # e.g., "12 weeks"
business_value: "" # One-line description of business value
success_metrics:
  - ""
regulatory_requirements:
  - "" # e.g., audit log retention 7 years, no PHI stored
security_considerations:
  - "" # e.g., RBAC, encryption at rest/in transit
dependencies:
  - "" # external systems, docs, or teams
estimated_effort: "" # e.g., 3-5 sprints
monitoring_metrics:
  - "" # e.g., accuracy %, response time p90
acceptance_criteria:
  - "" # populate as needed
out_of_scope:
  - ""
stakeholders:
  - ""
links:
  - "context (ingestion)/medical-device-support-agent-prd.md"
---

**Human-readable Summary**

Write 1–3 short sentences describing the epic's intent, who it benefits, and the user problem it solves. Mention the primary persona and the expected outcome.

Example: "Enable support reps to retrieve concise, citation-backed device guidance from SharePoint within 5 minutes, reducing search time and increasing first-contact resolution. Primary persona: Clinical Support Specialist."

**OKRs**

Objective: Provide a single-sentence objective that links to business value and pilot goals.

Key Results (list 3–5 measurable KRs):

- KR 1 — Description: "Reduce average response time for support queries"
  Target: "<5 minutes"
  Timeframe: "12 weeks"

- KR 2 — Description: "Answer accuracy against source documents"
  Target: ">=95%"
  Timeframe: "12 weeks"

- KR 3 — Description: "Escalation and compliance"
  Target: "Automatic escalation for low-confidence responses; 100% audit logging"
  Timeframe: "Pilot"

Map each KR back to PRD success metrics where possible (accuracy, response time, escalation rate).

**Objective & Business Value**

Describe how the epic helps achieve product goals and which PRD outcomes it supports (e.g., pilot readiness, regulatory compliance, adoption targets).

**Personas Impacted**

List primary and secondary personas and describe their main benefit.

**Acceptance Criteria**

Provide clear, testable criteria. Use bullet points and keep criteria atomic.

Guidance: include performance bounds (p90), citation format requirements, and failure modes (e.g., "responds with 'information not found'").

**Validation / QA Plan**

Describe test approaches: unit/integration tests, sample queries with expected citations, manual spot-checks against source documents, and regulatory review steps.

**Monitoring & Metrics**

List dashboards and signals to track (e.g., response time p90, accuracy, hallucination rate, escalation rate, user satisfaction). Include retention/aggregation windows and alerting thresholds.

**Out of Scope**

Be explicit about what this epic will not do (e.g., no PHI processing, not providing clinical advice, not replacing human triage).

**Dependencies**

List systems, teams, and specific documents required (e.g., SharePoint libraries, Dynamics 365 integration, Azure resources, legal/regulatory sign-off).

**Stakeholders / Reviewers**

List owners, approvers, and stakeholders who must review the epic and artifacts (e.g., Product Manager, Compliance, QA, Field Support Lead).

**Notes & Links**

Add links to the PRD, architecture diagrams, onboarding docs, or sample queries.

---

## Example Epic: Natural Language Information Retrieval — SharePoint RAG

**Summary**

Provide a grounded RAG capability: users submit plain-English queries and receive concise, citation-backed answers sourced from SharePoint. Primary persona: Clinical Support Specialist.

**OKRs**

Objective: Reduce time-to-answer and improve answer quality for support queries during the pilot.

Key Results:

- Reduce average query handling time from 25 minutes to <5 minutes in pilot (12 weeks)
- Achieve >=95% citation-backed answer accuracy on a 200-query test set (12 weeks)
- Maintain <2% hallucination rate and 100% immutable audit logs (pilot)

**Acceptance Criteria**

- User receives an answer within 5 seconds (p90) and within 5 minutes end-to-end.
- Response includes 1–3 citations with document name, section, and version/date.
- When no relevant documents exist, agent replies "Information not found" and logs the query as a documentation gap.

---

## Example Epic: Safety, Audit Logging & Escalation Workflow

**Summary**

Implement immutable logging, regulatory audit trails, and escalation rules so the agent meets FDA/ISO/HIPAA constraints during pilot.

**OKRs**

Objective: Ensure all interactions are auditable and compliant to enable regulated pilot testing.

Key Results:

- 100% of queries and responses logged with user identity, timestamp, citations, and confidence score (12 weeks)
- Low-confidence (<70%) or adverse event mentions trigger creation of a Dynamics 365 ticket with full context (pilot)
- Retain logs per retention policy and provide export for regulatory review (7-year retention configured)

**Acceptance Criteria**

- Every query/response pair is written to an immutable audit store and is queryable by compliance.
- Escalation workflow creates a Dynamics 365 record with required metadata when confidence <70% or when adverse-event keywords are detected.
- System displays a standardized disclaimer and "Talk to Human" action for disallowed requests or when the agent refuses to provide clinical advice.

---

Template notes:
- Keep the YAML frontmatter populated for planning tools and automation; use the body for human-readable narrative and QA instructions.
- Update `okrs.key_results` with numeric targets and timeframes before sprint planning.
- Link this epic back to the PRD at: context (ingestion)/medical-device-support-agent-prd.md
