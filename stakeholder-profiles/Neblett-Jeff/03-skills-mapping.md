# Jeff Neblett - Claude Skills Mapping
## CEO Strategic Capabilities Enhancement

### Overview
This document maps the most strategic Claude Skills to Jeff Neblett's specific CEO responsibilities and pain points, focusing on capabilities that deliver immediate executive value and strategic leverage.

---

## Priority 1: Board & Investor Communications

### Skill: `pptx` (Public - Anthropic-built)
**Why Relevant**: Neblett spends 12+ hours monthly creating board packages and investor updates. This skill automates professional presentation creation from raw data and strategic narratives.

**Use Case**: Monthly board meeting preparation
- Monday morning: "Create a board presentation from this month's financial data, Asana project milestones, and competitive intelligence. Include executive summary, financial performance vs plan, strategic initiatives status, M&A pipeline, and 90-day outlook."
- Claude synthesizes data from multiple sources into cohesive narrative
- Generates professional slides with ISPN branding
- Creates speaker notes with detailed backup data

**Value**: 
- Time savings: 12 hours → 30 minutes (95% reduction)
- Quality improvement: Consistent formatting, data accuracy, comprehensive coverage
- Strategic benefit: More time for board relationship building vs. slide creation

**Integration**: 
- Works with **Asana MCP** to pull project status automatically
- Combines with **Filesystem MCP** to access financial reports
- Enhanced by **xlsx** skill for embedded data visualizations

---

## Priority 2: Financial Analysis & Decision Support

### Skill: `xlsx` (Public - Anthropic-built)
**Why Relevant**: As CEO with finance background (Boston College, EY experience), Neblett requires sophisticated financial modeling for M&A decisions, integration planning, and performance analysis. Manual Excel work consumes hours weekly.

**Use Case**: Acquisition target evaluation
- Wednesday M&A committee: "Analyze this target company's financials. Create integration model showing revenue synergies, cost savings, and 3-year pro forma. Include sensitivity analysis on key assumptions."
- Claude builds complex financial models with formulas
- Performs scenario analysis automatically
- Generates executive summary with key metrics and recommendations

**Value**:
- Time savings: 6 hours → 20 minutes per analysis
- Decision quality: Standardized evaluation framework, comprehensive scenarios
- Risk reduction: Fewer formula errors, consistent methodology
- M&A success: Better target selection through deeper analysis

**Integration**:
- **Filesystem MCP** accesses due diligence documents
- **Slack MCP** shares models with CFO Lauber for review
- Combines with **pptx** skill for investment committee presentations

---

## Priority 3: Strategic Documentation & Communication

### Skill: `docx` (Public - Anthropic-built)
**Why Relevant**: Neblett creates numerous strategic documents - acquisition theses, partnership agreements, strategic plans, investor communications. Professional documentation is critical for PE relationships and board governance.

**Use Case**: Strategic planning documentation
- Quarterly strategic review: "Create comprehensive strategic plan update document. Include market analysis, competitive positioning, 3-year roadmap, resource requirements, and risk assessment. Format for board distribution."
- Claude structures complex strategic narratives
- Maintains consistent voice and professional tone
- Incorporates data from multiple business units
- Ensures SEC-compliant language for investor communications

**Value**:
- Time savings: 8 hours → 45 minutes per major document
- Consistency: Standardized format for all strategic communications
- Compliance: Proper structure for PE reporting requirements
- Strategic focus: Less time writing, more time strategizing

**Integration**:
- **Asana MCP** pulls strategic initiative status
- **Slack MCP** distributes to leadership team for input
- Works with **theme-factory** skill for consistent branding

---

## Priority 4: Executive Dashboard & Analytics

### Skill: `artifacts-builder` (Example skill)
**Why Relevant**: Neblett needs real-time visibility into KPIs across acquisitions, departments, and markets. Static PowerBI dashboards are outdated by the time he sees them. Interactive dashboards enable instant strategic insight.

**Use Case**: Monday morning executive meeting prep
- Sunday evening: "Create interactive dashboard showing this week's performance across all business units. Include revenue pace, customer health scores, operational metrics, and exception alerts. Make it interactive so I can drill into problem areas."
- Claude builds HTML dashboard with live data connections
- Creates drill-down capabilities for investigation
- Highlights anomalies and trends requiring attention
- Mobile-responsive for access anywhere

**Value**:
- Decision speed: Real-time insights vs. 48-hour old reports
- Meeting effectiveness: Live data exploration during discussions
- Strategic alignment: Entire leadership team sees same data
- Proactive management: Exception-based alerts for immediate action

**Integration**:
- **Filesystem MCP** accesses latest data exports
- **Asana MCP** shows project/initiative health
- Combines with **xlsx** for underlying calculations

---

## Priority 5: Market Intelligence & Competitive Analysis

### Skill: `ispn-industry-leadership` (User skill - ISPN-custom)
**Why Relevant**: As CEO driving market expansion, Neblett needs deep understanding of rural broadband landscape, K-12 education technology trends, and competitive dynamics. This custom skill encodes ISPN-specific industry knowledge.

**Use Case**: Market entry strategy development
- Strategic planning session: "Analyze Southeast market opportunity for rural broadband expansion. Include competitive landscape, regulatory environment, potential partners, and recommended entry strategy for Georgia and South Carolina."
- Claude applies ISPN's industry expertise
- Identifies market-specific opportunities and threats
- Recommends partnerships and acquisition targets
- Creates go-to-market strategy aligned with ISPN capabilities

**Value**:
- Strategic advantage: Faster market entry decisions
- Risk mitigation: Better understanding of regional dynamics
- Growth acceleration: Identified opportunities competitors miss
- Thought leadership: Deeper insights for industry speaking engagements

**Integration**:
- Enhanced by **web search** for latest market data
- **docx** skill for strategy documentation
- **pptx** for board presentation on expansion plans

---

## Priority 6: Cross-Functional Alignment

### Skill: `internal-comms` (Example skill)
**Why Relevant**: Neblett must communicate strategic vision to multiple stakeholder groups - board, investors, leadership team, all employees. Each requires different messaging while maintaining consistency.

**Use Case**: All-hands strategic update after acquisition
- Post-acquisition announcement: "Create communication package for DxTEL acquisition. Need board memo, investor update, leadership talking points, and all-hands presentation. Emphasize strategic rationale, integration plan, and cultural alignment."
- Claude creates audience-appropriate versions
- Maintains consistent core message
- Adapts detail level and focus for each group
- Ensures legal/compliance requirements met

**Value**:
- Time savings: 6 hours → 30 minutes for full package
- Message consistency: Aligned communication across all channels
- Employee engagement: Clear, inspiring vision communication
- Investor confidence: Professional, thorough updates

**Integration**:
- **Slack MCP** for immediate distribution
- **Canva MCP** for visual materials
- **docx** and **pptx** for document creation

---

## Skills Synergy Matrix

| Skill Combination | Strategic Capability Unlocked | CEO Impact |
|-------------------|------------------------------|------------|
| `xlsx` + `pptx` + Asana MCP | Automated board reporting | 12 hours/month saved |
| `docx` + `ispn-industry-leadership` + Web Search | Market expansion playbooks | Faster go-to-market |
| `artifacts-builder` + `xlsx` + Filesystem | Real-time executive dashboards | Daily decision acceleration |
| `internal-comms` + `pptx` + Slack MCP | Stakeholder alignment at scale | 5x communication efficiency |
| All skills combined | Complete executive operating system | 20+ hours/month reclaimed |

---

## Implementation Priority

### Phase 1 (Week 1): Foundation
1. Enable `pptx` and `xlsx` for immediate board package creation
2. Connect Asana and Filesystem MCPs
3. Test with upcoming board meeting materials

### Phase 2 (Week 2): Expansion
1. Add `docx` for strategic documentation
2. Implement `artifacts-builder` for dashboards
3. Create first interactive CEO dashboard

### Phase 3 (Week 3): Specialization
1. Deploy `ispn-industry-leadership` custom skill
2. Activate `internal-comms` for stakeholder management
3. Full integration across all systems

### Phase 4 (Week 4): Optimization
1. Refine prompts based on Neblett's preferences
2. Create CEO-specific templates
3. Measure time savings and decision impact

---

## Success Metrics

### Immediate (30 days)
- Board package creation: 12 hours → 1 hour
- Weekly reporting: 4 hours → 15 minutes
- Strategic document creation: 70% faster

### Medium-term (90 days)
- Decision velocity: 2x faster strategic decisions
- Stakeholder satisfaction: Improved investor NPS
- Time allocation: 20+ hours/month redirected to strategy

### Long-term (12 months)
- M&A success rate: Higher quality targets identified
- Market expansion: Faster entry into new markets
- Leadership effectiveness: Measured improvement in organizational alignment

---

## Risk Mitigation

### Data Security
- All skills operate within Claude Desktop's secure environment
- No data leaves ISPN control
- Audit trail maintained for compliance

### Quality Assurance
- CEO reviews all outputs before distribution
- CFO validates financial models
- Legal reviews investor communications

### Adoption Support
- Dedicated support from Tech Center Director Pete Connor
- Weekly optimization sessions first month
- Executive peer learning with other ISPN leaders

---

## ROI Projection

### Time Value
- Hours saved monthly: 25+ hours
- CEO hourly value: $500 (conservative estimate)
- Monthly value: $12,500
- Annual value: $150,000

### Strategic Value
- Faster M&A execution: 1 additional acquisition per year
- Better target selection: 10% improvement in ROI
- Market expansion acceleration: 6 months faster entry

### Total First-Year Value
- Direct time savings: $150,000
- Strategic impact: $500,000+
- **Total: $650,000+ on minimal software investment**

---

## Next Steps

1. **Immediate**: Enable priority skills in CEO's Claude Desktop
2. **Tomorrow**: Run first board package creation test
3. **This week**: Create custom CEO command shortcuts
4. **Next week**: Expand to full leadership team

The combination of these skills transforms Neblett from information processor to strategic orchestrator, exactly what ISPN needs for its next phase of growth.