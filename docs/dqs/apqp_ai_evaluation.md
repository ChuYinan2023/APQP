# APQP AI Evaluation
*Converted from apqp_ai_evaluation.xlsx*

---

## Sheet 1: Deliverable Evaluation

**Columns:** ID | Category | Deliverable | Current Practice | Key Human Judgment Points | AI Feasibility (H/M/L) | AI Intervention Mode | Expected Benefit | Confidence (H/M/L) | Notes / Unknowns

---

### Voice of Customer & Planning

**VOC** | VOC & Planning | Voice of Customer (VOC)
- **Current Practice:** Customer interviews, focus groups, surveys (Qualtrics, SurveyMonkey), warranty databases (SAP QM, Pivotal), social media monitoring, dealer/field service reports, QFD matrices, competitive teardown studies. Often managed in Excel or dedicated tools like Qualica QFD.
- **Key Human Judgment:** Interpreting latent vs. stated needs. Prioritizing contradictory requirements from different customer segments. Judging which complaints represent systemic issues vs. outliers. Translating qualitative feedback into quantifiable requirements.
- **AI Feasibility:** H
- **AI Intervention Mode:** NLP/LLM analysis of warranty text, complaint narratives, social media, call center transcripts to extract themes and sentiment. Clustering of failure modes from unstructured field data. Pattern detection across large complaint databases. LLM-assisted QFD — suggesting linkages between customer needs and technical requirements.
- **Expected Benefit:** Faster processing of large unstructured datasets. More complete extraction of latent needs from text. Reduced bias in prioritization. Earlier detection of emerging issues from field data patterns.
- **Confidence:** M
- **Notes:** AI is strong on text analysis and pattern detection. Weaker on judging strategic importance of a need. Cannot replace customer empathy and contextual understanding from face-to-face interaction.

---

**BPC** | VOC & Planning | Business Plan / Case
- **Current Practice:** Financial modeling in Excel. Market sizing from research firms (IHS, Gartner) or internal analysis. Cost estimation via parametric models or analogous estimates. Investment analysis (NPV, IRR) in Excel or specialized tools. Often a PowerPoint/Word narrative + Excel financials.
- **Key Human Judgment:** Market sizing assumptions under uncertainty. Choosing discount rates and scenarios. Competitive response modeling. Deciding go/no-go when data is ambiguous. Balancing short-term cost vs. long-term strategic value.
- **AI Feasibility:** M
- **AI Intervention Mode:** AI-assisted market sizing (synthesizing multiple data sources). Scenario generation and Monte Carlo simulation setup. Sensitivity analysis automation. LLM drafting narrative sections from structured financial data.
- **Expected Benefit:** Faster scenario exploration. More systematic sensitivity analysis. Reduced effort on boilerplate narrative. Better visualization of uncertainty ranges.
- **Confidence:** M
- **Notes:** The core judgment — 'is this worth doing?' — remains human. AI can accelerate the analytical scaffolding around that judgment.

---

**PRG** | VOC & Planning | Product Assurance Plan / Timing
- **Current Practice:** Microsoft Project, Primavera, or Excel-based Gantt charts. Milestone tracking in PLM systems (Teamcenter, Windchill). Risk registers in Excel or Jira. Resource planning in ERP or dedicated tools. Stage-gate review checklists.
- **Key Human Judgment:** Estimating task durations for novel work. Identifying critical path when dependencies are unclear. Balancing resource constraints across multiple programs. Risk assessment for first-of-kind activities.
- **AI Feasibility:** M
- **AI Intervention Mode:** AI-assisted estimation based on historical program data. Critical path analysis with probabilistic durations. Automated risk flagging from program status data. Early warning of schedule slip patterns.
- **Expected Benefit:** More realistic schedules (less optimism bias). Earlier detection of schedule risks. Better resource balancing across portfolio.
- **Confidence:** M
- **Notes:** Traditional PM tools already handle scheduling mechanics. AI value is mainly in estimation accuracy and pattern-based early warning.

---

**DRG** | VOC & Planning | Design & Reliability Goals
- **Current Practice:** Derived from VOC via QFD or requirements traceability matrices. Benchmarking data from teardowns and testing. Regulatory requirements from standards databases (e.g., IHS standards). Reliability targets from Weibull analysis of predecessor field data. Managed in DOORS, Polarion, Jama, or Excel.
- **Key Human Judgment:** Setting targets that are ambitious but achievable. Balancing conflicting requirements (lighter but stronger, cheaper but more reliable). Deciding acceptable warranty cost vs. product cost trade-off. Interpreting regulatory intent when standards are ambiguous.
- **AI Feasibility:** M
- **AI Intervention Mode:** AI mining of predecessor reliability data to propose initial targets. Automated regulatory requirements extraction from standards documents. Trade-off visualization tools. LLM-assisted requirements decomposition from system to subsystem level.
- **Expected Benefit:** More data-driven initial targets. Faster regulatory requirement identification. Better traceability from customer need to engineering target.
- **Confidence:** M
- **Notes:** Requirements engineering tools (DOORS etc.) already handle traceability mechanics. AI adds value in the analytical and extraction layers.

---

### Product Design & Engineering

**BOM** | Design & Engineering | Bill of Materials (BOM)
- **Current Practice:** Created and managed in PLM systems (Teamcenter, Windchill, Arena, Aras). CAD-driven BOM generation from assemblies. ERP linkage (SAP MM) for costing and procurement. Multi-level BOM with indented structure. Change managed via ECN/ECO workflow in PLM.
- **Key Human Judgment:** Deciding make-vs-buy. Selecting between alternative components (cost vs. risk vs. lead time). Managing BOM during design iteration when parts are still TBD. Resolving discrepancies between engineering BOM and manufacturing BOM.
- **AI Feasibility:** M
- **AI Intervention Mode:** AI-assisted component selection (matching specs to supplier catalogs). Automated BOM comparison across revisions. Cost estimation from BOM structure using historical data. Obsolescence risk prediction for components. AI detection of BOM errors or inconsistencies.
- **Expected Benefit:** Faster component selection. Earlier obsolescence warnings. Reduced BOM errors. Better cost estimation during early phases when BOM is incomplete.
- **Confidence:** M
- **Notes:** PLM systems are mature here. AI value is incremental — mainly in selection assistance and predictive analytics on components.

---

**DWG** | Design & Engineering | Engineering Drawings & Specs
- **Current Practice:** Created in CAD (SolidWorks, NX, CATIA, Creo). GD&T per ASME Y14.5 or ISO GPS. Drawings released and managed via PLM. Model-Based Definition (MBD) increasingly replacing 2D drawings. Tolerancing analysis via tools like Sigmetrix, 3DCS, or CETOL.
- **Key Human Judgment:** GD&T scheme selection (which datums, which tolerances, how tight). Balancing tolerance tightness vs. manufacturing cost. Deciding when MBD is sufficient vs. when 2D drawings are needed. Interpreting customer drawing requirements when ambiguous.
- **AI Feasibility:** M
- **AI Intervention Mode:** AI-assisted GD&T suggestions based on functional requirements. Automated tolerance stack-up analysis. AI review of drawings for common errors or missing callouts. Generative design for initial geometry exploration.
- **Expected Benefit:** Reduced GD&T errors. Faster tolerance analysis iterations. More optimized tolerance allocation. Earlier detection of drawing deficiencies.
- **Confidence:** M
- **Notes:** Generative design (Fusion 360, nTopology) is real and deployed. AI-assisted GD&T is more nascent. The core design synthesis remains deeply human.

---

**DFMEA** | Design & Engineering | Design FMEA (DFMEA)
- **Current Practice:** Typically conducted in Excel, APIS IQ-FMEA, Plato Scio, Relyence, or similar FMEA software. Cross-functional team sessions (design, test, quality, manufacturing, sometimes customer). AIAG-VDA FMEA Handbook (2019) methodology with AP (Action Priority) replacing RPN. Boundary diagrams, structure trees, function nets as pre-work.
- **Key Human Judgment:** Identifying failure modes (especially novel ones not in historical data). Rating severity-occurrence-detection accurately. Deciding which risks require action vs. acceptable. Creating meaningful recommended actions vs. boilerplate. Ensuring completeness — 'what did we miss?'
- **AI Feasibility:** H
- **AI Intervention Mode:** LLM pre-population of failure modes from historical FMEA databases and field data. AI suggesting failure modes based on design topology and material properties. Automated linking of DFMEA to PFMEA and control plan entries. AI review for completeness — flagging functions without failure modes, missing detection methods. NLP analysis of field complaints to feed new failure modes.
- **Expected Benefit:** More complete FMEAs (fewer missed failure modes). Faster initial FMEA creation. Reduced 'copy-paste' FMEA syndrome. Better linkage between DFMEA, PFMEA, and control plan. Continuous FMEA enrichment from field data.
- **Confidence:** H
- **Notes:** FMEA is one of the strongest AI use cases in APQP. The structured format + large historical databases make it highly amenable to AI. But the human cross-functional judgment session remains essential — AI augments, doesn't replace it.

---

**DVPR** | Design & Engineering | DVP&R (Design Verification Plan & Report)
- **Current Practice:** Typically Excel-based matrices. Links requirements to test methods, sample sizes, acceptance criteria, timing, and results. Test execution in labs using specialized equipment. Results recorded manually or from test data acquisition systems. Managed alongside DFMEA.
- **Key Human Judgment:** Selecting appropriate test methods and sample sizes. Deciding pass/fail when results are borderline. Prioritizing which tests to run first given time constraints. Interpreting test failures — root cause assignment.
- **AI Feasibility:** M
- **AI Intervention Mode:** AI-assisted test plan generation from requirements list. Automated test result analysis and trend detection. ML-based prediction of test outcomes from simulation data (reducing physical test iterations). AI-assisted failure analysis from test data patterns.
- **Expected Benefit:** Fewer physical test iterations (simulation-to-test correlation). Faster test result interpretation. More systematic test coverage. Earlier identification of at-risk tests.
- **Confidence:** M
- **Notes:** Simulation-to-test correlation using ML is an active research area with some production deployment. Pure test planning remains largely human-driven.

---

**SC** | Design & Engineering | Special Characteristics
- **Current Practice:** Identified from VOC, regulations, DFMEA (high-severity items), and customer-designated characteristics. Documented on drawings with symbols (e.g., diamond, shield). Tracked in PLM and flowed to control plan. Customer-specific symbols and requirements (e.g., Ford diamond-D, GM inverted delta).
- **Key Human Judgment:** Deciding what qualifies as 'special' vs. standard. Balancing between too many (everything is special = nothing is special) and too few (missing critical items). Interpreting customer classification requirements.
- **AI Feasibility:** M
- **AI Intervention Mode:** AI-assisted identification of candidate special characteristics from DFMEA severity ratings and customer requirements. Automated cross-check between SC list, drawings, control plan, and PFMEA for consistency. Benchmarking SC density against similar products.
- **Expected Benefit:** More consistent SC identification. Reduced risk of missing a critical characteristic. Better cross-document consistency.
- **Confidence:** M
- **Notes:** The core judgment on SC classification is domain-expertise driven. AI helps with consistency checking and ensuring nothing falls through the cracks.

---

### Process Design & Manufacturing

**PFC** | Process & Mfg | Process Flow Chart
- **Current Practice:** Created in Visio, Lucidchart, or process-specific tools. Sometimes generated from MES configurations. Follows standard symbols (AIAG convention: operation, transport, inspection, storage, delay). Linked to PFMEA and control plan step-by-step.
- **Key Human Judgment:** Designing the optimal process sequence. Deciding where to place inspection points. Balancing line balance, material flow efficiency, and quality control. Incorporating error-proofing stations.
- **AI Feasibility:** L
- **AI Intervention Mode:** AI-assisted process sequence optimization from product geometry and tolerance data. Simulation of material flow and line balancing. Automated generation of flow chart skeleton from MES/ERP routing data.
- **Expected Benefit:** Better initial process concepts. Faster line balancing iterations. Reduced material handling waste.
- **Confidence:** L
- **Notes:** Process flow design is deeply experience-driven and plant-specific. AI has limited practical traction here today. Digital twin simulation is more promising than pure AI.

---

**PFMEA** | Process & Mfg | Process FMEA (PFMEA)
- **Current Practice:** Same tooling as DFMEA (Excel, APIS, Plato, Relyence). Cross-functional team with strong manufacturing and quality representation. Linked step-by-step to process flow chart. AIAG-VDA methodology. Must address all special characteristics. Often uses lessons learned database from similar processes.
- **Key Human Judgment:** Identifying process failure modes (especially for new processes). Accurate occurrence and detection ratings based on actual process capability. Designing effective error-proofing (poka-yoke). Ensuring PFMEA actions are practical and implementable on the floor.
- **AI Feasibility:** H
- **AI Intervention Mode:** Same AI approach as DFMEA: LLM pre-population from historical PFMEAs, field data, and production quality data. AI linking of PFMEA to DFMEA failure modes. Automated suggestions for detection methods and error-proofing based on similar processes. AI monitoring of production data to feed real-time PFMEA updates.
- **Expected Benefit:** Same benefits as DFMEA: more complete, faster, better linked. Additional benefit: production data can continuously validate and update PFMEA ratings.
- **Confidence:** H
- **Notes:** PFMEA has even more structured data available (production quality records) than DFMEA, making AI augmentation potentially more powerful.

---

**CP** | Process & Mfg | Control Plan
- **Current Practice:** Excel-based (AIAG format) or in FMEA/quality software. Three stages: Prototype, Pre-Launch, Production. Links process flow step, product/process characteristic, spec/tolerance, evaluation method, sample size/frequency, control method, reaction plan. The 'master document' of ongoing quality control.
- **Key Human Judgment:** Setting inspection frequencies (100%, statistical, skip-lot). Choosing appropriate control methods for each characteristic. Defining reaction plans that are practical and effective. Deciding when to reduce controls as capability is demonstrated.
- **AI Feasibility:** H
- **AI Intervention Mode:** AI-generated initial control plan from PFMEA, special characteristics, and process flow. AI-optimized inspection frequencies based on capability data and risk. Automated consistency checking (every PFMEA high-risk item has a corresponding CP entry, every SC has a CP line). Dynamic control plan adjustment based on SPC trends.
- **Expected Benefit:** More consistent and complete control plans. Optimized inspection effort (right frequency for the risk). Reduced over-inspection of capable processes. Real-time control plan adaptation.
- **Confidence:** H
- **Notes:** Control plan is highly structured and data-linkable. One of the strongest candidates for AI automation. The dynamic adjustment concept is particularly promising.

---

**WI** | Process & Mfg | Work Instructions
- **Current Practice:** Created in Word, specialized WI tools (Visual Knowledge Share, Dozuki, Poka), or MES-integrated systems. Increasingly visual (photos, short videos). Must match control plan requirements. Multi-language in global operations. Operator training records linked.
- **Key Human Judgment:** Writing clear, unambiguous instructions. Selecting the right visual aids. Adapting instructions for different skill levels. Keeping WI current with process changes.
- **AI Feasibility:** H
- **AI Intervention Mode:** LLM-generated initial WI drafts from control plan and process flow data. AI-generated visual aids from CAD models (exploded views, assembly sequences). Automated translation for multi-language sites. AI-assisted WI update propagation when process changes occur. AR/MR overlay generation from 3D models.
- **Expected Benefit:** Faster WI creation. More consistent quality. Better visual communication. Easier multi-language management. Faster update propagation.
- **Confidence:** M
- **Notes:** WI generation from structured inputs is well-suited to LLMs. The AR/visual overlay angle is emerging but not mainstream yet.

---

**FLP** | Process & Mfg | Floor Plan Layout
- **Current Practice:** Created in AutoCAD, factory simulation tools (FlexSim, Plant Simulation, Process Simulate). Sometimes manual sketches for initial concepts. Material flow analysis and spaghetti diagrams. Ergonomic analysis tools.
- **Key Human Judgment:** Optimizing material flow vs. available space. Ergonomic workstation design. Balancing flexibility for future products vs. efficiency for current product. Safety and regulatory compliance (fire exits, hazmat zones).
- **AI Feasibility:** M
- **AI Intervention Mode:** AI-optimized layout generation from process flow and constraint data. Simulation-based layout evaluation. Digital twin for what-if scenarios. Automated ergonomic assessment from 3D layout models.
- **Expected Benefit:** More systematic layout optimization. Faster evaluation of layout alternatives. Better ergonomic compliance.
- **Confidence:** L
- **Notes:** Factory simulation tools are established but not AI-native. True AI-driven layout optimization is mostly academic. Digital twins are gaining traction in larger OEMs.

---

**PKG** | Process & Mfg | Packaging Specifications
- **Current Practice:** Designed in CAD or packaging-specific tools. Ship testing per ISTA or ASTM standards. Material selection for sustainability/cost/protection trade-offs. Returnable container management for automotive supply chains. Labeling per customer standards (AIAG barcode labels).
- **Key Human Judgment:** Balancing protection level vs. cost vs. sustainability. Designing for automated packaging lines. Cube utilization for shipping efficiency. Returnable vs. expendable decision.
- **AI Feasibility:** L
- **AI Intervention Mode:** AI-assisted packaging design optimization (minimize material while meeting drop/vibration requirements). ML prediction of packaging adequacy from product geometry and fragility data.
- **Expected Benefit:** Reduced packaging material waste. Fewer damage claims. Faster initial packaging concept.
- **Confidence:** L
- **Notes:** Packaging is a relatively niche area for AI. Some work in simulation-based optimization but limited practical AI deployment.

---

### Measurement & Capability

**MSA** | Measurement | Measurement System Analysis (MSA)
- **Current Practice:** Conducted per AIAG MSA Reference Manual (4th ed). Gage R&R studies (ANOVA or X-bar/R method) in Minitab, JMP, or Excel. Bias, linearity, stability studies. Managed by quality engineering. Results required before any capability data is valid.
- **Key Human Judgment:** Selecting appropriate MSA study type for each gage. Interpreting borderline results (e.g., 15% GR&R — acceptable for non-critical?). Deciding corrective actions for failing gage systems. Judging gage adequacy for measurement task.
- **AI Feasibility:** M
- **AI Intervention Mode:** Automated MSA study execution and analysis from CMM/gage data feeds. AI-assisted interpretation of results with contextual guidance. Automated scheduling of MSA recertification. Pattern detection across MSA results to identify systematic measurement issues.
- **Expected Benefit:** Faster MSA execution. More consistent interpretation. Better tracking of gage system health over time.
- **Confidence:** M
- **Notes:** MSA is methodologically well-defined. AI helps with automation and pattern detection but the statistical methods are already standardized.

---

**PCS** | Measurement | Process Capability Studies (Cpk/Ppk)
- **Current Practice:** Statistical analysis in Minitab, JMP, SPC software (InfinityQS, Hertzler, WinSPC), or Excel. Data from CMMs, vision systems, in-line sensors, or manual measurements. Normality testing, capability index calculation. Special rules for non-normal data. Required for all PPAP submissions.
- **Key Human Judgment:** Ensuring data collection represents actual production conditions. Handling non-normal distributions. Deciding between Cpk and Ppk and when each is appropriate. Determining corrective actions when capability is insufficient — design change vs. process change vs. increased inspection.
- **AI Feasibility:** H
- **AI Intervention Mode:** Automated capability calculation from real-time production data streams. ML-based distribution fitting (including non-normal). AI-driven root cause suggestions when Cpk is low. Predictive capability — forecasting Cpk trends before they breach thresholds. Automated triggering of control plan changes based on capability levels.
- **Expected Benefit:** Real-time capability monitoring. Earlier intervention when capability degrades. Better decision support for low-capability responses. Reduced manual data collection and analysis effort.
- **Confidence:** H
- **Notes:** Process capability is pure statistical analysis on structured data — highly amenable to AI automation. Real-time SPC/capability systems are already deployed in advanced manufacturing.

---

**GAG** | Measurement | Gages, Fixtures & Test Equipment
- **Current Practice:** Designed by tooling/gage engineers in CAD. Procured from gage suppliers or built in-house. Calibration managed in calibration management systems (Fluke, GAGEtrak, Blue Mountain RAM). Linked to control plan measurement methods.
- **Key Human Judgment:** Gage design — selecting the right measurement principle for the application. Make-vs-buy decision. Calibration interval determination. Gage R&R adequacy for intended use.
- **AI Feasibility:** L
- **AI Intervention Mode:** AI-assisted gage concept selection based on feature type, tolerance, and production volume. Predictive calibration scheduling based on drift trends. Automated gage utilization tracking.
- **Expected Benefit:** Better initial gage concepts. Optimized calibration intervals (reduced unnecessary recalibration). Fewer gage-related measurement issues.
- **Confidence:** L
- **Notes:** Gage design is highly specialized. AI has limited traction here. Predictive calibration is feasible but niche.

---

### Supplier & Material

**SUP** | Supplier | Supplier Selection & Qualification
- **Current Practice:** Supplier audits per IATF 16949. Supplier databases and scorecards in ERP (SAP SRM) or specialized tools (Coupa, Jaggaer). Financial risk assessment (D&B, Creditsafe). Capacity assessments. On-site audits by SQE (Supplier Quality Engineers). PPAP requirements communicated.
- **Key Human Judgment:** Evaluating supplier capability vs. claims. Assessing financial stability and geopolitical risk. Single-source vs. dual-source strategy. Relationship management and trust building. Cultural and communication factors in global sourcing.
- **AI Feasibility:** M
- **AI Intervention Mode:** AI-driven supplier risk scoring from financial, news, and performance data. ML-based supplier matching (capabilities to requirements). Automated audit finding tracking and trend analysis. NLP monitoring of supply chain disruption signals (news, social media).
- **Expected Benefit:** Earlier risk detection. More systematic supplier matching. Faster audit analysis. Better disruption preparedness.
- **Confidence:** M
- **Notes:** Supply chain risk monitoring AI is real and deployed (e.g., Resilinc, Interos). The human relationship and trust aspects of supplier management are not AI-replaceable.

---

**SPP** | Supplier | Sub-supplier PPAP
- **Current Practice:** Same PPAP package as assembly-level, submitted by suppliers. Managed by SQE team. Tracked in supplier portals (SupplierLINK, Covisint/Plex) or Excel trackers. Review of dimensional data, capability, MSA, control plans from suppliers. Often the schedule-critical path item.
- **Key Human Judgment:** Reviewing supplier PPAP completeness and technical adequacy. Deciding interim approval vs. full approval vs. rejection. Assessing supplier capability claims vs. reality. Managing the timing crunch of late PPAPs.
- **AI Feasibility:** M
- **AI Intervention Mode:** AI-automated PPAP completeness checking (all 18 elements present?). Automated dimensional data review against drawing specs. AI flagging of suspicious capability data (e.g., Cpk values that are 'too perfect'). Pattern detection across supplier PPAP history.
- **Expected Benefit:** Faster PPAP review. Reduced risk of approving inadequate submissions. Better tracking of supplier PPAP trends. Earlier escalation of at-risk suppliers.
- **Confidence:** M
- **Notes:** PPAP review is document-intensive and structured — good AI candidate. The judgment of supplier credibility remains human.

---

### Validation & Approval

**PBR** | Validation | Prototype Build & Review
- **Current Practice:** Prototypes built via 3D printing (FDM, SLA, SLS), soft tooling, CNC machining, or short-run processes. Managed as engineering builds. Tested per DVP&R. Results reviewed in cross-functional design reviews. Photographic documentation. Issue tracking in quality databases or Jira.
- **Key Human Judgment:** Interpreting prototype test results when prototype process ≠ production process. Deciding which failures are prototype-artifact vs. real design issues. Prioritizing issues for resolution. Deciding when prototype maturity is sufficient to commit to hard tooling.
- **AI Feasibility:** M
- **AI Intervention Mode:** AI-assisted prototype test data analysis. Automated comparison of prototype vs. simulation results. ML prediction of production-process behavior from prototype-process data. AI-organized issue tracking and prioritization.
- **Expected Benefit:** Faster test data analysis. Better prototype-to-production correlation. More systematic issue management.
- **Confidence:** M
- **Notes:** Prototype-to-production correlation models are a promising ML application but still mostly research-stage for complex products.

---

**SPR** | Validation | Significant Production Run (Pilot)
- **Current Practice:** Run on production tooling, at production rate, with production operators, for a defined quantity (typically customer-specified). Managed by manufacturing engineering and quality. All control plan checks executed at tightened frequencies. Data collected for capability studies and PPAP.
- **Key Human Judgment:** Defining adequate run quantity and duration. Diagnosing issues that appear only at production rate. Deciding containment actions for marginal results. Judging production readiness from pilot data.
- **AI Feasibility:** M
- **AI Intervention Mode:** AI real-time monitoring of pilot run data streams (cycle time, scrap, yield, capability). Automated anomaly detection. AI-assisted root cause analysis for pilot issues. Predictive ramp-up planning from pilot data.
- **Expected Benefit:** Faster issue detection during pilot. Better data-driven launch readiness assessment. More accurate ramp-up forecasts.
- **Confidence:** M
- **Notes:** Real-time production monitoring is well-established (MES/SCADA). AI adds the anomaly detection and predictive layers.

---

**PPAP** | Validation | PPAP (Production Part Approval)
- **Current Practice:** 18-element package per AIAG PPAP Manual (4th ed). Assembled by quality engineering with inputs from design, manufacturing, suppliers. Submitted at customer-specified level (1-5). Managed in supplier portals or document management systems. PSW (Part Submission Warrant) is the formal sign-off.
- **Key Human Judgment:** Assembling a complete and consistent package from multiple sources. Ensuring all elements tell a coherent story. Deciding submission timing (complete vs. interim). Negotiating with customer on open items. Knowing what the customer reviewer actually looks for.
- **AI Feasibility:** H
- **AI Intervention Mode:** AI-automated PPAP assembly — pulling elements from PLM, quality system, SPC, MSA databases into the required format. Automated consistency checking across all 18 elements. AI-generated PSW cover narrative. Predictive assessment of customer approval likelihood based on submission quality.
- **Expected Benefit:** Dramatically faster PPAP assembly. Fewer incomplete or inconsistent submissions. Reduced rework/resubmission cycles. Better first-time approval rate.
- **Confidence:** H
- **Notes:** PPAP assembly is one of the strongest AI automation cases. It's primarily a document compilation task with consistency requirements — ideal for AI. The negotiation with customer remains human.

---

### Feedback & Continuous Improvement

**SPC** | Feedback & CI | SPC / Ongoing Quality Monitoring
- **Current Practice:** Real-time SPC software (InfinityQS, Hertzler, WinSPC, Minitab Connect). Control charts (X-bar/R, X-bar/S, p-charts, etc.). Data from automated measurement systems or manual entry. Out-of-control reaction per control plan. Managed by quality technicians and production supervisors.
- **Key Human Judgment:** Interpreting control chart patterns (trends, runs, shifts). Distinguishing between common cause and special cause variation. Deciding appropriate reaction when signals appear. Setting and adjusting control limits.
- **AI Feasibility:** H
- **AI Intervention Mode:** ML-based pattern recognition on SPC data — detecting subtle trends before they trigger standard Western Electric rules. Predictive SPC — forecasting out-of-control events. AI-assisted root cause identification linking SPC signals to process parameters. Automated control limit optimization.
- **Expected Benefit:** Earlier detection of process shifts. Reduced false alarms. Faster root cause identification. More proactive quality management vs. reactive.
- **Confidence:** H
- **Notes:** SPC + AI is commercially deployed (e.g., Sight Machine, Augury, InfinityQS Enact). This is one of the most mature AI-in-quality applications.

---

**WRR** | Feedback & CI | Warranty / Field Data & Lessons Learned
- **Current Practice:** Warranty claims in ERP (SAP, Oracle) or dedicated warranty systems. Field failure analysis in quality databases. Returned parts analyzed by failure analysis labs. NTF (No Trouble Found) tracking. Lessons learned in knowledge management systems (SharePoint, Confluence) or proprietary databases. Customer satisfaction surveys.
- **Key Human Judgment:** Determining root cause from limited field data. Distinguishing manufacturing defect vs. misuse vs. design deficiency. Deciding warranty policy (goodwill vs. denial). Extracting actionable lessons from diffuse data. Ensuring lessons actually transfer to next program.
- **AI Feasibility:** H
- **AI Intervention Mode:** NLP analysis of warranty claim narratives to identify failure mode clusters. ML prediction of warranty cost from early production data. AI-assisted failure analysis routing (predicting likely failure mode from claim description). Knowledge graph construction from lessons learned to enable search and retrieval. Automated FMEA update recommendations from field data.
- **Expected Benefit:** Faster identification of emerging field issues. More accurate warranty cost forecasting. Better knowledge retention and transfer. Automated FMEA feedback loop.
- **Confidence:** H
- **Notes:** Warranty text mining is commercially available and deployed. The knowledge transfer / lessons learned aspect is harder — organizational, not just technical.

---

**CIP** | Feedback & CI | Corrective & Improvement Actions
- **Current Practice:** 8D reports, 5-Why analysis, Ishikawa diagrams, A3 reports. Managed in quality systems (ETQ, Greenlight Guru, MasterControl) or simpler tools (Excel, Jira). Root cause analysis led by quality engineering with cross-functional support. Effectiveness verification required.
- **Key Human Judgment:** True root cause identification (not stopping at symptoms). Designing corrective actions that are sustainable. Verifying effectiveness over time. Preventing recurrence across similar products/processes. Balancing thoroughness with speed.
- **AI Feasibility:** M
- **AI Intervention Mode:** AI-assisted root cause suggestion based on similar historical issues. NLP analysis of problem descriptions to link to known failure modes. Automated tracking of corrective action effectiveness (are the metrics actually improving?). Pattern detection across 8Ds to identify systemic issues.
- **Expected Benefit:** Faster initial root cause hypotheses. Better linkage to historical knowledge. More rigorous effectiveness verification. Detection of repeat issues that appear under different descriptions.
- **Confidence:** M
- **Notes:** Problem-solving methodology is deeply human (especially the 'go and see' aspect). AI adds value in the knowledge retrieval and pattern detection layers.

---

## Sheet 2: Interaction Evaluation

**Columns:** ID | From | → | To | Type | Current Practice | Key Human Judgment | AI Feasibility | AI Intervention Concept | Expected Benefit | Confidence | Notes

---

| # | From | → | To | Type | AI Feasibility | Confidence |
|---|---|---|---|---|---|---|
| 1 | VOC | → | Design & Reliability Goals | Drives | M | M |
| 2 | VOC | → | Special Characteristics | Drives | M | M |
| 3 | Design & Reliability Goals | → | Engineering Drawings | Drives | M | M |
| 4 | Design & Reliability Goals | → | DVP&R | Drives | M | M |
| 5 | Engineering Drawings | → | DFMEA | Drives | H | M |
| 6 | DFMEA | → | Special Characteristics | Drives | H | H |
| 7 | DFMEA | → | Control Plan | Drives | H | H |
| 8 | DFMEA | → | PFMEA | Informs | H | H |
| 9 | Process Flow | → | PFMEA | Drives | H | H |
| 10 | Process Flow | → | Control Plan | Drives | H | H |
| 11 | PFMEA | → | Control Plan | Drives | H | H |
| 12 | Special Characteristics | → | Control Plan | Drives | H | H |
| 13 | Special Characteristics | → | Capability Studies | Drives | H | H |
| 14 | Control Plan | → | Work Instructions | Drives | H | M |
| 15 | MSA | → | Capability Studies | Validates | H | H |
| 16 | Capability Studies | → | Control Plan | Constrains | H | H |
| 17 | Pilot Run | → | PPAP | Drives | M | M |
| 18 | Warranty/Field Data | → | VOC (next program) | Informs | H | H |
| 19 | Warranty/Field Data | → | DFMEA & PFMEA | Informs | H | H |
| 20 | SPC Data | → | Corrective Actions | Drives | H | H |
| 21 | Corrective Actions | → | DFMEA/PFMEA/Control Plan | Constrains | H | H |
| 22 | BOM | → | Supplier Selection | Drives | M | M |
| 23 | DFMEA | → | Engineering Drawings (ECN) | Constrains | L | L |

### Interaction Details

**#1 — VOC → Design & Reliability Goals (Drives) | Feasibility: M | Confidence: M**
- Current Practice: QFD matrices translate customer needs to measurable engineering targets. Cross-functional workshops. Often iterative with marketing, engineering, and quality.
- Key Human Judgment: Interpreting latent needs. Quantifying subjective requirements ('feels premium' → surface roughness Ra, weight, stiffness targets). Prioritizing when needs conflict.
- AI Concept: LLM-assisted translation of qualitative VOC into quantifiable engineering parameters using historical precedent databases. AI-suggested requirement decomposition.
- Expected Benefit: Faster initial translation. More complete requirement coverage. Reduced 'lost in translation' risk.
- Notes: This is the most judgment-heavy handoff in all of APQP. AI can assist but not own it.

**#2 — VOC → Special Characteristics (Drives) | Feasibility: M | Confidence: M**
- Current Practice: Customer-critical-to-quality items identified from VOC are directly designated as special characteristics. Customer may also explicitly designate characteristics.
- Key Human Judgment: Deciding which VOC items truly require SC designation vs. standard quality control.
- AI Concept: AI cross-referencing VOC items against historical SC designations for similar products. Automated flagging of VOC items that historically became SCs.
- Expected Benefit: More consistent SC identification from VOC. Fewer missed critical items.

**#3 — Design & Reliability Goals → Engineering Drawings (Drives) | Feasibility: M | Confidence: M**
- Current Practice: Goals become specs on drawings. Each requirement must be traceable to a drawing callout. Requirements traceability matrix maintained.
- Key Human Judgment: Translating functional requirements into geometric specifications. GD&T scheme selection to control the right features.
- AI Concept: AI-assisted requirements-to-drawing traceability checking. Automated gap detection (requirements without drawing callouts).
- Expected Benefit: More complete traceability. Fewer missed requirements on drawings.

**#4 — Design & Reliability Goals → DVP&R (Drives) | Feasibility: M | Confidence: M**
- Current Practice: Each design goal maps to one or more verification tests in the DVP&R. Test methods, sample sizes, and acceptance criteria derived from goals.
- Key Human Judgment: Selecting appropriate test methods. Setting statistically valid sample sizes. Defining acceptance criteria for complex requirements.
- AI Concept: AI-generated initial DVP&R from requirements list, proposing test methods based on historical data and standards databases.
- Expected Benefit: Faster DVP&R creation. Better test method selection from broader knowledge base.

**#5 — Engineering Drawings → DFMEA (Drives) | Feasibility: H | Confidence: M**
- Current Practice: Design details (features, interfaces, materials) from drawings are the subject matter of DFMEA analysis. Each function/feature analyzed for failure modes.
- Key Human Judgment: Identifying non-obvious failure modes. Understanding interaction effects between features.
- AI Concept: AI analysis of CAD geometry and tolerance data to suggest potential failure modes (e.g., thin walls → cracking, tight clearances → interference). Automated DFMEA pre-population from drawing features.
- Expected Benefit: More complete failure mode identification. Faster DFMEA initiation. Novel failure mode suggestions.
- Notes: Promising but depends on maturity of CAD-to-FMEA AI linkage. Some vendors exploring this.

**#6 — DFMEA → Special Characteristics (Drives) | Feasibility: H | Confidence: H**
- Current Practice: High-severity DFMEA failure modes (severity ≥ 8-9, or safety/regulatory) automatically designate the related characteristic as 'special'. Direct, rule-based linkage.
- Key Human Judgment: Minimal — this is one of the more rule-based interactions. Judgment is mainly in the upstream severity rating.
- AI Concept: Fully automatable: rule-based extraction of SC candidates from DFMEA severity ratings. AI can flag inconsistencies (high-severity item without corresponding SC).
- Expected Benefit: Eliminates manual transcription errors. Ensures 100% consistency between DFMEA and SC list.
- Notes: This is largely automatable today even without AI — it's a rule-based extraction. AI adds the consistency checking layer.

**#7 — DFMEA → Control Plan (Drives) | Feasibility: H | Confidence: H**
- Current Practice: DFMEA recommended actions and detection methods flow into control plan as inspection/test requirements. High-risk items get tighter controls.
- Key Human Judgment: Translating DFMEA detection methods into practical control plan entries. Setting appropriate frequencies.
- AI Concept: AI-automated generation of control plan entries from DFMEA. Frequency recommendation based on risk level and historical capability data.
- Expected Benefit: Faster control plan creation. Better risk-based frequency allocation. Guaranteed completeness.

**#8 — DFMEA → PFMEA (Informs) | Feasibility: H | Confidence: H**
- Current Practice: Design risk information from DFMEA informs process risk analysis. PFMEA must address how the process could introduce or fail to detect design failure modes.
- Key Human Judgment: Translating design risks into process terms. Understanding how manufacturing variability affects design intent.
- AI Concept: AI-assisted mapping of DFMEA failure modes to corresponding PFMEA process steps. Automated suggestions: 'DFMEA says wall thickness is critical → PFMEA should analyze injection molding parameters controlling wall thickness.'
- Expected Benefit: Better DFMEA-to-PFMEA linkage. Fewer 'orphaned' design risks without process coverage.
- Notes: This linkage is one of the most commonly broken in practice. AI enforcement of it would be highly valuable.

**#9 — Process Flow → PFMEA (Drives) | Feasibility: H | Confidence: H**
- Current Practice: Process flow chart defines the sequence of operations that PFMEA analyzes step-by-step. Each PFC operation becomes a PFMEA line item.
- Key Human Judgment: Ensuring PFC is complete before PFMEA (often they're done in parallel). Adding detail to PFC based on PFMEA findings.
- AI Concept: Automated PFMEA skeleton generation from process flow chart. AI ensures 1:1 mapping between PFC steps and PFMEA entries.
- Expected Benefit: Eliminates structural misalignment between PFC and PFMEA. Faster PFMEA creation.

**#10 — Process Flow → Control Plan (Drives) | Feasibility: H | Confidence: H**
- Current Practice: Control plan follows process flow step-by-step. Each PFC operation has corresponding control plan entries. Same structure, same sequence.
- Key Human Judgment: Same structural alignment as PFC→PFMEA.
- AI Concept: Same approach — automated CP skeleton from PFC. Ensures structural alignment.
- Expected Benefit: Structural consistency guaranteed.

**#11 — PFMEA → Control Plan (Drives) | Feasibility: H | Confidence: H**
- Current Practice: PFMEA high-risk items (high AP) drive control plan requirements — what to inspect, how often, with what method. This is the most critical single interaction in the system.
- Key Human Judgment: Translating PFMEA risk levels into practical, cost-effective controls. Balancing thoroughness with production efficiency.
- AI Concept: AI-optimized control plan generation from PFMEA risk data. ML-based frequency optimization using historical quality data and capability. Dynamic adjustment as production data accumulates.
- Expected Benefit: Optimized inspection effort. Risk-proportional controls. Dynamic adaptation. This single interaction may be the highest-ROI AI application in the entire APQP system.
- Notes: This is where the system-level AI value proposition is strongest.

**#12 — Special Characteristics → Control Plan (Drives) | Feasibility: H | Confidence: H**
- Current Practice: Every SC must appear in the control plan with appropriate controls, inspection methods, and reaction plans. Non-negotiable requirement in IATF 16949.
- Key Human Judgment: Minimal — compliance-driven. The judgment was in selecting the SC and choosing the control method.
- AI Concept: Automated cross-check: every SC on the master list has a corresponding CP entry. Flagging missing or inconsistent entries.
- Expected Benefit: 100% SC-to-CP traceability. Zero gaps.

**#13 — Special Characteristics → Capability Studies (Drives) | Feasibility: H | Confidence: H**
- Current Practice: Every SC requires a capability study. Higher Cpk targets (1.67 vs. 1.33) for safety-critical characteristics.
- Key Human Judgment: Minimal — rule-based requirement. Judgment is in the capability analysis itself.
- AI Concept: Automated tracking of which SCs have completed capability studies and which are pending/failing.
- Expected Benefit: Complete tracking. No SCs without demonstrated capability.

**#14 — Control Plan → Work Instructions (Drives) | Feasibility: H | Confidence: M**
- Current Practice: CP inspection requirements, methods, and frequencies must be reflected in operator work instructions. WI is the operator-level implementation of the CP.
- Key Human Judgment: Translating CP requirements into clear, operator-friendly language and visuals.
- AI Concept: LLM-generated WI content from CP data, enriched with visual aids from CAD. Automated WI update when CP changes.
- Expected Benefit: Faster WI creation. Automatic CP-WI consistency. Better operator communication.
- Notes: The translation from CP (quality-engineer language) to WI (operator language) is a strong LLM use case.

**#15 — MSA → Capability Studies (Validates) | Feasibility: H | Confidence: H**
- Current Practice: MSA must pass before capability study data is considered valid. If the gage can't measure accurately, Cpk numbers are meaningless.
- Key Human Judgment: Sequencing — ensuring MSA precedes capability study. Interpreting borderline MSA results.
- AI Concept: Automated gating: system blocks capability study sign-off until MSA is approved for that gage. AI flags capability studies that used unqualified measurement systems.
- Expected Benefit: Eliminates the common error of reporting Cpk with an unqualified gage. Enforces correct sequencing.
- Notes: This is a process compliance check — highly automatable.

**#16 — Capability Studies → Control Plan (Constrains) | Feasibility: H | Confidence: H**
- Current Practice: Low Cpk forces tighter inspection frequencies in the control plan. Demonstrated high capability may allow reduced inspection.
- Key Human Judgment: Setting frequency adjustments proportional to capability. Deciding when capability is 'good enough' to relax controls.
- AI Concept: AI-driven dynamic control plan: automatically adjusting inspection frequencies based on real-time capability trends. This closes the loop between measurement and control.
- Expected Benefit: Continuously optimized inspection effort. Reduced cost of quality. Real-time adaptation.
- Notes: This is the 'dynamic' in dynamic control plan — the biggest single AI opportunity in ongoing production quality.

**#17 — Pilot Run → PPAP (Drives) | Feasibility: M | Confidence: M**
- Current Practice: Significant production run produces the parts and data used for PPAP submission. PPAP cannot be submitted without a successful pilot run.
- Key Human Judgment: Judging when pilot run data is sufficient for PPAP. Dealing with issues discovered during pilot that affect PPAP timing.
- AI Concept: AI-assisted real-time assessment of pilot run data sufficiency for PPAP. Automated PPAP element population from pilot run data.
- Expected Benefit: Faster PPAP turnaround. Earlier visibility of PPAP readiness or gaps.

**#18 — Warranty/Field Data → VOC next program (Informs) | Feasibility: H | Confidence: H**
- Current Practice: Field failure data, warranty trends, and customer satisfaction data become VOC inputs for the next product generation. This is the primary feedback loop that closes the APQP cycle.
- Key Human Judgment: Deciding which field issues represent systemic design/process problems vs. outliers. Prioritizing field learnings for next-gen impact.
- AI Concept: AI-automated warranty text mining → failure mode clustering → VOC theme generation for next program. ML-based early warning of emerging failure patterns.
- Expected Benefit: Faster, more complete feedback loop closure. Less reliance on individual memory for lessons transfer. Earlier detection of field trends.
- Notes: This loop closure is the single most strategically important AI application in APQP — it determines whether the organization actually learns.

**#19 — Warranty/Field Data → DFMEA & PFMEA (Informs) | Feasibility: H | Confidence: H**
- Current Practice: Field failures that weren't predicted by DFMEA/PFMEA trigger updates — new failure modes added, severity/occurrence ratings corrected, detection methods revised.
- Key Human Judgment: Linking field symptom descriptions to specific FMEA failure modes. Determining root cause (design vs. process vs. use).
- AI Concept: NLP matching of warranty claim text to existing FMEA failure modes. AI-suggested FMEA updates from field data. Automated occurrence rating recalculation from actual field failure rates.
- Expected Benefit: Continuous FMEA improvement from field evidence. More accurate risk ratings. Living FMEAs that reflect reality.

**#20 — SPC Data → Corrective Actions (Drives) | Feasibility: H | Confidence: H**
- Current Practice: Out-of-control SPC signals trigger the corrective action process. Control chart patterns inform the type of investigation needed.
- Key Human Judgment: Interpreting SPC patterns. Distinguishing real signals from noise. Initiating the right level of response.
- AI Concept: AI pattern recognition on SPC data triggering automated corrective action initiation. ML-based root cause suggestions based on similar historical SPC events.
- Expected Benefit: Faster response to quality signals. More accurate root cause hypotheses. Reduced time from detection to correction.

**#21 — Corrective Actions → DFMEA/PFMEA/Control Plan (Constrains) | Feasibility: H | Confidence: H**
- Current Practice: Effective corrective actions result in updates to FMEAs (new/revised failure modes, controls) and control plans (new/revised inspection requirements).
- Key Human Judgment: Ensuring corrective actions are actually reflected in the governing documents. Preventing document drift.
- AI Concept: AI-automated propagation: when a corrective action is closed, system suggests specific FMEA and CP updates. Change impact analysis across all linked documents.
- Expected Benefit: Guaranteed document currency. No drift between corrective actions and governing documents. System-level consistency.
- Notes: This 'document propagation' problem is systemic in quality management. AI-enforced linkage would be transformative.

**#22 — BOM → Supplier Selection (Drives) | Feasibility: M | Confidence: M**
- Current Practice: BOM items that are purchased drive the supplier selection process. Make-vs-buy decisions determine which BOM lines need suppliers.
- Key Human Judgment: Make-vs-buy strategy. Supplier matching to component requirements.
- AI Concept: AI-assisted supplier matching from BOM specs to supplier capability databases. Automated sourcing recommendations.
- Expected Benefit: Faster sourcing. Better supplier-component matching.

**#23 — DFMEA → Engineering Drawings / ECN (Constrains) | Feasibility: L | Confidence: L**
- Current Practice: DFMEA findings may reveal unacceptable design risks that force drawing changes via Engineering Change Notice. The DFMEA constrains the design.
- Key Human Judgment: Deciding when a DFMEA finding warrants a design change vs. an added control. Evaluating change impact on cost, timing, and other characteristics.
- AI Concept: AI-assisted change impact analysis — predicting downstream effects of a proposed ECN on BOM, tooling, supplier, cost, and timing.
- Expected Benefit: Better informed change decisions. Reduced unintended consequences of ECNs.
- Notes: ECN impact analysis is complex and context-dependent. AI can help with structured impact assessment but core judgment remains human.

---

## Sheet 3: AI Opportunity Summary

| Deliverable / Interaction | AI Feasibility | Key AI Use Case | Expected Impact | Deployment Maturity |
|---|---|---|---|---|
| DFMEA | H | LLM pre-population + completeness checking from historical data | 30-50% faster FMEA creation; fewer missed failure modes | Pilot |
| PFMEA | H | Same as DFMEA + production data feedback loop | Same + continuous real-world validation | Pilot |
| Control Plan | H | AI-generated from PFMEA + dynamic frequency optimization | Optimized inspection costs; risk-proportional controls | Emerging |
| PPAP Assembly | H | Automated compilation + consistency checking across 18 elements | 50-70% faster PPAP creation; higher first-time approval | Feasible now |
| SPC / Quality Monitoring | H | ML pattern recognition + predictive capability | Earlier defect detection; reduced false alarms | Deployed |
| Warranty → VOC Loop | H | NLP text mining + failure clustering + FMEA auto-update | Faster organizational learning; continuous FMEA improvement | Pilot |
| PFMEA → Control Plan | H | AI-optimized risk-to-control translation | Highest-ROI single interaction for AI in APQP | Emerging |
| Cpk → Control Plan (Dynamic) | H | Real-time capability-driven inspection adjustment | Continuously optimized cost of quality | Emerging |
| DFMEA ↔ PFMEA Linkage | H | Automated cross-mapping of design risks to process controls | Closes most commonly broken link in practice | Feasible now |
| Corrective Action → Doc Update | H | AI-propagated updates across FMEA, CP, WI | Eliminates document drift; system-level consistency | Feasible now |
| VOC Analysis | H | NLP on warranty/complaint text; sentiment clustering | More complete, less biased customer insight | Deployed |
| Process Capability | H | Automated analysis + distribution fitting + trend prediction | Real-time capability monitoring; proactive intervention | Deployed |

**Deployment Maturity Key:**
- **Deployed** — commercially available and in use at multiple sites
- **Pilot** — being tested at select companies
- **Emerging** — technically feasible with limited real-world validation
- **Feasible now** — technically straightforward but not widely implemented

*Note: This evaluation is based on AI training knowledge (cutoff ~mid-2025). All assessments should be validated against your specific industry, customer, and organizational context.*
