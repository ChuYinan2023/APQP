---
name: apqp-doc-processor
description: "APQP工程文档全链路处理：从PDF读取、多文档关系分析、翻译解读、提取L1工程特性、L2零部件特性、质量屋矩阵(QFD)到DVP&R/DFMEA框架输出。支持任意OEM（Stellantis/VW/Toyota等）和任意零部件类型（滤芯/发动机/制动器等），通过知识积累越用越智能。当用户要求处理工程规范文档、提取产品/零部件特性、构建QFD质量屋、或执行APQP文档分析流程时触发。触发词：APQP、工程特性、零部件特性、质量屋、QFD、L1特性、L2特性、文档处理流程、特性提取、House of Quality、DVP&R、DFMEA。也适用于用户提供PDF工程规范并要求系统性分析的场景。"
---

# APQP 工程文档处理流程 v3.0

通用化多阶段处理流程，支持任意OEM和零部件类型。

---

## 总体原则

1. **分步执行** — 不跳步，每阶段确认后再继续
2. **反向校验** — 每次提取后反向比对原文，确认无遗漏/错分类
3. **大文档分批** — 每次处理5-10页，输出阶段性摘要
4. **标记不确定项** — 宁可标注 `[待确认]`，不猜测
5. **术语一致** — 建立术语表，前后翻译统一
6. **缺口尽早暴露** — 发现缺文档立即提出
7. **强制输出文件** — 每个阶段完成后必须写入 `.md` 文件
8. **知识驱动** — 每次处理前加载已有知识，处理后回写新知识

## 输出规范

见 [references/output-format.md](references/output-format.md)

---

## 阶段0：知识加载

处理开始前，自动加载三层知识：

1. **识别OEM** — 从文档标题/页眉/标准号识别OEM厂商
2. **识别零部件类型** — 从文档内容识别零部件大类
3. **加载知识文件**（按优先级，用 Read 工具逐个读取）：
   - `knowledge/oem/{oem}.md` — OEM特有习惯
   - `knowledge/component/{component}.md` — 零部件工程经验
   - `knowledge/combo/{oem}--{component}.md` — 特定组合经验（如有）
4. 若无匹配知识文件 → 标注"首次处理该类型"，读取 `knowledge/component/_generic-fallback.md` 作为通用基线

**知识文件命名约定**：
- OEM文件：`knowledge/oem/{oem-lowercase}.md`（如 `stellantis.md`、`volkswagen.md`）
- 零部件文件：`knowledge/component/{type-lowercase-hyphen}.md`（如 `diesel-filter.md`）
- 组合文件：`knowledge/combo/{oem}--{component}.md`（**双横线**分隔OEM与零部件，如 `stellantis--diesel-filter.md`）

模板文件：`knowledge/oem/_oem-template.md`、`knowledge/component/_component-template.md`、`knowledge/combo/_combo-template.md`

---

## 阶段0.5：PDF读取

详见 [references/stage0-pdf-reader.md](references/stage0-pdf-reader.md)

核心要点：PyMuPDF > Desktop Commander > 内置Read > pdfplumber，提取到中间文本文件。

---

## 阶段1：多文档关系分析

**进入前先读取**: `references/stage1-doc-analysis.md`

核心要点：识别文档层级(L0法规→L1通用Spec→L2 CTS→L3产品卡→L4供应商)，确定覆盖规则，标记冲突。

**输出文件**: `阶段1_文档关系分析.md`

---

## 阶段2：翻译解读 → 结构树

**进入前先读取**: `references/stage2-translation.md`

核心要点：分批翻译、构建结构大纲、建立术语表。

**输出文件**: `阶段2_翻译解读与结构树.md`

---

## 阶段3：提取L1工程特性

**进入前先读取**: `references/stage3-l1-extraction.md` 和 `references/l1-classification.md`

核心要点：按7大分类提取系统级特性，多文档合并，反向校验。

**输出文件**: `阶段3_L1工程特性清单.xlsx`（Python + openpyxl）

---

## 阶段4：提取L2零部件特性

**进入前先读取**: `references/stage4-l2-extraction.md`、`references/component-decomposition.md`、`references/gap-documents.md`

核心要点：建立BOM树，逐零部件提取特性，缺口分析。

**输出文件**: `阶段4_L2零部件特性清单.xlsx`（Python + openpyxl）

---

## 阶段5：质量屋矩阵 (QFD)

**进入前先读取**: `references/stage5-qfd.md`

核心要点：L1×L2关联矩阵（按功能域分块）+ L2×L2屋顶矩阵 + 全局审查。

**输出文件**: `阶段5_QFD质量屋矩阵.xlsx`（Python + openpyxl）

---

## 阶段6-7：DVP&R / DFMEA（可选）

**进入前先读取**: `references/stage67-dvpr-dfmea.md`

**触发条件**: 用户明确要求

---

## 阶段末：知识回写

每次完成全流程后，自动更新知识库：

1. **提取本次经验**：
   - OEM层面：文档结构模式、内部标准号、术语惯例、分类体系
   - 零部件层面：BOM结构、核心参数、关键标准、工程权衡
   - 组合层面：特定OEM对该零部件的特殊要求

2. **写入知识文件**：
   - 若文件已存在 → 增量更新（追加新发现，不覆盖已有）
   - 若文件不存在 → 从模板创建
   - 知识文件用 `<!-- 更新于 YYYY-MM-DD -->` 标记更新时间

3. **征求用户确认** — 展示拟写入内容，用户确认后写入

---

## 对比模式（特殊场景）

当同一零件有新旧版SPEC时：分别提取L1 → 自动Diff → 输出变更影响分析。

**触发词**: "对比"、"版本差异"、"SPEC变更"

---

## 全流程概览

```
阶段0    → 阶段0.5  → 阶段1      → 阶段2   → 阶段3     → 阶段4    → 阶段5   → [6-7]  → 末
知识加载   PDF读取    文档关系      翻译解读   L1工程      L2零部件    质量屋    DVP&R    知识
OEM识别    工具探测   层级分析      结构树     特性        特性        矩阵      DFMEA   回写
组件识别   文本提取   覆盖规则      术语表     7大分类     BOM分解     分块填写
加载知识                                     反向校验    缺口分析    屋顶矩阵
                   ↓输出                    ↓输出       ↓          全局审查
           {文件名}_text.md    阶段1_文档   阶段2_翻译  阶段3_L1   阶段4_L2  阶段5_QFD
                               关系分析.md  解读结构树  特性.xlsx  特性.xlsx  矩阵.xlsx
```
