# 零部件知识：燃油供给系统（Fuel Delivery System）

<!-- 更新于 2026-02-24 -->

## 核心功能

从油箱抽取燃油，按需向发动机供给所需压力和流量的清洁燃油，同时测量油位。

## 典型BOM结构

```
燃油供给模块总成
├── 法兰/密封系统 Closure System
├── 涡流杯 Swirl Pot
├── 电动燃油泵 EKP（EC无刷/DC有刷）
├── 燃油泵电子控制 KPE
├── 射流泵 Suction Jet Pump
├── 压力阀/调节器 Pressure Valve
├── 精滤器 Fuel Fine Filter
├── 预滤网 EKP Extraction Strainer
├── 油位传感器 Fuel Level Sensor
├── 燃油管路及接头 Fuel Lines
├── 驻车加热器供油 Parking Heater Supply
└── 内部线束 Internal Wiring Harness
```

## 核心参数与典型范围

| 参数 | 典型范围 | 备注 |
|------|---------|------|
| 工作电压 | 6-16V(汽油), 9-16V(柴油) | VW 80000 |
| 最大工作电流 | ≤12A | 系统级限制 |
| EKP效率 | DC>20%, EC>30% @430kPa | 法兰出口测量 |
| 初始建压时间 | <15s @18mm油位 | |
| PWM控制频率 | 100Hz ±5Hz | ECM→KPE |
| 精滤容尘量 | >12g | ISO 19438 |
| 涡流杯容积 | ≥0.4L | |

## 常见缺口

1. BT-LAH通用基础规范（约30%需求依赖）
2. EKP零部件规格（泵的详细性能参数）
3. 油位传感器零件规格
4. VW 80000电气标准（功能状态定义）

## 处理注意事项

1. 文档同时覆盖汽油(FSI/MPI)和柴油(TDI)，需按燃料类型分别提取
2. EC（无刷）和DC（有刷）泵的控制策略和诊断完全不同
3. EU7版本新增大量FuSi条目和DC诊断条目
4. 系统级规范，零件详细参数在子规格中

## OEM特有要求

### Volkswagen
- 文档组合：SyS-LAH(系统级) + BT-LAH(通用基础) + LAH.DUM.xxx(零部件级)
- BsM分类标记需求属性
- "Entfall"条目需跳过
- Excel释放报告需逐条确认
