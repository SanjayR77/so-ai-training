# Lab Exercise: Context Ingestion & AI-Assisted Synthesis

## Objective

Practice the core TPM workflow for building high-quality AI context from raw project materials. By the end of this lab, you will have:

- Assessed and categorized raw source documents by signal value
- Used GitHub Copilot in Agent mode to produce structured context files from those sources
- Used GitHub Copilot in Ask mode to identify gaps in your context
- Committed your work to a local Git repository using VS Code

**Estimated time:** 60 minutes

---

## Getting the Lab Files

### Option 1: Download as ZIP (Recommended)

1. Go to the [alt-so-ai-training-101 repository on GitHub](https://github.com/Slalom/alt-so-ai-training-101) Hint: You are already here. Just go to the root folder.
2. Click the green **Code** button near the top right.
3. Select **Download ZIP**.
4. Extract the ZIP file to a location on your machine.
5. Open the extracted folder in VS Code: **File → Open Folder**.

### Option 2: Clone via SSH (Optional - Advanced)

Cloning via SSH keeps your local copy linked to the remote repository, allowing you to pull updates and push changes. This requires an SSH key to be set up with your GitHub account.

#### Step 1: Check for an Existing SSH Key

Open a terminal and run:

```bash
ls ~/.ssh
```

If you see files named `id_rsa` / `id_rsa.pub` or `id_ed25519` / `id_ed25519.pub`, you already have a key. Skip to Step 3.

> **What are these files?** These are the default names SSH uses when generating a key pair. The prefix indicates the encryption algorithm: `id_rsa` is an older algorithm, `id_ed25519` is newer and recommended. The `.pub` file is your **public key** (safe to share — this is what you upload to GitHub). The file without `.pub` is your **private key** (never share this).

#### Step 2: Generate a New SSH Key

```bash
ssh-keygen -t ed25519 -C "your.email@company.com"
```

Press Enter to accept the default file location and optionally set a passphrase.

#### Step 3: Add the Public Key to GitHub

1. Copy your public key to the clipboard:
   - **Mac:** `pbcopy < ~/.ssh/id_ed25519.pub`
   - **Windows:** `Get-Content ~/.ssh/id_ed25519.pub | clip`
2. Go to [GitHub → Settings → SSH and GPG Keys](https://github.com/settings/keys).
3. Click **New SSH key**, give it a title, paste the key, and click **Add SSH key**.

#### Step 4: Clone the Repository

```bash
git clone git@github.com:Slalom/alt-so-ai-training-101.git
```

Then open the cloned folder in VS Code: **File → Open Folder**.

---

## Prerequisites

Before continuing, confirm you have the following:

- [ ] **VS Code** installed and this lab folder open as your workspace
- [ ] **GitHub Copilot extension** installed and signed in (`GitHub.copilot`)
- [ ] **GitHub Copilot Chat** panel accessible (click the chat icon in the Activity Bar, or press `Ctrl+Alt+I`)
- [ ] **Git** initialized in this folder (open the Source Control panel with `Ctrl+Shift+G` — if you see "Initialize Repository," click it before beginning)

---

## Lab Overview

This lab follows the four-step workflow from the course:

| Step | Activity | Mode | Time |
| --- | --- | --- | --- |
| **1** | Review raw materials and assess signal value | Independent | ~15 min |
| **2** | Use the agent to convert high-signal sources into structured context files | Agent mode | ~30 min |
| **3** | Ask the agent what context is missing, then update accordingly | Ask mode | ~10 min |
| **4** | Commit your changes using VS Code Source Control | VS Code UI | ~5 min |

---

## Folder Structure

```text
lab/
├── README.md                          ← You are here
├── signal-assessment.md               ← Step 1 worksheet
├── raw-materials/                     ← Source documents (do not edit these)
│   ├── 01 Marys Place Organization.md
│   ├── 02 Marys Place Current Challenges.md
│   └── 03 Intro Call with Marys Place.txt
├── context (ingestion)/
│   └── org/
│       └── README.md                  ← Target folder for your Step 2 output
├── reference (examples)/
│   └── briefs/
│       └── 01-healthcare-portal.md    ← Format exemplar
└── agents (system)/
    ├── README.md
    ├── prd-generator.agent.md         ← Referenced in Step 3
    └── prd-template.md
```

---

## Step 1: Signal Assessment

**Goal:** Build the habit of evaluating source materials *before* asking an AI to synthesize them.

### Instructions

1. Open `signal-assessment.md` in VS Code.
2. Briefly review each of the three files in `raw-materials/` — you do not need to read every word. Skim for structure, content type, and relevance.
3. For each file, fill in the three columns in the assessment table:
   - **Signal Rating:** `high-signal`, `maybe`, or `noise`
   - **Rationale:** 1–2 sentences explaining your rating
   - **Action:** What you plan to do with this file (e.g., "Distill into overview.md", "Extract tech opportunities section only", "Skip for now")
4. Answer the three reflection questions at the bottom of the worksheet.

### Tips

- A file can be `high-signal` even if it's messy or verbose — what matters is whether the *information inside* is decision-relevant.
- The transcript (`03 Intro Call...`) is long. You don't need to read it fully to assess it — skim the first and last 10% and a few sections in the middle.
- There are no wrong answers. The goal is to document your thinking before you involve the agent.

---

## Step 2: Context Ingestion

**Goal:** Use GitHub Copilot in Agent mode to produce three structured context files from your high-signal raw materials.

### Setup

1. Open the **GitHub Copilot Chat** panel (`Ctrl+Alt+I`).
2. In the dropdown at the top of the chat panel, set the mode to **Agent** (it may appear as a toggle or dropdown — look for "Agent" or a workspace/tools icon).
3. Make sure your workspace is open at the `lab/` folder level so the agent can reference relative paths.

> **What is Agent mode?** In Agent mode, GitHub Copilot can read files across your workspace and create or edit files directly. You are giving it permission to act — not just answer. Always review what it produces before moving on.
> **Format reference:** Before prompting, take a look at `reference (examples)/briefs/01-healthcare-portal.md` to see how a well-structured context document is organized. Your output doesn't need to match it exactly, but it sets a useful quality bar.

---

### Prompts

Here are some example prompts you can use to generate your first set of artifacts — (a) an overview, (b) a summary of the challenges, and (c) identifying the technology opportunities:

### Prompt 2a — Create `overview.md`

```text
Using `raw-materials/01 Marys Place Organization.md` as your only source, create a new file at `context (ingestion)/org/overview.md`. The file should be a clean, structured markdown summary of Mary's Place covering their mission, vision, values, and organizational goals. Use concise bullet points rather than prose paragraphs. The audience is a product team building software for this organization.
```

**After the agent runs:**

- Open `context (ingestion)/org/overview.md` and review the output.
- Check: Does it capture the key points accurately? Is anything missing or distorted?
- Make any manual corrections before continuing.

---

### Prompt 2b — Create `challenges.md`

```text
Using `raw-materials/02 Marys Place Current Challenges.md` as your only source, create a new file at `context (ingestion)/org/challenges.md`. Distill and organize the operational challenges by service area, preserving the key details but removing any redundancy. Use concise bullet points. The audience is a product team scoping a software solution for Mary's Place.
```

**After the agent runs:**

- Open `context (ingestion)/org/challenges.md` and review the output.
- Check: Are all four service areas represented? Are the most important pain points preserved?

---

### Prompt 2c — Create `tech-opportunities.md`

```text
Using `raw-materials/03 Intro Call with Marys Place.txt` as your only source, create a new file at `context (ingestion)/org/tech-opportunities.md`. Read the full transcript and extract the specific technology opportunities, product concepts, and system-related priorities that stakeholders mentioned. Focus on: proposed product solutions, pain points that suggest technology needs, existing technology relationships and constraints (e.g., Microsoft, Amazon), and any product ideas raised by name. Organize the output into clearly labeled sections using concise bullet points. The audience is a TPM preparing to scope a software initiative.
```

**After the agent runs:**

- Open `context (ingestion)/org/tech-opportunities.md` and review the output.
- Check: Does it capture the stakeholders' own language and framing, not just generic summaries? Are specific product concepts named?
- The transcript is long — the agent may miss details. Note anything you recall from skimming it that seems absent.

### Reflection: After Step 2

Before moving on, compare your three new context files against your `signal-assessment.md` notes:

- Did the agent's output match what you expected from each source?
- Did producing these files surface any surprises — information you hadn't noticed when skimming?

---

## Step 3: Gap Analysis

**Goal:** Use GitHub Copilot in Ask mode to identify what important context is still missing, then update your files accordingly.

### Switch to Ask Mode

1. In the Copilot Chat panel, switch the mode to **Ask** (conversational Q&A — the agent will not edit any files).
2. Make sure all three context files from Step 2 are saved.

### Prompt

Here's an example prompt:

```text
Given the files in `context (ingestion)/org/`, what important information about the Mary's Place project seems to be missing that would be helpful for a TPM planning a software initiative for this organization?
```

### What to Do With the Response

Read through the agent's suggestions. For each gap it identifies:

1. **If you can address it** from what you already know from the raw materials — open the relevant context file and add the missing information directly. You can ask the agent for help drafting specific additions.
2. **If it requires information you don't have** — add it as an open question. In the relevant context file, add a section at the bottom:

   ```markdown
   ## Open Questions
   - [Your question here]
   ```

3. **If the agent's suggestion doesn't apply** — note why in your mental model. Not every gap is worth filling for a first draft.

> **Tip:** You can ask follow-up questions. For example: *"Which of these gaps is most critical for scoping the intake system specifically?"* or *"What would a risk section in a PRD for this project most need to address?"*

---

## Step 4: Commit Your Work

**Goal:** Save your work to a local Git commit using VS Code's Source Control panel — mirroring how real TPM teams track context and artifact changes over time.

> **What is a local commit?** A commit saves a snapshot of your changes to your *local* Git repository (on your machine). It does **not** automatically publish anything to GitHub. Think of it like saving a version of your work that Git can track and that you could push to a shared repo later. For this lab, a local commit is all you need.

### Before You Start: Save Your Files

Git tracks saved file changes — **unsaved files will not appear in Source Control.**

- Press `Ctrl+S` (Windows) or `Cmd+S` (Mac) to save the current file.
- Or save all open files at once: **File → Save All** (`Ctrl+K S` on Windows).

Once your files are saved, proceed to the steps below.

### Steps

1. Open the **Source Control** panel with `Ctrl+Shift+G` (or click the branching icon in the Activity Bar on the left).

2. You should see your changed files listed under **Changes**. You're looking for your three new context files, your updated `signal-assessment.md`, and any edits from Step 3.

3. **Stage your changes:** Click the **`+`** icon next to each file you want to commit, or click the **`+`** next to the "Changes" header to stage everything at once. Staged files move to the **Staged Changes** section.

4. **Write a commit message** in the text box at the top of the Source Control panel. Choose a message that describes what you did. Examples:
   - `chore: complete signal assessment for Mary's Place raw materials`
   - `feat: add distilled context files for org overview, challenges, and tech opportunities`
   - `refine: add open questions from gap analysis`

5. **Commit** by clicking the **✓ Commit** button or pressing `Ctrl+Enter`.

6. After committing, the files should disappear from the Changes list — this means your snapshot was saved successfully to your local Git history.

> **Why this matters:** Meaningful commit messages create a readable history. Anyone who clones this repo later — including a future version of you — can see *why* these context files exist and what decisions led to them.

### Optional: Separate Your Commits

If you want to practice clean commit hygiene, you can stage and commit in two separate batches:

- **Commit 1:** Just `signal-assessment.md` — *"chore: complete signal assessment for lab exercise"*
- **Commit 2:** All three context files + any Step 3 edits — *"feat: add Mary's Place org context from raw materials"*

---

## Wrap-Up

You've now completed the core context ingestion workflow. Here's what you practiced:

| Skill | Where |
| --- | --- |
| Evaluating source quality before prompting | Step 1 |
| Writing specific, scoped Agent-mode prompts | Step 2 |
| Reviewing and correcting AI-generated output | Step 2 (post-prompt review) |
| Using Ask mode to surface blind spots | Step 3 |
| Iterating on context in response to agent feedback | Step 3 |
| Committing AI-assisted work with clear history | Step 4 |

### Going Further

If you finish early or want to extend the exercise:

- Ask the agent in Ask mode: *"Based on `context (ingestion)/org/challenges.md`, what are the top 3 riskiest assumptions a TPM might make when scoping an intake system for Mary's Place?"*
- Open `agents (system)/prd-generator.agent.md` and review what inputs it expects. How well does your current `context (ingestion)/org/` folder satisfy those requirements?
- Try running the PRD generator agent and see what it produces — or where it gets stuck due to missing context.

---

**Next:** [Section 04 — Backlog Creation](../section-04-lab-backlog-creation/README.md)
