# Lab Walkthrough: AI Skills for Product Managers

**Objective:** Build and customize reusable AI skills — packaged workflows that go beyond saved prompts — using a real discovery transcript, an existing skill library, and a task from your own work.

**Estimated time:** 90–120 minutes

**Prerequisites:** An AI coding assistant installed and working (see [Setup Guide](#setup))

---

## What You'll Learn

By the end of this lab, you will:

1. **Use** a pre-built skill to build a product brief from a real discovery transcript
2. **Understand** how a skill works under the hood — instructions, references, templates
3. **Customize** an existing skill to fit your team's workflow
4. **Create** your own skill from a real task you do repeatedly

You'll leave with working skills you can use on your own projects starting tomorrow.

---

## Setup

### Set Up Your AI Coding Assistant

You'll need one of the following tools installed. Follow the guide for your tool:

| Tool | Setup Guide |
| --- | --- |
| GitHub Copilot | [Setup Instructions](setup/github-copilot-setup.md) |
| Claude Code | [Setup Instructions](setup/claude-code-setup.md) |
| OpenCode | [Setup Instructions](setup/opencode-setup.md) |

> **Note:** This lab works with any AI coding assistant that can read files and follow instructions. The core concepts are tool-agnostic. Setup guides include tool-specific tips for getting the most out of each exercise.

---

## Context: The Mary's Place Project

Throughout this lab, you'll work with real content from a discovery call with **Mary's Place**, a nonprofit in Seattle that serves families experiencing homelessness. The transcript is from a 53-minute introductory call with their Chief Program Officer and Chief HR & Operations Officer.

This is the kind of meeting you'd have at the start of a new engagement — lots of information, multiple problem areas discussed, potential features surfacing throughout the conversation. Exactly the kind of content that needs to be synthesized into structured deliverables.

You don't need to read the transcript yourself. That's what we're building tools for.

---

## Part 1: Use a Skill

**Goal:** Experience what a skill does before you learn how it works.
**Time:** ~25 minutes

### What Is a Skill?

You've used saved prompts — slash commands in Copilot or Claude Code that store a reusable instruction. Skills take that idea further. A skill is a **packaged workflow** — not just instructions, but also the reference material, templates, and supporting code the AI needs to do the job well.

### Skill vs. Agent — When to Use Which

Skills and agents solve different problems, and knowing when to reach for each one saves time:

| | Skill | Agent |
|---|---|---|
| **What it is** | A reusable workflow packaged into a folder the AI reads | A configured AI assistant with a persona, knowledge base, and fixed instructions |
| **Lives in** | Your repo (`.github/skills/`, etc.) | A platform (Copilot Studio, ChatGPT, etc.) |
| **Best for** | Repeatable tasks within a project — brief writing, PRD reviews, story generation | Always-on assistants — FAQ bots, support helpers, onboarding guides |
| **Triggered by** | Describing what you need in your AI coding assistant | Users opening and chatting with the agent |
| **Context** | Reads your actual project files | Works from uploaded documents or URLs |
| **Iteration** | You refine the skill file in code | You update instructions and knowledge in the platform UI |

**Use a skill when** the task is part of a workflow you control — something you run against your own files, on demand, as part of how you work.

**Use an agent when** you want to publish a persistent assistant for others to interact with — something that runs independently of your local environment.

In practice, they're complementary. You might use a skill to generate a product brief, then feed that brief to an agent that helps stakeholders ask questions about it.

---

### How a Skill Works

```text
my-skill/
  ├── SKILL.md        Required: instructions + metadata
  ├── scripts/         Optional: code for precision work (math, APIs)
  ├── references/      Optional: examples, documentation
  └── assets/          Optional: templates, resources
```

Skills live in a specific folder depending on your tool:

| Tool | Skills Location |
| --- | --- |
| GitHub Copilot | `.github/skills/` |
| Claude Code | `.claude/skills/` |
| OpenCode | `.opencode/skills/` |

This lab uses `.github/skills/` as the default. If you're using a different tool, the same skill files work — just place them in the corresponding folder.

**SKILL.md** is the only required file, but the optional folders are where skills pull ahead of saved prompts. A saved prompt tells the AI what to do. A skill gives it the workflow, the examples to match, and the templates to fill — everything it needs to produce consistent, high-quality output without you re-explaining context every time.

Two other differences worth noting:

- **Natural language triggering.** A good skill description means you don't need to remember a prompt command (slash command) — just describe what you need and the AI activates the right skill.
- **Multi-step workflows.** Skills can encode processes with checkpoints, user confirmation steps, and state tracking across sessions. You're about to experience this.

### Exercise 1.1: Run the Brief Builder Skill

This repo includes a pre-built skill called `brief-builder`. It builds product briefs from discovery transcripts using a conversational, section-by-section workflow — the same brief structure you've worked with in previous sessions.

Open your AI coding assistant and give it this prompt:

```text
Use the brief builder skill to create a product brief from this discovery
transcript: "transcript/03-intro-call-marys-place.txt"
```

> **Tool-specific tips:**
>
> - **Claude Code:** If the brief-builder skill is registered, you can type `/brief-builder` and reference the transcript. Or just describe what you need — the skill's description will trigger it.
> - **GitHub Copilot:** You may need to reference the skill explicitly: `Read ".github/skills/brief-builder/SKILL.md" for your instructions, then analyze the transcript.` If your skills are in `.github/skills/`, Copilot should find them automatically.
> - **OpenCode:** Reference the files using your tool's file-referencing syntax.

**After you run this:**

- The AI should present a summary of what it found in the transcript — personas, problem areas, capabilities, and any quantified metrics — before generating anything. If it jumps straight to drafting a brief, re-read the skill instructions and prompt again.
- You should see the AI ask you which section to work on first, not produce a complete output all at once. That conversational handoff is the main thing to verify.

### What to Expect

The skill works in phases:

**Phase 1 — Transcript analysis.** The AI reads the transcript and presents what it found: personas identified, features mentioned, problems discussed, metrics referenced. Something like:

```text
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

**This is the key moment.** The AI isn't generating the whole brief at once. It's asking you to direct the workflow — which section to tackle, in what order, at your pace. This is a *process*, not a prompt.

> **Why section-by-section?** The skill's instructions tell the AI to generate one section at a time, wait for your feedback, then move on. This is a deliberate prompt strategy. Each confirmed section becomes context for the next — so when the AI generates features, it already knows exactly which personas it's building for. That context compounds: metrics reference real features, risks reference real constraints. The converse is also true. If the AI gets personas wrong and you don't catch it, that error cascades through every downstream section. The turn-based approach gives you a checkpoint to catch problems before they propagate.

### Exercise 1.2: Work Through a Section

Choose a section to start with. Personas are often easiest. The AI will:

1. **Generate a draft** of just that section, referencing the transcript and the example briefs in its `references/` folder for quality standards
2. **Ask for your input** — merge personas? Add one? Adjust tone?
3. **Refine based on your feedback** until you confirm the section is done

This is where the section-by-section approach pays off. Instead of reading a 10-page brief looking for problems, you're reviewing 3-4 personas and giving surgical feedback. Try giving it direction:

```text
Merge the first two personas — they're both case managers with slightly
different titles. And the "donor" persona feels like a stretch from this
transcript. Remove it for now.
```

**After you run this:**

- Your feedback should produce a revised draft — not a full rewrite. If the AI regenerated the whole brief instead of adjusting just that section, the skill's guardrails may not be working as expected.
- Before confirming a section, ask yourself: does this accurately reflect what was said in the transcript, or did the AI fill in gaps? Push back on anything you can't trace to the conversation.

### Exercise 1.3: See Progress Tracking

After confirming a section, notice how the skill tracks state:

```text
Progress so far:
✓ Personas (3 personas defined)
○ Features (not started)
○ Problem Statement (not started)
○ Metrics (not started)
...
```

Work through one more section if time allows. The point isn't to finish the brief — it's to experience the workflow: analyze → choose section → generate → refine → confirm → next.

### Checkpoint

At this point you should have:

- [x] Experienced a multi-step, conversational skill workflow
- [x] Seen the AI use reference material (example briefs) to match quality standards
- [x] Directed the workflow — choosing sections, giving feedback, confirming output
- [x] Seen progress tracking across sections

> **How is this different from a saved prompt?** Two things. First, you didn't need to remember a slash command — skills have descriptions that let the AI activate them when your request matches. Second, skills are extensible. The brief-builder bundled reference briefs, a template, and a multi-step workflow into a single folder. A saved prompt is a flat string. A skill is a package.

---

## Part 2: Understand How It Works

**Goal:** Read the skill files and connect what you experienced to the instructions that produced it.
**Time:** ~15 minutes

### Exercise 2.1: Explore the Skill Folder

Look at the brief-builder's folder structure:

```text
.github/skills/brief-builder/
  ├── SKILL.md
  ├── references/
  │   ├── 00-mobile-banking-app.md
  │   └── 01-healthcare-patient-portal.md
  └── assets/
      └── brief-template.md
```

Notice what's in each folder:

- **`references/`** contains two example product briefs. This is why the AI's output matched a professional quality standard — it had examples to learn from, not just instructions describing what "good" looks like.
- **`assets/`** contains the brief template — the output structure the AI fills in. This ensures consistent formatting across every brief you build.

### Exercise 2.2: Read the SKILL.md

Open the skill definition:

```text
.github/skills/brief-builder/SKILL.md
```

Read through it and notice:

1. **The frontmatter** — the `name` and `description` fields. The description tells the AI *when* to activate this skill, not just what it does. This is what enables natural language triggering — you say "build a brief from this transcript" and the description matches your intent.

2. **The workflow phases** — analyze, generate section, refine, confirm, transition. This is the loop you just experienced. Notice how the instructions explicitly tell the AI to generate *only one section at a time* and wait for confirmation before moving on. Without this, the AI would dump everything at once.

3. **The section-specific guidance** — personas, features, metrics each have their own instructions with structure templates and validation questions. This is domain expertise encoded as instructions.

4. **The DO/DON'T guardrails** — "Don't generate all sections at once," "Don't force linear order," "Don't defend your drafts." These address specific failure modes the skill designer anticipated.

5. **References to supporting files** — notice how the SKILL.md points to `references/` for quality standards and `assets/` for the output template. The instructions stay lean; the detail lives in the supporting files.

### Exercise 2.3: Compare to the Meeting Notes Skill

Now look at a simpler skill:

```text
.github/skills/meeting-notes/SKILL.md
```

This skill transforms meeting transcripts into feature-organized notes. It's a single SKILL.md — no references, no assets, no scripts. It's closer to a sophisticated saved prompt.

Notice the difference in complexity:

- **Brief-builder:** Full folder with references and assets, conversational multi-session workflow, progress tracking, save/resume
- **Meeting-notes:** Single file, focused workflow (identify features → confirm with user → extract details per feature)

Both are skills. The right level of complexity depends on the workflow. A meeting notes extraction doesn't need example documents or templates. A product brief does.

### Key Takeaway

Skills exist on a spectrum. A simple skill is a well-structured SKILL.md — better than a saved prompt because it encodes a workflow with checkpoints. A sophisticated skill bundles reference material, templates, and scripts alongside the instructions — it packages an entire methodology.

---

## Part 3: Modify and Build Skills

**Goal:** Customize an existing skill to fit your workflow.
**Time:** ~40 minutes

**Here's what you'll do:**

1. Run the meeting-notes skill to establish a baseline
2. Pick a modification that matches your workflow
3. Edit the skill, test it, refine it — the iteration loop
4. Commit each version so you can track what changed

### Exercise 3.1: Run the Baseline

Run the meeting-notes skill so you have a baseline to compare against:

```text
Use the meeting notes skill to analyze this transcript:
"transcript/03-intro-call-marys-place.txt"
```

The skill will identify the discrete features/topics discussed in the transcript, ask you to confirm or adjust that list, then extract requirements, decisions, action items, and open questions organized by feature.

Pay attention to what the output includes — and what's missing that you'd want for your actual work.

**After you run this:**

- Write down one or two things you'd change about the output before reading the modification options below. Your own instinct about what's missing is more useful than picking from a menu.
- Note the format: feature-first organization, with requirements, decisions, and action items nested under each feature. This structure is what you'll be extending.

### Exercise 3.2: Pick a Modification

Skills should evolve to meet the needs of your projects — what you extract from a discovery call is different from a sprint review. This repo includes a **skill-creator** skill (`.github/skills/skill-creator/`) that makes modifying and building skills easy. You'll use it in a moment. For now, just know it's there — after the lab you can explore it to create skills from scratch.

Think about what was missing from the baseline output. Here are a few ideas — or come up with your own modification based on what your team actually needs.

---

#### Option A: Key Quotes Extraction

**The gap:** You need verbatim quotes for briefs, decks, or stakeholder alignment — but finding them means re-reading the whole transcript.

**What good output looks like:**

```markdown
### Key Quotes
> "Only 15-20% of the donations we receive are actually usable for the
> families we serve." — Mike Komola (~min 28)

> "If we could get a virtual advocate that speaks their language and walks
> them through the intake process..." — Jason Gortney (~min 35)
```

**Where to modify:** Add guidance in the per-feature extraction section and add "Key Quotes" to the output format.

---

#### Option B: Stakeholder Alignment Tracking

**The gap:** You know what was decided, but not *who was aligned*. Two weeks later when someone pushes back, you can't remember who was enthusiastic and who was skeptical.

**What good output looks like:**

```markdown
### Stakeholder Alignment
- **Champions:** Jason (passionate about AI-powered intake, referenced it 3x)
- **Supportive:** Mike (agreed with need, focused on operational feasibility)
- **Concerns raised:** Mike flagged staffing capacity for implementation
- **Not heard from:** [No participants were silent on this topic]
```

**Where to modify:** Add guidance in the per-feature extraction section. Tip: the AI needs explicit instruction to read tone and emphasis, not just content — e.g., *"Track who advocated, who raised concerns, and who was notably absent."*

---

#### Option C: Follow-Up Agenda Generator

**The gap:** You leave with open questions and deferred decisions, but turning those into a next-meeting agenda is yet another task.

**What good output looks like:**

```markdown
## Suggested Follow-Up Agenda

**Priority items** (deferred decisions needing resolution):
1. Finalize scope: single product vs. separate intake and inventory systems (15 min)
2. AI virtual advocate feasibility — review technical options (20 min)

**Status checks** (action items from this meeting):
3. Jason: current intake form shared with team? (5 min)
4. Mike: inventory data from last quarter pulled? (5 min)

**Open questions to address:**
5. Budget ceiling for Phase 1 (10 min)
6. Staffing plan for implementation support (10 min)

*Estimated total: 65 minutes*
```

**Where to modify:** Add this as a new section after the cross-cutting summary. The AI already has all the raw data — this is just a smart reorganization of it.

---

### Exercise 3.3: Edit and Test

Now modify the skill. Ask your AI assistant to use the skill-creator:

```text
Use the skill creator to add [your chosen option] to the meeting-notes skill
at .github/skills/meeting-notes/SKILL.md
```

You can also edit the SKILL.md by hand if you prefer — it's just a markdown file.

**Review the changes**, then test the modified skill:

```text
Use the meeting notes skill to analyze this transcript:
"transcript/03-intro-call-marys-place.txt"
```

**After you run this:**

- Did the new section appear in the output? If not, the instructions may not be specific enough — add a concrete example of what good output looks like directly in the SKILL.md.
- Did anything break? Verify the core extraction (requirements, decisions, action items) is intact.
- Compare the output to your baseline from Exercise 3.1 and check that the modification adds value without bloat.

### Exercise 3.4: Review and Refine

Check the output:

- **Did the new section appear?** If not, your instructions may not be clear enough.
- **Is it useful or filler?** If the content is vague, add a concrete example to the skill showing what good output looks like. This is the most common fix.
- **Did it break anything else?** Make sure the core extraction (requirements, decisions, action items) still works.

Edit the SKILL.md based on what you saw and re-test. When you're happy with the result, commit:

```text
Commit the meeting-notes skill changes with message
"Add [your modification] to meeting-notes skill"
```

> **Tip:** Your AI assistant handles git for you. Just tell it to commit and it will stage the files, write the message, and run the command. You don't need to touch the terminal.

**This is the cycle:** edit → test → refine → commit. Get comfortable with it — it's how all good skills are developed.

### Exercise 3.5: View Your Iteration History

See how your skill evolved:

```text
Show me the git log for .github/skills/meeting-notes/SKILL.md
and diff each version to summarize what changed
```

That's version-controlled prompt engineering — each change is trackable, diffable, and reversible.

### Part 3 Checkpoint

At this point you should have:

- [x] A customized meeting-notes skill with a new capability
- [x] Git history showing how your skill evolved through iteration
- [x] Experience with the test → identify gap → fix → re-test cycle

---

## Part 4: Create Your Own Skill

**Goal:** Build a skill from scratch using a real task from your own work.
**Time:** ~20 minutes

You've used a skill, read how one works, and modified one. Now create your own.

### The Signal

Think about the last time you used AI for a recurring task — stakeholder updates, competitive analysis, sprint retro synthesis, anything. You probably went back and forth for several turns before the output was what you wanted. That iteration *is* the skill. You just haven't captured it yet.

### Exercise 4.1: Work Through Your Task

Pick a task you do repeatedly. Start a new conversation with your AI assistant and work through it. Prompt, review the output, give feedback, iterate. Get to an output you're happy with.

Don't rush this — the conversation itself is the raw material.

**After you run this:**

- Before moving on, count how many rounds of feedback it took to get to output you were happy with. That number is a rough signal of how much structured guidance the skill needs to encode.

### Exercise 4.2: Capture It as a Skill

Once you have output you're satisfied with, stay in the same conversation and prompt:

```text
Use the skill creator to turn this conversation into a reusable skill.
Ask me any clarifying questions before continuing.
```

The skill creator will look at the instructions and refinements you gave during the conversation and distill them into a SKILL.md. The clarifying questions matter — it might ask about edge cases, output format preferences, or which parts of your feedback should become permanent guardrails. Answer them carefully. This is where ad-hoc iteration becomes a repeatable process.

**After you run this:**

- Read through the generated SKILL.md before testing it. Check that your most important refinements — the ones that changed the output the most — made it in. If they didn't, add them manually.
- If the skill creator asked a clarifying question you weren't sure how to answer, that's a signal there's an edge case in your workflow you haven't thought through yet.

### Exercise 4.3: Test It

Run your new skill in a fresh conversation. Does it produce the same quality output without the back-and-forth? If not, refine the SKILL.md and test again — you know the cycle by now.

When it works, commit it. You now have a skill that captures what used to take multiple rounds of prompting and turns it into a single invocation.

**This is the workflow going forward:** whenever you find yourself iterating on a prompt to get it right, that's the signal to capture it as a skill.

---

## Reflection

Before wrapping up, consider:

- Which part of the lab surprised you most — using a skill, reading how it works, or building your own?
- When you ran Exercise 4.1, how many rounds of iteration did it take? What does that tell you about how much structure the skill needs to encode?
- What's the next recurring task in your own work that you'd turn into a skill?

---

## What You Built Today

| Artifact | What It Does |
| --- | --- |
| **Product brief (partial)** | Started from a real transcript using the brief-builder's conversational workflow |
| **Customized meeting-notes skill** | Your version — with the specific outputs your team needs |
| **Your own skill** | A new skill built from a real prompt conversation — your first from-scratch creation |
| **Git history** | Version-controlled record of how your skills evolved through iteration |

These are real tools you can use starting tomorrow. Copy the skill folders into your project's skills directory (`.github/skills/` for Copilot, `.claude/skills/` for Claude Code, `.opencode/skills/` for OpenCode) and they're ready to go.

---

## Key Takeaways

1. **Skills go beyond saved prompts.** They package workflows, reference material, and templates into a single folder — everything the AI needs to produce consistent, high-quality output without re-explanation.

2. **Structure beats intelligence.** A mediocre AI with good instructions outperforms a brilliant AI with vague ones.

3. **Iteration is the process.** Your first SKILL.md won't be perfect. Test it, fix what's wrong, commit, test again. Three iterations gets you to "good." Five gets you to "great."

4. **The signal is repetition.** If you're iterating on the same kind of prompt more than once, capture it as a skill. That's how ad-hoc conversations become repeatable tools.

---

## Resources

- **Skill Creator:** `.github/skills/skill-creator/SKILL.md` — A meta-skill that guides how to write effective skills. Reference it when modifying or building skills.
- **Brief Builder:** `.github/skills/brief-builder/SKILL.md` — Conversational product brief creation with reference material and templates
- **Meeting Notes:** `.github/skills/meeting-notes/SKILL.md` — Feature-organized meeting transcript extraction
- **Example Briefs:** `references/` — See what good product briefs look like
- **Mary's Place Transcript:** `transcript/03-intro-call-marys-place.txt` — The discovery call transcript used in this lab

---

**Next:** Celebrate! Congratulations on completing the Slalom SO AI Enablement Training labs!
