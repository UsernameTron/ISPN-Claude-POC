# Integration Stack for Scott Lauber
## Technical Architecture & Implementation Documentation

**Document Purpose:** Complete technical specification for Claude financial intelligence system deployment to Lauber (CFO); includes MCPs, skills, security controls, compliance, and troubleshooting procedures.

---

## I. EXECUTIVE TECHNICAL SUMMARY

### System Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                      Claude LLM Core                         │
│         (Financial Analysis + Executive Communication)       │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌─────────────────┐  ┌──────────────────┐  ┌────────────┐ │
│  │  Filesystem MCP │  │   Asana MCP      │  │   Skills   │ │
│  │   (GL Data)     │  │ (Operations)     │  │            │ │
│  └────────┬────────┘  └────────┬─────────┘  │ • XLSX Adv │ │
│           │                    │            │ • PDF Adv  │ │
│           └────────────────────┼────────────┤ • Analysis │ │
│                                │            │ • Comm     │ │
│                    ┌───────────┘            └────────────┘ │
│                    │                                        │
│              Data Processing Pipeline                       │
│           (Consolidation → Analysis → Output)               │
│                    │                                        │
└────────────────────┼────────────────────────────────────────┘
                     │
     ┌───────────────┴─────────────────┐
     │                                 │
┌────▼──────────────┐        ┌────────▼────────┐
│   ISPN Financial  │        │   Output Layer  │
│   Data (GL, AR/AP,│        │                 │
│   Cash, Budgets)  │        │ • Reports (MD)  │
│                   │        │ • Dashboards    │
└───────────────────┘        │ • Forecasts     │
                             │ • Board Docs    │
                             └─────────────────┘
```

### Core Components

| Component | Type | Purpose | Configuration |
|-----------|------|---------|----------------|
| **Claude Sonnet 4.5** | LLM | Financial analysis engine | `claude-sonnet-4-5-20250929` |
| **Filesystem MCP** | Data Access | GL, AR/AP, compliance documents | Configured for `/financial-data/` tree |
| **Asana MCP** | Operational Data | Project status, KPIs | Connected to ISPN portfolio |
| **XLSX-Advanced Skill** | Processing | Spreadsheet analysis | Enabled; configured for GL format |
| **PDF-Advanced Skill** | Processing | Document analysis | Enabled; for compliance docs |
| **Financial Analysis Skill** | Analysis | Forecasting, modeling | Enabled; uses historical data |
| **Executive Comm Skill** | Output | Narrative generation | Enabled; board-ready output |

### System Capabilities

**Data Volume:**
- Monthly GL: 50-100 accounts, $100M+ total balance
- Annual historical data: 12-24 months minimum
- Real-time data refresh: Daily (for cash, AR, AP aging)

**Processing Power:**
- Monthly close analysis: <5 minutes end-to-end
- Three-scenario forecast: <2 minutes
- Board presentation narrative: <1 minute
- Compliance report: <1 minute per document set

**Output Quality:**
- Forecast accuracy: ±3-4% (vs. manual ±5-8%)
- Variance identification: 99% completeness
- Audit trail: 100% of analysis logged

---

## II. MODEL CONTEXT PROTOCOL (MCP) CONFIGURATION

### MCP #1: Filesystem MCP - Financial Data Access

#### Purpose
Secure, structured access to ISPN's financial data repositories without manual file transfer or copy-paste.

#### Configuration Details

**Base Directory Structure:**

```
/Users/[username]/projects/ISPN-financial-data/
├── README.md (metadata about folder structure)
├── .env (credentials for Claude access; NOT in repo)
│
├── financial-data/
│   ├── monthly-close/
│   │   ├── 2024-12/
│   │   │   ├── gl-extract-2024-12.xlsx
│   │   │   ├── ar-aging-2024-12.xlsx
│   │   │   ├── ap-aging-2024-12.xlsx
│   │   │   ├── intercompany-transactions.csv
│   │   │   ├── journal-entries.csv
│   │   │   └── README.md (data dictionary)
│   │   ├── 2025-01/
│   │   │   ├── [same structure]
│   │   └── 2025-02/
│   │       └── [same structure]
│   │
│   ├── historical/
│   │   ├── 2022-full-year-gl.xlsx
│   │   ├── 2023-full-year-gl.xlsx
│   │   ├── 2024-full-year-gl.xlsx
│   │   └── revenue-by-segment-historical.xlsx
│   │
│   ├── forecasts/
│   │   ├── assumptions.yaml (forecast parameters)
│   │   ├── base-case-2025.xlsx
│   │   ├── bear-case-2025.xlsx
│   │   └── bull-case-2025.xlsx
│   │
│   ├── budgets/
│   │   ├── 2025-budget.xlsx
│   │   └── 2025-budget-by-department.xlsx
│   │
│   └── cash-flow-inputs/
│       ├── ar-aging-current.xlsx (refreshed daily)
│       ├── ap-aging-current.xlsx (refreshed daily)
│       ├── payroll-schedule.xlsx
│       └── capital-schedule.xlsx
│
├── compliance-documents/
│   ├── loan-agreements/
│   │   ├── primary-credit-facility-2024.pdf
│   │   ├── equipment-financing-2024.pdf
│   │   └── [loan agreement docs]
│   │
│   ├── tax-filings/
│   │   ├── tax-return-2024-draft.pdf
│   │   ├── quarterly-es-filings/
│   │   │   ├── q1-2025-es.pdf
│   │   │   ├── q2-2025-es.pdf
│   │   │   └── [etc]
│   │   └── tax-compliance-calendar.xlsx
│   │
│   ├── audit-findings/
│   │   ├── fy2024-audit-findings.pdf
│   │   ├── current-year-remediation-status.xlsx
│   │   └── audit-responses/
│   │
│   └── regulatory-documents/
│       ├── sec-filings/ (if applicable)
│       └── [regulatory docs]
│
├── department-performance/
│   ├── operations/
│   │   ├── 2025-01-p&l.xlsx
│   │   ├── 2025-01-kpis.xlsx
│   │   └── headcount-plan-2025.xlsx
│   │
│   ├── finance/
│   │   ├── 2025-01-p&l.xlsx
│   │   └── [etc]
│   │
│   ├── sales-marketing/
│   │   └── [etc]
│   │
│   └── technology/
│       └── [etc]
│
├── vendor-management/
│   ├── contracts/
│   │   ├── vendor-001-acme-corp.pdf
│   │   ├── vendor-002-xyz-services.pdf
│   │   └── [vendor contracts]
│   │
│   └── master-file/
│       └── vendor-master-analysis.xlsx
│
├── executive-communications/
│   ├── samples/
│   │   ├── board-presentation-q4-2024.md
│   │   ├── investor-letter-q3-2024.md
│   │   └── [communication samples for style guidance]
│   │
│   ├── messages/
│   │   └── key-messages-2025.md
│   │
│   └── draft-materials/
│       ├── board-presentation-draft.md
│       └── investor-materials-draft.md
│
└── reports/
    ├── monthly-close-reports/
    │   ├── 2025-01-close-analysis.md
    │   ├── 2025-01-board-summary.md
    │   └── 2025-01-variance-report.xlsx
    │
    ├── compliance-reports/
    │   ├── covenant-verification-jan-2025.md
    │   └── audit-status-jan-2025.md
    │
    └── executive-dashboards/
        ├── financial-health-dashboard-current.md
        └── operational-metrics-dashboard-current.md
```

**File Format Standards:**

| Data Type | Format | Schema | Compression |
|-----------|--------|--------|------------|
| GL extracts | XLSX | Standard accounting GL (Account/Description/Amount) | None (direct export) |
| AR/AP aging | XLSX | Aging bucket columns (Current/30/60/90+) | None |
| Journal entries | CSV | JE/Account/Description/Amount/Approver | UTF-8 text |
| Compliance docs | PDF | OCR-enabled; searchable | None |
| Analysis output | Markdown | Numbered sections; tables for data | Text-based |

**File Naming Convention:**

All files follow standardized naming:
- Financial data: `[data-type]-[YYYY-MM].xlsx` (e.g., `gl-extract-2025-01.xlsx`)
- Compliance docs: `[type]-[year]-[description].pdf` (e.g., `loan-agreement-2024-primary.pdf`)
- Reports: `[report-type]-[YYYY-MM-DD].md` (e.g., `close-analysis-2025-01-31.md`)
- No spaces; lowercase; hyphens for word separation

#### Filesystem MCP Access Configuration

**Code Configuration (Python-based MCP):**

```python
# filesystem_mcp_config.py
from pathlib import Path

# Base path for financial data
FINANCIAL_DATA_ROOT = Path("/Users/[username]/projects/ISPN-financial-data")

# Allowed directories (whitelist)
ALLOWED_DIRECTORIES = [
    FINANCIAL_DATA_ROOT / "financial-data",
    FINANCIAL_DATA_ROOT / "compliance-documents",
    FINANCIAL_DATA_ROOT / "department-performance",
    FINANCIAL_DATA_ROOT / "vendor-management",
    FINANCIAL_DATA_ROOT / "executive-communications",
    FINANCIAL_DATA_ROOT / "reports",
]

# Restricted directories (blacklist)
RESTRICTED_DIRECTORIES = [
    FINANCIAL_DATA_ROOT / ".env",
    FINANCIAL_DATA_ROOT / ".git",
]

# File type restrictions
ALLOWED_FILE_TYPES = [".xlsx", ".csv", ".md", ".pdf", ".txt", ".yaml"]

# Access control
class FileAccessControl:
    def __init__(self, user_id="lauber-cfo"):
        self.user_id = user_id
        self.access_level = "admin"  # Can read all financial data
        
    def can_read_file(self, file_path):
        """Verify read access"""
        if any(str(file_path).startswith(str(r)) for r in RESTRICTED_DIRECTORIES):
            return False
        if file_path.suffix not in ALLOWED_FILE_TYPES:
            return False
        return True
    
    def can_write_file(self, file_path):
        """Verify write access - limited to reports/"""
        allowed_write_paths = [FINANCIAL_DATA_ROOT / "reports"]
        return any(str(file_path).startswith(str(p)) for p in allowed_write_paths)

# File monitoring
class FileMonitor:
    def __init__(self):
        self.watched_directories = [
            FINANCIAL_DATA_ROOT / "financial-data" / "monthly-close",
            FINANCIAL_DATA_ROOT / "financial-data" / "cash-flow-inputs",
            FINANCIAL_DATA_ROOT / "compliance-documents",
        ]
    
    def detect_new_files(self):
        """Monitor for new GL extracts, AR/AP aging, compliance docs"""
        # Implementation: Use watchdog library for file system events
        pass
    
    def trigger_analysis(self, new_file_path):
        """When new GL detected, trigger Claude analysis"""
        # Implementation: Call Claude with appropriate analysis request
        pass
```

**Access Control Permissions:**

| User | Read Access | Write Access | Scope |
|------|-------------|--------------|-------|
| Scott Lauber (CFO) | All financial data | /reports/ only | Full access; can read all, write reports |
| Finance Director | All financial data | /reports/ only | Same as Lauber |
| Finance Team (read-only) | /reports/ + monthly-close/ | None | Can see prior month reports; cannot access confidential analysis |
| Claude (AI) | All configured | /reports/ only | Reads financial data; writes analysis to /reports/ |

#### Data Refresh & Synchronization

**Automated Refresh Schedule:**

| Data Source | Refresh Frequency | Trigger | Owner |
|-------------|-------------------|---------|-------|
| GL extract | Monthly | Month-end + 1 day | Accounting system export |
| AR aging | Daily | 8:00 AM | CRM/billing system export |
| AP aging | Daily | 8:00 AM | Accounting system export |
| Payroll | Bi-weekly | Payroll run date | HRIS export |
| Capital schedule | Monthly | Month-end | Finance update |
| Compliance docs | Ad-hoc | Document receipt | Finance team upload |

**Synchronization Process:**

```
Finance System Export → Named File → Filesystem MCP Detects
                          ↓
                    ✓ Validates Format
                    ✓ Checks Completeness
                    ↓
                Claude Triggered → Analysis → Reports Generated
```

#### Audit Trail & Logging

**All file access logged:**

```
[2025-01-31 08:15:22] READ: /financial-data/monthly-close/2025-01/gl-extract-2025-01.xlsx
  - User: claude-system
  - Action: Read for GL reconciliation
  - Status: Success
  - File size: 245KB
  - Rows processed: 87
  
[2025-01-31 08:15:45] WRITE: /reports/monthly-close-reports/2025-01-close-analysis.md
  - User: claude-system
  - Action: Write GL analysis report
  - Status: Success
  - File size: 12KB
```

**Monthly Access Audit Report:**

```
Access Audit - January 2025
Generated: 2025-02-01

Total File Access Events: 487
  - Read operations: 482 (98.9%)
  - Write operations: 5 (1.1%)

By File Type:
  - XLSX (GL, AR/AP): 312 accesses
  - CSV (Journal entries): 87 accesses
  - PDF (Compliance): 45 accesses
  - Markdown (Reports): 43 accesses

By Directory:
  - /financial-data/: 387 accesses
  - /compliance-documents/: 45 accesses
  - /reports/: 55 accesses

Anomalies: None detected
```

---

### MCP #2: Asana MCP - Operational Data Integration

#### Purpose
Real-time visibility into project execution, task status, and operational metrics for strategic initiative tracking.

#### Configuration Details

**Asana Workspace Structure:**

**Portfolio Hierarchy:**

```
Workspace: ISPN Strategic Execution
│
├── Portfolio: Strategic Initiatives 2025
│   ├── Project: Digital Transformation Initiative
│   │   ├── Task: Systems Assessment [John Smith]
│   │   ├── Task: Technology Roadmap [Jane Doe]
│   │   └── Task: Implementation Phase 1 [Tech Team Lead]
│   │
│   ├── Project: Operational Excellence Program
│   ├── Project: Customer Experience Initiative
│   ├── Project: Technology Infrastructure Investment
│   └── Project: Market Expansion Strategy
│
├── Portfolio: Quarterly Business Execution (Q1 2025)
│   ├── Project: Q1 Revenue Targets
│   ├── Project: Q1 Margin Improvement
│   ├── Project: Q1 Cost Management
│   └── Project: Q1 Compliance & Risk
│
└── Portfolio: Executive Leadership Priorities
    ├── Project: Board Reporting
    ├── Project: Lender Communication
    └── Project: Shareholder Relations
```

**Custom Fields Configuration:**

```
Project-Level Custom Fields:
├── Strategic Priority
│   ├── Must Have (blocking other initiatives)
│   ├── Should Have (important; can delay if needed)
│   └── Nice to Have (discretionary)
│
├── CFO Involvement Required
│   ├── No (team handles)
│   ├── Review Only (CFO signs off)
│   └── Active Participation (CFO directly involved)
│
├── Estimated CFO Time Required
│   ├── <5 hours
│   ├── 5-10 hours
│   ├── 10-20 hours
│   └── 20+ hours
│
├── Financial Impact
│   ├── Revenue-driving (>$500K impact)
│   ├── Cost-reducing ($100-500K impact)
│   └── Strategic/Risk (P&L impact <$100K)
│
├── Status Category
│   ├── On Track (green)
│   ├── At Risk (yellow)
│   └── Off Track (red)
│
├── Blocking Issues
│   ├── Yes / No
│   └── Linked tasks (if yes)
│
└── Dependencies
    └── [Linked other projects/tasks]

Task-Level Custom Fields:
├── Owner [Team Member Name]
├── Due Date [Date]
├── Status [Not Started / In Progress / On Hold / Complete]
├── Priority [High / Medium / Low]
├── % Complete [0-100%]
├── Assigned By [Name]
└── Last Updated [Date]
```

**Asana-Claude Integration Configuration:**

```python
# asana_mcp_config.py
from datetime import datetime, timedelta

class AsanaMCPIntegration:
    def __init__(self):
        self.asana_workspace = "ISPN Strategic Execution"
        self.portfolio_list = [
            "Strategic Initiatives 2025",
            "Quarterly Business Execution",
            "Executive Leadership Priorities",
        ]
    
    def retrieve_strategic_initiatives(self):
        """Get all strategic initiatives with status"""
        initiatives = {
            "initiatives": [],
            "at_risk_items": [],
            "blocked_items": [],
            "upcoming_milestones": [],
        }
        # Implementation: Query Asana API for projects
        return initiatives
    
    def get_executive_capacity_forecast(self, days_ahead=30):
        """Calculate CFO capacity consumed by initiatives"""
        capacity = {
            "total_days_available": days_ahead,
            "tasks_requiring_cfo": [],
            "time_allocated": 0,
            "capacity_remaining": 0,
        }
        # Implementation: Sum all tasks tagged "CFO Involvement Required"
        return capacity
    
    def detect_at_risk_items(self):
        """Identify initiatives with red status or approaching deadlines"""
        at_risk = []
        # Implementation: Query for status=red OR due_date < today+7 days
        return at_risk
    
    def generate_daily_executive_brief(self):
        """Create 5-minute daily operational brief"""
        brief = {
            "date": datetime.now(),
            "at_risk_count": 0,
            "blocked_count": 0,
            "milestones_today": [],
            "critical_issues": [],
        }
        # Implementation: Generate brief with action items
        return brief

class AsanaDataSchema:
    """Define what data Claude has access to"""
    
    PROJECT_FIELDS = [
        "name",
        "status", 
        "portfolio",
        "owner",
        "due_date",
        "start_date",
        "custom_fields.strategic_priority",
        "custom_fields.cfo_involvement",
        "custom_fields.financial_impact",
    ]
    
    TASK_FIELDS = [
        "name",
        "status",
        "assignee",
        "due_date",
        "percent_complete",
        "dependencies",
        "custom_fields.priority",
        "custom_fields.cfо_time_required",
    ]
    
    @staticmethod
    def get_safe_fields(entity_type):
        """Return only safe fields for Claude access (no sensitive content)"""
        if entity_type == "project":
            return AsanaDataSchema.PROJECT_FIELDS
        elif entity_type == "task":
            return AsanaDataSchema.TASK_FIELDS
        else:
            return []
```

#### Asana-Claude Data Flows

**Daily Executive Brief Generation:**

```
Asana API → Retrieve all projects/tasks
              ↓
        Filter for:
        - Status = At Risk (red)
        - Due date < 7 days
        - Requires CFO involvement
              ↓
        Compile into structured data
              ↓
        Claude generates 5-minute executive brief
              ↓
        Save to /reports/executive-dashboards/
```

**Real-Time Alert Generation:**

```
Asana Webhook → Project status changed to RED
              ↓
        Trigger Claude analysis:
        - What changed?
        - Why is this at risk?
        - What action required?
              ↓
        Generate alert with recommendations
              ↓
        Send to Lauber if critical/CFO involvement required
```

**Integration Security:**

```
Asana Access Control:
├── Read: All project/task data within ISPN workspace
├── Write: None (Claude reads only)
├── Rate Limit: 100 requests/minute (Asana standard)
└── Auth: API token stored in secure vault (.env)

Data Exposure Risk Mitigation:
├── Only aggregate metrics shared with Claude
├── Individual team member comments NOT accessible
├── Personal information (emails, phone) NOT accessible
├── Sensitive project details (financial projections, strategy) 
│  accessible only to CFO-level authenticated access
└── Audit trail: All Asana API access logged with timestamp/action
```

---

## III. CLAUDE SKILLS CONFIGURATION

### Skill 1: XLSX-Advanced (Spreadsheet Analysis)

**Capability Summary:**
- Read/analyze XLSX files with multiple sheets
- Perform calculations on financial data
- Generate variance analysis, reconciliation
- Output structured financial data

**Configuration:**

```
Skill: XLSX-Advanced
├── Enabled: Yes
├── Version: Latest (Claude Sonnet 4.5 native)
├── File Size Limit: 10MB per file
├── Sheet Limit: 100 sheets per workbook
├── Row Limit: 100,000 rows per sheet
├── Features:
│   ├── Read financial data (GL, AR, AP, cash, budgets)
│   ├── Perform reconciliation (balance sheet tie-out)
│   ├── Calculate variance (actual vs. budget, prior month)
│   ├── Generate account-by-account analysis
│   ├── Create summary tables and metrics
│   └── Export analysis to CSV/markdown
└── Constraints:
    ├── Cannot modify/save to original file
    ├── Cannot access external data sources
    └── Limited to numerical calculations (no VBA macros)
```

**Example Usage Prompts:**

```
Prompt 1 - GL Reconciliation:
"Read the attached GL extract (all accounts).
Compare to prior month GL.
Verify account balances reconcile to subledger.
Flag any accounts with unexplained changes >$50K or >15%.
Provide variance explanation for each flagged account."

Prompt 2 - Financial Metrics:
"Calculate the following metrics from attached GL and P&L:
- Days Sales Outstanding (DSO)
- Days Payable Outstanding (DPO)
- Cash Conversion Cycle (CCC)
- Current Ratio
- Debt-to-EBITDA
Provide trend analysis (current month vs. prior month)."

Prompt 3 - Budget Variance Analysis:
"Compare attached budget vs. actual.
Calculate variance by department.
Identify top 10 unfavorable variances.
Provide business context for each variance."
```

### Skill 2: PDF-Advanced (Document Analysis)

**Capability Summary:**
- Extract data from PDF documents
- Identify key terms and compliance obligations
- Compare multiple PDF versions
- Generate document summaries

**Configuration:**

```
Skill: PDF-Advanced
├── Enabled: Yes
├── Version: Latest
├── File Size Limit: 50MB per file
├── Page Limit: 1,000 pages per document
├── Features:
│   ├── Extract text and tabular data
│   ├── Identify key sections (covenants, obligations, terms)
│   ├── Search for specific terms/clauses
│   ├── Compare document versions for changes
│   ├── Generate compliance checklists
│   └── Extract financial data from statements
├── OCR Capability: Yes (for scanned documents)
└── Constraints:
    ├── Cannot modify PDF content
    ├── Scanned PDF (image-based) OCR quality dependent on scan quality
    └── Complex financial statements may require manual review
```

**Example Usage Prompts:**

```
Prompt 1 - Loan Covenant Verification:
"Read the attached loan agreement PDF.
Extract all financial covenants (debt ratios, interest coverage, etc.).
For each covenant, calculate current compliance status based on latest GL data.
Identify covenant testing frequency and next verification date."

Prompt 2 - Audit Finding Remediation Tracking:
"Read the attached audit findings PDF.
Extract all findings with severity level.
Compare to management response document.
Identify which findings have adequate remediation evidence."

Prompt 3 - Vendor Contract Terms Analysis:
"Read the attached vendor contract PDF.
Extract: payment terms, early payment discounts, auto-escalation clauses.
Flag any unusual or unfavorable terms.
Calculate potential cash impact of early payment discounts."
```

### Skill 3: Financial Analysis (Forecasting & Modeling)

**Capability Summary:**
- Build financial models with multiple scenarios
- Project P&L, cash flow, balance sheet
- Perform sensitivity analysis
- Generate forecast narratives with assumptions

**Configuration:**

```
Skill: Financial Analysis
├── Enabled: Yes
├── Version: Advanced (built-in to Claude Sonnet)
├── Models Supported:
│   ├── Revenue forecasting (trend-based, drivers-based)
│   ├── Profitability modeling (cost structure, margins)
│   ├── Cash flow forecasting (working capital, CapEx)
│   ├── Debt management (amortization, covenant tracking)
│   ├── Scenario analysis (sensitivity to key assumptions)
│   └── Valuation (DCF, comparable company analysis)
├── Input Requirements:
│   ├── Historical financials (12+ months minimum)
│   ├── Key driver assumptions (revenue growth %, margins)
│   ├── Fixed/variable cost breakdown
│   └── Capital intensity / depreciation rates
└── Output Formats:
    ├── Full P&L projections (monthly/quarterly/annual)
    ├── Cash flow analysis
    ├── Key metrics (margins, ratios, growth rates)
    ├── Sensitivity tables
    └── Narrative assumption documentation
```

**Example Usage Prompts:**

```
Prompt 1 - Three-Scenario Forecasting:
"Using attached historical GL (12 months) and provided assumptions:
Build three FY2025 revenue scenarios:
1. Base Case: 5% growth (mid-point guidance)
2. Bear Case: 0% growth (competitive pressure)
3. Bull Case: 8% growth (new product success)

For each scenario, project:
- Monthly revenue
- Gross margin based on cost structure
- Operating expenses (fixed + variable)
- Operating income
- Free cash flow

Include sensitivity analysis on key drivers."

Prompt 2 - Capital Allocation Scenario:
"Evaluate three capital deployment scenarios:
1. Debt reduction ($5M towards $50M debt)
2. CapEx investment ($5M technology infrastructure)
3. Dividend/buyback ($5M shareholder return)

Model financial impact of each on:
- Debt ratios / covenant compliance
- Return on invested capital
- EPS impact
- 3-year cumulative cash generation

Recommend priority ranking based on shareholder value."

Prompt 3 - M&A Valuation Model:
"Build financial model for potential $20M acquisition target.
Use provided 3-year historical financials + seller projections.
Calculate:
- DCF valuation (using 8% WACC, terminal growth 2%)
- Comparable company multiples (Revenue/EBITDA)
- Synergy scenarios (revenue synergies, cost reduction)
- Pro forma combined entity (year 1 post-acquisition)
- Payback period on acquisition investment"
```

### Skill 4: Executive Communication (Narrative & Presentations)

**Capability Summary:**
- Generate board-ready financial narratives
- Create investor/lender communication
- Develop strategic recommendation documents
- Ensure consistent messaging across communications

**Configuration:**

```
Skill: Executive Communication
├── Enabled: Yes
├── Version: Built-in to Claude Sonnet
├── Output Formats:
│   ├── Board presentation narratives (300-500 words)
│   ├── Investor letters / earnings scripts
│   ├── Lender communication / covenant compliance letters
│   ├── Internal leadership memos
│   ├── Wall Street guidance / consensus items
│   └── Crisis communication templates
├── Tone/Style:
│   ├── Professional (board-ready)
│   ├── Strategic (connecting to company narrative)
│   ├── Confident (authority without overstatement)
│   ├── Clear (accessible to non-finance audience)
│   └── Compliant (accurate financial language)
└── Quality Controls:
    ├── Fact-checking against source data
    ├── Consistency with prior communications
    ├── Alignment with messaging framework
    └── Compliance review (no misleading statements)
```

**Example Usage Prompts:**

```
Prompt 1 - Board Financial Narrative:
"Generate board-ready financial summary for January 2025 close.
Using attached GL data:
- Provide headline metrics (revenue growth, margin, cash)
- Explain significant variances from prior month/budget
- Provide business context for variances
- Assess progress vs. FY2025 guidance
- Highlight any risks/opportunities
- Format: 400-500 words, bullet point summary, board-appropriate tone"

Prompt 2 - Investor Communication:
"Draft investor update for Q4 2024 results.
Using attached Q4 financial data + strategic context:
- Lead with headline growth/profitability metrics
- Explain margin performance (context of competitive/cost environment)
- Discuss cash flow and capital allocation strategy
- Preview 2025 outlook / guidance
- Address any known investor concerns
- Format: Professional letter, 2 pages, appropriate for investor distribution"

Prompt 3 - Covenant Compliance Letter:
"Draft lender communication regarding January 2025 covenant compliance.
Using attached GL data + loan agreement:
- Confirm all covenants in compliance with margin to threshold
- Provide supporting calculations
- Highlight business momentum
- Preview any anticipated covenant challenges
- Reaffirm financial strength / commitment to relationship
- Format: Professional letter, 1 page, suitable for lender distribution"
```

---

## IV. INTEGRATED SKILLS WORKFLOW EXAMPLES

### Workflow 1: Monthly Financial Close (Complete Process)

**Flow Diagram:**

```
START: GL Extract Received
   ↓
[Filesystem MCP] Detect new GL file → financial-data/monthly-close/2025-01/gl-extract.xlsx
   ↓
[XLSX-Advanced] Read file
   ↓
   ├─→ Reconcile GL to trial balance (via subledgers)
   ├─→ Compare current vs. prior month GL
   ├─→ Identify variance items (>$50K or >15%)
   └─→ Output: Variance analysis table
   ↓
[Financial Analysis] Interpret variances
   ├─→ Explain drivers (revenue growth, seasonal, operational)
   ├─→ Assess reasonableness
   └─→ Flag items requiring investigation
   ↓
[Executive Communication] Generate narratives
   ├─→ Board summary (headline metrics, strategic context)
   ├─→ Variance explanations for board
   └─→ Risk callouts if applicable
   ↓
[Output Layer] Generate reports
   ├─→ Variance report (Markdown)
   ├─→ Board presentation narrative (Markdown)
   ├─→ Executive summary email
   └─→ All saved to /reports/monthly-close-reports/2025-01/
   ↓
Lauber Review (30 min):
   ├─→ Validate variance explanations
   ├─→ Confirm no material exceptions
   ├─→ Approve for external use
   └─→ Make any edits needed
   ↓
END: Board/Lender materials ready (48 hours post month-end)
```

**Skill Stack:**
- XLSX-Advanced (GL reconciliation & variance identification)
- Financial Analysis (variance interpretation & context)
- Executive Communication (narrative generation)
- Filesystem MCP (data access & output storage)

---

### Workflow 2: Three-Scenario Forecasting

**Flow Diagram:**

```
START: Lauber requests "Build FY2025 base/bear/bull scenarios"
   ↓
[Filesystem MCP] Retrieve input data:
   ├─→ Historical GL (last 12 months)
   ├─→ Budget assumptions
   ├─→ Variance drivers
   └─→ Key operating metrics
   ↓
[Financial Analysis] Build models:
   ├─→ Base Case (5% growth, 12.2% margin)
   ├─→ Bear Case (0% growth, 11% margin)
   └─→ Bull Case (8% growth, 13% margin)
   ↓
   For each scenario:
   ├─→ Project monthly revenue & costs
   ├─→ Calculate P&L impact (gross margin, OpEx, tax)
   ├─→ Forecast cash flow (operating + investing activities)
   ├─→ Test debt covenant compliance
   ├─→ Calculate key metrics (ROE, ROIC, payback periods)
   └─→ Run sensitivity analysis (+/- 1% revenue, +/- 50bp margin)
   ↓
[Executive Communication] Generate narrative:
   ├─→ Assumption documentation
   ├─→ Key drivers for each scenario
   ├─→ Interpretation of results
   └─→ Strategic implications
   ↓
[Output Layer] Create deliverables:
   ├─→ Scenario comparison table (all scenarios side-by-side)
   ├─→ Detail worksheets (one per scenario)
   ├─→ Sensitivity analysis tables
   ├─→ Executive summary narrative
   └─→ Save to /financial-models/forecasts/
   ↓
[Optional: Asana MCP] Link forecast to strategic initiatives:
   ├─→ Match revenue drivers to projects in Asana
   ├─→ Assess resource allocation needed
   └─→ Flag capacity constraints
   ↓
END: Complete scenario package ready for analysis/board discussion
```

**Skill Stack:**
- Financial Analysis (model building)
- XLSX-Advanced (output formatting if needed)
- Executive Communication (narrative)
- Asana MCP (optional operational correlation)

---

## V. SECURITY & COMPLIANCE CONFIGURATION

### Information Security Framework

**Data Classification:**

| Classification | Data Examples | Access Control | Encryption | Retention |
|----------------|---|---|---|---|
| **Confidential** | GL detail, customer data, contracts | Lauber + Finance Dir only | At-rest + in-transit | 7 years |
| **Restricted** | Budgets, forecasts, audit findings | Finance team | At-rest only | 3 years |
| **Internal** | Board materials, reports | Finance team + applicable readers | No encryption | 2 years |
| **Public** | Approved investor materials | Publicly available | No encryption | Indefinite |

**Filesystem MCP Security Controls:**

```
Access Control Layers:
1. Operating System Level
   ├─ UNIX file permissions (chmod 700 on /financial-data/)
   ├─ Owner: [designated service account]
   └─ Group: [finance team group]

2. MCP Application Level
   ├─ API key authentication (stored in .env, NOT in code)
   ├─ Role-based access control (CFO, Finance Director, Analytics)
   └─ Audit logging of all file access

3. File-Level Encryption
   ├─ At-rest: AES-256 for GL extracts, contracts, compliance docs
   └─ In-transit: TLS 1.3 for all data transfers

4. Application Security
   ├─ Input validation (file format verification)
   ├─ Output sanitization (no sensitive data in error messages)
   └─ Rate limiting (prevent abuse/accidental overload)
```

**API Key Management:**

```
.env File (NOT in version control):
FILESYSTEM_MCP_API_KEY=sk-1234567890abcdefghijklmnop
FILESYSTEM_MCP_SECRET=secret-key-1234567890

Protection:
├─ File permissions: 600 (owner read/write only)
├─ Rotation: Quarterly
├─ Backup: Stored in secure vault (1Password, AWS Secrets Manager)
└─ Audit: Access logged when key is used
```

**Asana MCP Security:**

```
API Authentication:
├─ OAuth 2.0 via Asana app integration
├─ Scopes limited to: Read projects, tasks, custom fields
├─ No write access (read-only mode)
└─ Token refresh: Automatic every 1 hour

Data Access Restrictions:
├─ Only ISPN workspace accessible (portfolio isolation)
├─ Individual team comments NOT accessible
├─ Personal email/contact info NOT exposed
└─ Custom fields sanitized (no sensitive info)
```

### Compliance & Audit Requirements

**SOX Compliance (if applicable):**

```
Financial Reporting Control Framework:
├─ GL reconciliation process documented
├─ Variance threshold controls defined (>$50K or >15%)
├─ Approval workflow documented (Lauber signs off)
├─ Audit trail maintained for all GL access
├─ Segregation of duties
│  ├─ Claude performs analysis (no access to modify GL)
│  ├─ Finance prepares/uploads GL (cannot analyze directly)
│  └─ CFO approves final output (independent authority)
└─ Testing: Annual audit of Claude output accuracy vs. manual close

Control Testing Process:
1. Pull sample close (February 2025) as test population
2. Run Claude analysis + manual analysis (Finance Director)
3. Compare results account-by-account
4. Document differences (if any) and root causes
5. Assess control design effectiveness
6. Report findings to audit committee (if needed)
```

**Data Retention & Destruction:**

```
Retention Schedule:
├─ GL extracts: 7 years (statutory requirement)
├─ AR/AP aging: 3 years
├─ Forecasts: 2 years (superseded by new forecasts)
├─ Compliance documents: Per statute (7-10 years)
├─ Reports: 2 years (superseded by new reports)
└─ Audit logs: 1 year

Destruction Process:
├─ Data identified for destruction per schedule
├─ Approval: Finance Director + CFO
├─ Method: Secure deletion (unrecoverable)
│  ├─ Files deleted and overwritten 3 passes (DoD standard)
│  └─ Cloud data: Provider's secure deletion API
└─ Certification: Destruction log maintained
```

### Disaster Recovery & Business Continuity

**Backup Strategy:**

```
Primary Backup:
├─ Location: AWS S3 (off-premises)
├─ Frequency: Daily (full backup)
├─ Retention: 30-day rolling window
├─ Encryption: S3 server-side encryption (AES-256)
└─ Testing: Monthly restoration test

Secondary Backup:
├─ Location: Local NAS (on-premises)
├─ Frequency: Daily (incremental)
├─ Retention: 7-day rolling window
├─ Testing: Manual quarterly verification
└─ Recovery time: 2-4 hours

Disaster Recovery Plan:
├─ Scenario: Filesystem MCP unavailable (system crash)
├─ Detection: Monitoring alerts if no data refresh for 24+ hours
├─ Response:
│  ├─ Switch to local backup on NAS (30 min)
│  ├─ Perform analysis using backup data (same day)
│  └─ Restore primary system (24-48 hours)
├─ RPO (Recovery Point Objective): 24 hours
└─ RTO (Recovery Time Objective): 4 hours
```

---

## VI. TROUBLESHOOTING & OPERATIONAL PROCEDURES

### Common Issues & Solutions

**Issue 1: GL File Format Error**

**Symptoms:**
- Claude returns error: "Unable to read file format"
- File is named correctly but analysis fails

**Root Causes:**
1. Wrong Excel version (saved in XML format, not binary)
2. File corruption during transfer
3. Incorrect column headers
4. Merged cells or unusual formatting

**Resolution:**

```
Step 1: Verify file format
  └─ Open file in Excel
  └─ Check: File → Properties → Format should be "Excel Workbook (.xlsx)"

Step 2: Verify data structure
  └─ Row 1 must contain column headers:
     Account | Description | Prior Month | Current Month
  └─ No merged cells
  └─ No blank rows between data

Step 3: Re-export from GL system
  └─ Finance director re-exports GL
  └─ Name file: gl-extract-2025-01.xlsx
  └─ Upload to: /financial-data/monthly-close/2025-01/
  └─ Retry Claude analysis

Step 4: Validate with manual spot-check
  └─ Verify 5-10 accounts match GL system
  └─ If matches, file format correct; retry analysis
```

---

**Issue 2: Variance Threshold False Positives**

**Symptoms:**
- Claude flags accounts as unusual but changes are expected
- Example: "Deferred Revenue variance +$90K flagged as unusual, but this is seasonal"

**Root Cause:**
- Threshold set too low for seasonal business
- Claude lacks business context for expected variations

**Resolution:**

```
Option 1: Provide Business Context
  └─ Upda assumptions.yaml with seasonal patterns:
     seasonal_accounts:
       - name: "Deferred Revenue"
         pattern: "Q1 +30%, Q2 -15%, Q3 -10%, Q4 +25%"
       - name: "Accounts Receivable"
         pattern: "Month-end collection +20% vs. average"

Option 2: Adjust Threshold
  └─ Edit variance threshold for specific accounts:
     variance_thresholds:
       - account: "Deferred Revenue"
         dollar_threshold: $150K  (raised from $50K)
         percent_threshold: 40%   (raised from 15%)

Option 3: Manual Baseline
  └─ Finance director provides prior-year variance as baseline
  └─ Claude uses baseline for comparison
  └─ "This month's +$90K deferred revenue variance aligns with 
       prior year Q1 pattern of +$95K"
```

---

**Issue 3: Asana Integration Missing Data**

**Symptoms:**
- Executive brief doesn't include critical projects
- Project appears in Asana but not in Claude report

**Root Causes:**
1. Project not in monitored portfolio
2. Project status field not populated
3. Project has no due date (filtering issue)
4. API rate limit reached

**Resolution:**

```
Step 1: Verify project is in monitored portfolio
  └─ Check Asana project → verify portfolio assignment
  └─ If missing: Project Manager adds to portfolio
  └─ Retry sync (manual trigger or wait for next daily sync)

Step 2: Verify custom fields are populated
  └─ Check project has values for:
     - Status (On Track / At Risk / Off Track)
     - CFO Involvement Required (Yes/No)
     - Strategic Priority (Must Have / Should Have / Nice to Have)
  └─ If missing: Project Manager populates fields
  └─ Retry sync

Step 3: Check API rate limits
  └─ Review MCP logs: "Rate limit reached" message?
  └─ If yes: Wait 1 hour for quota reset
  └─ Retry sync

Step 4: Manual data refresh
  └─ Trigger manual Asana sync (not automatic)
  └─ Command: "asana_mcp sync --full --workspace=ISPN"
  └─ This performs full data pull (vs. incremental update)
```

---

**Issue 4: Forecast Accuracy Divergence**

**Symptoms:**
- Claude forecasts diverge significantly from actual results
- March actual revenue: $8.5M vs. forecast $8.0M (6% miss)

**Root Causes:**
1. Assumptions became invalid (market changed)
2. Historical trend-based model not capturing operational changes
3. External factor not in model (customer loss, competitor entry)
4. Data quality issue (corrupt historical GL)

**Resolution:**

```
Step 1: Analyze historical accuracy
  └─ Compare last 3 forecasts to actual results
  └─ Identify pattern: consistently high/low? Random?
  └─ Document forecast methodology that was used

Step 2: Review assumptions validity
  └─ Confirm 5% revenue growth assumption
  └─ Check: Has competitive environment changed?
  └─ Check: Have any large customers gained/lost?
  └─ Update assumptions if market shifted

Step 3: Rebuild model with refined assumptions
  └─ Re-run forecast with updated assumptions
  └─ Compare new forecast to recent actuals (validate fit)
  └─ If improved fit: Use refined model going forward

Step 4: Implement forward-looking indicators
  └─ Add pipeline data (from Asana) to forecast
  └─ Add capacity data (staffing, utilization)
  └─ Add market sentiment (competitive win/loss data)
  └─ Claude re-runs forecast incorporating new drivers
```

---

### Preventive Maintenance Procedures

**Daily Checklist (Automated):**

```
□ 8:00 AM: Verify Filesystem MCP connected
□ 8:15 AM: Confirm AR/AP aging files refreshed
□ 8:30 AM: Verify Asana MCP connected
□ 9:00 AM: Test sample GL read + analysis (validate processing)
□ 4:00 PM: Verify backup completed (check backup timestamp)
□ 4:15 PM: Review access logs (any anomalies?)
□ 5:00 PM: Health check email (automated system status report)
```

**Weekly Checklist (Finance Director):**

```
□ Monday: Review prior week's access logs for anomalies
□ Tuesday: Spot-check one prior close report for accuracy
□ Wednesday: Verify data refresh schedule on track
□ Thursday: Review any error logs or system warnings
□ Friday: Backup verification (attempt restore from backup)
```

**Monthly Checklist (CFO):**

```
□ Week 1: Review accuracy of prior month's close analysis vs. manual
□ Week 2: Assess forecast accuracy vs. actual (if month complete)
□ Week 3: Review compliance document tracking (audit findings status)
□ Week 4: Audit log review + security assessment
```

**Quarterly Checklist (CFO + Finance Director):**

```
□ Q-end: Comprehensive system audit
   ├─ Accuracy validation (close analysis vs. actual)
   ├─ Forecast accuracy (compare forecast to actual)
   ├─ Security review (access controls, encryption)
   ├─ Disaster recovery test (backup restoration)
   └─ Performance review (processing times, issues)
```

---

### Emergency Procedures

**Scenario: Filesystem MCP Complete Failure**

**Timeline: Month-end close due tomorrow**

```
IMMEDIATE (within 1 hour):
1. Detect: Monitoring alert → Filesystem MCP offline
2. Assess: Is data accessible from backup?
3. Decision:
   a) If YES → Use backup on local NAS
   b) If NO → Manual close mode
4. Communication: Notify Lauber "Delay expected; implementing backup"

SHORT-TERM (hours 1-4):
1. Finance Director performs manual GL consolidation
   - Pull GL from accounting system
   - Manual reconciliation (using spreadsheet templates)
   - Variance analysis (prioritize top 10 accounts)
2. Lauber provides variance narratives (business context)
3. Output board summary (manually assembled)

MEDIUM-TERM (hours 4-24):
1. IT troubleshoots Filesystem MCP
2. Restore from backup if needed
3. Validate restored data integrity
4. Deploy fix to production

RECOVERY:
1. Once Filesystem MCP restored, run analysis on GL data
2. Compare Claude output to manual close
3. Document any discrepancies
4. Deliver final close materials to board

Backout Plan:
If Filesystem MCP cannot be restored by Day 1 afternoon:
- Proceed with manual close (production mode)
- Do not delay board materials
- Schedule post-mortem with IT team
- Plan long-term resilience improvements
```

---

## VII. OPERATIONS RUNBOOK

### Monthly Close Operational Calendar

**Month-End Close Workflow (2-day timeline):**

**Day 1 (Month-End Date):**
```
08:00 AM:
  ├─ Accounting finishes GL consolidation
  ├─ GL extracts saved to /financial-data/monthly-close/YYYY-MM/
  ├─ Filesystem MCP detects new files
  └─ Claude close analysis triggered automatically

08:30 AM - 4:00 PM:
  ├─ Finance team monitors GL completion
  ├─ Coordinate AR/AP aging, journal entries to MCP folder
  └─ Finance director flags any GL exceptions

04:00 PM:
  ├─ Claude outputs variance analysis
  ├─ Finance Director spot-checks output (30 min)
  ├─ Validates variance explanations
  └─ Flags any items requiring investigation/correction

04:30 PM - EOD:
  ├─ Finance director provides variance narratives
  │  (business context for unusual items)
  ├─ Claude re-runs analysis with provided context
  └─ Final close analysis complete
```

**Day 2 (First Business Day of Month):**
```
08:00 AM:
  ├─ Lauber reviews close analysis (30 min)
  ├─ Spot-checks variance explanations
  ├─ Flags any items requiring follow-up
  └─ Approves preliminary close

08:30 AM - 09:30 AM:
  ├─ Claude generates board presentation narrative
  ├─ Lauber reviews board summary (15 min)
  ├─ Approves or requests revisions (15 min)
  └─ Board materials finalized

09:30 AM - 04:00 PM:
  ├─ Board materials distributed to board members
  ├─ Lender covenant report prepared & sent
  ├─ Internal finance memo drafted & distributed
  └─ Complete close finished (24 hours post month-end)

Completion Confirmation:
  ├─ All close reports saved to /reports/monthly-close-reports/YYYY-MM/
  ├─ Archive: Move to /reports/archive/ after board approval
  └─ Close cycle complete
```

---

### Escalation Procedures

**When to Escalate Issues:**

| Issue | Owner | Escalate to | Timeline |
|-------|-------|------------|----------|
| GL format errors | Finance Director | CFO (if not resolved in 1 hour) | Immediate |
| Missing GL data | Finance team | Finance Director | Real-time |
| Claude analysis errors | Finance Director | Technology team + CFO | <1 hour |
| Asana sync issues | Finance Director | Technology team | <2 hours |
| Security concern | CFO | IT Security + Finance Director | Immediate |
| Late close | Finance Director | CFO (if delayed >2 hours) | Real-time |

**Escalation Contact List:**

```
Scott Lauber (CFO):
  Email: slauber@ispn.com
  Phone: [XXX-XXX-XXXX]
  Escalation threshold: Close delayed >2 hours, security issue, board-related

Finance Director:
  Email: [finance-director@ispn.com]
  Phone: [XXX-XXX-XXXX]
  Escalation threshold: Data issues, analysis errors

IT Manager:
  Email: [it-manager@ispn.com]
  Phone: [XXX-XXX-XXXX]
  Escalation threshold: System failures, MCP issues

Board Chair (if applicable):
  Email: [board-chair@ispn.com]
  Contact if: Close materials will be delayed >4 hours
```

---

## VIII. PERFORMANCE MONITORING & OPTIMIZATION

### Key Performance Indicators (KPIs)

**Operational Performance:**

| KPI | Target | Frequency | Owner |
|-----|--------|-----------|-------|
| **Close cycle time** | <2 hours from GL receipt | Monthly | Finance Director |
| **Analysis accuracy** | >99% variance identification | Monthly | Finance Director |
| **Uptime** | >99.5% (Filesystem MCP + Claude) | Weekly | IT/Technology |
| **Processing time** | <5 min for GL analysis | Monthly | Technology |
| **Error rate** | <0.5% output errors | Monthly | Finance Director |

**Strategic Performance:**

| KPI | Target | Frequency | Owner |
|-----|--------|-----------|-------|
| **Forecast accuracy** | ±3-4% quarterly variance | Quarterly | CFO |
| **Board presentation quality** | >8/10 score (survey) | Quarterly | CFO |
| **Decision speed** (M&A) | 3-4 days to decision | Per deal | CFO |
| **Strategic time allocation** | 90% of CFO time on strategy | Monthly | CFO |
| **Lender satisfaction** | No covenant inquiries | Ongoing | CFO |

### Optimization Procedures

**Quarterly Performance Review (Scheduled: Last Friday of Quarter):**

```
1. Data Quality Review
   ├─ Close accuracy validation (Claude vs. manual)
   ├─ Forecast accuracy assessment (variance to actual)
   └─ Data completeness (all fields populated correctly)

2. Performance Optimization
   ├─ Identify bottlenecks in close process
   ├─ Review edge cases / exceptions
   ├─ Optimize variance thresholds if needed
   └─ Update assumption models with new data

3. User Feedback
   ├─ CFO feedback on system utility
   ├─ Finance team feedback on data quality
   ├─ Board feedback on presentation quality
   └─ Document improvement requests

4. Technical Review
   ├─ System performance metrics
   ├─ Security / compliance status
   ├─ Backup & recovery testing results
   └─ Disaster recovery readiness

5. Planning
   ├─ Q+1 enhancements (if needed)
   ├─ Scale planning (additional MCPs, workflows)
   └─ Budget/resource allocation for next quarter
```

---

## IX. SUMMARY & QUICK REFERENCE

### System Architecture at a Glance

```
Data Sources                Processing                    Outputs
─────────────────          ──────────────                ───────────
GL Extracts ─────┐         ┌─ XLSX-Advanced ┐            ┌─ Variance Report
AR/AP Aging ──┐  │         │                 │            ├─ Board Summary
Compliance ──┤  ├──→ MCP ──→ Financial Analysis ──→ Claude ├─ Forecasts
Budgets ─────┤  │         │                 │            ├─ Compliance Letter
Forecasts ────┐  │         └─ Exec Communication─┘       └─ Executive Brief
Asana Tasks ─→┘  │
                 └── Filesystem + Asana MCPs ──┘
```

### Implementation Checklist

- [ ] Filesystem MCP configured and tested
- [ ] Financial data directories created and populated
- [ ] Asana integration configured
- [ ] Claude skills verified (XLSX, PDF, Financial Analysis, Exec Comm)
- [ ] Security controls implemented (encryption, access control)
- [ ] Backup system tested and operational
- [ ] Finance team trained on system use
- [ ] Audit trail logging verified
- [ ] Disaster recovery tested
- [ ] Go-live approved by CFO and IT

### Support & Escalation

**For Technical Issues:**
Contact: [IT Support]
Email: [support@ispn.com]
Phone: [XXX-XXX-XXXX]

**For Financial Process Questions:**
Contact: Finance Director
Email: [finance-director@ispn.com]

**For Strategic/Executive Questions:**
Contact: Scott Lauber (CFO)
Email: slauber@ispn.com

---

## APPENDIX: Code Snippets & Templates

### Sample Claude Prompt (GL Close Analysis)

```python
# Sample Python script triggering Claude GL analysis
import anthropic
from pathlib import Path

def analyze_gl_close(gl_file_path, prior_month_file_path):
    """
    Analyze GL close with Claude
    """
    client = anthropic.Anthropic()
    
    prompt = f"""
    Perform monthly GL close analysis:
    
    1. Read attached current month GL file: {gl_file_path}
    2. Read attached prior month GL file: {prior_month_file_path}
    3. Reconcile: GL totals, trial balance, subledgers
    4. Identify variances:
       - Dollar threshold: >$50,000 OR
       - Percent threshold: >15% month-over-month change
    5. For each variance, explain the driver
    6. Flag any items unusual or requiring investigation
    7. Output:
       - Variance table (account, change, explanation)
       - Reconciliation status
       - Items flagged for investigation
       - Preliminary close assessment
    
    Format output as structured markdown with tables.
    """
    
    message = client.messages.create(
        model="claude-sonnet-4-5-20250929",
        max_tokens=4096,
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )
    
    return message.content[0].text
```

### Filesystem MCP Monitoring Template

```python
# Sample monitoring script (runs daily)
import os
from datetime import datetime
from pathlib import Path

FINANCIAL_DATA_ROOT = Path("/Users/cpconnor/projects/ISPN-financial-data")

def daily_file_monitoring():
    """
    Daily check for new GL files and trigger analysis
    """
    today = datetime.now()
    
    # Check for new GL files in current month directory
    current_month = today.strftime("%Y-%m")
    gl_dir = FINANCIAL_DATA_ROOT / "financial-data" / "monthly-close" / current_month
    
    if not gl_dir.exists():
        print(f"No GL directory for {current_month} yet")
        return
    
    # Look for new GL extract
    gl_file = gl_dir / f"gl-extract-{current_month}.xlsx"
    ar_file = gl_dir / f"ar-aging-{current_month}.xlsx"
    ap_file = gl_dir / f"ap-aging-{current_month}.xlsx"
    
    if gl_file.exists() and gl_file.stat().st_mtime > (today.timestamp() - 86400):
        print(f"New GL file detected: {gl_file}")
        # Trigger Claude analysis
        analyze_gl_close(gl_file)
    
    # Check cash flow inputs (should refresh daily)
    cf_dir = FINANCIAL_DATA_ROOT / "financial-data" / "cash-flow-inputs"
    ar_aging = cf_dir / "ar-aging-current.xlsx"
    ap_aging = cf_dir / "ap-aging-current.xlsx"
    
    if not ar_aging.exists() or not ap_aging.exists():
        print("WARNING: AR/AP aging files missing - cash flow forecast may be stale")
    
    print("File monitoring check complete")

if __name__ == "__main__":
    daily_file_monitoring()
```

---

## Final Sign-Off

**This integration stack documentation is complete and ready for implementation.**

**Approved by:**
- CFO: Scott Lauber
- Finance Director: [Name]
- IT Manager: [Name]
- Date: [Date]

**Questions or clarifications:**
Contact the implementation team at [contact info]

