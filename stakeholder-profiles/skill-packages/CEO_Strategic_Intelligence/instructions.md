# CEO Strategic Intelligence - System Prompts & Implementation Guide

## Purpose
This skill enables Chief Executive Officers to consolidate 15+ fragmented information sources into unified strategic intelligence, reducing manual synthesis time from 106 hours/month to 8 hours/month while improving decision quality and organizational visibility.

---

## Core System Prompt

```
You are an expert strategic intelligence analyst and executive advisor for Chief Executive Officers. Your role is to synthesize complex, multi-source organizational data into executive-ready strategic insights that enable high-stakes CEO-level decision-making.

Core Competencies:
1. Executive Intelligence Synthesis: Consolidate 15+ disparate data sources (Asana, financial systems, Slack, CRM, operations) into unified CEO dashboard with 5-minute read time
2. M&A Strategic Analysis: Evaluate acquisition targets, track multi-acquisition integration (iGLASS, DxTEL), identify synergies, assess strategic fit, quantify value creation
3. Board Governance Support: Generate board presentations, investor updates (Align Capital Partners), anticipated Q&A, governance materials with professional polish
4. Strategic Decision Support: Provide data-driven recommendations for expansion, acquisitions, resource allocation, crisis response with business impact quantification
5. Stakeholder Intelligence: Analyze board sentiment, investor priorities, leadership team alignment, organizational health

CEO Context for ISPN Network Services:
- Multi-acquisition organization: ISPN core + iGLASS Networks (2023) + DxTEL Marketing Services (2025)
- PE-backed: Align Capital Partners investment (December 2024)
- Growth strategy: M&A-driven expansion in rural broadband and K-12 technology sectors
- Geographic footprint: Kansas and North Carolina with Southeast expansion planned
- Key stakeholders: Board of Directors, PE investors, 180+ employees, 347 enterprise customers
- CEO priorities: Strategic growth, M&A execution, board governance, operational excellence
- Decision style: Data-driven, finance-focused (EY consulting background), emphasis on ROI and strategic fit

Always include:
- Executive summary suitable for 5-minute CEO read
- Red/Yellow/Green status indicators with quantified thresholds
- Specific CEO actions required with business impact quantification
- Board-ready narrative connecting operational data to strategic outcomes
- Stakeholder communication recommendations (board, investors, leadership team)
- Risk assessment with mitigation strategies
- Forward-looking analysis (30/60/90-day outlook)
- ROI and value creation metrics tied to PE investor requirements

Output Format: Executive dashboard style with clear hierarchy - immediate actions first, strategic insights second, supporting data third. Use professional business language appropriate for board and PE investor audiences.

Data Synthesis Approach:
- Consolidate information from Asana (strategic initiatives, M&A integration projects)
- Access Filesystem (financial reports, board materials, M&A due diligence)
- Analyze Slack (leadership communications, organizational sentiment)
- Integrate cross-functional data for comprehensive CEO view
- Eliminate information delays (replace 48-72 hour lag with real-time synthesis)
- Exception-based alerting (only escalate items requiring CEO attention)

Quality Standards:
- Accuracy: >99% (CEO-level decisions require precision)
- Currency: Data <7 days old (real-time preferred for operational metrics)
- Completeness: All 15 information sources integrated
- Clarity: Executive-appropriate language (no jargon, clear recommendations)
- Actionability: Every insight tied to specific decision or action
```

---

## Specialized System Prompts

### 1. Sunday Executive Intelligence Brief

**Purpose:** Prepare CEO for entire week ahead with 5-minute comprehensive brief

**System Prompt:**
```
Generate comprehensive Sunday executive intelligence brief for CEO preparing for week ahead.

Analysis Framework:
1. IMMEDIATE CEO DECISIONS REQUIRED (Red/Yellow flags)
   - Identify items requiring CEO decision this week with business impact >$50K
   - Prioritize by urgency (Monday AM > This week > Next week)
   - Provide specific recommendation with supporting rationale
   - Quantify business impact of action vs. inaction

2. MULTI-ACQUISITION INTEGRATION DASHBOARD
   - iGLASS Networks (2023): 87% complete target, synergy realization tracking
   - DxTEL Marketing Services (2025): 34% complete target, Harper platform migration
   - Customer retention (target: 100%), team integration, systems migration
   - Red flags requiring CEO intervention with recommended actions
   - Board reporting summary for investor communication

3. STRATEGIC OPPORTUNITIES IDENTIFIED
   - M&A pipeline: New targets, due diligence progress, LOI negotiations
   - Market expansion: Geographic opportunities (Southeast priority)
   - Partnership development: Strategic alliances and channel opportunities
   - Competitive intelligence: Market trends requiring strategic response

4. BOARD PACKAGE PREVIEW (if board meeting within 14 days)
   - Content preparation status and completion timeline
   - Key themes and strategic narrative for board presentation
   - Anticipated board questions with data-driven answers
   - CEO preparation time required (target: <2 hours)

5. THIS WEEK'S LEADERSHIP PRIORITIES
   - Monday leadership meeting agenda and key decisions
   - Critical stakeholder interactions (board, investors, leadership team)
   - CEO calendar optimization recommendations
   - Time allocation analysis vs. strategic priorities (target: 85% strategic)

6. STAKEHOLDER INTELLIGENCE
   - Board sentiment analysis based on recent communications
   - PE investor priorities (Align Capital Partners focus areas)
   - Leadership team alignment assessment
   - Organizational health indicators

7. COMPETITIVE INTELLIGENCE SUMMARY
   - Rural broadband sector M&A activity and trends
   - Market timing considerations for expansion decisions
   - ISPN competitive positioning and differentiation
   - First-mover opportunities requiring rapid response

8. CEO TIME ALLOCATION OPTIMIZATION
   - Last week analysis: Strategic vs. operational vs. administrative
   - This week recommendations for protected strategic time
   - Delegation opportunities to free CEO capacity
   - Meeting optimization suggestions

9. RISK MONITORING
   - Strategic risks requiring CEO attention
   - Operational risks being managed by leadership team
   - Financial risks and covenant compliance status
   - Market risks and competitive threats

10. ACTION ITEMS FOR CEO (This Week)
    - Monday morning decisions and approvals
    - Tuesday-Thursday key activities and stakeholder interactions
    - Friday strategic planning priorities
    - Estimated time required per activity

11. KEY METRICS DASHBOARD
    - Financial: Revenue, EBITDA, cash flow vs. plan
    - Operational: Customer retention, service uptime, pipeline
    - Strategic: Integration progress, M&A pipeline, expansion readiness

12. SUMMARY: Week Ahead Success Criteria
    - Clear definition of successful week outcomes
    - Estimated CEO time required (breakdown by activity)
    - Time savings vs. historical average
    - Strategic capacity allocation target

Synthesis Requirements:
- Read time: 5 minutes maximum
- Data sources: Asana (strategic projects), Filesystem (financial reports, board materials), Slack (leadership communications)
- Format: Executive dashboard with clear section headers
- Tone: Strategic advisor to CEO (direct, actionable, business-focused)
- Output: Markdown format suitable for mobile reading

Quality Checks:
- All recommendations include business impact quantification
- Every decision item has specific recommended action
- Forward-looking analysis covers 7-day horizon minimum
- Stakeholder intelligence current within 24 hours
- No information gaps (all 15 sources consolidated)
```

### 2. Board Package Automation

**Purpose:** Generate comprehensive monthly board presentation and materials

**System Prompt:**
```
Generate board of directors meeting package for PE-backed company.

Board Package Components:
1. EXECUTIVE SUMMARY MEMO (1-page pre-read)
   - Strategic highlights (3-5 key achievements)
   - Key decisions requested from board
   - Financial performance summary (revenue, EBITDA, vs. plan)
   - Forward outlook and recommendations
   - CEO signature block

2. BOARD PRESENTATION (PowerPoint via pptx skill)

   Slide 1: Title & Agenda
   - Meeting date, location, attendees
   - Agenda with time allocations

   Slides 2-4: Financial Performance
   - Consolidated P&L (ISPN + iGLASS + DxTEL) vs. plan
   - Balance sheet and cash flow highlights
   - Variance analysis and key drivers
   - YTD performance and full-year forecast

   Slides 5-6: M&A Integration Dashboard
   - iGLASS Networks integration status and synergy realization
   - DxTEL Marketing Services integration progress
   - Customer retention and team integration metrics
   - Board-level escalations (if any)

   Slides 7-8: Strategic Initiatives Portfolio
   - 15-25 active initiatives with health status (Red/Yellow/Green)
   - Resource allocation across initiatives
   - ROI realization tracking
   - Upcoming milestones and dependencies

   Slides 9-10: Market Opportunity Analysis
   - Geographic expansion opportunities (Southeast focus)
   - M&A pipeline and target evaluation status
   - Competitive landscape and positioning
   - Strategic recommendations requiring board input

   Slide 11: Risk Assessment & Mitigation
   - Enterprise risk dashboard
   - Mitigation strategies and ownership
   - Financial/operational/strategic/market risks

   Slide 12: Forward Outlook & Recommendations
   - Next quarter strategic priorities
   - Key decisions requested from board
   - Resource requirements and capital needs
   - Timeline for major initiatives

   Slide 13: Appendix (if needed)
   - Detailed financial statements
   - Initiative deep-dives for Red/Yellow status items
   - Supporting data and analysis

3. ANTICIPATED Q&A PREPARATION
   - Identify 5-7 questions board likely to ask based on content
   - Provide data-driven answers with supporting metrics
   - Flag sensitive topics requiring careful navigation
   - Prepare backup data for detailed inquiries

4. SPEAKER NOTES
   - Detailed talking points for each slide
   - Transition language between sections
   - Emphasis points for key messages
   - Time management guidance (target: 45-60 minutes total)

Board Context for ISPN:
- PE-backed by Align Capital Partners (December 2024 investment)
- Board composition: CEO (Jeff Neblett), PE partners, independent directors
- Meeting frequency: Monthly operating reviews + quarterly strategic reviews
- Board priorities: Growth execution, M&A success, synergy realization, risk management
- Communication style: Data-driven, strategic focus, clear recommendations
- Decision authority: M&A approvals, capital allocation, strategic direction

Quality Standards:
- Professional polish suitable for PE board presentation
- ISPN branding and visual standards (if template available)
- All data current within 7 days of board meeting
- Financial data reconciled to official accounting systems
- No unexplained variances or data inconsistencies
- Clear strategic narrative connecting operations to business outcomes

Tone & Style:
- Executive voice (CEO presenting to board)
- Balanced perspective (achievements + challenges)
- Forward-looking (not just historical reporting)
- Action-oriented (clear recommendations and decisions)
- Transparent (acknowledge issues, present mitigation)

Output Format:
- DOCX for executive summary memo
- PPTX for board presentation (via pptx skill)
- Markdown for Q&A preparation and speaker notes
```

### 3. M&A Integration Intelligence Dashboard

**Purpose:** Track multiple acquisition integrations with real-time status and escalations

**System Prompt:**
```
Generate M&A integration command center dashboard tracking multiple simultaneous acquisitions.

Integration Tracking Framework:
For each acquisition (iGLASS Networks 2023, DxTEL Marketing Services 2025, future targets):

1. OVERALL INTEGRATION STATUS
   - Integration progress percentage (actual vs. target)
   - Timeline: Weeks/months since close, completion target date
   - Overall health: Green (on track), Yellow (attention needed), Red (CEO intervention required)
   - Next major milestone and expected completion date

2. SYNERGY REALIZATION TRACKING
   Revenue Synergies:
   - Cross-sell to existing ISPN customer base ($ realized vs. $ target)
   - Upsell to acquired company customers ($ realized vs. $ target)
   - New market access and expansion opportunities
   - Pipeline for future synergies

   Cost Synergies:
   - Systems consolidation savings ($ realized vs. $ target)
   - Facility optimization and real estate savings
   - Purchasing leverage and vendor consolidation
   - Operational efficiency improvements

   Synergy Realization Rate: Actual / Target percentage by category
   CEO Note: Highlight outperformance or underperformance with root cause

3. CUSTOMER RETENTION METRICS
   - Customer count: Pre-acquisition vs. current (target: 100% retention)
   - Revenue retention: ARR maintained vs. at-risk
   - Customer satisfaction: NPS score pre vs. post-acquisition
   - Expansion/upsell pipeline: Qualified opportunities with revenue potential
   - Churn analysis: If any losses, root cause and mitigation

4. TEAM INTEGRATION HEALTH
   - Employee count: Retained vs. departed (target: 95%+ retention)
   - Key talent status: Critical employees retained and engaged
   - Cultural alignment: Integration of company values and practices
   - Leadership continuity: Acquired leadership team status
   - Onboarding progress: New employees integrated into ISPN systems

5. SYSTEMS INTEGRATION PROGRESS
   - CRM/ERP migration: % complete, target completion date
   - Financial systems integration: Monthly close process, reporting consolidation
   - Operational platforms: Service delivery systems, customer portals
   - IT infrastructure: Network integration, security compliance
   - Data migration: Customer data, historical records, analytics

6. FINANCIAL INTEGRATION STATUS
   - Revenue recognition: Clean monthly close achieved (Yes/No)
   - Cost structure optimization: Overhead reduction vs. target
   - Working capital management: Cash conversion cycle impact
   - Financial reporting: Consolidated reporting capability
   - Covenant compliance: Impact on corporate credit facility

7. CEO ATTENTION ITEMS
   - Red flags requiring immediate CEO intervention
   - Decisions needed in next 7 days
   - Escalations from integration team
   - Board/investor communication requirements
   - Recommended actions with business impact quantification

8. NEXT MILESTONES
   - Upcoming 30/60/90-day integration milestones
   - Critical path items and dependencies
   - Resource requirements for next phase
   - Success criteria and measurement

PORTFOLIO-LEVEL ANALYSIS:
After analyzing individual acquisitions, provide:

1. Integration Capability Maturity Assessment
   - ISPN's demonstrated track record (number of successful integrations)
   - Integration playbook maturity and documentation
   - Team capability and capacity for additional M&A
   - Lessons learned and best practices identified
   - Organizational capacity for future acquisitions

2. Cross-Acquisition Insights
   - Patterns across multiple integrations (what works, what doesn't)
   - Resource allocation across active integrations
   - Integration timeline benchmarks (iGLASS vs. DxTEL comparison)
   - Best practice identification for future deals

3. Board Reporting Summary
   - Key message for board: Overall M&A integration success story
   - Metrics dashboard: Customer retention, synergy realization, team retention
   - Anticipated board questions with prepared answers
   - Strategic implications for continued M&A activity

Data Sources:
- Asana: Integration project tasks, milestones, timelines (projects named "iGLASS Integration", "DxTEL Integration")
- Filesystem: Financial data, synergy tracking, due diligence materials (folders: /CEO/M&A-Pipeline/Completed-Acquisitions/)
- Slack: Integration team communications, escalations, status updates (channels: #iglass-integration, #dxtel-integration)

Output Format:
Use ASCII box drawing for visual dashboard presentation:
```
┌────────────────────────────────────────────────┐
│ [ACQUISITION NAME] - Integration Month [X]     │
├────────────────────────────────────────────────┤
│ Status: [GREEN/YELLOW/RED] - [X]% Complete    │
│ [Detailed metrics and status information]      │
└────────────────────────────────────────────────┘
```

Quality Standards:
- Real-time data (refresh daily during active integration, weekly for mature integrations)
- Exception-based alerts (only escalate items requiring CEO attention)
- Quantified metrics (no qualitative assessments without supporting data)
- Actionable recommendations (specific next steps with owners and timelines)
- Board-ready content (suitable for investor communication without modification)

CEO Decision Triggers:
- Customer churn >2% (immediate escalation)
- Synergy realization <80% of target (attention needed)
- Key talent departure (immediate escalation)
- Integration timeline delay >2 weeks (CEO awareness required)
- Systems migration failure (immediate escalation)
```

### 4. M&A Target Evaluation

**Purpose:** Rapid acquisition target analysis with investment recommendation

**System Prompt:**
```
Evaluate M&A acquisition target and provide investment recommendation for CEO.

Evaluation Framework:

1. EXECUTIVE RECOMMENDATION
   - Clear recommendation: PROCEED / PASS / MORE INFO NEEDED
   - Investment thesis: 3-4 sentence strategic rationale
   - Key decision factors supporting recommendation
   - Risk-adjusted confidence level in recommendation

2. KEY INVESTMENT HIGHLIGHTS
   - Revenue: Annual revenue with 3-year growth trend (CAGR)
   - Profitability: EBITDA and margin vs. industry benchmarks
   - Customer base: Customer count, retention rate, concentration risk
   - Geographic/strategic value: Market expansion or capability addition
   - Synergy potential: Quantified revenue and cost synergies ($ annual at full run-rate)
   - Valuation: Multiple analysis (revenue, EBITDA) vs. comparable transactions
   - Integration complexity: Low/Moderate/High with key factors

3. FINANCIAL ANALYSIS
   Historical Performance (3 years):
   - Revenue trend: Growth rate, seasonality, customer concentration
   - Profitability: EBITDA margin trend and drivers
   - Cash flow: Operating cash flow quality and working capital efficiency
   - Balance sheet: Asset quality, debt levels, off-balance sheet items

   Quality of Earnings:
   - Revenue sustainability: Recurring vs. one-time revenue
   - Cost structure: Fixed vs. variable, scalability
   - Working capital: Cash conversion cycle efficiency
   - Adjustments: Normalize for owner compensation, non-recurring items

   Synergy Model:
   - Revenue synergies: Cross-sell, upsell, market access ($ quantified)
   - Cost synergies: Systems, facilities, purchasing, overhead ($ quantified)
   - Timeline: Realization schedule by quarter
   - Risk factors: Assumptions and sensitivities
   - Net synergy potential: Total annual value at full run-rate

4. STRATEGIC FIT ASSESSMENT: [STRONG / MODERATE / WEAK]
   ✓ / ✗ Geographic expansion (alignment with Southeast strategy?)
   ✓ / ✗ Customer profile alignment (rural broadband, K-12 education?)
   ✓ / ✗ Service offering complement (managed services, network operations?)
   ✓ / ✗ Cultural fit (company values, operating philosophy, leadership style?)
   ✓ / ✗ Integration capacity (organizational bandwidth, proven playbook applicability?)

   Overall Strategic Fit Score: [1-10 scale]
   Strategic Rationale: Why this acquisition advances ISPN's strategy

5. RISK ASSESSMENT: [HIGH / MODERATE-HIGH / MODERATE / LOW]
   Financial Risk:
   - Revenue concentration: Customer/industry concentration
   - Profitability sustainability: Margin stability and trajectory
   - Balance sheet: Debt levels, working capital requirements
   - Contingent liabilities: Legal, regulatory, environmental

   Operational Risk:
   - Customer retention: Historical churn and loyalty indicators
   - Service delivery: Quality metrics and operational complexity
   - Technology/systems: Platform compatibility with ISPN
   - Vendor dependencies: Critical vendor relationships and switching costs

   Integration Risk:
   - Cultural alignment: Values, practices, leadership compatibility
   - Systems complexity: Technology platform integration difficulty
   - Team retention: Key talent risk and retention strategies
   - Geographic distance: Physical distance impact on management

   Market Risk:
   - Competitive dynamics: Market position and defensibility
   - Regulatory: Compliance requirements and regulatory changes
   - Technology disruption: Market evolution and technology shifts

   Overall Risk Rating: [1-10 scale, where 10 = highest risk]
   Risk Mitigation Strategies: Specific actions to address key risks

6. INTEGRATION PLAN OVERVIEW
   - Timeline: Total months to full integration
   - Phases: Key phases (due diligence, close, integration sprints)
   - Resource requirements: Team, budget, external advisors
   - Key milestones: 30/60/90-day goals and success criteria
   - Success probability: Based on iGLASS/DxTEL experience and target complexity
   - Critical path: Items that could delay integration or reduce synergies

7. FINANCIAL RETURNS ANALYSIS
   - Purchase price: Total consideration (cash, equity, earnout structure)
   - Valuation metrics: Revenue multiple, EBITDA multiple vs. comparables
   - Synergy value: NPV of revenue and cost synergies
   - IRR calculation: Pro forma returns including synergies
   - Payback period: Years to recover investment
   - Comparison to hurdle rate: Target IRR 18%, actual IRR [X]%
   - Sensitivity analysis: Returns under different scenarios (base/upside/downside)

8. BOARD APPROVAL STRATEGY
   - Positioning: How to present to board (continuation of M&A strategy? new strategic direction?)
   - Key selling points: Most compelling arguments for this acquisition
   - Anticipated concerns: Board objections and responses
   - Decision timeline: When to present for board approval
   - Supporting materials: Board deck, financial model, due diligence summary

9. NEXT STEPS & TIMELINE
   1. CEO approval to proceed: [Date]
   2. Submit Letter of Intent: [Date]
   3. Due diligence period: [Date range, typically 60-90 days]
   4. Investment committee presentation: [Date]
   5. Closing: [Target date]

   Critical path items and dependencies

10. RECOMMENDATION SUMMARY
    - Final recommendation: PROCEED / PASS / MORE INFO NEEDED
    - Supporting rationale: Key factors driving recommendation
    - Confidence level: [High / Medium / Low] with explanation
    - If PROCEED: Recommended offer price and structure
    - If PASS: Specific deal-breakers or gaps
    - If MORE INFO: Critical questions requiring answers

M&A Evaluation Standards for ISPN:
- Strategic fit: Must align with rural broadband / K-12 technology / managed services strategy
- Financial profile: Revenue $2M-$8M, EBITDA margin >15%, revenue growth >5% CAGR
- Geographic fit: Priority on Southeast expansion (Georgia, South Carolina, North Carolina)
- Customer retention: Historical retention >90% (ISPN standard 98%+)
- Cultural fit: "Customer First" value alignment, similar operating philosophy
- Integration complexity: Preference for platforms similar to iGLASS/DxTEL (lower risk)
- Returns: Target IRR >18%, payback <5 years including synergies

Valuation Benchmarks:
- Rural broadband providers: 3.5-5.0x EBITDA (depending on growth, geography, customer mix)
- Managed services: 4.0-6.0x EBITDA (depending on contract length, retention, gross margin)
- Strategic premium: Willing to pay 10-15% above market for strong strategic fit

Data Sources:
- Filesystem: Target financial statements, CIM, due diligence materials (folder: /CEO/M&A-Pipeline/Active-Targets/[Target-Name]/)
- Asana: M&A pipeline tracking (project: "M&A Pipeline", task: [Target Name])
- Historical benchmarks: iGLASS and DxTEL acquisition data for comparison

Output Format:
- Professional investment memo format (DOCX via docx skill)
- Financial model (XLSX via xlsx skill)
- Board presentation deck (PPTX via pptx skill)
- Executive summary in Markdown for quick CEO review

Tone: Strategic advisor providing objective analysis with clear recommendation
```

---

## MCP Integration Patterns

### Asana MCP Integration

**Strategic Initiative Portfolio Retrieval:**
```python
def get_ceo_strategic_portfolio():
    """Retrieve all CEO-level strategic initiatives and M&A integrations"""

    # Access strategic initiatives workspace
    strategic_projects = asana_mcp.get_projects(
        workspace="ISPN Strategic Initiatives",
        tags=["CEO-priority", "strategic-initiative"]
    )

    # Access M&A integration projects
    integration_projects = asana_mcp.get_projects(
        workspace="M&A Integrations",
        project_names=["iGLASS Integration", "DxTEL Integration"]
    )

    # Access board governance project
    board_project = asana_mcp.get_project("Board of Directors - Meetings & Materials")

    portfolio_data = {
        'strategic_initiatives': [],
        'ma_integrations': [],
        'board_governance': []
    }

    # Process strategic initiatives
    for project in strategic_projects:
        initiative_data = {
            'name': project.name,
            'status': project.status,  # Red/Yellow/Green
            'completion_rate': calculate_completion(project),
            'timeline_status': assess_timeline(project),
            'resource_allocation': get_resource_data(project),
            'business_impact': project.custom_field('Strategic Value'),
            'ceo_attention_required': requires_ceo_escalation(project)
        }
        portfolio_data['strategic_initiatives'].append(initiative_data)

    # Process M&A integrations with specialized tracking
    for project in integration_projects:
        integration_data = {
            'acquisition': project.name,
            'integration_progress': project.custom_field('Integration %'),
            'synergy_realization': {
                'revenue': get_synergy_data(project, 'revenue'),
                'cost': get_synergy_data(project, 'cost')
            },
            'customer_retention': project.custom_field('Customer Retention %'),
            'team_retention': project.custom_field('Employee Retention %'),
            'systems_migration': get_systems_status(project),
            'escalations': get_ceo_escalations(project)
        }
        portfolio_data['ma_integrations'].append(integration_data)

    # Process board governance
    board_data = {
        'next_meeting': board_project.custom_field('Next Meeting Date'),
        'materials_status': assess_board_prep_status(board_project),
        'open_action_items': get_board_action_items(board_project)
    }
    portfolio_data['board_governance'] = board_data

    return portfolio_data

def requires_ceo_escalation(project):
    """Determine if project requires CEO attention"""
    escalation_criteria = {
        'timeline_delay': project.days_behind_schedule > 14,
        'budget_overrun': project.budget_variance_percent > 10,
        'strategic_value_at_risk': project.strategic_value_at_risk > 250000,
        'cross_functional_blocker': project.has_cross_functional_blocker,
        'board_visibility': project.board_reporting_required
    }

    return any(escalation_criteria.values()), escalation_criteria
```

### Filesystem MCP Integration

**CEO Data Consolidation:**
```python
def consolidate_ceo_data_sources():
    """Consolidate 15+ information sources for executive intelligence"""

    ceo_data = {}

    # 1. Financial Reports
    financial_path = "/CEO/Financial-Data/2024/November/"
    ceo_data['financial'] = {
        'pl': filesystem_mcp.read_excel(f"{financial_path}P&L-November-2024.xlsx"),
        'balance_sheet': filesystem_mcp.read_excel(f"{financial_path}balance-sheet-November-2024.xlsx"),
        'cash_flow': filesystem_mcp.read_excel(f"{financial_path}cash-flow-November-2024.xlsx")
    }

    # 2. Board Materials
    board_path = "/CEO/Board-Reports/2024/November-Board-Meeting/"
    board_files = filesystem_mcp.list_files(board_path)
    ceo_data['board'] = {
        'previous_deck': find_latest_file(board_files, '.pptx'),
        'materials_status': assess_files(board_files)
    }

    # 3. M&A Pipeline
    ma_path = "/CEO/M&A-Pipeline/Active-Targets/"
    target_folders = filesystem_mcp.list_directories(ma_path)
    ceo_data['ma_pipeline'] = []
    for target in target_folders:
        target_data = {
            'name': target,
            'financials': filesystem_mcp.list_files(f"{ma_path}{target}/financial-data/"),
            'due_diligence': filesystem_mcp.list_files(f"{ma_path}{target}/due-diligence/"),
            'status': determine_target_status(target)
        }
        ceo_data['ma_pipeline'].append(target_data)

    # 4. Strategic Planning Documents
    strategic_path = "/CEO/Strategic-Planning/"
    ceo_data['strategic_planning'] = {
        'annual_plan': filesystem_mcp.read_docx(f"{strategic_path}Annual-Plan-2024/strategic-plan.docx"),
        'q1_planning': filesystem_mcp.list_files(f"{strategic_path}Q1-2025-Planning/")
    }

    # 5. Historical Executive Briefs (for trend analysis)
    briefs_path = "/CEO/Generated-Briefs/2024/November/"
    ceo_data['historical_briefs'] = filesystem_mcp.list_files(briefs_path)

    return ceo_data

def store_ceo_analysis(analysis_data, analysis_type, date):
    """Store generated CEO intelligence with proper organization"""

    timestamp = date.strftime('%Y-%m-%d')

    storage_map = {
        'executive_brief': f"/CEO/Generated-Briefs/{date.year}/{date.strftime('%B')}/executive-brief-{timestamp}.md",
        'board_package': f"/CEO/Board-Materials/{date.year}/{date.strftime('%B')}/board-package-{timestamp}.pptx",
        'ma_evaluation': f"/CEO/M&A-Analysis/{date.year}/target-evaluation-{timestamp}.docx",
        'integration_dashboard': f"/CEO/Integration-Tracking/{date.year}/integration-dashboard-{timestamp}.md"
    }

    file_path = storage_map.get(analysis_type)
    if file_path:
        filesystem_mcp.write_file(file_path, analysis_data)
        return file_path
    else:
        raise ValueError(f"Unknown analysis type: {analysis_type}")
```

### Slack MCP Integration

**Stakeholder Intelligence & Communication:**
```python
def analyze_stakeholder_communications():
    """Analyze Slack for stakeholder sentiment and organizational intelligence"""

    # Leadership team channels
    leadership_channels = ['#leadership', '#executive-team', '#strategic-initiatives']
    leadership_sentiment = {}

    for channel in leadership_channels:
        messages = slack_mcp.get_recent_messages(channel, days=7)
        sentiment = analyze_sentiment(messages)
        key_topics = extract_key_topics(messages)
        escalations = identify_escalations(messages)

        leadership_sentiment[channel] = {
            'overall_sentiment': sentiment,
            'key_topics': key_topics,
            'escalations': escalations
        }

    # Board/investor communications
    board_messages = slack_mcp.get_dm_messages(user="Matt Iodice", days=30)
    board_sentiment = analyze_board_communications(board_messages)

    # M&A integration team communications
    integration_channels = ['#iglass-integration', '#dxtel-integration']
    integration_intelligence = {}

    for channel in integration_channels:
        messages = slack_mcp.get_recent_messages(channel, days=7)
        integration_intelligence[channel] = {
            'status_updates': extract_status_updates(messages),
            'blockers': identify_blockers(messages),
            'wins': identify_successes(messages),
            'escalations': identify_ceo_escalations(messages)
        }

    return {
        'leadership_team': leadership_sentiment,
        'board_investor': board_sentiment,
        'ma_integration': integration_intelligence
    }

def distribute_ceo_communications(content, audience_type):
    """Distribute CEO communications to appropriate stakeholders via Slack"""

    distribution_map = {
        'leadership_team': {
            'channel': '#leadership',
            'message': format_for_leadership(content)
        },
        'board_update': {
            'user': 'Matt Iodice',  # PE partner
            'message': format_for_board(content),
            'channel': '#board-updates'
        },
        'all_hands': {
            'channel': '#general',
            'message': format_for_employees(content)
        }
    }

    config = distribution_map.get(audience_type)
    if config:
        if 'channel' in config:
            slack_mcp.send_message(channel=config['channel'], message=config['message'])
        if 'user' in config:
            slack_mcp.send_dm(user=config['user'], message=config['message'])
```

---

## Workflow Orchestration

### Sunday Executive Intelligence Brief Workflow

```python
def generate_sunday_executive_brief():
    """Complete Sunday evening CEO preparation workflow"""

    # Step 1: Gather data from all 15 sources
    asana_data = get_ceo_strategic_portfolio()
    filesystem_data = consolidate_ceo_data_sources()
    slack_data = analyze_stakeholder_communications()

    # Step 2: Identify immediate CEO decisions required
    decisions = identify_ceo_decisions(asana_data, filesystem_data, slack_data)
    decisions_sorted = prioritize_by_business_impact(decisions)

    # Step 3: Generate M&A integration dashboard
    integration_status = generate_integration_dashboard(
        asana_data['ma_integrations'],
        filesystem_data['ma_pipeline']
    )

    # Step 4: Identify strategic opportunities
    opportunities = identify_strategic_opportunities(
        filesystem_data['ma_pipeline'],
        slack_data['board_investor'],
        external_market_intelligence
    )

    # Step 5: Prepare board package preview (if meeting within 14 days)
    board_preview = None
    if upcoming_board_meeting(within_days=14):
        board_preview = generate_board_package_preview(
            filesystem_data['board'],
            asana_data,
            filesystem_data['financial']
        )

    # Step 6: Optimize CEO calendar for week ahead
    calendar_optimization = analyze_ceo_time_allocation(
        asana_data['strategic_initiatives'],
        decisions_sorted,
        upcoming_meetings
    )

    # Step 7: Generate stakeholder intelligence
    stakeholder_intel = synthesize_stakeholder_intelligence(
        slack_data,
        recent_board_communications,
        leadership_team_updates
    )

    # Step 8: Compile executive brief
    executive_brief = compile_executive_brief(
        decisions=decisions_sorted,
        integration_status=integration_status,
        opportunities=opportunities,
        board_preview=board_preview,
        calendar_optimization=calendar_optimization,
        stakeholder_intel=stakeholder_intel,
        key_metrics=get_key_metrics_dashboard(filesystem_data['financial']),
        risk_monitoring=assess_enterprise_risks(asana_data, filesystem_data)
    )

    # Step 9: Store and deliver
    file_path = store_ceo_analysis(executive_brief, 'executive_brief', datetime.now())

    # Optional: Send to CEO via Slack
    # slack_mcp.send_dm(user="Jeff Neblett", message=f"Your Sunday executive brief is ready: {file_path}")

    return executive_brief
```

### Board Package Creation Workflow

```python
def generate_board_package(meeting_date):
    """Complete board package creation workflow"""

    # Step 1: Gather comprehensive data
    financial_data = get_consolidated_financials()
    integration_data = get_ma_integration_status()
    strategic_initiatives = get_initiative_portfolio()
    market_intelligence = get_competitive_analysis()

    # Step 2: Generate executive summary memo (DOCX)
    exec_summary = create_executive_summary_memo(
        financial_summary=financial_data['summary'],
        key_decisions_requested=['Southeast expansion authorization', 'DxTEL acceleration approval'],
        strategic_highlights=get_strategic_highlights(integration_data, strategic_initiatives)
    )

    memo_path = docx_skill.generate(
        content=exec_summary,
        template='ISPN-board-memo-template',
        output_path=f"/CEO/Board-Materials/{meeting_date}/executive-summary.docx"
    )

    # Step 3: Generate board presentation (PPTX)
    presentation_content = {
        'title': f'ISPN Board of Directors - {meeting_date.strftime("%B %Y")}',
        'slides': [
            create_title_slide(meeting_date),
            create_financial_slides(financial_data),
            create_integration_slides(integration_data),
            create_strategic_initiatives_slides(strategic_initiatives),
            create_market_opportunity_slides(market_intelligence),
            create_risk_assessment_slide(get_enterprise_risks()),
            create_forward_outlook_slide(get_forward_priorities())
        ]
    }

    pptx_path = pptx_skill.generate(
        content=presentation_content,
        template='ISPN-board-template',
        output_path=f"/CEO/Board-Materials/{meeting_date}/board-presentation.pptx"
    )

    # Step 4: Generate anticipated Q&A
    qa_prep = generate_anticipated_qa(
        presentation_content=presentation_content,
        historical_board_questions=get_historical_board_questions(),
        sensitive_topics=['iGLASS revenue synergy lag', 'Southeast expansion risk']
    )

    # Step 5: Generate speaker notes
    speaker_notes = generate_speaker_notes(
        presentation_content=presentation_content,
        talking_points=get_key_messages(),
        time_allocation={'financial': 15, 'integration': 10, 'strategic': 15, 'qa': 15}
    )

    # Step 6: Package and deliver
    board_package = {
        'executive_summary': memo_path,
        'presentation': pptx_path,
        'qa_preparation': qa_prep,
        'speaker_notes': speaker_notes,
        'preparation_time_saved': calculate_time_savings(baseline_hours=12, actual_hours=1)
    }

    return board_package
```

---

## Escalation Criteria & Decision Triggers

### CEO-Level Escalation Thresholds

```python
CEO_ESCALATION_CRITERIA = {
    # Financial escalations
    'strategic_value_at_risk': {
        'threshold': 250000,  # $250K
        'severity': 'high',
        'description': 'Strategic initiative or acquisition with >$250K value at risk'
    },
    'budget_variance': {
        'threshold_percent': 10,
        'threshold_absolute': 100000,  # $100K
        'severity': 'medium',
        'description': 'Project >10% over budget or >$100K variance'
    },

    # M&A escalations (ALL require CEO review)
    'acquisition_decision': {
        'threshold': 0,  # All M&A decisions
        'severity': 'critical',
        'description': 'Any acquisition target evaluation or decision'
    },
    'integration_customer_churn': {
        'threshold_percent': 2,
        'severity': 'critical',
        'description': 'Customer retention <98% on active acquisition integration'
    },
    'integration_synergy_lag': {
        'threshold_percent': 80,  # Synergies <80% of target
        'severity': 'medium',
        'description': 'Synergy realization below 80% of target'
    },
    'integration_timeline_delay': {
        'threshold_days': 14,
        'severity': 'medium',
        'description': 'Integration milestone >2 weeks behind schedule'
    },

    # Operational escalations
    'customer_retention_decline': {
        'threshold_percent': 97,  # Below 97% (target: 98%+)
        'severity': 'high',
        'description': 'Overall customer retention declining below 97%'
    },
    'major_customer_at_risk': {
        'threshold_revenue': 100000,  # $100K+ annual revenue
        'severity': 'high',
        'description': 'Customer representing >$100K annual revenue at churn risk'
    },

    # Strategic escalations
    'board_stakeholder_issue': {
        'threshold': 0,  # All board/investor issues
        'severity': 'critical',
        'description': 'Board member or PE investor concern or question'
    },
    'competitive_threat': {
        'severity': 'medium',
        'description': 'Significant competitive action requiring strategic response'
    },
    'market_expansion_decision': {
        'threshold': 0,  # All expansion decisions
        'severity': 'high',
        'description': 'Geographic or market expansion opportunity requiring CEO decision'
    },

    # Crisis situations
    'service_outage': {
        'duration_hours': 4,
        'customer_impact': 'multiple',
        'severity': 'critical',
        'description': 'Service outage >4 hours affecting multiple customers'
    },
    'security_breach': {
        'threshold': 0,  # All security incidents
        'severity': 'critical',
        'description': 'Any cybersecurity incident or data breach'
    },
    'legal_regulatory': {
        'severity': 'critical',
        'description': 'Legal action, regulatory inquiry, or compliance issue'
    }
}

def check_ceo_escalation(data_point, context):
    """Determine if data point requires CEO escalation"""
    escalations = []

    for criteria_name, criteria in CEO_ESCALATION_CRITERIA.items():
        if meets_escalation_criteria(data_point, criteria, context):
            escalations.append({
                'criteria': criteria_name,
                'severity': criteria['severity'],
                'description': criteria['description'],
                'data': data_point,
                'recommended_action': generate_recommended_action(criteria_name, data_point, context),
                'business_impact': quantify_business_impact(criteria_name, data_point, context),
                'timeline': determine_urgency(criteria['severity'])
            })

    return escalations
```

---

## Quality Assurance & Validation

### Data Quality Checks

```python
def validate_ceo_intelligence_quality(intelligence_data):
    """Validate CEO intelligence meets quality standards"""

    quality_checks = {
        'data_completeness': check_data_completeness(intelligence_data),
        'data_currency': check_data_freshness(intelligence_data),
        'calculation_accuracy': validate_calculations(intelligence_data),
        'recommendation_clarity': assess_recommendation_quality(intelligence_data),
        'executive_readiness': evaluate_executive_appropriateness(intelligence_data),
        'board_suitability': assess_board_presentation_readiness(intelligence_data)
    }

    quality_score = sum(quality_checks.values()) / len(quality_checks) * 100

    if quality_score < 95:
        return False, f"Quality score {quality_score}% below 95% threshold", quality_checks
    else:
        return True, f"Quality validated: {quality_score}%", quality_checks

def check_data_completeness(intelligence_data):
    """Verify all 15 data sources integrated"""
    required_sources = [
        'asana_strategic_initiatives',
        'asana_ma_integrations',
        'asana_board_governance',
        'filesystem_financial_reports',
        'filesystem_board_materials',
        'filesystem_ma_pipeline',
        'filesystem_strategic_planning',
        'slack_leadership_communications',
        'slack_board_investor_comms',
        'slack_integration_teams',
        'financial_metrics',
        'operational_metrics',
        'customer_data',
        'competitive_intelligence',
        'market_analysis'
    ]

    sources_present = [source for source in required_sources if source in intelligence_data]
    completeness = len(sources_present) / len(required_sources)

    return completeness >= 0.95  # 95% of sources must be present

def check_data_freshness(intelligence_data):
    """Verify data currency meets CEO standards"""
    freshness_requirements = {
        'financial_data': 7,  # Within 7 days
        'operational_metrics': 1,  # Within 1 day
        'ma_integration_status': 1,  # Daily during active integration
        'stakeholder_communications': 1,  # Within 1 day
        'strategic_initiative_status': 7  # Within 7 days
    }

    for data_type, max_age_days in freshness_requirements.items():
        if data_type in intelligence_data:
            data_age = (datetime.now() - intelligence_data[data_type]['timestamp']).days
            if data_age > max_age_days:
                return False

    return True
```

---

## Performance Optimization

### Caching Strategy for CEO Intelligence

```python
# Cache configuration for optimal performance
CACHE_CONFIGURATION = {
    'asana_portfolio_data': {
        'ttl_hours': 4,  # Refresh every 4 hours
        'priority': 'high'
    },
    'financial_reports': {
        'ttl_hours': 24,  # Daily refresh sufficient
        'priority': 'medium'
    },
    'ma_integration_metrics': {
        'ttl_hours': 1,  # Hourly during active integration
        'priority': 'critical'
    },
    'stakeholder_communications': {
        'ttl_hours': 2,  # Every 2 hours
        'priority': 'high'
    },
    'board_materials': {
        'ttl_days': 7,  # Weekly refresh
        'priority': 'low'
    }
}

def get_cached_ceo_data(data_type):
    """Retrieve cached data if fresh, otherwise refresh"""
    cache_config = CACHE_CONFIGURATION.get(data_type)

    if not cache_config:
        return fetch_fresh_data(data_type)

    cached_data = cache.get(data_type)

    if cached_data and is_data_fresh(cached_data, cache_config):
        return cached_data
    else:
        fresh_data = fetch_fresh_data(data_type)
        cache.set(data_type, fresh_data, ttl=cache_config.get('ttl_hours', 24) * 3600)
        return fresh_data
```

---

## Security & Compliance

### Data Security for CEO Intelligence

```python
SECURITY_CONFIGURATION = {
    'data_classification': {
        'financial_data': 'confidential',
        'ma_pipeline': 'highly_confidential',
        'board_materials': 'confidential',
        'strategic_planning': 'confidential',
        'operational_metrics': 'internal'
    },

    'access_control': {
        'ceo': 'full_access',
        'cfo': 'financial_and_board',
        'svp_ops': 'operational_and_initiatives',
        'board_members': 'board_materials_only'
    },

    'encryption': {
        'at_rest': 'AES-256',
        'in_transit': 'TLS 1.3',
        'in_processing': 'memory_encryption'
    },

    'audit_logging': {
        'enabled': True,
        'retention_days': 90,
        'log_access': True,
        'log_modifications': True,
        'log_distributions': True
    }
}

def enforce_security_controls(data, operation, user):
    """Enforce security controls on CEO intelligence data"""

    # Classification check
    data_classification = determine_classification(data)
    user_clearance = get_user_clearance(user)

    if not has_sufficient_clearance(user_clearance, data_classification):
        raise SecurityException(f"User {user} lacks clearance for {data_classification} data")

    # Encryption
    if operation in ['store', 'transmit']:
        data = encrypt_data(data, SECURITY_CONFIGURATION['encryption'])

    # Audit logging
    log_data_access(user=user, operation=operation, data_type=data_classification, timestamp=datetime.now())

    return data
```

---

## Troubleshooting & Support

### Common Issues and Resolutions

```python
TROUBLESHOOTING_GUIDE = {
    'missing_data_sources': {
        'symptoms': ['Incomplete executive brief', 'Missing financial data', 'Asana connection failed'],
        'diagnosis': 'Check MCP connectivity and data source availability',
        'resolution_steps': [
            '1. Verify Asana MCP authentication (re-authenticate if expired)',
            '2. Check Filesystem MCP directory permissions',
            '3. Confirm Slack MCP workspace access',
            '4. Test each MCP individually: asana_mcp.test_connection()',
            '5. Review MCP configuration: claude-desktop list-mcps'
        ],
        'escalation': 'Pete Connor (Tech Center Director) if issue persists >15 minutes'
    },

    'stale_data': {
        'symptoms': ['Data older than expected', 'Metrics not current', 'Yesterday\'s numbers'],
        'diagnosis': 'Cache not refreshing or data source not updated',
        'resolution_steps': [
            '1. Clear cache: force_refresh=True in request',
            '2. Verify source data updated (check Asana task completion dates)',
            '3. Check financial data file timestamps in Filesystem',
            '4. Confirm CFO uploaded latest financials',
            '5. Review cache configuration TTL settings'
        ],
        'escalation': 'CFO (Scott Lauber) if financial data not updated'
    },

    'calculation_errors': {
        'symptoms': ['Numbers don\'t match', 'Synergy calculations wrong', 'Percentages off'],
        'diagnosis': 'Formula error or data quality issue in source',
        'resolution_steps': [
            '1. Verify source data quality (check for missing values)',
            '2. Validate calculation methodology matches CFO standards',
            '3. Cross-reference with source systems (QuickBooks, Asana)',
            '4. Request manual validation from CFO for critical numbers',
            '5. Document discrepancy for investigation'
        ],
        'escalation': 'Immediate escalation to CFO for financial calculation errors'
    },

    'board_package_formatting': {
        'symptoms': ['Slides look wrong', 'ISPN branding missing', 'Layout issues'],
        'diagnosis': 'Template issue or pptx skill configuration',
        'resolution_steps': [
            '1. Verify ISPN template file exists and accessible',
            '2. Check template compatibility with pptx skill',
            '3. Request regeneration with explicit formatting instructions',
            '4. Manual formatting adjustment if time-critical',
            '5. Update template for future use'
        ],
        'escalation': 'Pete Connor for persistent formatting issues'
    },

    'performance_degradation': {
        'symptoms': ['Slow response', 'Timeouts', 'Executive brief takes >5 minutes'],
        'diagnosis': 'System resource constraints or data volume issues',
        'resolution_steps': [
            '1. Check system resources (RAM, CPU) on CEO device',
            '2. Reduce data scope: limit to current month vs. historical',
            '3. Process large datasets (financial models) separately',
            '4. Use incremental refresh vs. full data pull',
            '5. Optimize MCP queries (pagination, selective fields)'
        ],
        'escalation': 'IT Support if performance issue persists'
    }
}

def diagnose_and_resolve(issue_description):
    """Provide troubleshooting guidance based on issue symptoms"""

    # Match issue description to known issues
    matched_issue = match_issue_symptoms(issue_description, TROUBLESHOOTING_GUIDE)

    if matched_issue:
        guidance = TROUBLESHOOTING_GUIDE[matched_issue]
        return {
            'diagnosis': guidance['diagnosis'],
            'resolution_steps': guidance['resolution_steps'],
            'escalation_path': guidance['escalation']
        }
    else:
        return {
            'diagnosis': 'Unknown issue - requires manual investigation',
            'resolution_steps': ['Contact Pete Connor: 555-252-8331'],
            'escalation_path': 'Immediate - Pete Connor (Tech Center Director)'
        }
```

---

## Success Metrics & Monitoring

### Key Performance Indicators for CEO Strategic Intelligence

```python
SUCCESS_METRICS = {
    'time_savings': {
        'executive_prep_time': {
            'baseline_hours': 106,  # Monthly before Claude
            'target_hours': 8,  # Monthly with Claude
            'measurement': 'Time tracking from Sunday brief to board prep completion'
        },
        'sunday_brief_time': {
            'baseline_hours': 4,
            'target_minutes': 15,
            'measurement': 'Request to final brief read time'
        },
        'board_package_time': {
            'baseline_hours': 12,
            'target_hours': 1,
            'measurement': 'Material creation to CEO review ready'
        },
        'ma_evaluation_time': {
            'baseline_hours': 16,
            'target_hours': 2,
            'measurement': 'Target identification to investment recommendation'
        }
    },

    'decision_quality': {
        'decision_velocity': {
            'baseline_days': 10,
            'target_days': 5,
            'measurement': 'Issue identification to CEO decision and action'
        },
        'information_consolidation': {
            'baseline_sources': 15,  # Disconnected sources
            'target_sources': 1,  # Unified view
            'measurement': 'Single dashboard replacing multiple systems'
        },
        'board_confidence': {
            'baseline_score': 7.5,  # Out of 10
            'target_score': 9.5,
            'measurement': 'Board feedback survey on CEO preparedness'
        }
    },

    'strategic_impact': {
        'ceo_strategic_time': {
            'baseline_percent': 25,
            'target_percent': 85,
            'measurement': 'Percentage of CEO time on strategic leadership vs. admin'
        },
        'ma_integration_success': {
            'target_customer_retention': 100,  # Percentage
            'target_synergy_realization': 90,  # Percentage of target
            'measurement': 'iGLASS and DxTEL integration outcomes'
        },
        'acquisition_pipeline_velocity': {
            'baseline_deals_per_year': 1,
            'target_deals_per_year': 3,
            'measurement': 'M&A deal flow capacity and execution'
        }
    }
}

def track_success_metrics():
    """Monitor and report CEO strategic intelligence success metrics"""

    metrics_report = {
        'time_savings': calculate_time_savings(),
        'decision_quality': assess_decision_quality(),
        'strategic_impact': measure_strategic_impact(),
        'roi_calculation': calculate_roi()
    }

    return metrics_report

def calculate_roi():
    """Calculate ROI for CEO Strategic Intelligence skill"""

    # Investment
    software_cost_annual = 2400  # Claude Desktop Team subscription
    implementation_cost = 3200  # One-time setup
    support_cost_annual = 3600  # Ongoing optimization
    total_investment_year1 = software_cost_annual + implementation_cost + support_cost_annual  # $9,200

    # Return
    time_saved_hours_annual = 1172  # 98 hours/month × 12 months
    ceo_hourly_value = 500  # Conservative CEO hourly rate
    direct_time_value = time_saved_hours_annual * ceo_hourly_value  # $586,000

    strategic_value = 1000000  # Conservative strategic value (M&A, decisions, board confidence)

    total_return_year1 = direct_time_value + strategic_value  # $1,586,000

    roi_percent = ((total_return_year1 - total_investment_year1) / total_investment_year1) * 100
    payback_hours = total_investment_year1 / (ceo_hourly_value)

    return {
        'total_investment': total_investment_year1,
        'total_return': total_return_year1,
        'net_benefit': total_return_year1 - total_investment_year1,
        'roi_percent': roi_percent,  # ~17,130%
        'payback_period_hours': payback_hours,  # <20 hours
        'monthly_value': total_return_year1 / 12  # $132,000/month
    }
```

---

**Version:** 1.0
**Last Updated:** 2024-11
**Created for:** Jeff Neblett, Chief Executive Officer, ISPN Network Services
**Technical Owner:** Pete Connor, Tech Center Director
**PE Partner:** Align Capital Partners
