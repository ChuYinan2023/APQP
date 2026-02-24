"""
L1工程特性清单生成器
使用方法：复制到output/gen_l1.py，填写数据区，运行 python3 gen_l1.py
"""

import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

# ============================================================
# CONFIG — 修改此区域
# ============================================================
CONFIG = {
    "输出路径": "阶段2_L1工程特性清单.xlsx",
}

# ============================================================
# L1_DATA — 修改此区域
# 列顺序: [ID, 特性分类, 工程特性名称, 目标值/要求, 原文描述, 类别, 文件来源, 章节, 页码, 备注]
# 类别: "C(关键)"=影响安全/核心功能 / "A(一般)"=其他
# 冲突行在备注中标注，如 "[冲突] PF.90150=XX, CTS=YY"
# ============================================================
L1_DATA = [
    # [1, "过滤性能", "过滤效率", "≥98% @4μm", "Filtration efficiency ≥98% @4μm", "C(关键)", "CTS", "3.1", "12", ""],
]

# ============================================================
# GAP_DATA — 缺口清单（无则留空）
# 列顺序: [缺失信息, 影响范围, 所需文档, 优先级]
# 优先级: "高" / "中" / "低"
# ============================================================
GAP_DATA = [
    # ["CS.00056 环境分类代码", "振动/温度具体profile", "CS.00056", "高"],
]

# ============================================================
# CONFLICT_DATA — 冲突清单（无则留空）
# 列顺序: [参数, 文档A值, 文档B值, 建议处理]
# ============================================================
CONFLICT_DATA = [
    # ["爆破压力", "PF.90150: ≥800kPa", "CTS: ≥1000kPa", "以CTS为准"],
]

# ============================================================
# 以下为格式代码，不修改
# ============================================================

HEADER_FONT = Font(bold=True, size=11)
HEADER_FILL = PatternFill(start_color="D3D3D3", end_color="D3D3D3", fill_type="solid")
CLASS_C_FILL = PatternFill(start_color="FFE6E6", end_color="FFE6E6", fill_type="solid")
CONFLICT_FILL = PatternFill(start_color="FFD966", end_color="FFD966", fill_type="solid")
GAP_HIGH = PatternFill(start_color="FF7F7F", end_color="FF7F7F", fill_type="solid")
GAP_MID = PatternFill(start_color="FFD966", end_color="FFD966", fill_type="solid")
GAP_LOW = PatternFill(start_color="E2EFDA", end_color="E2EFDA", fill_type="solid")
THIN = Border(
    left=Side(style='thin'), right=Side(style='thin'),
    top=Side(style='thin'), bottom=Side(style='thin'),
)
WRAP_TOP = Alignment(wrap_text=True, vertical='top')
CENTER = Alignment(horizontal='center', vertical='center', wrap_text=True)

L1_HEADERS = ["ID", "特性分类", "工程特性名称", "目标值/要求", "原文描述", "类别", "文件来源", "章节", "页码", "备注"]
L1_WIDTHS = [6, 15, 40, 30, 50, 10, 20, 10, 6, 30]


def apply_header(ws, headers, widths):
    ws.append(headers)
    ws.row_dimensions[1].height = 30
    for c, w in enumerate(widths, 1):
        ws.column_dimensions[get_column_letter(c)].width = w
        cell = ws.cell(1, c)
        cell.font = HEADER_FONT
        cell.fill = HEADER_FILL
        cell.alignment = CENTER
        cell.border = THIN
    ws.freeze_panes = "A2"


def build_l1(wb):
    ws = wb.active
    ws.title = "工程特性清单"
    apply_header(ws, L1_HEADERS, L1_WIDTHS)
    for row in L1_DATA:
        ws.append(row)
    for r in range(2, len(L1_DATA) + 2):
        cls = ws.cell(r, 6).value  # 类别列
        note = str(ws.cell(r, 10).value or "")  # 备注列
        for c in range(1, len(L1_HEADERS) + 1):
            cell = ws.cell(r, c)
            cell.border = THIN
            cell.alignment = WRAP_TOP
            if "[冲突]" in note:
                cell.fill = CONFLICT_FILL
            elif str(cls).startswith("C"):
                cell.fill = CLASS_C_FILL


def build_gaps(wb):
    ws = wb.create_sheet("缺口与冲突")

    # 缺口部分
    ws.cell(1, 1, "— 缺口 —").font = Font(bold=True, size=12)
    gap_headers = ["缺失信息", "影响范围", "所需文档", "优先级"]
    gap_widths = [40, 30, 30, 10]
    for c, (h, w) in enumerate(zip(gap_headers, gap_widths), 1):
        cell = ws.cell(2, c, h)
        cell.font = HEADER_FONT
        cell.fill = HEADER_FILL
        cell.border = THIN
        cell.alignment = CENTER
        ws.column_dimensions[get_column_letter(c)].width = w

    priority_fills = {"高": GAP_HIGH, "中": GAP_MID, "低": GAP_LOW}
    for i, row in enumerate(GAP_DATA, 3):
        for c, v in enumerate(row, 1):
            cell = ws.cell(i, c, v)
            cell.border = THIN
            cell.alignment = WRAP_TOP
        p = row[3] if len(row) > 3 else ""
        if p in priority_fills:
            for c in range(1, len(gap_headers) + 1):
                ws.cell(i, c).fill = priority_fills[p]

    # 冲突部分
    conflict_start = len(GAP_DATA) + 5
    ws.cell(conflict_start, 1, "— 冲突 —").font = Font(bold=True, size=12)
    conflict_headers = ["参数", "文档A值", "文档B值", "建议处理"]
    conflict_widths = [30, 30, 30, 30]
    for c, (h, w) in enumerate(zip(conflict_headers, conflict_widths), 1):
        cell = ws.cell(conflict_start + 1, c, h)
        cell.font = HEADER_FONT
        cell.fill = HEADER_FILL
        cell.border = THIN
        cell.alignment = CENTER
        ws.column_dimensions[get_column_letter(c)].width = max(
            ws.column_dimensions[get_column_letter(c)].width or 0, w
        )
    for i, row in enumerate(CONFLICT_DATA, conflict_start + 2):
        for c, v in enumerate(row, 1):
            cell = ws.cell(i, c, v)
            cell.border = THIN
            cell.alignment = WRAP_TOP
            cell.fill = CONFLICT_FILL


def main():
    wb = openpyxl.Workbook()
    build_l1(wb)
    if GAP_DATA or CONFLICT_DATA:
        build_gaps(wb)
    wb.save(CONFIG["输出路径"])
    c_count = sum(1 for r in L1_DATA if len(r) > 5 and str(r[5]).startswith("C"))
    print(f"已保存: {CONFIG['输出路径']}")
    print(f"L1特性: {len(L1_DATA)} 条 (C类:{c_count}, A类:{len(L1_DATA)-c_count})")
    if GAP_DATA:
        print(f"缺口: {len(GAP_DATA)} 项")
    if CONFLICT_DATA:
        print(f"冲突: {len(CONFLICT_DATA)} 项")


if __name__ == "__main__":
    main()
