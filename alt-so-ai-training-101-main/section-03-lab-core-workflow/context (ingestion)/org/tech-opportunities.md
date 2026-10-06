# Technology Opportunities and System Priorities

## Family Intake and Housing Journey
- **Current workflow and pain points:** Health, housing, and youth-services teams conduct separate assessments. A housing specialist acts as the family's central navigator, and teams share goals in a clunky internal data system.
- **Proposed concept, not yet validated:** Jason described a “shelter virtual advocate” that could gather information at the family's pace, prioritize complex needs into manageable steps, and suggest timing for those steps.
- A proposed journey plan could include a flexible estimate of the path to housing. Stakeholders stressed that families' needs vary and that this should not impose a fixed shelter stay limit.
- **Language need raised:** At a given time, families represent roughly 4-8 languages and cultural backgrounds; stakeholders estimated 12-15 languages could cover the broader range. Familiar communication styles were also raised as important.
- **Potential benefits raised, not measured:** Make the journey easier to understand, build families' skills for tackling complex problems, improve shelter throughput, and support internal capacity-and-demand forecasting.

## Goods Inventory, Requests, and Distribution
- **Current workflow and pain points:** Shelter guests can shop at shelter marketplaces, but outreach and prevention do not have an equivalent distribution process. Non-shelter requests are often made by phone and filled with whatever is available.
- Stakeholders said mobile outreach serves about half of the people Mary's Place serves. Families moving into housing may give only a few days' notice, though lead time varies.
- Only about 15-20% of donated items are usable by Mary's Place families. Inventory is not managed in an information system: staff count categories in bins for audit valuation, rather than tracking items by SKU or barcode; donated food is measured by weight.
- **Proposed system priority, not yet validated:** Coordinate supply and demand across shelter, outreach, and prevention through centralized, streamlined information flow; stakeholders described systematizing the process rather than simply automating it.
- Stakeholders raised giving families or staff access to inventory information or a way to submit requests early enough to source needed goods. Better matching could connect actual family needs to available inventory and support fulfillment after move-in when items are not immediately available.
- A physical **marketplace** for outreach and prevention families was discussed alongside inventory/request access. It could complement the existing shelter marketplace model, but no solution was selected.
- Coordinate, if appropriate, with **Make a Home**, the existing program in which a staff member sources household items for families moving into housing across shelter, outreach, and prevention.
- Better needs information could help target corporate donations, distinguish useful items from surplus, and route surplus to other community organizations. Current Amazon wish lists are generic; outreach offices also have limited storage.

## Current Systems and Data Constraints
- Mary's Place uses a shared internal client data system across teams; staff can see family goals and work by other teams. The current application is an old, open-source SQL database model, customized in-house, and described as clunky and dated.
- Staff manually enter basic client demographics into the county-wide Homelessness Management Information System (HMIS) as well as the internal system. There is no integration; HMIS receives minimal demographic information, not individual goals.
- Stakeholders said no external parties have access to client goals in the internal system.
- Internal IT primarily manages hardware and software contracts. A data team stewards collection, analysis, evaluation, the existing system, queries, and reports.
- Inventory processes are shaped partly by financial audit requirements to count and value received, consumed, distributed, and disposed in-kind goods.

## Technology Relationships and Constraints
- Mary's Place is Microsoft-grounded, using Windows and Microsoft Office, and is training and experimenting with Microsoft Copilot. Current Copilot work includes basic HR chatbot use cases for benefits, the employee handbook, and policies.
- Stakeholders said they do not have a sophisticated Azure cloud-based technology stack. Whether infrastructure is deployed in AWS was unknown to participants.
- Mary's Place has a close relationship with Amazon. Amazon Legal works with law firms providing pro bono support; Amazon also built a family shelter on its campus.
- A prior pro bono effort involving Amazon contacts and a law firm produced a multilingual, trauma-informed chatbot that walked asylum-seeking families through complex applications. It reduced attorney meetings from about four hours to one hour. The law firm owns the tool; Mary's Place does not manage it, and stakeholders said the asylum paperwork need that prompted it had since passed.

## Named Concepts and Desired Outcome
- **“Shelter virtual advocate”** is Jason's tentative name for the family intake and journey-support idea, not an approved product requirement.
- **Make a Home** is an existing household-goods sourcing program that a goods system could coordinate with.
- Shelter **marketplaces** are an existing distribution model; a facility-based version for outreach and prevention was proposed, not selected.
- Stakeholders said a prototype or sufficiently developed concept to discuss and explore funding would be useful. They welcomed follow-up conversations with care-coordination and goods-intake/distribution staff.

## Validation and Open Questions
These are follow-up questions from the signal assessment, not requirements confirmed by stakeholders:
- **Prioritization and scope:** Which opportunity should be explored first? What is the MVP, funding timeline, and decision process for moving from prototype to implementation?
- **Family journey workflow:** What are the detailed steps, handoffs, exceptions, and current wait times across health, housing, and youth services? Should a tool provide information, recommendations, or prioritization, and what decisions must remain with staff or families?
- **Goods workflow:** How do donation intake, sorting, inventory, family requests, fulfillment, and surplus redistribution work end to end? How is a usable item defined, and who requests, approves, and fulfills orders?
- **Users and access:** Which families and staff roles will use each capability? What device, connectivity, accessibility, language, and communication-style needs should be supported?
- **Privacy and governance:** What consent, role-based access, audit, data retention, and applicable legal safeguards are required for sensitive family information? Who owns the data and the product?
- **Systems and integration:** What versions, interfaces, hosting, and data-quality constraints apply to the internal client system and HMIS? Which integrations are priorities, and what technical environment can Mary's Place support?
- **Success measures:** What baselines and target outcomes should be used, such as intake effort, time to housing, family progress, inventory accuracy, usable-donation rate, fulfillment time, or unmet demand?
- **Operations:** Who will fund, maintain, support, and train users on a solution after a prototype? What responsibilities belong to Mary's Place, partners, and vendors?
- Validate these questions with families and frontline care-coordination and goods-intake/distribution staff before setting scope.
