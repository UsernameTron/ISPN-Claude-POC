# Example 1: Customer Portfolio Health Analysis with Churn Prediction

## Scenario Context

**Situation:** Quarterly customer health review before executive team meeting
**Objective:** Identify at-risk renewals proactively with 90-180 day advance warning
**Current Challenge:** Churn discovered reactively at renewal time (9-12 months too late)
**Desired Outcome:** Proactive retention strategies with executive escalation plan and expansion pipeline

## User Request

> "Analyze customer health across all 47 active accounts. Flag at-risk renewals in next 90 days with churn probability estimation. Prioritize by ARR value at risk and provide specific retention action plans. I need to present this to the executive team on Friday."

## Claude's Analysis Process

### Step 1: Data Collection Across Systems

**Salesforce CRM Data:**
- 47 active K-12 school district accounts
- Total portfolio ARR: $4.23M
- Contract details, renewal dates, customer tenure
- Historical expansion patterns and relationship history
- Account executive and CSM assignments

**Zendesk Support Data (Past 90 Days):**
- Support ticket volume, severity, resolution time
- Escalation patterns and recurring issues
- Customer satisfaction scores (CSAT) from ticket closures
- Open critical issues requiring resolution

**Engagement Signals:**
- QBR attendance history (scheduled, completed, cancelled, no-shows)
- Email responsiveness patterns (reply time, engagement level)
- Portal login frequency (usage of self-service tools)
- Meeting acceptance rate (responsiveness to outreach)

**Product Usage Data:**
- Bandwidth utilization trends (increasing, stable, declining)
- Network uptime and service availability metrics
- Service adoption breadth (using all contracted services vs subset)

**Sentiment Analysis:**
- Email tone analysis (positive, neutral, negative keywords)
- Support ticket sentiment (frustration indicators, appreciation signals)
- Competitive signals (pricing inquiries, RFP mentions)
- Budget pressure indicators

### Step 2: Multi-Factor Health Score Calculation

**Health Scoring Model Applied (0-100 scale):**

**Support Quality (25% weight):**
- Ticket volume, escalations, resolution time, SLA adherence, CSAT scores

**Engagement (25% weight):**
- QBR attendance, email responsiveness, portal usage, meeting acceptance

**Product Usage (20% weight):**
- Bandwidth utilization, uptime performance, service adoption

**Relationship Strength (15% weight):**
- Customer tenure, expansion history, reference/advocacy participation

**Sentiment (15% weight):**
- Communication tone, escalation patterns, competitive signals, budget pressure

### Step 3: Churn Probability Modeling with Risk Multipliers

**Base Probability by Health Score:**
- Red (0-59): 60-80% churn probability
- Yellow (60-79): 30-50% churn probability
- Green (80-100): 5-15% churn probability

**Risk Multipliers Applied:**
- Renewal <90 days: +20% churn probability
- Leadership change (new superintendent/tech director): +15%
- Budget pressure detected: +10%
- Competitive inquiry or RFP: +25%
- Recent service outage: +15%
- Engagement decline: +10%

## Generated Analysis Output

---

# CUSTOMER HEALTH INTELLIGENCE ANALYSIS
## Quarterly Portfolio Review - Q1 2025

**Analysis Date:** January 15, 2025
**Customer Portfolio:** 47 active K-12 school district accounts
**Total Portfolio ARR:** $4.23M
**Renewals Next 90 Days:** 8 accounts ($847K ARR)

---

## EXECUTIVE SUMMARY

### Portfolio Health Overview

| Health Status | Count | % of Portfolio | ARR Value | Avg Health Score |
|---------------|-------|----------------|-----------|------------------|
| 🟢 Green (Healthy) | 34 | 72% | $3,105K | 87/100 |
| 🟡 Yellow (Watch) | 9 | 19% | $732K | 68/100 |
| 🔴 Red (Critical) | 4 | 9% | $393K | 47/100 |
| **TOTAL** | **47** | **100%** | **$4,230K** | **82/100** |

### Key Insights & Recommended Actions

**IMMEDIATE RISK (Requires Executive Action This Week):**
- 4 Red accounts ($393K ARR) require executive intervention
- 2 Red accounts renew within 60 days ($215K ARR at immediate risk)
- Without intervention: $240K estimated churn (65% average probability)
- With proactive executive engagement: $295K retention potential (75% success rate)

**PROACTIVE OPPORTUNITY (CSM-Led Campaigns):**
- 9 Yellow accounts ($732K ARR) require proactive retention engagement
- Early intervention (90-120 days before renewal) increases retention success rate 3x
- Estimated value preservation: $650K of $732K at risk (89% success rate)

**EXPANSION PIPELINE (Revenue Growth):**
- 12 Green accounts showing expansion signals ($340K incremental ARR potential)
- Strong health + high usage + growth indicators = proactive outreach opportunity
- Proactive expansion deals close at 70% rate vs 40% reactive approach
- Expected expansion revenue: $211K (62% weighted close rate)

### Executive Actions Required

**THIS WEEK (January 15-19):**
1. **CEO Escalation Calls:** Lincoln County Schools + Jefferson Union HSSD (2 Red accounts, $275K ARR, 72%+ churn risk)
2. **VP Operations Technical Resolution:** Lincoln County network audit + equipment upgrade (service recovery)
3. **VP Customer Success Process Improvement:** Dedicated escalation contacts + proactive monitoring for all Red accounts

**NEXT 30 DAYS (January 20 - February 15):**
4. **Executive QBRs:** All 4 Red accounts with CEO/VP Sales/VP Operations attendance (relationship reset)
5. **Retention Proposals:** Customized retention offers for Red accounts (service credits, upgrades, pricing)
6. **Yellow Account Campaigns:** CSM-led proactive outreach to 9 Yellow accounts (prevent Red deterioration)

**ONGOING (Monthly Cadence):**
7. **Monthly Health Monitoring:** Shift from quarterly to monthly scoring (early deterioration detection)
8. **Expansion Pipeline Development:** Proactive outreach to 3 High Priority expansion opportunities

---

## RED ALERT: CRITICAL ACCOUNTS REQUIRING EXECUTIVE INTERVENTION

### 1. Lincoln County Schools - $180K ARR (Highest Priority)

**RENEWAL DATE:** March 15, 2025 (59 days)
**HEALTH SCORE:** 42/100 (Critical)
**CHURN PROBABILITY:** 72%
**VALUE AT RISK:** $180K ARR ($540K 3-year contract value)

#### Health Score Breakdown
```
Overall Score: 42/100 (RED - Critical Risk)

Support Quality:     6/25  ████░░░░░░░░░░░░░░░░░░░  (24%)
Engagement:          8/25  ███░░░░░░░░░░░░░░░░░░░░  (32%)
Product Usage:      10/20  █████░░░░░░░░░░░░░░░░░░  (50%)
Relationship:        8/15  █████░░░░░░░░░░░  (53%)
Sentiment:          10/15  ██████░░░░░░░░░  (67%)
```

**Support Quality Analysis (6/25 - Critical):**
- 12 escalated tickets in Q4 (vs 2-3 typical)
- 3 critical network outages (equipment failures)
- SLA adherence: 60% (vs 95% target)
- CSAT score: 2.8/5 (declining from 4.2/5 in Q3)

**Engagement Analysis (8/25 - Poor):**
- Missed last 3 consecutive QBRs (100% attendance historically)
- Email response time: 3-5 days (vs <24 hours historical average)
- Portal login frequency: 1x per month (vs 4-6x historical)
- Last meaningful contact: November 2024 (8 weeks ago)

**Product Usage Analysis (10/20 - Constrained):**
- Bandwidth utilization: 85% (capacity constrained, frustration indicator)
- Network uptime: 98.2% (vs 99.5% SLA target - below commitment)
- Service adoption: 4 of 5 services (WiFi not adopted yet)

**Relationship Analysis (8/15 - Weakening):**
- Tenure: 6 years (long-term customer, relationship erosion concerning)
- Expansion history: No expansions in 3 years (engagement stalled)
- Reference participation: Never (not an advocate)

**Sentiment Analysis (10/15 - Negative Trend):**
- Email tone: Negative/frustrated in 70% of recent communications
- Escalation pattern: Escalating directly to VP Operations (bypassing CSM)
- Competitive inquiry: Regional fiber provider contacted district December 2024
- Budget pressure: Superintendent mentioned "cost savings initiatives" in last call

#### Risk Factors Driving Churn Probability

**PRIMARY RISK FACTOR: Service Quality Deterioration**
- 3 network outages in Q4 (equipment failure, resolved but trust damaged)
- Support response time degradation (holiday staffing, but perception damage done)
- Technology director expressing frustration with repeat issues

**CRITICAL RISK MULTIPLIERS:**
1. **Leadership Change (+15% churn risk):** New superintendent started September 2024
   - Relationship not established (missed onboarding opportunity)
   - No executive engagement since superintendent transition
   - Previous relationship with former superintendent lost

2. **Competitive Threat (+25% churn risk):** Regional fiber provider active
   - Competitor approached district in December 2024 (timing opportunistic)
   - Pricing inquiry detected (business manager exploring alternatives)
   - Competitor leveraging Q4 service issues in positioning

3. **Budget Pressure (+10% churn risk):** District facing funding cuts
   - State funding reduced 8% for fiscal year
   - Superintendent mandate to reduce all vendor costs by 10-15%
   - Business manager reviewing all contracts >$100K

4. **Renewal Timing (<60 days, +20% churn risk):** Compressed timeline
   - Only 59 days to renewal (limited time for relationship repair)
   - Contract renewal decision window: February 15-March 1
   - Board approval required (adds complexity to process)

#### Churn Probability Calculation
```
Base Probability (Health Score 42):          70%
+ Renewal <60 days:                        +20% = 90%
+ Leadership change (new superintendent):  +15% = 105%
+ Competitive inquiry (active RFP):        +25% = 130%
+ Service quality issues (3 outages):      +15% = 145%

Risk-Adjusted Churn Probability: 72% (weighted average, capped at 95%)
```

#### Root Cause Analysis

**PRIMARY ISSUE:** Service quality deterioration in Q4 (equipment failures + slow support response)

**CONTRIBUTING FACTORS:**
1. **Equipment Failure:** Aging network equipment failed 3 times in Q4 (should have been proactively replaced)
2. **Support Response Time:** Holiday staffing shortages led to slower response times (customer perception of deprioritization)
3. **Relationship Gap:** New superintendent not engaged (relationship building opportunity missed)
4. **Communication Failure:** Technology director feeling unheard (escalating to VP Operations, bypassing CSM)
5. **Competitive Timing:** Competitor approached during service issues (opportunistic exploitation of vulnerability)

#### Value at Risk
```
Annual ARR:              $180,000
3-Year Contract Value:   $540,000
Customer Lifetime Value: $900,000 (estimated 5-year retention if saved)

Strategic Impact:
• Reference account loss (6-year customer, known in regional K-12 community)
• Competitive win story (competitor will leverage in market positioning)
• CSM team morale impact (losing long-term customer demoralizing)
```

#### Recommended Retention Strategy

**PHASE 1: IMMEDIATE ACTIONS (This Week - January 15-19)**

**Action 1: CEO Executive Call**
- **Owner:** CEO Jeff Neblett
- **Target:** Superintendent Dr. Sarah Martinez
- **Timing:** Friday, January 19 (3:00 PM confirmed)
- **Objective:** Welcome new superintendent, apologize for Q4 service issues, commit to resolution
- **Key Messages:**
  - Personal welcome to ISPN partnership (relationship building)
  - Acknowledgment of Q4 service failures (take ownership, no excuses)
  - Commitment to root cause resolution and prevention plan
  - Offer executive QBR next week (demonstrate commitment to partnership)
- **Success Criteria:** Superintendent agrees to executive QBR, expresses willingness to discuss renewal

**Action 2: VP Operations Technical Resolution**
- **Owner:** VP Operations Charlie Brenneman
- **Target:** Technology Director Tom Anderson
- **Timing:** Monday, January 20 (network audit), Wednesday, January 22 (resolution)
- **Objective:** Conduct root cause analysis, commit to equipment upgrades, resolve open tickets
- **Deliverables:**
  - Comprehensive network audit (identify equipment failure root cause)
  - Equipment upgrade plan (no cost to district - ISPN investment in relationship)
  - Expedited resolution of 2 open critical tickets (close by EOW)
  - Weekly proactive monitoring report (prevent future issues before impact)
- **Success Criteria:** Technology director acknowledges commitment, agrees to weekly check-ins

**Action 3: Support Process Improvement**
- **Owner:** VP Customer Success Ty Sorensen
- **Target:** All Lincoln County stakeholders
- **Timing:** In place by Friday, January 22
- **Objective:** Dedicated escalation contact, proactive monitoring, rebuild trust through communication
- **Improvements:**
  - Dedicated escalation contact (direct line to VP Operations, bypass normal channels)
  - Proactive monitoring alerts (identify issues before customer impact)
  - Weekly check-in calls with technology director (relationship rebuilding, not just reactive)
  - Monthly executive touchpoints (superintendent + business manager)
- **Success Criteria:** Process improvements in place, first proactive alert sent, weekly call scheduled

**PHASE 2: SHORT-TERM ACTIONS (Next 30 Days - January 20 - February 15)**

**Action 4: Executive QBR & Service Recovery Presentation**
- **Owner:** CEO Jeff Neblett + VP Sales Ty Sorensen + VP Operations Charlie Brenneman
- **Target:** Superintendent, Technology Director, Business Manager
- **Timing:** Week of January 27 (in-person meeting at district office)
- **Objective:** Service recovery presentation, root cause analysis, prevention plan, partnership vision
- **Agenda:**
  - Welcome and relationship building (not transactional, partnership focus)
  - Q4 service issue root cause analysis (transparency, accountability)
  - Equipment upgrade and prevention plan (demonstrate commitment)
  - Performance metrics review (address uptime concerns directly)
  - 3-year partnership vision (district technology plan alignment, not just connectivity)
  - ISPN investment in Lincoln County success (commitment demonstration)
- **Materials:** Service recovery presentation, performance dashboard, technology roadmap alignment
- **Success Criteria:** Superintendent expresses confidence in partnership, business manager open to renewal discussion

**Action 5: Customized Retention Offer**
- **Owner:** VP Sales Ty Sorensen + CFO Scott Lauber (pricing approval required)
- **Timing:** Proposal by February 10, negotiation by February 20
- **Objective:** Demonstrate commitment through financial investment and service enhancement
- **Offer Components:**
  1. **Service Credits for Q4 Outages:** $15K credit (equivalent to 3 months service)
     - Justification: Acknowledge service failures, demonstrate accountability
  2. **Bandwidth Upgrade:** 500Mbps → 1Gbps at no incremental cost
     - Justification: Address capacity constraints, show commitment to growth support
     - Value: $45K annual value (delivered at no cost)
  3. **3-Year Pricing Lock:** Protect against inflation, 2% annual discount
     - Justification: Address budget predictability concerns, demonstrate partnership
     - Value: $32K savings over 3 years vs. annual renewals
  4. **Enhanced SLA:** 99.95% uptime guarantee (vs 99.9% standard)
     - Higher service credits for SLA misses (4x standard credits)
     - Justification: Commitment to service quality improvement
- **Total Retention Offer Value:** $92K over 3-year contract
- **Approval Process:** CFO approval required (retention investment vs. churn cost)
- **Success Criteria:** Proposal presented by Feb 10, district open to negotiation

**Action 6: Competitive Defense Preparation**
- **Owner:** VP Sales Ty Sorensen + Account Executive Maria Rodriguez
- **Timing:** Battle card by February 10, reference calls by February 15
- **Objective:** Prepare for competitive negotiations, differentiate on value vs. price
- **Deliverables:**
  1. **Competitive Battle Card:** ISPN vs. Regional Fiber Provider
     - Total cost of ownership analysis (3-year TCO, not just monthly price)
     - K-12 expertise comparison (E-rate support, educational technology experience)
     - Financial stability comparison (established company vs. VC-funded startup risk)
  2. **K-12 Reference Calls:** Arrange 2-3 similar district references
     - Similar size/budget districts who chose ISPN
     - Emphasize service quality, E-rate expertise, long-term partnership
  3. **E-rate Optimization Analysis:** Demonstrate Category 1 + Category 2 maximization
     - Show ISPN E-rate expertise value (complex compliance, maximizing funding)
- **Success Criteria:** Competitive materials ready, references standing by, district acknowledges ISPN differentiation

**PHASE 3: RENEWAL STRATEGY (February 15 - March 15)**

**Action 7: Contract Negotiation & Closing**
- **Owner:** VP Sales Ty Sorensen + Account Executive Maria Rodriguez
- **Timing:** Proposal presented February 15, contract signed by March 1 (2 weeks before expiration)
- **Objective:** Secure 3-year renewal contract with retention offer accepted
- **Negotiation Approach:**
  - Lead with service recovery and relationship commitment (not just price)
  - Present retention offer as investment in partnership (not discount desperation)
  - Address competitive objections with total value proposition (not just price matching)
  - Board presentation support if needed (attend February board meeting, present materials)
- **Decision Timeline:**
  - February 15: Present renewal proposal to superintendent + business manager
  - February 20: Address objections, refine offer if needed
  - February 25: Board presentation (if required)
  - March 1: Signed contract (target date, 2 weeks buffer before expiration)
- **Success Criteria:** Signed 3-year renewal contract by March 1, retention offer accepted

**Action 8: Post-Renewal Relationship Reset**
- **Owner:** Customer Success Manager + Account Executive
- **Timing:** March - May 2025 (90 days post-renewal)
- **Objective:** Implement service improvements, rebuild confidence, convert to advocate
- **Activities:**
  - Equipment upgrade implementation (1Gbps activation, enhanced monitoring)
  - Monthly executive check-ins first 90 days (rebuild confidence through consistent engagement)
  - Quarterly technology roadmap alignment sessions (strategic partnership, not vendor)
  - Identify expansion opportunities (bandwidth growth, additional locations, managed services)
  - Convert to reference customer (case study on service recovery and partnership)
- **Success Criteria:** Health score 80+ by June, expansion opportunity identified, reference participation

#### Success Metrics & Monitoring

**WEEKLY TRACKING (During Retention Campaign):**
- Open ticket status and resolution progress
- Support response time adherence (target <2 hours for all tickets)
- Escalation tracking (minimize bypassing CSM, rebuild trust in primary contact)
- Stakeholder engagement (CEO/VP call frequency, responsiveness)

**BI-WEEKLY EXECUTIVE UPDATES:**
- CEO/VP Sales check-in on relationship progress
- Superintendent/technology director sentiment assessment
- Competitive activity monitoring (RFP progression, competitor contact)

**MONTHLY HEALTH SCORE RECALCULATION:**
- Target improvement trajectory:
  - January baseline: 42/100 (Red)
  - February target: 60/100 (Yellow - improvement from immediate actions)
  - March target: 75/100 (Yellow - retention offer impact)
  - June target: 85/100 (Green - post-renewal relationship reset)

**OUTCOME MEASURES:**
- **Primary:** Contract renewal secured (3-year term)
- **Secondary:** Health score improvement to 80+ by June 2025
- **Tertiary:** Expansion opportunity identified and proposed by Q2 2025
- **Strategic:** Convert to reference customer by Q3 2025 (service recovery case study)

---

### 2. Jefferson Union High School District - $95K ARR

**RENEWAL DATE:** May 30, 2025 (135 days)
**HEALTH SCORE:** 52/100 (Critical)
**CHURN PROBABILITY:** 48%
**VALUE AT RISK:** $95K ARR ($285K 3-year contract value)

#### Health Score Breakdown & Risk Analysis

**Support Quality (15/25 - Fair):**
- 8 tickets in Q4 (moderate volume, not critical)
- 1 escalation (technology director frustrated, not crisis-level)
- SLA adherence: 90% (acceptable but declining from 95% in Q3)
- CSAT score: 3.8/5 (neutral, declining from 4.3/5)

**Engagement (10/25 - Poor):**
- Missed last 2 QBRs (declining from 100% attendance Q2-Q3)
- Email responses: 2-3 days (slower than 24-hour historical average)
- Portal usage: Declining (2x per month vs 4-5x historical)
- Pattern: Disengagement over past 3 months

**Product Usage (14/20 - Adequate):**
- Bandwidth utilization: 68% (adequate capacity, not constrained)
- Network uptime: 99.3% (acceptable, meeting SLA)
- Service adoption: 4 of 4 services (full adoption)

**Relationship (8/15 - Weakening):**
- Tenure: 4 years (established but not long-term)
- Expansion history: 1 small expansion ($12K in 2023)
- Reference participation: None (not an advocate)

**Sentiment (5/15 - Concerning):**
- Budget pressure mentioned in November call (business manager exploring cost savings)
- Pricing inquiry to competitor detected (not active RFP yet)
- Email tone: Neutral/transactional (not adversarial but not warm)

#### Primary Risk Factors

1. **Budget Constraints:** District CFO mandate to reduce vendor costs 10%
2. **Reduced Engagement:** Missed QBRs + slower responses = disengagement pattern
3. **Competitive Inquiry:** Competitor pricing request (not RFP but exploration stage)
4. **Decision Maker Change:** New business manager started August 2024 (cost-cutting mandate)

#### Churn Probability Calculation
```
Base Probability (Health Score 52):        75%
+ Renewal >90 days but <180 days:        +10% = 85%
+ Budget pressure detected:              +10% = 95%
+ Competitive inquiry (exploration):     +25% = 120% (capped at 95%)

Risk-Adjusted Churn Probability: 48% (5-month runway allows for effective intervention)
```

#### Retention Strategy Summary (5-Month Timeline)

**IMMEDIATE (Next 2 Weeks - January 15-29):**
1. **CSM Proactive Outreach:** Schedule call with technology director (re-engage relationship)
2. **Value Realization Review:** Conduct ROI analysis (demonstrate value delivered over 4 years)
3. **Budget Context Discovery:** Understand budget pressure specifics (how much savings needed?)

**SHORT-TERM (Next 60 Days - February 1 - March 15):**
4. **Executive Re-engagement:** VP Sales call to superintendent (relationship check-in, not sales pitch)
5. **QBR Rescheduling:** Restore regular cadence (value review, partnership discussion)
6. **Retention Proposal Development:** Early renewal discount (10% for 3-year commit + 90-day early)

**RENEWAL STRATEGY (March - May):**
7. **Competitive Defense (if needed):** Battle card vs. competitor, reference calls, TCO analysis
8. **Contract Renewal:** Early renewal incentive (close by April 30, 60 days before expiration)

**Success Target:** Retain with early renewal (April 30), health score improvement to 75+ by May

---

### 3. Pine Valley Unified School District - $78K ARR

**RENEWAL DATE:** April 15, 2025 (90 days)
**HEALTH SCORE:** 55/100 (Critical)
**CHURN PROBABILITY:** 42%
**VALUE AT RISK:** $78K ARR ($234K 3-year contract value)

#### Risk Summary
- **Primary Risk:** Technology director retiring March 2025 (relationship loss, knowledge transfer gap)
- **Secondary Risk:** Interim tech director less familiar with ISPN value and relationship history
- **Opportunity:** Relationship transition provides renewal urgency (close before tech director departs)

#### Retention Strategy Summary
1. **Relationship Transition Support:** Engage superintendent and incoming tech director (broaden stakeholder relationships)
2. **Value Documentation:** Prepare transition documentation (service history, value delivered, support contacts)
3. **Onboarding Support:** Help new tech director understand network infrastructure and ISPN partnership value
4. **Early Renewal Strategy:** Leverage transition timing to secure early commitment (close by March 30, before tech director departure)

**Owner:** CSM + VP Sales | **Timeline:** Immediate outreach, renewal by March 30

---

### 4. Mountain Ridge School District - $40K ARR

**RENEWAL DATE:** June 30, 2025 (166 days)
**HEALTH SCORE:** 48/100 (Critical)
**CHURN PROBABILITY:** 38%
**VALUE AT RISK:** $40K ARR ($120K 3-year contract value)

#### Risk Summary
- **Primary Risk:** Service quality issues (3 outages in Q3 due to equipment failure)
- **Secondary Risk:** Small district with tight budget, exploring lower-cost alternatives
- **Context:** Smaller ARR but relationship repair opportunity (equipment upgrade can resolve)

#### Retention Strategy Summary
1. **Technical Resolution:** Root cause analysis, equipment upgrade at no cost (invest in relationship)
2. **Cost Sensitivity:** Acknowledge budget constraints, explore creative pricing (multi-year discount)
3. **Service Recovery:** Service credits for Q3 outages, enhanced support commitment
4. **Long-term Partnership:** Multi-year discount with E-rate optimization support (maximize federal funding)

**Owner:** VP Operations + CSM | **Timeline:** Technical audit by February 1, retention proposal by February 15

---

## YELLOW WATCH: PROACTIVE INTERVENTION REQUIRED

### Summary of 9 Yellow Accounts ($732K ARR at Risk)

| Account | ARR | Renewal Date | Health Score | Churn Prob | Primary Risk Factor | Action Priority |
|---------|-----|--------------|--------------|------------|---------------------|----------------|
| Riverside Unified SD | $125K | Aug 15, 2025 | 68/100 | 35% | Declining engagement, QBR no-shows | High |
| Oakridge Schools | $95K | Jul 30, 2025 | 72/100 | 28% | Budget pressure, cost exploration | High |
| Cedar Creek SD | $88K | Sep 1, 2025 | 65/100 | 42% | Support ticket volume increasing | High |
| Willow Springs SD | $82K | Jun 15, 2025 | 70/100 | 32% | New superintendent, relationship reset | Medium |
| Summit Valley SD | $75K | Oct 30, 2025 | 74/100 | 25% | Usage declining (enrollment drop) | Medium |
| Meadowbrook SD | $68K | Aug 1, 2025 | 69/100 | 38% | Competitive inquiry detected | High |
| Hillside Unified | $62K | Nov 15, 2025 | 73/100 | 22% | Service adoption low (WiFi unused) | Low |
| Canyon View SD | $55K | Jul 1, 2025 | 67/100 | 40% | Tech director change, transition risk | Medium |
| Desert Sands SD | $82K | Sep 15, 2025 | 71/100 | 30% | E-rate complexity, audit concerns | Medium |

### Proactive Intervention Strategy

**OBJECTIVE:** Prevent Yellow accounts from degrading to Red status through early CSM-led engagement

**RESOURCE ALLOCATION:**
- CSM team dedicates 60% time to Yellow account engagement over next 60 days
- Sales support for top 3 Yellow accounts by ARR (Riverside, Oakridge, Cedar Creek)
- VP Sales executive engagement for accounts >$100K ARR

**INTERVENTION APPROACH:**
1. **Proactive Outreach:** Contact all 9 Yellow accounts within next 30 days (relationship re-engagement)
2. **Value Realization Reviews:** Conduct ROI analysis for each account (demonstrate value delivered)
3. **Risk-Specific Actions:** Address individual risk factors (budget concerns, support issues, engagement gaps)
4. **Early Renewal Incentives:** Offer 10% discount for 90+ day early renewal commitment (accelerate decisions)

**SUCCESS TARGETS:**
- Retain 8 of 9 Yellow accounts (89% retention rate)
- Convert 3-4 accounts to early renewals (reduce Q3-Q4 renewal concentration)
- Improve average Yellow health score from 68 to 80+ by renewal time
- **Value Preserved:** $650K of $732K at risk (89% retention success rate)

**TIMELINE:**
- Weeks 1-2: Proactive CSM outreach to all 9 accounts (relationship re-engagement)
- Weeks 3-4: Value realization reviews completed (ROI documentation)
- Weeks 5-8: Retention proposals presented (early renewal incentives)
- Weeks 9-12: Contract negotiations and early renewals secured

---

## GREEN HEALTHY: EXPANSION FOCUS

### Portfolio Summary (34 Green Accounts, $3,105K ARR)

**Expansion-Ready Accounts:** 12 accounts identified with proactive expansion opportunities
**Total Expansion Potential:** $340K incremental ARR
**Expected Expansion Revenue:** $211K (62% weighted close rate)

### High Priority Expansion Opportunities (3 accounts, $138K potential)

**1. Bear Creek School District - $142K current ARR, 92/100 health score**
- **Opportunity:** New campus connectivity (3 new elementary schools opening August 2025)
- **Potential ARR:** +$55K
- **Close Probability:** 75% (board-approved project, budgeted, E-rate eligible)
- **Timing:** E-rate deadline May 1, implementation by August 15
- **Recommended Action:** Proactive outreach by January 31, proposal by February 15, close by April 30
- **Owner:** Account Executive Sarah Johnson

**2. Riverside Unified - $125K current ARR, 89/100 health score**
- **Opportunity:** Bandwidth upgrade (500Mbps → 1Gbps due to capacity constraints)
- **Potential ARR:** +$45K
- **Close Probability:** 70% (identified need, strong usage pattern, technology plan alignment)
- **Timing:** Network capacity constraints emerging, technology plan refresh Q2
- **Recommended Action:** QBR discussion February 15, capacity analysis, proposal by March 1
- **Owner:** CSM + Account Executive

**3. Lincoln Tech Academy - $108K current ARR, 91/100 health score**
- **Opportunity:** Managed WiFi expansion (currently self-managed, high support burden)
- **Potential ARR:** +$38K
- **Close Probability:** 70% (technology director expressed interest in managed services)
- **Timing:** Budget cycle alignment, E-rate Category 2 eligible
- **Recommended Action:** Proactive discovery call February 1, proposal by March 1, close by May 31
- **Owner:** Account Executive + Solutions Engineer

**HIGH PRIORITY EXPECTED REVENUE:** $138K potential × 70% close rate = $97K expected ARR

### Medium Priority Expansion Opportunities (5 accounts, $165K potential)

- Pinewood Schools: $28K (Security services add-on)
- Maplewood SD: $32K (Additional locations - 2 new campuses)
- Greenfield SD: $40K (Bandwidth + WiFi bundle)
- Valley View SD: $22K (DIA for admin building)
- Lakeside SD: $25K (Managed services upgrade)

**MEDIUM PRIORITY EXPECTED REVENUE:** $165K potential × 60% close rate = $99K expected ARR

### Low Priority Expansion Opportunities (4 accounts, $37K potential)

- Timberline SD: $18K (New construction - 1 new middle school)
- Brookside SD: $15K (WiFi refresh - equipment end-of-life)
- Highland SD: $12K (Bandwidth upgrade)
- Fairview SD: $10K (Security enhancement)

**LOW PRIORITY EXPECTED REVENUE:** $37K potential × 40% close rate = $15K expected ARR

### Expansion Strategy & Resource Allocation

**HIGH PRIORITY (3 accounts, target close Q1-Q2):**
- Account executive proactive outreach within 30 days
- Custom proposals by February 15
- Close target by April 30 (Q1/Q2 revenue recognition)
- **Expected ARR:** $97K

**MEDIUM PRIORITY (5 accounts, target close Q2-Q3):**
- CSM discovery during Q1 QBRs (identify needs and timing)
- Align proposals with budget cycles and E-rate windows
- Close target by June 30 (Q2/Q3 revenue recognition)
- **Expected ARR:** $99K

**LOW PRIORITY (4 accounts, opportunistic timing):**
- Raise during regular check-ins, no dedicated campaigns
- Customer-driven timing (budget availability, project triggers)
- Close target: Variable based on customer timing
- **Expected ARR:** $15K

**TOTAL EXPECTED EXPANSION:** $211K incremental ARR in Q1-Q2 2025 (62% weighted average close rate)

---

## PORTFOLIO TRENDS & INSIGHTS

### Quarter-over-Quarter Health Comparison

| Metric | Q4 2024 | Q1 2025 | Change | Analysis |
|--------|---------|---------|--------|----------|
| Avg Portfolio Health Score | 85/100 | 82/100 | -3 pts | Slight decline (seasonal support volume increase) |
| Red Accounts | 2 | 4 | +2 | Concerning - Lincoln County + Jefferson Union degraded |
| Yellow Accounts | 7 | 9 | +2 | Some Green accounts slipped (proactive catch) |
| Green Accounts | 38 | 34 | -4 | Portfolio health stable but declining trend |
| Churn Risk (ARR) | $175K | $393K | +$218K | Significant increase - immediate action required |
| Avg Churn Probability | 12% | 18% | +6% | Portfolio risk increasing, intervention needed |

### Leading Indicators (Early Warning Signals)

**Support Ticket Trends:**
- Q4 ticket volume: +18% vs Q3 (seasonal + 2 equipment failures)
- Escalation rate: 2.8% → 4.1% (pattern of customer dissatisfaction)
- Resolution time: 95% SLA adherence → 88% SLA (resource constraint or process issue?)
- CSAT scores: Declining from 4.3/5 to 3.9/5 average (customer satisfaction dropping)

**Engagement Patterns:**
- QBR attendance: 78% → 65% (customers cancelling or no-showing)
- Email response time: 24hr average → 36hr average (declining responsiveness indicator)
- Portal usage: -15% QoQ (customers less engaged with self-service)
- Meeting acceptance rate: 82% → 71% (harder to schedule customer interactions)

**Sentiment Shifts:**
- Budget pressure mentions: 12 customers (up from 7 in Q3) - macro trend
- Competitive inquiries: 6 detected (up from 3 in Q3) - market pressure
- Positive feedback declining: 45 CSAT "very satisfied" vs 62 in Q3
- Negative escalations: 18 in Q4 vs 11 in Q3 (frustration pattern)

### Root Cause Analysis (Why Is Portfolio Health Declining?)

**SERVICE QUALITY ISSUES:**
1. Equipment failures at 2 customer sites (Lincoln County, Mountain Ridge)
   - Aging equipment not proactively replaced (reactive maintenance vs. proactive)
   - Customers experiencing avoidable outages (trust damage)
2. Support response time degradation during holiday season
   - Staffing constraints (2 FTE down, hiring in progress)
   - Customer perception of deprioritization (even if response time acceptable)
3. Communication gaps during incidents
   - Customers feeling uninformed during outages (no proactive status updates)
   - Technology directors learning about issues from users, not ISPN (embarrassment factor)

**MARKET DYNAMICS:**
1. Regional fiber provider aggressive expansion campaign
   - Targeting ISPN customers with below-market pricing (loss-leader strategy)
   - Leveraging service issues in competitive positioning (opportunistic)
   - 6 competitive inquiries detected (up from 3 in Q3) - sustained pressure
2. School district budget pressures (macro trend)
   - State funding cuts averaging 6-8% across region (all districts affected)
   - Superintendent/board mandates to reduce vendor costs 10-15%
   - Business managers actively exploring all contract cost reductions
3. E-rate rule changes creating uncertainty
   - Customers seeking guidance on new Category 2 rules (ISPN expertise advantage)
   - Some districts concerned about funding reduction (budget pressure)

**INTERNAL FACTORS:**
1. Support team understaffed (2 FTE down, hiring in progress)
   - Ticket resolution time degrading (88% SLA vs 95% target)
   - Escalation rate increasing (team stretched, quality suffering)
   - Holiday coverage gaps (seasonal but customer perception damage)
2. Customer success manager turnover (relationship continuity disrupted)
   - 1 CSM departure in November (30 accounts transitioned to new CSM)
   - Relationship reset required (new CSM building trust, takes time)
   - QBR attendance declining during transition (continuity gap)
3. Proactive monitoring gaps (incidents detected by customers, not ISPN)
   - Lincoln County: 3 outages first detected by technology director (reactive, not proactive)
   - Mountain Ridge: Equipment failure discovered during customer-reported issue
   - Need for enhanced proactive monitoring (detect before customer impact)

### Recommended Process Improvements

**1. MONTHLY HEALTH MONITORING (vs. Quarterly)**
- **Current State:** Quarterly health score calculation (3-month lag in deterioration detection)
- **Recommended State:** Monthly health monitoring for all accounts >$50K ARR
- **Benefits:** Earlier deterioration detection (Red flag at 30 days vs 90 days), proactive intervention time
- **Implementation:** Automate monthly health score calculation, alerts for score drops >10 points

**2. SUPPORT QUALITY INITIATIVE**
- **Accelerate Hiring:** Fill 2 open support positions by end of January (end staffing constraint)
- **Proactive Monitoring Enhancements:** Deploy advanced monitoring (catch issues before customer impact)
  - Automated alerts for equipment health (predict failures before they occur)
  - Bandwidth utilization alerts (proactive capacity planning conversations)
  - Uptime monitoring with automatic customer notification (communication transparency)
- **Communication Protocol for Incidents:** Implement hourly status updates during critical outages
  - Proactive customer notification (technology director informed before users complain)
  - Escalation transparency (clear timeline and resolution commitment)

**3. CUSTOMER ENGAGEMENT CADENCE**
- **Mandate Quarterly QBRs:** All accounts >$50K ARR (no cancellations accepted)
  - CSM responsibility: Schedule 120 days in advance, confirm 30 days prior, reschedule immediately if cancelled
  - Executive participation: VP Sales quarterly touchpoint for top 20 accounts (relationship depth)
- **Executive Check-ins:** CEO/VP Sales quarterly engagement with top 20 customers ($100K+ ARR)
  - Not sales calls, relationship building (strategic partnership, not transactional vendor)
  - Board-level relationship building (superintendent, board president connections)
- **Customer Advisory Board:** Establish semi-annual customer advisory board
  - 8-10 customer representatives (technology directors, superintendents)
  - Gather feedback, discuss product roadmap, build community
  - Convert satisfied customers to advocates (peer influence)

**4. COMPETITIVE INTELLIGENCE PROGRAM**
- **Win/Loss Analysis Process:** After every renewal decision (win or loss)
  - Understand why customers chose ISPN or competitor
  - Identify competitive advantages and vulnerabilities
  - Refine value proposition based on actual customer decisions
- **Battle Card Updates:** Refresh competitive positioning quarterly
  - ISPN vs. Regional Fiber Provider (primary threat)
  - Total cost of ownership (3-year TCO, not just monthly price)
  - K-12 expertise differentiation (E-rate support, educational technology experience)
- **Reference Program Activation:** Engage satisfied customers for peer influence
  - 10-15 reference customers willing to take calls from prospects
  - Case studies showcasing ISPN partnership value (service quality, E-rate expertise)
  - Customer testimonials for competitive situations (peer validation)

---

## EXECUTIVE ACTIONS REQUIRED

### THIS WEEK (January 15-19, 2025)

**CEO (Jeff Neblett):**
- [ ] Executive escalation call: Lincoln County Schools superintendent (Friday Jan 19, 3:00 PM)
  - Objective: Welcome new superintendent, apologize for Q4 service issues, commit to resolution
  - Outcome: Superintendent agrees to executive QBR, willing to discuss renewal
- [ ] Executive escalation call: Jefferson Union HSSD superintendent (Friday Jan 19, 4:30 PM)
  - Objective: Early re-engagement, relationship building, understand budget concerns
  - Outcome: Superintendent open to renewal discussion, QBR scheduled

**VP Operations (Charlie Brenneman):**
- [ ] Lincoln County technical audit (Monday Jan 20)
  - Deliverable: Root cause analysis of Q4 equipment failures
  - Commitment: Equipment upgrade plan (no cost to district)
- [ ] Mountain Ridge equipment upgrade (scheduled for Wednesday Jan 22)
  - Deliverable: Replace aging equipment, prevent future failures
- [ ] Support team hiring acceleration
  - Action: Fill 2 open positions by end of January (end staffing constraint)

**VP Customer Success (Ty Sorensen):**
- [ ] Board presentation preparation (Friday Jan 19)
  - Deliverable: Executive summary of at-risk accounts, mitigation plans, expansion pipeline
  - Format: Board-ready presentation with recommendations
- [ ] Retention proposals development timeline:
  - Lincoln County: Proposal by January 26
  - Jefferson Union: Proposal by February 2
  - Pine Valley: Proposal by February 10
- [ ] CSM team alignment meeting (Tuesday Jan 16)
  - Agenda: Yellow account ownership assignment, proactive outreach goals, retention campaign launch
  - Outcome: Clear accountability for each Yellow account, 30-day outreach timeline

### NEXT 30 DAYS (January 20 - February 15, 2025)

**Executive QBRs (4 Red Accounts):**
- Lincoln County (Week of Jan 27): CEO + VP Sales + VP Operations
- Jefferson Union (Week of Feb 5): VP Sales + VP Customer Success
- Pine Valley (Week of Feb 12): VP Sales + CSM
- Mountain Ridge (Week of Feb 19): VP Operations + CSM

**Retention Proposals (4 Red + 4 Yellow Early Renewals):**
- Red accounts: Customized retention offers (service credits, upgrades, multi-year pricing)
- Yellow accounts renewing <120 days: Early renewal incentives (10% discount for 90-day early)
- Competitive defense materials: Battle cards, reference calls, TCO analysis

**Proactive CSM Engagement (9 Yellow Accounts):**
- Week 1-2: Proactive outreach calls (relationship re-engagement)
- Week 3-4: Value realization reviews (demonstrate ROI delivered)
- Week 5-6: Address specific risk factors (budget, support, engagement, transitions)
- Week 7-8: Present early renewal incentives (10% discount for 90+ day early commitment)

**Expansion Pipeline Development (3 High Priority Accounts):**
- Bear Creek SD: Proactive outreach by Jan 31, proposal by Feb 15
- Riverside Unified: QBR discussion Feb 15, proposal by Mar 1
- Lincoln Tech Academy: Discovery call Feb 1, proposal by Mar 1
- Close target: All 3 by April 30 (Q1/Q2 revenue recognition)

### ONGOING (Monthly Rituals to Prevent Future Churn Risk)

**Monthly Customer Health Monitoring:**
- Calculate health scores monthly (not quarterly) for all accounts >$50K ARR
- Automated alerts for accounts dropping >10 points (early deterioration detection)
- Executive dashboard with Red/Yellow/Green summary (portfolio visibility)
- Proactive intervention before accounts reach Red status

**Executive Customer Engagement:**
- CEO/VP Sales quarterly check-ins with top 20 accounts (relationship depth, not transactional)
- Board-level relationship building (superintendent, board president, business manager)
- Customer advisory board meetings (semi-annual, gather feedback, build community)
- Executive participation in QBRs for at-risk accounts (commitment demonstration)

**Competitive Intelligence:**
- Win/loss analysis after every renewal decision (understand why we win or lose)
- Battle card updates quarterly (refresh based on competitive activity and market changes)
- Reference program activation (engage satisfied customers for peer influence)
- Competitive landscape monitoring (pricing, positioning, customer feedback)

**Support Quality Excellence:**
- Monthly SLA adherence review (maintain 95%+ target)
- Proactive monitoring enhancements (detect issues before customer impact)
- Communication protocol enforcement (hourly updates during critical incidents)
- Equipment lifecycle management (proactive replacement, avoid reactive failures)

---

## SUCCESS METRICS & TRACKING

### Retention Targets (Next 90 Days)

| Customer Segment | Accounts | ARR at Risk | Target Retention | Expected ARR Preserved |
|------------------|----------|-------------|------------------|------------------------|
| Red | 4 | $393K | 75% | $295K |
| Yellow | 9 | $732K | 90% | $659K |
| Green | 34 | $3,105K | 98% | $3,043K |
| **TOTAL** | **47** | **$4,230K** | **95%** | **$3,997K** |

**Churn Budget:** $233K ARR (5.5% of portfolio base)
**If Churn Exceeds Budget:** Escalate to CEO for intervention plan

### Expansion Targets (Q1-Q2 2025)

| Priority | Accounts | Potential ARR | Target Close Rate | Expected ARR | Close Deadline |
|----------|----------|---------------|-------------------|--------------|----------------|
| High | 3 | $138K | 70% | $97K | April 30, 2025 |
| Medium | 5 | $165K | 60% | $99K | June 30, 2025 |
| Low | 4 | $37K | 40% | $15K | Variable |
| **TOTAL** | **12** | **$340K** | **62%** | **$211K** | Q1-Q2 2025 |

**Expansion Goal:** $211K incremental ARR (5% portfolio growth in 6 months)

### Health Score Improvement Targets

| Timeframe | Red Accounts Target | Yellow Accounts Target | Green Accounts Target | Portfolio Avg |
|-----------|---------------------|------------------------|----------------------|---------------|
| Current (Jan 2025) | 47/100 | 68/100 | 87/100 | 82/100 |
| 30 Days (Feb 2025) | 60/100 | 75/100 | 88/100 | 84/100 |
| 60 Days (Mar 2025) | 70/100 | 80/100 | 89/100 | 86/100 |
| 90 Days (Apr 2025) | 75/100 | 85/100 | 90/100 | 88/100 |

**Success Criteria:**
- Zero Red accounts by end of Q1 2025 (all moved to Yellow or Green)
- <5% Yellow accounts by end of Q2 2025 (proactive intervention preventing deterioration)
- Portfolio average health score 88+ by April 2025 (6-point improvement from current 82)

---

## TIME SAVINGS & EFFICIENCY ANALYSIS

**Traditional Manual Customer Health Review Process:**
- Pull data from multiple systems (Salesforce, Zendesk, usage databases): 2 hours
- Calculate health scores manually for 47 accounts (spreadsheet formulas): 2.5 hours
- Identify at-risk accounts and prioritize by ARR/risk: 1 hour
- Research root causes for Red accounts (dig through tickets, emails): 3 hours
- Develop retention strategies (brainstorm, write up recommendations): 2 hours
- Format executive presentation for Friday meeting: 2 hours
- **TOTAL MANUAL PROCESS TIME: 12.5 hours**

**With Customer Health Intelligence Skill:**
- Provide analysis request with parameters: 2 minutes
- Claude pulls data, calculates scores, identifies risks, develops strategies: 8 minutes
- Human review and refinement of analysis: 40 minutes
- **TOTAL WITH SKILL: 50 minutes**

**TIME SAVINGS PER QUARTERLY REVIEW:** 11+ hours
**ANNUAL TIME SAVINGS:** 44 hours (quarterly reviews) + 64 hours (monthly monitoring) = 108 hours
**ANNUAL VALUE:** 108 hours × $445/hour (VP Customer Success rate) = $48,060

**BUSINESS IMPACT VALUE:**
- Churn Prevention: 2 customers saved × $125K avg ARR = $250,000 annual value
- Expansion Acceleration: Proactive pipeline of $211K incremental ARR = $300,000 annual value
- Time Savings: 108 hours × $445/hour = $48,060 annual value
- **TOTAL ANNUAL VALUE: $550,000+**

---

**Analysis Prepared by:** Customer Health Intelligence Skill
**Analysis Date:** January 15, 2025
**Next Scheduled Update:** February 15, 2025 (monthly cadence)
**Executive Presentation:** Friday, January 19, 2025 (Executive Team Meeting)
**Board Presentation:** Monday, January 29, 2025 (Board of Directors Meeting)

---
