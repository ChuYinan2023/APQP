# KP1 A&B 燃油管 — Phase A 文件分析报告

> 生成时间：2026-03-02
> OEM：**Stellantis (FCA)**
> 零部件：**KP1 A&B Fuel Supply Line — Diesel Filter to Engine**
> 零件号：**FC00SAA78530**

---

## 1. 文件清单与角色分类

### 1.1 顶层文件（客户发来）

| # | 文件名 | 类型 | 角色分类 | 说明 |
|---|--------|------|---------|------|
| 1 | SSTS KP1 Fuel line.xlsx | XLSX | ①采购技术总要求 | Stellantis SSTS，内嵌 CTS + TDR + 交付物时间表 |
| 2 | PF.90197.pdf | PDF | ③性能标准 | Fuel Bundle and Fuel System Jumpers，28页，2025-04 Change Level C |
| 3 | PF.90298_QC 接头要求.pdf | PDF | ③性能标准 | Quick Connect Fuel Systems，28页，2022-02 Change Level B |
| 4 | PF.90068.pdf | PDF | ③性能标准 | DEF Heated Supply Lines，37页，2025 Change Level C |
| 5 | KP1 Fuel line damper description.pptx | PPTX | ④零件描述/BOM | 阻尼器描述，5页，含BOM和工程图 |
| 6 | STLA-DVPR模板.xlsx | XLSX | ⑥报价文件模板 | DVPR/PVP 验证计划模板，34行×80列 |

### 1.2 嵌入文件提取树

```
Layer 0: 顶层文件
├── SSTS KP1 Fuel line.xlsx
│   ├── SSTS_KP1_embedded_Word_Doc1.docx          → TDR (交付物清单)
│   │   ├── L1_TDR_ED&D_PriceBreakdown_Template.xlsx    → 客户模板: ED&D成本分解
│   │   ├── L1_TDR_SupplierDevelopmentTeam_Template.xlsx → 客户模板: SDT团队名册
│   │   ├── L1_TDR_ListOfExceptions_Template.xlsx        → 客户模板: 例外事项
│   │   ├── L1_TDR_RASI_MediumLevel_Template.xlsx        → 客户模板: RASI矩阵 (214行×85列)
│   │   └── L1_TDR_AdditionalMaterialList_BOM_Template.xlsx → 客户模板: BOM清单
│   ├── SSTS_KP1_embedded_Word_Doc2.docx          → CTS (零部件技术规范)
│   │   ├── L1_CTS_KP1_FuelLine_ComponentDescription.pptx → 零件描述(与顶层PPTX内容相同)
│   │   │   └── L2_CTS_PPTX_Damper_52183408_A_20200907.tif → 阻尼器工程图
│   │   ├── L1_CTS_MaterialsRestrictions_ELV_REACH.pdf    → 材料限制(ELV/REACH)
│   │   ├── L1_CTS_ProtectionCaps_Characteristics.pdf     → 保护套要求
│   │   ├── L1_CTS_Damper_Photo_Qh.jpg                   → 阻尼器实物照片
│   │   └── L1_CTS_FCA_SVP_Form_Annex2.xlsx              → SVP验证计划模板
│   ├── SSTS_KP1_embedded_Excel.xlsx              → 交付物时间表 (15项)
│   └── SSTS_KP1_image1.png                       → 媒体图片
├── KP1 Fuel line damper description.pptx
│   └── KP1_damper_oleObject1.bin → 52183408_A_20200907.tif (阻尼器工程图)
└── STLA-DVPR模板.xlsx                            → 无嵌入
```

**提取统计**：Layer 0 → 4文件 | Layer 1 → 10文件 | Layer 2 → 1文件 | 共15个有效提取物

---

## 2. OEM识别

**OEM：Stellantis (FCA / Fiat Chrysler)**

识别依据：
- 文档编号前缀 PF.xxxxx（Performance Standard）
- SSTS (Supplier Specification Technical Sheet) 格式
- TDR 中 RASI 模板含 "Fiat-GM" 标准矩阵
- 意大利语 sheet 名 "Foglio1"、"Definizione"
- CTS 引用 9.01102、07740 等 Fiat 旧编号
- 分发来源：PRS_STLA_CHINA@stellantis.com

---

## 3. 结构化数据提取

### 3.1 基本信息

| 项目 | 值 |
|------|---|
| 零件号 | FC00SAA78530 |
| 零件名 | KP1 A&B Fuel Supply Line — Filter to Engine |
| 应用 | 2.2L 柴油发动机，燃油滤清器到发动机供油管 |
| 工作压力 | 4.5 bar（阻尼器标注） |
| 供应商 | Nobel Auto (诺贝尔汽车零部件有限公司) |
| 管径 | 供油管 Ø8×6mm，回油管 Ø10×8mm |
| QC类型 | 金属 QC，带二次锁扣 (seck-lock)，SAE 5/16" 和 3/8" |

### 3.2 BOM（来自 PPTX Slide 4）

| 层级 | 零部件 | 材料 | 参考规范 | 数量 |
|------|--------|------|---------|------|
| 0 | Fuel Line Damper Assembly | — | — | 1 |
| 1 | Capot (端盖) | PA66+PA6 | PF.90197 | 1 |
| 1 | Spring Compression 4.5 bar (压缩弹簧) | NF EN 10270-3 | PF.90197 | 1 |
| 1 | Plug (堵头) | PA66 GF30 | PF.90197 | 1 |
| 1 | Membrane (膜片) | 54U6002+AgN91S | — | 1 |
| 1 | Damper Body 8×10 (阻尼器壳体) | PA66 GF30 | PF.90197 | 1 |

补充零部件（从 CTS/PF 标准推断）：
- 尼龙管 (PA12 多层) — Ø8×6mm 供油 / Ø10×8mm 回油
- 金属 QC 接头 (SAE 5/16" 90° + 3/8") — PF.90298
- TPE 防磨套 — SAE J2027
- 线束卡扣 / 弹簧卡扣
- 保护端盖 — 颜色需与零件对比，拆卸力 2-15N

### 3.3 性能指标表

#### 压力与密封

| 参数 | 要求值 | 条件 | 来源 |
|------|--------|------|------|
| 工作压力 | 4.5 bar | 连续 | PPTX Slide 3 |
| 爆破压力 (RT) | ≥8× 工作压力 (≥36 bar) | 22°C | PF.90197 §7.4 |
| 爆破压力 (高温) | ≥3× 工作压力 (≥13.5 bar) | 115°C | PF.90197 §7.4 |
| 爆破压力 (低温) | ≥3× 工作压力 (≥13.5 bar) | -9°C | PF.90197 §7.4 |
| QC 爆破 (液态) | ≥3447 kPa (500 psig) | — | PF.90298 §7.6 |
| QC 爆破 (蒸气) | ≥689 kPa (100 psig) | — | PF.90298 §7.6 |
| VLD 泄漏检测 (燃油管) | 15 µm × 3 mm | 100% 在线 | PF.90197 |
| 氦检泄漏 | ≤2.0×10⁻⁴ scc/s (等效 15µm/1mm) | — | PF.90197 §7.2 |
| QC 最大泄漏率 | ≤0.5 cc/min air | — | PF.90298 §7.1 |
| 空气/水泄漏 | ≤8 cc/min @ 1035±35 kPa | 替代方法 | PF.90197 §7.2 |

#### 温度

| 参数 | 要求值 | 条件 | 来源 |
|------|--------|------|------|
| 尼龙管工作温度 | -40°C ~ +90°C | 连续 | PF.90197 |
| 尼龙管短时温度 | 115°C | 30 min | PF.90197 |
| QC 工作温度 | -40°C ~ +120°C | 连续 | PF.90298 |
| QC 短时温度 | 135°C | 20 min | PF.90298 |
| 柴油燃油温度 | 90°C | 连续 | PF.90197 |
| 最低温度 | -40°C | — | PF.90197/90298 |

#### 力学

| 参数 | 要求值 | 条件 | 来源 |
|------|--------|------|------|
| 拉脱力 (燃油管, RT) | ≥450 N | 22°C | PF.90197 §6.3.5 |
| 拉脱力 (燃油管, 高温) | ≥115 N | 115°C | PF.90197 §6.3.5 |
| 拉脱力 (蒸气管, RT) | ≥222 N | 22°C | PF.90197 |
| 拉脱力 (蒸气管, 高温) | ≥65 N | 115°C | PF.90197 |
| QC 拉脱力 (液态, 未老化) | ≥450 N | — | PF.90298 |
| QC 拉脱力 (液态, 燃油浸泡后) | ≥297 N | — | PF.90298 |
| 插入力 (<11mm) | ≤67 N | 新件 | PF.90298 |
| 插入力 (≥11mm) | ≤111 N | 新件 | PF.90298 |
| 插入力 (<11mm, 老化) | ≤111 N | 老化件 | PF.90298 |
| 插入力 (≥11mm, 老化) | ≤156 N | 老化件 | PF.90298 |
| 卡扣插入力 | ≤40 N | 2.5%含水 | PF.90197 |
| 卡扣拔出力 | ≥80 N | — | PF.90197 |
| 装车装配力 (双指) | ≤20 N | — | PF.90197 |
| 装车装配力 (全手) | ≤40 N | — | PF.90197 |
| 装车拆卸力 | ≥100 N | — | PF.90197 |
| QC 冲击能 (塑料) | ≥10 J @ -30°C | Charpy | PF.90298 |
| QC 冲击能 (混合) | ≥30 J @ -30°C | Charpy | PF.90298 |
| QC 冲击能 (金属) | ≥50 J @ -30°C | Charpy | PF.90298 |
| 保护套拆卸力 | 2-15 N | — | CTS嵌入PDF |
| NVH 评级 | ≥8/10 | 主观 | PF.90197 |
| 固有频率 | >30 Hz | — | PF.90197 |

#### 材料性能 (尼龙管)

| 参数 | 要求值 | 条件 | 来源 |
|------|--------|------|------|
| 拉伸强度 (新件) | ≥20 N/mm² | — | PF.90197 |
| 拉伸强度 (燃油浸泡后) | ≥15 N/mm² | — | PF.90197 |
| 断裂伸长率 (新件) | ≥160% | — | PF.90197 |
| 断裂伸长率 (燃油浸泡后) | ≤50% 降幅 | — | PF.90197 |
| 多层壁厚公差 | ±10% nominal/layer | — | PF.90197 |

#### 清洁度与导电性

| 参数 | 要求值 | 来源 |
|------|--------|------|
| 内部清洁度 | ≤0.75 mg/dm² | PF.90197, PF.90298 |
| 静电消散电阻 | ≤1,000,000 Ω DC @ 500V | SAE J1645 / PF.90298 |

#### 耐久性

| 参数 | 要求值 | 条件 | 来源 |
|------|--------|------|------|
| 设计寿命 | 15年 / 150,000 miles (241,400 km) | — | PF.90197/90298 |
| 脉动压力循环 | 300,000 cycles | 0~2× 工作压力 | PF.90197 §9 |
| 振动测试 | 60 hr × 5 样件 | 通用车身频谱 5-1000Hz | PF.90197 Table 8 |
| 弯管角度稳定性 | ≤3° 变化 | 90°C/1hr 烘箱 | PF.90197 |
| QC 寿命循环 (rocker) | 600,000 cycles (液态) | 12"行程, MPI 58psi | PF.90298 §9.5 |
| QC 装卸循环 | 30 cycles 后仍合格 | — | PF.90298 §9.3 |
| 内部燃油耐受 | 柴油: 90°C/120°C外气, 4×250hr=1048hr | — | PF.90197 §8 |
| 腐蚀寿命 | SAE J2334, 15年 per CS.00251 | — | PF.90197 |
| CaCl₂ (仅EMEA) | 50% CaCl₂, 60°C, 200hr | 180°弯曲样件 | PF.90197/90298 |
| ZnCl₂ | 环境温度, 168hr | — | PF.90197/90298 |

### 3.4 验收标准

| 类别 | DV 样件 | PV 样件 | 验收标准 |
|------|---------|---------|---------|
| 泄漏检测 | 100% | 100% | P99C90 |
| 爆破 | 10 | 10 | P99C90 |
| 拉脱力 | 30 | 15 | P99C90 |
| 环境测试(腐蚀/化学) | 15 | 15 | P99C90 |
| QC 冲击 | 30 | 15 | P99C90 |
| 振动 | 5 | 5 | R95C90 |
| 脉动压力 | — | — | R95C90 |
| QC 寿命循环 | 45 | 15 | R95C90 |
| QC rocker | 45 | 15 | R90C90 |
| 安全(FMVSS 301) | OEM定 | — | All Must Pass |

### 3.5 引用规范清单

| 编号 | 名称 | 已有? | 说明 |
|------|------|:-----:|------|
| PF.90197 | Fuel Bundle and Fuel System Jumpers | ✅ | 28页，2025-04 |
| PF.90298 | Quick Connect Fuel Systems | ✅ | 28页，2022-02 |
| PF.90068 | DEF Heated Supply Lines | ✅ | 37页，2025 — **注意：DEF管不是燃油管，可能适用性存疑** |
| CD.80064 | Fuel Bundle and Jumpers Core Documents | ❌ | 内部文件包，供应商无法下载 |
| SD-11597 | Fuel Compatibility List | ❌ | 决定需测试哪些燃油类型 |
| SD-M0008/03 | Plastic Fuel Line Approval | ❌ | 多层尼龙管需在批准名单内 |
| CS.00251 | Corrosion Requirements | ❌ | J2334 腐蚀测试具体参数 |
| CS-9003 | Environmental Requirements (ELV/REACH) | 部分 | CTS嵌入PDF覆盖了ELV/REACH要点 |
| 9.01102 / 9.01108 | Fiat Quality Standards | ❌ | 质量体系旧标准 |
| 07740 | Validation Standard | ❌ | DV/PV验证计划标准 |
| SAE J2044 | Quick Connect Couplings | ❌ | 外部标准，需购买 |
| SAE J2045 | Fuel/Emission Tubing | ❌ | 外部标准，需购买 |
| SAE J2260 | Nylon Tubing | ❌ | 外部标准，需购买 |
| SAE J2027 | Protective Covers | ❌ | 外部标准，需购买 |
| SAE J1645 | ESD Requirements | ❌ | 外部标准，需购买 |
| SAE J2334 | Corrosion Test | ❌ | 外部标准，需购买 |
| SAE J400 | Stone Impingement | ❌ | 外部标准，需购买 |
| QR.00001 | GPAT | ❌ | 全球产品保证测试 |
| PF.90092 | Brake Lines | ❌ | 若含刹车管段 |
| FMVSS 301 | Fuel System Integrity | ❌ | 安全法规，OEM端负责 |

### 3.6 项目时间约束

SSTS 交付物时间表（15项）按以下阶段：
- **SOURCING** → **TKO** → **DV** → **PV** → **SOP**
- 具体日期待从 SSTS_KP1_embedded_Excel.xlsx 确认

### 3.7 联系人

- 技术作者(PF.90197/90068): Fernando Sada (NA), Bruno Le Moine (EMEA)
- PF.90298: Michael Marcon (FCA US), Bruno Le Moine (FCA Italy)
- 中国区分发: PRS_STLA_CHINA@stellantis.com

---

## 4. PF.90068 适用性说明

PF.90068 是 **DEF (柴油尾气处理液/AdBlue) 加热供液管** 的性能标准，而非燃油管。KP1 项目是柴油燃油管（滤清器到发动机），两者不同：

| 对比 | PF.90068 (DEF管) | PF.90197 (燃油管) |
|------|------------------|------------------|
| 介质 | 尿素溶液 (AdBlue) | 柴油/汽油 |
| 加热 | 电加热（防冻） | 无 |
| 温度 | -40~+140°C (短时150°C) | -40~+90°C (短时115°C) |
| IP等级 | IP6K7 | 无特殊要求 |
| EMC | 有 (CS.00244) | 无 |

**判断**：PF.90068 可能是客户一并发来的参考文件（同一 Fuel Bundle 项目中 DEF 管和燃油管可能共用同一 Bundle），但 **KP1 燃油管的核心规范是 PF.90197 + PF.90298**。建议向客户确认 PF.90068 是否需要报价。

---

## 5. 客户模板检测结果

| # | 模板文件 | 用途 | 对应交付物 | 路径 |
|---|---------|------|-----------|------|
| T1 | L1_TDR_ED&D_PriceBreakdown_Template.xlsx | ED&D 成本分解 | Q1 | TDR → L1 |
| T2 | L1_TDR_SupplierDevelopmentTeam_Template.xlsx | SDT 团队名册 | Q3 | TDR → L1 |
| T3 | L1_TDR_ListOfExceptions_Template.xlsx | 例外事项清单 | Q4 | TDR → L1 |
| T4 | L1_TDR_RASI_MediumLevel_Template.xlsx | RASI 职责分配矩阵 | Q5 | TDR → L1 |
| T5 | L1_TDR_AdditionalMaterialList_BOM_Template.xlsx | BOM/补充材料清单 | Q6 | TDR → L1 |
| T6 | STLA-DVPR模板.xlsx | DVPR/PVP 验证计划 | (工程师交付) | 顶层 |
| T7 | L1_CTS_FCA_SVP_Form_Annex2.xlsx | SVP 供应商验证计划 | (工程师交付) | CTS → L1 |

**模板优先级决定**：Q1/Q3/Q4/Q5/Q6 → 使用客户模板填充（铁律路径1）

---

## 6. 交付物清单（来自 TDR）

TDR 列出 15 项交付物：

| # | 交付物 | 阶段 | 负责方 | 本工具可生成? |
|---|--------|------|--------|:------------:|
| 1 | Co-design cost breakdown (ED&D) | SOURCING | SUPPLIER | ✅ Q1 |
| 2 | Component Development Sheet (CDS) | TKO | SUPPLIER | ✅ Q2 |
| 3 | CAD/UG 3D Model | TKO | SUPPLIER | ❌ 工程师 |
| 4 | Supplier Development Team (SDT) | SOURCING | SUPPLIER | ✅ Q3 |
| 5 | List of Exceptions | SOURCING | SUPPLIER | ✅ Q4 |
| 6 | RASI Matrix | TKO | SUPPLIER | ✅ Q5 |
| 7 | Additional Material List | SOURCING | SUPPLIER | ✅ Q6 |
| 8 | FMEA (D-FMEA) | DV | SUPPLIER | ❌ 工程师 |
| 9 | DV Test Plan | DV | SUPPLIER | 部分(DVPR模板) |
| 10 | PV Test Plan | PV | SUPPLIER | 部分(DVPR模板) |
| 11 | 2D Drawings | TKO | SUPPLIER | ❌ 工程师 |
| 12 | Virtual Analysis | TKO | SUPPLIER | ❌ 工程师(CAE) |
| 13 | Control Plan | PV | SUPPLIER | ❌ 工程师 |
| 14 | SOP Support | SOP | SUPPLIER | ❌ 现场 |
| 15 | PPAP Package | SOP | SUPPLIER | ❌ 后期 |

---

## 7. 公司档案摘要（company-profile/）

| 项目 | 值 |
|------|---|
| 公司名 | 诺贝尔汽车零部件有限公司 (Nobel Auto) |
| 成立 | 2008 年 |
| 员工 | 320 人 |
| 主要产品 | 燃油管总成、快速接头、塑料管件 |
| 主要客户 | Stellantis, VW, Toyota |
| 年收入 | 2.5 亿 RMB |
| IATF 16949 | 已认证 (至2027-06) |
| 3D CAD | **CATIA V5** (非 NX — 潜在例外项) |
| PLM | **无 Teamcenter** (文件服务器 — 潜在例外项) |

**关键能力匹配速览**：
- ✅ 注塑成型 (PA66 GF30, PA12)
- ✅ CNC 弯管
- ✅ 超声波焊接
- ✅ 爆破/泄漏/拉脱/脉动测试
- ✅ 清洁度分析 (ISO 16232)
- ✅ IMDS 已注册
- ❌ 振动耐久测试 → 外包
- ❌ NX + Teamcenter → 需采购或协商例外
- ⚠️ MiniSHED/ESD 测试 → 需确认
