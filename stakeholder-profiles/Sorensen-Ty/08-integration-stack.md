# Sorensen Integration Stack: Complete Technical Architecture

**Document Purpose**: Define complete technical integration for Sorensen's VP Sales/Marketing/CS operations, including MCPs, Skills, data flows, security, and compliance requirements.

---

## I. Architecture Overview

### High-Level Integration Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                    CLAUDE CORE (AI Engine)                      │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Skills:                                                 │   │
│  │ • Presentation & Proposal Generation                   │   │
│  │ • Marketing Content & Campaign Strategy                │   │
│  │ • Customer Intelligence & Health Scoring               │   │
│  │ • Sales Pipeline & Forecast Analysis                  │   │
│  └─────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────┘
         │                      │                      │
         ↓                      ↓                      ↓
    ┌─────────┐            ┌─────────┐            ┌──────────┐
    │ HubSpot │            │ Canva   │            │ Slack    │
    │ MCP     │            │ MCP     │            │ MCP      │
    │         │            │         │            │          │
    │ (Data   │            │(Design) │            │(Alerts&  │
    │ Read/   │            │         │            │Workflow) │
    │ Write)  │            │         │            │          │
    └────┬────┘            └────┬────┘            └────┬─────┘
         │                      │                      │
         ↓                      ↓                      ↓
  ┌──────────────┐      ┌──────────────┐      ┌─────────────┐
  │ HubSpot CRM  │      │Canva Design  │      │Slack        │
  │              │      │Platform      │      │Workspace    │
  │• Deals       │      │              │      │             │
  │• Accounts    │      │• Designs     │      │• Channels   │
  │• Contacts    │      │• Brand Kit   │      │• Bots       │
  │• Activities  │      │• Templates   │      │• Webhooks   │
  │• Pipelines   │      │• Assets      │      │             │
  │• Support     │      │              │      │             │
  │  Tickets     │      │              │      │             │
  └──────────────┘      └──────────────┘      └─────────────┘
```

---

## II. Core MCPs (Model Context Protocols)

### MCP 1: HubSpot MCP (Primary Integration)

#### Purpose
Real-time connection to HubSpot CRM for pipeline, customer, and activity data. Enables Claude to read operational data and write back intelligence (health scores, coaching notes, tasks).

#### Data Flows

**Inbound (Read)**:
- Deal objects: stage, close date, deal size, sales rep, associated account
- Account objects: company info, industry, size, revenue, contact list
- Contact objects: name, title, email, phone, engagement history
- Activity objects: calls, emails, meetings, notes logged by sales/CS team
- Support tickets: issue, status, resolution time, customer sentiment
- Customer usage data: (if connected via integration) logins, features, seats used

**Outbound (Write)**:
- Health scores (1-10 for customers)
- Forecast probability adjustments (for deals)
- Coaching recommendations (notes field on deals)
- Churn risk alerts (custom field)
- Expansion opportunity flags (custom field)
- Task creation (e.g., "Call customer" with context)
- Notes (on accounts for expansion/churn context)

#### API Permissions Required

```json
{
  "required_scopes": [
    "crm.objects.deals.read",
    "crm.objects.deals.write",
    "crm.objects.accounts.read",
    "crm.objects.accounts.write",
    "crm.objects.contacts.read",
    "crm.objects.contacts.write",
    "crm.objects.custom_objects.read",
    "crm.objects.custom_objects.write",
    "crm.schemas.custom_objects.read",
    "crm.objects.line_items.read",
    "sales_pipelines.read",
    "tickets.read",
    "tickets.write",
    "crm.objects.activities.read"
  ]
}
```

#### Implementation Steps

1. **Setup HubSpot API Credentials**
   - Create private app in HubSpot (Settings → Integrations → Private Apps)
   - Grant required scopes (see above)
   - Generate API key

2. **Configure Claude Integration**
   - Add HubSpot MCP connector in Claude workspace
   - Provide API key and HubSpot portal ID
   - Test data connection (fetch sample deal)

3. **Create Custom Fields** (for Claude outputs)
   - Deal: `claude_forecast_probability` (number, 0-100)
   - Deal: `claude_coaching_notes` (text field)
   - Account: `claude_health_score` (number, 1-10)
   - Account: `claude_churn_risk_probability` (number, 0-100)
   - Account: `claude_expansion_opportunity` (text)

4. **Configure Data Refresh Cadence**
   - Daily full refresh: Nightly (2am ET) for comprehensive analysis
   - Real-time alerts: Immediate push for critical flags (churn >80%)
   - Incremental updates: Hourly refresh for new activities

#### Security & Compliance

- **Data Scope**: Only deal/account/contact/activity data; no sensitive documents
- **API Rate Limits**: 100 requests/second (HubSpot limit); Claude respects via queuing
- **Data Retention**: HubSpot handles retention; Claude doesn't store customer data
- **Encryption**: HTTPS for all API calls; API key rotated quarterly
- **Access Control**: Limited to designated Claude workspace; IP whitelisting optional

#### Maintenance & Monitoring

- **Error Handling**: Automatic retry with exponential backoff; alert if sync fails for >4 hours
- **Data Quality Checks**: Validate required fields exist; log data gaps
- **Performance Monitoring**: Track API response times; alert if >5 second average latency

---

### MCP 2: Canva MCP (Secondary Integration)

#### Purpose
Design execution layer. Claude generates creative briefs; Canva MCP executes designs (decks, marketing assets, templates).

#### Data Flows

**Inbound (From Claude)**:
- Design brief (text: "Create 15-slide pitch deck with CFO value prop for SaaS company")
- Content (headlines, subheadings, key messages, data points)
- Visual specifications (color palette, style, brand assets to use)

**Outbound (To User)**:
- Editable Canva design (link for team iteration)
- Export options: PDF (distribution), PowerPoint (editing), PNG/JPG (social)
- Design metadata (dimensions, layers, assets used)

**Inbound (Brand Kit)**:
- Company logos (primary, secondary, favicon)
- Color palette (primary, secondary, accent colors with hex codes)
- Typography (font families, sizes, line heights)
- Imagery guidelines (recommended sources, style)

#### API Capabilities

```
Supported Design Types:
├─ Presentations (16:9, 4:3, custom dimensions)
├─ Social media graphics (Instagram, LinkedIn, Twitter sizes)
├─ Email templates (800px width, responsive)
├─ Documents (various page sizes)
├─ Infographics (custom dimensions)
├─ Flyers/posters (various sizes)
└─ Custom dimensions (for landing pages, etc.)

Generation Methods:
├─ Prompt-based (Claude describes what to create)
├─ Template-based (start with Canva template, populate with content)
├─ Brand kit-based (auto-apply company colors/fonts)
└─ AI-assisted (Canva AI refines design based on feedback)
```

#### Implementation Steps

1. **Set Up Canva Workspace**
   - Create Canva team account (if not exists)
   - Upload company brand kit (logos, colors, fonts)
   - Create 3-5 base templates (sales deck, QBR, email, social, document)

2. **Configure Canva MCP**
   - Connect Canva API key to Claude workspace
   - Grant permissions: designs.create, designs.read, assets.upload

3. **Create Generation Profiles** (for common use cases)
   - Sales Deck Profile: 15-slide template, product/company colors, layout
   - Marketing Campaign Profile: Email header, social graphics, landing page hero
   - QBR Dashboard Profile: Health scorecard, metrics, recommendations
   - Board Presentation Profile: Executive summary, data visualization

4. **Test Generation Workflow**
   - Test 1: Generate sales deck with sample data
   - Test 2: Generate email campaign with personalization
   - Test 3: Export to multiple formats (PDF, PowerPoint, PNG)

#### Security & Compliance

- **Design Privacy**: Designs stored in Canva (not Claude servers); SOC 2 compliant
- **Brand Compliance**: All designs generated with brand kit; consistent with brand guidelines
- **Sharing Control**: Designs can be public (shared link) or private (team only)
- **Version Control**: Canva maintains design history; can revert to previous versions
- **Content Moderation**: Canva AI filters inappropriate content

#### Export & Distribution

- **PDF Export**: High-quality print-ready; embeds fonts
- **PowerPoint Export**: Editable in Microsoft Office; maintains formatting
- **PNG/JPG Export**: Web-ready; transparent background option
- **Direct Sharing**: Generate shareable link (valid for 7 days default)

---

### MCP 3: Slack MCP (Tertiary Integration)

#### Purpose
Workflow embedding and real-time alerting. Claude pushes insights and alerts directly into Slack channels, eliminating friction in adoption.

#### Data Flows

**Outbound (From Claude to Slack)**:
- Daily digests (sales metrics, customer health summary, content performance)
- Critical alerts (churn risk >75%, major expansion opportunity)
- Weekly reports (forecast accuracy, CSM effectiveness, marketing ROI)
- Action reminders (e.g., "QBR scheduled with Customer X")

**Inbound (From Slack Users)**:
- Quick polls (team feedback on messaging variations)
- Requests (e.g., "Generate a custom deck for prospect Y")
- Feedback (thumbs up/down on Claude recommendations)

#### Slack Channel Structure

**Recommended Channels**:
```
#claude-sales-intel
├─ Daily forecast digest (7am)
├─ Deal risks & coaching (as they occur)
├─ Forecast accuracy report (Mondays)

#claude-customer-success
├─ Churn alerts (critical, as they occur)
├─ Expansion opportunities (daily)
├─ Health scorecards (weekly)

#claude-marketing
├─ Campaign performance (daily)
├─ Content velocity metrics (weekly)
├─ Marketing ROI analysis (monthly)

#claude-exec-summary
├─ Board-ready summary (Mondays)
├─ Revenue operations status (weekly)
└─ Strategic initiatives (monthly)
```

#### Implementation Steps

1. **Create Slack Workspace Channels**
   - Create channels above (or consolidate to fewer if needed)
   - Set channel description and permissions

2. **Configure Slack Bot**
   - Create Slack app in workspace (Slack API)
   - Grant permissions: `chat:write`, `files:write`, `reactions:read`
   - Install bot to workspace

3. **Set Up Claude → Slack Webhooks**
   - Generate Slack webhook URLs for each channel
   - Configure Claude to post to webhooks on schedule
   - Set posting times (e.g., 7am for daily digest)

4. **Configure Alert Thresholds**
   - Churn risk alert threshold: >75% probability
   - Expansion opportunity threshold: >60% probability, >$20K size
   - Forecast variance alert: If actual vs. forecasted >15%

#### Message Format & Richness

**Example: Churn Risk Alert**
```
:warning: CHURN ALERT - TechCorp Inc

Annual Value: $120K
Renewal Date: October 15 (14 days)
Risk Probability: 85%

Key Signals:
• Usage down 25% (Sept)
• Support tickets up 40%
• CSM notes: "Customer quiet for 2 weeks"

Recommended Action:
Executive outreach + emergency QBR

Action Link: [Create task in HubSpot]
More Details: [Link to account health report]
```

**Example: Daily Sales Digest**
```
📊 SALES FORECAST DIGEST - October 10

Current Forecast: $3.2M ±8% (vs. $3.8M face-value)
Expected Close: $2.95M - $3.45M

At-Risk Deals (5):
1. Acme Corp $400K - Days in stage: 8 (vs. 5 avg)
2. BigCo Inc $300K - No activity x 3 days
[...]

Top Coaching Opportunity:
Deal X - Schedule decision-maker call this week
(Similar deals close 78% of the time after alignment)

Forecast Accuracy: ±8% (vs. ±18% baseline)
```

#### Security & Compliance

- **Message Encryption**: Slack messages encrypted at rest and in transit
- **User Permissions**: Only team members with channel access see alerts
- **Data Sensitivity**: Alerts contain deal/account names; avoid public channels
- **Audit Trail**: Slack maintains message history (configurable retention)
- **Rate Limiting**: Claude respects Slack API rate limits (100 requests/minute)

#### Adoption & Usage Guidelines

- **Start Conservative**: Begin with 1-2 channels; expand based on adoption
- **Tune Alert Thresholds**: Adjust based on team feedback (avoid alert fatigue)
- **Encourage Feedback**: Team can react to alerts (👍/👎) to tune algorithm
- **Weekly Review**: Review alert accuracy and usefulness weekly; adjust accordingly

---

## III. Claude Skills Required

### Skill 1: Presentation & Proposal Generation

**Function**: Transform brief into polished pitch deck or proposal

**Inputs**:
- Prospect name, company, industry, decision-maker roles
- Use case / challenge
- Competitive context
- Deal size, timeline

**Outputs**:
- 15-20 slide presentation outline
- Key messages per slide
- Recommended visuals
- Talking points for sales rep

**Integration**:
- Receives brief from sales rep (Claude chat or form)
- Generates outline (2 min)
- Sends to Canva MCP for design (5 min)
- Returns editable design link

**Accuracy Metrics**:
- Time-to-editable-deck: <15 minutes
- Prospect-specific customization: >90% of content customized to prospect
- Sales rep satisfaction: >80% find deck immediately usable

---

### Skill 2: Marketing Content & Campaign Strategy

**Function**: Generate full campaign briefs and messaging variations

**Inputs**:
- Campaign goal (lead gen, awareness, demand)
- Target persona (title, company size, industry)
- Key message / value prop
- Desired outcomes (CAC, MQLs, pipeline)

**Outputs**:
- Email sequence (3-5 emails with subject lines, copy, CTAs)
- Landing page copy (headline, subheading, body, CTA)
- Social media variations (3-5 persona-specific messages)
- Visual creative direction
- Sales talking points

**Integration**:
- Marketing manager inputs brief via Claude chat
- Claude generates full campaign brief (5 min)
- Sends brief to Canva MCP for visual design (5 min)
- Returns campaign asset suite (email headers, social graphics, landing page design, case study template)

**Accuracy Metrics**:
- Time-to-launchable-campaign: <2 hours (vs. 3-4 weeks today)
- Persona-specific messaging: 3-5 variations generated
- Content volume: 50+ pieces generated per campaign (reuse + repurposing)

---

### Skill 3: Customer Intelligence & Health Scoring

**Function**: Analyze customer data and identify risks/opportunities

**Inputs**:
- Customer usage data (from integration or manual input)
- Support ticket history and sentiment
- CSM notes and interaction history
- Contract terms and renewal date

**Outputs**:
- Health score (1-10)
- Churn probability (0-100%)
- Expansion probability (0-100%)
- Expansion opportunity size and recommendation
- Intervention recommendations (specific actions to improve health)
- Risk alerts (for Slack notification)

**Integration**:
- Queries HubSpot nightly for customer data
- Calculates health scores
- Writes scores back to HubSpot custom fields
- Sends critical alerts to Slack
- Generates weekly health report for CSM review

**Accuracy Metrics**:
- Health score accuracy: >75% in Weeks 1-2, improving to >85% by Week 4
- Churn prediction accuracy: >80% of flagged accounts show warning signs
- Expansion opportunity accuracy: >60% of identified opportunities are actionable (vs. <30% today)

---

### Skill 4: Sales Pipeline & Forecast Analysis

**Function**: Intelligent pipeline analysis and deal coaching

**Inputs**:
- Deal pipeline (all active deals with stage, close date, sales rep, activity)
- Historical close data (what rep's actual close rates by stage)
- Deal notes and activity logs
- Customer account context (industry, company size, budget)

**Outputs**:
- Probability-weighted forecast (vs. face-value)
- Forecast confidence band (±X% variance expected)
- Per-deal coaching recommendations
- Risk alerts (deals at risk of slip/loss)
- Sales rep performance insights (top performers vs. underperformers)
- Best practice playbooks (what top performers do differently)

**Integration**:
- Queries HubSpot for deal pipeline (hourly)
- Applies probability weighting and risk analysis
- Writes coaching notes to deal records in HubSpot
- Sends alerts to sales managers for deals at risk
- Generates weekly forecast summary
- Sends daily digest to Slack

**Accuracy Metrics**:
- Forecast accuracy: ±8% confidence band (vs. ±18% baseline)
- Deal recovery rate: >8% of flagged deals accelerated or recovered
- Coaching recommendation acceptance rate: >70% of recommendations trigger action by sales rep

---

## IV. Data Integration Workflows

### Workflow 1: Daily Sales Forecast Update

**Trigger**: 6:00 AM daily

**Steps**:
1. Claude connects to HubSpot MCP
2. Queries all active deals (stage, close date, rep, activity)
3. Queries rep historical close rates (from historical deal data)
4. Calculates:
   - Probability-weighted forecast
   - Per-deal risk assessment
   - Forecast confidence band
5. Writes coaching notes to deal records (HubSpot MCP)
6. Writes forecast summary to Slack (#claude-sales-intel)

**Output**: 
- HubSpot deal record: updated `claude_coaching_notes`, `claude_forecast_probability`
- Slack: Daily digest at 7:00 AM

**Latency**: <5 minutes from trigger to output

---

### Workflow 2: Weekly Customer Health Review

**Trigger**: Every Monday 7:00 AM

**Steps**:
1. Claude connects to HubSpot MCP
2. Queries all customer accounts with usage data, support tickets, CSM notes
3. Calculates:
   - Health score (1-10) based on usage, support, engagement
   - Churn probability
   - Expansion probability and size
   - Intervention recommendations
4. Writes health scores and flags to HubSpot (custom fields)
5. Sends critical alerts (churn >75%) immediately to Slack
6. Generates weekly health report for CSM managers

**Output**: 
- HubSpot account records: updated health score, churn risk, expansion opportunity
- Slack: Immediate alerts for critical risks; daily digest of health summary
- Email: Weekly health report to CS leadership

**Latency**: <10 minutes from trigger to output

---

### Workflow 3: On-Demand Campaign Generation

**Trigger**: Marketing manager inputs brief via Claude chat

**Steps**:
1. Claude collects campaign brief (goal, persona, message, timeline)
2. Claude Skill generates full campaign strategy
3. Claude sends brief to Canva MCP
4. Canva generates visual assets (email, social, landing page)
5. Claude reviews designs and suggests edits (if needed)
6. Provides finalized asset suite to marketing manager

**Output**: 
- Editable Canva designs (email, social, landing page)
- Exportable PDFs for distribution
- Messaging document for sales team use

**Latency**: <30 minutes from input to final designs (vs. 1 week today)

---

### Workflow 4: On-Demand Sales Deck Generation

**Trigger**: Sales rep inputs prospect details via Slack command or Claude chat

**Steps**:
1. Sales rep provides: prospect company, industry, use case, competitors, deal size
2. Claude Skill generates custom value prop and deck outline
3. Claude sends brief to Canva MCP with prospect branding
4. Canva generates 15-slide deck with custom content
5. Provides editable Canva link to sales rep

**Output**: 
- Editable Canva design (ready for rep review)
- Exportable PowerPoint for presentation

**Latency**: <15 minutes from input to editable design

---

## V. Data Security & Compliance

### Data Classification

| Data Type | Classification | Storage | Encryption | Retention |
|-----------|-----------------|---------|-----------|-----------|
| Deal/Account data | Internal | HubSpot | HTTPS + at-rest | HubSpot default (90 days) |
| Customer usage data | Internal | HubSpot + Claude | HTTPS + at-rest | 30 days in Claude |
| Support tickets | Sensitive | HubSpot | HTTPS + at-rest | HubSpot default |
| Marketing assets | Internal | Canva | HTTPS + at-rest | Permanent (Canva) |
| Slack messages | Internal | Slack | HTTPS + at-rest | Slack default (30 days) |
| Claude interaction logs | Internal | Claude | Encrypted | 30 days |

### Security Controls

**Authentication & Authorization**:
- HubSpot API: Private app with scoped permissions (only read/write required fields)
- Canva API: Workspace-level token; separate from user accounts
- Slack: Workspace-level bot token with minimal scopes
- Claude: API key rotation quarterly; access tied to designated workspace

**Data Flow Security**:
- All APIs use HTTPS; TLS 1.2+
- API keys stored in secure credential manager (not in code)
- Rate limiting: Respect provider limits; queue requests to avoid overload
- Error handling: Fail safely; log errors without exposing sensitive data

**Access Control**:
- Only designated team members (Sorensen, sales managers, CSMs, marketing manager) have Claude workspace access
- IP whitelisting optional (if on VPN)
- Slack channel-level permissions (e.g., only sales team sees #claude-sales-intel)

**Compliance Requirements**:
- **SOC 2 Type II**: HubSpot and Canva are SOC 2 compliant
- **GDPR**: Customer data subject to GDPR if EU users
  - Data Processing Agreement (DPA) in place with HubSpot/Canva
  - Deletion on request supported
- **CCPA**: California customer data subject to CCPA
  - Ability to access, delete, opt-out provided
- **Audit Trail**: HubSpot maintains full audit log of changes; available for compliance review

### Incident Response

**Data Breach Protocol**:
1. Detect: Claude logs any unusual access patterns
2. Contain: Immediately revoke affected API key
3. Assess: Determine scope and data exposed
4. Notify: Inform affected parties per regulatory requirements
5. Remediate: Rotate keys, patch vulnerabilities, restore data
6. Review: Post-incident analysis to prevent recurrence

**Monitoring & Alerting**:
- Monitor HubSpot MCP API error rates (alert if >5% errors)
- Monitor Canva MCP rate limit usage (alert if >80% of quota)
- Monitor Slack webhook failures (alert if consecutive failures)
- Review Claude access logs weekly for anomalies

---

## VI. Implementation Roadmap

### Phase 1: Foundation (Week 1-2)

**Week 1 Tasks**:
- [ ] Set up HubSpot API credentials and private app
- [ ] Create Claude custom fields in HubSpot (health_score, churn_risk, etc.)
- [ ] Set up Canva workspace and brand kit
- [ ] Create Slack channels for alerts
- [ ] Configure Slack app and webhook URLs
- [ ] Test HubSpot ↔ Claude data connection
- [ ] Test Canva design generation
- [ ] Test Slack message delivery

**Week 2 Tasks**:
- [ ] Deploy daily forecast workflow (HubSpot → Claude → HubSpot + Slack)
- [ ] Deploy weekly customer health workflow
- [ ] Train Sorensen and pilot team (2 hours)
- [ ] Pilot 3 sales decks with Canva
- [ ] Pilot 1 marketing campaign with Canva + Slack

**Success Criteria**:
- [ ] HubSpot data flowing correctly
- [ ] Claude analyzing pipeline and generating forecasts
- [ ] Canva generating high-quality designs
- [ ] Slack alerts delivering reliably
- [ ] Sorensen team confident in system

---

### Phase 2: Expansion (Week 3-4)

**Week 3 Tasks**:
- [ ] Expand forecast analysis to full sales team (vs. pilot group)
- [ ] Deploy customer health scoring to 1 CS segment (5-10 accounts)
- [ ] Train full sales team (1 hour)
- [ ] Launch 2 marketing campaigns (full velocity)

**Week 4 Tasks**:
- [ ] Full deployment decision (measure pilot results)
- [ ] Expand customer health to all CSMs (if results positive)
- [ ] Expand marketing campaigns (all ongoing campaigns adopt velocity)
- [ ] Measure and report business impact (forecast accuracy, churn prevention, marketing ROI)

**Success Criteria**:
- [ ] Forecast accuracy improving (±8% target)
- [ ] Customer health scores >75% accurate
- [ ] Marketing campaigns launching 7x faster
- [ ] Team adoption >70%
- [ ] Business impact metrics showing >$50K benefit

---

### Phase 3: Optimization (Month 2-3)

**Ongoing Tasks**:
- [ ] Tune health score algorithm based on CSM feedback
- [ ] Optimize alert thresholds (reduce false positives)
- [ ] Add additional data sources (customer success events, usage analytics)
- [ ] Expand to new use cases (ABM account scoring, content recommendations)
- [ ] Implement advanced analytics (ROI attribution, performance trends)

---

## VII. Technical Support & Maintenance

### SLA & Support Response

| Severity | Issue | Response Time | Resolution Time |
|----------|-------|----------------|-----------------|
| Critical | Data not flowing; alerts not working | 1 hour | 4 hours |
| High | Claude not generating outputs; Canva designs broken | 2 hours | 8 hours |
| Medium | Slow performance; occasional missing data | 4 hours | 24 hours |
| Low | Feature request; documentation needed | 8 hours | 7 days |

### Monitoring & Health Checks

**Daily Checks**:
- [ ] HubSpot MCP: API connectivity test (query 1 deal)
- [ ] Canva MCP: Design generation test (generate test slide)
- [ ] Slack MCP: Message delivery test (send test alert)
- [ ] Claude Skills: Each skill executes test case successfully

**Weekly Checks**:
- [ ] API rate limit usage (all MCPs)
- [ ] Error rate trends (all systems)
- [ ] Data quality audit (HubSpot field completeness)
- [ ] Performance metrics (latency, uptime)

**Monthly Checks**:
- [ ] Full system integration test (end-to-end workflow)
- [ ] Security audit (access controls, API key rotation check)
- [ ] Capacity planning (data volume growth, API quota usage)
- [ ] Team feedback and iteration (adoption metrics, pain points)

### Escalation Path

1. **First Line**: Designated team lead (Sorensen or sales manager)
   - Simple troubleshooting (check data in HubSpot, verify Slack settings)
   - Document issue

2. **Second Line**: Technical implementation partner
   - Diagnose API errors, configuration issues
   - Access to system logs and monitoring

3. **Vendor Support**: If needed
   - HubSpot support (data/API issues)
   - Canva support (design generation issues)
   - Slack support (integration issues)

---

## VIII. Disaster Recovery & Backup

### Data Backup Strategy

**HubSpot Data**:
- HubSpot provides built-in backup (30-day retention default)
- Claude maintains local copy of deal/account data (used for analysis)
- Monthly export of critical deal records to Google Sheets (as backup)

**Canva Designs**:
- Canva stores all designs with version history
- Designs can be exported to PowerPoint (editable backup)

**Slack Messages**:
- Slack maintains message history (retention policy: 30 days default, enterprise: 7 years optional)
- Critical alerts can be exported to Google Sheets weekly

### Recovery Procedures

**If HubSpot data corrupted**:
1. HubSpot restore from backup (via support)
2. Resync deal/account data to Claude
3. Regenerate recent forecasts/health scores
4. Validate accuracy before re-enabling

**If Canva workspace corrupted**:
1. Restore from Canva backups
2. Regenerate any lost designs (templates enable quick regeneration)
3. Resume normal operations

**If Slack integration fails**:
1. Check webhook URLs and connectivity
2. Recreate Slack app if needed
3. Restore webhook URLs
4. Retest message delivery

**RTO/RPO Goals**:
- RTO (Recovery Time Objective): <4 hours
- RPO (Recovery Point Objective): <24 hours (daily refresh cycle)

---

## IX. Scaling Considerations

### As Organization Grows

**Data Volume Scaling**:
- **Today**: 10 customers, $1M ARR, 10 reps, 120 active deals
- **Year 2**: 50 customers, $2M ARR, 15 reps, 200 active deals
- **Year 3**: 100 customers, $4M ARR, 20 reps, 300 active deals

**API Usage Impact**:
- HubSpot read operations: Scale linearly with deal volume
- Canva design generation: Scale with campaign velocity (not constrained)
- Slack messages: Scale with alert volume (tunable via thresholds)

**Performance Impact**:
- Daily forecast: 5 min today → 10 min at Year 3 volume (still <1% of day)
- Customer health: 5 min today → 10 min at Year 3 volume
- Design generation: 5 min (no change; not volume-dependent)

**Optimization at Scale**:
- Add parallel processing for deal analysis (reduce forecast generation time)
- Implement caching for rep historical patterns (reduce API calls)
- Archive old deals (reduce query size)

### Headcount Scaling

**Today**: 1 optimization owner (5 hours/week)
**Year 2**: 1 FTE (as organization scales and use cases expand)
**Year 3**: 1 FTE (plateaus; maintenance mode)

---

## X. Appendix: Configuration Checklists

### Pre-Launch Checklist

- [ ] **HubSpot Setup**
  - [ ] Private app created with scoped permissions
  - [ ] API key generated and securely stored
  - [ ] Custom fields created (health_score, churn_risk, forecast_probability, coaching_notes)
  - [ ] Test connection to HubSpot API successful
  - [ ] Sample deal query returns correct data

- [ ] **Canva Setup**
  - [ ] Team workspace created
  - [ ] Brand kit uploaded (logos, colors, fonts)
  - [ ] 5 base templates created and tested
  - [ ] Canva API key generated
  - [ ] Test design generation successful

- [ ] **Slack Setup**
  - [ ] Workspace app created with required scopes
  - [ ] 3-5 channels created for Claude alerts/digests
  - [ ] Webhook URLs generated for each channel
  - [ ] Test message delivery successful

- [ ] **Claude Configuration**
  - [ ] Workspace created
  - [ ] HubSpot MCP added and configured
  - [ ] Canva MCP added and configured
  - [ ] Slack MCP added and configured
  - [ ] All Skills loaded and tested

- [ ] **Security & Compliance**
  - [ ] API keys securely stored (not in code)
  - [ ] Access controls configured (IP whitelisting if applicable)
  - [ ] Data processing agreement reviewed
  - [ ] Compliance review completed (SOC 2, GDPR, CCPA)
  - [ ] Incident response plan documented

- [ ] **Team Training**
  - [ ] Sorensen: 2-hour overview + hands-on training
  - [ ] Sales team: 1-hour Claude skills training
  - [ ] Marketing team: 1-hour campaign generation workflow
  - [ ] CS team: 1-hour customer health scoring training
  - [ ] Documentation: Quick-start guides for each use case

- [ ] **Monitoring & Support**
  - [ ] Monitoring dashboard set up (API health, error rates)
  - [ ] Support escalation path defined
  - [ ] SLA agreed upon
  - [ ] On-call rotation established

---

## XI. Conclusion: Ready for Deployment

This integration stack provides a complete, secure, and scalable foundation for Claude to transform Sorensen's revenue operations. Key success factors:

1. **Data Quality**: HubSpot data clean and complete (audit in Week 1)
2. **Integration Robustness**: All MCPs tested and monitored
3. **Team Adoption**: Early wins with Sorensen → team adoption follows
4. **Continuous Optimization**: Monitor and adjust based on team feedback

**Estimated Time to Value**: $50K-100K monthly benefit by Month 2; scaling to $150K-200K monthly by Month 4

**Recommendation**: Proceed with Phase 1 deployment. Measure results in Week 4. Scale based on business impact metrics.

---

## End of Integration Stack Document
