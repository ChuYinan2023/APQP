# APQP 工程文档处理 Claude Skill

一个用于 [Claude Code](https://claude.ai/code) 的自定义 Skill，将汽车供应商 APQP 流程中的工程规格文档（PDF）自动处理为结构化交付物（L1/L2特性清单、QFD质量屋矩阵），并随使用持续积累经验。

---

## 解决什么问题

汽车供应商收到 OEM 工程规格书（英/德文 PDF）后，需要手动完成一系列耗时工作：

- 阅读、翻译、理解外文规格书（英文/德文），梳理多份文档间的层级与覆盖关系
- 识别文档缺口和冲突，尽早暴露问题让客户决策
- 提取 L1 系统级工程特性
- 推断 BOM 结构并分解 L2 零部件级特性
- 构建 QFD 质量屋矩阵（L1 × L2 关联矩阵）

这个 Skill 将上述全流程固化为 Claude Code 的标准化 4 阶段处理流程，中文输出并保留原文对照，支持任意 OEM 和零部件类型，并通过知识库积累让后续处理越来越高效。

---

## 处理流程

```
阶段1              阶段2              阶段3              阶段4
文档清点与确认      L1工程特性提取      L2零部件特性提取    QFD质量屋矩阵
  │                  │                  │                  │
读取PDF全文        从工作底稿逐章      从工作底稿推断      构建L1×L2
存入工作底稿        提取系统级特性      BOM结构树          关联矩阵
识别缺失/冲突      标注C(关键)/A(一般)  从L1分解到零部件级  ◎(9)/○(3)/△(1)
  │                  │                  │                  │
_工作底稿.md       阶段2_L1工程        阶段3_L2零部件      阶段4_QFD
阶段1_确认.md      特性清单.xlsx       特性清单.xlsx       质量屋矩阵.xlsx
  │                  │                  │                  │
  ↓ 用户确认OK       ↓ 用户确认OK       ↓ 用户确认OK       ↓ 知识回写
```

**每阶段必须等用户确认后才进入下一阶段。**

### 各阶段说明

| 阶段 | 输出文件 | 说明 |
|------|---------|------|
| 1 文档清点与确认 | `_工作底稿.md` + `阶段1_文档清点与确认.md` | 全文存档 + 缺失文档/冲突项清单（含客户决策列） |
| 2 L1工程特性 | `阶段2_L1工程特性清单.xlsx` | 系统级特性清单（按自然分类），Sheet 2为缺口与冲突 |
| 3 L2零部件特性 | `阶段3_L2零部件特性清单.xlsx` | 零部件级特性清单（按BOM分组），Sheet 2为缺口 |
| 4 QFD质量屋 | `阶段4_QFD质量屋矩阵.xlsx` | L1×L2关联矩阵，Sheet 2为自动审查（空行/空列/Top5/覆盖率） |

### PDF读取优先级

1. **marker** — `marker_single` 命令，输出高质量Markdown
2. **PyMuPDF** — `import fitz` 逐页提取
3. **Read tool** — pages参数分批读取（每次≤20页）

### Excel生成方式

使用模板脚本（`scripts/gen_*.py`）复制到output目录，只修改数据区，格式代码一字不改：

```bash
cp scripts/gen_l1_template.py output/gen_l1.py
# 编辑 L1_DATA / GAP_DATA / CONFLICT_DATA
python3 output/gen_l1.py
```

---

## 知识库结构

Skill 采用两层知识架构，随每次处理自动积累：

```
knowledge/
├── oem/                          ← OEM 专有知识
│   ├── stellantis.md             文档体系、编号规则、术语惯例、设备分类
│   ├── volkswagen.md             条目式管理、德英混合
│   ├── _oem-template.md          新增 OEM 时使用的模板
│
└── component/                    ← 零部件专有知识
    ├── diesel-filter.md          BOM结构、核心参数、关键测试、常见缺口
    ├── fuel-delivery-system.md   EC/DC泵、KPE控制、功能安全
    ├── _generic-fallback.md      首次处理新零部件时的通用基线
    └── _component-template.md    新增零部件时使用的模板
```

**命名约定**：
- OEM 文件：`{oem-lowercase}.md`（如 `stellantis.md`）
- 零部件文件：`{type-lowercase-hyphen}.md`（如 `diesel-filter.md`）

**知识回写时机**：阶段4完成后执行，只记录可复用经验，不记录项目特定数据。

---

## 已支持 OEM 和零部件

| OEM | 零部件 | 验证状态 |
|-----|--------|---------|
| Stellantis | 柴油滤清器 (Diesel Filter) | ✅ FILTER项目全流程验证 |
| Volkswagen AG | 燃油供给系统 (Fuel Delivery) | 知识已录入，待验证 |

新的 OEM 或零部件首次处理后会自动写入知识库，后续处理直接复用。

---

## 目录结构

```
.claude/
└── skills/
    └── apqp-doc-processor/
        ├── skill.md                    ← Skill 入口（4阶段流程 + 知识回写规则）
        ├── scripts/                    ← Excel模板脚本（数据/格式分离）
        │   ├── gen_l1_template.py
        │   ├── gen_l2_template.py
        │   └── gen_qfd_template.py
        └── knowledge/                  ← 积累经验的知识库
            ├── oem/
            └── component/

TestSpec/                               ← 测试用Spec PDF
├── FILTER/                             Stellantis柴油滤 (2份PDF)
└── Fuel Supply System/                 VW燃油供给系统

TestOut/                                ← 测试输出参考
├── 2-24/                               FILTER项目完整输出
└── 2025/                               早期版本输出（参考）
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

- **分步执行** — 不跳步，每阶段用户确认后再继续
- **工作底稿唯一数据源** — PDF只读一次，全文存入工作底稿，后续阶段不再回读PDF
- **多条件逐行分列** — 多粒径/多工况/多电压/多温度的参数强制逐条分行，不合并
- **缺口尽早暴露** — 发现缺文档/冲突立即标出，让客户尽早决策
- **知识驱动** — 处理前加载已有知识，处理后回写新经验
- **数据/格式分离** — 模板脚本固化格式，每个项目只改数据区

---

## 输出示例

FILTER项目（Stellantis 柴油滤，双文档 Filter Spec 44页 + CTS 14页）：

| 文件 | 内容规模 |
|------|---------|
| `_工作底稿.md` | 全文结构化存档 |
| `阶段1_文档清点与确认.md` | 8项缺失文档 + 4项冲突 + 术语表 |
| `阶段2_L1工程特性清单.xlsx` | 104条L1特性（57C类 + 47A类），21个分类 |
| `阶段3_L2零部件特性清单.xlsx` | 86条L2特性，10个零部件，12项缺口 |
| `阶段4_QFD质量屋矩阵.xlsx` | 104×86矩阵，233个有效关联格 |
