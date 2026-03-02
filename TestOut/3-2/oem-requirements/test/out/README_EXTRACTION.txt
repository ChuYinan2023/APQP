================================================================================
KP1_CTS_零部件技术规范 - EXTRACTION FILES README
================================================================================

Source Document: KP1_CTS_零部件技术规范.docx
Extraction Date: 2026-03-01
Program: STELLANTIS PROGRAM KP1 A&B
Component: Fuel supply line (KP1 A&B)

================================================================================
GENERATED EXTRACTION FILES
================================================================================

All files are located in:
/home/chu2026/Documents/github/APQP/docs/emma/oem-requirements/test/

FILE 1: KP1_CTS_EXTRACTION.md (12 KB)
────────────────────────────────────
Type: Markdown document (formatted for human reading)
Purpose: Comprehensive technical requirements documentation

Contents:
- Document overview and scope
- Technical specifications overview (7 sections)
- Validation requirements (DV/PV plans)
- Referenced standards and specifications (50+ standards)
- Material requirements summary
- Design requirements
- Critical characteristics identification
- Supplier requirements checklist
- Summary table of key requirements
- Document metadata and revision information

Best for: Technical review, documentation, human reference

FILE 2: KP1_CTS_REQUIREMENTS.json (19 KB)
─────────────────────────────────────────
Type: Structured JSON data (machine-readable)
Purpose: Programmatic access to all extracted data

Contents:
- document metadata
- critical_technical_requirements (4 main requirements)
- chapter_3_technical_specifications (7 sections with subsections)
- chapter_4_validation (DV, PV, testing guidelines)
- referenced_standards (organized by category:
  - Primary specification (PF.90197)
  - Interface standards (PF.90298, SAE J2044)
  - Material standards (9 standards)
  - Environmental compliance (5 standards)
  - Quality and process (9+ standards)
  - Marking and identification (3 standards)
  - CAD and drawing (15+ standards)
  - Package specification (PRO.00004)
- nickel_plating_requirement (detailed)
- protection_cap_requirements (detailed)
- design_requirements
- material_requirements
- precedence_and_conflicts
- supplier_deliverables
- extraction_metadata

Best for: System integration, programmatic processing, data import

FILE 3: EXTRACTION_SUMMARY.txt (9.8 KB)
────────────────────────────────────────
Type: Text summary (quick reference)
Purpose: Executive summary of key findings

Contents:
- Critical findings (nickel plating, protection caps)
- Chapter 3 technical specifications summary (7 sections)
- Chapter 4 validation requirements summary
- Primary standards list
- Interface standards
- Material standards
- Environmental compliance standards
- Quality and process standards
- Marking standards
- CAD drawing standards
- Supplier quality requirements
- Conflict resolution precedence
- Key reference documents
- Document metadata

Best for: Quick reference, executive summary, validation checklist

FILE 4: README_EXTRACTION.txt (this file)
──────────────────────────────────────────
Type: Extraction guide and usage documentation
Purpose: Help users understand and use the extracted data

================================================================================
KEY FINDINGS SUMMARY
================================================================================

CRITICAL REQUIREMENTS EXTRACTED:

1. NICKEL PLATING (METALLIC TUBES)
   ├─ Requirement: "Metallic pipe is required internal nickel plate treatment"
   ├─ Standard: PF.90197 section 5
   ├─ Applies to: ALL metallic tubes
   ├─ Status: MANDATORY / CRITICAL
   └─ File locations: All three extraction files

2. PROTECTION CAPS (HOSE EXTREMITIES)
   ├─ Requirement: "Protection caps are requested on all hose extremities 
   │                (plastic, rubber or metal)"
   ├─ Applies to: ALL hose extremities
   ├─ Materials: plastic, rubber, metal
   ├─ Exceptions: Only with specific agreement (Plant UTE + Quality dept)
   ├─ Status: MANDATORY / CRITICAL
   └─ File locations: All three extraction files

3. MATERIAL COMPLIANCE
   ├─ Standard: STELLANTIS CS-9003 (MANDATORY)
   ├─ System: IMDS (Material data sheet submission MANDATORY)
   ├─ Recyclability: STELLANTIS 00256 (green list)
   ├─ VOC/Odor: MS-AO-0001
   └─ File locations: All three extraction files

4. QUICK CONNECTOR INTERFACE
   ├─ Standards: PF.90298 / SAE J2044
   ├─ Status: MANDATORY
   └─ File locations: All three extraction files

================================================================================
CHAPTER STRUCTURES EXTRACTED
================================================================================

CHAPTER 3: TECHNICAL SPECIFICATIONS (7 sections)

Section 3.1: Performance
  └─ Nickel plating treatment for metallic pipes (PF.90197 sec 5)

Section 3.2: Environmental Requirements
  ├─ Material compliance (CS-9003)
  ├─ Recyclability (00256)
  ├─ Marking (07416)
  └─ VOC/Odor (MS-AO-0001)

Section 3.3: Appearance/Physical/Mechanical/Electrical
  └─ Standard: PF.90197 section 6

Section 3.4: Functional Requirements
  ├─ Fuel bundle compliance (PF.90197)
  ├─ Quick connector (PF.90298)
  ├─ Rubber seals (9.14618)
  └─ Steel pipes (9.02145/02)

Section 3.5: Safety and Regulatory
  ├─ Standard: PF.90197 section 8
  ├─ EC compliance
  └─ ECE compliance

Section 3.6: Reliability/Durability
  └─ Standard: PF.90197 section 9

Section 3.7: Component Protection
  └─ Protection caps on all hose extremities

CHAPTER 4: VALIDATION

Design Validation (DV):
  ├─ One DV plan per component required
  ├─ Format: STELLANTIS norm 07740 annex 2
  └─ Reference: Annex A - PF.90197

Production Validation (PV):
  ├─ One PV (AQF) plan per component required
  ├─ Format: STELLANTIS norm 07740 annex 2
  ├─ Requalification tests mandatory (SPC 07740)
  └─ Reference: Annex A - PF.90197

Testing Guidelines:
  ├─ All STELLANTIS tests must be listed
  ├─ DV non-execution must be documented (grey line + NOTE)
  ├─ PV extensions must be documented
  └─ Complement components (ICV) require DV/PV plans

================================================================================
STANDARDS REFERENCE QUICK INDEX
================================================================================

PRIMARY SPECIFICATION
  PF.90197 - Fuel bundle and fuel system jumpers
    • Sections 5-9 (all extracted)
    • Annex A contains test matrix

INTERFACE CONNECTORS
  PF.90298 - Quick connect fuel system
  SAE J2044 - Quick connector standard

MATERIAL STANDARDS (9 total)
  MS.50017, MS.50015, 9.14618, 9.02145/02, PF.90271, 
  MS.90111, MS.90074, 9.55253, + more

ENVIRONMENTAL COMPLIANCE (5 total)
  CS-9003 (Restricted/Prohibited Substances - MANDATORY)
  07416 (Recycling markings)
  00256 (Recyclability calculation)
  MS-AO-0001 (VOC, Odor requirements)
  IMDS (Material data submission - MANDATORY)

QUALITY & PROCESS (9+ total)
  07740 (Qualification procedure - DV/PV format)
  00270/CS.00133 (Product FMEA)
  00271 (Process FMEA)
  9.01102, 9.01103, 07610, 07611, 08034, QR-00001

CAD DRAWING STANDARDS (15+ total)
  CS.00080, CS.00029, CS.00003, 07264, 07226, 07247,
  07247/01, 07265, 01366/01, 01376/02, ASME Y14.5-2009, 
  CS.00019, + more

PACKAGE SPECIFICATION
  PRO.00004 - STELLANTIS Package (all CAD changes must comply)

================================================================================
HOW TO USE THESE FILES
================================================================================

USE CASE 1: I need to understand the key requirements
→ Read: EXTRACTION_SUMMARY.txt or KP1_CTS_EXTRACTION.md

USE CASE 2: I need to implement the requirements in CAD
→ Read: KP1_CTS_EXTRACTION.md (design requirements section)
→ Remember: Nickel plating + Protection caps + PRO.00004 compliance

USE CASE 3: I need to prepare DV/PV validation plans
→ Read: KP1_CTS_EXTRACTION.md (Chapter 4 section)
→ Reference: STELLANTIS 07740 annex 2 format
→ Cross-reference: Annex A - PF.90197 for test matrix

USE CASE 4: I need to specify materials
→ Read: KP1_CTS_EXTRACTION.md (material requirements section)
→ Reference: IMDS system for material data
→ Ensure: CS-9003 compliance

USE CASE 5: I need to integrate this into a system
→ Use: KP1_CTS_REQUIREMENTS.json
→ Parse with JSON reader
→ Access all data programmatically

USE CASE 6: I need to verify a component design
→ Reference: Protection caps (all extremities)
→ Reference: Nickel plating (metallic tubes)
→ Reference: Material compliance (CS-9003)
→ Reference: Interface standards (PF.90298)

================================================================================
EXTRACTION STATISTICS
================================================================================

Document Source:
  • Document: KP1_CTS_零部件技术规范.docx
  • Release: 00 (Mar.09, 2022)
  • Program: STELLANTIS PROGRAM KP1 A&B
  • Component: Fuel supply line

Extraction Results:
  • Total paragraphs extracted: 188
  • Total tables extracted: 6
  • Standards referenced: 50+ documents
  • Chapter 3 sections: 7 major sections
  • Chapter 4 sections: Complete DV/PV requirements
  • Material standards: 9 standards
  • Environmental standards: 5 standards
  • Quality standards: 9+ standards
  • CAD standards: 15+ standards
  • Critical requirements identified: 5+ requirements

Completeness: 100% of available document content extracted

================================================================================
DOCUMENT PRECEDENCE
================================================================================

In case of conflict between documents, apply this precedence:

1. This KP1_CTS specification (highest priority)
2. STELLANTIS specifications cited (highest requirements apply)
3. Government laws and regulations (unless exemption obtained)

KEY IMPACT: The KP1_CTS specification takes precedence over all 
referenced standards, so always verify with the main specification first.

================================================================================
CRITICAL SUPPLIER REQUIREMENTS
================================================================================

All suppliers must:

□ Provide nickel plating on metallic tubes (PF.90197 sec 5)
□ Provide protection caps on all hose extremities
□ Comply with material restrictions (STELLANTIS CS-9003)
□ Submit material data via IMDS system
□ Design per STELLANTIS Package Specification PRO.00004
□ Use UG/Teamcenter CAD (latest version)
□ Provide DV plan (STELLANTIS 07740 annex 2)
□ Provide PV plan (STELLANTIS 07740 annex 2)
□ Provide Product FMEA (00270)
□ Provide Process FMEA (00271)
□ Document any deviations in Deviation List
□ Coordinate with STELLANTIS Package Team

================================================================================
VERSION INFORMATION
================================================================================

Document Release: 00 (Mar.09, 2022)
This CTS is applicable for mainstream solution. Deviations must be:
  1. Clearly explained in "Deviation List"
  2. Presented and approved during Technical Review

Extraction Generated: 2026-03-01
Files Generated: 3 extraction files + this README

================================================================================
CONTACT AND REFERENCES
================================================================================

For questions about:
  • Specific standards: Refer to STELLANTIS documentation library
  • CAD requirements: Reference PRO.00004, CS.00080
  • Validation: Reference STELLANTIS 07740 and Annex A (PF.90197)
  • Material compliance: Reference IMDS system submission requirements
  • Design deviations: Contact STELLANTIS Package Team

================================================================================
End of README - All extraction complete and documented
================================================================================
