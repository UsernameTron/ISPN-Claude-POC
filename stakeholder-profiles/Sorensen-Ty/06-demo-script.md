# Sorensen Demo Script: Claude in Revenue Operations
## Complete Facilitated Demonstration

**Duration:** 45 minutes  
**Attendees:** Ty Sorensen (VP Sales/Marketing/CS), Sales Manager, CSM, Marketing Manager  
**Objective:** Prove 3 high-impact use cases (forecast, customer health, marketing velocity) through interactive demonstration

---

## Pre-Demo Setup (15 min before session)
- Sorensen's laptop with Claude, HubSpot open
- Sample HubSpot data exported: 20 active deals, 10 key accounts with usage data
- Canva workspace with brand kit pre-loaded
- Slack workspace connected and ready for alerts
- Timer for demo segments

---

## OPENING: Context Setting (2 min)

### Facilitator
"Ty, your team spends 25-30 hours per week on data analysis, content creation, and reporting. We're going to show you how Claude transforms that into strategic advantage. Over 45 minutes, we're going to demonstrate:

1. **Sales Pipeline Intelligence** - Transform forecast variance from ±18% to ±8%
2. **Customer Health & Expansion** - Identify at-risk accounts 1-2 months early + expansion opportunities
3. **Marketing Velocity** - Create custom sales decks in 15 minutes vs. 4 hours

Sound good? Let's start with your pipeline."

---

## DEMO 1: Sales Forecast & Pipeline Intelligence (12 min)

### Setup (1 min)
**Facilitator:** "I'm going to walk you through what Claude does every morning with your HubSpot pipeline data. Let me show you what we're working with."

**Action:** Open HubSpot, show pipeline summary
- $3.8M in active pipeline
- 120+ deals across 5 stages
- 10 sales reps with varying close rates
- Manual forecast today: $3.2M-$4.4M range (±18% variance)

### Part A: Intelligence Generation (3 min)

**Facilitator:** "Here's Claude's overnight analysis. Watch what happens when we apply intelligence to your raw data."

**Show Claude Output (Screenshot 1: Forecast Summary)**
```
SALES FORECAST ANALYSIS - DECEMBER CLOSE
Generated: 6:00 AM Today

EXECUTIVE SUMMARY
Probabilistic Forecast: $3.2M ±8% confidence
(Face-value pipeline: $3.8M, but probability-weighted for actual close patterns)

FORECAST CONFIDENCE
- Green zone ($2.95M - $3.45M): 75% probability
- Expected close: $3.2M
- Confidence band: Tighter than historical ±18% variance

DEAL COMPOSITION
- High probability ($>100K, 80%+): $1.4M (solid close)
- At-risk ($20K-$100K, 40-60% prob): $800K (coaching needed)
- Long-shot ($<$20K, <40% prob): $1.6M (unlikely to close)

TOP RISKS (5 DEALS FLAGGED)
[List with specific analysis]
```

**Talking Point:** "This is what you get manually from your team: $3.2M forecast. Claude does this automatically, but with probability weighting specific to each sales rep's historical close rates by stage."

---

### Part B: Why This Matters - Deal-Level Insight (4 min)

**Facilitator:** "Let me show you why this forecast is more accurate. Look at Deal X."

**Show Claude Output (Screenshot 2: Deal-Specific Coaching)**
```
DEAL: "Acme Corp - Enterprise Implementation" ($400K deal)
Rep: Sarah Johnson | Stage: 3 (Proposal) | Days in stage: 8 days

HEALTH ASSESSMENT: 🟡 AT RISK
Historical context:
- Sarah's avg time in Stage 3: 5 days
- Current: 8 days (60% longer than her avg)
- Peer average Stage 3 duration: 5-7 days
- Risk signal: Proposal delivery stalled?

ACTIVITY ANALYSIS
- Last activity: 3 days ago (email response)
- Typical rep behavior: 1-2 day follow-up cycles
- Missing: Scheduled follow-up call with stakeholder
- Comparison: Similar deal size in Stage 3 (2 weeks ago) had decision-maker call scheduled by Day 6

COACHING RECOMMENDATION
Next best action: Schedule decision-maker alignment call this week
- Why? Similar deals won 78% of the time after stakeholder alignment
- Template: [Link to playbook from similar won deals]
- Talking points: Focus on implementation timeline alignment (your risk in similar deals)

PROBABILITY: Currently 65% close probability (vs. Sarah's 75% average in Stage 3)
Path to 80%: 1) Decision-maker call, 2) Technical review scheduled
```

**Talking Point:** "This is not a gut feel. This is Sarah's actual historical pattern compared to her peers. The recommendation is based on what similar deals do when they win. You can send this to Sarah, and she has a clear action and context."

**Sorensen's Likely Question:** "But what if Sarah already has this scheduled and just didn't log it?"

**Response:** "Great point. That's why this is input to your coaching, not output. You know Sarah; you'll know if this is on-track or not. What Claude does is surface the pattern so you're not guessing."

---

### Part C: Board-Level Benefit (2 min)

**Facilitator:** "Here's where this becomes a board conversation."

**Show Claude Output (Screenshot 3: Forecast Report)**
```
NOVEMBER CLOSE - FORECAST vs. ACTUALITY

Forecast (Nov 1): $3.2M ±8% = $2.95M - $3.45M range
Actual close (Nov 30): $3.15M

Result: WITHIN FORECAST ✓

Previous month forecast variance: ±18%
This month: ±8%
→ Improvement: 55% tighter forecast

---

BOARD CONVERSATION TODAY
"We forecast $3.2M close. We closed $3.15M. 
Our forecast confidence is ±8%, so we're within expected variance. 
Board can rely on this forecast for resource planning."

vs. Previous conversations:
"We forecasted $3-4M. We closed $3.15M. 
We don't really know. We always overshoot or undershoot."
```

**Talking Point:** "You're not just getting a forecast. You're getting forecast reliability. Your board gets confidence in your numbers."

---

## DEMO 2: Customer Health & Expansion Intelligence (12 min)

### Setup (1 min)
**Facilitator:** "Now let's shift to customer success. Same idea: raw data + Claude intelligence = proactive decisions."

**Action:** Open HubSpot, show customer segment
- 20 key accounts
- Usage metrics, support tickets, CSM notes
- Manual process: CSM reviews each account weekly (2-3 hours)
- Today: Reactive churn (find out 2 weeks before non-renewal)

### Part A: Proactive Health Scoring (3 min)

**Facilitator:** "Here's what Claude does overnight with your customer data."

**Show Claude Output (Screenshot 4: Customer Health Dashboard)**
```
CUSTOMER HEALTH SCORECARD - THIS WEEK

CRITICAL ALERTS 🔴
1. TechCorp Inc | Health: 2/10 | Churn Risk: 85%
   - Annual value: $120K | Renewal: 14 days
   - Key signal: Usage down 25% MoM, support tickets up 40%, CSM notes: "quiet for 2 weeks"
   - Action: Executive outreach + emergency QBR
   - Recommended by: Sorensen + Product Lead to discuss roadmap

2. FinServe Solutions | Health: 3/10 | Churn Risk: 70%
   - Annual value: $80K | Renewal: 30 days
   - Key signal: Only 1 department using platform, planned expansion never materialized
   - Action: Needs executive alignment on team-wide rollout

AT-RISK ACCOUNTS (Health 4-6/10) 🟡
- 3 accounts showing warning signs (usage decline, support friction, CSM sentiment)
- All have renewal within 90 days
- Recommended: Proactive QBR within 2 weeks

HEALTHY ACCOUNTS (Health 8-10/10) ✅
- 10 accounts strong: steady usage, low support friction, CSM positive
- 3 accounts showing EXPANSION SIGNALS

EXPANSION OPPORTUNITIES 🟢
1. MidCorp Tech | Health: 9/10 | Expansion Probability: 75%
   - Current contract: $50K | Expansion size: $40K (new department)
   - Signal: 1 dept at 90% platform adoption; planned expansion to 3 depts
   - Action: Schedule expansion conversation this month
   - Timing: Now (customer momentum high, budget cycle favorable)

2. LargeBank Corp | Health: 8/10 | Expansion Probability: 60%
   - Current: $100K | Expansion size: $50K (advanced features)
   - Signal: 5 users at very high adoption; feature request volume up 150%
   - Action: Product training call → upsell conversation

3. GlobalTech Inc | Health: 8/10 | Expansion Probability: 55%
   - Current: $75K | Expansion size: $30K (new use case)
   - Signal: Strong executive sponsor, budget cycles align, similar company already expanded
```

**Talking Point:** "This used to be your CSM calling you saying 'I think TechCorp might churn.' Now you have specific signals 2-4 weeks earlier."

---

### Part B: Intervention Opportunity (4 min)

**Facilitator:** "Let's zoom into TechCorp and see what happens when you act on this insight."

**Show Claude Output (Screenshot 5: Account Deep-Dive)**
```
TECHCORP INC - INTERVENTION ROADMAP

SITUATION SUMMARY
- Customer since: Jan 2023 | Contract value: $120K | Renewal: Oct 15 (14 days)
- Status: HIGH RISK (Health 2/10, Churn 85%)
- Reason to intervene: This is a win you can still save

KEY SIGNALS (Last 30 Days)
Usage: Down 25% MoM (logins, features, active users)
Support: Tickets up from 2/month to 8/month; avg resolution time +5 days
CSM notes: 
  - Sept 1: "Customer very engaged, quarterly review planned"
  - Sept 15: "Customer quiet, not responding to emails for 1 week"
  - Oct 1: "Heard through indirect channel that customer considering alternative solution"

LIKELY ROOT CAUSE (Based on signal pattern)
→ Implementation/internal adoption issue (not product issue)
→ Customer success likely hit organizational change that derailed adoption
→ Customer hasn't articulated problem to CSM yet (early warning opportunity)

INTERVENTION STRATEGY
Stage 1 (This week - before it's a conversation)
[ ] Executive outreach from Sorensen (tone: "Checking in, noticed usage patterns shifted, want to understand how we can help")
[ ] Product lead joins to discuss technical roadmap + new capabilities that may address original use case
[ ] Schedule intensive 1-week support sprint (100% CSM time focused on adoption)

Stage 2 (Next week - QBR)
[ ] QBR with customer (structured: current progress, blockers, roadmap alignment)
[ ] Propose payment plan/restructure if budget is the issue
[ ] New success metrics for Q1 (fresh start after intervention)

Expected outcome: 40-60% save probability with this intervention
(vs. 5% probability if you wait for their non-renewal letter)

TALKING POINTS FOR SORENSEN'S CALL
- "We noticed usage shifted in September. Walk me through what happened?"
- "Our team is ready to invest hard here—what would help?"
- "New features launching Q1 might address your original implementation challenges"

THIS IS NOT A SALES CONVERSATION
This is: "We know you're struggling and we want to help"
```

**Talking Point:** "You're not reacting to a non-renewal. You're getting ahead of it with specific context. And you're getting this intelligence weekly."

**Sorensen's Likely Question:** "What if they just decided they don't need us anymore?"

**Response:** "That's always possible. But 85% of the time, when usage drops this pattern, it's a problem you can solve. You're giving yourself 2 weeks to solve it vs. finding out at non-renewal time."

---

### Part C: Expansion as Revenue Stream (2 min)

**Facilitator:** "But notice we also identified 3 expansion opportunities."

**Show Claude Output (Screenshot 6: Expansion Pipeline)**
```
EXPANSION OPPORTUNITIES - REVENUE PIPELINE

Current view (without Claude):
- CSM managing 30 accounts
- 1-2 expansion deals closed per quarter (reactive)
- Avg expansion size: $25K
- Quarterly expansion revenue: $25K-50K

With Claude (systematic identification):
- 8 expansion opportunities identified this month
- Avg expansion size: $40K
- Probability-weighted value: $240K
- Q1 projection: 3-4 deals likely to close
- Quarterly expansion revenue: $120K-160K
- Annual improvement: +$300K-500K (3-4x increase)

Why the difference?
- Before: CSM focused on keeping customers happy (reactive)
- Now: CSM + Claude identifies expansion signals (proactive)
- Before: CSM brings best ideas to account; misses others
- Now: Claude systematically analyzes customer usage vs. available features
- Before: Timing is random
- Now: Claude flags customers at moment they're ready to expand

NEXT ACTION: This week, Sorensen + Sales Manager schedule expansion conversations with MidCorp and LargeBank (pre-qualified by Claude, warm handoff to AE)
```

**Talking Point:** "You're not losing customers AND you're growing revenue systematically. This is predictable expansion, not reactive."

---

## DEMO 3: Marketing Velocity & Sales Enablement (12 min)

### Setup (1 min)
**Facilitator:** "Last use case: watch what happens with marketing and sales content."

**Action:** Open Canva, show design workspace
- Sample marketing campaign (CFO targeting for cloud migration)
- Sample sales deck (generic version vs. about-to-be-customized versions)

---

### Part A: Campaign Content Generation (4 min)

**Facilitator:** "It's Monday morning. You want to launch a campaign targeting CFOs of mid-market tech companies. Timeline: this week. Let me show you what Claude + Canva does in 2 hours vs. 1 week."

**Show Claude Output (Screenshot 7: Campaign Brief)**
```
CAMPAIGN BRIEF - Generated by Claude

Campaign Name: "Cloud Migration: Cutting Through Complexity"
Target: CFOs, mid-market tech companies (500-2000 employees)
Message pillars: Simplify architecture, reduce operational overhead, improve forecasting
Timeline: Launch Tuesday

EMAIL SEQUENCE (5 emails, delivered Mon-Fri following week)
Email 1 Subject: "The cloud complexity tax"
Hook: Most teams spend 40% of engineering time on infrastructure vs. shipping features
Value prop: Simplification framework
CTA: Read 2-min playbook

Email 2 Subject: "Why your cloud bill is 3x what it should be"
Message: Architect decisions early save $500K+
Visual: Before/after cost analysis
CTA: Book 30-min architecture review

Email 3 Subject: "[Company name] reduced cloud spend by 35%"
Format: Customer story (tailored by industry)
Social proof: CFO testimonial (your words: "worth every penny")
CTA: Case study download + setup call

Email 4 Subject: "3 architectural patterns we're seeing win"
Format: Playbook with examples
Message: How leaders in your space approach cloud strategy
CTA: Webinar signup (patterns deep-dive)

Email 5 Subject: "Join 50+ CFOs who've simplified cloud"
FOMO/closing: Webinar coming, early access for segment
CTA: Register

LANDING PAGE COPY
Headline: "Cut cloud complexity in half—without sacrificing performance"
Subheading: "See how midmarket tech leaders are shipping faster and saving money"
3-section body: Problem (complexity), Solution (our approach), Social proof (results)
CTA: "Get architecture review" or "See case studies"

CANVA ASSETS TO CREATE
Email headers (5 variations)
Landing page hero section (2 design options)
LinkedIn carousel (5 slides, 3 style variations)
Social media graphics (Twitter, LinkedIn, Instagram)
Case study template (fill-in for 3 customer examples)

SALES TALKING POINTS
Objection 1: "Sounds expensive"
Counter: Average customer saves $400K annually in cloud spend, amortized over 2 years
Objection 2: "We've tried simplification before"
Counter: Architecture decisions made at project start vs. retrofit = 80% faster, 50% less rework
Objection 3: "Our team built our own solution"
Counter: Custom build = 18-month engineering cost; our solution + integration = 4 months + $50K

MESSAGING VARIATIONS BY INDUSTRY
Tech companies (your target): Engineering efficiency + cost focus
Financial services: Compliance + cost focus
Healthcare: Reliability + compliance focus
```

**Talking Point:** "This is the entire campaign strategy. It took Claude 5 minutes to generate this. Your team would spend a day or two writing this out."

---

### Part B: Visual Asset Generation (3 min)

**Facilitator:** "Now watch Canva take this brief and create all the visual assets automatically."

**Action:** In Canva, show the generation workflow
1. Claude's brief is the input
2. Canva sees: "I need email headers, landing page, social graphics, case study template"
3. Canva generates:

**Show Canva Output (Screenshot 8: Generated Assets)**
- Email header graphics (5 variations, brand colors)
- Landing page hero section (2 design options with recommended headlines)
- LinkedIn carousel slides (5 slides with suggested copy positioning)
- Social media templates (Twitter, LinkedIn, Instagram with customizable messaging)
- Case study template (pre-designed, ready for customer info fill-in)

**Talking Point:** "Your designer didn't touch this. All generated by Canva from Claude's brief. Takes 20 minutes to generate, 5 minutes to review and adjust. Launches Tuesday instead of the following Monday."

---

### Part C: Sales Deck Customization at Scale (3 min)

**Facilitator:** "Here's where this really saves time for your sales team."

**Scenario:** "It's Tuesday, and you have 3 hot deals in the pipeline. Sales reps need custom pitch decks. Watch how Claude + Canva does this."

**Show Claude Workflow (Screenshot 9: Sales Deck Generation)**
```
INPUT (Sales Rep: "I need a deck for TechCorp deal")
Rep provides:
- Prospect company: TechCorp Inc (500 employees, SaaS)
- Industry: Software Development
- Prospect role: CTO + CFO
- Use case: Cloud architecture optimization
- Known competitive threat: [Competitor X]
- Deal size: $250K

OUTPUT FROM CLAUDE (2 minutes)
- Custom value prop (cloud simplification + $400K cost savings for SaaS companies)
- ROI analysis (specific to SaaS: 18-month payback, ongoing savings)
- Competitive positioning (vs. Competitor X: our unique approach)
- Risk mitigation (if they've tried cloud optimization before, why they failed and how we're different)
- Next steps (architecture review agenda, 3-week implementation timeline)

CANVA OUTPUT (5 minutes)
- Title slide with TechCorp logo + branding
- Company context slide (their business, cloud challenges they likely face)
- Problem statement (cloud complexity affecting engineering velocity)
- Solution approach (our methodology, 3-stage implementation)
- ROI analysis slide (specific to SaaS: cost breakdown, timeline, result)
- Case study slide (similar company: GlobalTech SaaS, similar challenge, result)
- Competitive differentiation (vs. Competitor X)
- Team introduction
- Next steps / CTA

TOTAL TIME: 15 minutes vs. 3-4 hours if rep customizes generic deck

PROCESS FOR 3 REPS
Rep 1 (TechCorp): 15 min → Deck ready
Rep 2 (MidCorp Inc, financial services): 15 min → Deck ready
Rep 3 (LargeBank Corp, financial services): 15 min → Deck ready

Total time investment from Claude + Canva: 45 minutes
Rep time to review/adjust: 15 min each = 45 min
Total: 1.5 hours to prepare 3 custom decks that are board-ready

Traditional process: 12-15 hours (4-5 hours per rep)
Savings: 10+ hours this week alone
```

**Talking Point:** "Three custom, prospect-specific decks in 45 minutes. Your sales team spends time selling, not deck-building."

---

### Part D: Expected Business Impact (2 min)

**Facilitator:** "Here's what we see when this happens at scale."

**Show Claude Output (Screenshot 10: Marketing ROI)**
```
CAMPAIGN LAUNCH IMPACT - WEEK 1

Monday: Campaign designed and ready (vs. ready Friday next week)
Tuesday: Campaign launches 4 days early

EMAIL PERFORMANCE
Sent: 5K prospects (vs. 3K if delayed 1 week, customer fatigue at end of month)
Open rate: 35% (6% above baseline, due to persona-specific subject lines)
Click rate: 8% (vs. 5% baseline) = 200 additional clicks
MQL conversion: 5% = 10 additional MQLs

SALES ENABLEMENT IMPACT
Custom decks for 10 hot deals this week (vs. 2-3 because reps don't have time)
Close rate improvement: 5% lift on prospect-specific messaging (historical)
Deal velocity: 1-2 week acceleration (decision-makers see relevance faster)

WEEKLY PIPELINE IMPACT
New MQLs: 10 from campaign
New opportunities from custom decks: 3 (better qualified leads)
Pipeline acceleration: 2-3 deals moving forward 1-2 weeks
Monetary value this week: $50K-100K incremental pipeline

MONTHLY PROJECTION
Campaign velocity: 10x (multiple campaigns launched with full asset suite)
Sales deck velocity: 50+ custom decks generated (vs. 10-15 manually)
Content reuse: Campaign assets repurposed for 3-4 additional campaigns
Monthly pipeline impact: $200K-400K

ANNUAL PROJECTION
Content velocity improvement × $X monthly pipeline = $1M-2M annual incremental
```

**Talking Point:** "You're not just faster. You're smarter—better targeted, more relevant, better timed. And the sales team's closing ability improves because they have better tools."

---

## CLOSING: Business Case Review (5 min)

### Facilitator
"Let's step back and look at what we've shown you."

**Show Summary (Screenshot 11: Complete Business Case)**
```
DEMO IMPACT SUMMARY

Sales Intelligence
├─ Forecast accuracy: ±18% → ±8% (55% improvement)
├─ Deal recovery: 8-12% of at-risk deals saved
├─ Sales cycle: 1-2 week acceleration
└─ Monthly impact: $50K-100K in forecast reliability + deal recovery

Customer Success
├─ Churn prevention: 12% → 10% (early intervention)
├─ Expansion opportunities: Systematic ID = 3x revenue improvement
├─ CS efficiency: Enable 40-50 accounts/CSM vs. 25-30
└─ Monthly impact: $30K-60K in churn prevention + expansion

Marketing & Sales
├─ Campaign velocity: 7x faster launch
├─ Sales deck customization: 90% time reduction
├─ Content volume: 5-10x increase
├─ Personas/segment variation: Unlimited (not limited by design capacity)
└─ Monthly impact: $100K-200K in pipeline acceleration + better targeting

TOTAL MONTHLY BUSINESS IMPACT: $180K-360K
TOTAL ANNUAL IMPACT: $2M-4M (conservative, given team scaling)

TEAM TIME RECAPTURED: 200+ hours monthly (60-70% efficiency gain)

INVESTMENT: $25K-35K Year 1 (Claude API, implementation, training)
ROI: 25x-50x
```

---

## Q&A: Likely Questions & Answers

### Q1: "How accurate are these health scores really?"
**A:** "Out of the box, 70-75% accurate. They improve over 4-6 weeks as Claude learns your CSM patterns. The key: it flags accounts for CSM review, not automated action. You still make the final call."

### Q2: "What if the forecast is wrong?"
**A:** "It will be wrong sometimes. But less wrong than today. Your forecast goes from ±18% (might be $3.2M or $4.8M) to ±8% (will be $3.0M-$3.4M). Board gets confidence."

### Q3: "Does this replace our sales managers?"
**A:** "No. It makes them better. Instead of spending 2 hours consolidating data, they spend 1 hour coaching. The coaching is better because it's specific and data-backed."

### Q4: "What about data privacy?"
**A:** "All HubSpot data stays in HubSpot. Claude sees sanitized versions for analysis. Customer names, email addresses are removed. All data is encrypted."

### Q5: "How long to see results?"
**A:** "Forecast accuracy improves by Week 2. Customer health signals appear Week 1. Marketing velocity change: Day 1. Sales team benefit ramps Weeks 2-4."

### Q6: "What if our team doesn't want to use it?"
**A:** "That's the main risk. That's why we're starting with you as the proof point. If you adopt it, the team will follow. Resistance usually drops when they see time saved."

---

## CLOSE: Decision & Next Steps

### Facilitator
"You've seen what's possible. Here's what happens next."

**If Sorensen is interested:**
1. "Let's schedule a 30-minute call to discuss pilot scope and timeline"
2. "We'll start with a 4-week pilot: forecast + customer health + 1 sales deck campaign"
3. "We'll measure results and decide on full rollout"

**What we need from you:**
1. Approval to proceed with pilot (4 weeks, $8K-12K cost)
2. 3-5 hours of your time in Week 1
3. HubSpot API access for Claude integration
4. Confirmation from 1 sales manager + 1 CSM to pilot

**Timeline:**
- Week 1: Setup complete
- Weeks 2-4: Pilot + measurement
- Week 5: Expand to full team (if metrics support)

**Next meeting:** "Can we get on calendar tomorrow to lock in the pilot scope and start date?"

---

## Post-Demo Follow-Up

### Email to Sorensen (24 hours after demo)
```
Subject: Next Steps on Claude Pilot

Hi Ty,

Thanks for the time on the demo today. Here's what we discussed:

PILOT PROPOSAL: 4-week proof of concept focused on:
1. Sales forecast intelligence (improve accuracy ±18% → ±8%)
2. Customer health scoring (proactive churn prevention + expansion ID)
3. Sales deck customization at scale (90% time reduction)

INVESTMENT: $8K-12K (pilot cost)
EXPECTED BENEFIT: $50K-100K per month
ROI: 5x-10x during pilot phase

TIMELINE:
- Week 1 (Nov 15-19): Setup + data validation
- Weeks 2-4 (Nov 22-Dec 10): Pilot + measurement
- Week 5 (Dec 13): Expand to full team (if approved)

NEXT STEPS:
1. Confirm pilot kickoff date + team participation (sales manager + CSM + marketing manager)
2. Authorize HubSpot API access for Claude integration
3. Schedule 30-minute kickoff call to align on success metrics

Can we get 30 min on calendar this week to finalize the pilot scope?

Thanks,
[Your name]
```

---

## Demo Material Checklists

### Slides/Screenshots Needed
- [ ] HubSpot pipeline overview (20 deals, $3.8M)
- [ ] Claude forecast summary (probabilistic analysis, ±8% band)
- [ ] Deal-specific coaching (TechCorp example)
- [ ] Customer health dashboard (8 accounts with health scores)
- [ ] TechCorp intervention roadmap
- [ ] Expansion opportunity pipeline
- [ ] Campaign brief (email sequence, landing page, assets)
- [ ] Canva generated assets (email headers, landing page, social graphics)
- [ ] Sales deck customization workflow
- [ ] Business case summary

### Live Demo Components
- [ ] Claude chat with HubSpot integration running
- [ ] Canva workspace with brand kit active
- [ ] Slack workspace ready for alert notification
- [ ] Google Slides open for export demo
- [ ] Sample HubSpot data file exported and ready

### Handouts for Attendees
- [ ] One-pager: "Claude in Revenue Operations" (business case summary)
- [ ] Technical integration doc: "HubSpot + Canva + Claude Architecture"
- [ ] Pilot proposal: "4-Week Proof of Concept Scope"
- [ ] ROI calculator: "Expected business impact by function"

---

## Success Metrics: Demo Was Successful If...

✅ Sorensen understands how Claude transforms raw data to strategic insight  
✅ Sales Manager sees deal coaching as valuable (not gimmicky)  
✅ CSM sees health scoring as useful (and time-saving)  
✅ Marketing Manager visualizes campaign velocity improvement  
✅ Sorensen commits to 4-week pilot  
✅ Team volunteers for pilot participation  
✅ Sorensen asks "When can we start?" (vs. "What if it doesn't work?")  

---

## Demo Timing Notes

- **Don't rush**: Use the full 45 minutes. Sorensen will have questions; answer them.
- **Pause for questions**: After each use case section, ask: "Questions so far?"
- **Relate to Sorensen's world**: Reference their deals, customers, campaigns (not generic examples)
- **Show the "boring" parts**: Revenue operations is often boring (spreadsheets, reports). Show how Claude makes it interesting and fast.
- **Be specific on ROI**: Don't say "this will save time." Say "90% time reduction on deck customization = 10 hours/week recaptured."
- **Frame as advisor, not replacement**: "Claude tells you what to pay attention to. You make the final call."

---

## Demo Ending Fallback Scenarios

### If Sorensen Says "This Is Interesting But I'm Not Sure..."
**Response:** "That's a fair reaction. Let's do a 2-week micro-pilot on just the sales forecast piece. We'll prove the concept on one use case before expanding to the full 4-week pilot. Sound good?"

### If Sorensen Says "We Need to See ROI Before We Commit..."
**Response:** "Perfect. That's exactly why the 4-week pilot exists. We'll measure everything and show you the ROI before you commit to scale. Timeline: results by December 15."

### If Sorensen Says "My Team Won't Have Time for Training..."
**Response:** "Training is only 1 hour for the basics. After that, it's 15 minutes per use case. Plus, the whole point is to save time—so the time investment pays back immediately."

### If Sorensen Says "What About Our Data Security?"
**Response:** "Great question. All data stays in HubSpot (encrypted). Claude sees anonymized data for analysis only. No customer names, emails, or sensitive info exposed. Happy to connect you with our security team if you want specifics."

---

## End of Demo Script
