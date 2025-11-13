# Board Reporting Automation - Quick Start Guide

## What This Skill Does

Transforms quarterly board reporting from a 120-hour multi-executive burden into a streamlined 8-hour workflow. Automatically synthesizes operational, financial, and strategic data into board-quality presentations with executive narrative, data visualization, and speaker notes.

## Key Features

- **Quarterly Board Deck Generation**: Complete 25-40 slide presentation in 20-30 minutes (vs. 40 hours manual per executive)
- **Multi-Executive Coordination**: Unified deck synthesis across Operations (Brenneman), Finance (Lauber), and CEO Strategy (Neblett)
- **Executive Summary Automation**: One-page board summary distilling quarter into 5-7 key messages
- **Board Committee Reports**: Focused presentations for Audit, Finance, Compensation, Governance committees
- **Emergency Briefings**: Rapid situation analysis for urgent board decisions
- **Speaker Notes & Q&A Prep**: Detailed talking points and anticipated board questions

## Quick Start (10 Minutes)

### 1. Install Required MCPs
```bash
# Required MCPs (must have all four)
- Asana MCP (strategic initiative tracking)
- Salesforce MCP (operational metrics, revenue data)
- Finance GL Integration (financial performance data)
- Filesystem MCP (board templates, historical presentations)

# Required Skill
- PPTX skill (PowerPoint deck generation)
```

### 2. First Board Deck Request
Try: `"Generate Q1 2025 board presentation covering financial performance, operational metrics, strategic initiative status, risk assessment, and Q2 outlook. Board meeting April 25, 60-minute presentation."`

### 3. Common Requests

**Quarterly Board Preparation:**
- `"Create complete Q2 board deck with full financial, operational, and strategic sections"`
- `"Generate executive summary for Q3 board meeting (one-page overview)"`
- `"Update Q1 board deck with final financial close numbers"`

**Committee Reporting:**
- `"Create Audit Committee report for Q1 focusing on controls and compliance"`
- `"Generate Finance Committee presentation on capital allocation and forecasts"`
- `"Prepare Governance Committee update on strategic initiatives and risks"`

**Multi-Executive Coordination:**
- `"Generate initial board deck draft covering all three executive domains. Flag sections needing Brenneman, Lauber, and Neblett review."`
- `"Coordinate Q2 board prep workflow with review schedule for three executives"`

**Emergency Briefings:**
- `"Create emergency board briefing on [M&A opportunity] with situation overview, financial impact, strategic implications, and decision framework"`
- `"Generate crisis response briefing for emergency board call in 2 hours"`

**Speaker Notes:**
- `"Add detailed speaker notes to board presentation with talking points and Q&A preparation"`
- `"Create board Q&A prep document covering likely questions on financial performance and strategic initiatives"`

## ROI Summary

| Metric | Value |
|--------|-------|
| **Time Savings (3 Executives)** | 388 hours/year |
| **Direct Time Value** | $116,400/year |
| **Strategic Capacity Gained** | $315,600/year |
| **Total Annual Value** | **$450,000+** |
| **Investment** | $6,240/year ongoing |
| **ROI** | **7,115%** |
| **Payback Period** | **14 days** |

## Target Users

### Primary Users (Multi-Executive)
- **Charlie Brenneman** (SVP Operations): Operational performance, strategic initiatives, resource utilization
- **Scott Lauber** (President & CFO): Financial performance, forecasts, covenant compliance, capital allocation
- **Jeff Neblett** (CEO): Strategic narrative, competitive positioning, organizational health, forward strategy

### Extended Users
- Board Relations Executives
- Chief Strategy Officers
- Investor Relations Leaders
- CFOs and Controllers preparing board financials
- COOs preparing operational board updates

## Typical Workflow (Board Prep)

### Day 1 (10 days before board meeting): Generation
**Morning (9:00 AM):**
Executive assistant or designated executive initiates board deck generation:
```
"Generate Q1 2025 board presentation. Include financial performance, operational metrics,
strategic initiative portfolio status, risk assessment, and Q2 outlook. Board meeting is
April 25, 60-minute presentation for 5 board members."
```

**Output (9:25 AM - 25 minutes later):**
- Complete 35-slide PowerPoint deck with ISPN branding
- One-page executive summary (PDF)
- Speaker notes for each slide
- Q&A preparation document
- All files saved to `/Board-Reports/2025-Q1/Draft/`

### Day 2-3: Executive Review
**Day 2 (2:00 PM):** Coordinated executive review session
- Brenneman reviews operational slides (15-22): 2 hours
- Lauber reviews financial slides (2-8): 2.5 hours
- Neblett reviews strategy and exec summary (1, 23-32): 2 hours
- **Total review time: 6.5 hours combined**

Executives provide feedback:
- Brenneman: "Update digital CRM initiative status - vendor negotiations concluded, revised timeline July 15"
- Lauber: "Adjust Q2 revenue forecast to $15.6M (up from $15.4M) based on latest pipeline"
- Neblett: "Strengthen competitive wins narrative with specific customer names"

### Day 4: Refinement
**Morning (9:00 AM):** Apply executive feedback
```
"Update Q1 board deck with three executive revisions:
1. Digital CRM initiative - vendor negotiations concluded, revised completion July 15
2. Q2 revenue forecast increased to $15.6M based on pipeline
3. Add specific customer names to competitive wins narrative: [list provided]"
```

**Output (9:10 AM - 10 minutes later):**
- Updated board deck with all revisions incorporated
- Consistency check across all three executive domains
- Final version saved to `/Board-Reports/2025-Q1/Draft-Final/`

### Day 5: Final Review
**Morning:** Each executive reviews final deck (30 minutes each = 1.5 hours total)
- Final approval from all three executives
- File moved to `/Board-Reports/2025-Q1/Final/Q1-2025-Board-Deck-Final.pptx`
- Distribution to board portal

### Total Time Investment
**With Claude Desktop:** 8 hours total (6.5 hours review + 1.5 hours final approval)
**Without Claude Desktop:** 120 hours total (40 hours × 3 executives)
**Time Saved:** 112 hours per quarter = **448 hours annually**

## Board Deck Structure

Standard quarterly board presentation structure (customizable):

1. **Executive Summary** (1 slide): Quarter at a glance, key achievements, critical decisions
2. **Financial Performance** (5-7 slides): Revenue, profitability, cash flow, covenants, forecasts
3. **Operational Performance** (4-6 slides): Service delivery, customer metrics, team performance
4. **Strategic Initiative Portfolio** (5-8 slides): Initiative health, critical deep-dives, ROI analysis
5. **Risk Assessment** (2-3 slides): Enterprise risks, mitigation strategies, early warnings
6. **Q[N+1] Outlook** (3-5 slides): Forecast, priorities, investment requests, board decisions
7. **Appendix** (8-12 slides): Backup data, detailed financials, Q&A preparation

## Support & Documentation

- **Full documentation**: See `SKILL.md` for comprehensive capability overview
- **Implementation guidance**: See `instructions.md` for technical setup and system prompts
- **Example outputs**: See `examples/example1_quarterly_board_deck.md` for complete sample
- **Skill metadata**: See `metadata.json` for targeting and prerequisites

## Prerequisites

### Required System Access
- Asana access to strategic initiative projects
- Finance GL access for financial performance data
- Salesforce access for operational and revenue metrics
- Filesystem access to board templates and historical presentations

### Required Skills
- PPTX skill for PowerPoint deck creation

### Data Quality Requirements
- Financial data available within 5 business days of month-end
- Asana strategic initiatives updated weekly minimum
- Board presentation templates current with ISPN branding

## Success Criteria

Successful board deck generation when:

**Speed:**
- Initial deck generation: <30 minutes
- Executive review cycles: <2 iterations
- Total prep time: <8 hours (vs. 120 hours manual)

**Quality:**
- Board satisfaction score: >8.5/10
- Data accuracy: 99%+ vs. source systems
- Zero contradictions across executive domains

**Impact:**
- Board decision velocity: 80%+ same-meeting decisions (vs. deferred)
- Executive time redeployed to strategic board prep (not deck creation)
- Board confidence in management reporting quality

## Troubleshooting

### Issue: Board deck missing data from specific systems
**Solution:** Verify all required MCPs are enabled and connected. Check MCP permissions for Asana, Finance GL, Salesforce access.

### Issue: Generated deck format doesn't match ISPN branding
**Solution:** Update board presentation template in `/Board-Reports/Templates/board-deck-template.pptx` with current branding. Claude will use template for formatting.

### Issue: Executive review feedback not properly incorporated
**Solution:** Provide specific instructions with context: "Update slide 12 financial forecast from $15.4M to $15.6M based on latest pipeline close data from Salesforce."

### Issue: Board deck needs last-minute updates 24 hours before meeting
**Solution:** Claude regenerates from live data sources in 5-10 minutes. Request: "Update Q1 board deck with latest financial close and [specific changes needed]."

## Next Steps

1. **Setup (Week 1)**: Configure required MCPs and verify data access
2. **Template Creation (Week 1)**: Establish board presentation template in Filesystem
3. **Pilot Quarter (Week 2-4)**: Generate board deck 10 days before meeting, conduct full executive review
4. **Measure Results (Week 4)**: Document time savings, quality metrics, board feedback
5. **Optimize (Ongoing)**: Refine prompting, output formats, and workflow based on learnings

## Best Practices

1. **Start 10 Days Before Board Meeting**: Allow time for executive review (not 48 hours before)
2. **Coordinate Executive Reviews**: Schedule Day 2-3 review sessions for all three executives
3. **Maintain Consistent Format**: Use same deck structure quarter-over-quarter for board familiarity
4. **Include Speaker Notes**: Critical for successful board presentation delivery
5. **Backup Data in Appendix**: 8-12 appendix slides for board Q&A preparation
6. **Version Control**: Save all drafts with timestamps for rollback capability
7. **Executive Summary First**: Can stand alone if board meeting shortened or emergency
8. **Board Decision Clarity**: Explicitly frame decisions with investment, rationale, alternatives, recommendation
9. **Quarterly Comparison**: Show current vs. prior quarter vs. year-ago (boards think in trends)
10. **Risk Transparency**: Don't sugarcoat—boards value proactive risk identification with mitigation plans

---

**Version:** 1.0 | **Last Updated:** 2025-01-12 | **Target Users:** Charlie Brenneman, Scott Lauber, Jeff Neblett (Multi-Executive)
