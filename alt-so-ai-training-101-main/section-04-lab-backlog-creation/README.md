# Lab Exercise: Creating a Backlog with AI

**Objective:** Use AI to transform a completed PRD into a structured engineering backlog — starting with reusable templates, then generating epics and user stories grounded in the source document.

**Estimated time:** 1.5–2 hours

**Prerequisites:**

- Completed Section 03 (or have a PRD ready to work from)
- GitHub Copilot or another AI assistant open and ready
- Familiarity with agile epics and user stories

---

## Reference Materials

All prompts in this lab reference a source PRD to generate grounded, traceable backlog artifacts. Before you start, choose your starting point:

**Option A — Use your own PRD (recommended)**
If you have a PRD from a current or recent client project, use that. Copy or reference it in the `context (ingestion)/` folder. Working from your own material will produce output you can actually use.

**Option B — Use the provided example**
A complete PRD is included in the lab files, based on the Mary's Place discovery materials from Section 03:

> **Example PRD:** `context (ingestion)/marys-place-prd.md`

This document covers the Mary's Place Family Navigation Assistant — an AI-powered intake and journey planning platform for a nonprofit serving families experiencing homelessness. It includes an executive summary, user personas, functional requirements (MoSCoW), success criteria, and technical considerations.

> **Note:** The lab also includes completed epics and stories in `documentation (output)/`. These were generated from a *different* scenario (a regulated medical device support agent) and are provided as **format and quality reference examples only** — not as examples tied to the Mary's Place PRD. Use them to understand the expected level of detail; generate your own artifacts from the PRD you choose.

**How to attach your PRD in GitHub Copilot Chat:**
- Type `#file:` and select your PRD file, or drag it into the chat window
- Every prompt in this lab includes a file path reference — replace it with your own path if using Option A

---

## What You Will Build

By the end of this lab, you will have practiced generating:

| Artifact | Description |
| --- | --- |
| Epic template | A reusable structure for any epic in this program |
| User story template | A reusable structure for any story in this program |
| Completed epics | Capability-level epics grounded in the PRD |
| Completed stories | Atomic, testable user stories linked to epics |

---

## Folder Structure

```text
section-04-lab-backlog-creation/
 README.md                               <- This file (lab instructions)
 context (ingestion)/
    marys-place-prd.md                   <- Provided PRD (Option B)
    medical-device-support-agent-prd.md  <- Format reference (different scenario)
 documentation (output)/
     epics/
        epic-template.md           <- Reference template
        epic-*.md                  <- Example completed epics (medical device scenario)
     stories/
         story-template.md          <- Reference template
         story-*.md                 <- Example completed stories (medical device scenario)
```

**Source document:** All prompts reference a PRD in `context (ingestion)/`. See the **Reference Materials** section above for how to use your own PRD or the provided example.

> **About the pre-generated epics and stories:** The `documentation (output)/` folders already contain completed epics and stories. These are **reference examples only** — they show you the expected format and level of detail. When you generate your own output, save it as a new file rather than overwriting them. Use the existing files for comparison in the "After you run this" steps, not as a starting point to edit.

---

## Step 1: Orient Yourself

Before prompting, spend 5 minutes reading your source materials:

1. **Your PRD** — find the executive summary and any section covering success criteria, goals, or business objectives. These define what the backlog needs to accomplish.
   - *Using the example?* Read the **Executive Summary** and **Section 2.2 Success Criteria** in `context (ingestion)/marys-place-prd.md`.

2. **One completed epic** (`documentation (output)/epics/epic-information-retrieval-rag.md`) — notice the YAML frontmatter, the OKRs, and the acceptance criteria format. This shows the level of detail expected regardless of which PRD you're working from.

3. **One completed story** (`documentation (output)/stories/story-search-by-product-name.md`) — notice how it links back to its parent epic and uses the `As a <persona>, I can <action> so that <benefit>` format.

**After you do this:**

- You should be able to name 2–3 capability areas from your PRD (e.g., information retrieval, safety and compliance, escalation).
- Note which personas appear most often — they will anchor your stories.

---

## Step 2: Generate an Epic Template

Start by prompting AI to build a reusable epic template for this program. Grounding the template in the actual PRD ensures it reflects the right compliance and domain requirements.

```text
You are drafting an epic template for the initiative described in
"context (ingestion)/marys-place-prd.md".

Create a reusable markdown template with these sections:
- YAML frontmatter (title, summary, owner, priority, phase, personas,
  OKRs, business_value, success_metrics, regulatory_requirements,
  security_considerations, dependencies, estimated_effort,
  monitoring_metrics, acceptance_criteria, out_of_scope,
  stakeholders, links)
- Human-readable Summary (2-3 sentences)
- OKRs (objective + 3-5 measurable key results)
- Objective and Business Value
- Personas Impacted
- Acceptance Criteria
- Validation / QA Plan
- Monitoring and Metrics
- Out of Scope
- Dependencies
- Stakeholders / Reviewers
- Notes and Links

Use clear placeholder text (<fill me>) where project-specific entries
belong. Remind the author to cite the source PRD for all metrics and
requirements used.
```

**After you run this:**

- Compare the AI output to `documentation (output)/epics/epic-template.md` — are the sections consistent?
- Adjust any placeholder language that is vague or doesn’t reflect the context of the PRD you’re working from.
- Note whether the template prompts the author to tie KRs back to the PRD’s success criteria (Section 2.2). If not, add that reminder.

---

## Step 3: Author Epics from the PRD

Pick one or two capability areas from the PRD and generate completed epics. Use the template structure you reviewed in Step 2.

### Choose a Capability Area

The PRD covers several major capability areas. Pick one to start:

- Family intake and assessment (conversational intake flow)
- Journey planning and housing roadmap
- Case worker coordination interface
- Language and accessibility support
- Data and HMIS integration

### Generate the Epic

```text
Using "context (ingestion)/medical-device-support-agent-prd.md",
draft the [REPLACE WITH YOUR CHOSEN CAPABILITY] epic.

Summarize the problem and target outcomes using the success criteria in
Section 2.2 of the document. Detail:
- Functional scope (cite the numbered requirements, e.g., FR-01, FR-07)
- Non-functional expectations (latency, uptime, accessibility thresholds)
- Privacy and data security constraints relevant to this capability

Include these sections: Human-readable Summary, OKRs, Objective and
Business Value, Personas Impacted, Acceptance Criteria, Validation /
QA Plan, Monitoring and Metrics, Out of Scope, Dependencies,
Stakeholders / Reviewers, and Notes.

Close with a reference back to the PRD.
```

**After you run this:**

- Verify the acceptance criteria are testable — each one should be verifiable by a QA engineer without asking follow-up questions.
- Check that any metric used in the OKRs (e.g., “80% of families with a structured plan within 3 days”) traces back to a number in the PRD. If AI invented a number, replace it.
- Review the Out of Scope section carefully — being explicit about what the system will *not* do is as important as what it will do.
- Compare your output to `documentation (output)/epics/epic-information-retrieval-rag.md` as a format reference (note: that example is from a different scenario).

---

## Step 4: Generate a Story Template

Now build a reusable story template tied to this program's personas and compliance requirements.

```text
Generate a markdown user story template for the program defined in
"context (ingestion)/marys-place-prd.md".

Include sections for:
- YAML frontmatter (title, parent_epic, summary, owner, priority,
  sprint, story_points, personas, dependencies, acceptance_criteria,
  tasks, links)
- User story in the format: As a <persona>, I can <action> so that <benefit>
- Acceptance Criteria (Gherkin-style table)
- Non-Functional / Compliance Notes
- Telemetry and Reporting
- Dependencies
- Risks and Mitigations
- Rollout / Validation Checklist
- Source References

Add a reminder to link every story to its parent epic and to cite
the originating PRD section when establishing acceptance criteria.
```

**After you run this:**

- Compare to `documentation (output)/stories/story-template.md` — is the format consistent?
- Make sure the template includes a slot for `parent_epic` — traceability from story → epic → PRD is what makes a backlog useful under scrutiny.
- Add any reminders missing from the AI output (e.g., “note any accessibility, language, or data privacy requirements relevant to this story”).

---

## Step 5: Author Stories from an Epic

Using the epic you generated in Step 3, write 3–5 user stories that implement it.

### Identify the Personas and Scenarios

Look at the personas in your epic. For each high-priority acceptance criterion, there is usually one or more stories.

### Generate the Stories

```text
Based on the epic: [PASTE YOUR EPIC SUMMARY OR PATH]

And the PRD at "context (ingestion)/marys-place-prd.md",
generate 3-5 user stories that implement this epic.

For each story:
- Identify the persona from the PRD's Section 3
- Describe the trigger scenario (what the user is trying to do)
- Write the story: As a <persona>, I can <action> so that <benefit>
- Provide acceptance criteria covering functionality, performance,
  and any accessibility or language requirements cited in the document
- Include: Summary, Acceptance Criteria (Gherkin), Non-Functional /
  Compliance Notes, Telemetry, Dependencies, Risks, and Rollout
  checklist with source citations

Keep each story small enough to complete in a single sprint.
```

**After you run this:**

- Check that each story is independently deliverable — a story that requires three other stories to be done first is an epic, not a story. Break it down further.
- Verify the persona for each story is real — it should match one of the personas defined in PRD Section 3.
- For any story touching family data, language support, or access control, verify the non-functional notes are explicit about what's required.
- Compare your output to the examples in `documentation (output)/stories/` — look at format and level of detail (note: those examples are from a different scenario; use them for format reference only).

---

## Prompting Tips

Keep these principles in mind as you chain prompts throughout the lab:

- **Reference the PRD by path** in every prompt — this grounds the AI in the right material and prevents invented metrics.
- **Feed outputs forward** — when authoring stories, paste or reference the epic you just generated so the AI preserves terminology and acceptance criteria.
- **Be explicit about domain requirements** — call out language support, accessibility, and data privacy requirements in your prompts or the AI will treat them as optional.
- **Ask for numbered requirements tables** to keep artifacts consistent across multiple authors.

---

## Reflection

Before moving on, consider:

- Which capability area generated the most detailed acceptance criteria? Why?
- Did the AI ever introduce a metric you couldn't trace back to the PRD? How did you handle it?
- What would you do differently in the prompts if you were generating a backlog for a different domain or compliance regime?

---

**Next:** [Section 05 — Creating a Skill](../section-05-lab-create-skill/README.md)
