# APQP Web Frontend Design

Date: 2026-02-26
Location: `APQP/web/`

## Context

Turn the existing APQP skill (Claude Code CLI) into a web product. Demo + real usage for ~10 quality managers at Tier1 suppliers. Delivered on Mac Mini as appliance.

## Design Decisions

| Decision | Choice |
|----------|--------|
| Layout | Wizard/stepper (方案B) |
| Decision interaction | Inline forms (radio buttons, dropdowns) |
| Visual style | Clean white background, gold accent |
| Chat | Collapsible at bottom, auxiliary role |
| Pages | 2 pages: project list + project workspace |
| User management | None (10 users, intranet) |
| Project location | `APQP/web/` subdirectory |

## Page 1: Project List

- Card layout, one card per project
- Each card shows: project name, OEM, document count, current stage, progress, last updated
- States: in-progress, awaiting confirmation, completed
- Actions: [Continue], [View], [Download all outputs], [+ New project]
- New project form: name, OEM (dropdown), component type

OEM and component type auto-load corresponding knowledge files:
- `knowledge/oem/{oem}.md`
- `knowledge/component/{component}.md`

## Page 2: Project Workspace (Wizard)

### Top: Step Bar

```
● Upload ── ● Stage1 ── ○ Stage2 ── ○ Stage3 ── ○ Stage4
             文档清点     L1特性     L2特性      QFD
```

Node states:
- `●` completed (clickable to review)
- `◉` current (highlighted)
- `○` not reached (greyed, not clickable)

### Middle: Main Content (varies by stage)

#### Stage 0 — Document Upload
- Drag-and-drop zone for PDFs
- File list with name, page count, status
- [Start Processing →] button

#### Stage 1 — Document Inventory & Confirmation
Three sections stacked vertically:
1. **Document list** — table showing all parsed documents with type, level, language, pages
2. **Conflicts** — inline radio buttons per conflict (choose Doc A / Doc B / TBD)
3. **Missing documents** — dropdown per item (supplement later / skip), upload button for supplementary docs

Upload supplementary docs triggers re-evaluation automatically.

"Confirm and proceed" button only enabled when all decision items are resolved.

#### Stage 2 — L1 Engineering Characteristics
- Real-time progress bar during extraction
- Inline table preview (first 10-20 rows)
- C-class rows: red marker; conflict rows: yellow marker
- [Download full Excel] button
- Gap/conflict summary with expandable details
- [Confirm and proceed →]

#### Stage 3 — L2 Part Characteristics
- Same layout as Stage 2
- Part-level characteristics with L1 ID linkage
- [Download full Excel] + [Confirm and proceed →]

#### Stage 4 — QFD Quality House Matrix
- Matrix preview (◎/○/△ symbols)
- Audit results: empty rows, empty columns, high-density L2 (design-critical parts)
- [Download QFD Excel] + [Download all outputs .zip]
- [Project Complete ✅]

### Bottom: Collapsible Chat

- Collapsed: single line "Have a question? Click to expand"
- Expanded: slides up from bottom, occupies lower half
- Shows: AI processing logs + user Q&A
- Input field + send button

### Real-time Status Feedback

Status bar at top of main content area, 4 states:

| State | UI | User can |
|-------|-----|----------|
| Idle | Upload zone highlighted | Upload files, start processing |
| Processing | Progress bar + description text, buttons greyed | Watch progress, ask questions in chat |
| Awaiting decision | Decision forms highlighted | Fill conflicts/missing choices, upload supplements |
| Stage complete | Green checkmark + summary | Download outputs, proceed to next stage |

Error state: error message + [Retry] [Skip] [Contact support] buttons.

## Data Flow

```
Browser ←WebSocket→ Web Channel ← NanoClaw Container Engine → Claude Agent + APQP Skill
```

- File upload: HTTP POST multipart
- Real-time progress: WebSocket push from container stdout stream
- File download: HTTP GET static files from project output directory

## Tech Stack (TBD in implementation plan)

- Frontend: React + lightweight UI library
- Backend: Node.js HTTP server + WebSocket (new channel in NanoClaw or standalone)
- Storage: local filesystem (projects/) + SQLite (project metadata)
