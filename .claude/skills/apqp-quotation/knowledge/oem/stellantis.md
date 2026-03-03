# OEM知识：Stellantis (FCA / Fiat Chrysler)

<!-- 更新于 2026-03-02, KP1 FBFS 项目回写 -->

## 文档体系

| 前缀 | 含义 | 示例 |
|------|------|------|
| PF.xxxxx | Performance Standard (性能标准) | PF.90197 (Fuel Bundle), PF.90298 (QC), PF.90068 (DEF Lines) |
| CS.xxxxx | Company Standard (企业标准) | CS.00251 (Corrosion), CS.00050 (Wiring) |
| CD.xxxxx | Core Documents (核心文件包) | CD.80064 (Fuel Bundle Core) |
| SD.xxxxx / SD-xxxxx | Specification Document | SD-11597 (Fuel Compatibility), SD-M0008/03 (Plastic Fuel Line) |
| PS.xxxxx / PS-xxxx | Process Standard | PS.50005/06 (Welding), PS-8688 (Coatings) |
| QR.xxxxx / QR-xxxxx | Quality Requirement | QR.00001 (GPAT), QR-10012 (Dimensional) |
| LP.xxxxx | Lab Procedure | LP.7A004 (ESD), LP.7A005 (MiniSHED) |
| MS.xxxxx / MS-xxxxx | Material Standard | MS-8004 (Indolene), MS-10756 (ULSD) |
| 9.xxxxx | Fiat 旧编号（质量体系） | 9.01108 (Supplies Quality) |
| 0.xxxxx / 07xxx | Fiat 旧编号（标识/回收） | 07416 (Recycling Markings), 0.00013 (Date Marking) |

文档结构说明：
- **SSTS** (Supplier Specification Technical Sheet) = 采购技术总要求，最高级别，Excel 格式，内嵌 CTS + TDR
- **CTS** (Component Technical Specification) = 零部件技术规范，DOCX 格式，嵌入在 SSTS 中
- **TDR** (Technical Documents Required) = 报价交付物清单，DOCX 格式，嵌入在 SSTS 中，**内部嵌入客户模板**
- **PF** 标准 = 通用性能标准，跨车型适用，由 Stellantis Engineering 维护
- 覆盖规则：CTS 特有要求 > PF 通用要求（CTS 可加严但不可放松 PF）
- PF 标准后缀含义：`<S>` = Safety, `<E>` = Emissions, `<D>` = Durability

语言：英文为主，部分 Fiat 遗留文档为意大利文（如 RASI 模板的 sheet 名 "Foglio1"、"Definizione"）

## 术语惯例

| OEM用语 | 通用用语 | 备注 |
|---------|---------|------|
| SSTS | 采购技术总要求 | Supplier Specification Technical Sheet |
| CTS | 零部件技术规范 | Component Technical Specification |
| TDR | 交付物清单 | Technical Documents Required |
| SDT | 供应商开发团队 | Supplier Development Team |
| RASI | 职责分配矩阵 | R=Responsible, A=Approval, S=Support, I=Informed |
| ED&D / PBD | 工程开发设计成本 | Engineering Design & Development / Project Budget Detail |
| TKO | 报价截止/项目启动 | Technical Kick-Off |
| GPAT | 全球产品保证测试 | Global Product Assurance Testing |
| VLD | 泄漏检测 | Vacuum Leak Detection |
| MiniSHED | 蒸发排放测试 | 小型密封箱排放测试 |
| DVPR/PVP | 验证计划 | Design Verification Plan & Report / Process Validation Plan |
| TESIS | 质量追踪系统 | 可靠性指标来源 |
| CCP | 客户车辆档案 | Customer Car Profile |
| P99C90 / R95C90 | 统计验收标准 | 99%可靠度@90%置信 / 95%可靠度@90%置信 |

## 交付物命名惯例

Stellantis 报价交付物使用 TDR 中定义的顺序号：
1. Co-design cost breakdown → Q1
2. Component Development Sheet (CDS) → Q2
3. CAD models → (工程师交付，超出工具范围)
4. Supplier Development Team → Q3
5. List of exceptions → Q4
6. Material list → Q6
7. RASI → Q5

## 客户模板常见藏匿位置

**关键经验**：Stellantis TDR 文档中嵌入客户标准模板，递归提取才能发现。

| 模板类型 | 嵌入位置 | 格式 |
|---------|---------|------|
| ED&D 成本分解 | TDR.docx → embeddings/ | XLSX, 4 sheets (Blank/Instructions/Example/Spending Curve) |
| 团队名册 | TDR.docx → embeddings/ | XLSX, 简单表格 (Item/Name/Last Name/Role/Email) |
| 要求清单 | TDR.docx → embeddings/ | XLSX, 20行×6列 |
| RASI 矩阵 | TDR.docx → embeddings/ | XLSX, 大型 Fiat-GM 标准矩阵 (214行×85列, sheets: Definizione + Medium-Level RASI) |
| BOM 清单 | TDR.docx → embeddings/ | XLSX, 简单表格 (Item/Component/Qty/Note) |
| DVPR/PVP | 独立文件 (STLA-DVPR模板.xlsx) | XLSX, FCA 标准验证计划表 |
| SVP (供应商验证计划) | CTS.docx → embeddings/ | XLSX, ~30项测试 |

## 嵌入文件特征

SSTS 中的嵌入结构（3层）：
```
SSTS.xlsx
├── CTS.docx (零部件技术规范)
│   ├── PPTX (技术要求演示，可能与顶层PPTX重复)
│   ├── XLSX (SVP 供应商验证计划)
│   ├── oleObject (PDF: ELV/REACH 材料限制)
│   ├── oleObject (PDF: 保护套/附件要求)
│   └── oleObject (JPG: 零件实物照片, OLE Package 格式)
├── TDR.docx (交付物清单)
│   ├── XLSX (ED&D 成本模板)
│   ├── XLSX (团队名册模板)
│   ├── XLSX (要求清单模板)
│   ├── XLSX (RASI 矩阵模板)
│   └── XLSX (BOM 清单模板)
└── Deliverables.xlsx (交付物时间表)
```

## 处理注意事项

1. **必须递归提取嵌入文件** — SSTS 内嵌 CTS 和 TDR，它们内部还有大量嵌入文件（客户模板、PDF规范等），不递归会遗漏关键模板
2. **OLE 对象含 PDF** — CTS 中的 oleObject 可能嵌入实际 PDF 文档（ELV/REACH 材料限制等），需用 olefile 提取 CONTENTS stream
3. **意大利语 sheet 名** — Fiat 遗留模板的 sheet 名可能是意大利语（Foglio1 = Sheet1, Definizione = Definition）
4. **PF 标准版本差异** — 同一 PF 标准在 NA/EMEA/APAC 可能有不同 Change Level，注意版本日期
5. **NX + TeamCenter** — Stellantis 强制要求供应商具备 NX + TeamCenter CAD 能力，常见例外项
6. **TESIS 可靠性指标** — 按安装位置分区（底盘/机舱/内饰），不同位置不同目标值
7. **区域差异** — CaCl₂ 测试仅 EMEA；汽油温度 60°C 仅北美；VLD 100% 检测仅燃油管（蒸气管仅北美）
8. **二次锁扣** — 新设计 QC 强制要求 Secondary Latch (PF.90298 §1.8)
9. **CTS 内 PPTX 重复** — CTS 嵌入的 PPTX 与顶层独立 PPTX 内容相同（零件描述/BOM），不要重复提取数据
10. **DEF 管与燃油管混发** — 同一 Fuel Bundle 项目中 PF.90068 (DEF加热管) 可能与 PF.90197 (燃油管) 一并发来，需确认适用性
11. **OLE Package 格式** — CTS 中部分 oleObject 是 OLE Package (非标准 CONTENTS stream)，需检查 Ole10Native stream 中的文件头偏移量提取实际文件
