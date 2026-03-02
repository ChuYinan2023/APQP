# Step 1 — 文件解析报告

## 项目概览

| 项目 | 内容 |
|------|------|
| **OEM** | Stellantis（原FCA） |
| **项目代号** | KP1 A&B |
| **零件号** | FC00SAA78530 |
| **零件名** | Fuel Supply Line — Filter to Engine（柴油滤清器到发动机供油管） |
| **发动机** | 2.2 Diesel |
| **市场** | EMEA（从CaCl₂测试要求 EMEA only 推断） |
| **供应商集成等级** | Level 2（SSTS明确标注） |

---

## 1. 文件清单

### 1.1 主文件（6个）

| # | 文件名 | 类型 | 角色 | 语言 | 页数/Sheet | 版本 |
|---|--------|------|------|------|-----------|------|
| 1 | PF.90197 | PDF | 性能标准（核心规范） | EN | 28页 | Change Level C, 03-APR-2025 |
| 2 | PF.90298_QC 接头要求 | PDF | 性能规范（快插接头） | EN | 28页 | Change Level B, 04-FEB-2022 |
| 3 | KP1_CTS_Component-Technical-Spec | DOCX | 零部件技术规范（CTS） | EN | ~10页 | Release 00, 2022-03-09 |
| 4 | KP1 Fuel line damper description | PPTX | 零件描述/BOM/图纸 | EN | 5 slides | — |
| 5 | SSTS KP1 Fuel line | XLSX | 采购技术总要求（SSTS/Product Description） | EN | 2 sheets | Release 00, 2022-03-09 |
| 6 | STLA-DVPR模板 | XLSX | DV/PV验证计划模板 | EN | 1 sheet (KP1 PVP) | — |

### 1.2 嵌入文件（3层递归扫描，共检测 16 个嵌入对象）

所有可提取文件存入 `out/_嵌入文件/`，按 `{源文件简称}_{内容简述}.{ext}` 命名。

#### 一级嵌入：从主文件提取

**从 SSTS KP1 Fuel line.xlsx（3个）：**

| # | 原始名 → 重命名 | 类型 | 角色 |
|---|------------------|------|------|
| E1 | Microsoft_Word_Document.docx → **SSTS KP1 Fuel line_TDR交付物要求清单.docx** | DOCX | TDR各项交付物说明（含5个二级嵌入，见下） |
| E2 | Microsoft_Excel_Worksheet.xlsx → **SSTS KP1 Fuel line_Deliverables交付物清单.xlsx** | XLSX | Deliverables清单（15项交付物+时间节点） |
| E3 | Microsoft_Word_Document1.docx → **SSTS KP1 Fuel line_CTS技术规范.docx** | DOCX | CTS完整版（含2个二级嵌入+3个OLE，见下） |

**从 KP1_CTS.docx（5个，与E3内容重叠）：**

| # | 嵌入文件 | 类型 | 角色 | 状态 |
|---|----------|------|------|------|
| E4 | Microsoft_PowerPoint_Presentation.pptx | PPTX | 与主PPTX内容一致 | ✅ 已读取（未单独提取，与E3二级嵌入重复） |
| E5 | Microsoft_Excel_Worksheet.xlsx | XLSX | SVP测试计划（30项） | ✅ 已读取（未单独提取，与E3二级嵌入重复） |
| E6 | oleObject1.bin | OLE | 旧格式嵌入 | ❌ 无法解码 |
| E7 | oleObject2.bin | OLE | 旧格式嵌入 | ❌ 无法解码 |
| E8 | oleObject3.bin | OLE | 旧格式嵌入 | ❌ 无法解码 |

**从 KP1 Fuel line damper description.pptx（1个）：**

| # | 嵌入文件 | 类型 | 角色 | 状态 |
|---|----------|------|------|------|
| E9 | oleObject1.bin → 52183408_A_20200907.tif | TIF | Damper零件图纸 | ⚠️ 已识别文件名，OLE包装未提取图像 |

#### 二级嵌入：从一级嵌入文件递归提取

**从 E1 TDR交付物要求清单.docx（5个TDR模板表格）：**

| # | 原始名 → 重命名 | 大小 | 角色 |
|---|------------------|------|------|
| E10 | Microsoft_Excel_Worksheet.xlsx → **TDR_ED&D成本分解模板.xlsx** | 70KB | 工程开发费用分解模板（含填写说明+示例，4个Sheet） |
| E11 | Microsoft_Excel_Worksheet1.xlsx → **TDR_SDT团队成员表.xlsx** | 15KB | SDT团队名单空模板（Name/Role/Email） |
| E12 | Microsoft_Excel_Worksheet2.xlsx → **TDR_技术要求清单模板.xlsx** | 16KB | 技术规范对照矩阵空模板 |
| E13 | Microsoft_Excel_Worksheet3.xlsx → **TDR_RASI责任矩阵.xlsx** | 127KB | 完整RASI矩阵（214行任务×多级供应商职责R/A/S/I） |
| E14 | Microsoft_Excel_Worksheet4.xlsx → **TDR_零部件清单模板.xlsx** | 15KB | 物料/零部件清单空模板 |

**从 E3 CTS技术规范.docx（2个可读 + 3个OLE不可读）：**

| # | 原始名 → 重命名 | 大小 | 角色 | 状态 |
|---|------------------|------|------|------|
| E15 | Microsoft_PowerPoint_Presentation.pptx → **CTS_燃油管路总成技术规范.pptx** | 1MB | 与主PPTX内容一致（含1个OLE damper图纸） | ✅ 已提取 |
| E16 | Microsoft_Excel_Worksheet.xlsx → **CTS_SVP验证测试计划.xlsx** | 46KB | 30项DV/PV测试计划表（3 sheets） | ✅ 已提取 |
| — | oleObject1/2/3.bin | OLE×3 | 旧格式嵌入 | ❌ 无法解码 |

#### 嵌入扫描终止

- E10-E14（5个TDR模板xlsx）：无进一步嵌入
- E15（CTS演示文稿pptx）：含1个OLE（damper图纸TIF，与E9相同）
- E16（SVP测试计划xlsx）：无进一步嵌入
- **递归终止，无更多嵌套文件**

#### ⚠️ 重要原则：客户模板优先

以下嵌入文件是 **Stellantis提供的标准模板**，后续步骤生成TDR文件时必须使用这些客户模板，而非自有模板：

| 客户模板 | 用途 | 对应TDR步骤 |
|----------|------|------------|
| `TDR_ED&D成本分解模板.xlsx` | 工程开发费用分解 | Step 5 → TDR1 |
| `TDR_SDT团队成员表.xlsx` | SDT团队名单 | Step 5 → TDR5 |
| `TDR_技术要求清单模板.xlsx` | 技术规范对照/例外事项 | Step 4 → TDR6 |
| `TDR_RASI责任矩阵.xlsx` | RASI责任矩阵 | Step 5 → TDR7 |
| `TDR_零部件清单模板.xlsx` | 补充材料/零部件清单 | Step 5 → TDR8 |
| `CTS_SVP验证测试计划.xlsx` | DV/PV测试计划 | Step 5 参考 |
| `STLA-DVPR模板.xlsx`（主文件） | PV验证测试计划格式 | Step 5 参考 |

### 1.3 文件层级关系

```
SSTS (采购技术总要求) ── 框架文件，定义项目范围、质量目标、交付物清单
  ├── CTS (零部件技术规范) ── 具体技术要求，但核心内容引用PF.90197
  │     ├── PF.90197 (性能标准) ── 燃油管总成核心性能/测试/验收标准
  │     ├── PF.90298 (QC规范) ── 快插接头专项性能/测试/验收标准
  │     └── PPTX (零件描述) ── BOM、接口、damper规格
  ├── DVPR模板 ── DV/PV测试计划格式模板（空白，需供应商填写）
  └── Deliverables清单 ── 15项交付物及时间要求
```

**覆盖关系**：CTS中技术要求§3.1-3.6全部defer到PF.90197对应章节，CTS本身仅补充：
- 金属管内部需镍镀处理（§3.1）
- 所有管端需保护帽（§3.7）

---

## 2. 结构化数据提取

### 2.1 BOM — FC00SAA78530 Fuel Supply Line Filter to Engine

**总成级 BOM（来源：PPTX Slide 4）：**

| Level | 零部件 | 数量 | 材料 | 规格引用 |
|-------|--------|------|------|----------|
| 0 | Fuel line damper 总成 | 1 | — | — |
| 1 | Capot（端盖） | 1 | PA66+PA6 | PF.90197 |
| 1 | Spring compression 4.5 bar（压缩弹簧） | 1 | NF EN 10270-3 | PF.90197 |
| 1 | Plug（堵头） | 1 | PA66 GF30 | PF.90197 |
| 1 | Membrane（膜片） | 1 | 54U6002+AgN91S | — |
| 1 | Damper 8×10（减振器本体） | 1 | PA66 GF30 | PF.90197 |

**供油管总成级 BOM（来源：CTS嵌入PPT Slide 4）：**

| Level | 零部件 | FCA零件号 | 数量 | 材料/规格 | 规格引用 |
|-------|--------|----------|------|----------|----------|
| 0 | Assembly Feed Line | FC00SAA78530 | 1 | — | — |
| 1 | QC Female 90° SAE 5/16"（滤清器侧） | — | 1 | — | PF.90298 |
| 1 | QC Female 90° SAE 3/8" w/ seck-lock（发动机侧） | — | 1 | 金属+二次锁扣 | PF.90298 |
| 1 | Plastic pipe (Feed) | — | 1 | Ø8mm×6mm | PF.90197 |
| 1 | Damper | 52183408 | 1 | — | Nobel Auto供应 |
| 1 | Anti-abrasion sleeve（防磨套管） | — | 1 | Braided sleeve CPN 5302 (Meihe) | SP.91220/02, PF.90271 |

### 2.2 关键性能指标

| 类别 | 参数 | 要求值 | 来源 |
|------|------|--------|------|
| **尺寸** | Feed管径 | Ø8mm×6mm | PPTX Slide 2 |
| **尺寸** | Return管径 | Ø10mm×8mm（如适用） | PPTX Slide 2 |
| **工作压力** | Damper工作压力 | 4.5 bar | PPTX Slide 3 |
| **温度** | 持续使用温度（尼龙管） | 90°C ± 2°C | PF.90197 §5.2 |
| **温度** | 短时极限温度 | 115°C +/-2°C (30min) | PF.90197 §5.2 |
| **温度** | 最低工作温度 | -40°C ± 2°C | PF.90197 §5.2 |
| **温度** | QC接头工作温度 | -40°C ~ 120°C, 短时135°C/20min | PF.90298 §5 |
| **压力** | QC接头工作压力 | ≤ 6 bar | PF.90298 §5 |
| **压力** | QC接头真空 | ≥ -0.5 bar | PF.90298 §5 |
| **拉脱力** | 燃油管接头（常温） | ≥ 450N (101 lbf) | PF.90197 §6.3.5 |
| **拉脱力** | 燃油管接头（115°C） | ≥ 115N (25.9 lbf) | PF.90197 §6.3.5 |
| **拉脱力** | QC未暴露燃油（液体） | ≥ 450N | PF.90298 §7.3 |
| **拉脱力** | QC已暴露燃油（液体） | ≥ 297N | PF.90298 §7.3 |
| **装配力** | 卡扣到车身（双手） | ≤ 40N（单手20N） | PF.90197 §6.3.4 |
| **装配力** | 卡扣拆卸力 | ≥ 100N | PF.90197 §6.3.4 |
| **装配力** | 管插入卡扣力 | ≤ 40N | PF.90197 §6.3.4 |
| **装配力** | 管从卡扣拆出力 | ≥ 80N | PF.90197 §6.3.4 |
| **装配力** | QC装配力（<11mm） | ≤ 67N (15 lb) | PF.90298 §7.2 |
| **装配力** | QC Cartridge插入力 | ≤ 650N | PF.90298 §7.2.1 |
| **插入力** | 燃油管接头插入力（<11mm） | ≤ 67N | PF.90197 §6.2.4 |
| **爆破** | 常温最低爆破 = 8×系统工作压力 | 8 × 4.5 = 36 bar（参考） | PF.90197 §7.4 |
| **爆破** | 高温(115°C) = 3×系统工作压力 | 3 × 4.5 = 13.5 bar（参考） | PF.90197 §7.4 |
| **爆破** | QC液体燃油接头 | ≥ 3447 kPa (500 psig) | PF.90298 §6.3.6 |
| **泄漏** | 液体管VLD检测 | 15μm × 3mm | PF.90197 §7.2 |
| **泄漏** | 蒸汽管VLD检测 | 20μm × 3mm | PF.90197 §7.2 |
| **泄漏** | 液体管测试压力 | ≥ 150 PSI | PF.90197 §7.2 |
| **泄漏** | QC最大泄漏率 | ≤ 0.5 cc/min | PF.90298 §7.1 |
| **流阻** | 测试压力（燃油管） | 400 kPa (58 PSI) | PF.90197 §7.3 |
| **流阻** | 形成操作保持截面 | ≥ 80%标称截面积 | PF.90197 §7.3 |
| **清洁度** | 总颗粒（gasoline/vapor） | ≤ 1.5 mg/dm² | PF.90197 §7.1 |
| **清洁度** | Diesel Filter "A"下游 50-100μm | < 50颗粒 | PF.90197 Table 6 |
| **清洁度** | Diesel Filter "A"下游 100-200μm | < 15颗粒 | PF.90197 Table 6 |
| **清洁度** | Diesel Filter "A"下游 200-500μm | < 2颗粒 | PF.90197 Table 6 |
| **清洁度** | Diesel Filter "A"下游 ≥500μm | 0颗粒 | PF.90197 Table 6 |
| **清洁度** | QC接头内部 | ≤ 0.75 mg/dm² | PF.90298 §6.2.4 |
| **NVH** | 主观评级 | ≥ 8（NVH Rating Scale） | PF.90197 §6.3.2 |
| **冲击** | QC动态冲击（金属） | ≥ 50J | PF.90298 §6.3.5 |
| **冲击** | QC动态冲击（塑料） | ≥ 10J | PF.90298 §6.3.5 |
| **ESD** | 导电电阻 | ≤ 1,000,000 Ω | PF.90298 §6.4.1 |
| **形变** | 塑料管弯角变化 | ≤ 3° | PF.90197 §6.3.9 |
| **储存** | QC接头存储寿命 | ≥ 1年无缺陷 | PF.90298 §5.6 |
| **寿命** | 设计寿命 | 15年 / 150,000 miles | PF.90197 §9 |

### 2.3 材料力学性能（PF.90197 Table 3 — 塑料管）

| 测试条件 | 抗拉强度 | 断裂伸长率 |
|----------|----------|----------|
| 新件 (50 mm/min) | ≥ 20 N/mm² | ≥ 160% |
| 燃油浸泡后 (§6.3.5) | ≥ 15 N/mm² | ≤ 50% of new |
| 自氧化燃油后 (SAE J2260-7.8) | ≥ 15 N/mm² | ≤ 50% of new |
| 热老化后 (SAE J2260-7.14) | ≥ 15 N/mm² | 仅表征 |

### 2.4 测试矩阵（Annex A — PF.90197）

| 测试项 | 章节 | DV样件 | PV样件 | DV验收 | PV验收 | 责任方 |
|--------|------|--------|--------|--------|--------|--------|
| Chemical Resistance | 5.1 | 15 | 15 | P99C90 | P99C90 | Supplier |
| Corrosion | 5.3 | 15 | 15 | P99C90 | P99C90 | Supplier |
| Chloride Resistance | 5.4 | 15 | 15 | P99C90 | P99C90 | Supplier |
| Appearance | 6.1 | 100% | 100% | All Pass | All Pass | Supplier |
| Material Layer | 6.2.2 | 15 | 15 | P99C90 | P99C90 | Supplier |
| Connector Insertion Force | 6.2.4 | 15 | 15 | P99C90 | P99C90 | Supplier |
| Static Charge Dissipation | 6.2.5 | 15 | 15 | P99C90 | P99C90 | Supplier |
| NVH | 6.3.2 | Note 3 | Note 3 | P99C90 | P99C90 | STELLANTIS |
| Clip Insertion/Retention | 6.3.4 | 15 | 15 | P99C90 | P99C90 | Supplier |
| Fitting Pull-Off | 6.3.5 | 15 | 15 | P99C90 | P99C90 | Supplier |
| Internal Fuel Resistance | 6.3.6 | 15 | 15 | P99C90 | P99C90 | Supplier |
| Shipping Dimensional | 6.3.7 | — | 15 | P99C90 | P99C90 | Supplier |
| Dimensional Verification | 6.3.8 | 15 | 15 | P99C90 | P99C90 | Supplier |
| Formed Plastic Line Integrity | 6.3.9 | 15 | 15 | P99C90 | P99C90 | Supplier |
| Internal Cleanliness | 7.1 | 15 | 15 | P99C90 | P99C90 | Supplier |
| Leak Resistance | 7.2 | 15 | 15 | P99C90 | P99C90 | Supplier |
| Pressure Drop/Flow | 7.3 | 15 | 15 | P99C90 | P99C90 | Supplier |
| Burst Test | 7.4 | 15 | 15 | P99C90 | P99C90 | Supplier |
| Impact | 8.1 | Note 3 | Note 3 | All Pass | All Pass | STELLANTIS |
| MiniSHED | 8.2 | 15 | 15 | P99C90 | R95C90 | Supplier |
| Life Cycle Test | 9.3 | 45 | 45 | R95C90 | R95C90 | Supplier |
| Vibration Cycle Test | 9.4 | 45 | 45 | R95C90 | R95C90 | Supplier |
| Pulsating Pressure | 9.5 | 45 | 45 | R95C90 | R95C90 | Supplier |

### 2.5 测试矩阵（Annex A — PF.90298 快插接头）

| 测试项 | 章节 | DV样件 | PV样件 | DV验收 | PV验收 | 责任方 |
|--------|------|--------|--------|--------|--------|--------|
| Corrosion | 5.1 | 15 | 15 | P99C90 | P99C90 | Supplier |
| Zinc Chloride Resistance | 5.2 | 15 | 15 | P99C90 | P99C90 | Supplier |
| Calcium Chloride Resistance | 5.3 | 15 | 15 | P99C90 | P99C90 | Supplier |
| Chemical Exposure | 5.4 | 15 | 15 | P99C90 | P99C90 | Supplier |
| Internal Fuel Resistance | 5.5 | 15 | 15 | P99C90 | P99C90 | Supplier |
| Appearance | 6.1 | 100% | 100% | All Pass | All Pass | Supplier |
| DSC (熔点) | 6.2.1.2 | N/A | 15 | N/A | P99C90 | Supplier |
| Internal Cleanliness | 6.2.4 | 15 | 15 | P99C90 | P99C90 | Supplier |
| Misalignment Assembly | 6.3.1 | 30 | 30 | P99C90 | P99C90 | Supplier |
| Dynamic Impact | 6.3.5 | 15 | 15 | P99C90 | P99C90 | Supplier |
| Elevated Temp Burst | 6.3.7 | 15 | 15 | P99C90 | P99C90 | Supplier |
| ESD Resistance | 6.4.1 | 15 | 15 | P99C90 | P99C90 | Supplier |
| Low Pressure Leak | 7.1.1 | 15 | 15 | P99C90 | P99C90 | Supplier |
| High Pressure Leak | 7.1.2 | 15 | 15 | P99C90 | P99C90 | Supplier |
| Vacuum Leak | 7.1.3 | 15 | 15 | P99C90 | P99C90 | Supplier |
| In Process Leak | 7.1.4 | 100% | 100% | All Pass | All Pass | Supplier |
| Assembly Effort | 7.2 | 15 | 15 | P99C90 | P99C90 | Supplier |
| Pull-Apart Effort | 7.3 | 15 | 15 | P99C90 | P99C90 | Supplier |
| Side Load Capability | 7.4 | 15 | 15 | P99C90 | P99C90 | Supplier |
| Flow Restriction | 7.5 | 15 | 15 | P99C90 | P99C90 | Supplier |
| Gravel Resistance | 7.6 | 15 | 15 | P99C90 | P99C90 | Supplier |
| Vehicle Impact | 8.1 | VST | VST | All Pass | All Pass | FCA |
| Vehicle Durability | 9.1 | VST | VST | All Pass | All Pass | FCA |
| Latch Fatigue | 9.3 | 45 | 45 | R95C90 | R95C90 | Supplier/FCA |
| Life Cycling | 9.4 | 45 | 45 | R95C90 | R95C90 | Supplier |
| Rocker | 9.6 | 45 | 45 | R95C90 | R95C90 | Supplier |

### 2.6 脉冲压力测试分级（PF.90197 §9.5）

本项目为柴油供油管，适用等级：

| 等级 | 版本 | 工作压力 | 脉冲压力 | 循环次数 | 适用 |
|------|------|----------|----------|----------|------|
| **P5** | UniJet Turbo Diesel | 0-5 bar | 0 ~ 2×工作压力 | 300,000 (std S&S) / 600,000 (S&S+FW) | **本项目（2.2 Diesel, 4.5bar工作压力）** |

### 2.7 引用规范清单

**Stellantis内部标准（PF.90197引用）：**

| 编号 | 名称 | 供应商可下载 |
|------|------|:---:|
| CD.80064 | Fuel Bundle Core Documents | N |
| CS.00251 | Corrosion Requirements | Y |
| CS-11000 | Trademark ID on Parts | Y |
| CS.00050 | Wiring Design & Package Requirements | Y |
| CS.00265 | Substances of Concern | Y |
| CS.CCP-ROUTING | CCP Routings | Y |
| LP.7A004 | Fuel System Electrostatic Charge | N |
| LP.7A005 | Mini-SHED Evaporative Emission Test | Y |
| MS.90025/06 | Brazing Tube Steel Double Walled | Y |
| PF.90092 | Brake Tube Assembly | Y |
| PF.90298 | Quick Connect - Fuel System | Y |
| PF-EMISSIONS | Identification of Emissions Items | Y |
| PF-SAFETY | Product Safety | Y |
| PS.50005/06 | Welding Tubes | Y |
| PS-11346 | Warranty Returned Parts | Y |
| LP.7M114 | Plastics Moisture Conditioning PA | Y |
| PS-4480 | Identification of Parts | Y |
| PS-8688 | Coatings for Steel Tubing | Y |
| QR.00001 | GPAT | Y |
| QR-10012 | Dimensional Quality Requirements | Y |
| SD-11597 | Fuel Compatibility List | Y |
| SD-M0008/03 | Plastic Fuel Line Requirements/Approvals | Y |
| 9.02145/02 | Electrowelded Steel Pipes for Fuel Circuits | Y |
| 7.G0200 | Impurities in Fluid Circulation (Flux) | Y |
| 7.N0007 | Finish Components Vehicle Interior/Exterior | Y |
| DS-107 | BSR Design Guidelines | Y |

**外部标准（PF.90197 + PF.90298引用）：**

| 编号 | 名称 |
|------|------|
| SAE J1645 | Fuel System Electrostatic Charge |
| SAE J1677 | Test for Carbon Steel / Low Alloy Steel Tubing |
| SAE J2027 | Protective Covers for Gasoline Fuel Line Tubing |
| SAE J2044 | Quick Connect Coupling for Liquid Fuel and Vapor/Emissions |
| SAE J2045 | Performance Requirements for Fuel System Tubing Assemblies |
| SAE J2260 | Nonmetallic Fuel System Tubing (One or More Layers) |
| SAE J2334 | Laboratory Cyclic Corrosion Test |
| SAE J400 | Test for Chip Resistance of Surface Coatings |
| DIN 51604 | FAM Testing Fluid for Polymer Materials |
| DIN 53504 | Tensile Stress/Strain Properties of Rubber |
| EN 14214 | FAME for Diesel Engines |
| EN ISO 527-2 | Plastics Tensile Properties |
| FMVSS 301 | Fuel System Integrity |

### 2.8 质量目标（SSTS）

| 指标 | 要求 | 来源 |
|------|------|------|
| CCP (Customer Car Profile) | 供应商须承诺达成CCP目标 | SSTS |
| TESIS可靠性目标（车底） | 3M: 0.00 / 12M: 0.035 / 24M: 0.089 / 36M: 0.120 (c/1000) | SSTS |
| TESIS可靠性目标（舱内） | 3M: 0.00 / 12M: 0.065 / 24M: 0.160 / 36M: 0.365 (c/1000) | SSTS |
| QT (Quality Tracking) | 供应商须承诺达成QT目标 | SSTS |
| ICP (Initial Customer Perception) | 0（单个零部件） | SSTS |
| 功能要求可靠性 | P99C90（功能测试） | PF.90197 Annex A |
| 耐久要求可靠性 | R95C90（耐久测试） | PF.90197 Annex A |
| 年度自认证 | 供应商须每年重复self validation plan | SSTS |
| 最低样件数 | 见PF.90068 Annex A，需与Specialist协商 | SSTS |

### 2.9 交付物要求（Deliverables — SSTS嵌入）

| # | 交付物 | 时间节点 | 责任方 |
|---|--------|----------|--------|
| 1 | UG/Teamcenter CAD能力证明 | SOURCING | Supplier |
| 2 | Co-design成本分解 | SOURCING | Supplier |
| 3 | SDT供应商开发团队 | SOURCING | Supplier |
| 4 | 开发成本须含测试零件费用 | SOURCING | Supplier |
| 5 | 供应商时间计划（对应整车） | SOURCING | Supplier |
| 6 | 例外事项清单 (Exception List) | SOURCING | Supplier |
| 7 | RASI矩阵 | SOURCING | Supplier/Approval |
| 8 | CAD数据（Soft Tooling） | SOURCING | Supplier |
| 9 | 完整2D图纸 | by TKO | Supplier |
| 10 | 最佳实践分享 | SOURCING | Supplier |
| 11 | Product & Process FMEA | by TKO | Supplier |
| 12 | CAD数据（完整） | by TKO | Supplier |
| 13 | 系统性能分析支持 | DV ~ PV | Supplier |
| 14 | DV/PV测试计划 | SOURCING | Supplier |
| 15 | 总装厂SOP支持 | by SOP | Supplier |

### 2.10 签署人/联系人

| 角色 | 姓名 | 来源 |
|------|------|------|
| Author (PF.90197) | Fernando Sada / NA | PF.90197 封面 |
| Co-Author (PF.90197) | Bruno Le Moine / EMEA | PF.90197 封面 |
| Author (PF.90298) | Michael Marcon | PF.90298 封面 |
| Co-Author (PF.90298) | Bruno Le Moine | PF.90298 封面 |
| FCA Engineer Lead (SSTS) | (未填) | SSTS签署区 |
| PC (SSTS) | Yuhan Zhang | SSTS签署区 |
| PR (SSTS) | Grace Tan | SSTS签署区 |

---

## 3. 公司档案识别

已加载 `company-profile/` 目录：

| 文件 | 内容摘要 |
|------|----------|
| **能力声明.xlsx** | 诺贝尔汽车零部件(Nobel Auto)，320人，2.5亿元/年，IATF 16949认证，8项制造能力，12项测试能力 |
| **SDT团队表.xlsx** | 8人项目团队（PM王强、DE李明、QE张伟等），客户对口人待填 |
| **成本费率.xlsx** | 10种材料单价（PA66 GF30 ¥28/kg等）、11项工时费率、管理费率15%/利润8% |

**关键发现**：
- Nobel Auto是damper的现有供应商（PPTX Slide 3明确标注"Supplier: Nobel Auto"）
- 3D CAD工具是 CATIA V5（非UG/NX），但SSTS要求UG/Teamcenter → **潜在不符项**
- 无PLM/Teamcenter → 需采购或协商替代方案
- 表面处理（镀镍）需委外 → CTS §3.1要求金属管内镍镀
- 振动耐久测试需委外（国家实验室）

---

## 4. 初步风险标注

| # | 风险项 | 严重度 | 说明 |
|---|--------|--------|------|
| R1 | **CAD工具不匹配** | 高 | 客户要求UG/Teamcenter，我方使用CATIA V5，需采购或协商 |
| R2 | **镀镍委外** | 中 | CTS要求金属管内镍镀处理，我方无内部能力，需委外 |
| R3 | **振动耐久委外** | 中 | PF.90197 §9.4要求振动循环测试（45件），需委外至国家实验室 |
| R4 | **Damper图纸** | 低 | 嵌入TIF（52183408_A）无法直接读取，需确认是否有最新版CAD |
| R5 | **3D模型** | 高 | 交付物要求3D CAD数据，且必须是UG格式或Parasolid |

---

## 5. Step 1 完成 — 等待确认

以上分析基于文件包中的全部6个主文件，经3层递归扫描共检测到16个嵌入对象（10个已提取可读，6个OLE无法解码）。

**请确认以下问题：**
1. 分析结果有遗漏或错误吗？
2. 本项目确认为EMEA市场（基于CaCl₂测试要求推断）对吗？
3. Nobel Auto既是damper供应商，同时也是本次报价的Tier1供应商吗？（即自供damper）
4. CAD工具不匹配问题（CATIA vs UG）是否已有预案？

**确认后进入 Step 2 — 完整性检查。**
