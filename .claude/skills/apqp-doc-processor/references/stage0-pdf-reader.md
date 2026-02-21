# 阶段0.5：PDF读取

## 工具选择（分层回退策略）

按优先级自动探测可用工具：

```
优先级1: PyMuPDF (fitz) — 最可靠，Windows原生支持
         python -c "import fitz; print('OK')"
         → 用 fitz.open() 提取文本，写入 {文件名}_text.md

优先级2: Desktop Commander read_file — 如已安装MCP
         DC: get_file_info(path) → 获取页数
         DC: read_file(path, offset, length) → 分批读取

优先级3: Claude Code 内置 Read + pages 参数 — 部分系统可用
         Read(file_path, pages="1-5")

优先级4: pdfplumber / pdfminer — 备选Python库
```

## 执行流程

1. 先探测可用工具（运行一行测试命令）
2. 获取每个PDF总页数
3. 提取全文到 `{文件名}_text.md` 中间文件
4. 分批读入上下文（每批300-500行）

## 多文档处理

- 多个PDF时**并行提取**文本（同时启动多个提取任务）
- 按文件名排序确定处理顺序

## PyMuPDF提取脚本模式

```python
import fitz

doc = fitz.open(pdf_path)
page_count = len(doc)  # 必须在循环前保存
text_parts = []
for i in range(page_count):
    page = doc[i]
    text_parts.append(f"--- Page {i+1}/{page_count} ---\n{page.get_text()}")
doc.close()

with open(output_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(text_parts))
```

注意：`len(doc)` 必须在 `doc.close()` 之前调用，否则报 `ValueError: document closed`。
