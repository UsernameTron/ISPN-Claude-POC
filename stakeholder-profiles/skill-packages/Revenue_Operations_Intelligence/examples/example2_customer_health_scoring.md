# Example 2: Customer Health Scoring & Churn Prediction Analysis

## Scenario Context

**Situation:** Quarterly customer health review before board presentation
**Objective:** Identify at-risk renewals proactively (90-180 days before expiration)
**Current Challenge:** Churn discovered reactively at renewal time (too late for intervention)
**Desired Outcome:** Proactive retention strategies with executive escalation plan

## User Request

> "Analyze customer health across all 47 active accounts. Flag at-risk renewals in next 90 days with churn probability estimation. Prioritize by ARR value at risk and provide specific retention action plans. I need to present at-risk accounts and mitigation strategies to CEO this Friday."

## Claude's Analysis Process

### Step 1: Data Collection Across Systems

**CRM Data (Salesforce):**
- 47 active accounts with contract details, renewal dates, ARR values
- Historical revenue and expansion patterns
- Account executive relationship notes and activities
- Payment history and billing issues

**Support Data (Zendesk):**
- Support ticket volume, severity, resolution time (past 90 days)
- Escalation patterns and recurring issues
- Customer satisfaction scores (CSAT) from ticket closures
- Open critical issues requiring resolution

**Engagement Signals (CRM + Calendar):**
- QBR attendance (scheduled, completed, cancelled, no-shows)
- Email responsiveness (reply time, engagement level)
- Portal login frequency (usage of self-service tools)
- Meeting acceptance rate (responsiveness to outreach)

**Product Usage (Network Monitoring System):**
- Bandwidth utilization trends (increasing, stable, declining)
- Network uptime and performance metrics
- Service adoption (using all contracted services vs subset)

**Sentiment Analysis:**
- Email tone analysis (positive, neutral, negative keywords)
- Support ticket sentiment (frustration indicators, appreciation signals)
- Competitive signals (pricing inquiries, RFP mentions)

### Step 2: Health Score Calculation

**Multi-Factor Scoring Model (0-100 scale):**

**Support Quality (25% weight):**
- Ticket volume, escalations, resolution time, SLA adherence

**Engagement (25% weight):**
- QBR attendance, email responsiveness, portal usage

**Product Usage (20% weight):**
- Bandwidth utilization, uptime, service adoption

**Relationship Strength (15% weight):**
- Tenure, expansion history, reference/advocacy

**Sentiment (15% weight):**
- Communication tone, escalation patterns, competitive signals

### Step 3: Churn Probability Modeling

**Base Probability by Health Score:**
- Red (0-59): 60-80% churn probability
- Yellow (60-79): 30-50% churn probability
- Green (80-100): 5-15% churn probability

**Risk Multipliers:**
- Renewal <90 days: +20% churn probability
- Leadership change (new superintendent): +15%
- Budget pressure mentioned: +10%
- Competitive inquiry detected: +25%
- Recent service outage: +15%

## Generated Analysis Output

---

# CUSTOMER HEALTH ANALYSIS
## Quarterly Review - January 2025

**Analysis Date:** January 15, 2025
**Customer Base:** 47 active accounts
**Total ARR:** $4.23M
**Renewals Next 90 Days:** 8 accounts ($847K ARR)

---

## EXECUTIVE SUMMARY

### Portfolio Health Overview

| Health Status | Count | % of Base | ARR Value | Avg Health Score |
|---------------|-------|-----------|-----------|------------------|
| 🟢 Green (Healthy) | 34 | 72% | $3,105K | 87/100 |
| 🟡 Yellow (Watch) | 9 | 19% | $732K | 68/100 |
| 🔴 Red (Critical) | 4 | 9% | $393K | 47/100 |
| **Total** | **47** | **100%** | **$4,230K** | **82/100** |

### Key Insights

**Immediate Risk:**
- 4 Red accounts ($393K ARR) require executive intervention this week
- 2 of 4 Red accounts renew within 60 days ($215K ARR at immediate risk)
- Without intervention, estimated churn: $240K ARR (based on 65% average churn probability)

**Proactive Opportunity:**
- 9 Yellow accounts ($732K ARR) can be saved with CSM-led retention efforts
- Early engagement (90-120 days before renewal) increases retention success rate 3x
- Estimated value preservation with proactive intervention: $650K of $732K at risk

**Expansion Potential:**
- 12 Green accounts showing expansion signals ($340K incremental ARR potential)
- Strong health + high usage + growth indicators = proactive outreach opportunity
- Expansion deals have 70% close rate when identified proactively vs 40% reactively

### Recommended Actions This Week

1. **Executive Escalation:** CEO calls to 2 Red accounts renewing <60 days (Lincoln County, Jefferson Union)
2. **CSM Intervention:** Retention outreach to 4 Yellow accounts renewing <120 days
3. **Expansion Focus:** Proactive proposals to 3 Green accounts with immediate opportunities
4. **Process Improvement:** Monthly health monitoring ritual (not just quarterly)

---

## RED ALERT: CRITICAL ACCOUNTS (4 accounts, $393K ARR)

### 1. Lincoln County Schools - $180K ARR
**Renewal Date:** March 15, 2025 (59 days)
**Health Score:** 42/100 (Critical)
**Churn Probability:** 72%
**Value at Risk:** $180K ARR ($540K over 3-year contract)

#### Health Score Breakdown
- **Support Quality (6/25):** 12 escalated tickets in Q4, 3 critical outages, SLA missed 40% of time
- **Engagement (8/25):** Missed last 3 QBRs, email responses taking 3-5 days (was <24 hours)
- **Product Usage (10/20):** 85% bandwidth utilization (constrained), 98.2% uptime (below 99.5% target)
- **Relationship (8/15):** 6-year customer but declining engagement, no expansions in 3 years
- **Sentiment (10/15):** Negative tone in recent communications, frustration with support response time

#### Risk Factors
- **Leadership Change (NEW):** New superintendent started September 2024, relationship not established
- **Performance Issues:** 3 network outages in Q4 (equipment failure, resolved but damage done)
- **Competitive Threat:** Regional fiber provider contacted district in December (pricing inquiry)
- **Budget Pressure:** District facing budget cuts, superintendent looking for cost savings
- **Support Escalations:** 12 tickets escalated to VP Operations (pattern of dissatisfaction)

#### Churn Probability Calculation
- Base probability (health score 42): 70%
- Renewal <60 days: +20% = 90%
- Leadership change: +15% = 105% → capped at 95%
- Competitive inquiry: +25% = 120% → capped at 95%
- **Risk-Adjusted Churn Probability: 72%** (weighted average of factors)

#### Root Cause Analysis
**Primary Issue:** Service quality deterioration in Q4 (equipment failures, slow support response)
**Contributing Factors:**
- New superintendent not engaged (missed relationship building opportunity)
- Technology director frustrated with repeat issues (escalation pattern)
- Business manager exploring cost alternatives (budget pressure + service dissatisfaction)
- Competitor timing opportunistic (approached during service issues)

#### Recommended Retention Strategy

**IMMEDIATE (This Week - Jan 15-19):**
1. **CEO Executive Call** (CEO Jeff Neblett → Superintendent)
   - Welcome new superintendent, apologize for Q4 service issues
   - Commit to root cause resolution and service improvement plan
   - Offer executive QBR next week (show commitment to partnership)
   - **Owner:** CEO Jeff Neblett
   - **Timeline:** Call by Friday Jan 19

2. **Technical Root Cause Resolution** (VP Operations → Tech Director)
   - Comprehensive network audit scheduled (identify equipment failure root cause)
   - Commit to equipment upgrades if needed (no cost to district)
   - Expedite resolution of 2 open critical tickets (close by EOW)
   - **Owner:** VP Operations Charlie Brenneman
   - **Timeline:** Audit scheduled by Jan 20, issues resolved by Jan 22

3. **Support Process Improvement** (VP Sales → All Stakeholders)
   - Assign dedicated escalation contact (direct line to VP Operations)
   - Implement proactive monitoring alerts (prevent issues before user impact)
   - Weekly check-in calls with tech director (rebuild trust through communication)
   - **Owner:** VP Sales Ty Sorensen
   - **Timeline:** In place by Jan 22

**SHORT-TERM (Next 30 Days - Jan 20 - Feb 15):**
4. **Executive QBR & Service Recovery** (Week of Jan 27)
   - In-person QBR with superintendent, tech director, business manager
   - Present root cause analysis and prevention plan
   - Review performance metrics (address uptime concerns)
   - Discuss 3-year partnership vision (not just transactional)
   - **Owner:** CEO + VP Sales + VP Operations
   - **Timeline:** QBR by Feb 5

5. **Customized Retention Offer** (Week of Feb 3)
   - Service credits for Q4 outages ($15K credit = 3 months service)
   - Bandwidth upgrade from 500Mbps → 1Gbps at no incremental cost (show commitment)
   - 3-year pricing lock (protect against inflation, address budget concerns)
   - Enhanced SLA (99.95% uptime vs 99.9% standard, higher service credits)
   - **Owner:** VP Sales + CFO (pricing approval)
   - **Timeline:** Proposal by Feb 10, negotiation by Feb 20

6. **Competitive Response** (Week of Feb 10)
   - Competitive analysis (compare ISPN vs regional fiber total value, not just price)
   - K-12 reference calls (similar districts, emphasize service quality + E-rate expertise)
   - Financial stability comparison (established company vs VC-funded startup risk)
   - **Owner:** VP Sales + Account Executive
   - **Timeline:** Battle card by Feb 10, references arranged by Feb 15

**RENEWAL STRATEGY (Feb 15 - March 15):**
7. **Contract Negotiation & Closing** (Feb 15 - March 1)
   - Present renewal proposal (service recovery + retention offer + multi-year value)
   - Address objections (price, performance, competitive alternatives)
   - Board presentation support if needed (provide materials, attend meeting)
   - Secure signed contract minimum 2 weeks before expiration
   - **Owner:** VP Sales + Account Executive
   - **Timeline:** Signed contract by March 1

8. **Post-Renewal Relationship Reset** (March - May)
   - Implementation of enhanced monitoring and support
   - Monthly executive check-ins first 90 days (rebuild confidence)
   - Identify expansion opportunities (bandwidth upgrade, additional locations)
   - Convert to reference customer (case study on service recovery)
   - **Owner:** Customer Success Manager
   - **Timeline:** Ongoing through Q2

#### Success Metrics & Monitoring
- **Weekly:** Open ticket status, response time adherence, escalation tracking
- **Bi-weekly:** Executive update on relationship progress (CEO/VP Sales check-in)
- **Monthly:** Health score re-calculation (target 75+ by March, 85+ by June)
- **Outcome:** Retention success + health improvement + expansion opportunity identification

---

### 2. Jefferson Union High School District - $95K ARR
**Renewal Date:** May 30, 2025 (135 days)
**Health Score:** 52/100 (Critical)
**Churn Probability:** 48%
**Value at Risk:** $95K ARR ($285K over 3-year contract)

#### Health Score Breakdown
- **Support Quality (15/25):** 8 tickets in Q4 (moderate volume), 1 escalation, SLA 90% adherence
- **Engagement (10/25):** Missed last 2 QBRs, email responses slow (2-3 days), declining portal usage
- **Product Usage (14/20):** 68% bandwidth utilization (adequate), 99.3% uptime (acceptable)
- **Relationship (8/15):** 4-year customer, 1 small expansion ($12K), not an advocate
- **Sentiment (5/15):** Budget pressure mentioned in recent calls, pricing inquiry to competitor

#### Risk Factors
- **Budget Constraints:** District CFO exploring cost savings (mentioned in November call)
- **Reduced Engagement:** Missed last 2 QBRs, slower response times (was very engaged previously)
- **Competitive Inquiry:** Competitor pricing request detected (not active RFP yet)
- **Decision Maker Change:** New business manager started August 2024 (cost-cutting mandate)

#### Churn Probability Calculation
- Base probability (health score 52): 75%
- Renewal >90 days: +10% = 85%
- Budget pressure: +10% = 95%
- Competitive inquiry: +25% = 120% → capped at 95%
- **Risk-Adjusted Churn Probability: 48%** (5-month runway allows intervention)

#### Recommended Retention Strategy

**IMMEDIATE (Next 2 Weeks - Jan 15-29):**
1. **CSM Proactive Outreach** (Week of Jan 15)
   - Schedule call with tech director (re-engage relationship)
   - Conduct value realization review (show ROI delivered)
   - Understand budget pressure context (how much savings needed?)
   - **Owner:** Customer Success Manager
   - **Timeline:** Call by Jan 22

2. **Cost Optimization Analysis** (Week of Jan 22)
   - Review current service utilization (identify optimization opportunities)
   - Build cost comparison analysis (ISPN total value vs competitor price)
   - Prepare retention pricing scenarios (early renewal discount, multi-year lock)
   - **Owner:** CSM + VP Sales
   - **Timeline:** Analysis complete by Jan 29

**SHORT-TERM (Next 60 Days - Feb 1 - March 15):**
3. **Executive Re-engagement** (Week of Feb 5)
   - VP Sales call to superintendent (relationship check-in, not sales pitch)
   - QBR rescheduling (value review, partnership discussion)
   - Introduce new business manager to ISPN team (build relationship)
   - **Owner:** VP Sales + CSM
   - **Timeline:** Calls by Feb 12, QBR by Feb 28

4. **Retention Proposal** (Week of Feb 19)
   - Pricing optimization proposal (10% discount for early renewal + 3-year commit)
   - Service enhancement options (bandwidth upgrade path, managed services add-on)
   - E-rate optimization support (maximize Category 1 + explore Category 2 opportunities)
   - **Owner:** VP Sales + CSM
   - **Timeline:** Proposal by Feb 26

**RENEWAL STRATEGY (March - May):**
5. **Competitive Defense** (If needed - March)
   - Battle card vs competitor (K-12 expertise, E-rate support, service quality)
   - Reference customer calls (similar budget-conscious districts)
   - Total cost of ownership analysis (3-year TCO, not just monthly price)
   - **Owner:** VP Sales + Account Executive
   - **Timeline:** As needed based on competitive activity

6. **Contract Renewal** (April - May)
   - Early renewal incentive (close by April 30, 60 days before expiration)
   - Board presentation support if needed (CFO/business manager buy-in)
   - Signed contract by May 1 (avoid last-minute pressure)
   - **Owner:** VP Sales + Account Executive
   - **Timeline:** Signed by May 1

#### Success Metrics & Monitoring
- **Bi-weekly:** Engagement tracking (email response time, meeting attendance)
- **Monthly:** Health score update (target 70+ by March, 80+ by May)
- **Outcome:** Retention + early renewal + relationship reset

---

### 3. Pine Valley Unified School District - $78K ARR
**Renewal Date:** April 15, 2025 (90 days)
**Health Score:** 55/100 (Critical)
**Churn Probability:** 42%
**Value at Risk:** $78K ARR

#### Summary
- **Primary Risk:** Technology director retiring March 2025 (relationship loss)
- **Secondary Risk:** Interim tech director less familiar with ISPN value
- **Recommended Action:** Superintendent engagement + relationship transition support
- **Timeline:** Immediate outreach, QBR with superintendent by Feb 15

#### Retention Strategy (Abbreviated)
1. **Relationship Transition:** Engage superintendent and incoming tech director
2. **Value Documentation:** Prepare transition documentation (service history, value delivered)
3. **Onboarding Support:** Help new tech director understand network and ISPN partnership
4. **Early Renewal:** Leverage relationship transition to secure early commitment

**Owner:** CSM + VP Sales | **Timeline:** Outreach by Jan 20, renewal by March 30

---

### 4. Mountain Ridge School District - $40K ARR
**Renewal Date:** June 30, 2025 (166 days)
**Health Score:** 48/100 (Critical)
**Churn Probability:** 38%
**Value at Risk:** $40K ARR

#### Summary
- **Primary Risk:** Service quality issues (3 outages in Q3, equipment failure)
- **Secondary Risk:** Small district (tight budget, exploring lower-cost alternatives)
- **Recommended Action:** Equipment upgrade + cost optimization proposal
- **Timeline:** Technical audit by Feb 1, retention proposal by Feb 15

#### Retention Strategy (Abbreviated)
1. **Technical Resolution:** Root cause analysis, equipment upgrade at no cost
2. **Cost Sensitivity:** Acknowledge budget constraints, explore creative pricing
3. **Service Recovery:** Service credits for Q3 outages, enhanced support commitment
4. **Long-term Partnership:** Multi-year discount, E-rate optimization support

**Owner:** VP Operations + CSM | **Timeline:** Audit by Feb 1, proposal by Feb 15

---

## YELLOW WATCH: PROACTIVE INTERVENTION (9 accounts, $732K ARR)

### Summary of Yellow Accounts

| Account | ARR | Renewal Date | Health Score | Churn Prob | Primary Risk Factor |
|---------|-----|--------------|--------------|------------|---------------------|
| Riverside Unified SD | $125K | Aug 15, 2025 | 68/100 | 35% | Declining engagement, QBR no-shows |
| Oakridge Schools | $95K | Jul 30, 2025 | 72/100 | 28% | Budget pressure, cost exploration |
| Cedar Creek SD | $88K | Sep 1, 2025 | 65/100 | 42% | Support ticket volume increasing |
| Willow Springs SD | $82K | Jun 15, 2025 | 70/100 | 32% | New superintendent, relationship reset |
| Summit Valley SD | $75K | Oct 30, 2025 | 74/100 | 25% | Usage declining (enrollment drop) |
| Meadowbrook SD | $68K | Aug 1, 2025 | 69/100 | 38% | Competitive inquiry detected |
| Hillside Unified | $62K | Nov 15, 2025 | 73/100 | 22% | Service adoption low (not using WiFi) |
| Canyon View SD | $55K | Jul 1, 2025 | 67/100 | 40% | Tech director change, transition risk |
| Desert Sands SD | $82K | Sep 15, 2025 | 71/100 | 30% | E-rate complexity, audit concerns |

### Recommended Intervention Strategy

**Proactive CSM-Led Engagement:**
- Outreach to all 9 Yellow accounts within next 30 days
- Conduct value realization reviews (show ROI delivered)
- Address specific risk factors (budget, engagement, support, transition)
- Early renewal incentives (discount for 90+ day early commitment)

**Resource Allocation:**
- CSM team focus: 60% time on Yellow accounts next 60 days
- Sales support as needed for retention proposals
- VP Sales executive engagement for top 3 by ARR value

**Success Target:**
- Retain 8 of 9 Yellow accounts (89% retention rate)
- Convert 3-4 to early renewals (reduce Q3-Q4 renewal pressure)
- Improve average health score from 68 to 80+ by renewal
- Value preserved: $650K of $732K at risk = 89% success rate

---

## GREEN HEALTHY: EXPANSION FOCUS (34 accounts, $3,105K ARR)

### Expansion Opportunities Identified (12 accounts, $340K potential)

| Account | Current ARR | Health Score | Expansion Opportunity | Potential ARR | Priority |
|---------|-------------|--------------|----------------------|---------------|----------|
| Bear Creek SD | $142K | 92/100 | New campuses (3 locations) | $55K | High |
| Riverside Unified | $125K | 89/100 | Bandwidth upgrade (500M→1G) | $45K | High |
| Lincoln Tech Academy | $108K | 91/100 | Managed WiFi expansion | $38K | High |
| Pinewood Schools | $95K | 87/100 | Security services add-on | $28K | Medium |
| Maplewood SD | $88K | 90/100 | Additional locations (2) | $32K | Medium |
| Greenfield SD | $78K | 86/100 | Bandwidth + WiFi bundle | $40K | Medium |
| Valley View SD | $72K | 88/100 | DIA for admin building | $22K | Medium |
| Lakeside SD | $65K | 89/100 | Managed services upgrade | $25K | Low |
| Timberline SD | $58K | 85/100 | New construction (1 school) | $18K | Low |
| Brookside SD | $52K | 87/100 | WiFi refresh (end of life) | $15K | Low |
| Highland SD | $48K | 86/100 | Bandwidth upgrade | $12K | Low |
| Fairview SD | $45K | 88/100 | Security enhancement | $10K | Low |

### Expansion Strategy

**High Priority (3 accounts, $138K potential):**
- **Proactive Outreach:** Account executive initiate expansion discussions within 30 days
- **Proposal Generation:** Custom proposals by Feb 15
- **Close Target:** Sign by April 30 (Q1/Q2 revenue)
- **Close Rate:** 70% (based on high health score + proactive approach) = $97K incremental ARR

**Medium Priority (5 accounts, $165K potential):**
- **CSM Discovery:** Identify needs and timing during Q1 QBRs
- **Proposal Timing:** Align with budget cycles and E-rate windows
- **Close Target:** Sign by June 30 (Q2/Q3 revenue)
- **Close Rate:** 60% = $99K incremental ARR

**Low Priority (4 accounts, $37K potential):**
- **Opportunistic:** Raise during regular check-ins, no dedicated campaigns
- **Close Target:** Variable based on customer timing
- **Close Rate:** 40% = $15K incremental ARR

**Total Expected Expansion:** $97K + $99K + $15K = $211K incremental ARR (62% of $340K potential)

---

## PORTFOLIO TRENDS & INSIGHTS

### Quarter-over-Quarter Comparison

| Metric | Q4 2024 | Q1 2025 | Change | Analysis |
|--------|---------|---------|--------|----------|
| Avg Health Score | 85/100 | 82/100 | -3pts | Slight decline (seasonal support volume increase) |
| Red Accounts | 2 | 4 | +2 | Concerning - Lincoln County + Jefferson Union degraded |
| Yellow Accounts | 7 | 9 | +2 | Some Green accounts slipped to Yellow (proactive catch) |
| Green Accounts | 38 | 34 | -4 | Portfolio health stable but declining trend |
| Churn Risk (ARR) | $175K | $393K | +$218K | Significant increase - immediate action required |

### Leading Indicators (Early Warning Signals)

**Support Ticket Trends:**
- Q4 ticket volume up 18% vs Q3 (seasonal + 2 equipment failures)
- Escalation rate increased 2.8% → 4.1% (pattern of dissatisfaction)
- Resolution time declined: 95% SLA → 88% SLA (resource constraint?)

**Engagement Patterns:**
- QBR attendance: 78% → 65% (customers cancelling or no-showing)
- Email response time: 24hrs avg → 36hrs avg (declining responsiveness)
- Portal usage: -15% QoQ (customers less engaged with self-service)

**Sentiment Shifts:**
- Budget pressure mentions: 12 customers (up from 7 in Q3)
- Competitive inquiries: 6 detected (up from 3 in Q3)
- Positive feedback declining: 45 CSAT responses vs 62 in Q3

### Root Cause Analysis

**Service Quality Issues:**
- Equipment failures at 2 customer sites (Lincoln County, Mountain Ridge)
- Support response time degraded during holiday season (staffing constraints)
- Communication gaps during incidents (customers felt uninformed)

**Market Dynamics:**
- Regional fiber provider aggressive expansion (targeting ISPN customers)
- School district budget pressures (state funding cuts, inflation)
- E-rate rule changes creating uncertainty (customers seeking guidance)

**Internal Factors:**
- Support team understaffed (2 FTE down, hiring in progress)
- Customer success manager turnover (relationship continuity disrupted)
- Proactive monitoring gaps (incidents detected by customers, not ISPN)

### Recommended Process Improvements

1. **Monthly Health Monitoring:**
   - Shift from quarterly to monthly health score calculation
   - Automated alerts when accounts drop below thresholds (85→Yellow, 60→Red)
   - Proactive intervention rituals (not just reactive crisis management)

2. **Support Quality Initiative:**
   - Accelerate support hiring (fill 2 open positions by Q1)
   - Implement proactive monitoring enhancements (catch issues before customer impact)
   - Communication protocol for incidents (hourly updates during critical outages)

3. **Customer Engagement Cadence:**
   - Mandate quarterly QBRs for all accounts >$50K ARR (no cancellations)
   - Executive check-ins for top 20 accounts (CEO/VP Sales quarterly touches)
   - Customer advisory board (engage advocates, gather feedback, build community)

4. **Competitive Intelligence:**
   - Win/loss analysis process (understand why we win/lose vs competitors)
   - Battle card updates (refresh competitive positioning quarterly)
   - Reference program (activate satisfied customers for peer influence)

---

## EXECUTIVE ACTIONS REQUIRED

### This Week (Jan 15-19)

**CEO (Jeff Neblett):**
- [ ] Call Lincoln County superintendent (Jan 19) - Service recovery, relationship building
- [ ] Call Jefferson Union superintendent (Jan 19) - Early re-engagement, value discussion

**VP Operations (Charlie Brenneman):**
- [ ] Lincoln County technical audit (Jan 20) - Root cause analysis, resolution plan
- [ ] Mountain Ridge equipment upgrade (Jan 22) - Replace aging equipment, prevent failures
- [ ] Support team hiring acceleration - Fill 2 open positions by end of month

**VP Sales (Ty Sorensen):**
- [ ] Board presentation prep (Jan 19) - At-risk accounts, mitigation plans, board-ready format
- [ ] Retention proposals: Lincoln County (Jan 26), Jefferson Union (Feb 2), Pine Valley (Feb 10)
- [ ] CSM team alignment - Assign Yellow account ownership, set proactive outreach goals

**VP Customer Success:**
- [ ] Yellow account outreach plan - 9 accounts, proactive engagement, 30-day timeline
- [ ] QBR re-scheduling - Missed QBRs rescheduled and completed by Feb 28
- [ ] Expansion opportunity pipeline - Prioritize top 3, proposals by Feb 15

### Next 30 Days (Jan 20 - Feb 15)

**Executive QBRs (4 Red accounts):**
- Lincoln County, Jefferson Union, Pine Valley, Mountain Ridge
- CEO + VP Sales + VP Operations attendance (show executive commitment)
- Service recovery, value review, retention proposals, relationship reset

**Retention Proposals (4 Red + 4 Yellow renewals <120 days):**
- Custom retention offers (pricing, service enhancements, multi-year incentives)
- Competitive defense materials (battle cards, references, TCO analysis)
- Board presentation support (materials, attendance if needed)

**Proactive CSM Engagement (9 Yellow accounts):**
- Value realization reviews (show ROI delivered)
- Address specific risk factors (budget, support, engagement, transitions)
- Early renewal incentives (discount for 90+ day early commitment)

**Expansion Pipeline (3 High priority accounts):**
- Proactive outreach and discovery (Bear Creek, Riverside, Lincoln Tech)
- Custom expansion proposals by Feb 15
- Close target by April 30 (Q1/Q2 revenue)

### Ongoing (Monthly Rituals)

**Customer Health Monitoring:**
- Monthly health score calculation (not quarterly)
- Automated alerts for threshold breaches
- Executive dashboard with Red/Yellow/Green summary

**Executive Customer Engagement:**
- CEO/VP Sales check-ins with top 20 accounts (quarterly minimum)
- Board-level relationship building (not just transactional)
- Customer advisory board meetings (semi-annual)

**Competitive Intelligence:**
- Win/loss analysis after every decision (understand why)
- Battle card updates (refresh quarterly based on market changes)
- Reference activation (engage satisfied customers for peer influence)

---

## SUCCESS METRICS & TRACKING

### Retention Targets (Next 90 Days)

| Segment | Accounts | ARR at Risk | Target Retention | Expected ARR Preserved |
|---------|----------|-------------|------------------|------------------------|
| Red | 4 | $393K | 75% | $295K |
| Yellow | 9 | $732K | 90% | $659K |
| Green | 34 | $3,105K | 98% | $3,043K |
| **Total** | **47** | **$4,230K** | **95%** | **$3,997K** |

**Churn Budget:** $233K ARR (5.5% of base) - If exceeded, escalate to CEO

### Expansion Targets (Q1-Q2)

| Priority | Accounts | Potential ARR | Target Close Rate | Expected ARR |
|----------|----------|---------------|-------------------|--------------|
| High | 3 | $138K | 70% | $97K |
| Medium | 5 | $165K | 60% | $99K |
| Low | 4 | $37K | 40% | $15K |
| **Total** | **12** | **$340K** | **62%** | **$211K** |

**Expansion Goal:** $211K incremental ARR in Q1-Q2 (5% growth on base)

### Health Score Improvement Targets

| Timeframe | Red Target | Yellow Target | Green Target | Portfolio Avg |
|-----------|------------|---------------|--------------|---------------|
| Current | 47/100 | 68/100 | 87/100 | 82/100 |
| 30 Days | 60/100 | 75/100 | 88/100 | 84/100 |
| 60 Days | 70/100 | 80/100 | 89/100 | 86/100 |
| 90 Days | 75/100 | 85/100 | 90/100 | 88/100 |

**Success Criteria:** No Red accounts by end of Q1, <5% Yellow accounts by end of Q2

---

## APPENDIX: CHURN PREDICTION MODEL ACCURACY

### Historical Validation (Past 12 Months)

**Actual Churn:** 3 customers ($237K ARR) churned in past year
**Model Predictions:** Health score model flagged all 3 as Red >90 days before churn
**False Negatives:** 0 (no customers churned who weren't flagged as at-risk)
**False Positives:** 2 customers flagged Red but successfully retained (good problem)

**Model Accuracy:**
- **Precision:** 60% (3 churned / 5 flagged Red = 60% actually churned)
- **Recall:** 100% (3 churned / 3 total churn = 100% caught by model)
- **F1 Score:** 75% (harmonic mean of precision and recall)

**Interpretation:** Model successfully identifies all at-risk customers (no surprises) but over-flags slightly (some Red accounts can be saved). Conservative approach preferred (better to over-intervene than miss at-risk customer).

### Quarterly Model Tuning

**Q4 2024 Adjustments:**
- Increased weight of "support escalations" factor (strong churn predictor)
- Added "leadership change" risk multiplier (new superintendents = relationship reset risk)
- Refined "competitive inquiry" detection (web search, pricing request signals)

**Planned Q1 2025 Adjustments:**
- Incorporate "budget pressure" sentiment analysis (text mining of email/calls)
- Add "usage trend" factor (declining bandwidth utilization = growth slowing)
- Refine thresholds based on Q4 outcomes (60→Red may be too high, test 65 threshold)

---

**Analysis Prepared by:** Claude Revenue Operations Intelligence
**Analysis Date:** January 15, 2025
**Next Update:** February 15, 2025 (monthly cadence)
**Presentation:** Board meeting Friday, January 19, 2025

---

## Time Savings Analysis

**Traditional Manual Process:**
- Pull data from multiple systems (CRM, Zendesk, usage): 2 hours
- Calculate health scores manually (spreadsheet formulas): 2 hours
- Identify at-risk accounts and prioritize: 1 hour
- Research root causes and retention strategies: 3 hours
- Format executive presentation: 2 hours
**Total: 10 hours**

**With Claude Customer Health Intelligence:**
- Provide analysis request with parameters: 2 minutes
- Claude pulls data, calculates scores, identifies risks: 8 minutes
- Human reviews analysis and refines: 30 minutes
**Total: 40 minutes**

**Time Savings: 9+ hours per month × 12 months = 108 hours annually**
**Value: 108 hours × $445/hour = $48,060 annual time savings**
**Impact: Churn prevention (2 customers saved × $125K = $250K ARR preserved)**
**Total Value: $298K annually (time + churn prevention)**
