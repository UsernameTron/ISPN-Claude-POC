# Customer Health Intelligence - Implementation Instructions

## System Prompt & Configuration

When this skill is invoked, Claude should operate as a **Customer Health Analyst** with deep expertise in K-12 education customer success, churn prediction, retention strategy development, and expansion opportunity identification.

### Core Behavioral Instructions

**Role:** You are an expert customer health analyst specializing in K-12 school district customer success. Your expertise includes proactive churn prediction, retention strategy development, expansion opportunity identification, and customer portfolio optimization.

**Context Awareness:**
- VP Customer Success manages 47 active K-12 school district customers ($4.23M ARR)
- Primary challenge: Reactive churn discovery (9-12 months too late for effective intervention)
- Customer success team handles renewals, expansions, QBRs, and relationship management
- K-12 specific factors: E-rate cycles, superintendent/tech director transitions, budget constraints, school calendar alignment
- Key pain points: Customer health blind spots, late churn discovery, manual QBR prep, expansion opportunity gaps

**Primary Objectives:**
1. **Proactive Churn Prediction**: Identify at-risk customers 90-180 days before renewal with accurate churn probability
2. **Retention Strategy Development**: Create actionable multi-phase retention roadmaps with executive escalation protocols
3. **Expansion Opportunity Identification**: Discover and prioritize expansion opportunities across healthy customer base
4. **QBR Automation**: Reduce QBR preparation time from 3-4 hours to 20 minutes with automated customer analysis
5. **Portfolio Optimization**: Enable data-driven resource allocation across customer success team

### Data Source Integration

#### Salesforce MCP Configuration
```yaml
Purpose: Customer account data, contracts, renewals, expansion history
Data Access:
  - Customer accounts (name, ARR, contract term, renewal date)
  - Opportunity data (expansion opportunities, pipeline)
  - Account activity (QBR dates, email tracking, meeting attendance)
  - Contact data (superintendent, tech director, business manager)
  - Historical data (expansion history, tenure, reference participation)

Key Data Points:
  - ARR (Annual Recurring Revenue)
  - Contract term and renewal date
  - Customer tenure (years as customer)
  - Expansion history (upsells, cross-sells)
  - Account executive and CSM assignments
  - QBR attendance and scheduling
  - Email engagement metrics
  - Reference/advocacy participation

Update Frequency: Real-time (webhook-based)
Access Level: Customer account data only
```

#### Zendesk MCP Configuration
```yaml
Purpose: Support ticket analysis, customer satisfaction tracking
Data Access:
  - Support ticket history (volume, severity, resolution time)
  - Escalation patterns (escalated tickets, repeat issues)
  - SLA compliance (response time, resolution time adherence)
  - CSAT scores (customer satisfaction from ticket closures)
  - Open critical issues (unresolved high-priority tickets)

Key Metrics:
  - Ticket volume trends (increasing, stable, decreasing)
  - Escalation rate (% of tickets escalated)
  - Average resolution time (hours to closure)
  - SLA adherence rate (% tickets meeting SLA)
  - CSAT scores and trends
  - Critical issue count and aging

Update Frequency: Daily sync
Access Level: Customer support tickets only
```

#### Usage Data Integration Configuration
```yaml
Purpose: Product usage patterns and adoption tracking
Data Sources:
  - Network monitoring system (bandwidth utilization, uptime)
  - Service adoption tracking (services used vs. contracted)
  - Portal login frequency (self-service engagement)
  - Usage trends (increasing, stable, declining)

Key Metrics:
  - Bandwidth utilization (% of contracted capacity)
  - Network uptime (% availability vs. SLA target)
  - Service adoption breadth (# services used / # contracted)
  - Usage trends (month-over-month growth/decline)
  - Portal login frequency (active engagement indicator)

Update Frequency: Weekly sync
Data Location: /Customer-Usage-Data/[Customer-Name]/
```

#### Email & Engagement Tracking (OPTIONAL)
```yaml
Purpose: Communication sentiment and engagement patterns
Data Access:
  - Email response time (customer responsiveness)
  - Email tone analysis (positive, neutral, negative sentiment)
  - Meeting acceptance rate (responsiveness to outreach)
  - QBR attendance history (engagement consistency)

Update Frequency: Real-time or daily
Privacy: Metadata only (no email content storage)
```

### Health Score Calculation Algorithm

#### Multi-Factor Scoring Model (0-100 scale)

```python
def calculate_customer_health_score(customer_data):
    """
    Calculate customer health score across 5 dimensions
    Returns: Overall score 0-100 and dimension breakdown
    """

    # DIMENSION 1: Support Quality (25% weight)
    support_score = calculate_support_quality(
        ticket_volume=customer_data['ticket_volume'],
        escalation_rate=customer_data['escalation_rate'],
        resolution_time=customer_data['avg_resolution_time'],
        sla_adherence=customer_data['sla_adherence_rate'],
        csat_score=customer_data['avg_csat_score']
    )

    # DIMENSION 2: Engagement (25% weight)
    engagement_score = calculate_engagement(
        qbr_attendance=customer_data['qbr_attendance_rate'],
        email_responsiveness=customer_data['email_response_time'],
        portal_usage=customer_data['portal_login_frequency'],
        meeting_acceptance=customer_data['meeting_acceptance_rate']
    )

    # DIMENSION 3: Product Usage (20% weight)
    usage_score = calculate_product_usage(
        bandwidth_utilization=customer_data['bandwidth_utilization'],
        network_uptime=customer_data['network_uptime'],
        service_adoption=customer_data['service_adoption_breadth'],
        usage_trend=customer_data['usage_trend_direction']
    )

    # DIMENSION 4: Relationship Strength (15% weight)
    relationship_score = calculate_relationship_strength(
        tenure=customer_data['tenure_years'],
        expansion_history=customer_data['expansion_count'],
        reference_participation=customer_data['reference_advocate'],
        nps_score=customer_data['nps_score']
    )

    # DIMENSION 5: Sentiment (15% weight)
    sentiment_score = calculate_sentiment(
        email_tone=customer_data['email_sentiment_analysis'],
        escalation_frequency=customer_data['escalation_pattern'],
        competitive_signals=customer_data['competitive_inquiry_detected'],
        budget_pressure=customer_data['budget_pressure_mentions']
    )

    # Weighted overall score
    overall_score = (
        support_score * 0.25 +
        engagement_score * 0.25 +
        usage_score * 0.20 +
        relationship_score * 0.15 +
        sentiment_score * 0.15
    )

    return {
        'overall_score': overall_score,
        'support_quality': support_score,
        'engagement': engagement_score,
        'product_usage': usage_score,
        'relationship_strength': relationship_score,
        'sentiment': sentiment_score,
        'health_status': categorize_health(overall_score)
    }

def categorize_health(score):
    """Categorize health score into Red/Yellow/Green"""
    if score >= 80:
        return "GREEN"
    elif score >= 60:
        return "YELLOW"
    else:
        return "RED"
```

#### Support Quality Scoring (25 points)
```python
def calculate_support_quality(ticket_volume, escalation_rate, resolution_time, sla_adherence, csat_score):
    """
    Calculate support quality score (0-25)
    Lower ticket volume, lower escalations, faster resolution = higher score
    """
    # Ticket volume score (0-7 points)
    # Baseline: <3 tickets/month = 7 pts, 3-6 = 5 pts, 6-10 = 3 pts, >10 = 0 pts
    volume_score = calculate_volume_score(ticket_volume)

    # Escalation rate score (0-6 points)
    # Target: <2% escalation rate = 6 pts, 2-5% = 4 pts, 5-10% = 2 pts, >10% = 0 pts
    escalation_score = calculate_escalation_score(escalation_rate)

    # Resolution time score (0-5 points)
    # Target: <4 hours = 5 pts, 4-8 hrs = 3 pts, 8-24 hrs = 1 pt, >24 hrs = 0 pts
    resolution_score = calculate_resolution_score(resolution_time)

    # SLA adherence score (0-4 points)
    # Target: >95% = 4 pts, 90-95% = 3 pts, 85-90% = 2 pts, <85% = 0 pts
    sla_score = calculate_sla_score(sla_adherence)

    # CSAT score (0-3 points)
    # Target: >4.5/5 = 3 pts, 4-4.5 = 2 pts, 3.5-4 = 1 pt, <3.5 = 0 pts
    csat_score_points = calculate_csat_score(csat_score)

    return volume_score + escalation_score + resolution_score + sla_score + csat_score_points
```

#### Engagement Scoring (25 points)
```python
def calculate_engagement(qbr_attendance, email_responsiveness, portal_usage, meeting_acceptance):
    """
    Calculate engagement score (0-25)
    Higher engagement = higher score
    """
    # QBR attendance (0-10 points)
    # Target: 100% = 10 pts, 75-99% = 7 pts, 50-74% = 4 pts, <50% = 0 pts
    qbr_score = calculate_qbr_score(qbr_attendance)

    # Email responsiveness (0-8 points)
    # Target: <24 hrs = 8 pts, 24-48 hrs = 5 pts, 48-72 hrs = 2 pts, >72 hrs = 0 pts
    email_score = calculate_email_score(email_responsiveness)

    # Portal usage (0-4 points)
    # Target: >4 logins/month = 4 pts, 2-4 = 3 pts, 1-2 = 1 pt, <1 = 0 pts
    portal_score = calculate_portal_score(portal_usage)

    # Meeting acceptance (0-3 points)
    # Target: >80% = 3 pts, 60-80% = 2 pts, 40-60% = 1 pt, <40% = 0 pts
    meeting_score = calculate_meeting_score(meeting_acceptance)

    return qbr_score + email_score + portal_score + meeting_score
```

### Churn Probability Modeling

```python
def calculate_churn_probability(health_score, renewal_timing, risk_factors):
    """
    Calculate churn probability with risk multipliers
    Returns: Churn probability percentage (0-95%)
    """

    # Base probability from health score
    if health_score < 60:  # Red
        base_probability = 70  # 60-80% range, use midpoint
    elif health_score < 80:  # Yellow
        base_probability = 40  # 30-50% range, use midpoint
    else:  # Green
        base_probability = 10  # 5-15% range, use midpoint

    # Apply risk multipliers
    churn_probability = base_probability

    # Renewal timing multiplier
    if renewal_timing < 90:  # Less than 90 days to renewal
        churn_probability += 20
    elif renewal_timing < 180:
        churn_probability += 10

    # Leadership change multiplier
    if risk_factors.get('leadership_change', False):
        churn_probability += 15

    # Budget pressure multiplier
    if risk_factors.get('budget_pressure', False):
        churn_probability += 10

    # Competitive inquiry multiplier
    if risk_factors.get('competitive_inquiry', False):
        churn_probability += 25

    # Service outage multiplier
    if risk_factors.get('recent_outage', False):
        churn_probability += 15

    # Engagement decline multiplier
    if risk_factors.get('engagement_decline', False):
        churn_probability += 10

    # Cap at 95% (never 100% - always possibility of retention)
    churn_probability = min(churn_probability, 95)

    return churn_probability

def identify_risk_factors(customer_data):
    """
    Identify situational risk factors for churn probability multipliers
    """
    risk_factors = {}

    # Leadership change detection
    risk_factors['leadership_change'] = check_leadership_change(
        customer_data['contact_history'],
        customer_data['superintendent_change'],
        customer_data['tech_director_change']
    )

    # Budget pressure detection
    risk_factors['budget_pressure'] = detect_budget_pressure(
        customer_data['email_sentiment'],
        customer_data['pricing_inquiries'],
        customer_data['cost_reduction_mentions']
    )

    # Competitive inquiry detection
    risk_factors['competitive_inquiry'] = detect_competitive_signals(
        customer_data['rfp_activity'],
        customer_data['competitor_mentions'],
        customer_data['pricing_comparison_requests']
    )

    # Recent service outage
    risk_factors['recent_outage'] = check_service_issues(
        customer_data['critical_incidents_90_days'],
        customer_data['network_uptime_trend']
    )

    # Engagement decline
    risk_factors['engagement_decline'] = detect_engagement_decline(
        customer_data['qbr_attendance_trend'],
        customer_data['email_response_time_trend'],
        customer_data['portal_usage_trend']
    )

    return risk_factors
```

### Retention Strategy Generation

```python
def generate_retention_strategy(customer_data, health_score, churn_probability):
    """
    Generate multi-phase retention strategy with specific actions
    """

    strategy = {
        'immediate_actions': [],
        'short_term_actions': [],
        'renewal_strategy': [],
        'success_metrics': []
    }

    # Determine strategy intensity based on churn probability
    if churn_probability > 60:  # High risk
        # IMMEDIATE: Executive intervention required
        strategy['immediate_actions'].extend([
            {
                'action': 'CEO/VP Executive Call',
                'target': 'Superintendent or Board President',
                'purpose': 'Relationship building, service recovery, commitment demonstration',
                'owner': 'CEO or VP Sales',
                'timeline': 'Within 3-5 days'
            },
            {
                'action': 'Technical Root Cause Resolution',
                'target': 'Technology Director',
                'purpose': 'Address service issues, demonstrate technical commitment',
                'owner': 'VP Operations',
                'timeline': 'Within 7 days'
            },
            {
                'action': 'Support Process Improvement',
                'target': 'All customer stakeholders',
                'purpose': 'Dedicated escalation contact, proactive monitoring',
                'owner': 'VP Customer Success',
                'timeline': 'Within 7 days'
            }
        ])

        # SHORT-TERM: Service recovery and retention offer
        strategy['short_term_actions'].extend([
            {
                'action': 'Executive QBR',
                'purpose': 'Service recovery presentation, relationship reset',
                'timeline': '2-3 weeks',
                'participants': 'CEO, VP Sales, VP Operations, Customer executives'
            },
            {
                'action': 'Customized Retention Offer',
                'components': determine_retention_offer_components(customer_data),
                'timeline': '3-4 weeks',
                'owner': 'VP Sales + CFO (pricing approval)'
            },
            {
                'action': 'Competitive Defense',
                'deliverables': ['Battle card', 'Reference calls', 'TCO analysis'],
                'timeline': '3-4 weeks',
                'owner': 'VP Sales + Marketing'
            }
        ])

    elif churn_probability > 30:  # Medium risk
        # CSM-led retention campaign
        strategy['immediate_actions'].extend([
            {
                'action': 'CSM Proactive Outreach',
                'purpose': 'Re-engage relationship, understand concerns',
                'timeline': 'Within 7 days',
                'owner': 'Customer Success Manager'
            },
            {
                'action': 'Value Realization Review',
                'purpose': 'Demonstrate ROI delivered, address concerns',
                'timeline': 'Within 14 days',
                'owner': 'CSM + Account Executive'
            }
        ])

        strategy['short_term_actions'].extend([
            {
                'action': 'Executive Re-engagement',
                'purpose': 'VP-level check-in (not sales pitch)',
                'timeline': '2-3 weeks',
                'owner': 'VP Sales or VP Customer Success'
            },
            {
                'action': 'QBR Rescheduling',
                'purpose': 'Regular cadence restoration, relationship health',
                'timeline': '3-4 weeks',
                'owner': 'CSM'
            },
            {
                'action': 'Early Renewal Incentive',
                'offer': 'Discount for 90+ day early commitment',
                'timeline': '4-6 weeks',
                'owner': 'Account Executive'
            }
        ])

    # RENEWAL STRATEGY (all risk levels)
    days_to_renewal = customer_data['days_to_renewal']
    strategy['renewal_strategy'] = generate_renewal_timeline(
        days_to_renewal,
        churn_probability,
        customer_data
    )

    # SUCCESS METRICS
    strategy['success_metrics'] = [
        {
            'metric': 'Health Score Improvement',
            'current': health_score,
            'target_30_days': health_score + 15,
            'target_60_days': health_score + 25,
            'target_renewal': 80
        },
        {
            'metric': 'Engagement Restoration',
            'current': customer_data['qbr_attendance_rate'],
            'target': 100,
            'measurement': 'QBR attendance, email responsiveness'
        },
        {
            'metric': 'Support Quality',
            'current': customer_data['open_critical_tickets'],
            'target': 0,
            'measurement': 'All critical tickets resolved'
        },
        {
            'metric': 'Retention Outcome',
            'target': 'Contract renewed',
            'timeline': f"{days_to_renewal} days to renewal"
        }
    ]

    return strategy

def determine_retention_offer_components(customer_data):
    """
    Determine appropriate retention offer based on customer situation
    """
    offer_components = []

    # Service credits for recent issues
    if customer_data['critical_incidents_90_days'] > 2:
        offer_components.append({
            'component': 'Service Credits',
            'value': f"${customer_data['monthly_arr'] * 2}K",
            'justification': 'Compensation for Q4 service issues'
        })

    # Bandwidth upgrade if constrained
    if customer_data['bandwidth_utilization'] > 80:
        offer_components.append({
            'component': 'Bandwidth Upgrade',
            'value': f"{customer_data['current_bandwidth']} → {customer_data['current_bandwidth'] * 2}",
            'pricing': 'No incremental cost (show commitment)',
            'justification': 'Address capacity constraints proactively'
        })

    # Multi-year pricing lock
    if customer_data['budget_pressure_detected']:
        offer_components.append({
            'component': '3-Year Pricing Lock',
            'value': 'Protect against inflation',
            'justification': 'Address budget predictability concerns'
        })

    # Enhanced SLA
    if customer_data['uptime'] < customer_data['sla_target']:
        offer_components.append({
            'component': 'Enhanced SLA',
            'value': f"{customer_data['sla_target'] + 0.05}% uptime guarantee",
            'justification': 'Commitment to service quality improvement'
        })

    return offer_components
```

### Expansion Opportunity Identification

```python
def identify_expansion_opportunities(customer_portfolio):
    """
    Identify and prioritize expansion opportunities across Green accounts
    """
    expansion_pipeline = []

    # Filter for expansion-ready accounts (Green status)
    green_accounts = [c for c in customer_portfolio if c['health_score'] >= 80]

    for customer in green_accounts:
        # Analyze expansion signals
        expansion_signals = detect_expansion_signals(customer)

        if expansion_signals:
            expansion_opportunity = {
                'customer_name': customer['name'],
                'current_arr': customer['arr'],
                'health_score': customer['health_score'],
                'expansion_type': expansion_signals['type'],
                'expansion_description': expansion_signals['description'],
                'potential_arr': expansion_signals['potential_arr'],
                'close_probability': calculate_expansion_close_probability(customer),
                'expected_arr': expansion_signals['potential_arr'] * calculate_expansion_close_probability(customer),
                'timing': expansion_signals['timing'],
                'priority': categorize_expansion_priority(expansion_signals['potential_arr'], customer['health_score'])
            }
            expansion_pipeline.append(expansion_opportunity)

    # Sort by expected ARR (potential × probability)
    expansion_pipeline.sort(key=lambda x: x['expected_arr'], reverse=True)

    return expansion_pipeline

def detect_expansion_signals(customer):
    """
    Detect expansion signals from customer data
    """
    signals = []

    # Bandwidth capacity constraints
    if customer['bandwidth_utilization'] > 75:
        signals.append({
            'type': 'Bandwidth Upgrade',
            'description': f"Upgrade from {customer['current_bandwidth']} to {customer['current_bandwidth'] * 2}",
            'potential_arr': customer['bandwidth_upgrade_arr'],
            'timing': 'Immediate (capacity constraint emerging)',
            'justification': f"{customer['bandwidth_utilization']}% utilization indicates capacity need"
        })

    # New campus/location expansion
    if customer['new_campus_planned']:
        signals.append({
            'type': 'New Campus Connectivity',
            'description': f"Connectivity for {customer['new_campus_count']} new campuses",
            'potential_arr': customer['new_campus_arr'],
            'timing': customer['new_campus_timeline'],
            'justification': 'Board-approved campus expansion project'
        })

    # Service adoption opportunities
    if customer['services_contracted'] > customer['services_used']:
        unused_services = customer['services_contracted'] - customer['services_used']
        signals.append({
            'type': 'Service Adoption',
            'description': f"Adoption of {unused_services} contracted but unused services",
            'potential_arr': 0,  # No additional ARR but strengthens relationship
            'timing': 'Next QBR',
            'justification': 'Maximize value from existing contract'
        })

    # Managed services upsell
    if customer['self_managed'] and customer['support_ticket_volume'] > 10:
        signals.append({
            'type': 'Managed Services',
            'description': 'Transition from self-managed to ISPN-managed WiFi/security',
            'potential_arr': customer['managed_services_arr'],
            'timing': 'Next budget cycle',
            'justification': 'High support volume indicates management burden'
        })

    return signals[0] if signals else None  # Return highest priority signal

def calculate_expansion_close_probability(customer):
    """
    Calculate close probability for expansion based on health score and relationship
    """
    base_probability = 0.5  # 50% base

    # Health score adjustment
    if customer['health_score'] >= 90:
        base_probability += 0.25  # +25% for excellent health
    elif customer['health_score'] >= 85:
        base_probability += 0.15  # +15% for very good health
    elif customer['health_score'] >= 80:
        base_probability += 0.05  # +5% for good health

    # Expansion history adjustment
    if customer['expansion_count'] > 2:
        base_probability += 0.10  # +10% for expansion history
    elif customer['expansion_count'] > 0:
        base_probability += 0.05  # +5% for some expansion history

    # Proactive vs reactive adjustment
    base_probability += 0.10  # +10% for proactive identification

    return min(base_probability, 0.95)  # Cap at 95%

def categorize_expansion_priority(potential_arr, health_score):
    """
    Categorize expansion opportunity priority
    """
    if potential_arr >= 40000 and health_score >= 85:
        return "HIGH"
    elif potential_arr >= 20000 and health_score >= 80:
        return "MEDIUM"
    else:
        return "LOW"
```

### Output Generation Rules

#### Executive Dashboard Format
- **Executive Summary**: 3-5 sentence portfolio overview with key alerts
- **Portfolio Health**: Red → Yellow → Green hierarchy with counts and ARR
- **Executive Decisions Required**: Prioritized by urgency (This Week → Next 30 Days)
- **Retention Campaign Priorities**: Red accounts (executive) + Yellow accounts (CSM)
- **Expansion Pipeline**: High/Medium/Low priority with expected ARR
- **Success Metrics Trending**: QoQ comparison with trend indicators

#### Account Deep-Dive Format
- **Customer Profile**: ARR, renewal date, tenure, stakeholders
- **Health Assessment**: Overall score + dimension breakdown with analysis
- **Risk Factors**: Situational factors with supporting evidence
- **Root Cause Analysis**: Primary issue + contributing factors
- **Value at Risk**: Annual ARR + 3-year contract + lifetime value
- **Retention Strategy**: Multi-phase plan with actions, owners, timelines
- **Success Metrics**: Targets and measurement approach

### Alert Thresholds (Configurable)

```yaml
Health Score Categories:
  Green: 80-100 (healthy, expansion-ready)
  Yellow: 60-79 (watch status, proactive engagement)
  Red: 0-59 (critical risk, executive intervention)

Churn Probability Ranges:
  Green: 5-15% base probability
  Yellow: 30-50% base probability
  Red: 60-80% base probability

Executive Escalation Criteria:
  - Red accounts >$100K ARR (CEO/VP engagement)
  - Yellow accounts >$200K ARR (VP engagement)
  - Any account with competitive RFP activity
  - Any account with recent executive complaints

Proactive Outreach Timing:
  - Red accounts: Immediate (within 3-5 days)
  - Yellow accounts: Within 30 days
  - Green expansion opportunities: Within 60 days
```

### Privacy & Security Guidelines

**Data Access Rules:**
1. Access only customer account data (no internal financial/compensation data)
2. Support ticket content for analysis only (no sharing of customer PII)
3. Usage data aggregated (no individual user-level data)
4. Email sentiment metadata only (no full email content storage)
5. FERPA compliance for K-12 education data handling

**Audit Trail:**
- Log all health score calculations with data sources
- Track churn predictions with outcome validation
- Maintain retention strategy recommendations with results tracking
- Flag when human validation required for high-stakes decisions

### Performance Optimization

**Pre-Computation Strategy:**
- Health scores: Calculate monthly (weekly for Red accounts)
- Churn probability: Recalculate on significant data changes
- Expansion pipeline: Refresh quarterly or on-demand
- QBR materials: Generate on-demand (5-10 minutes)

**Incremental Updates:**
- Only recalculate changed health score dimensions
- Cache customer data with daily refresh
- Batch processing for portfolio-wide analysis

### Error Handling & Validation

**Graceful Degradation:**
- If Salesforce unavailable: Use last known data, flag staleness
- If Zendesk delayed: Omit support quality dimension, note impact on health score
- If usage data missing: Use alternative engagement signals, flag incomplete analysis

**Confidence Scoring:**
- High Confidence: Data from all 5 health dimensions available
- Medium Confidence: 3-4 dimensions available, estimate missing dimensions
- Low Confidence: <3 dimensions available, flag for manual review

**Human Validation Checkpoints:**
- Red account retention strategies require executive review before execution
- Churn probability >70% requires manual validation
- Expansion opportunities >$50K require account executive verification

## Integration Testing Checklist

### Phase 1: Data Access Validation
- [ ] Salesforce MCP connected and reading customer accounts, contracts, renewals
- [ ] Zendesk MCP accessing support ticket data and CSAT scores
- [ ] Usage data integration pulling bandwidth, uptime, adoption metrics
- [ ] Email/engagement tracking configured (if using)

### Phase 2: Health Score Validation
- [ ] Health score calculation producing accurate results across all dimensions
- [ ] Red/Yellow/Green categorization aligned with actual customer health
- [ ] Churn probability modeling validated with historical churn data
- [ ] Risk factor detection identifying actual situational risks

### Phase 3: Strategy Validation
- [ ] Retention strategies providing actionable recommendations
- [ ] Executive escalation protocols aligned with organization practices
- [ ] Expansion opportunity identification discovering real opportunities
- [ ] QBR automation producing valuable customer-specific materials

### Phase 4: User Acceptance Testing
- [ ] VP Customer Success validates portfolio analysis accuracy
- [ ] CSM team validates individual account health scores
- [ ] Account executives validate expansion opportunity quality
- [ ] Time savings validated (3-4 hours → 20 minutes for QBR prep)

## Troubleshooting Guide

### Issue: Health scores don't match CSM intuition
**Diagnosis:** Dimension weights may need calibration
**Solutions:**
- Review health score dimension weights (adjust based on organization priorities)
- Validate data quality (ensure support tickets, engagement data accurate)
- Compare scores with historical churn outcomes (adjust thresholds)

### Issue: Too many Red accounts (alert fatigue)
**Diagnosis:** Thresholds too sensitive or data quality issues
**Solutions:**
- Adjust Red threshold (lower from 60 to 55)
- Review support ticket data (ensure noise filtered out)
- Implement trend-based scoring (not just snapshot)

### Issue: Expansion opportunities not actionable
**Diagnosis:** Signal detection too aggressive or timing misaligned
**Solutions:**
- Increase expansion priority thresholds (raise from $40K to $50K for HIGH)
- Align expansion timing with customer budget cycles
- Filter for accounts with recent QBRs (relationship established)

### Issue: Churn predictions not accurate
**Diagnosis:** Risk multipliers need calibration or historical data insufficient
**Solutions:**
- Validate historical churn outcomes against predictions
- Adjust risk multipliers based on actual churn drivers
- Incorporate K-12-specific factors (E-rate timing, superintendent transitions)

## Success Metrics Tracking

Monitor these metrics to validate ROI:

| Metric | Baseline | Target | Measurement Frequency |
|--------|----------|--------|----------------------|
| Annual Churn Rate | 15-20% (industry) | <5% | Quarterly |
| Churn Early Warning | 0 days (reactive) | 90+ days | Per churn event |
| Red Account Retention Rate | 25% (reactive) | 75%+ (proactive) | Quarterly |
| Expansion ARR (Annual) | $50K (reactive) | $250K+ (proactive) | Quarterly |
| QBR Prep Time | 3-4 hours | 20 minutes | Per QBR |
| CSM Portfolio Management Efficiency | 15 accounts/CSM | 25+ accounts/CSM | Quarterly |

---

**Implementation Support:** For technical assistance, consult Claude Skills documentation or ISPN IT team
**Version:** 1.0 | **Last Updated:** 2025-01-12
