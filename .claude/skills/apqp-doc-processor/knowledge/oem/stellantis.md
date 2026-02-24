# OEM知识：Stellantis

<!-- 更新于 2026-02-24，FILTER项目验证后补充 -->

## 文档体系

| 前缀 | 含义 | 示例 |
|------|------|------|
| PF. | 通用性能规格 | PF.90150 (柴油滤清器), PF.90012 (电气连接), PF.90298 (快接) |
| CS. | 企业标准 | CS.00056/CS.00263 (E/E环境), CS.00244 (EMC), CS.00251 (腐蚀) |
| MS. | 材料规格 | MS.90039 (制动液), MS-10756 (柴油), MS.50210 (POM) |
| QR. | 质量要求 | QR-10012 (公差标准), QR.00001 (GPAT) |
| FPW. | 流程材料规格 | FPW.55520/01 (柴油), FPW9.55535 (润滑油) |
| DS. | 设计标准 | DS-107 (BSR), DS-158 (人机工程) |
| LP. | 实验规程 | LP.7R011 (NVH燃油泵噪声) |
| PS. | 产品/供应商标准 | PS-11346 (退件分析), PS-7300 (产品质量钻石标) |

双文档模式：通用Spec(PF.xxxxx) + CTS。CTS §2.1明确"CTS优先"原则——冲突时CTS覆盖通用Spec。CTS未提及的回退到通用Spec。

语言：英文为主。

## 编号规则

- **S Harmonized文档**：旧编号和新编号并存。如CS.00056(旧) → CS.00263(新，编号01446_24_00439)。CTS引用新编号，通用Spec可能仍引用旧编号——不一定是冲突，需确认是否为替代关系。
- **01446_xx_xxxxx格式**：Stellantis Harmonized后的统一文档编号，xx为年份后两位。
- **CTS附件**：如 `02b_CTS att_K0_SFF` — 含3D模型/安装构型，经常缺失。

## 术语惯例

| Stellantis用语 | 通用用语 | 备注 |
|---------------|---------|------|
| CTS | 应用规格 | Component Technical Specification，项目级 |
| Product Card (PC) | 产品卡 | 传感器/执行器的正式参数定义文件，通用Spec中给出的常是"example" |
| Annex A / Table A-1 | DV/PV样本量表 | 通用Spec末尾，含每个测试项的样本量和验收标准 |
| Annex A-2 / Table A-2 | CC频次表 | Continuing Conformance，量产后监控 |
| Annex B | 推荐测试流程 | EE模块验证流程图(per CS.00056) |
| "As per CTS" / "According to CTS" | 参见CTS具体值 | 通用Spec指向CTS |
| P99C90 | 功能试验验收标准 | 99%可靠性 / 90%置信度 |
| R95C90 | 耐久试验验收标准 | 95%可靠性 / 90%置信度 |
| <S> Shield / <D> Diamond | 安全/质量特殊标记 | PF-SAFETY / PS-7300 |

## Table 4 设备分类（CS.00056）

通用Spec通常包含一个设备分类表，对每个电子子设备（如加热器/WiF传感器/NTC传感器）单独定义：
- Device type (E2/E3)
- Functional classification (FC1/FC2)
- Installation-based (CI1/CI4)
- Temperature classification (TC3, TN1)
- Vibration classification (V2)
- IP classification (IP6K9K)
- ESD classification (SE2)
- Power supply classification (A1)

每个子设备的分类可能不同，需逐一记录。

## 处理注意事项

1. **必须识别双文档模式**：通用Spec + CTS，CTS优先
2. **"As per CTS"**标记意味着该参数必须在CTS中查找具体值——通用Spec给出的可能是"example"
3. **Product Card**：通用Spec中传感器参数（NTC特性曲线、WiF电压阈值等）常标注"example"，正式值在Product Card中定义。Product Card通常未随Spec提供，需标为缺口
4. **S Harmonized编号变更**：新旧编号并存，CTS可能引用新编号(CS.00263)而通用Spec引用旧编号(CS.00056)——核实是否为替代关系，不一定是真正冲突
5. **Annex A DV/PV表**：功能试验通常15 DV + 15 PV样本(P99C90)，耐久试验45 DV + 45 PV(R95C90)
6. **Annex A-2 CC频次表**：逐项定义量产监控频率（日检/周检/季检/100%），不要遗漏
7. **CTS附件**经常缺失（如3D模型文件、保护帽规格），需作为缺口标出
