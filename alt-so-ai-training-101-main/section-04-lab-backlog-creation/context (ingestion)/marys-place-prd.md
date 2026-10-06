# Product Requirements Document
# Mary's Place — Family Navigation Assistant

**Version:** 1.0  
**Status:** Draft — For Training Use  
**Date:** April 2026  
**Author:** Solution Ownership Team  

---

## Executive Summary

Mary's Place is a Seattle-based nonprofit that operates emergency shelter and housing-stability programs for families experiencing homelessness in King County. Their three service lines — Emergency Shelter, Mobile Outreach, and Prevention — serve hundreds of families annually, but internal processes are heavily manual, fragmented across multiple teams, and unsupported by modern tooling.

The **Family Navigation Assistant** is a proposed AI-powered platform that transforms the family intake, journey planning, and case coordination experience at Mary's Place. The platform provides families with a personalized, multilingual digital guide through their path to stable housing — and gives case workers a unified view of family needs, progress, and next steps.

The initiative is scoped as a 12-month MVP development effort with three phased releases. The expected impact is a reduction in average shelter length of stay, improved staff efficiency in intake and coordination, and better housing outcomes for families — particularly those with complex, multi-barrier needs.

---

## 1. Problem Statement

### 1.1 Background

Mary's Place serves families at three stages of housing instability:

- **Emergency Shelter** — direct shelter for families, with case management across health, housing, and youth services teams
- **Mobile Outreach** — field-based services for families living in cars, tents, or other informal situations who are close to housing-readiness
- **Prevention** — rental assistance and stabilization support for families at imminent risk of losing their housing

The organization operates under sustained capacity pressure. The length of stay in emergency shelter has been increasing year-over-year, driven by housing affordability in King County and a surge in asylum-seeking families. With no room to expand bed capacity in the near term, reducing time-to-housing for families who are ready is the highest-leverage improvement available.

### 1.2 Core Pain Points

**Fragmented Intake Process**
Each family undergoes separate assessments conducted by distinct teams: the health team evaluates insurance and behavioral health needs; the housing team assesses credit, debt, barriers, and income; the youth services team navigates schooling and transportation. These assessments are sequential, poorly coordinated, and duplicative. There is no single tool that synthesizes a family's situation into a prioritized action plan.

**No Journey Mapping or Timeline Visibility**
Families have no view of their path through shelter. Staff cannot estimate length of stay or sequence complex next steps. Promising actions that take months to complete — like resolving credit issues or applying for housing vouchers — are not started early because there is no structured process to identify and sequence them.

**Legacy Case Management System**
The existing database was described by staff as "1990s-era SQL." It is clunky, requires double data entry into the county-wide HMIS (Homelessness Management Information System), has no integration with external systems, and does not support modern workflows. Staff share and navigate it daily despite its limitations.

**Language and Cultural Barriers**
At any point in time, Mary's Place serves families speaking between 4 and 8 different languages, with a full service range requiring support across 12–15 languages. Current intake and communication processes are not designed to accommodate this effectively.

**Goods Distribution Gaps**
Mobile outreach and prevention families have limited or no access to donated goods. There is no inventory management system — tracking is done by manual bin counts — and corporate donations cannot be targeted effectively because real-time needs data does not exist.

### 1.3 Opportunity Statement

A structured, AI-assisted navigation experience could reduce the administrative overhead of intake, help families and staff prioritize the right actions at the right time, surface estimated housing timelines, and coordinate seamlessly across the health, housing, and youth teams that touch each family. Done in multiple languages, this tool could extend the impact of limited staff capacity to more families.

---

## 2. Goals and Success Criteria

### 2.1 Strategic Goals

1. **Reduce average shelter length of stay** by improving early identification of barriers and sequencing of interventions
2. **Reduce intake coordination overhead** for case workers by centralizing family information and generating structured action plans
3. **Improve housing readiness outcomes** by surfacing time-sensitive steps and ensuring they are started early
4. **Extend service quality** to families across language barriers through multilingual support
5. **Establish a data foundation** for capacity planning, outcome tracking, and future integrations with county systems

### 2.2 Success Criteria

| Metric | Baseline | Target (12-month post-launch) |
|---|---|---|
| Average shelter length of stay | ~180 days (est.) | Reduce by 15% |
| Intake time per family (staff hours) | ~4.5 hours across teams | Reduce by 30% |
| Families with structured housing plan within first 3 days of intake | ~20% | 80% |
| Staff satisfaction with case coordination tools | 3.1/5 (est.) | 4.0/5 |
| Languages supported at intake | 2–3 | 10+ |
| Families reporting understanding of their housing timeline | Not measured | 70% agree or strongly agree |

### 2.3 Out of Scope (MVP)

- Replacement of the existing HMIS database
- Real-time integration with the King County HMIS system
- Goods inventory management and donation targeting (separate initiative)
- Family-facing mobile app (web-first for MVP; mobile-responsive but not native)
- Automated referrals to external housing providers

---

## 3. User Personas

### 3.1 Primary Personas

**Persona 1: The Family in Shelter**
> *"I don't know what I'm supposed to do next. Everyone tells me something different."*

- **Profile:** A family of 3–5 members in emergency shelter, including at least one child. May speak English as a second language. Overwhelmed by the number of steps, teams, and systems involved.
- **Needs:** Clear, step-by-step guidance in their language; a sense of progress and timeline; a single place to track what they've done and what comes next
- **Pain points:** Attending multiple intake meetings with different teams; not knowing why they're being asked the same questions repeatedly; uncertainty about how long shelter stay will last
- **Goal:** Return to stable, permanent housing as quickly as possible

**Persona 2: The Housing Case Worker**
> *"I spend half my time tracking down information that should already be in the system."*

- **Profile:** Full-time Mary's Place staff member managing an active caseload of 15–25 families. Coordinates with health, youth services, and housing placement teams.
- **Needs:** A consolidated view of each family's status, barriers, and next steps; alerts when time-sensitive actions are approaching; less duplicated data entry
- **Pain points:** Legacy system is slow and clunky; same questions are asked by different teams with no shared record; no easy way to see which families are "stuck" and why
- **Goal:** Move families to housing faster while providing consistent, high-quality support

### 3.2 Secondary Personas

**Persona 3: The Program Manager**
> *"I can't tell how long families are staying or why. I'm managing blind."*

- **Profile:** Senior leader overseeing one or more service lines. Responsible for capacity, outcomes, and reporting to funders.
- **Needs:** Aggregate views of family census, length-of-stay trends, bottleneck identification, and housing outcome rates
- **Goal:** Identify systemic inefficiencies and demonstrate impact to funders

**Persona 4: The Mobile Outreach Specialist**
> *"I know this family is close to housing-ready, but I have no way to build them a plan."*

- **Profile:** Field-based staff member working with families outside of shelter. Less connected to central systems.
- **Needs:** Access to the family navigation tool in the field, on mobile; ability to document outreach contacts and link families to resources
- **Goal:** Support families from first contact to shelter intake or direct-to-housing placement

---

## 4. Functional Requirements

### 4.1 Family Intake and Assessment

| ID | Requirement | Priority |
|---|---|---|
| FR-01 | The system shall provide a structured, conversational intake flow that captures family composition, immediate health needs, housing history, financial situation, and current barriers | Must Have |
| FR-02 | Intake questions shall be presented in the family's preferred language, selected at session start (minimum 10 languages at launch) | Must Have |
| FR-03 | The system shall synthesize intake responses into a structured family profile accessible to all assigned case workers | Must Have |
| FR-04 | The system shall identify when a family has already completed intake to prevent duplicate assessments | Must Have |
| FR-05 | The intake flow shall be resumable across sessions — a family can complete intake over multiple interactions | Should Have |
| FR-06 | The system shall flag responses that indicate high-urgency needs (e.g., active health crisis, immediate safety concern) and alert case workers | Must Have |

### 4.2 Journey Planning and Housing Roadmap

| ID | Requirement | Priority |
|---|---|---|
| FR-07 | The system shall generate a personalized housing journey roadmap for each family, organized by phase (stabilize, address barriers, prepare for housing, housing placement) | Must Have |
| FR-08 | Each roadmap shall include estimated timelines for key milestones based on family-specific barriers and local housing availability context | Should Have |
| FR-09 | The roadmap shall identify and surface time-sensitive actions — steps that take longest to complete — to ensure they are initiated early | Must Have |
| FR-10 | Families and case workers shall be able to mark steps as complete and add notes | Must Have |
| FR-11 | The system shall notify case workers when a family has not made progress on a time-sensitive step for more than 7 days | Should Have |
| FR-12 | The roadmap shall be viewable and editable by all team members assigned to the family (housing, health, youth services) | Must Have |

### 4.3 Case Worker Coordination Interface

| ID | Requirement | Priority |
|---|---|---|
| FR-13 | Each case worker shall have a dashboard view showing their active caseload, each family's current phase, and any pending actions | Must Have |
| FR-14 | Case workers shall be able to view a full timeline of interactions and updates for any family on their caseload | Must Have |
| FR-15 | Case workers shall be able to assign tasks to colleagues and track completion | Should Have |
| FR-16 | The system shall support internal notes that are visible to staff but not families | Must Have |
| FR-17 | The system shall allow program managers to view aggregate caseload data, average time-in-phase, and housing outcome rates | Should Have |

### 4.4 Language and Accessibility

| ID | Requirement | Priority |
|---|---|---|
| FR-18 | All family-facing content shall be available in at minimum 10 languages at launch, with a path to 15 within 18 months | Must Have |
| FR-19 | The system shall allow families to switch their language preference at any point | Must Have |
| FR-20 | The intake conversational interface shall use plain language appropriate for reading levels of 6th grade or below | Must Have |
| FR-21 | The interface shall meet WCAG 2.1 AA accessibility standards | Should Have |

### 4.5 Data and Integration

| ID | Requirement | Priority |
|---|---|---|
| FR-22 | Family records shall be exportable in a format compatible with HMIS for manual reconciliation (CSV or XML) | Must Have |
| FR-23 | The system shall support single sign-on (SSO) via Microsoft Azure AD (existing org identity provider) | Must Have |
| FR-24 | The system shall maintain a complete audit log of all record accesses and changes | Must Have |
| FR-25 | Real-time bidirectional HMIS integration | Won't Have (MVP) |

---

## 5. Non-Functional Requirements

| Category | Requirement |
|---|---|
| **Availability** | 99.5% uptime during business hours (6am–10pm PT); scheduled maintenance windows Sunday 2am–4am |
| **Performance** | Intake session loads in < 2 seconds; roadmap generation completes in < 5 seconds |
| **Security** | All family data encrypted at rest and in transit; access control by role (family, case worker, program manager, admin) |
| **Privacy** | Compliant with Washington State privacy law (RCW 19.255); family data is not used for model training without explicit consent |
| **Scalability** | Support up to 2,000 active family records concurrently at MVP launch |
| **Data Retention** | Family records retained for 7 years post-housing placement per funder requirements |

---

## 6. Technical Considerations

### 6.1 Recommended Architecture

Mary's Place currently has a relationship with Microsoft and uses Microsoft 365 for staff communication and identity. The recommended approach aligns with this existing infrastructure:

- **Identity:** Azure Active Directory for staff SSO; guest/PIN-based access for families
- **Application Hosting:** Azure App Service (web-first, mobile-responsive)
- **Data Store:** Azure SQL Database or Cosmos DB for family records and roadmap state
- **AI/Language:** Azure OpenAI Service for conversational intake flow and roadmap generation; Azure Cognitive Services Translator for real-time multilingual support
- **File Storage:** Azure Blob Storage for documents and exports
- **Monitoring:** Azure Monitor + Application Insights

### 6.2 Integration Surface

| System | Integration Type | Priority |
|---|---|---|
| Microsoft 365 / Azure AD | SSO for staff | Must Have |
| HMIS (King County) | Export-only at MVP; evaluate real-time sync post-MVP | Must Have |
| Existing internal database | Read-only data migration at launch; replace over time | Should Have |
| Translation services | Real-time via Azure Translator or equivalent | Must Have |

### 6.3 Risks and Constraints

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Family trust and digital literacy barriers reduce adoption | High | High | Conduct co-design sessions with families; offer staff-assisted onboarding mode |
| Legacy database lacks APIs for data migration | Medium | High | Plan manual data migration sprint; do not depend on automated sync at launch |
| Staff resistance to changing intake workflow | Medium | Medium | Involve case workers in UX design; pilot with one team before full rollout |
| Translation quality insufficient for safety-critical content | Medium | High | Human review of all safety-flagging content; add disclosure that AI translation should be confirmed by bilingual staff for critical decisions |
| Azure cost overruns as family record volume grows | Low | Medium | Set usage alerts; architect for cost-efficient storage tiering |

---

## 7. Implementation Approach

### 7.1 Phasing

**Phase 1 — Intake & Profile (Months 1–4)**
- Conversational intake flow (English + 5 languages)
- Family profile creation and case worker view
- Staff dashboard with caseload overview
- Azure AD SSO for staff

**Phase 2 — Journey Planning (Months 5–8)**
- Housing roadmap generation
- Step completion tracking and case worker alerts
- Team coordination (shared tasks, cross-team notes)
- Expand to 10 languages

**Phase 3 — Analytics & Integration (Months 9–12)**
- Program manager reporting dashboard
- HMIS export capability
- Legacy data migration tools
- Expand to 15 languages
- Mobile-responsive optimizations

### 7.2 Rollout Strategy

- **Pilot:** One shelter location, 2–3 case workers, 20–30 families over 6 weeks (end of Phase 1)
- **Feedback loop:** Weekly check-ins with pilot staff; bi-weekly family feedback sessions (facilitated with translator)
- **Expand:** Full shelter staff rollout after successful pilot
- **Mobile Outreach:** Phase 2 expansion after shelter workflow is stable

---

## 8. Open Questions

| # | Question | Owner | Status |
|---|---|---|---|
| OQ-01 | What is the current family consent/data sharing policy? Does a new system require updated consent forms? | Jason Gortney / Legal | Open |
| OQ-02 | Who owns HMIS compliance and what are the export format requirements? | Mike Kamola | Open |
| OQ-03 | Is there a preference for a vendor product vs. custom build? What is the organization's capacity to maintain software long-term? | Mike Kamola / Board | Open |
| OQ-04 | What is the realistic budget envelope for this initiative? Is funder support available specifically for technology? | Mike Kamola | Open |
| OQ-05 | How will families without a smartphone or reliable internet access interact with the tool? Is there a kiosk/staff-assisted mode needed? | Jason Gortney / UX Research | Open |
| OQ-06 | Are there existing journey maps or service blueprints for the shelter intake process we can build the roadmap logic from? | Jason Gortney | Open |

---

## Appendix A: Glossary

| Term | Definition |
|---|---|
| **HMIS** | Homelessness Management Information System — the county-wide database used to track all homelessness services in King County |
| **Housing Voucher** | A subsidy (e.g., Section 8) that reduces family rent to an affordable level; often has long wait times |
| **Length of Stay (LOS)** | The number of days a family remains in emergency shelter before exiting to stable housing |
| **Roadmap** | In this document, a family-specific, step-sequenced plan for reaching housing stability |
| **HMIS Double Entry** | The current practice of entering family data into both the Mary's Place internal system and HMIS separately |

---

*This PRD was created for training purposes as part of the Solution Ownership AI Enablement program. The product described is a forward-looking proposal based on discovery materials from an actual introductory call with Mary's Place staff in November 2025.*
