# APQP 工程文档处理 Claude Skill

一个用于 [Claude Code](https://claude.ai/code) 的自定义 Skill，将汽车供应商 APQP 流程中的工程规格文档（PDF）自动处理为结构化交付物（L1/L2特性清单、QFD质量屋矩阵），并随使用持续积累经验。

---

## 解决什么问题

汽车供应商收到 OEM 工程规格书（英/德文 PDF）后，需要手动完成一系列耗时工作：

- 翻译解读规格书
- 提取 L1 系统级工程特性
- 分解 BOM 并提取 L2 零部件级特性
- 构建 QFD 质量屋矩阵（L1 × L2 关联矩阵）
- 识别文档缺口，输出补充文件需求清单

这个 Skill 将上述全流程固化为 Claude Code 的标准化多阶段处理流程，支持任意 OEM 和零部件类型，并通过知识库积累让后续处理越来越高效。

---

## 处理流程

```
阶段0      阶段0.5    阶段1        阶段2      阶段3       阶段4      阶段5      [阶段6-7]
知识加载    PDF读取    文档关系分析  翻译解读   L1特性提取  L2特性提取  QFD矩阵   DVP&R/DFMEA
  │          │            │            │           │           │          │          │
加载OEM    提取全文     识别文档层级  分批翻译   7大分类     建立BOM树  L1×L2     (可选)
零部件      写入MD      覆盖规则     构建结构树  逐章提取    逐件提取   关联矩阵
组合知识    中间文件     标记冲突     建术语表   反向校验   缺口分析   屋顶矩阵
              │            │            │           │                     │
         {文件}_text.md  阶段1_       阶段2_     阶段3_      阶段4_     阶段5_
                         文档关系     翻译解读   L1特性      L2特性     QFD矩阵
                         分析.md      结构树.md  清单.xlsx   清单.xlsx  .xlsx
```

### 各阶段说明

| 阶段 | 输出文件 | 说明 |
|------|---------|------|
| 0.5 PDF读取 | `{文件名}_text.md` | PyMuPDF / Desktop Commander / pdfplumber 分层回退 |
| 1 文档关系分析 | `阶段1_文档关系分析.md` | 识别 L0法规→L1通用Spec→L2 CTS→L3产品卡 层级，标记冲突 |
| 2 翻译解读 | `阶段2_翻译解读与结构树.md` | 分批翻译、构建结构大纲、建立中英术语表 |
| 3 L1工程特性 | `阶段3_L1工程特性清单.xlsx` | 按7大分类（F/P/M/R/E/S/A）提取系统级特性，含反向校验 |
| 4 L2零部件特性 | `阶段4_L2零部件特性清单.xlsx` | 建立 BOM 树，逐零部件提取特性，输出缺口清单 |
| 5 QFD质量屋 | `阶段5_QFD质量屋矩阵.xlsx` | L1×L2 关联矩阵（◎/○/△）+ L2×L2 屋顶矩阵 + 全局审查 |
| 6-7 DVP&R/DFMEA | （可选）`.xlsx` | 基于 L1/L2 特性自动生成验证计划和失效分析框架 |

---

## L1 特性分类体系（7大类）

| 代码 | 分类 | 典型内容 |
|------|------|---------|
| **F** | 功能 | 过滤效率、流量、压降、制动力、输出功率 |
| **P** | 性能·电气/传感器 | 电压电流、传感器特性、ECU接口、通信协议 |
| **M** | 机械/结构 | 密封性、强度、扭矩、接口尺寸、装配 |
| **R** | 可靠性/耐久 | 热循环、脉动、振动、老化、MTBF |
| **E** | 环境/防护 | IP等级、温度范围、防腐、盐雾、介质兼容 |
| **S** | 安全/法规 | 法规合规、HAZMAT、IMDS、失效安全 |
| **A** | 外观/感知 | NVH、BSR、表面质量、标识 |

---

## 知识库结构

Skill 采用三层知识架构，随每次处理自动积累：

```
knowledge/
├── oem/                          ← OEM 专有知识
│   ├── stellantis.md             文档体系、术语惯例、设备分类
│   ├── volkswagen.md             条目式管理、德英混合、BsM分类
│   └── _oem-template.md          新增 OEM 时使用的模板
│
├── component/                    ← 零部件专有知识
│   ├── diesel-filter.md          BOM结构、核心参数、典型缺口
│   ├── fuel-delivery-system.md   EC/DC泵、KPE控制、功能安全
│   ├── _generic-fallback.md      首次处理新零部件时的通用基线
│   └── _component-template.md    新增零部件时使用的模板
│
└── combo/                        ← OEM × 零部件组合知识
    ├── stellantis--diesel-filter.md   QFD分块经验、典型缺口、处理技巧
    └── _combo-template.md             新增组合时使用的模板
```

**命名约定**：
- OEM 文件：`{oem-lowercase}.md`（如 `stellantis.md`）
- 零部件文件：`{type-lowercase-hyphen}.md`（如 `diesel-filter.md`）
- 组合文件：`{oem}--{component}.md`（**双横线**分隔，如 `stellantis--diesel-filter.md`）

---

## 已支持 OEM 和零部件

| OEM | 零部件 | 组合经验 |
|-----|--------|---------|
| Stellantis | 柴油滤清器 | ✓ 有组合知识（含 QFD 分块方案） |
| Volkswagen AG | 燃油供给系统 | — |

新的 OEM 或零部件首次处理后会自动写入知识库，后续处理直接复用。

---

## 目录结构

```
.claude/
└── skills/
    └── apqp-doc-processor/
        ├── skill.md                    ← Skill 入口（总流程 + 原则）
        ├── references/                 ← 各阶段详细执行说明
        │   ├── stage0-pdf-reader.md
        │   ├── stage1-doc-analysis.md
        │   ├── stage2-translation.md
        │   ├── stage3-l1-extraction.md
        │   ├── stage4-l2-extraction.md
        │   ├── stage5-qfd.md
        │   ├── stage67-dvpr-dfmea.md
        │   ├── l1-classification.md
        │   ├── component-decomposition.md
        │   ├── gap-documents.md
        │   └── output-format.md
        └── knowledge/                  ← 积累经验的知识库
            ├── oem/
            ├── component/
            └── combo/
```

---

## 使用方式

1. 将本仓库中的 `.claude/` 文件夹放到你的项目根目录
2. 在 Claude Code 中打开该项目目录
3. 把工程规格 PDF 放入项目目录，触发 Skill：

```
处理这份 Stellantis 柴油滤 SPEC，执行 APQP 文档处理流程
```

或使用触发词：`APQP`、`工程特性`、`零部件特性`、`质量屋`、`QFD`、`L1特性`、`L2特性`

---

## 设计原则

- **分步执行** — 不跳步，每阶段确认后再继续
- **反向校验** — 每次提取后逐章节比对原文，确认无遗漏
- **多粒径分行** — 多个工况/电压/粒径的参数强制逐条分行，不合并
- **缺口尽早暴露** — 发现缺文档立即提出，不等到最后
- **知识驱动** — 处理前加载已有知识，处理后回写新经验

---

## 输出示例

一套典型输出（Stellantis 柴油滤，双文档 Filter Spec + CTS）：

| 文件 | 内容规模 |
|------|---------|
| 阶段1_文档关系分析.md | 文档层级树 + 覆盖规则 |
| 阶段2_翻译解读与结构树.md | 结构大纲 + 中英术语表 |
| 阶段3_L1工程特性清单.xlsx | ~95 条特性，7大分类，含反向校验 Sheet |
| 阶段4_L2零部件特性清单.xlsx | ~106 条特性，11个子零部件，含缺口清单 Sheet |
| 阶段5_QFD质量屋矩阵.xlsx | 95×106 矩阵（7块分填）+ 屋顶矩阵 + 全局审查 |
