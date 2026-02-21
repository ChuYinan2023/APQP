# OEM知识：Volkswagen AG

<!-- 更新于 2026-02-16 -->

## 基本信息

- **全称**：Volkswagen Aktiengesellschaft（大众汽车集团）
- **常见缩写**：VW, VWAG
- **总部**：Wolfsburg, Germany

## 文档体系

### 内部标准号编码

| 前缀 | 含义 | 示例 |
|------|------|------|
| LAH | Lastenheft（规范书） | LAH.3WA.201.B |
| BT-LAH | Bauteil-Lastenheft（零部件规范） | BT-LAH "Fuel Systems" |
| SyS-LAH | System-Lastenheft（系统规范） | 本文档类型 |
| LAH.DUM | 子零部件规格（DUM=Dummy编号） | LAH.DUM.201.C |
| NNC | 测试规范编号 | NNC.201.021.H |
| EP | 试验规范（Erprobung） | EP21200.11 |
| TL | 技术供货规范（Technische Lieferbedingung） | TL 82253 |
| VW | 大众集团标准 | VW 80000 |
| Q-LAH | 质量规范 | LAH.893.909 |

### 编号结构解读

- **LAH.3WA.201.B** = LAH（规范类型）.3WA（产品系列码）.201（序号）.B（子文档后缀）
- 子文档后缀约定：`.B`=系统级, `.C`=汽油泵, `.E`=柴油泵, `.F`=传感器, `.S`=CAD指南, `.AB`=模块模板
- 条目编号后缀：`.1/.2/.3...` 表示适用不同变体（如不同油箱配置）

### 典型文档结构

- 通用规格(Generic Spec)：BT-LAH — 定义通用环境/寿命/EMC/振动/密封要求
- 系统规格(System Spec)：SyS-LAH — 系统级功能和性能要求（本次处理的类型）
- 零部件规格(Component Spec)：LAH.DUM.xxx — 零部件级详细参数
- 测试规范：NNC.xxx / EP.xxx — 测试方法和验收标准
- 释放报告(Freigabereport)：供应商确认文件，Excel格式

### 文档语言和格式

- 主语言：**德英混合**（技术要求主体为英文，章节标题和旧版已废条目为德文）
- 常见格式：Excel-based（条目式管理）, PDF导出
- 需求管理：条目编号制（lfd.Nr），含BsM分类标记

## 术语惯例

| OEM用语 | 通用用语 | 备注 |
|---------|---------|------|
| Entfall | 不适用/已删除 | 旧版条目废除标记 |
| geändert | 已修改 | 相对前版本已修改 |
| neu hinzugefügt | 新增 | EU7版本新增 |
| BsM (Baumuster) | 设计模式/分类 | BsM-Sa=安全, BsM-Z=可靠性, BsM-SOTIF=SOTIF |
| Konzernversion | 集团版本 | 适用于整个VW集团 |
| Freigabereport | 释放报告 | 供应商在Excel中填写确认 |
| VOBES | 电气系统接口描述 | VW内部文件格式 |
| Klemme 15/30 | Terminal 15/30 | 点火开关/常电 |
| EKP | 电动燃油泵 | Elektrische Kraftstoffpumpe |
| KPE | 燃油泵电子控制 | Kraftstoffpumpenelektronik |
| MSG | 发动机控制模块 | Motorsteuergerät |

## 设备分类体系

- VW使用BsM（Baumuster）分类标记需求属性
- 功能安全使用ASIL等级标记（ISO 26262）
- 电气系统参考VW 80000定义功能状态
- EMC参考独立EMC规范（通常在BT-LAH中引用）

## 验证体系

- DV/PV样本量惯例：按具体测试规范(NNC/EP)定义
- 验证方式在每个条目后标注（CAD-Analyse, Simulation, Versuchsbericht, Lieferantenbestätigung等）
- 关键验证标准：TL 82253（承压件）, TL 82421（快接头）, ISO 19438（过滤器）
- 耐久测试引用独立的Erprobungslastenheft

## 处理注意事项

1. **BT-LAH依赖严重**：约30%的章节（环境、寿命、EMC、振动、密封、装配）完全引用BT-LAH，是最常见的文档缺口
2. **Entfall条目大量**：约20%的条目标记为"Entfall"（不适用），多为旧版MPI机械调压系统，提取时须跳过
3. **德英混合解读**：章节标题和已废除条目为德文，需具备德语基础
4. **条目后缀区分变体**：同一条目号有.1/.2/.3后缀时，表示适用不同配置，需按变体分别提取
5. **EU7更新重点关注**：标记"neu hinzugefügt"的条目是EU7版本新增，尤其功能安全(FuSi)和DC泵诊断
6. **Excel释放报告交互**：VW要求供应商在Excel中逐条确认，文档处理结果需对齐此格式
