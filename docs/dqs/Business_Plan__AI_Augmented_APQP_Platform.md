# Business Plan: AI-Augmented APQP Platform

---

## Document Purpose & Usage

**What this is:** A concrete business plan derived from the strategic analysis (AI_Augmented_Quality_Frameworks__Strategic_Analysis.md) and grounded in the team's actual starting conditions (Dynamic Key Business Variables v2). Every projection is traceable to a stated variable or assumption.

**How to use it:**
- `[VAR #X]` tags reference specific variables from the Business Variables document
- `[FROM SA §X]` tags reference sections of the Strategic Analysis document
- `[ASSUMPTION]` tags mark claims that need validation
- Financial projections use conservative/base/optimistic ranges where uncertain
- When any input variable changes, trace forward through this plan and update affected projections

**Document Version:** 1.0
**Created:** 2026-02-25
**Dependencies:** Strategic Analysis (Sections 1-5), Business Variables v2
**Contributors:** Claude (analysis), Team (inputs and validation)

**Relationship to other documents:** This is Section 7 in the dependency tree of the Strategic Analysis document. It depends on the Business Variables document for all ground-truth inputs (team, capital, pilots, market data) and on the Strategic Analysis for strategic framing (AI patterns, cross-industry logic, game theory positioning). When any Business Variable changes, trace the impact using the Variable-to-Section map in the Strategic Analysis Appendix A.5.

---

## 1. Executive Summary

**The opportunity:** The global APQP software market is $1.23B (2024) growing at 10.7% CAGR, with Asia Pacific as the fastest-growing region at 13-15.8% CAGR `[VAR #7]`. Excel remains the dominant tool for FMEA and APQP at most Tier 1/2 suppliers. No competitor combines deep APQP domain expertise + AI + supply chain network effects `[VAR #8]`. The AIAG-VDA FMEA Handbook implementation deadline of January 2027 creates urgent supplier adoption pressure `[VAR #11]`.

**The team:** A rare combination of AI architecture expertise (A), OEM marketing and procurement (B), OEM development and customer network (C), and supplier-side APQP execution (D) `[VAR #1]`. The team spans both sides of the OEM-supplier relationship — a structural advantage that is extremely difficult to replicate `[FROM SA §5.4]`.

**The starting position:** Four non-competing Tier 1 automotive fuel system suppliers as pilot customers, with Pilot A offering ~50 new projects/year from high-end OEM customers. Zero cash, sweat equity only, ~2 FTE equivalent capacity `[VAR #1, #2, #3]`.

**The plan:** Bootstrap through AI-assisted consulting services (Year 1-2), prove the technology on real projects, productize into a platform (Year 2-3), scale through the automotive supply chain (Year 3-5), and expand cross-industry (Year 5+). Revenue from service before product. Target: $10M ARR by Year 4, path to $2B+ valuation by Year 10 `[VAR #16]`.

---

## 2. Value Proposition

### 2.1 The Problem (Supplier Perspective)

Tier 1 automotive suppliers face compounding pressures:

- **FMEA transition deadline:** January 2027 requires full adoption of AIAG-VDA 7-step FMEA methodology with Action Priority replacing RPN `[VAR #11]`. Most suppliers are still using Excel-based FMEAs in the old format.
- **Rising quality requirements:** OEMs continue to tighten PPAP, capability, and traceability requirements.
- **APQP burden:** A single new product program generates 20+ deliverables across 5 gates, with complex interdependencies `[FROM SA §2]`. Quality engineers spend the majority of their time on documentation rather than actual quality improvement.
- **Knowledge loss:** Experienced APQP practitioners are retiring. The knowledge embedded in their judgment — which failure modes to watch for, how to set appropriate controls, when a process is truly capable — is walking out the door.
- **Disconnected tools:** FMEA in Excel, control plans in Word, SPC in separate software, PPAP assembled manually. No system manages the interactions between deliverables.

### 2.2 The Solution

**AI-augmented APQP execution** — not a software tool, but a system that combines domain expertise with AI to:

1. **Parse and structure OEM requirements** from RfQ documents, drawing packages, and customer-specific requirements — the starting point of every program (AI Pattern P1) `[FROM SA §3.4]`
2. **Generate initial FMEA content** from historical data, drawing features, and material/process knowledge — then refine with the cross-functional team (Pattern P2)
3. **Maintain dynamic linkages** between DFMEA → PFMEA → Control Plan → Work Instructions → Special Characteristics — ensuring consistency automatically (Pattern P4)
4. **Optimize control plans** based on risk levels and demonstrated capability — right inspection for the right risk (Pattern P3, P5)
5. **Close the feedback loop** from production quality data and field complaints back to FMEAs and control plans (Pattern P7)

### 2.3 Differentiation

| vs. Competitor | Our Advantage |
|---|---|
| **Excel** (status quo) | AI-driven content generation, automated linkages, AIAG-VDA 7-step compliance |
| **APIS IQ-FMEA / Sphera** (legacy) | AI-native, lower cost, not enterprise-heavy. Covers full APQP matrix, not just FMEA |
| **Praxie** (AI entrant) | Deep domain expertise vs. shallow automation. Built by people who actually run APQP programs |
| **PLM-embedded FMEA** (Teamcenter etc.) | Focused and affordable for Tier 1/2 without PLM budget. AI-first, not AI-added |

---

## 3. Go-to-Market Strategy

**Reasoning context:** The phase sequencing is driven by three hard constraints from the Business Variables: (1) zero cash means revenue must precede product investment — service first, platform second; (2) AI feasibility is unvalidated on real data — Pilot A is the proving ground, not a market launch; (3) fractional team (~2 FTE) means everything must be sequenced, not parallelized. The transition triggers between phases are defined by outcomes, not calendar dates — if Phase 1 takes 18 months instead of 12, the plan stretches but the logic doesn't change. The expert identified Pilot A formal commitment as the single point of failure — without real project data, all AI prototypes remain experience-based and unvalidated.

### 3.1 Phase Model

The plan is structured in three phases, each with a clear transition trigger — not a timeline. The timeline estimates assume things go well; the triggers define what "well" means.

**Phase 1: Service + Validate (Months 0-12)**

Revenue model: Consulting + AI-assisted service, charged per project or deliverable.

| Activity | Description | Success Metric |
|---|---|---|
| **Pilot A activation** | Secure formal LOI. Gain access to real project data. C engages Pilot A CEO directly `[VAR Pilot A]`. | Formal commitment, data access granted |
| **RfQ parser validation** | Test draft RfQ parser on Pilot A's actual RfQ documents `[VAR #9]`. | Parser extracts requirements accurately on ≥3 real RfQs |
| **FMEA AI validation** | Test FMEA generation on Pilot A's actual product/process data `[VAR #9]`. | AI-generated FMEA rated "useful starting point" by Pilot A quality engineers |
| **First paid project** | Execute a complete APQP deliverable set (or subset) for one Pilot A program, AI-assisted. | Revenue. Client satisfaction. Measurable time savings vs. their current process. |
| **Process documentation** | Document the workflow, tools, and methods that worked. This becomes the operating playbook. | Repeatable process for next project |
| **Pilot B engagement** | Demonstrate results from Pilot A. Offer similar service to Pilot B `[VAR Pilot B]`. | Pilot B commits to first project |

**Transition trigger to Phase 2:** ≥5 completed projects across ≥2 pilots. Validated AI tools. Documented, repeatable process. Revenue covering at least team variable costs.

**Phase 2: Productize + Scale (Months 12-30)**

Revenue model: Transitions from pure service to service + tool license. Tool captures the workflows and AI models validated in Phase 1.

| Activity | Description | Success Metric |
|---|---|---|
| **Platform MVP** | Build minimum viable platform encoding the validated workflows: RfQ parsing → FMEA → Control Plan → linkage management. | Working software used by ≥2 pilots |
| **Pilots C & D engagement** | These lower-maturity pilots `[VAR Pilots C, D]` need the uplift most — and prove the tool works for companies with poor current APQP discipline. | Pilots C/D onboarded, paying |
| **FMEA transition service** | Package the Jan 2027 AIAG-VDA FMEA migration as a specific offering `[VAR #11]`. Market to suppliers beyond the 4 pilots. | First non-pilot customer acquired |
| **Network effect activation** | Multiple suppliers sharing a common customer's requirements through the platform. Common OEM inputs structured once, used by all. | ≥2 suppliers connected to common OEM requirements |
| **Revenue target** | Build toward sustainable revenue that justifies increased team commitment. | €200-400K annual revenue |

**Transition trigger to Phase 3:** Working platform. ≥10 paying customers. Revenue trajectory supporting full-time commitment from at least 2 team members.

**Phase 3: Scale + Expand (Months 30-60+)**

Revenue model: Platform subscription (SaaS) + premium consulting for complex implementations.

| Activity | Description | Success Metric |
|---|---|---|
| **Geographic expansion** | ASEAN automotive cluster (Thailand, Indonesia, Vietnam) → India → potentially EU/US `[VAR #5]`. | Customers in ≥3 countries |
| **Cross-industry expansion** | Aerospace (AS13100 — nearest neighbor) → Medical devices → Industrial equipment `[FROM SA §4.2]`. | First non-automotive customer |
| **Funding (if needed)** | ASEAN-focused VC or US/EU entity for Western investors `[VAR #14]`. AI manufacturing is a recognized investor-interest area. | Seed round if growth requires capital ahead of revenue |
| **Standards influence** | Demonstrate working AI-augmented APQP. Engage AIAG/VDA working groups `[FROM SA §5.2 Dynamic 5]`. | Invited to standard revision working group or advisory role |
| **$10M ARR target** | Year 4-5 milestone toward long-term valuation goal `[VAR #16]`. | $10M ARR |

### 3.2 Why This Sequence

The sequencing reflects three constraints:

1. **Zero cash** `[VAR #2]` — must generate revenue before building product. Service first, product second.
2. **AI unvalidated** `[VAR #9]` — must prove on real data before scaling. Pilot A is the proving ground.
3. **Fractional team** `[VAR #1]` — must sequence, not parallelize. Each phase focuses capacity on one primary objective.

---

## 4. Financial Projections

### 4.1 Assumptions

| Assumption | Value | Basis | Confidence |
|---|---|---|---|
| Pilot A new programs/year | ~50 | User input | High |
| Addressable programs (our service fits) | ~60% of 50 = ~30/year | `[ASSUMPTION]` Not all programs will need external APQP support — some are minor changes, some have adequate internal resources | Medium |
| Revenue per project (Phase 1, service) | €3,000-8,000 per deliverable set | `[ASSUMPTION]` Based on consulting rate of €150-250/hr for APQP specialist work, 20-40 hours per deliverable set. Thai market rates may be lower. | Low |
| Revenue per project (Phase 2, service + tool) | €5,000-12,000 | Higher value from integrated tool + service | Low |
| Platform subscription (Phase 3) | €500-2,000/month per site | `[ASSUMPTION]` Benchmarked against Praxie ($10/user/mo low end) and APIS IQ-FMEA (€10-20K/year enterprise) | Low |
| Team cost (fully loaded) | €50K per 10% commitment per person per year `[VAR #1]` | Team input | High |
| Infrastructure costs | Near-zero initially (cloud AI APIs, basic hosting) | Standard for AI-native startup | High |

`[ASSUMPTION]` Revenue per project estimates are rough. Must be validated against Pilot A's actual willingness to pay and competitive alternatives.

### 4.2 Year 1 Projection (Phase 1: Service + Validate)

**Scenario: Conservative**

| Item | Q1-Q2 | Q3-Q4 | Year 1 Total |
|---|---|---|---|
| Projects completed | 0-1 (validation) | 3-5 (paid) | 3-6 |
| Revenue | €0-5K | €15-30K | €15-35K |
| Team cost (sweat equity) | ~€150K imputed | ~€150K imputed | ~€300K imputed |
| Cash cost (infra) | ~€2-5K | ~€2-5K | ~€5-10K |
| Cash position | Negative (funded by sweat equity + Pilot A infra contribution) | Slightly less negative | Deeply sweat-equity funded |

**Reality check:** Year 1 will almost certainly not be cash-positive. The team is investing time at below-market rates. The purpose of Year 1 is validation, not revenue. This is consistent with the zero-cash bootstrap model `[VAR #2]`.

**Scenario: Base**

| Item | Q1-Q2 | Q3-Q4 | Year 1 Total |
|---|---|---|---|
| Projects completed | 1-2 | 5-8 | 6-10 |
| Revenue | €5-10K | €30-60K | €35-70K |

**Scenario: Optimistic**

| Item | Q1-Q2 | Q3-Q4 | Year 1 Total |
|---|---|---|---|
| Projects completed | 2-3 | 8-12 | 10-15 |
| Revenue | €10-20K | €50-90K | €60-110K |

### 4.3 Year 2-3 Projection (Phase 2: Productize + Scale)

| Metric | Year 2 (Base) | Year 3 (Base) |
|---|---|---|
| Pilot customers active | 3-4 | 4 |
| Non-pilot customers | 1-3 | 5-15 |
| Projects per year | 20-40 | 50-100 |
| Revenue (service + tool) | €150-300K | €400-800K |
| Team commitment increase | 2 members toward full-time | 2-3 full-time equivalent |
| Cash costs (infra + development) | €30-60K | €60-120K |

### 4.4 Year 4-5 Projection (Phase 3: Scale + Expand)

| Metric | Year 4 (Base) | Year 5 (Base) |
|---|---|---|
| Total customers | 30-80 | 80-200 |
| ARR (platform + service) | €1-3M | €3-10M |
| Team size | 8-15 | 15-30 |
| Geographic markets | 2-3 countries | 3-5 countries |
| Industries | Automotive only | Automotive + 1 adjacent |

`[ASSUMPTION]` Year 4-5 projections are highly speculative. The $10M ARR target `[VAR #16]` is ambitious but within range if Phase 2 execution succeeds and the market tailwinds materialize. The wide ranges reflect genuine uncertainty.

### 4.5 Path to Long-Term Target

The `[VAR #16]` target: sell cumulative 49% of equity over 10 years for ≥$1B (implying ≥$2B valuation).

A $2B valuation at Year 10 would require (at typical SaaS multiples of 10-20x ARR): **$100-200M ARR.**

Working backwards:

| Year | ARR Required (base path) | What This Implies |
|---|---|---|
| Year 4 | $10M | 50-200 customers, $50-200K avg contract |
| Year 6 | $30-50M | Cross-industry expansion underway. 500+ customers. |
| Year 8 | $80-120M | Multi-industry platform. 2,000+ customers. Possible standard-setting position. |
| Year 10 | $150-200M | Market-defining platform. Cross-industry. |

**Honest assessment:** This is an extremely ambitious trajectory. It requires not just successful execution but several things going right: the market adopting AI-augmented APQP broadly, the team's platform becoming a category leader, successful cross-industry expansion, and sustained competitive advantage. It's achievable if the meta-framework thesis `[FROM SA §4.5]` proves correct and the team executes Scenario D from the game theory `[FROM SA §5.2]`. But many startups with better starting positions (more capital, more team, more market) fail to reach this scale.

The $10M ARR by Year 4 is the meaningful intermediate checkpoint. If that's achieved, the long-term path becomes credible.

---

## 5. Revenue Model — Detailed

### 5.1 Phase 1: Service Revenue

| Service Offering | Description | Pricing Basis | Estimated Price |
|---|---|---|---|
| **RfQ Analysis & Requirements Structuring** | AI-parsed RfQ → structured requirements matrix + gap analysis | Per RfQ package | €1,000-3,000 |
| **AI-Assisted FMEA Creation** | AI-generated initial FMEA (DFMEA or PFMEA) from product/process data + facilitation of team review session | Per FMEA | €2,000-5,000 |
| **Control Plan Generation** | AI-generated control plan from PFMEA + special characteristics | Per control plan | €1,000-3,000 |
| **PPAP Assembly** | AI-assisted compilation and consistency checking of PPAP package | Per PPAP | €2,000-5,000 |
| **FMEA Migration Service** | Convert existing Excel FMEAs to AIAG-VDA 7-step format with AP | Per FMEA migrated | €500-2,000 |
| **Full APQP Program Support** | End-to-end support across all deliverables for one program | Per program (retainer) | €10,000-25,000 |

`[ASSUMPTION]` Pricing is estimated for Thai/ASEAN market. European/US market pricing would be 2-3x higher. Must be validated against Pilot A willingness to pay.

### 5.2 Phase 2: Tool + Service

| Revenue Stream | Description | Pricing Basis |
|---|---|---|
| **Platform license** | Access to AI-augmented APQP platform (FMEA, Control Plan, linkage management) | Monthly per site: €500-1,500 |
| **AI consumption** | Pay-per-use for AI generation (FMEA content, RfQ parsing, etc.) | Per AI-generated deliverable |
| **Premium consulting** | Expert facilitation for complex programs, training, implementation support | Hourly/daily rate |
| **FMEA migration** | Bulk migration of historical FMEAs (data conversion + AI enhancement) | Per-FMEA batch pricing |

### 5.3 Phase 3: Platform + Network

| Revenue Stream | Description | Pricing Basis |
|---|---|---|
| **SaaS subscription** | Full platform access | Monthly per site or per user |
| **Network premium** | Access to shared/anonymized benchmark data across the supply chain | Premium tier |
| **Industry modules** | Aerospace, medical device, industrial equipment adaptations | Add-on subscription |
| **Integration fees** | PLM/ERP integration connectors | One-time + maintenance |
| **Training & certification** | AI-augmented APQP practitioner training | Per person |

---

## 6. Risk Analysis

### 6.1 Critical Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| **Pilot A doesn't formally commit** | Medium | Critical — blocks all validation `[VAR Pilot A]` | C engaging CEO directly. D provides internal advocacy. Prepare Pilot B as backup proving ground. |
| **AI doesn't work well on real FMEA data** | Medium | Critical — undermines entire proposition `[VAR #9]` | Validate early with minimum viable test. Design for human-in-loop — AI augments, doesn't replace. Even partial AI assistance has value if it saves 30% of FMEA creation time. |
| **Team coordination failure** | Medium | High — fractional team with competing commitments `[VAR #1]` | 30-minute drive proximity helps. Clear role boundaries. Weekly sync cadence. Written decision log. |
| **D's conflict of interest** | Medium | Medium — D is employed at Pilot A and cannot decide Pilot A commitments `[VAR #1, Pilot A]` | Transparent roles. C (not D) leads Pilot A relationship. D contributes domain knowledge and process design, not commercial decisions regarding Pilot A. |
| **Market doesn't value AI-APQP** | Low | High | FMEA deadline creates forcing function. Service model means we prove value before asking for platform commitment. |
| **Competitor moves faster** | Low-Medium | Medium | Our differentiation is domain depth, not AI speed. Praxie is US-focused and shallow `[VAR #8]`. Legacy vendors are slow. But a well-funded AI startup entering this space is possible. |
| **Bangkok base limits EU/US credibility** | Low (near-term), Medium (long-term) | Medium | Not relevant for ASEAN Phase 1-2. For Phase 3 expansion, establish EU/US legal entity and/or partner. "Detroit of Asia" positioning helps. |

### 6.2 Single Point of Failure

**Pilot A formal commitment** is the critical path item. Without real project data, everything remains theoretical. The entire Year 1 plan depends on this. C's direct engagement with Pilot A's CEO is the highest-priority action for the team right now.

**Contingency:** If Pilot A stalls, the team should evaluate whether Pilot B can serve as the initial proving ground, even if the data quality and program volume are comparable, the relationship is less developed.

---

## 7. Team Operating Model

### 7.1 Role Allocation

| Person | Phase 1 Focus | Commitment | Key Deliverables |
|---|---|---|---|
| **A** (AI Expert) | Build and validate AI tools (RfQ parser, FMEA generator, linkage engine) | 30-50% | Working AI prototypes validated on real data |
| **B** (OEM Marketing/Procurement) | Value proposition, pricing, positioning. Assists A on AI ops. | 40-60% | Service packaging, pricing validation, market messaging |
| **C** (OEM Development) | Pilot customer relationships. Secures Pilot A commitment. Assists D on knowledge graph. | 40-60% | Pilot A LOI, customer onboarding, OEM requirements interpretation |
| **D** (Supplier PM / APQP) | Process and interaction design. Defines the "what" that AI tools must do. APQP content quality. | 30-40% | APQP deliverable templates, process workflow design, quality review of AI outputs |

### 7.2 Decision Framework

Given fractional commitment and distributed roles, clear decision rights are critical:

| Decision Area | Decision Maker | Consulted |
|---|---|---|
| AI architecture & tool design | A | D (requirements), B (market fit) |
| Customer relationships & sales | C (pilots), B (market) | D (feasibility), A (capability) |
| APQP content & quality standards | D | C (OEM perspective), A (AI capability) |
| Pricing & business model | B | C (customer willingness), All |
| Strategic direction | All (consensus) | — |

### 7.3 Coordination Cadence

| Meeting | Frequency | Duration | Purpose |
|---|---|---|---|
| Full team sync | Weekly | 60 min | Progress, blockers, decisions |
| A + D (tech + domain) | 2x/week | 30-45 min | AI tool development alignment |
| B + C (market + customer) | Weekly | 30 min | Customer pipeline, messaging |
| Quarterly review | Quarterly | Half day (in-person) | Strategy review, plan update, variable refresh |

---

## 8. Key Milestones & Decision Points

### 8.1 Milestone Map

| Milestone | Target Date | Go/No-Go Criteria | If NO-GO |
|---|---|---|---|
| **M1: Pilot A formal LOI** | Month 1-2 | Written commitment + data access | Pivot to Pilot B, or pause until commitment secured |
| **M2: RfQ parser validated** | Month 2-3 | Accurately parses ≥3 real RfQs | Redesign parser approach or narrow scope |
| **M3: FMEA AI validated** | Month 3-5 | Pilot A quality engineers rate output as "useful starting point" | Reduce AI ambition — focus on template + historical pre-population rather than generation |
| **M4: First paid project completed** | Month 4-7 | Revenue received. Customer satisfaction documented. Time savings measured. | Reassess value proposition. Are we solving a real problem? |
| **M5: Repeatable process documented** | Month 6-9 | Playbook exists. Second project takes less effort than first. | Process isn't scalable — stay in consulting mode longer |
| **M6: Pilot B activated** | Month 8-12 | Second pilot commits and starts first project | Growth thesis uncertain — focus deeper on Pilot A |
| **M7: ≥5 projects completed** | Month 10-14 | Transition trigger for Phase 2 | Extend Phase 1 or reassess scope |
| **M8: Platform MVP** | Month 14-20 | Working software used by ≥2 pilots | Stay in service mode, productize later |
| **M9: First non-pilot customer** | Month 18-24 | Cold or warm sale beyond the 4 pilots | Sales model needs rethinking — relationship-based doesn't scale |
| **M10: $10M ARR** | Year 4-5 | Revenue milestone `[VAR #16]` | Reassess long-term valuation target |

### 8.2 Kill Criteria

Conditions under which the venture should be reconsidered:

- **M3 fails AND redesign fails:** AI cannot generate useful FMEA content from real data after two iterations. The core technical thesis is wrong.
- **M4 fails after 3 attempts:** Customers won't pay for the service despite positive feedback. The value proposition doesn't translate to willingness to pay.
- **Year 1 revenue < €15K AND no clear path to improvement:** The market isn't responding.
- **Team fragmentation:** ≥2 team members reduce commitment below minimum viable level.

These are not automatic kill switches — they're triggers for an honest strategic reassessment.

---

## 9. Immediate Action Plan (First 60 Days)

| # | Action | Owner | Deadline | Dependency |
|---|---|---|---|---|
| 1 | C engages Pilot A CEO — secure formal LOI and data access | C | Week 1-4 | None — this is the critical path |
| 2 | A prepares RfQ parser for real-data testing | A | Week 1-4 | None — can work in parallel with #1 |
| 3 | D defines APQP deliverable requirements — what the AI tools must produce, in what format, at what quality level | D | Week 2-4 | None |
| 4 | B develops service offering packaging and preliminary pricing | B | Week 2-4 | None |
| 5 | When Pilot A data available: A + D validate RfQ parser on real RfQs | A, D | Week 4-8 | #1 |
| 6 | When Pilot A data available: A + D test FMEA generation on real product/process data | A, D | Week 6-10 | #1, #5 |
| 7 | Team reviews validation results — decide service scope for first paid project | All | Week 8-12 | #5, #6 |
| 8 | B + C prepare Pilot B engagement (using Pilot A results as evidence) | B, C | Week 10-12 | #7 |

---

## 10. Strategic Alignment

This business plan is a Phase 1-2 execution layer on top of the broader strategic analysis `[FROM SA]`. Here's how they connect:

| Strategic Analysis Concept | Business Plan Implementation |
|---|---|
| Scenario D — domain expert builds meta-framework `[SA §5.2]` | This team IS Scenario D. The consulting service builds the knowledge base; the platform encodes it. |
| AI Patterns P1-P7 `[SA §3.4]` | Phase 1 validates P1 (RfQ parsing), P2 (FMEA generation), P4 (linkage). Platform encodes all 7 progressively. |
| Cross-industry expansion `[SA §4.2]` | Phase 3 objective. Automotive first, then Tier 1 industries (aerospace, medical). |
| Standards influence `[SA §5.2 Dynamic 5]` | Phase 3 objective. Demonstrate working system → influence next AIAG-VDA revision. |
| ASEAN as fastest-growing region `[VAR #7]` | Phase 1-2 geographic focus. Cost advantage for bootstrapping. Phase 3 expands outward. |
| Jan 2027 FMEA deadline `[VAR #11]` | Phase 1-2 tactical lever — urgent migration need creates sales opening. |
| Meta-framework architecture `[SA §4.5]` | Long-term (Phase 3+). Platform is designed from the start to be industry-abstractable, even if first instantiation is automotive. |

---

## 11. What This Plan Does NOT Address (Yet)

| Topic | Why Deferred | When to Address |
|---|---|---|
| Legal entity structure | Too early — depends on geographic strategy and funding approach | Before first customer contract or when equity allocation formalized |
| IP protection strategy | Premature before validated IP exists | After Phase 1 validation — when there's something worth protecting |
| Detailed equity agreement | Team alignment needed, depends on commitment levels materializing | Before Phase 2 transition — when commitment increases |
| Detailed product specification | Must emerge from validated service workflows, not designed in advance | Phase 2 — productize what works |
| Funding strategy | Bootstrap first — funding is Plan B if growth requires capital ahead of revenue `[VAR #14]` | If Phase 2 growth outpaces revenue, or for Phase 3 acceleration |
| Detailed competitive response plan | Competitors are currently weak in this space `[VAR #8]` — monitor, don't obsess | Review quarterly. Escalate if a well-funded competitor enters AI-APQP space. |

---

## Appendix: Assumption Sensitivity

The projections are most sensitive to these variables:

| Variable | If Better Than Assumed | If Worse Than Assumed |
|---|---|---|
| **Pilot A commitment timing** | Accelerates entire plan by 2-3 months | Delays everything. No plan B produces revenue faster. |
| **AI quality on real data** | Enables bolder service scope and higher pricing | Must narrow to template/migration services — lower margin, slower growth |
| **Revenue per project** | Faster path to sustainability, earlier full-time transition | Longer bootstrap period, higher sweat-equity burn |
| **Non-pilot customer acquisition** | Phase 3 acceleration, validates scalability | Growth limited to network-based sales — ceiling on scale |
| **Team commitment sustainability** | Faster execution across all phases | Slower execution, risk of stalling between phases |

---

*This plan is a living document. It will be updated as variables change, milestones are reached (or missed), and new information emerges. Each update should reference which input variable triggered the revision.*
