---
name: brief-builder
description: Interactive, conversational workflow for building product briefs
  section-by-section from discovery transcripts. Supports non-linear work,
  saves progress, allows section refinement, and can resume across sessions.
  Use when user needs to create a product brief and wants guided, iterative
  assistance with ability to jump between sections as needed.
---

# Brief Builder - Conversational Workflow

## Overview

This skill guides you through building a product brief section-by-section
from discovery transcripts or research notes. It's designed to mirror how
PMs actually work: iteratively, non-linearly, across multiple sessions.

**Key Features:**
- ✅ Section-by-section generation (not all-at-once)
- ✅ Refinement loops (draft → review → refine → confirm)
- ✅ Non-linear workflow (start anywhere, jump between sections)
- ✅ Progress tracking (see what's done, what's left)
- ✅ Save and resume (work across sessions)
- ✅ User-directed pacing (you control the flow)

## Workflow Pattern

### 1. Initial Analysis (First Run)

When triggered with a transcript or notes:

**DO:**
- Analyze the content thoroughly
- Identify key elements:
  - User types and personas
  - Problems and pain points
  - Capabilities and features mentioned
  - Metrics or numbers referenced
  - Risks or constraints discussed
- Present a high-level summary (3-5 bullet points)
- Show what you found: "I identified X personas, Y features, Z problems"
- Ask where to start: Offer 3-4 section options

**DON'T:**
- Generate all sections immediately (overwhelming!)
- Make decisions without user input
- Assume a linear order (user directs)

**Example opening:**
```
I've analyzed the transcript. I found:
• 4 distinct user types (case managers, families, operations staff, donors)
• 2 major problem areas (inventory management, intake complexity)
• 12+ capabilities mentioned across the conversation
• Several quantified metrics (15% usable donations, increasing length of stay)

Where would you like to start?
[1] Draft personas first (often easiest)
[2] Extract and organize features
[3] Define problem statement
[4] Work on vision statement
[Or tell me which section you'd prefer]
```

### 2. Section-by-Section Building (Core Loop)

For each section the user chooses, follow this pattern:

#### **Generation Phase**

**DO:**
- Generate ONLY the section they requested
- Use the transcript/notes as source material
- Follow the structure from references (see example briefs)
- Present the draft clearly
- Briefly explain your reasoning (1-2 sentences)

**DON'T:**
- Generate other sections yet
- Make it too long (start concise, can expand later)
- Lock in decisions (everything is refinable)

#### **Refinement Phase**

**DO:**
- Ask: "What would you like to refine?"
- Listen for common feedback types:
  - **Merge:** "Combine personas 1 and 3"
  - **Split:** "That feature is really two separate things"
  - **Add:** "Add a metric for user engagement"
  - **Remove:** "Remove the corporate donor persona"
  - **Adjust:** "Make the tone more formal"
  - **Reorganize:** "Move this to Phase 2"
- Iterate based on feedback
- Show the changes clearly
- Ask if further refinement is needed

**DON'T:**
- Defend your initial draft (be flexible)
- Make the user do the work (implement their suggestions fully)
- Move on before user confirms section is good

#### **Confirmation Phase**

**DO:**
- Ask explicitly: "Does this section look good?"
- Wait for user confirmation
- Offer to iterate more if needed

**DON'T:**
- Assume silence means approval
- Force moving on

#### **Transition Phase**

**DO:**
- Mark section as complete: "✓ Personas section complete"
- **Write to draft file immediately:**
  - Update or create `brief-draft-{project-name}.md`
  - Add the completed section content
  - Use TODO placeholders for incomplete sections
  - Include progress summary at top
  - Confirm file location: "✓ Saved to brief-draft-marys-place.md"
- Show progress:
  ```
  Completed: ✓ Personas, ✓ Features
  Remaining: ○ Problem Statement, ○ Metrics, ○ Vision, ○ Risks,
             ○ Business Value, ○ Technical Considerations,
             ○ Constraints, ○ Open Questions
  ```
- Offer options for next section
- Suggest a logical next step, but let user decide
- Allow non-linear choices: "Or tell me where you'd like to go next"

**DON'T:**
- Force a linear order
- Make decisions for the user
- Rush to the next section
- Keep content only in conversation memory (always persist to file)

**Example transition:**
```
Great! Personas section is complete.

✓ Saved to brief-draft-marys-place.md

Progress so far:
✓ Personas (4 personas defined)
○ Features (not started)
○ Problem Statement (not started)
○ Metrics (not started)
[etc.]

Logical next step would be to extract features from the transcript,
since they'll inform our metrics later.

Should we:
[1] Work on features next
[2] Draft the problem statement
[3] Jump to a different section
[4] Pause here (draft is already saved)
```

### 3. State Management

**Track throughout the conversation:**

- **Completion status:** Which sections are done (✓), in progress (◐), not started (○)
- **Section content:** Store the current version of each completed section
- **User preferences:** Note any patterns (e.g., prefers formal tone, specific structure)
- **Context:** Remember key facts from the transcript

**Implementation:**
- **Primary state store:** Draft file (`brief-draft-{project-name}.md`)
  - Write each completed section immediately after confirmation
  - Read this file to check current state and resume progress
- **Secondary:** Use conversation history for context and preferences
- If conversation gets long, periodically summarize current state

**Handle non-linear work:**
- User can jump: "Actually, let's work on metrics now" → OK! (update draft file)
- User can revisit: "Go back to personas, add another one" → Read current version from draft file, update, rewrite
- User can pause: "Let's stop here" → Draft file is already current, just confirm location

### 4. Saving & Resuming

#### **Save Progress**

**Important:** The draft file is updated automatically after each section is confirmed, so progress is continuously saved.

When user says to pause or seems to be stopping:

**DO:**
- Remind them progress is already saved: "Your progress is already saved to brief-draft-{project-name}.md"
- Confirm current location and state
- Remind how to resume: "Run `/brief-builder resume` or just open the file to continue later"
- If the draft file doesn't exist yet (no sections completed), create it with:
  - Progress summary at top
  - Comment: `<!-- DRAFT IN PROGRESS - Generated with /brief-builder on [date] -->`
  - TODO placeholders for all sections

**Example save:**
```markdown
<!-- DRAFT IN PROGRESS - Generated with /brief-builder on 2026-02-17 -->
<!-- Progress: 3 of 11 sections complete -->

# Product Brief: Mary's Place Intake & Inventory System

## Progress Summary
✓ Personas (Complete)
✓ Features (Complete)
✓ Problem Statement (Complete)
○ Vision Statement (TODO)
○ Metrics (TODO)
[etc.]

---

## Product Overview
**TODO: Complete this section**

## Vision Statement
**TODO: Complete this section**

## Problem Statement
[Full content here...]

## Target Users
[Full content here...]

## Key Features & Capabilities
[Full content here...]

## Success Metrics
**TODO: Complete this section**

[etc.]
```

#### **Resume Progress**

When user runs `/brief-builder resume`:

**DO:**
- Look for draft files matching pattern `brief-draft-*.md`
- If found:
  - Read the file
  - Parse the progress (which sections are complete)
  - Load the completed section content
  - Present summary: "Welcome back! You've completed [sections]. Where would you like to continue?"
  - Offer options for next section
- If not found:
  - Ask: "I don't see a draft in progress. Would you like to start a new brief?"

**DON'T:**
- Assume user remembers where they left off (remind them)
- Force them to continue linearly

### 5. Final Assembly

When all sections are marked complete:

**DO:**
- Recognize completion: "All sections are complete! Ready to assemble the final brief?"
- Use the template structure from `assets/brief-template.md`
- Assemble all sections in proper order
- Do a final polish pass:
  - Check consistency (tone, terminology)
  - Ensure section lengths are balanced
  - Verify all template sections are filled
  - Add metadata (date, status)
- Write final file: `brief-{project-name}-final.md`
- Celebrate! "🎉 Product brief complete!"
- Offer next steps:
  - Review the brief
  - Generate a PRD from this brief
  - Share with stakeholders

**DON'T:**
- Assemble before all sections are complete (unless user requests partial assembly)
- Make major changes without user approval

## Section-Specific Guidance

### Personas

**Structure:** (per persona)
- Name/Title (e.g., "Case Manager / Housing Specialist")
- Age/Context
- Needs: 3-4 bullets
- Goals: 2-3 bullets
- Pain Points: 2-3 bullets

**Guidelines:**
- Typical: 3-5 personas (fewer is better than too many)
- Base on actual users mentioned in transcript
- Look for different:
  - Roles (staff vs. customers)
  - Goals (efficiency vs. quality vs. cost)
  - Context (expert vs. novice, mobile vs. desktop)
- Avoid:
  - Generic personas ("tech-savvy millennial")
  - Too many personas (split/merge to get to 3-5)
  - Demographics without behavioral differences

**Validation questions:**
- "Do these represent the actual users you heard about?"
- "Are any too similar and should be merged?"
- "Are we missing any critical user types?"

### Features & Capabilities

**Structure:**
- Organized into 3 phases (usually 3-4 months each)
- Each phase: 5-8 features
- Features described as capabilities, not technical implementation

**Guidelines:**
- **First:** List all capabilities mentioned (don't phase yet)
- **Then:** Organize into 3 logical phases
- **Phase 1:** Foundation, core functionality, must-haves
- **Phase 2:** Enhanced capabilities, intelligence, workflows
- **Phase 3:** Advanced features, integrations, scale

**Phasing considerations:**
- Dependencies (what must come first?)
- Value delivery (quick wins in Phase 1?)
- Complexity (spread hard problems across phases)
- Team capacity (realistic per phase?)

**Validation questions:**
- "Does this sequencing make sense given dependencies?"
- "Is Phase 1 deliverable in 3-4 months?"
- "Should anything move between phases?"

### Problem Statement

**Structure:**
- Opening: Quantified current state (metrics, ratings, usage)
- Body: 3-4 specific pain points with supporting data
- Context: Market dynamics, competitive threats, urgency

**Guidelines:**
- Start with numbers from transcript ("40% adoption", "3.2 rating")
- Each pain point should be specific and evidenced
- Connect to business impact or user suffering
- 5-7 sentences total

**Validation questions:**
- "Does this capture the urgency?"
- "Are the pain points specific enough?"
- "Do we have data to back up these claims?"

### Vision Statement

**Structure:**
- 1-2 sentences maximum
- Aspirational but achievable
- Focus on customer benefit and outcome
- Avoid technical details

**Guidelines:**
- This is often hardest to write (save for later if stuck)
- Think: "In 12-18 months, what will be different for users?"
- Should be inspiring but grounded
- Test: "Does this get stakeholders excited?"

**Examples from reference briefs:**
- "Empower customers to manage their financial lives seamlessly through intelligent, personalized mobile banking."
- "Transform healthcare access by putting patients in control of their health journey through integrated digital tools."

### Success Metrics

**Structure:**
- 4-6 metrics across dimensions:
  - Adoption (usage, activation)
  - Satisfaction (ratings, NPS)
  - Engagement (frequency, depth)
  - Operational (efficiency, cost)
- Each metric includes:
  - Current baseline
  - Target
  - Measurement method

**Guidelines:**
- Connect each metric to a feature or problem
- Be specific: "65% MAU (up from 40%)" not "increase usage"
- Mix leading and lagging indicators
- Ensure measurable (can we actually track this?)

**Validation questions:**
- "Are these measurable with available data?"
- "Are targets realistic given timeline?"
- "Do these cover all key dimensions?"

### Business Value

**Structure:**
- Revenue Impact: Specific $ amount annually
- Cost Savings: Specific $ amount annually
- Strategic Value: 3 qualitative bullets

**Guidelines:**
- Ground in organization's financial reality
- Reference budget constraints if mentioned
- Strategic value might include:
  - Competitive positioning
  - Market expansion
  - Platform capabilities
  - Brand/reputation

### Risks

**Structure:**
- 4-6 identified risks with brief descriptions
- Categories to consider:
  - Technical (integration, scalability, data)
  - Adoption (change management, training)
  - Competitive (market timing, alternatives)
  - Organizational (resources, dependencies)
  - External (regulatory, compliance, partnerships)

**Guidelines:**
- Each risk: 1 sentence description
- Focus on actual risks mentioned or implied
- Balance: Show awareness without being alarmist

### Other Sections

**Technical Considerations:**
- System requirements
- Compliance frameworks (HIPAA, PCI-DSS, etc.)
- Platform requirements
- Integration needs
- Performance targets

**Constraints & Dependencies:**
- Budget
- Timeline
- External dependencies (APIs, partners, reviews)
- Team/resource dependencies

**Open Questions:**
- 4-6 strategic/tactical questions still to be answered
- Represent decisions not yet made
- Build vs. buy, migration strategy, feature scope, partnerships

## Key Instructions

### DO:
- ✅ Keep the conversation natural and helpful
- ✅ Explain WHY you're suggesting things
- ✅ Offer options, let user decide
- ✅ Remember context across multiple turns
- ✅ Show progress regularly
- ✅ Validate before moving on
- ✅ **Write each section to the draft file immediately after user confirms it**
- ✅ Be flexible and adapt to user's working style
- ✅ Reference the example briefs for quality standards
- ✅ Confirm file location after each save

### DON'T:
- ❌ Generate all sections at once (overwhelming!)
- ❌ Force linear order (let user direct)
- ❌ Lock in decisions (everything can be refined)
- ❌ Make the user feel rushed
- ❌ Defend your drafts (be open to feedback)
- ❌ Use jargon or overly complex language
- ❌ Forget what you've already generated

## Quality Standards

Reference the example briefs in `references/` for:
- Section structure and content
- Tone (professional, data-driven, strategic)
- Level of detail
- Formatting conventions
- Persona patterns
- Feature organization
- Metric specificity

Key patterns from examples:
- Data-driven problem statements (start with numbers)
- 3-phase feature rollouts
- Specific, measurable metrics
- Balanced risks (4-6 across categories)
- Markdown formatting with headers and bullets

## Output Template

Final assembly uses `assets/brief-template.md` structure:
- Product Overview
- Vision Statement
- Problem Statement
- Target Users (Personas)
- Key Features & Capabilities (3 phases)
- Success Metrics
- Business Value
- Technical Considerations
- Constraints & Dependencies
- Risks
- Open Questions
- Metadata

## Tips for Success

**For the user:**
- Start with the easiest section (often personas or features)
- Don't worry about perfection on first draft
- You can always come back and refine
- Save progress if you need to pause
- The skill adapts to your pace and style

**For Claude:**
- This is a conversation, not a checklist
- Read the user's energy (rushed? thorough? stuck?)
- Adjust your pace accordingly
- Offer help when they're stuck
- Celebrate progress along the way
