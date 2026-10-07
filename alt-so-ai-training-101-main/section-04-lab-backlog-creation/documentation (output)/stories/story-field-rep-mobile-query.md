---
title: "Submit a product question from mobile"
parent_epic: "../epics/epic-mobile-outreach-field-workflow.md"
summary: "Let a Field Sales Representative ask a product question from a mobile device while on-site."
owner: "<fill me>"
priority: "P1 (confirm)"
sprint: "<fill me>"
story_points: 3
personas:
  - "Field Sales Representative (PRD Persona 2)"
dependencies:
  - "Field-representative mobile web and Teams mobile experience owned by the parent epic."
  - "epic-information-retrieval-rag.md"
acceptance_criteria:
  - id: "AC-01"
    statement: "A field representative can submit a plain-English product question from mobile web or Teams mobile."
    source_prd_ref: "FR-1; FR-7; US-1.2"
  - id: "AC-02"
    statement: "The mobile query experience meets the response-time, availability, accessibility, and load expectations in the PRD."
    source_prd_ref: "NFR-1; NFR-6"
tasks:
  - "Validate the end-to-end field-representative query path on supported mobile clients."
  - "Add mobile flow integration and accessibility tests."
links:
  - "../epics/epic-mobile-outreach-field-workflow.md"
  - "../../context (ingestion)/medical-device-support-agent-prd.md"
---

## Summary

**Trigger scenario:** A Field Sales Representative is on-site with a surgeon or OR staff member and needs a quick answer about device compatibility, specifications, or troubleshooting.

**User story:** As a Field Sales Representative, I can submit a natural-language product question from my mobile device so that I can get information while on-site with customers.

## Acceptance Criteria (Gherkin)

| ID | Given | When | Then | Source PRD Reference |
|---|---|---|---|---|
| AC-01 | I am an authenticated Field Sales Representative using a supported iOS or Android mobile browser or Teams mobile | I enter and submit a plain-English device question | The agent accepts the query and displays the response in the mobile experience | Persona 2; FR-1; FR-7; US-1.2 |
| AC-02 | I submit a product question through the mobile experience | The agent processes the query under the PRD's specified load | The 90th-percentile response time is under 5 seconds while supporting 100 concurrent users | NFR-1 |
| AC-03 | I use the mobile experience with assistive technology | I navigate and submit a question | The interface supports screen readers and conforms to WCAG 2.1 AA | NFR-6 |

## Non-Functional / Compliance Notes

- **Performance / availability:** <5 seconds at p90; 100 concurrent users; 99.5% uptime during business hours (6am-8pm ET) and 99.0% outside business hours. (NFR-1)
- **Accessibility / language:** WCAG 2.1 AA and screen-reader support. Queries are specified in English; the PRD does not define multilingual query support for this capability. (FR-1; NFR-6)
- **Privacy / security / compliance:** Apply Azure AD SSO, RBAC, TLS 1.3 in transit, AES-256 at rest, HIPAA requirements, and no PHI storage. (NFR-2)

## Telemetry

- Track mobile query submissions, response latency by channel, failed requests, and concurrent usage. (FR-9; NFR-1)
- Compare field-user response-time outcomes with the PRD's 25-minute baseline and <5-minute business target; validate a field-specific baseline before attributing results to mobile. (Sections 1.3 and 1.6)
- Review cadence and dashboard owner: <fill me>.

## Dependencies

- Field-representative mobile web and Teams mobile entry path is delivered by the parent epic. (FR-7; US-1.2)
- Query retrieval and answer generation are delivered by the related retrieval and response-generation epics. (FR-1; FR-3; FR-4)

## Risks

- **Risk:** Device/browser variation or field connectivity affects access. **Mitigation:** Test representative supported devices and monitor mobile request failures; the PRD does not specify an offline mode.
- **Risk:** Mobile-specific latency differs from overall service metrics. **Mitigation:** Report latency by channel and validate the field cohort separately. (NFR-1; Section 1.6)

## Rollout Checklist

- [ ] Confirm supported iOS/Android browsers and Teams mobile version with Field Sales. (US-1.2)
- [ ] Pass mobile, screen-reader, and WCAG 2.1 AA checks. (NFR-6)
- [ ] Verify p90 latency and 100-user load expectations. (NFR-1)
- [ ] Pilot with field representatives and establish a field-specific response-time baseline. (Sections 1.4 and 1.6)
- [ ] Confirm telemetry and support owner: <fill me>.

## Source References

- [Medical Device Support Agent PRD](../../context%20(ingestion)/medical-device-support-agent-prd.md): Persona 2; Sections 1.3, 1.4, 1.6, 2.1.1, 2.1.2, and 2.2; FR-1, FR-7; NFR-1, NFR-2, NFR-6; US-1.2.
- Parent epic: [Mobile Outreach Field Workflow](../epics/epic-mobile-outreach-field-workflow.md).
