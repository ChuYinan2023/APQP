# Step 1 — 文件解析报告

## 项目概要

| 项目 | 内容 |
|------|------|
| OEM | **Stellantis** (确认：SSTS格式、PF.xxxxx编号、Stellantis品牌标识) |
| 项目代号 | **KP1 A&B** |
| 零件名称 | **Fuel supply line — diesel filter to engine**（燃油供给管路——柴油滤清器到发动机） |
| TcAE编号 | FC00SAA78530 |
| 发动机 | 2.2 Diesel |
| CTS发布日期 | 2022-03-09, Rev.00 |
| Stellantis工程师 | PC: Yuhan Zhang, PR: Grace Tan |
| 设计寿命 | 15年 / 150,000 miles |

## 公司档案识别

已找到 `company-profile/` 目录，识别到以下公司信息：

| 项目 | 内容 |
|------|------|
| 公司 | 诺贝尔汽车零部件有限公司 (Nobel Auto) |
| 主要产品 | 燃油管路总成、快插接头、塑料管件 |
| 质量体系 | IATF 16949 ✅、ISO 14001 ✅、VDA 6.3 A级 ✅、IMDS ✅ |
| SDT团队 | 8人配置（PM王强、DE李明、QE张伟等） |
| 成本数据 | 材料单价库(10项)、工时费率(11项工艺)、管理费率齐全 |

---

## 文件清单

### 客户文件包（infile/）

| # | 文件名 | 类型 | 角色 | 语言 | 页数/行数 | 说明 |
|---|--------|------|------|------|---------|------|
| 1 | SSTS KP1 Fuel line.xlsx | XLSX | **采购技术总要求** | EN | 2 Sheets | Product Description + Content Sheet，最高层级框架 |
| 2 | KP1_CTS_零部件技术规范.docx | DOCX | **零部件技术规范 (CTS)** | EN | ~5页+6表 | 填具体技术要求值，引用PF.90197各章节 |
| 3 | PF.90197.pdf | PDF | **性能标准** | EN | 28页 | Fuel Bundle and Fuel System Jumpers — Plastic, Rubber and Metallic。Change Level C, 03-APR-2025。Stellantis Harmonized |
| 4 | PF.90298_QC接头要求.pdf | PDF | **性能规范** | EN | 28页 | Quick Connect — Fuel Systems。Change Level B, 04-FEB-2022。Globally Harmonized |
| 5 | KP1_TDR_技术报价所需文件清单.docx | DOCX | **报价文件清单** | EN | ~3页 | TDR 8项要求 |
| 6 | KP1_Deliverables_供应商交付物清单.xlsx | XLSX | **交付物清单** | EN | 1 Sheet | 16项交付物及时间节点 |
| 7 | STLA-DVPR模板.xlsx | XLSX | **DVPR模板** | EN | 1 Sheet | 空模板，需供应商填写 |
| 8 | KP1-Fuel-line-damper/KP1_Damper_Drawing_P003161.pdf | PDF | **零件图纸** | FR/EN | 1页 | Damper (Valve Surge) 图纸。Nobel Plastiques, P003161, FCA P/N 52183408 |
| 9 | KP1-Fuel-line-damper/slide-1~5.jpg | JPG | **零件描述PPT** | EN | 5页 | 零件3D视图、BOM、安装位置、通用要求 |

### 文件层级关系

```
SSTS (Product Description) ← 最高层级框架
├── CTS (零部件技术规范) ← 填具体值，冲突时CTS优先于PF
│   └── 引用 PF.90197 §3/5/6/7/8/9 作为性能标准
├── PF.90197 (燃油管路性能标准) ← 通用测试标准+验收标准+DV/PV样本量
│   └── 引用 PF.90298 作为快插接头子标准
├── PF.90298 (快插接头性能规范) ← QC专用测试标准
├── TDR (报价文件清单) ← 8项报价文件要求
├── Deliverables (交付物清单) ← 16项交付物+时间节点
├── DVPR模板 ← 空模板
└── Damper图纸+PPT ← 减振器子零件详细信息
```

---

## 提取的结构化数据

### 零件号与配置

| 项目 | 值 |
|------|---|
| TcAE | FC00SAA78530 |
| 描述 | SUPPLY LINE FILTER TO ENGINE |
| 配置 | 2.2 diesel final |
| CODEP | / (待确认) |

### BOM（来源：slide-4 Damper BOM）

| Level | 零件 | 数量 | 材料 | 规范 |
|-------|------|------|------|------|
| 0 | Fuel line damper | 1 | — | — |
| 1 | Capot（外壳） | 1 | PA66+PA6 | PF.90197 |
| 1 | Spring compression 4.5bars（弹簧） | 1 | NF EN 10270-3 | PF.90197 |
| 1 | Plug（堵头） | 1 | PA66 GF30 | PF.90197 |
| 1 | Membrane（膜片） | 1 | 54U6002+AgN91S | — |
| 1 | Damper 8×10（阻尼器体） | 1 | PA66 GF30 | PF.90197 |

> **注意**：以上仅为Damper子总成BOM。整条Fuel line的完整BOM（含管路、QC接头、卡扣、保护帽等）尚需3D CAD数据确认。

### Damper关键参数（来源：图纸P003161 + slide-3）

| 参数 | 值 | 来源 |
|------|---|------|
| 工作压力 | 4.5 bar | slide-3 |
| 设计验证压力 | 1.85 bar rel. | 图纸Note 6 |
| 耐久 | 1,000,000 cycles, 2~13.5 bar @ 98°C | 图纸Note 9 |
| 总重量 | 34g | 图纸Note 13 |
| 接头尺寸 | 2× 8×10 sapins (SAPIN端) | 图纸 |
| 外径 | φ44.6 (壳体), φ74±2 (法兰) | 图纸 |
| 清洁度 | per PF.90197 | 图纸Note 7 |
| 温度范围 | -40°C ~ +130°C continuous | 图纸Note 4 |

### 性能指标表（来源：PF.90197 + PF.90298 + CTS）

#### PF.90197 燃油管路主要要求

| 章节 | 测试项 | 关键要求 |
|------|--------|---------|
| 5.1 | 化学耐受 | 耐汽车化学品，试后满足6.1/7.2/7.4 |
| 5.2 | 温度限值 | 尼龙管连续 90±2°C，短期115°C；最低-40°C |
| 5.3 | 腐蚀 | 15年功能寿命，per CS.00251 |
| 5.4 | 氯化钙耐受(EMEA) | CaCl2 50%, 60±2°C, 200h |
| 5.5 | 氯化锌耐受 | ZnCl2, 环境温度, 168h |
| 6.1 | 外观 | 无裂纹/缺失/变色/变形，20X放大检查 |
| 6.2.1 | 材料 | 钢管 PS.50005/06+PS-8688；塑料管 SAE J2260 |
| 6.2.1 | 机械性能(Table 3) | 拉伸强度≥20 N/mm² (新件)，延伸率≥160% |
| 6.2.4 | 接头插入力 | <11mm: ≤67N; ≥11mm: ≤111N |
| 6.2.5 | 静电消散`<S>` | per SAE J1645 |
| 6.3.1 | BSR | per 7.N0007 / DS-107 |
| 6.3.2 | NVH | 主观评分 ≥ 8 (Table 4 Rating Scale) |
| 6.3.4 | 卡扣插拔力 | 安装≤20N(双指)/40N(全手)；拆卸≥100N |
| 6.3.5 | 拉脱力 | RT: 燃油管≥450N, 蒸汽管≥222N; 115°C: ≥115N / ≥65N |
| 6.3.6 | 内部燃油耐受 | 1048h循环（4×250h@120°C+12h@130°C），柴油C5/C6/C7 |
| 6.3.9 | 成型塑料管完整性 | 90°C 1h烘烤后弯角变化≤3° |
| 7.1 | 清洁度 | 汽油/蒸汽管≤1.5 mg/dm²；柴滤下游: Table 6分级限值 |
| 7.2 | 泄漏`<S,E>` | VLD 15μm×3mm(液)/20μm×3mm(汽)；150 PSI(液)/10 PSI(汽) |
| 7.3 | 压降/流阻 | 400 kPa(液)/ 3.4 kPa(汽)，成型≥80%截面积 |
| 7.4 | 爆破 | RT: ≥8×工作压力; 115°C: ≥3×工作压力; 后处理后≥75%原值且≥3×工作压力 |
| 8.1 | 碰撞安全 | FMVSS 301 |
| 8.2 | MiniSHED`<E>` | per LP.7A005 |
| 9.3 | 寿命循环 | per SAE J2045 §4.6 |
| 9.4 | 振动耐久 | R95/C90，通用频谱 Table 8 |
| 9.5 | 脉冲压力 | P1(回油0-1bar), P2(供油2-5bar), P5(UniJet柴油0-5bar)，300k~600k次 |

#### PF.90298 快插接头主要要求

| 章节 | 测试项 | 关键要求 |
|------|--------|---------|
| 环境 | 工作条件 | ≤6 bar, 真空≥-0.5 bar, -40~120°C, 短期135°C/20min |
| 5.1 | 腐蚀 | per CS.00081, SAE J2334 180 cycles |
| 5.5 | 燃油耐受 | 同PF.90197方法，柴油C5/C6/C7/B-20/B-30 |
| 6.1 | 外观 | 无裂纹/孔洞/毛刺 |
| 6.2.1 | O-Ring材料 | 燃油侧FKM "B", 外部FVMQ(氟硅橡胶) |
| 6.2.4 | 清洁度 | ≤0.75 mg/dm² |
| 6.3.1 | 错位装配 | αMAX-5°内，O-Ring无损伤 |
| 6.3.5 | 动态冲击 | Charpy -30°C, 最低：金属50J/混合30J/塑料10J |
| 6.3.6 | 高温爆破 | 液体QC ≥3447 kPa(500 psi), 蒸汽QC ≥689 kPa(100 psi) |
| 6.4.1 | ESD`<S>` | DC电阻≤1 MΩ @ 500V |
| 7.1 | 泄漏 | 低压/高压/真空均 ≤0.5 cc/min air |
| 7.2 | 装配力 | <11mm: ≤67N(新); ≥11mm: ≤111N(新), ≤156N(旧) |
| 7.3 | 拉脱力 | 液体未浸泡≥450N，已浸泡≥297N；蒸汽未浸泡≥222N，已浸泡≥75N |
| 7.4 | 侧向载荷 | 按管径：8mm→225N, 10mm→310N, 12mm+→400N |
| 7.6 | 碎石 | SAE J400, 4.7L碎石 @ -30°C |
| 9.3 | 锁扣疲劳 | 30次拆装，R95C90 |
| 9.4 | 寿命循环 | per SAE J2044 §7.5, R95C90 |
| 9.5 | 摇摆试验 | 360,000次(蒸汽)/600,000次(液体), ±12" stroke |
| 1.8 | 二级锁 | 新设计强制要求，2步操作验证 |

### DV/PV 测试矩阵（来源：PF.90197 Annex A）

| 测试项 | 章节 | DV样本 | PV样本 | DV验收 | PV验收 | 责任方 |
|--------|------|--------|--------|--------|--------|--------|
| 化学耐受 | 5.1 | 15 | 15 | P99C90 | P99C90 | Supplier |
| 腐蚀 | 5.3 | 15 | 15 | P99C90 | P99C90 | Supplier |
| 氯化物耐受 | 5.4 | 15 | 15 | P99C90 | P99C90 | Supplier |
| 外观 | 6.1 | 100% | 100% | All Pass | All Pass | Supplier |
| 材料层 | 6.2.2 | 15 | 15 | P99C90 | P99C90 | Supplier |
| 接头插入力 | 6.2.4 | 15 | 15 | P99C90 | P99C90 | Supplier |
| 静电消散 | 6.2.5 | 15 | 15 | P99C90 | P99C90 | Supplier |
| NVH | 6.3.2 | Note 3 | Note 3 | P99C90 | P99C90 | STELLANTIS |
| 卡扣插拔 | 6.3.4 | 15 | 15 | P99C90 | P99C90 | Supplier |
| 拉脱力 | 6.3.5 | 15 | 15 | P99C90 | P99C90 | Supplier |
| 燃油耐受 | 6.3.6 | 15 | 15 | P99C90 | P99C90 | Supplier |
| 运输尺寸 | 6.3.7 | — | 15 | — | P99C90 | Supplier |
| 尺寸验证 | 6.3.8 | 15 | 15 | P99C90 | P99C90 | Supplier |
| 成型完整性 | 6.3.9 | 15 | 15 | P99C90 | P99C90 | Supplier |
| 清洁度 | 7.1 | 15 | 15 | P99C90 | P99C90 | Supplier |
| 泄漏 | 7.2 | 15 | 15 | P99C90 | P99C90 | Supplier |
| 压降/流阻 | 7.3 | 15 | 15 | P99C90 | P99C90 | Supplier |
| 爆破 | 7.4 | 15 | 15 | P99C90 | P99C90 | Supplier |
| 碰撞 | 8.1 | Note 3 | Note 3 | All Pass | All Pass | STELLANTIS |
| MiniSHED | 8.2 | 15 | 15 | P99C90 | R95C90 | Supplier |
| 车辆级耐久 | 9.1 | Note 3 | Note 3 | All Pass | All Pass | STELLANTIS |
| **寿命循环** | **9.3** | **45** | **45** | **R95C90** | **R95C90** | **Supplier** |
| **振动耐久** | **9.4** | **45** | **45** | **R95C90** | **R95C90** | **Supplier** |
| **脉冲压力** | **9.5** | **45** | **45** | **R95C90** | **R95C90** | **Supplier** |

### 质量目标（来源：SSTS）

| 目标 | 值 |
|------|---|
| CCP (Customer Car Profile) | 承诺共享目标达成 |
| 可靠性 | Underbody: 0.00 c/1000 @3M, 0.035 c/1000 @12M |
| QT (Quality Tracking) | 承诺共享目标达成 |
| ICP (Initial Customer Perception) | 0 for single component |
| Bench Demonstration | per PF.90068 Annex A |
| 功能试验 | P99C90 |
| 耐久试验 | R95C90 (slide-2明确) |

### 引用规范清单

#### PF.90197 引用的 Stellantis 内部标准

| 编号 | 名称 | 供应商可下载 |
|------|------|:---:|
| CD.80064 | Fuel Bundle Core Documents | N |
| CS.00251 | Corrosion Requirements | Y |
| CS-11000 | Trademark Identification on Parts | Y |
| CS.00050 | Wiring Design and Package Requirements | Y |
| CS.00265 | Substances of Concern | Y |
| CS.CCP-ROUTING | CCP Routings General Info | Y |
| LP.7A004 | Fuel System Electrostatic Charge | N |
| LP.7A005 | Mini-SHED Evaporative Emission Test | Y |
| LP.7M114 | Plastics Moisture Conditioning PA Parts | Y |
| MS.90025/06 | Brazing Tube Steel Double Walled | Y |
| PF.90092 | Brake Tube Assembly | Y |
| **PF.90298** | **Quick Connect - Fuel System** | **Y (已提供)** |
| PF-EMISSIONS | Identification of Emissions Items | Y |
| PF-SAFETY | Product Safety - Use of Safety Shields | Y |
| PS.50005/06 | Welding - Tubes | Y |
| PS-11346 | Warranty Returned Parts Testing | Y |
| PS-4480 | Identification of Parts | Y |
| PS-8688 | Coatings for Steel Tubing | Y |
| QR.00001 | GPAT | Y |
| QR-10012 | Dimensional Quality Requirements | Y |
| SD-11597 | Fuel Compatibility List | Y |
| SD-M0008/03 | Plastic Fuel Line Requirements/Approvals | Y |
| 7.G0200 | Impurities Determination (Flux Method) | Y |
| 9.02145/02 | Electrowelded Steel Pipes for Fuel Circuits | Y |
| 7.N0007 | Finish Components Vehicle Noise | Y |
| DS-107 | BSR Design Guidelines | Y |

#### PF.90298 额外引用的标准

| 编号 | 名称 | 可下载 |
|------|------|:---:|
| CS-9003 | Restricted/Prohibited Substances | Y |
| MS-10756 | Diesel Fuel Test Fuel | Y |
| MS-10781 | EU Typical Cetane Diesel | Y |
| MS-11182 | Biodiesel B-20 Test Fuel | Y |
| MS-12506 | E15 Test Fuel | Y |
| MS-8004 | Tier 2 Indolene | Y |
| PS-7300 | Product Quality - Use of Diamonds | Y |

#### CTS引用的补充标准

| 编号 | 名称 |
|------|------|
| 9.01102 | Supplier Quality |
| 9.01103 | Product Quality Certificate |
| 07740 | Qualification Procedure |
| 00270 (CS.00133) | Product FMEA |
| 00271 | Process FMEA |
| MS.50017 | PA Nylon (Harmonized) |
| MS.50015 | TPV EPDM/PP (Harmonized) |
| 9.14618 | Rubber O-Rings Seals |
| PF.90271 | Wiring Harness Protection |
| MS.90111 | Tape |
| 9.55253 | Miscellaneous Plastic Component |
| ASME Y14.5-2009 | Dimensioning and Tolerancing |
| CS.00019 | GD&T Practices |

#### 外部标准

| 编号 | 名称 |
|------|------|
| SAE J1645 | Fuel System Electrostatic Charge |
| SAE J1677 | Test for Carbon Steel and Low Alloy Steel Tubing |
| SAE J2027 | Standard for Protective Covers |
| SAE J2044 | Quick Connect Coupling Specification |
| SAE J2045 | Performance Requirements for Fuel System Tubing |
| SAE J2260 | Nonmetallic Fuel System Tubing |
| SAE J2334 | Laboratory Cyclic Corrosion Test |
| SAE J400 | Test for Chip Resistance |
| DIN 51604 | FAM Testing Fluid for Polymer Materials |
| DIN 53504 | Tensile Stress/Strain Properties of Rubber |
| EN 14214 | FAME for Diesel Engines |
| EN ISO 527-2 | Plastics Tensile Properties |
| FMVSS 301 | Fuel System Integrity |

### TDR 报价文件要求（来源：TDR docx）

| TDR # | 文件 | 说明 | 时间 |
|:---:|------|------|------|
| 1 | Co-design Cost Breakdown | 成本分解 | Sourcing |
| 2 | Virtual Analysis | **不适用 (Not applicable)** | — |
| 3 | Component Development Sheet (CDS) | 开发计划表 | Sourcing |
| 4 | 3D Model | UG .prt 或 Parasolid，**非其他格式** | CAD Step Release ≥ TKO前10天 |
| 5 | Supplier Development Team (SDT) | 项目团队 | Sourcing |
| 6 | List of Exceptions | 例外事项清单 | Sourcing |
| 7 | RASI | 职责分配矩阵 | Sourcing |
| 8 | Additional Material List | 测试补充材料清单 | Sourcing |

### 关键时间约束

| 节点 | 要求 |
|------|------|
| CAD Step Release | TKO 前至少 10 天 |
| VP 阶段 | Off-Tools (OT)，VP前15天交付 |
| PS 阶段 | Off-Tools Off-Process (OTOP) + AQF，PS前15天交付 |
| 2D 图纸 | TKO前 |
| FMEA | TKO前 |
| DV/PV Plan | Sourcing阶段讨论 |

### 签署人/联系人

**Stellantis 侧**（来源：SSTS）：
- FCA Engineer Lead / PC: **Yuhan Zhang**
- PR: **Grace Tan**
- VIR / MR / Affidabilità: (空)

**PF.90197 作者**：
- Author: Fernando Sada / NA (fernando.sada1@stellantis.com), Fuel Systems
- Co-Author: Bruno Le Moine / EMEA (bruno.lemoine@stellantis.com), Fuel Systems

**PF.90298 作者**：
- Author: Michael Marcon (michael.marcon@stellantis.com)
- Co-Author: Bruno Le Moine (bruno.lemoine@stellantis.com)

---

## 需确认事项

### 1. 分析结果确认

以上分析是否准确？有遗漏或错误吗？

### 2. OEM联系人补充

SSTS中客户侧联系人（VIR、MR、SQE等）为空，是否需要补充到SDT对口人表中？

### 3. 零件配置确认

CTS中 Proliferation Table 仅列出一个配置（Fuel line filter to engine, 2.2 Diesel）。是否还有其他配置/变体需纳入报价？

### 4. 3D CAD工具

公司档案显示使用 **CATIA V5**，但TDR要求 **UG (Unigraphics) / Parasolid** 格式。需确认：
- 是否需要采购UG/NX许可证？
- 还是通过格式转换交付？

### 5. Damper子总成

图纸标注供应商为 Nobel Plastiques（与我方公司名Nobel Auto相近但不同）。请确认：
- Damper是客户指定件还是我方自行设计？
- 图纸P003161是参考还是必须严格遵循？

**确认以上事项后，我将进入 Step 2 — 完整性检查。**
