---
title: "Verify answer citations on mobile"
parent_epic: "../epics/epic-mobile-outreach-field-workflow.md"
summary: "Let a Field Sales Representative inspect source citations from a mobile answer."
owner: "<fill me>"
priority: "P1 (confirm)"
sprint: "<fill me>"
story_points: 3
personas:
  - "Field Sales Representative (PRD Persona 2)"
dependencies:
  - "epic-response-generation-grounding.md"
  - "story-citations-in-responses.md"
  - "epic-sharepoint-integration-ingestion.md"
  - "story-respect-sharepoint-permissions.md"
acceptance_criteria:
  - id: "AC-01"
    statement: "A mobile answer displays citations with source document, section, and date."
    source_prd_ref: "FR-4; US-1.3"
  - id: "AC-02"
    statement: "A permitted citation opens its source document from the mobile interface, while unauthorized content is not exposed."
    source_prd_ref: "FR-2; US-1.3"
tasks:
  - "Verify citation layout and source-link behavior on supported mobile clients."
  - "Add integration tests for permitted and restricted source links."
links:
  - "../epics/epic-mobile-outreach-field-workflow.md"
  - "../../context (ingestion)/medical-device-support-agent-prd.md"
---

## Summary

**Trigger scenario:** A Field Sales Representative receives a device answer on-site and needs to verify its source before sharing the information with a healthcare professional.

**User story:** As a Field Sales Representative, I can inspect and open an answer's citations on my mobile device so that I can verify the information against approved product documentation.

## Acceptance Criteria (Gherkin)

| ID | Given | When | Then | Source PRD Reference |
|---|---|---|---|---|
| AC-01 | I receive an answer on mobile | I review its citations | Each citation identifies the document, section, and date/version | FR-4; US-1.3 |
| AC-02 | A cited document is available to my authenticated account | I select its citation link | The source opens from the mobile experience in a new tab | US-1.3 |
| AC-03 | A source document is restricted and I do not have permission | The agent prepares an answer or displays a citation | The document or its link is not exposed to me | FR-2 |
| AC-04 | I use citation links with a screen reader or other assistive technology | I navigate the citation list | Citation information and link controls are accessible under WCAG 2.1 AA | NFR-6 |

## Non-Functional / Compliance Notes

- **Performance / availability:** The mobile answer and citation interaction remains within the PRD's <5-second p90 response target and service uptime expectations. (NFR-1)
- **Accessibility / language:** Support screen readers and WCAG 2.1 AA. PRD query language is English; no translated citation metadata requirement is specified. (FR-1; NFR-6)
- **Privacy / security / compliance:** Honor SharePoint permission boundaries for each authenticated user and apply RBAC and encryption controls. (FR-2; NFR-2)

## Telemetry

- Track citation display, citation-link opens, source-link errors, and permission-denied outcomes by channel. (FR-9)
- Track answer accuracy against the PRD's 95% target and source/citation correctness; the PRD does not provide a separate mobile baseline. (Section 1.6)
- Review cadence and dashboard owner: <fill me>.

## Dependencies

- Citation generation and formatting from the response-generation epic and `story-citations-in-responses.md`. (FR-4; US-1.3)
- SharePoint source links and authorization enforcement from `story-respect-sharepoint-permissions.md`. (FR-2)
- Mobile UI and Teams mobile support from the parent epic. (FR-7; US-1.2)

## Risks

- **Risk:** Citation links may be hard to use or read on smaller screens. **Mitigation:** Test on representative mobile devices and with assistive technology. (NFR-6)
- **Risk:** A mobile view could expose a restricted document link. **Mitigation:** Test citations using users with different SharePoint permissions. (FR-2)

## Rollout Checklist

- [ ] Validate citation rendering and source opening on iOS, Android, and Teams mobile. (US-1.2; US-1.3)
- [ ] Verify document name, section/page, and date/version appear in citations. (FR-4; US-1.3)
- [ ] Test allowed and denied source permissions. (FR-2)
- [ ] Complete WCAG 2.1 AA and screen-reader validation. (NFR-6)
- [ ] Confirm field-user feedback and citation metrics owner: <fill me>.

## Source References

- [Medical Device Support Agent PRD](../../context%20(ingestion)/medical-device-support-agent-prd.md): Persona 2; Sections 1.6, 2.1.1, 2.1.2, and 2.2; FR-2, FR-4, FR-7, FR-9; NFR-1, NFR-2, NFR-6; US-1.2, US-1.3.
- Parent epic: [Mobile Outreach Field Workflow](../epics/epic-mobile-outreach-field-workflow.md).
