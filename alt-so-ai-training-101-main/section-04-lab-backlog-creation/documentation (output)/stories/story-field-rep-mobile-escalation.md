---
title: "Continue to human support from mobile"
parent_epic: "../epics/epic-mobile-outreach-field-workflow.md"
summary: "Let a Field Sales Representative hand off an unresolved or unsafe mobile interaction to human support."
owner: "<fill me>"
priority: "P1 (confirm)"
sprint: "<fill me>"
story_points: 3
personas:
  - "Field Sales Representative (PRD Persona 2)"
dependencies:
  - "epic-escalation-dynamics365-integration.md"
  - "story-talk-to-human-button.md"
  - "story-auto-escalate-low-confidence.md"
acceptance_criteria:
  - id: "AC-01"
    statement: "The existing human-escalation action is available and usable from the mobile field experience."
    source_prd_ref: "FR-6; US-2.3"
  - id: "AC-02"
    statement: "Low-confidence or adverse-event cases trigger the PRD-defined escalation behavior and preserve conversation context."
    source_prd_ref: "FR-6; US-2.2; US-2.3"
tasks:
  - "Integrate the existing escalation action into the mobile answer view."
  - "Verify ticket handoff and confirmation from mobile clients."
links:
  - "../epics/epic-mobile-outreach-field-workflow.md"
  - "../../context (ingestion)/medical-device-support-agent-prd.md"
---

## Summary

**Trigger scenario:** A Field Sales Representative is on-site and receives a low-confidence answer, encounters an adverse-event report, or decides a question needs human support.

**User story:** As a Field Sales Representative, I can continue to human support from the mobile answer screen so that an unresolved or safety-sensitive question is handed off with its context.

## Acceptance Criteria (Gherkin)

| ID | Given | When | Then | Source PRD Reference |
|---|---|---|---|---|
| AC-01 | I am viewing an agent response on mobile | I choose “Talk to Human” | The existing escalation flow creates a Dynamics 365 ticket with the conversation context and confirms the handoff | FR-6; US-2.3 |
| AC-02 | The agent detects confidence below 70% or an adverse-event report | I receive the mobile response | The PRD-defined escalation behavior is offered or initiated, and the conversation context is transferred to human support | FR-6; US-2.2; US-2.3 |
| AC-03 | I submit an escalation from a supported mobile client | The ticket is created | I receive a ticket number and the expected response-time information defined by the support workflow | US-2.3 |
| AC-04 | Escalation is unavailable or fails | I attempt to hand off | The mobile experience displays a recoverable error and preserves the conversation so I can retry or use the provided support path | FR-6; NFR-5 |

## Non-Functional / Compliance Notes

- **Performance / availability:** The escalation action is available under the PRD's uptime targets; monitor ticket-creation failures. (NFR-1)
- **Accessibility / language:** The action and confirmation are usable with screen readers and meet WCAG 2.1 AA. PRD support queries are in English; no additional language requirement is specified for escalation. (NFR-6; FR-1)
- **Privacy / security / compliance:** Protect conversation context using Azure AD SSO, RBAC, TLS 1.3, and AES-256; do not store PHI. Preserve auditability for the handoff. (NFR-2; NFR-3; FR-5)

## Telemetry

- Track escalation actions by reason (user-requested, confidence below 70%, adverse event), ticket creation success/failure, and time to confirmation. (FR-6; FR-9)
- Monitor the PRD's <10% human-escalation target as an overall outcome, without suppressing required low-confidence or adverse-event escalations. (Section 1.6)
- Review cadence and escalation dashboard owner: <fill me>.

## Dependencies

- Existing Dynamics 365 ticket creation and context-transfer behavior in `epic-escalation-dynamics365-integration.md`. (FR-6; US-2.3)
- Existing “Talk to Human” UI and low-confidence/adverse-event escalation behavior in `story-talk-to-human-button.md` and `story-auto-escalate-low-confidence.md`. (FR-6; US-2.2; US-2.3)
- Mobile query and response experience from this epic's field-query story. (FR-7; US-1.2)

## Risks

- **Risk:** A failed mobile handoff leaves the field representative without a support path. **Mitigation:** Test failure and retry behavior and provide the existing support alternative. (NFR-5; FR-6)
- **Risk:** Escalation-rate targets could discourage necessary safety escalations. **Mitigation:** Treat the <10% rate as an aggregate monitoring target, never as a reason to suppress a required escalation. (Section 1.6; FR-5; FR-6)
- **Risk:** Sensitive conversation context may be exposed in a ticket. **Mitigation:** Validate role access, audit behavior, and no-PHI-storage requirements with Security and Regulatory reviewers. (NFR-2; NFR-3)

## Rollout Checklist

- [ ] Verify “Talk to Human” is available from mobile answers. (FR-6; US-2.3)
- [ ] Test low-confidence (<70%) and adverse-event escalation paths. (FR-6; US-2.2)
- [ ] Verify the Dynamics ticket includes conversation context and the user receives confirmation. (FR-6; US-2.3)
- [ ] Test handoff failure and recovery on supported mobile clients. (NFR-5)
- [ ] Review access controls and audit behavior with IT Security and Regulatory Affairs. (NFR-2; NFR-3)
- [ ] Confirm escalation monitoring owner and support-response expectations: <fill me>.

## Source References

- [Medical Device Support Agent PRD](../../context%20(ingestion)/medical-device-support-agent-prd.md): Persona 2; Sections 1.4, 1.6, 2.1.1, 2.1.2, and 2.2; FR-5, FR-6, FR-7, FR-9; NFR-1, NFR-2, NFR-3, NFR-5, NFR-6; US-1.2, US-2.2, US-2.3.
- Parent epic: [Mobile Outreach Field Workflow](../epics/epic-mobile-outreach-field-workflow.md).
