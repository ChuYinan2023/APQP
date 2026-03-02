# KP1_CTS_零部件技术规范 - Technical Requirements Extraction

**Document:** KP1_CTS_零部件技术规范.docx
**Component:** Fuel supply line
**Program:** STELLANTIS PROGRAM KP1 A&B
**Release:** 00 (Mar.09, 2022)

---

## 1. DOCUMENT OVERVIEW

### Scope
- Establishes Fuel Lines requirements for KP1 A&B vehicles
- Covers function, performance, reliability, interface and validation requirements
- Applicable for specified markets and associated ambient environments
- Component description: "Fuel line filter to engine" (Code: /, Pattern: 2.2 DIESEL ENGINE)

### Primary Function
- Transport Fuel from Fuel Tank to Engine

### Key Design Requirement
- All changes to CAD model must be fully compliant with STELLANTIS Package Specification **PRO.00004**
- Supplier must share STELLANTIS Package Team Requirements through all phases
- Must guarantee proper functionality of Fuel and Vapor Lines assembly

---

## 2. TECHNICAL SPECIFICATIONS (CHAPTER 3)

### 2.1 Performance Requirements

#### **Metallic Tube Nickel Plating (CRITICAL)**
- **Requirement:** "Metallic pipe is required internal nickel plate treatment"
- **Specification Reference:** PF.90197 section 5
- **Compliance:** Mandatory for all metallic fuel tubes

### 2.2 Environmental Requirements
- **Reference Standard:** PF.90197 section 5
- **Specification:** STELLANTIS CS-9003 (Materials Restricted and Prohibited Substances)
- **Details:**
  - All materials must be consistent to STELLANTIS CS-9003
  - Materials should be recyclable as much as possible
  - Marking must be consistent to STELLANTIS 07416
  - Recyclability per STELLANTIS 00256 (green list)
  - VOC, Odor requirements per MS-AO-0001

### 2.3 Appearance/Physical/Mechanical/Electrical Requirements
- **Reference Standard:** PF.90197 section 6
- **Covers:** Visual inspection, dimensional tolerance, material properties, electrical properties

### 2.4 Functional Requirements
- **Reference Standard:** PF.90197 section 7
- **Related Standards:**
  - Fuel bundle and fuel system jumpers: PF.90197 (plastic, rubber, metallic)
  - Quick connector fuel system: PF.90298 (SAE J2044)
  - Rubber o-rings seals: 9.14618
  - Electrowelded steel pipes: 9.02145/02

### 2.5 Safety and Regulatory Requirements
- **Reference Standard:** PF.90197 section 8
- **Applicable Regulations:**
  - EC (European Community)
  - ECE (Economic Commission Europe)

### 2.6 Reliability/Durability Requirements
- **Reference Standard:** PF.90197 section 9
- **Design Life:** Covers long-term performance under operating conditions

### 2.7 Component Protection - PROTECTION CAPS (CRITICAL)

#### **Protection Cap Requirements:**
- **Mandatory:** Protection caps are requested on ALL hose extremities (plastic, rubber or metal)
- **Exception:** Caps could be eliminated ONLY with specific agreement with:
  - Plant UTE
  - STELLANTIS Quality dept.
- **Requirements for Cap Design:**
  - Transport conditions of new component storage must be shared with Manufacturing Engineering dept
  - Caps must be shaped according to specific criteria (details in design section)
  - Material: plastic, rubber or metal

---

## 3. VALIDATION REQUIREMENTS (CHAPTER 4)

### 3.1 Design Validation (DV) and Production Validation (PV)

#### **Mandatory Documentation:**
- **One DV plan per component**
- **One PV (AQF) plan per component**
- **Format Standard:** STELLANTIS norm 07740 annex 2
- **Reference:** Annex A PF.90197

#### **Validation Guidelines:**

1. **Test Selection:**
   - All tests per STELLANTIS specifications must be listed
   - All tests must be present in plan, even if not planned for execution
   - Extensions from other equivalent specs: document in NOTE column

2. **DV Phase:**
   - If not performing a test: write reason in NOTE column and color line grey
   - Reasons include: part not representative, other causes

3. **PV Phase:**
   - If extending tests from DV (e.g., part already OTOP): document in NOTE column and color grey
   - Mandatory to fill requalification tests column per STELLANTIS SPC 07740

4. **Complement Components:**
   - Required to provide DV and PV plans for complement components (ICV, etc.)

### 3.2 Qualification Procedure
- **Standard:** STELLANTIS 07740

---

## 4. REFERENCED STANDARDS AND SPECIFICATIONS

### 4.1 Main Technical Specification
- **PF.90197** - Fuel bundle and fuel system jumpers (plastic, rubber, metallic)
  - Section 5: Environmental requirements
  - Section 6: Appearance/Physical/Mechanical/Electrical requirements
  - Section 7: Functional requirements
  - Section 8: Safety and regulatory requirements
  - Section 9: Reliability/Durability requirements

### 4.2 Interface and Connectors
- **PF.90298** - Quick connect - fuel system (SAE J2044)
- **SAE J2044** - Quick connector standard

### 4.3 Material Standards

#### Plastics and Elastomers:
- **MS.50017** - Plastics - thermoplastic - polyamide (nylon) (harmonized 2 in 1)
- **MS.50015** - Thermoplastic vulcanizates - EPDM/PP (harmonized 2 in 1)
- **9.14618** - Rubber o-rings seals
- **9.55253** - Miscellaneous plastic component (thermoplastic or thermosetting)

#### Metal Components:
- **9.02145/02** - Electrowelded steel pipes for fuel circuits

#### Protective Sleeves:
- **PF.90271** - Electrical system insulating components wiring harness protection sleeves

#### Adhesives and Tapes:
- **MS.90111** - Tape
- **MS.90074** - Pressure-sensitive adhesive labels for vehicle interior (harmonized 2 in 1)

### 4.4 Environmental and Material Compliance
- **CS-9003** - Restricted and Prohibited Substances (vehicle and service parts)
- **07416** - Recycling markings for plastic, composite and elastomer components
- **00256** - Recyclability and recoverability of a vehicle
- **MS-AO-0001** - VOC, Odor and Prohibited Substances Requirements (2018-9-12 Version 2.1)
- **IMDS** - Material data sheet system (mandatory for production approval)

### 4.5 Quality and Process Standards
- **9.01102** - Supplier Quality
- **9.01103** - Product quality and conformity certificate
- **00270 (CS.00133)** - Product FMEA
- **00271** - Process FMEA
- **07610** - Supplier code
- **07611** - Supplier alphanumeric code marking - indications on drawing
- **08034** - Procedure for individuation of integration level of product
- **07740** - Qualification procedure (DV/PV planning)
- **QR-00001** - Global product assurance testing (GPAT)

### 4.6 Package and Configuration Specifications
- **PRO.00004** - STELLANTIS Package Specification (for CAD model changes and geometry)

### 4.7 Marking and Documentation Standards
- **0.00013** - Procedure for vehicle part marking
- **CS.11000** - Motor Vehicle Part Marking Procedure "sol. F" / MOPAR LOGO
- **07416** - Supplier alphanumeric code marking
- **9.01111** - Ergonomics requirements

### 4.8 CAD and Drawing Standards
- **CS.00080** - CAD drawings, CAD modelling/drawings rules
- **CS.00029** - CAD drawings - Rules for 3DA documentation definition (3D Annotated Models)
- **CS.00003** - New drawing title block – definitions, completion rules
- **07264** - CAD drawings types and sides of lines and characters
- **07226** - TcAE system and CAD part management
- **07247** - CAD drawings – Self-certification of the quality of the CAD parts
- **07247/01** - CAD drawings – Self-certification of graphs quality (E&D)
- **07265** - CAD drawings library symbols
- **01366/01** - Graphic symbols on drawings
- **01376/02** - Symbols on technical drawings (geometrical tolerances)
- **ASME Y14.5-2009** - Dimensioning and tolerancing
- **CS.00019** - Geometric dimensioning and tolerancing practices (ASME addendum)

---

## 5. MATERIAL REQUIREMENTS

### 5.1 Material Compliance
- All materials must comply with STELLANTIS CS-9003
- Materials should be recyclable as much as possible
- Alternative materials evaluated by STELLANTIS during sourcing

### 5.2 Material Data
- Supplier must provide material list per STELLANTIS guidelines
- Material data sheets required via IMDS system for production approval
- Recyclability must be calculated per STELLANTIS 00256 (green list)
- Critical material issues must be flagged to Material dept.

### 5.3 Marking
- Marking on Fuel and Vapor Lines per STELLANTIS 07416
- Supplier alphanumeric code marking per 07611

---

## 6. DESIGN REQUIREMENTS

### 6.1 CAD and Engineering Standards
- All CAD drawings must comply with requirements in §2.4.3
- Latest version of UG/Teamcenter (STELLANTIS standard)
- CAD drawing standard per CS.00080
- Self-certification of CAD parts quality required (07247)

### 6.2 Configuration and Geometry
- Must comply with STELLANTIS Package Specification PRO.00004
- All geometry changes must be documented
- Supplier must maintain STELLANTIS Package Team Requirements alignment

---

## 7. CRITICAL CHARACTERISTICS (CC) AND SPECIAL CHARACTERISTICS

**Note:** The document does not explicitly list CC/SC markings in the main text. However, the following are identified as CRITICAL based on document emphasis:

1. **Nickel Plating Treatment** - Metallic pipe internal nickel plate treatment (Performance section, §2.1)
2. **Protection Caps** - Mandatory on all hose extremities (Component Protection, §2.7)
3. **Material Compliance** - STELLANTIS CS-9003 compliance (Environmental Requirements)
4. **Quick Connector Interface** - PF.90298 / SAE J2044 compliance
5. **Pressure and Functional Performance** - PF.90197 section 7 & 9

---

## 8. SUPPLIER REQUIREMENTS

### 8.1 General Requirements
- Comply with STELLANTIS Specification 9.01102 (Supplier Quality)
- Provide Product quality and conformity certificate (9.01103)
- Submit Product FMEA per 00270 (CS.00133)
- Submit Process FMEA per 00271
- Maintain Supplier code per 07610

### 8.2 Material Management
- IMDS system registration mandatory
- Production approval only after STELLANTIS receives material data sheets via IMDS
- Document any material alternatives with justification

### 8.3 Design and CAD
- CAD drawings per latest UG/Teamcenter standards
- Self-certification of CAD part quality (07247)
- Compliance with geometric dimensioning and tolerancing (ASME Y14.5-2009, CS.00019)

### 8.4 Documentation
- Deviation List required for any deviations from target mainstream solution
- Technical Review presentation required
- All changes documented per PRO.00004

---

## 9. PRECEDENCE AND CONFLICT RESOLUTION

### Order of Precedence:
1. This specification (KP1_CTS) text
2. STELLANTIS specifications cited (highest requirements apply in case of conflict)
3. Government laws and regulations (unless exemption obtained)

---

## 10. VALIDATION TESTING ANNEX

- **Reference:** Annex A - PF.90197
- **Format:** STELLANTIS 07740 annex 2
- Contains detailed test matrix for DV and PV phases

---

## SUMMARY OF KEY REQUIREMENTS

| Requirement Category | Requirement | Standard | Status |
|---|---|---|---|
| **Material Treatment** | Internal nickel plating on metallic tubes | PF.90197 sec 5 | MANDATORY |
| **Protection** | Caps on all hose extremities | N/A | MANDATORY |
| **Interface** | Quick connector compliance | PF.90298 / SAE J2044 | MANDATORY |
| **Material Compliance** | Restricted/Prohibited substances | CS-9003 | MANDATORY |
| **Documentation** | DV and PV plans | 07740 annex 2 | MANDATORY |
| **Recycling** | Material recyclability data | IMDS system | MANDATORY |
| **CAD Standards** | Latest UG/Teamcenter | CS.00080 | MANDATORY |
| **Environmental** | VOC, Odor compliance | MS-AO-0001 | MANDATORY |

---

**Extraction Date:** 2026-03-01
**Document Release:** 00 (Mar.09, 2022)
**File Location:** /home/chu2026/Documents/github/APQP/docs/emma/oem-requirements/test/KP1_CTS_零部件技术规范.docx
