---
title: "<fill me>"
parent_epic: "<fill me: path or ID of parent epic>"
summary: "<fill me>"
owner: "<fill me>"
priority: "<fill me>"
sprint: "<fill me>"
story_points: "<fill me>"
personas:
  - "<fill me>"
dependencies:
  - "<fill me or None>"
acceptance_criteria:
  - id: "AC-01"
    statement: "<fill me>"
    source_prd_ref: "<fill me: PRD section and/or FR/NFR ID>"
tasks:
  - "<fill me>"
links:
  - "<fill me: parent epic link>"
  - "../../context (ingestion)/marys-place-prd.md"
---

## User Story

As a <persona>, I can <action> so that <benefit>.

## Acceptance Criteria

Write atomic, testable criteria in Gherkin style. Cite the originating PRD section and requirement ID for every criterion. If the PRD does not specify a needed behavior or threshold, record it as an open question instead of inventing it.

| ID | Given | When | Then | Source PRD Reference |
|---|---|---|---|---|
| AC-01 | <fill me: initial context> | <fill me: action> | <fill me: observable outcome> | <fill me: section and FR/NFR ID> |
| AC-02 | <fill me: initial context> | <fill me: action> | <fill me: observable outcome> | <fill me: section and FR/NFR ID> |

## Non-Functional / Compliance Notes

List only constraints applicable to this story. Cite the PRD section or requirement ID; mark unstated constraints as questions for validation.

- **Performance / availability:** <fill me>
- **Accessibility / language:** <fill me>
- **Privacy / security / compliance:** <fill me>

## Telemetry and Reporting

Specify events, measures, baselines, targets, reporting audience, and cadence needed to verify this story's outcomes. Cite the PRD for defined measures; mark any missing baseline or target for validation.

- **Event or metric:** <fill me>
- **Baseline / target:** <fill me>
- **Audience / cadence:** <fill me>
- **Source PRD reference:** <fill me>

## Dependencies

List parent-epic capabilities, systems, data, teams, approvals, and other stories required. Distinguish confirmed dependencies from assumptions.

- <fill me>

## Risks and Mitigations

- **Risk:** <fill me>
  - **Mitigation or validation:** <fill me>

## Rollout / Validation Checklist

- [ ] Link this story to its parent epic in `parent_epic` and `links`.
- [ ] Confirm persona and workflow with the affected family or staff users, as applicable.
- [ ] Confirm acceptance criteria are testable and each cites the originating PRD section and requirement ID.
- [ ] Validate any assumptions, missing thresholds, privacy constraints, or compliance interpretation with the relevant stakeholders.
- [ ] Identify test data, test environment, and required accessibility, language, security, or integration checks.
- [ ] Define rollout, monitoring, and feedback steps for the intended phase.
- [ ] <fill me: additional story-specific check>

## Source References

- **Parent epic:** <fill me: link and epic ID/title>
- **Originating PRD:** [Mary's Place PRD](../../context%20(ingestion)/marys-place-prd.md)
- **PRD sections / requirement IDs used:** <fill me>
- **Related links:** <fill me>

**Traceability reminder:** Link every story to its parent epic. Cite the originating PRD section and requirement ID whenever establishing acceptance criteria; do not invent requirements or targets absent from the PRD.
