---
name: meeting-notes
description: Transforms meeting transcripts into feature-organized product management
  notes using a two-pass approach. First identifies features and topics discussed,
  then extracts requirements, decisions (tracking how they evolved), action items,
  and open questions per feature. Use when a PM has a meeting transcript where
  multiple features or requirements were discussed and needs structured,
  feature-by-feature notes rather than chronological summaries.
---

# Feature-Organized Meeting Notes

## Overview

Meetings don't follow neat outlines. Feature discussions overlap, decisions get
revisited and reversed, and requirements surface mid-conversation about something
else entirely. This skill reorganizes messy meeting transcripts into structured,
feature-by-feature notes that capture what was actually decided — not just what
was said.

## Workflow: Two-Pass Analysis

### Pass 1: Feature & Topic Identification

When the user provides a transcript:

**Step 1a — Scan and detect features/topics discussed.**

Read the full transcript and identify distinct features, initiatives, or topic
areas that were discussed. Look for:
- Explicit feature names or labels used by participants
- Functional areas discussed (e.g., "search," "notifications," "onboarding")
- Problem domains that map to potential features
- Technical topics that imply feature work

**Step 1b — Present findings and ask for confirmation.**

Show the user what you found:

```
I identified these features/topics in the transcript:

1. **Intake Assessment Tool** — discussed at ~min 8, 22, 35
2. **Inventory Tracking System** — discussed at ~min 15, 28, 41
3. **Donor Matching** — discussed at ~min 30, 38
4. **Multi-language Support** — briefly mentioned at ~min 25

Does this look right? Should I add, remove, merge, or rename any of these?
```

**Wait for user confirmation before proceeding.** The user may:
- Confirm the list as-is
- Add features you missed ("We also discussed reporting")
- Merge topics ("Combine 1 and 3, those are the same initiative")
- Rename for clarity ("Call #2 'Warehouse Management' instead")
- Remove items ("Skip #4, that was just an aside")

This is the critical handoff — the user's confirmed list becomes the organizing
structure for Pass 2.

### Pass 2: Per-Feature Deep Extraction

Once features are confirmed, analyze the **entire transcript** for each feature.
Don't just look at the sections where the feature was primarily discussed — scan
everything, because requirements and decisions surface in unexpected places.

For each confirmed feature, extract:

#### Requirements
What was asked for, specified, or implied as needed. Include:
- Explicit requirements ("We need X to do Y")
- Implied requirements (capability assumed but not directly stated)
- Constraints mentioned ("It has to work on mobile" or "Must integrate with HMIS")

Flag where each requirement surfaced if it helps with traceability:
> "Users need to see all family appointments in one view" *(raised by Jason, ~min 12)*

#### Decisions
**Track the full arc, not just the final state.** This is the core value of the
skill. Meetings are where positions evolve — capture that evolution:

> **Decision: Intake assessment scope**
> - Initial position (~min 8): Build comprehensive digital intake replacing paper forms entirely
> - Concern raised (~min 22): Staff worried about technology comfort level for older families
> - Revised approach (~min 35): Hybrid model — digital intake with staff-assisted option
> - **Status: Agreed** — hybrid approach accepted by group

Use these status labels:
- **Agreed** — group reached consensus
- **Tentative** — leaning toward this but not locked in
- **Needs follow-up** — no resolution, requires further discussion
- **Deferred** — explicitly pushed to a future conversation

#### Action Items
Who committed to doing what, with any timeline mentioned:
> - [ ] Jason to share current intake form with development team *(by Friday)*
> - [ ] Mike to pull inventory data from last quarter

#### Open Questions
Things raised but not answered. These are valuable — they're the agenda for the
next meeting:
> - How will the system handle families who return after previous stays?
> - What's the budget ceiling for Phase 1?

#### Dependencies & Connections
Links to other features discussed in the same meeting:
> Depends on: Inventory Tracking (donor matching needs inventory data)
> Informs: Reporting (intake data feeds into quarterly reports)

### Presenting Results

Present one feature at a time. After each feature's notes:
- Ask if the user wants to adjust anything
- Then move to the next feature

After all features are extracted, present a **cross-cutting summary**:

```
## Meeting-Wide Summary

**Key Decisions Made:** 4 agreed, 2 tentative, 1 deferred
**Total Action Items:** 8 (3 assigned to Jason, 2 to Mike, 3 unassigned)
**Open Questions:** 6 requiring follow-up
**Next Steps:** [synthesize what logically comes next]
```

## Output Format

Write the final notes to a file: `meeting-notes-{topic-or-date}.md`

Structure:
```markdown
# Meeting Notes: [Meeting Title/Topic]
**Date:** [date]  |  **Duration:** [if known]
**Participants:** [names and roles]

## Meeting-Wide Summary
[Cross-cutting summary: decisions count, action items count, open questions]

## Feature: [Feature Name 1]
### Requirements
- ...
### Decisions
- ...
### Action Items
- ...
### Open Questions
- ...
### Dependencies
- ...

## Feature: [Feature Name 2]
[same structure]

---
## All Action Items (Consolidated)
[Single list across all features, grouped by assignee]

## All Open Questions (Consolidated)
[Single list for easy follow-up planning]
```

## Key Instructions

### DO:
- Scan the FULL transcript for each feature — discussions are scattered
- Track decision evolution with timestamps/context, not just final outcomes
- Wait for user confirmation of the feature list before deep extraction
- Flag requirements that appeared in unexpected places (e.g., a search requirement mentioned during a notifications discussion)
- Keep language close to what participants actually said
- Distinguish between what was explicitly stated vs. what you're inferring

### DON'T:
- Produce chronological meeting minutes — that's not what this skill does
- Skip the feature confirmation step — the user's mental model matters more than your detection
- Flatten decisions into "the group decided X" when the evolution tells a richer story
- Invent requirements that weren't discussed — flag gaps as open questions instead
- Over-extract from casual asides — focus on substantive discussion
- Generate all features at once without checking in between
