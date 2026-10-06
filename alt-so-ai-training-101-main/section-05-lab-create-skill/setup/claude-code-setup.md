# Setup: Claude Code

> **Placeholder** — Setup instructions to be provided.

## Prerequisites

- [ ] Claude Code CLI installed (`npm install -g @anthropic-ai/claude-code` or equivalent)
- [ ] Anthropic API key or authentication configured
- [ ] Terminal access

## Lab-Specific Configuration

Skills in the `.claude/skills/` directory are automatically available in Claude Code. You can invoke them with:

```
/meeting-notes
/brief-builder
```

For file references, use the `@` syntax:

```
/meeting-notes @"context (ingestion)/transcripts/03 Intro Call with Marys Place.txt"
```

## Tips for This Lab

- Skills are auto-detected from the `.claude/skills/` directory — no manual registration needed
- Use `/` to see available skills
- Claude Code will read the SKILL.md automatically when a skill is invoked
- Git operations can be done conversationally: "Commit this with message '...'"
