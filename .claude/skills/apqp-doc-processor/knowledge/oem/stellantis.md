# OEM知识：Stellantis

<!-- 更新于 2026-02-16 -->

## 基本信息

- **全称**：Stellantis N.V.（前身PSA + FCA合并）
- **常见缩写**：Stellantis, STA
- **总部**：荷兰阿姆斯特丹

## 文档体系

### 内部标准号编码

| 前缀 | 含义 | 示例 |
|------|------|------|
| PF. | Performance/Function通用规格 | PF.90150 (Filter Spec) |
| CS. | Corporate Standard企业标准 | CS.00056 (设备分类), CS.00244 (EMC) |
| QR. | Quality Requirement质量要求 | QR-10012 (公差标准) |
| S | Material/Supplier规格 | S 14618 (O-Ring规格) |

### 典型文档结构（双文档模式）

- **通用规格(Generic Spec)**：PF.xxxxx，定义某类零部件的通用要求框架，适用于多个项目
- **应用规格(CTS)**：Component Technical Specification，特定项目的具体参数值
- **覆盖规则**：CTS覆盖通用Spec的通用值；CTS未提及的回退到通用Spec

### 文档语言和格式

- 主语言：英文（偶有法语注释）
- 常见格式：PDF，章节编号层级清晰（1.1.1...）

## 术语惯例

| Stellantis用语 | 通用用语 | 备注 |
|---------------|---------|------|
| CTS | 应用规格/零部件技术规范 | Component Technical Specification |
| Annex A | DV/PV样本量表 | 通常在通用Spec末尾 |
| Annex A-2 | CC频次表 | Current Control频次 |
| "As per CTS" | 参见CTS具体值 | 通用Spec中指向CTS |

## 设备分类体系

Stellantis使用CS.00056定义设备分类，维度包括：
- 设备类型 (Device Type)
- 功能分类 (Functional Classification)
- 安装分类 (Mounting Classification)
- 温度分类 (Temperature Classification)
- 振动分类 (Vibration Classification)
- ESD分类 (ESD Classification)

EMC要求按CS.00244定义。

## 验证体系

- DV/PV样本量：在通用Spec的Annex A中定义
- 常见置信度水平：P99C90, R95C90
- CC频次：在Annex A-2中定义
- 特有标准号：PF.系列编号

## 处理注意事项

1. 必须识别"双文档模式"：通用Spec + CTS同时存在
2. CTS中"As per CTS"标记意味着该参数必须在CTS中查找具体值
3. Annex A/A-2是DVP&R的关键输入，不要遗漏
4. CS.00056设备分类表通常在CTS中给出，是L2电子件特性的重要来源
