# OEM知识：Volkswagen AG

<!-- 更新于 2026-02-24 -->

## 文档体系

| 前缀 | 含义 | 示例 |
|------|------|------|
| LAH | 规范书(Lastenheft) | LAH.3WA.201.B |
| BT-LAH | 零部件通用规范 | BT-LAH "Fuel Systems" |
| SyS-LAH | 系统规范 | 系统级功能性能要求 |
| NNC/EP | 测试规范 | NNC.201.021.H |
| TL | 技术供货规范 | TL 82253 |
| VW | 集团标准 | VW 80000 |

编号结构：`LAH.3WA.201.B` = 规范类型.产品系列.序号.子文档后缀。后缀：`.B`=系统级, `.C`=汽油泵, `.E`=柴油泵, `.F`=传感器。

语言：德英混合（技术要求英文，章节标题和废弃条目德文）。

## 术语惯例

| VW用语 | 通用用语 | 备注 |
|---------|---------|------|
| Entfall | 不适用/已删除 | 旧版条目废除，提取时跳过 |
| geändert | 已修改 | 相对前版本 |
| neu hinzugefügt | 新增 | EU7新增条目 |
| BsM | 设计模式分类 | BsM-Sa=安全, BsM-Z=可靠性 |
| Klemme 15/30 | Terminal 15/30 | 点火开关/常电 |
| EKP | 电动燃油泵 | Elektrische Kraftstoffpumpe |
| KPE | 燃油泵电子控制 | Kraftstoffpumpenelektronik |

## 处理注意事项

1. BT-LAH依赖严重：约30%需求引用BT-LAH，是最常见文档缺口
2. "Entfall"条目约占20%，必须跳过不提取
3. 条目后缀.1/.2/.3表示不同变体，需按变体分别提取
4. 标记"neu hinzugefügt"的是EU7新增，尤其功能安全条目
5. Excel释放报告：VW要求供应商逐条确认
