"""
QFD质量屋矩阵生成器
使用方法：复制到output/gen_qfd.py，填写数据区，运行 python3 gen_qfd.py
"""

import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

# ============================================================
# CONFIG — 修改此区域
# ============================================================
CONFIG = {
    "标题": "QFD质量屋\n工程特性 → 零件特性",
    "输出路径": "阶段4_QFD质量屋矩阵.xlsx",
}

# ============================================================
# L1_ITEMS — L1工程特性（行）
# 格式: [(ID, 特性名称, 目标值), ...]
# ============================================================
L1_ITEMS = [
    # (1, "过滤效率 @4μm", "≥98%"),
]

# ============================================================
# L2_ITEMS — L2零部件特性（列）
# 格式: [(ID, 零部件名称, 特性名称, 目标值), ...]
# ============================================================
L2_ITEMS = [
    # ("PC-01", "壳体", "材料", "PA66-GF30"),
]

# ============================================================
# MATRIX — L1×L2关联矩阵
# 格式: {(L1_ID, L2_ID): 关联强度}
# 关联强度: 9=强(◎) / 3=中(○) / 1=弱(△)
# 只填有关联的，无关联不写
# ============================================================
MATRIX = {
    # (1, "PC-01"): 9,
}

# ============================================================
# 以下为格式代码，不修改
# ============================================================

SCORE_MAP = {9: "◎", 3: "○", 1: "△"}
TITLE_FILL = PatternFill(start_color="4472C4", end_color="4472C4", fill_type="solid")
TITLE_FONT = Font(bold=True, size=12, color="FFFFFF")
L2_ROW1_FILL = PatternFill(start_color="D9E1F2", end_color="D9E1F2", fill_type="solid")
L2_ROW1_FONT = Font(bold=True, size=10)
L2_ROW2_FILL = PatternFill(start_color="E7E6E6", end_color="E7E6E6", fill_type="solid")
L1_ID_FILL = PatternFill(start_color="E7E6E6", end_color="E7E6E6", fill_type="solid")
HEADER_FONT = Font(bold=True, size=10)
HEADER_FILL = PatternFill(start_color="D9E1F2", end_color="D9E1F2", fill_type="solid")
THIN = Border(
    left=Side(style='thin'), right=Side(style='thin'),
    top=Side(style='thin'), bottom=Side(style='thin'),
)
CENTER = Alignment(horizontal='center', vertical='center', wrap_text=True)
WRAP_TOP = Alignment(wrap_text=True, vertical='top')

# L1固定列: A=ID, B=特性名称, C=目标值
L1_COL_COUNT = 3
L2_START_COL = 4  # D列开始


def build_matrix(wb):
    ws = wb.active
    ws.title = "QFD矩阵"

    # 标题区 A1:C3
    ws.merge_cells("A1:C3")
    title = ws.cell(1, 1, CONFIG["标题"])
    title.font = TITLE_FONT
    title.fill = TITLE_FILL
    title.alignment = CENTER
    for r in range(1, 4):
        for c in range(1, 4):
            ws.cell(r, c).border = THIN

    # L2列3行表头
    part_groups = {}
    for j, (l2id, part, name, target) in enumerate(L2_ITEMS):
        col = L2_START_COL + j
        part_groups.setdefault(part, []).append(col)
        ws.column_dimensions[get_column_letter(col)].width = 16

    # Row 1: 零件名称（同零件合并）
    for part, cols in part_groups.items():
        start_col, end_col = min(cols), max(cols)
        if start_col != end_col:
            ws.merge_cells(start_row=1, start_column=start_col, end_row=1, end_column=end_col)
        cell = ws.cell(1, start_col, part)
        cell.font = L2_ROW1_FONT
        cell.fill = L2_ROW1_FILL
        cell.alignment = CENTER
        for c in cols:
            ws.cell(1, c).border = THIN
            ws.cell(1, c).fill = L2_ROW1_FILL

    # Row 2: ID + 特性
    for j, (l2id, part, name, target) in enumerate(L2_ITEMS):
        col = L2_START_COL + j
        cell = ws.cell(2, col, f"{l2id}\n{name}")
        cell.fill = L2_ROW2_FILL
        cell.alignment = CENTER
        cell.border = THIN

    # Row 3: 目标值
    for j, (l2id, part, name, target) in enumerate(L2_ITEMS):
        col = L2_START_COL + j
        cell = ws.cell(3, col, target)
        cell.alignment = CENTER
        cell.border = THIN

    # L1数据行（from row 4）
    for i, (l1id, name, target) in enumerate(L1_ITEMS):
        row = 4 + i
        # ID
        id_cell = ws.cell(row, 1, l1id)
        id_cell.alignment = CENTER
        id_cell.fill = L1_ID_FILL
        id_cell.border = THIN
        # 名称
        name_cell = ws.cell(row, 2, name)
        name_cell.alignment = WRAP_TOP
        name_cell.border = THIN
        # 目标值
        tv_cell = ws.cell(row, 3, target)
        tv_cell.alignment = WRAP_TOP
        tv_cell.border = THIN

        # 关联格
        for j, (l2id, _, _, _) in enumerate(L2_ITEMS):
            col = L2_START_COL + j
            score = MATRIX.get((l1id, l2id), 0)
            cell = ws.cell(row, col)
            cell.alignment = CENTER
            cell.border = THIN
            if score:
                cell.value = SCORE_MAP[score]

    # 列宽
    ws.column_dimensions['A'].width = 8
    ws.column_dimensions['B'].width = 35
    ws.column_dimensions['C'].width = 20

    # 冻结
    ws.freeze_panes = "D4"


def build_review(wb):
    ws = wb.create_sheet("审查")
    headers = ["审查项", "结果", "说明"]
    for c, h in enumerate(headers, 1):
        cell = ws.cell(1, c, h)
        cell.font = HEADER_FONT
        cell.fill = HEADER_FILL
        cell.border = THIN
        cell.alignment = CENTER
    ws.column_dimensions['A'].width = 30
    ws.column_dimensions['B'].width = 50
    ws.column_dimensions['C'].width = 35

    l1_ids = [item[0] for item in L1_ITEMS]
    l2_ids = [item[0] for item in L2_ITEMS]

    empty_l1 = [str(i) for i in l1_ids if not any(MATRIX.get((i, l2id)) for l2id in l2_ids)]
    empty_l2 = [str(i) for i in l2_ids if not any(MATRIX.get((l1id, i)) for l1id in l1_ids)]

    l2_scores = {l2id: sum(MATRIX.get((l1id, l2id), 0) for l1id in l1_ids) for l2id in l2_ids}
    top5 = sorted(l2_scores.items(), key=lambda x: -x[1])[:5]

    total_cells = len(l1_ids) * len(l2_ids) if l1_ids and l2_ids else 1
    checks = [
        ("空行L1（无L2关联）", ", ".join(empty_l1) if empty_l1 else "无", "可能遗漏L2特性"),
        ("空列L2（无L1关联）", ", ".join(empty_l2) if empty_l2 else "无", "可能冗余或遗漏L1"),
        ("关联密度Top5 L2", str(top5), "得分越高越关键"),
        ("矩阵覆盖率", f"{len(MATRIX)}/{total_cells} ({len(MATRIX)*100//total_cells}%)", "有关联格/总格数"),
    ]
    for r, (item, result, note) in enumerate(checks, 2):
        ws.cell(r, 1, item).border = THIN
        ws.cell(r, 1).alignment = WRAP_TOP
        ws.cell(r, 2, result).border = THIN
        ws.cell(r, 2).alignment = WRAP_TOP
        ws.cell(r, 3, note).border = THIN
        ws.cell(r, 3).alignment = WRAP_TOP


def main():
    wb = openpyxl.Workbook()
    build_matrix(wb)
    build_review(wb)
    wb.save(CONFIG["输出路径"])
    print(f"已保存: {CONFIG['输出路径']}")
    print(f"矩阵: {len(L1_ITEMS)} L1 × {len(L2_ITEMS)} L2")
    print(f"有效关联: {len(MATRIX)} 格")


if __name__ == "__main__":
    main()
