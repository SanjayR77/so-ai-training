---
title: "Mobile Outreach Field Workflow"
summary: "Provide field representatives a mobile-friendly way to access accurate, cited medical-device information while on-site with healthcare professionals."
owner: "<fill me>"
priority: "<confirm with product owner>"
phase: "<confirm against rollout plan>"
personas:
  - "Field Sales Representative"
okrs:
  objective: "Help field representatives get accurate product information quickly during on-site customer interactions."
  key_results:
    - description: "Average response time for support inquiries"
      baseline: "25 minutes"
      target: "<5 minutes"
      timeframe: "12 months post-launch"
      source_prd_ref: "Section 1.6: Business Outcomes"
    - description: "First-contact resolution rate"
      baseline: "42%"
      target: "70%"
      timeframe: "12 months post-launch"
      source_prd_ref: "Section 1.3: Current Metrics; Section 1.6: Business Outcomes"
    - description: "Field-user satisfaction"
      baseline: "<fill me; not specified in PRD>"
      target: "90% satisfaction from field users"
      timeframe: "<fill me; not specified in PRD>"
      source_prd_ref: "Section 1.4: Field Sales Leadership"
business_value: "Reduce time spent searching for current device information and improve field-user satisfaction."
success_metrics:
  - metric: "Average response time"
    baseline: "25 minutes"
    target: "<5 minutes"
    timeframe: "12 months post-launch"
    source_prd_ref: "Section 1.6: Business Outcomes"
  - metric: "First-contact resolution rate"
    baseline: "42%"
    target: "70%"
    timeframe: "12 months post-launch"
    source_prd_ref: "Sections 1.3 and 1.6"
  - metric: "Field-user satisfaction"
    baseline: "<fill me>"
    target: "90%"
    timeframe: "<fill me>"
    source_prd_ref: "Section 1.4: Field Sales Leadership"
regulatory_requirements:
  - requirement: "FDA 21 CFR Part 11 audit trails; ISO 13485 alignment; SOC 2 Type II compliance. Confirm applicability to this epic."
    source_prd_ref: "NFR-3: Compliance"
security_considerations:
  - consideration: "Azure AD SSO, RBAC, TLS 1.3 in transit, AES-256 at rest, HIPAA requirements, and no PHI storage."
    source_prd_ref: "NFR-2: Security"
  - consideration: "Respect SharePoint permission boundaries so users only access authorized content."
    source_prd_ref: "FR-2: SharePoint Integration"
dependencies:
  - "Information Retrieval and Response Generation epics for grounded answers, citations, and confidence indicators."
  - "Safety, Compliance, and Audit Logging epic for guardrails and audit behavior."
estimated_effort: "<fill me after scope and dependencies are confirmed>"
monitoring_metrics:
  - metric: "Response latency"
    threshold_or_target: "<5 seconds at the 90th percentile"
    review_cadence: "<fill me>"
  - metric: "Availability"
    threshold_or_target: "99.5% during business hours; 99.0% outside business hours"
    review_cadence: "<fill me>"
acceptance_criteria:
  - criterion: "Mobile-responsive web experience works on iOS and Android, with readable text without zooming."
    source_prd_ref: "US-1.2; FR-7"
  - criterion: "Field representatives can access the agent through the Teams mobile app."
    source_prd_ref: "US-1.2; FR-7"
  - criterion: "The experience meets the PRD's response-time and accessibility requirements."
    source_prd_ref: "NFR-1; NFR-6"
out_of_scope:
  - "Voice input; the PRD identifies it as a future phase (FR-1)."
  - "Implementing general channel integrations, Salesforce API access, information retrieval, or response generation already owned by related epics (FR-2, FR-3, FR-4, FR-7)."
  - "Native mobile applications; the PRD specifies mobile-responsive web and Teams mobile, but does not define a native app."
stakeholders:
  - "Field Sales Leadership"
  - "Customer Support Leadership"
  - "Regulatory Affairs"
  - "IT Security"
  - "Product Management"
links:
  - "../../context (ingestion)/medical-device-support-agent-prd.md"
  - "epic-information-retrieval-rag.md"
  - "epic-response-generation-grounding.md"
---

## Human-readable Summary

Field Sales Representatives need fast access to accurate, current device information while on-site with surgeons and OR staff. This epic owns the field-representative mobile web and Teams mobile experience for the existing support agent; retrieval, response generation, and safety capabilities remain dependencies on related epics.

## OKRs

**Objective:** Help field representatives get accurate product information quickly during on-site customer interactions.

- **KR 1:** Reduce average response time from 25 minutes to under 5 minutes within 12 months post-launch. (Source PRD: Section 1.6)
- **KR 2:** Increase first-contact resolution from 42% to 70% within 12 months post-launch. (Source PRD: Sections 1.3 and 1.6)
- **KR 3:** Reach 90% satisfaction among field users. Confirm baseline and measurement window before setting the target date. (Source PRD: Section 1.4)

## Objective and Business Value

Reduce the time field representatives spend searching fragmented product documentation and help them provide consistent, accurate information during on-site interactions. The PRD's overall outcomes include reducing response time and improving first-contact resolution; Field Sales Leadership specifically identifies 90% field-user satisfaction as a success metric. These are initiative-level targets, not mobile-channel baselines, and should be measured for field users separately where possible.

## Personas Impacted

- **Primary — Field Sales Representative:** On-site product specialist supporting surgeons and OR staff; needs real-time access to competitive positioning, compatibility information, and technical specifications; primarily uses mobile devices. (PRD: Persona 2)
- **Secondary — Healthcare Professional (Surgeon/OR Staff):** Receives device information from the representative and needs concise, accurate answers. (PRD: Persona 3)
- **Reviewers — Regulatory Affairs, Customer Support, IT Security, and Product Management:** Validate approved-source alignment, safety, security, and product outcomes. (PRD: Sections 1.4 and 1.5)

## Acceptance Criteria

- The mobile-responsive interface works on iOS and Android, and text is readable without zooming. (US-1.2; FR-7)
- Field representatives can access the agent through the Teams mobile app. (US-1.2; FR-7)
- Mobile controls are reachable and operable on supported devices without requiring horizontal scrolling or zooming. (US-1.2; NFR-6)
- A field representative can ask natural-language questions about device compatibility, specifications, and troubleshooting, and receive a concise answer with citations and a confidence level. (FR-1; FR-4; Persona 2)
- Responses include document name, section, and date, with links that open the source document. (FR-4; US-1.3)
- SharePoint permission boundaries are respected; users only see content they are authorized to access. (FR-2)
- Mobile requests meet the <5-second p90 response target and the applicable uptime targets under the 100-concurrent-user requirement. (NFR-1)
- The interface conforms to WCAG 2.1 AA and supports screen readers. (NFR-6)
- Authentication, role-based access, encryption, and no-PHI-storage constraints apply to mobile access. (NFR-2)
- The agent does not provide medical advice or diagnoses, refuses off-label usage guidance, and offers the required human escalation path. (FR-5; FR-6)

## Validation / QA Plan

- Test mobile-responsive web behavior on representative iOS and Android devices and browsers, and test access through Teams mobile.
- Verify text readability without zoom, screen-reader behavior, and WCAG 2.1 AA conformance.
- Test authenticated and restricted-user scenarios to confirm Azure AD SSO, RBAC, and SharePoint permissions are enforced.
- Run performance and availability tests against NFR-1, including 100 concurrent users and the p90 latency target.
- Validate answers, citations, confidence, and safety behavior against approved source documents with Field Sales, Customer Support, and Regulatory Affairs reviewers.
- Measure field-user satisfaction and response/resolution outcomes during the pilot; establish a baseline and survey method where the PRD does not specify one.

## Monitoring and Metrics

- Response time: under 5 seconds at p90. (NFR-1)
- Availability: 99.5% during business hours (6am-8pm ET) and 99.0% outside business hours. (NFR-1)
- Answer accuracy: 95% against source documents. (Section 1.6)
- First-contact resolution: 70% target from a 42% baseline. (Sections 1.3 and 1.6)
- Field-user satisfaction: 90% target; establish baseline and measurement window. (Section 1.4)
- Track mobile usage and user feedback; the PRD does not specify targets for these measures.

## Out of Scope

- Voice input, which the PRD labels as future-phase functionality. (FR-1)
- Native mobile applications; the PRD specifies mobile-responsive web and Teams mobile but does not define native apps. (US-1.2; FR-7)
- General web and Teams rollout, Salesforce API integration, and channel enablement beyond the Field Sales Representative mobile web and Teams mobile experience. (FR-7)
- Retrieval, response-generation, and escalation capabilities owned by related epics. (FR-2 through FR-6)
- Medical advice, clinical diagnoses, or off-label usage guidance. (FR-5)

## Dependencies

- This epic owns the Field Sales Representative mobile web and Teams mobile experience (FR-7; US-1.2); general channel and Salesforce API delivery remain outside this epic.
- **Information Retrieval / SharePoint Integration:** Supplies authorized, current product content (FR-2; FR-3).
- **Response Generation and Safety:** Supplies concise cited answers, confidence indicators, and refusal behavior (FR-4; FR-5).
- **Escalation and Dynamics 365:** Supports human escalation and ticket creation (FR-6).
- Azure AD, Azure hosting, monitoring, and other technical services as specified in the PRD's Technical Considerations.

## Stakeholders / Reviewers

- **Field Sales Leadership:** Confirm field workflow and field-user satisfaction measurement.
- **Customer Support Leadership:** Validate response-time and first-contact-resolution outcomes.
- **Regulatory Affairs:** Review source alignment, disclaimers, and safety behavior.
- **IT Security:** Review mobile authentication, authorization, and data protection.
- **Product Management:** Confirm scope, priority, and dependencies.

## Notes

- **Source mismatch:** The requested title says “Mobile Outreach,” but the specified PRD is for a medical-device support agent. Its relevant persona is a Field Sales Representative, not a Mary’s Place Mobile Outreach Specialist. Confirm the title and project before using this epic for Mary's Place.
- The request refers to Section 2.2 success criteria, but this PRD's Section 2.2 contains user stories and acceptance criteria. The success metrics above are from Sections 1.3, 1.4, and 1.6.
- The PRD's overall success metrics are not scoped specifically to mobile users; validate mobile-cohort baselines and targets.
- Validate supported devices, field-user workflows, and mobile-specific outcome baselines with Field Sales before implementation.

## PRD Reference

[Medical Device Support Agent PRD](../../context%20(ingestion)/medical-device-support-agent-prd.md)
