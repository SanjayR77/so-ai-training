---
title: "Security & Privacy (HIPAA, PHI Detection)"
summary: "Protect data, detect and redact PHI, enforce RBAC, and meet HIPAA requirements."
owner: ""
priority: "P0"
phase: "Phase 1 (Pilot)"
personas:
  - "CISO"
okrs:
  objective: "Prevent PHI exposure and pass security audits."
  key_results:
    - description: "PHI/PII detection and redaction implemented"
      target: "0 incidents of PHI persisted in pilot logs"
      timeframe: "Pilot"
business_value: "Reduces legal and compliance risk enabling regulated deployment."
success_metrics:
  - "hipaa_compliance_checks_passed"
regulatory_requirements:
  - "HIPAA compliance; BAA with vendor(s)"
security_considerations:
  - "Encrypt data in transit and at rest; MFA and SSO"
dependencies:
  - "PII detection service, Azure Key Vault, IAM"
estimated_effort: "2 sprints"
monitoring_metrics:
  - "pii_detection_count"
acceptance_criteria:
  - "PHI detection and redaction enforced before any logging or analytics."
  - "Encryption and IAM properly configured; passes security audit."
out_of_scope:
  - "Processing of PHI for analytics without explicit controls"
stakeholders:
  - "CISO"
links:
  - "context (ingestion)/medical-device-support-agent-prd.md"
---

**Human-readable Summary**

Implement technical and procedural controls to prevent PHI persistence, ensure encryption, and satisfy HIPAA and corporate security requirements.
