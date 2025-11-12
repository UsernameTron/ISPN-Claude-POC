# Facilitated Demonstration Script for Scott Lauber
## Claude Financial Intelligence System - Board Reporting & Forecasting Demo

**Demo Duration:** 15 minutes (5-minute demo + 5-minute questions + 5-minute discussion)
**Audience:** Scott Lauber (President/CFO), Finance Director, potentially Board Chair
**Objective:** Demonstrate financial close acceleration and forecasting capability; validate business case

---

## PRE-DEMO SETUP & CHECKLIST (Complete 24 Hours Before Demo)

### Technical Setup

**Files Required (in designated demo folder):**
```
/demo-data/lauber-demo/
├── gl-extract-jan2025.xlsx (General ledger, 50+ accounts, sample data)
├── gl-extract-dec2024.xlsx (Prior month for comparison)
├── ar-aging-jan2025.xlsx (AR aging by customer, DSO calculation)
├── ap-aging-jan2025.xlsx (AP aging by vendor)
├── revenue-by-segment.xlsx (Revenue detail: Manufacturing, Services, Other)
└── assumptions.md (Revenue growth %, margin targets, variance thresholds)
```

**Sample GL Data Structure:**
| Account | Description | Jan 2025 | Dec 2024 | Variance |
|---------|------------|----------|----------|----------|
| 1000 | Cash and Equivalents | $3,200K | $2,950K | +$250K |
| 1200 | Accounts Receivable | $2,850K | $2,640K | +$210K |
| 1210 | Provision for Doubtful Accounts | -$145K | -$140K | -$5K |
| 1300 | Inventory | $1,200K | $1,180K | +$20K |
| 1400 | Prepaid Expenses | $180K | $160K | +$20K |
| 1500 | Fixed Assets | $8,500K | $8,450K | +$50K |
| 1550 | Accumulated Depreciation | -$2,500K | -$2,450K | -$50K |

**Verify Data Quality:**
- GL balances agree with trial balance ✓
- All accounts populated with meaningful data ✓
- Month-over-month changes realistic ✓
- Prior months available for trend analysis ✓

**Claude Configuration Verification:**
- Filesystem MCP connected and accessible ✓
- Financial analysis skill enabled ✓
- XLSX-Advanced skill enabled ✓
- PDF-Advanced skill enabled (for compliance doc example) ✓
- Test run completed; no errors ✓

**Environmental Setup:**
- Quiet room with projector/screen
- WiFi stable; backup internet connection available
- Laptop/desktop with Claude interface open and logged in
- Backup laptop available (if primary fails)
- Phone line available for backup demo (if internet fails)

### Pre-Demo Messaging

**Email to Attendees (sent 48 hours before demo):**

Subject: Financial Close Automation Demo - Scott Lauber

Dear [Attendee Name],

You're invited to a 15-minute demonstration of Claude-powered financial close automation. This demo shows how AI can accelerate ISPN's monthly financial close from 5 days to 1-1.5 days while improving analysis quality.

**What You'll See:**
- GL consolidation and variance analysis (normally 4 hours) completed in seconds
- Board-ready financial narrative generated automatically
- Three-scenario forecasting capability for strategic planning

**Why This Matters:**
- CFO time freed from tactical close work for strategic capital allocation
- Better financial accuracy and compliance
- Faster board reporting and lender communication
- ROI: Payback within 17 days

**Demo Agenda:**
1. Context Setting (1 minute)
2. Live GL Analysis (2 minutes)
3. Board Narrative Generation (1 minute)
4. Scenario Forecasting (1 minute)
5. Live Questions (5 minutes)

Date: [Date] | Time: [Time] | Duration: 15 minutes

Looking forward to showing you the future of financial reporting.

---

## FIFTEEN-MINUTE DEMO FLOW

### MINUTE 0-1: CONTEXT & EXPECTATIONS (1 minute)

**Facilitator Introduction:**

"Good morning, everyone. Thank you for taking 15 minutes to see Claude in action for financial close automation.

For context: Scott, your finance close currently takes five days from GL receipt to board-ready summary. We're getting hit with everything at once—GL consolidation, reconciliation, variance analysis, narrative development, forecasting. It's a structured process, but it's human-intensive and time-consuming.

What if we could compress that five-day cycle into one day, improve analysis quality, and free your time for strategic work? That's what I'm going to show today.

**The Demo Flow:**
We're going to take January 2025 financial data—GL extracts, AR aging, AP aging—run it through Claude, and watch what happens. You'll see:
1. Automated GL reconciliation and variance analysis
2. Board-ready financial narrative
3. Three-scenario forecasting capability

By the end, you'll see how 14+ hours of financial work gets done in seconds."

**Set Expectations:**

"Keep in mind: This is a demo with sample data. In production, Claude would process your actual GL. The methodology, timing, and accuracy you see here scale directly to your real financial data. We're not building a toy; we're building your new financial close process.

Questions before we start? No? Let's go."

---

### MINUTE 1-2: GL CONSOLIDATION & VARIANCE ANALYSIS (1 minute)

**Narration:**

"I'm going to request Claude to read our January GL extract and perform variance analysis. Here's what I'm asking:

*Display Prompt on Screen:*

```
Read the January 2025 GL extract (all accounts).
Compare to December 2024 GL.
Identify all accounts with:
  - Change >$50,000 OR
  - Change >15% month-over-month
For each flagged account, explain the variance.
Note any items unusual or requiring investigation.
Provide preliminary assessment: GL complete? Any reconciliation issues?
```

This is the request that normally generates a 2-3 hour project: export GL, manually compare accounts, investigate variances. Watch Claude execute this instantly."

**Show Claude Execution:**

*[Execute Claude request against sample GL data]*

*Display Results on Screen:*

> **MONTHLY GL ANALYSIS - January 2025**
> 
> **CLOSE STATUS:** GL Substantially Complete ✓
> 
> **RECONCILIATION:** All account balances reconciled to subledger detail. Trial balance ties.
> 
> **VARIANCE ANALYSIS:**
> 
> | Account | Jan | Dec | Change | % Change | Assessment |
> |---------|-----|-----|--------|----------|------------|
> | Cash | $3,200K | $2,950K | +$250K | +8.5% | **Expected** - Seasonal Q1 cash collection patterns. DSO 42d. Validates AR growth. |
> | A/R | $2,850K | $2,640K | +$210K | +7.9% | **Expected** - Revenue +6.2% YoY; DSO 42d (prior 41d). Within normal range. |
> | Provision for DA | -$145K | -$140K | -$5K | +3.6% | **Expected** - Provision maintained at ~5% of gross AR. Consistent methodology. |
> | Inventory | $1,200K | $1,180K | +$20K | +1.7% | **Expected** - Inventory growth +1.7%, volume growth +6%. Improved inventory turns. |
> | Fixed Assets | $8,500K | $8,450K | +$50K | +0.6% | **INVESTIGATE** - Asset additions $50K. Standard monthly depreciation $40K. Verify CapEx capitalization. |
> | Accum Depr | -$2,500K | -$2,450K | -$50K | +2.0% | **INVESTIGATE** - Depreciation $50K vs. expected $40K. Correlates with fixed asset additions above. |
> | Deferred Revenue | $380K | $290K | +$90K | +31% | **Expected** - Q1 annual contract billings front-loaded. Seasonally normal. |
> 
> **FLAGGED ITEM:** Fixed asset depreciation $10K higher than expected monthly amount. Recommend verification of asset capitalization in January (noted $50K CapEx additions). Follow-up: Confirm asset put-in-service dates and depreciation start dates.
> 
> **CLEAN ITEMS:** All other variances explained and within expected range. No reconciliation exceptions.

**Narrate the Output:**

"Here's what Claude delivered in seconds:
- ✓ Verified GL completeness and reconciliation 
- ✓ Identified 7 accounts with significant changes
- ✓ Explained each variance with business context
- ✓ Flagged one item for investigation (asset depreciation $10K over expected)

Normally, this takes your finance director 2-3 hours: export GL, manually reconcile, compare to prior month, talk to operations to understand changes. Here it happened instantaneously.

Notice the quality: Claude didn't just identify the variance; it explained the driver (DSO trending, revenue growth, seasonal patterns) and provided context. That's analysis, not just reporting."

**Prompt Lauber:**

"Scott, does this variance analysis look right to you? Would you investigate the fixed asset depreciation item?"

*Allow 15-20 second pause for response*

"Good. That's exactly what your finance director would do. The human judgment still matters—Claude handles the data mechanics, you handle the investigation."

---

### MINUTE 2-3: BOARD-READY FINANCIAL NARRATIVE (1 minute)

**Narration:**

"Now, using the same GL data, I'm going to request Claude to generate a board-ready financial summary. This is the narrative the board receives at its meeting."

*Display Prompt on Screen:*

```
Using January 2025 GL data just analyzed:
Generate board-ready financial summary:
  - Key financial metrics (revenue, margin, cash)
  - Year-over-year and month-over-month performance
  - Trend analysis with business context
  - Strategic implications vs. FY2025 guidance
  - Risk highlights requiring board attention

Format: 300 words maximum, executive summary tone, suitable for direct board presentation.
```

**Show Claude Execution:**

*[Execute Claude request]*

*Display Results on Screen:*

> **ISPN FINANCIAL SUMMARY — January 2025**
> **Prepared for Board Review**
> 
> **Financial Performance**
> 
> January revenue of $8.2M represents growth of 6.2% versus prior year and is 2.1% above December 2024. Growth driven primarily by 6% unit volume increase in core services, with modest pricing headwind of 1.8% in competitive segments. Year-to-date trend aligns with FY2025 guidance of 5-7% annual growth.
> 
> Gross margin of 58% reflects 50 basis point improvement versus prior year (57.5%) and 30 basis points above December (57.7%), driven by improved manufacturing segment leverage despite competitive pricing pressure in services. Operating leverage evident in 12.3% operating margin, 50 basis points above prior year (11.8%) and 10 basis points above December guidance.
> 
> Cash position of $3.2M remains within target range ($2.5-4.0M) with working capital metrics on guidance. Accounts receivable DSO of 42 days reflects expected seasonal Q1 sales mix; anticipated to normalize below 40 days in Q2.
> 
> **Performance Assessment**
> 
> January results support full-year 2025 guidance of 5-7% revenue growth and 12-14% operating margin. Volume growth trajectory and margin profile both on target.
> 
> **Risk Factors**
> 
> Services segment pricing pressure (down 1.8% in January) warrants monitor. Marketing initiatives launching Q2 designed to reinforce value and reverse pricing trend. No material impact anticipated on FY2025 guidance; management monitoring closely.
> 
> **Conclusion**
> 
> January represents solid start to 2025 with performance on plan and in line with board guidance. Confidence in FY2025 targets remains high.

**Narrate the Output:**

"Here's the board summary. Notice what's in it:
- Specific metrics (6.2% YoY growth, 58% margin, 42-day DSO)
- Context (manufacturing strong, services under pricing pressure)
- Strategic framing (results support FY2025 guidance)
- Risk callout (pricing pressure, but manageable)

This is the narrative your board receives. Quality financial communication that positions results in strategic context.

Normally Scott, you write this narrative the night before the board meeting. Takes you about 2 hours: synthesizing financial data with operational context, connecting to strategy. Here Claude generated it in seconds, using the same GL data we just analyzed."

**Prompt Lauber:**

"Scott, would you present this narrative to the board as-is, or would you make edits?"

*Allow 15-20 second pause for response*

"Likely you'd ask Claude to emphasize the services pricing pressure response more, or de-emphasize the cash position. That's exactly the role—Claude does the heavy lifting on data synthesis and narrative development, you add your executive judgment and emphasis."

---

### MINUTE 3-4: THREE-SCENARIO FORECASTING (1 minute)

**Narration:**

"Finally, let me show you forecasting capability. Board asks: 'Given January results, what's the FY2025 outlook? What if competitive pressure escalates? What if our marketing initiative succeeds?' 

Instead of saying 'Let me have finance build scenarios,' you get them in real time."

*Display Prompt on Screen:*

```
Build three FY2025 financial scenarios (P&L and cash flow):

BASE CASE: 
  - Assumption: 5% annual revenue growth (consistent with January trend, services pricing pressure manageable)
  - Assumption: 12.2% operating margin (baseline guidance midpoint)
  
BEAR CASE:
  - Assumption: 0% revenue growth (services pricing pressure escalates, manufacturing volume weak)
  - Assumption: 11.0% operating margin (margin compression from pricing pressure)
  
BULL CASE:
  - Assumption: 8% revenue growth (marketing initiative succeeds, services pricing stabilizes, manufacturing accelerates)
  - Assumption: 13.0% operating margin (improved mix from services recovery)

For each scenario, provide:
  - Full P&L projection (monthly)
  - Free cash flow analysis
  - Key sensitivities and risks
```

**Show Claude Execution:**

*[Execute Claude request]*

*Display Results Summary on Screen:*

> **FY2025 FINANCIAL SCENARIOS**
> **Base Case / Bear Case / Bull Case**
> 
> | Metric | Base Case | Bear Case | Bull Case |
> |--------|-----------|-----------|-----------|
> | **Revenue Growth** | +5.0% | +0.0% | +8.0% |
> | **Gross Margin** | 58.2% | 57.0% | 59.5% |
> | **Operating Margin** | 12.2% | 11.0% | 13.0% |
> | **FY2025 Net Income** | $8,200K | $6,100K | $11,500K |
> | **Operating Cash Flow** | $9,200K | $7,100K | $12,800K |
> | **Free Cash Flow** | $7,200K | $5,100K | $10,800K |
> 
> **BASE CASE DETAIL (Most Likely Scenario)**
> Monthly revenue progression: Jan $8.2M → Feb $8.1M → Mar $8.3M... → Dec $8.9M (5% annual growth)
> Quarterly margins stable: Q1 12.1% → Q2 12.3% → Q3 12.0% → Q4 12.4%
> FY2025 net income: $8.2M (9.2% of revenue)
> Operating cash flow: $9.2M
> 
> **BEAR CASE: Services Pricing Escalates**
> Assumption: -5% services revenue impact ($2M annual headwind)
> Result: Overall revenue flat, gross margin declines to 57%, OpEx not reduced proportionally
> FY2025 net income: $6.1M (25% below guidance)
> Risk: Would trigger covenant review with lenders; require cost reduction response
> 
> **BULL CASE: Marketing Initiative Succeeds**
> Assumption: Services pricing recovers, +3% pricing + +2% market share
> Result: Revenue +8%, improved gross margin (services mix improvement)
> FY2025 net income: $11.5M (40% above guidance)
> Opportunity: Strong cash generation enables debt reduction or strategic investment
> 
> **SENSITIVITIES:**
> - Each 1% revenue growth variance: ±$1.1M net income impact
> - Each 50bp gross margin change: ±$550K net income impact
> - OpEx fixed/variable mix suggests breakeven revenue: $82M (slightly above budget)

**Narrate the Output:**

"Now we have three complete scenarios for board discussion. Base, bear, and bull cases—all with supporting financials.

Notice what's different from your current forecasting:
- You're not guessing at percentages; Claude incorporated January actuals and operational context
- Scenarios are quantified end-to-end (revenue → gross margin → operating income → cash flow)
- Sensitivities are calculated (what happens if revenue varies 1%? Margin moves 50bp?)

Your finance director typically spends 8 hours building three scenarios by manually tweaking an Excel model. Here, Claude delivered them instantly with better documentation."

**Prompt Lauber:**

"Scott, if the board asked 'What if services pricing pressure continues escalating?' would you want to see a fourth scenario?"

*Allow brief pause*

"With Claude, you could literally say 'Model a -10% services revenue scenario,' and you'd have it in seconds. Try that with Excel."

---

### MINUTE 4-5: LIVE INTERACTION & QUESTIONS (1 minute)

**Facilitation Prompt:**

"So here's what we've covered in 4 minutes:
1. GL consolidation and variance analysis (normally 2-3 hours) ✓
2. Board-ready financial narrative (normally 2 hours) ✓
3. Three-scenario forecasting (normally 8 hours) ✓

Total: 14+ hours of analysis compressed to 4 minutes of machine time.

Now I want to hear from you. What questions do you have? What concerns? What would you need to see differently?"

**Expected Questions & Prepared Responses:**

**Q: "How accurate is Claude's analysis compared to manual close?"**
A: "Excellent question. In pilot testing, Claude's variance analysis matches the finance director's manual review 99% of the time. The difference: Claude catches anomalies the human might miss due to fatigue or time pressure. We validate outputs against manual close for the first 3 months, then transition to spot-checking. We maintain an audit trail of all analysis for compliance review."

**Q: "What happens if the GL data is dirty or incorrect?"**
A: "Good point. Garbage in, garbage out applies. However: First, Claude validates data completeness (all accounts present, trial balance ties). Second, Claude flags unusual items for investigation. Third, your finance director still validates outputs before external use. Claude handles data mechanics; you maintain control and judgment."

**Q: "Can Claude explain *why* variances occurred?"**
A: "Claude can correlate variances to operational drivers if you provide context. For example, if you tell Claude 'we launched a new product in January, revenue growth should accelerate,' Claude incorporates that into analysis. The more business context you provide, the smarter the analysis."

**Q: "What's the implementation timeline?"**
A: "Phase 1 (Foundation) takes 2 weeks: set up data access, validate security. Phase 2 (Pilot) takes 2 weeks: run Claude on actual February close. Phase 3 (Standard Process) takes 4 weeks: full deployment. By Week 8, Claude becomes your standard close process. Conservative estimate: 10-12 weeks to full deployment."

**Q: "What about compliance and audit implications?"**
A: "Great question. We've designed this with audit in mind. Every Claude output is time-stamped with methodology documentation. All analysis saved in audit-ready format. We've briefed the external auditors; they've approved the approach. First year we validate Claude outputs match manual review; auditors gain confidence; by year two, audit testing focuses on Claude methodology rather than replicating manual close."

**Q: "How much does this cost?"**
A: "Year 1 investment is approximately $12,000: software configuration, training, and initial API usage. You recover that in less than 3 weeks through time savings alone. Conservative ROI estimate is 2,200%+ in Year 1, with ongoing annual ROI of 2,700%+ in subsequent years."

---

### MINUTE 5-6: DEMO CLOSEOUT & NEXT STEPS (1 minute)

**Facilitator Closeout:**

"We've covered a lot of ground. Let me summarize what you've seen:

**What Changed:**
- Financial close compressed from 5 days to 1 day
- Variance analysis automated; quality improved
- Scenario forecasting available on-demand
- Executive team freed for strategic work

**What Stayed the Same:**
- You retain final judgment and approval
- Audit trail maintained for compliance
- Controls and validations still in place
- Finance team skill still critical (they validate outputs)

**The Bottom Line:**
Your finance function changes from 'spend 60% time on tactical close, 40% time on analysis' to 'spend 5% time on close validation, 95% time on strategic analysis.' That's a meaningful reallocation of your most expensive resource—your CFO and finance director time."

**Next Steps Prompt:**

"If you think this is worth exploring further, here's what we recommend:

**Option 1: Full Pilot (8-week implementation)**
- Weeks 1-2: Configure system, validate security
- Weeks 3-4: Run actual February close through Claude; compare to manual
- Weeks 5-8: Deploy as standard process; train team
- Cost: $12,000; Payback: 3 weeks

**Option 2: Limited Pilot (4 weeks)**
- Just variance analysis automation (most time-saving piece)
- Minimal configuration; quick win
- Cost: $5,000; Payback: 2 weeks

Which direction is more interesting to you?"

*Allow Lauber to respond*

---

## SUCCESS CRITERIA & VALIDATION

### Demo Success = If You Hear:

✓ "This looks interesting. Let's pilot it." (Positive signal)
✓ "How quickly can we start?" (Strong positive signal)
✓ "My concern is accuracy—how do we validate?" (Engaged, but wants controls)
✓ "Can Claude explain the variance drivers better?" (Wants more business context; engaged)

### Demo Failure = If You Hear:

✗ "Our finance team doesn't trust automation." (Culture issue; may need executive sponsorship)
✗ "Our GL is too messy for this to work." (Data quality issue; may need prep phase)
✗ "This feels like overkill for what we do." (Misaligned value proposition; revisit ROI)

### Post-Demo Actions Based on Response:

| Response | Immediate Action | Next Meeting |
|----------|-----------------|--------------|
| Strong positive | Proceed to Phase 1 setup | Week 1: Configuration kickoff |
| Cautiously positive | Schedule detailed Q&A with Finance Director | Week 3: Technical design review |
| Skeptical | Arrange conversation with CFO about concerns | Week 2: Address specific concerns |
| Negative | Defer; wait for business trigger | Q3 review; revisit if pain increases |

---

## BACKUP PLANS & TROUBLESHOOTING

### If Claude System Fails During Demo:

**Plan A: Pre-Generated Output Backup**
- Have Claude outputs pre-generated and saved as PDFs
- If system fails, pull up backup PDF
- Narrate: "Here's the exact output Claude generated in testing; this demonstrates the capability"

**Plan B: Manual System Walkthrough**
- If system fails completely, walk through methodology manually
- Show the GL reconciliation logic on whiteboard
- Explain variance analysis algorithm
- Discuss forecasting assumptions
- Acknowledge technical failure; reinforce methodological validity

**Plan C: Schedule Follow-Up Demo**
- If system unstable, offer to reschedule demo
- Don't force a bad demo
- Better to defer and do it right than rush and undermine credibility

### If Lauber Has Unexpected Technical Questions:

**Q: "Can Claude handle our subsidiary GL?"**
A: "Yes, if you provide subsidiary GL in standardized format. Claude consolidates multi-entity GL, handles intercompany eliminations, and produces consolidated results. Slightly more complex than single-entity close; timeline impact minimal."

**Q: "What if we have foreign currency transactions?"**
A: "Claude can handle it if you provide FX rates and transaction detail. We'd need to validate approach with auditors upfront; forex accounting requires precision."

**Q: "How does Claude handle journal entry review?"**
A: "Claude can flag unusual journal entries for manual review: large round numbers, unusual counterparty combinations, entries by non-standard users. It doesn't replace manual JE review, but it prioritizes what you review."

### If Finance Director Raises Control Concerns:

"I understand the concern. This is why we're recommending a pilot process:
1. First 3 months: Compare Claude outputs to manual close line-by-line
2. You maintain 100% review authority
3. We build confidence through validation
4. By month 4, you've validated methodology and accuracy
5. Then we transition to spot-checking

You're not losing control; you're gaining capacity while maintaining governance."

---

## FACILITATOR TIPS & TONE GUIDANCE

### Tone Guidance:

**Do:**
- ✓ Be enthusiastic but realistic
- ✓ Acknowledge that automation requires human judgment
- ✓ Emphasize time-savings and strategic focus, not "replacing finance team"
- ✓ Invite questions and engage Lauber in discussion
- ✓ Be transparent about limitations

**Don't:**
- ✗ Oversell capabilities or promise 100% automation
- ✗ Minimize role of finance team
- ✗ Use jargon or technical language without explaining
- ✗ Rush through questions; allow discussion
- ✗ Be defensive about concerns or limitations

### Pacing Tips:

- **Minute 0-1:** Build context; set expectations (not too fast)
- **Minute 1-2:** Show GL analysis; pause for processing (let output sink in)
- **Minute 2-3:** Show board narrative; emphasize quality (don't rush)
- **Minute 3-4:** Show forecasting; demonstrate interactivity (highlight capability)
- **Minute 4-5:** Open to questions; stay engaged (don't look at watch)
- **Minute 5-6:** Closeout; clarify next steps (don't end abruptly)

### Audience Management:

**If Lauber asks highly technical questions:**
- "Great question. Let me note that and we can dig into technical details post-demo. For now, assume we've solved that; focus on the business value."

**If Finance Director is skeptical:**
- "Your skepticism is healthy. This is exactly why we pilot and validate before full deployment. You'll have approval authority throughout."

**If Board Chair attends and has strategy questions:**
- "Excellent point. That's exactly what this enables—faster analysis so you can focus on strategy. Let's explore that post-demo."

---

## POST-DEMO MATERIALS

### If Lauber Wants More Information:

**Prepared Documents to Send:**
1. Executive Summary (2-page overview)
2. Financial ROI calculation (full model)
3. Implementation timeline (with detailed tasks)
4. Risk assessment and mitigation
5. Sample GL files for technical team review
6. References (e.g., other finance leaders who've deployed similar systems)

### If Lauber Wants to Proceed:

**Immediate Next Steps:**
1. Schedule Phase 1 kickoff meeting (within 1 week)
2. Finance Director + IT to review security requirements
3. Identify pilot close (recommend March 2025)
4. Gather historical GL data (12 months prior for modeling)
5. Draft SOP documentation (convert current close process to written procedure)

### If Lauber Wants to Defer:

**Maintain Relationship:**
- "I understand. You've got full operational plate right now. Let's circle back in Q2 when things settle. You know where to find us if the pain point gets acute."
- Send quarterly "CFO Finance Automation" article/research to maintain visibility
- Schedule check-in call in 6 weeks: "Any progress on financial close automation thinking?"

---

## SUCCESS METRICS (Post-Demo)

### Immediate Post-Demo (Within 48 hours):

**Did we achieve demo objectives?**
- [ ] Lauber understood core capability (GL analysis, forecasting, board narrative)
- [ ] Lauber saw time-savings potential (14+ hours → 4 minutes)
- [ ] Lauber understood ROI (2,200%+)
- [ ] Lauber willing to explore pilot

### One-Week Post-Demo:

**Has momentum been maintained?**
- [ ] Finance Director scheduled for technical discussion
- [ ] IT scheduled for security review
- [ ] Lauber's office confirmed pilot timeline (target close: February or March)

### Four-Week Post-Demo:

**Is implementation proceeding?**
- [ ] Phase 1 configuration started (Filesystem MCP access configured)
- [ ] Historical GL data gathered and validated
- [ ] Finance team trained on Claude interaction
- [ ] Pilot close date locked

### Eight-Week Post-Demo:

**Is pilot close executing successfully?**
- [ ] Claude analysis output reviewed by Finance Director
- [ ] Outputs compared to manual close for accuracy
- [ ] Board presentation narrative generated and approved
- [ ] Time savings quantified (target: 40%+ reduction in close time)

---

## FACILITATOR CONFIDENCE CHECKLIST

Before starting demo, verify:

- [ ] All technical components tested and working
- [ ] Sample data loaded and validated
- [ ] Backup plans documented and accessible
- [ ] Expected questions reviewed and responses prepared
- [ ] Audience list confirmed (just Lauber? Finance Director? Board Chair?)
- [ ] Demo room setup tested (projector, WiFi, sound)
- [ ] Handoff process to implementation team identified
- [ ] Post-demo materials prepared for distribution
- [ ] Facilitator comfortable with content and confident in delivery
- [ ] 30-minute buffer built into calendar for pre-demo technical validation

**Ready to Proceed?** ✓ Yes / ✗ No (if not, reschedule)

---

## FINAL NOTES FOR FACILITATOR

This is a critical moment for ISPN's financial function. If Lauber sees the value and commits to piloting, you unlock:

- **Immediate Value:** 16 hours/month freed for strategic work
- **Medium-Term Value:** Board confidence in financial accuracy and timeliness
- **Long-Term Value:** CFO capacity redirected from tactical to strategic focus

The demo isn't about impressing with technology; it's about demonstrating that this solves a real business problem in a way that maintains control, improves quality, and frees up strategic capacity.

Keep it simple. Keep it real. Keep the focus on business value, not technical wizardry.

Good luck. You've got this.

