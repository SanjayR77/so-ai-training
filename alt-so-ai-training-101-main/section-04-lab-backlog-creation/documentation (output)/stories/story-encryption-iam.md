---
title: "Encryption and IAM configuration for production"
parent_epic: "documentation (output)/epics/epic-security-privacy-hipaa.md"
summary: "Ensure TLS, at-rest encryption, Key Vault, and role-based access controls are configured."
owner: "security-team"
priority: "P0"
sprint: ""
story_points: 3
personas:
  - "CISO"
dependencies:
  - "epic-security-privacy-hipaa"
acceptance_criteria:
  - "As a CISO, I can verify that data in transit is encrypted with TLS 1.3 and at rest with AES-256."
  - "Key Vault is used for secrets and managed identities are enforced."
  - "RBAC policies restrict access to sensitive systems and logs."
tasks:
  - "Configure TLS and encryption settings across services"
  - "Integrate Azure Key Vault and managed identities"
  - "Define and apply RBAC roles and policies"
links:
  - "documentation (output)/epics/epic-security-privacy-hipaa.md"
---

As a CISO, I can verify encryption and IAM settings so that data protection controls meet compliance requirements.
