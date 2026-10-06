# Agents Folder

This folder contains AI agent configuration files used in this lab.

## Available Agents

### PRD Generator (`prd-generator.agent.md`)

A configured AI agent that generates comprehensive Product Requirements Documents (PRDs) for Mary's Place software initiatives. It reads organizational context and product briefs, validates completeness, and outputs a structured PRD into the `documentation (output)/` folder.

This agent is **not invoked directly** during the main lab steps. Instead, you will reference it in **Step 3** to help identify what context information would be needed to run it successfully — which in turn surfaces gaps in your current context files. It is also available as an **optional extension** in the *Going Further* section of the README.

### PRD Template (`prd-template.md`)

A detailed annotated Markdown template showing the full structure of a Mary's Place PRD. Useful as a reference for understanding what a complete set of context inputs needs to support.

---

> **For Step 3:** Ask GitHub Copilot in Ask mode: *"Given the files in `context (ingestion)/org/`, what important information about the Mary's Place project seems to be missing that would be helpful for a TPM planning a software initiative for this organization?"*
