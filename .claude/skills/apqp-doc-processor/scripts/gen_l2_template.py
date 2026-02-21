"""
L2零部件特性清单生成器 —— 标准模板 v1.0
使用说明：
  1. 填写 CONFIG 区
  2. 填写 BOM_DATA 区（BOM结构树）
  3. 填写 L2_DATA 区（L2特性数据行）
  4. 填写 GAP_DATA 区（缺口清单，无则留空）
  5. 填写 RV_DATA 区（反向校验）
  6. 运行脚本：python gen_l2.py
"""

import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

# ============================================================
# CONFIG — 修改此区域
# ============================================================
CONFIG = {
    "零部件名称": "",
    "OEM":        "",
    "来源文档":   "",
    "提取日期":   "",
    "输出路径":   "阶段4_L2零部件特性清单.xlsx",
}

# ============================================================
# BOM_DATA — BOM结构树
# 列顺序: [零部件编号, 零部件名称, 类型, 父级]
# 类型: 结构件/功能件/电子件/密封件/连接件/辅助件
# ============================================================
BOM_DATA = [
    # ["1", "壳体 Housing",            "结构件", "总成"],
    # ["2", "滤芯 Filter Element",      "功能件", "总成"],
]

# ============================================================
# L2_DATA — L2特性
# 列顺序: [L2 ID, 零部件, 特性名称, 目标值/范围, 单位, 关联L1 ID, 来源]
# L2 ID格式: L2-{零部件序号}.{特性序号} (例: L2-1.01, L2-2.05)
# ============================================================
L2_DATA = [
    # ["L2-1.01", "壳体", "材料牌号", "PA66-GF30", "-", "M-07", "PF.90150 6.2.1"],
]

# ============================================================
# GAP_DATA — 缺口清单（无则留空）
# 列顺序: [缺口编号, 缺失信息, 影响L2, 关联L1, 所需文档类型, 优先级]
# 优先级: 高/中/低
# ============================================================
GAP_DATA = [
    # ["GAP-01", "滤芯滤材类型/层数/面积", "L2-2.01~L2-2.05", "F-01,F-02", "零件规格书+供应商图纸", "高"],
]

# ============================================================
# RV_DATA — 反向校验
# 列顺序: [章节, 标题, 覆盖状态, L2 ID, 备注]
# ============================================================
RV_DATA = [
    # ["6.2.1", "Material Requirements", "✓已提取", "L2-1.01", ""],
]

# ============================================================
# 以下为格式代码，不需要修改
# ============================================================

HEADER_FONT = Font(bold=True, size=11, color="FFFFFF")
HEADER_FILL = PatternFill(start_color="2F5496", end_color="2F5496", fill_type="solid")
TOTAL_FILL  = PatternFill(start_color="D9D9D9", end_color="D9D9D9", fill_type="solid")
GAP_HIGH    = PatternFill(start_color="FF7F7F", end_color="FF7F7F", fill_type="solid")
GAP_MID     = PatternFill(start_color="FFD966", end_color="FFD966", fill_type="solid")
GAP_LOW     = PatternFill(start_color="E2EFDA", end_color="E2EFDA", fill_type="solid")
RV_GAP_FILL = PatternFill(start_color="FFD966", end_color="FFD966", fill_type="solid")

# 按零部件序号分配行颜色（交替浅色区分不同零部件）
PART_FILLS = [
    PatternFill(start_color="FFFFFF", end_color="FFFFFF", fill_type="solid"),
    PatternFill(start_color="EBF3FB", end_color="EBF3FB", fill_type="solid"),
]
THIN = Border(
    left=Side(style='thin'), right=Side(style='thin'),
    top=Side(style='thin'),  bottom=Side(style='thin'),
)
WRAP_TOP = Alignment(wrap_text=True, vertical='top')
CENTER   = Alignment(horizontal='center', vertical='center', wrap_text=True)


def apply_header(ws, headers, col_widths):
    ws.append(headers)
    for c, w in enumerate(col_widths, 1):
        ws.column_dimensions[get_column_letter(c)].width = w
        cell = ws.cell(1, c)
        cell.font      = HEADER_FONT
        cell.fill      = HEADER_FILL
        cell.alignment = CENTER
        cell.border    = THIN
    ws.freeze_panes = "A2"
    ws.auto_filter.ref = ws.dimensions


def build_cover(wb):
    ws = wb.active
    ws.title = "封面"
    fields = [
        ("零部件名称", CONFIG["零部件名称"]),
        ("OEM",        CONFIG["OEM"]),
        ("来源文档",   CONFIG["来源文档"]),
        ("提取日期",   CONFIG["提取日期"]),
        ("阶段",       "4 - L2零部件特性清单"),
    ]
    for r, (k, v) in enumerate(fields, 1):
        ws.cell(r, 1, k).font = Font(bold=True)
        ws.cell(r, 1).border  = THIN
        ws.cell(r, 2, v).border = THIN
        ws.cell(r, 2).alignment = WRAP_TOP
    ws.column_dimensions['A'].width = 18
    ws.column_dimensions['B'].width = 70


def build_bom(wb):
    ws = wb.create_sheet("BOM结构")
    headers    = ["零部件编号", "零部件名称",  "类型",   "父级"]
    col_widths = [12,            35,             12,        12]
    apply_header(ws, headers, col_widths)
    for row in BOM_DATA:
        ws.append(row)
    for r in range(2, len(BOM_DATA) + 2):
        for c in range(1, len(headers) + 1):
            ws.cell(r, c).border    = THIN
            ws.cell(r, c).alignment = WRAP_TOP


def build_l2(wb):
    ws = wb.create_sheet("L2特性清单")
    headers    = ["L2 ID",   "零部件",  "特性名称",  "目标值/范围",  "单位",  "关联L1 ID",  "来源"]
    col_widths = [12,         18,         42,            38,             10,       14,             30]
    apply_header(ws, headers, col_widths)
    # 按零部件序号分配交替色
    for row in L2_DATA:
        ws.append(row)
    for r, row in enumerate(L2_DATA, 2):
        part_no = row[0].split(".")[0].replace("L2-", "") if row[0] else "0"
        fill_idx = (int(part_no) - 1) % 2 if part_no.isdigit() else 0
        for c in range(1, len(headers) + 1):
            cell = ws.cell(r, c)
            cell.border    = THIN
            cell.alignment = WRAP_TOP
            cell.fill      = PART_FILLS[fill_idx]


def build_gaps(wb):
    ws = wb.create_sheet("缺口清单")
    headers    = ["缺口编号",  "缺失信息",   "影响L2",    "关联L1",   "所需文档类型",   "优先级"]
    col_widths = [12,           45,             22,            14,          30,                8]
    apply_header(ws, headers, col_widths)
    priority_fills = {"高": GAP_HIGH, "中": GAP_MID, "低": GAP_LOW}
    for row in GAP_DATA:
        ws.append(row)
    for r, row in enumerate(GAP_DATA, 2):
        priority = row[5] if len(row) > 5 else ""
        row_fill = priority_fills.get(priority, THIN)
        for c in range(1, len(headers) + 1):
            cell = ws.cell(r, c)
            cell.border    = THIN
            cell.alignment = WRAP_TOP
            if isinstance(row_fill, PatternFill):
                cell.fill = row_fill


def build_rv(wb):
    ws = wb.create_sheet("反向校验")
    headers    = ["章节",   "标题",    "覆盖状态",  "L2 ID",  "备注"]
    col_widths = [18,        30,         12,           22,        35]
    apply_header(ws, headers, col_widths)
    for row in RV_DATA:
        ws.append(row)
    for r, row in enumerate(RV_DATA, 2):
        for c in range(1, len(headers) + 1):
            cell = ws.cell(r, c)
            cell.border    = THIN
            cell.alignment = WRAP_TOP
        if len(row) > 2 and "[缺口]" in str(row[2]):
            for c in range(1, len(headers) + 1):
                ws.cell(r, c).fill = RV_GAP_FILL


def build_stats(wb):
    ws = wb.create_sheet("统计汇总")
    headers    = ["零部件编号",  "零部件名称",  "特性数量"]
    col_widths = [12,              35,              10]
    apply_header(ws, headers, col_widths)
    counts = {}
    for row in L2_DATA:
        part_id = row[0].split(".")[0] if row[0] else "?"
        counts[part_id] = counts.get(part_id, 0) + 1
    bom_dict = {row[0]: row[1] for row in BOM_DATA}
    for r, (pid, cnt) in enumerate(sorted(counts.items()), 2):
        part_name = bom_dict.get(pid.replace("L2-", ""), pid)
        ws.cell(r, 1, pid).border  = THIN
        ws.cell(r, 2, part_name).border = THIN
        ws.cell(r, 3, cnt).border  = THIN
    total_r = len(counts) + 2
    for c, v in enumerate(["-", "合计", sum(counts.values())], 1):
        cell = ws.cell(total_r, c, v)
        cell.font   = Font(bold=True)
        cell.fill   = TOTAL_FILL
        cell.border = THIN


def main():
    wb = openpyxl.Workbook()
    build_cover(wb)
    build_bom(wb)
    build_l2(wb)
    if GAP_DATA:
        build_gaps(wb)
    build_rv(wb)
    build_stats(wb)
    wb.save(CONFIG["输出路径"])
    counts = {}
    for row in L2_DATA:
        counts[row[1]] = counts.get(row[1], 0) + 1
    print(f"已保存: {CONFIG['输出路径']}")
    print(f"L2特性合计: {len(L2_DATA)} 条，涉及 {len(counts)} 个零部件")
    if GAP_DATA:
        print(f"缺口合计: {len(GAP_DATA)} 项")


if __name__ == "__main__":
    main()
