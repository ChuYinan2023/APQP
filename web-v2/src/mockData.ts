import type { Project, SimEvent, Artifact } from './types';

// === Projects ===

export const projects: Project[] = [
  {
    id: 'kp1',
    name: 'KP1 Fuel Line',
    oem: 'Stellantis',
    component: '燃油管路',
    partNumber: 'FC00SAA78530',
    fileCount: 6,
    date: '2026-02-24',
    isDemo: true,
  },
  {
    id: 'bmw-pump',
    name: 'N20 Water Pump',
    oem: 'BMW',
    component: '水泵总成',
    partNumber: 'WP-N20-0847',
    fileCount: 4,
    date: '2026-01-15',
    isDemo: false,
  },
  {
    id: 'audi-sensor',
    name: 'EA888 Oil Sensor',
    oem: 'Audi',
    component: '油压传感器',
    partNumber: 'OS-EA888-312',
    fileCount: 3,
    date: '2025-12-20',
    isDemo: false,
  },
];

// === Artifact definitions for Phase C ===

export const artifactDefinitions: Artifact[] = [
  { id: 'q1', name: 'Q1 ED&D 成本分解', category: 'cost', fileType: 'xlsx', status: 'pending', keyStats: '¥2.4M 总成本' },
  { id: 'q2', name: 'Q2 项目计划', category: 'plan', fileType: 'xlsx', status: 'pending', keyStats: '18个月 · 4阶段' },
  { id: 'q3', name: 'Q3 团队名册', category: 'team', fileType: 'xlsx', status: 'pending', keyStats: '8人 · 5职能' },
  { id: 'q4', name: 'Q4 例外清单', category: 'quality', fileType: 'xlsx', status: 'pending', keyStats: '21项 · 11✅3❌7🔵' },
  { id: 'q5', name: 'Q5 RASI 矩阵', category: 'team', fileType: 'xlsx', status: 'pending', keyStats: '15活动 × 8人' },
  { id: 'q6', name: 'Q6 试验材料清单', category: 'spec', fileType: 'xlsx', status: 'pending', keyStats: '24项试验' },
  { id: 'q7', name: 'Q7 特性清单 L1', category: 'quality', fileType: 'xlsx', status: 'pending', keyStats: '33特性' },
  { id: 'q8', name: 'Q8 特性清单 L2', category: 'quality', fileType: 'xlsx', status: 'pending', keyStats: '8CC + 25SC' },
  { id: 'q9', name: 'Q9 缺失项报告', category: 'report', fileType: 'md', status: 'pending', keyStats: '47项 · 6高优先' },
  { id: 'q10', name: 'Q10 一致性检查', category: 'report', fileType: 'md', status: 'pending', keyStats: '7✅ 1⚠️' },
  { id: 'q11', name: 'Q11 报价汇总', category: 'cost', fileType: 'pdf', status: 'pending', keyStats: '完整报价包' },
];

// === Phase A simulation events ===

export const phaseAEvents: SimEvent[] = [
  { type: 'show_card', stepId: 'A', delay: 0 },
  { type: 'message', stepId: 'A', text: '正在扫描项目文件...', delay: 500 },
  { type: 'add_metric', stepId: 'A', metric: { icon: '📄', label: '输入文件', value: 6, color: 'blue' }, delay: 600 },
  { type: 'add_metric', stepId: 'A', metric: { icon: '📃', label: '总页数', value: 81, color: 'blue' }, delay: 600 },
  { type: 'add_metric', stepId: 'A', metric: { icon: '📊', label: 'Excel', value: 2, color: 'green' }, delay: 500 },
  { type: 'add_metric', stepId: 'A', metric: { icon: '📕', label: 'PDF', value: 2, color: 'red' }, delay: 500 },
  { type: 'add_metric', stepId: 'A', metric: { icon: '📝', label: 'PPTX', value: 1, color: 'amber' }, delay: 500 },
  { type: 'add_metric', stepId: 'A', metric: { icon: '📘', label: 'DOCX', value: 1, color: 'blue' }, delay: 500 },
  { type: 'message', stepId: 'A', text: '正在解析文件清单...', delay: 400 },
  { type: 'add_row', stepId: 'A', row: { name: 'SSTS KP1 Fuel line.xlsx', type: 'xlsx', pages: 5, size: '248 KB' }, delay: 400 },
  { type: 'add_row', stepId: 'A', row: { name: 'PF.90197.pdf', type: 'pdf', pages: 28, size: '1.2 MB' }, delay: 400 },
  { type: 'add_row', stepId: 'A', row: { name: 'PF.90298_QC接头要求.pdf', type: 'pdf', pages: 28, size: '890 KB' }, delay: 400 },
  { type: 'add_row', stepId: 'A', row: { name: 'KP1 Fuel line damper.pptx', type: 'pptx', pages: 12, size: '3.1 MB' }, delay: 400 },
  { type: 'add_row', stepId: 'A', row: { name: 'KP1_CTS_Component-Technical-Spec.docx', type: 'docx', pages: 4, size: '156 KB' }, delay: 400 },
  { type: 'add_row', stepId: 'A', row: { name: 'STLA-DVPR模板.xlsx', type: 'xlsx', pages: 4, size: '89 KB' }, delay: 400 },
  { type: 'message', stepId: 'A', text: '正在检查嵌入文件...', delay: 600 },
  { type: 'add_embedded', stepId: 'A', file: { name: 'KP1-requirement-register.xlsx', source: 'SSTS', layer: 1 }, delay: 350 },
  { type: 'add_embedded', stepId: 'A', file: { name: 'KP1-EDD-cost-breakdown.xlsx', source: 'SSTS', layer: 1 }, delay: 350 },
  { type: 'add_embedded', stepId: 'A', file: { name: 'KP1-SDT-team-roster.xlsx', source: 'SSTS', layer: 1 }, delay: 350 },
  { type: 'add_embedded', stepId: 'A', file: { name: 'KP1-RASI-matrix.xlsx', source: 'SSTS', layer: 1 }, delay: 350 },
  { type: 'add_embedded', stepId: 'A', file: { name: 'KP1-BOM-list.xlsx', source: 'SSTS', layer: 1 }, delay: 350 },
  { type: 'add_embedded', stepId: 'A', file: { name: 'TESIS-reliability-targets.png', source: 'CTS', layer: 2 }, delay: 300 },
  { type: 'add_embedded', stepId: 'A', file: { name: 'dimensional-drawing.emf', source: 'CTS', layer: 2 }, delay: 300 },
  { type: 'add_embedded', stepId: 'A', file: { name: 'damper-spec-Nobel.pdf', source: 'PPTX', layer: 2 }, delay: 300 },
  { type: 'add_embedded', stepId: 'A', file: { name: 'QC-connector-detail.png', source: 'PF.90298', layer: 2 }, delay: 300 },
  { type: 'add_embedded', stepId: 'A', file: { name: 'test-matrix-appendix.xlsx', source: 'PF.90197', layer: 2 }, delay: 300 },
  { type: 'add_embedded', stepId: 'A', file: { name: 'material-approval-PA12.pdf', source: 'SSTS L2', layer: 3 }, delay: 300 },
  { type: 'add_embedded', stepId: 'A', file: { name: 'Fiat-07416-marking-std.pdf', source: 'SSTS L2', layer: 3 }, delay: 300 },
  { type: 'message', stepId: 'A', text: '🎯 发现 5 个客户模板！', delay: 600 },
  { type: 'add_template', stepId: 'A', template: 'EDD 成本分解模板', delay: 400 },
  { type: 'add_template', stepId: 'A', template: 'SDT 团队名册模板', delay: 400 },
  { type: 'add_template', stepId: 'A', template: '需求登记表模板', delay: 400 },
  { type: 'add_template', stepId: 'A', template: 'RASI 矩阵模板', delay: 400 },
  { type: 'add_template', stepId: 'A', template: 'BOM 清单模板', delay: 400 },
  { type: 'set_status', stepId: 'A', status: 'done', delay: 500 },
  { type: 'message', stepId: 'A', text: '✅ Phase A 完成 — 文件发现与解析', delay: 300 },
  { type: 'show_confirm', stepId: 'A', delay: 300 },
];

// === Phase B simulation events ===

export const phaseBEvents: SimEvent[] = [
  { type: 'show_card', stepId: 'B', delay: 0 },
  { type: 'message', stepId: 'B', text: '🔍 B1: 正在扫描引用规范...', delay: 800 },
  { type: 'counter', stepId: 'B', field: 'missingCount', from: 0, to: 47, delay: 100 },
  { type: 'add_missing', stepId: 'B', item: { id: 'CD.80064', name: 'CD.80064 核心文件包', priority: 'high' }, delay: 300 },
  { type: 'add_missing', stepId: 'B', item: { id: 'SD-11597', name: 'SD-11597 燃油兼容性清单', priority: 'high' }, delay: 300 },
  { type: 'add_missing', stepId: 'B', item: { id: 'SD-M0008', name: 'SD-M0008/03 尼龙管认证', priority: 'high' }, delay: 300 },
  { type: 'add_missing', stepId: 'B', item: { id: 'QR.00001', name: 'QR.00001 GPAT 全球测试', priority: 'high' }, delay: 300 },
  { type: 'add_missing', stepId: 'B', item: { id: 'CS.00251', name: 'CS.00251 防腐蚀要求', priority: 'high' }, delay: 300 },
  { type: 'add_missing', stepId: 'B', item: { id: 'QR-10012', name: 'QR-10012 尺寸质量规范', priority: 'high' }, delay: 300 },
  { type: 'message', stepId: 'B', text: '⚠️ 发现 47 项缺失，其中 6 项高优先级', delay: 600 },

  { type: 'message', stepId: 'B', text: '🔍 B2: 正在提取特殊特性...', delay: 800 },
  { type: 'add_characteristic', stepId: 'B', char: { id: 'CC-01', name: '爆破压力 ≥22.5bar', type: 'CC', spec: 'PF.90197 §5.2' }, delay: 350 },
  { type: 'add_characteristic', stepId: 'B', char: { id: 'CC-02', name: '拉脱力 ≥200N', type: 'CC', spec: 'PF.90298 §4.1' }, delay: 350 },
  { type: 'add_characteristic', stepId: 'B', char: { id: 'CC-03', name: '燃油渗透 ≤2g/m²/d', type: 'CC', spec: 'PF.90197 §6.3' }, delay: 350 },
  { type: 'add_characteristic', stepId: 'B', char: { id: 'CC-04', name: '耐火性 2min无泄漏', type: 'CC', spec: 'PF.90197 §7.1' }, delay: 350 },
  { type: 'add_characteristic', stepId: 'B', char: { id: 'CC-05', name: '低温冲击 -40°C无裂', type: 'CC', spec: 'SSTS §3.2' }, delay: 350 },
  { type: 'add_characteristic', stepId: 'B', char: { id: 'CC-06', name: '盐雾 720h无腐蚀', type: 'CC', spec: 'CS.00251' }, delay: 350 },
  { type: 'add_characteristic', stepId: 'B', char: { id: 'CC-07', name: '内径公差 ±0.1mm', type: 'CC', spec: 'SSTS §2.1' }, delay: 350 },
  { type: 'add_characteristic', stepId: 'B', char: { id: 'CC-08', name: '标识 Fiat 07416', type: 'CC', spec: 'Fiat-07416' }, delay: 350 },
  { type: 'add_characteristic', stepId: 'B', char: { id: 'SC-01', name: '外径尺寸', type: 'SC', spec: 'SSTS §2.1' }, delay: 200 },
  { type: 'add_characteristic', stepId: 'B', char: { id: 'SC-02', name: '壁厚均匀性', type: 'SC', spec: 'SSTS §2.2' }, delay: 200 },
  { type: 'add_characteristic', stepId: 'B', char: { id: 'SC-03', name: '表面光洁度', type: 'SC', spec: 'SSTS §2.3' }, delay: 200 },
  { type: 'add_characteristic', stepId: 'B', char: { id: 'SC-04', name: 'PA12 材料纯度', type: 'SC', spec: 'SD-M0008' }, delay: 200 },
  { type: 'add_characteristic', stepId: 'B', char: { id: 'SC-05', name: 'QC 接头配合力', type: 'SC', spec: 'PF.90298 §3' }, delay: 200 },
  { type: 'counter', stepId: 'B', field: 'ccCount', from: 0, to: 8, delay: 50 },
  { type: 'counter', stepId: 'B', field: 'scCount', from: 0, to: 25, delay: 50 },
  { type: 'message', stepId: 'B', text: '📋 特殊特性: 8 CC + 25 SC = 33 项', delay: 600 },

  { type: 'message', stepId: 'B', text: '🔍 B3: 正在核查例外清单...', delay: 800 },
  { type: 'add_exception', stepId: 'B', item: { id: 'EX-01', name: '爆破压力试验方法', status: 'approved' }, delay: 250 },
  { type: 'add_exception', stepId: 'B', item: { id: 'EX-02', name: '拉脱力试验条件', status: 'approved' }, delay: 250 },
  { type: 'add_exception', stepId: 'B', item: { id: 'EX-03', name: '燃油渗透测试周期', status: 'approved' }, delay: 250 },
  { type: 'add_exception', stepId: 'B', item: { id: 'EX-04', name: '耐火性替代方案', status: 'rejected' }, delay: 250 },
  { type: 'add_exception', stepId: 'B', item: { id: 'EX-05', name: '低温冲击范围', status: 'approved' }, delay: 250 },
  { type: 'add_exception', stepId: 'B', item: { id: 'EX-06', name: '盐雾时间缩短', status: 'rejected' }, delay: 250 },
  { type: 'add_exception', stepId: 'B', item: { id: 'EX-07', name: 'REACH 物质声明', status: 'approved' }, delay: 250 },
  { type: 'add_exception', stepId: 'B', item: { id: 'EX-08', name: 'IMDS 录入延期', status: 'pending' }, delay: 250 },
  { type: 'add_exception', stepId: 'B', item: { id: 'EX-09', name: '重金属豁免申请', status: 'rejected' }, delay: 250 },
  { type: 'add_exception', stepId: 'B', item: { id: 'EX-10', name: 'PVC 含量确认', status: 'pending' }, delay: 250 },
  { type: 'add_exception', stepId: 'B', item: { id: 'EX-11', name: 'Nobel 阻尼器认证', status: 'approved' }, delay: 250 },
  { type: 'counter', stepId: 'B', field: 'approvedCount', from: 0, to: 11, delay: 50 },
  { type: 'counter', stepId: 'B', field: 'rejectedCount', from: 0, to: 3, delay: 50 },
  { type: 'counter', stepId: 'B', field: 'pendingCount', from: 0, to: 7, delay: 50 },
  { type: 'message', stepId: 'B', text: '✅ Phase B 完成 — 规范解析与特性提取', delay: 500 },
  { type: 'set_status', stepId: 'B', status: 'done', delay: 300 },
  { type: 'show_confirm', stepId: 'B', delay: 300 },
];

// === Phase C simulation events ===

function buildPhaseCEvents(): SimEvent[] {
  const events: SimEvent[] = [
    { type: 'show_card', stepId: 'C', delay: 0 },
    { type: 'message', stepId: 'C', text: '📦 开始生成报价产出物...', delay: 600 },
  ];

  // Add artifact slots (empty placeholders)
  for (const a of artifactDefinitions) {
    events.push({ type: 'add_artifact_slot', artifact: { ...a, status: 'pending' }, delay: 200 });
  }

  // Generate artifacts one by one
  for (let i = 0; i < artifactDefinitions.length; i++) {
    const a = artifactDefinitions[i];
    events.push(
      { type: 'message', stepId: 'C', text: `⚙️ 正在生成 ${a.name}...`, delay: 600 },
      { type: 'add_artifact', artifact: { ...a, status: 'generating' }, delay: 800 },
      { type: 'add_artifact', artifact: { ...a, status: 'ready' }, delay: 400 },
    );
  }

  // Consistency checks
  events.push({ type: 'message', stepId: 'C', text: '🔍 正在执行一致性检查...', delay: 800 });

  const checks = [
    { id: 'chk-1', name: '数值一致性', passed: true },
    { id: 'chk-2', name: '特性覆盖率', passed: true },
    { id: 'chk-3', name: '人员对齐', passed: true },
    { id: 'chk-4', name: '试验覆盖', passed: true },
    { id: 'chk-5', name: 'BOM 一致性', passed: true },
    { id: 'chk-6', name: '模板合规性', passed: true },
    { id: 'chk-7', name: '嵌入文件完整性', passed: true },
    { id: 'chk-8', name: '缺失项跟踪', passed: false },
  ];

  for (const c of checks) {
    events.push({ type: 'add_check', check: c, delay: 500 });
  }

  events.push(
    { type: 'message', stepId: 'C', text: '✅ Phase C 完成 — 全部 11 个产出物已就绪', delay: 600 },
    { type: 'set_status', stepId: 'C', status: 'done', delay: 300 },
  );

  return events;
}

export const phaseCEvents: SimEvent[] = buildPhaseCEvents();
