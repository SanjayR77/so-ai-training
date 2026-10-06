# ALT SO AI Training 101 (Lab Materials)
This repository contains hands-on lab materials for the Solution Ownership AI Enablement training program. Its purpose is to help Solution Owners develop practical skills for leading AI-enabled product teams throughout the product delivery lifecycle.

The repository is organized as five sequential sections — one mindset primer followed by four hands-on labs — that build competency progressively from environment setup through reusable workflow packaging.

---

## 📚 Curriculum Syllabus

Each section builds on the previous. Complete them in order.

### **Section 01: Adaptive Mindset**
**No lab** | **Primer**

A short reframe before the tooling and techniques. Covers the mindset shift that separates effective AI-assisted product leaders from those who produce polished but shallow output.

**Key ideas:** You are the director, AI is your collaborator. Front-load judgment. Review like an editor. Iterate in public.

---

### **Section 02: Lab - Core Tooling Setup**
**Duration:** 60 minutes | **Foundation Layer**

Establish the development environment and tools you'll use throughout the program.

- **Lab: VS Code, Git, and GitHub Copilot Setup**
  - Install and configure Visual Studio Code
  - Initialize Git and understand version control basics
  - Authenticate and activate GitHub Copilot
  - Verify your AI assistant is working locally

**Outcome:** Working development environment with GitHub Copilot integrated and ready for AI-assisted workflows.

---

### **Section 03: Lab - Core Workflow**
**Duration:** 60 minutes | **Workflow Layer**

Learn the foundational workflow for converting raw project materials into structured context for AI processing.

- **Lab: Context Ingestion & AI-Assisted Synthesis**
  - Step 1: Signal Assessment — evaluate source documents for decision-relevance
  - Step 2: Context Ingestion — use GitHub Copilot Agent mode to synthesize high-signal materials into structured context files
  - Step 3: Gap Identification — use Ask mode to identify missing context and refine
  - Step 4: Version Control — commit artifacts using VS Code Source Control

**Outcome:** Three structured context files (overview, challenges summary, technology opportunities) from raw Mary's Place discovery materials, versioned in Git.

---

### **Section 04: Lab - Backlog Creation**
**Duration:** 90–120 minutes | **Backlog Planning Layer**

Transform a product requirements document into an actionable engineering backlog — epics and user stories with proper scope, acceptance criteria, and traceability.

- **Templates & Patterns**
  - Epic template structure with scope, requirements, and success metrics
  - User story template with acceptance criteria and compliance notes

- **Authoring from Source**
  - Extract epics from major capability areas in the PRD
  - Create user stories tied to personas and scenarios
  - Maintain citations back to source requirements
  - Organize by feature area and priority

- **Provided Materials**
  - A complete Mary's Place PRD to work from (Family Navigation Assistant)
  - Example epics and stories demonstrating format and level of detail

**Outcome:** A complete, structured product backlog with epics and stories ready for sprint planning and development.

---

### **Section 05: Lab - Create Skill**
**Duration:** 90–120 minutes | **Skill Development Layer**

Build reusable, packaged workflows that extend your AI assistant's capabilities for your team's specific processes.

- **Part 1: Using Skills**
  - Experience the brief-builder skill end-to-end with real Mary's Place content
  - Understand skill architecture (SKILL.md, references, templates)
  - Learn natural language triggering

- **Part 2: Customizing Skills**
  - Adapt an existing skill to your team's workflow
  - Modify instructions and add project-specific references

- **Part 3: Creating Skills**
  - Identify a repeatable workflow from your own work
  - Package it as a skill using the skill-creator
  - Test, iterate, and commit

**Outcome:** Working skills you can use on your own projects — a customized version of an existing skill and a new skill built from scratch.

---

## 🎯 Learning Progression

```
Mindset → Tooling → Workflow → Backlog → Skills
  Sec 01   Sec 02    Sec 03    Sec 04    Sec 05
```

Each section builds on the previous:
- **Section 01** sets the mindset
- **Section 02** gives you the tools
- **Section 03** teaches the core workflow
- **Section 04** applies the workflow to backlog creation
- **Section 05** packages everything into reusable team workflows

---

## 🚀 How to Use This Training

1. **Complete sections sequentially** — each builds on prior knowledge
2. **Use the provided examples** — each lab includes reference materials to follow if you don't have your own project
3. **Apply to a real project** — every lab supports bringing your own materials; working from real context produces more useful output
4. **Create artifacts you'll use** — each lab produces deliverables for your actual product work
5. **Build workflows the team can share** — the final lab creates packaged skills for your whole team

---

## 📁 Repository Structure

```
section-01-adaptive-mindset/             → Mindset primer (no lab)
section-02-lab-core-tooling-setup/       → Dev environment & GitHub Copilot
section-03-lab-core-workflow/            → Signal assessment & context synthesis
section-04-lab-backlog-creation/         → Epic and story creation from PRD
section-05-lab-create-skill/             → Building reusable team skills
```

---