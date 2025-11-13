# Operations Executive Intelligence - Implementation Guide

## Purpose
This skill enables SVP-level executives to transform fragmented operational data into strategic intelligence, reducing manual synthesis time from 40 hours/week to 8 hours/week while improving decision quality and organizational alignment.

## System Prompts & Implementation

### Core System Prompt
```
You are an expert operational intelligence analyst for senior executives. Your role is to synthesize complex operational data from multiple sources (Asana projects, financial systems, team reports) into executive-ready insights that enable strategic decision-making.

Key Capabilities:
1. Initiative Portfolio Analysis: Assess health, resource allocation, and strategic alignment of 15-25 concurrent strategic initiatives
2. Cross-Functional Intelligence: Identify organizational bottlenecks, resource conflicts, and alignment opportunities
3. Executive Communication: Generate board-level operational narratives with actionable recommendations
4. Resource Optimization: Model resource allocation scenarios and recommend rebalancing opportunities
5. Risk Assessment: Identify operational risks requiring executive intervention with prioritized action plans

Always include:
- Quantified metrics with trend analysis
- Specific executive actions required with owners and timelines
- Business impact assessment for each recommendation
- Color-coded status indicators (Red/Yellow/Green) with clear escalation criteria
- Forward-looking analysis (next 30/60/90 days)

Output Format: Executive dashboard style with clear sections for immediate actions, strategic insights, and operational metrics.
```

### Portfolio Health Analysis Prompt
```
Analyze the strategic initiative portfolio and generate executive intelligence:

1. PORTFOLIO STATUS ASSESSMENT
- Calculate initiative health scores based on timeline adherence, budget performance, milestone achievement
- Identify initiatives requiring immediate executive attention (Red status)
- Flag initiatives with emerging risks (Yellow status)
- Confirm initiatives on track (Green status)

2. RESOURCE UTILIZATION ANALYSIS
- Map current resource allocation across all initiatives
- Identify over-allocated departments/teams
- Flag resource conflicts and dependencies
- Recommend resource rebalancing opportunities

3. EXECUTIVE ESCALATION ITEMS
- Prioritize issues requiring SVP-level intervention
- Provide specific recommended actions with business impact
- Assign accountability and suggested timelines
- Quantify strategic value at risk

4. STRATEGIC INSIGHTS
- Identify patterns across initiative performance
- Recommend portfolio optimization opportunities
- Assess organizational capacity for new initiatives
- Provide 30/60/90-day forward-looking analysis

Format as executive dashboard with immediate actions at the top, followed by strategic analysis and supporting metrics.
```

### Board Reporting Automation Prompt
```
Generate board-ready operational review materials:

1. EXECUTIVE SUMMARY (Board Level)
- Strategic initiative portfolio performance vs. plan
- Key operational achievements and challenges
- Resource utilization and organizational health
- Critical decisions required from board/CEO

2. OPERATIONAL METRICS DASHBOARD
- Initiative completion rates and timeline performance
- ROI realization across strategic portfolio
- Cross-functional collaboration effectiveness
- Resource efficiency and utilization trends

3. FORWARD-LOOKING ANALYSIS
- Upcoming risks and mitigation strategies
- Capacity for new strategic initiatives
- Organizational scalability assessment
- Next quarter operational priorities

4. APPENDICES
- Individual initiative deep-dives for any Red/Yellow status items
- Resource allocation models and scenarios
- Historical trend analysis and benchmarking

Use professional board presentation language, include specific metrics, and ensure all recommendations include business impact quantification.
```

### Crisis Response Prompt
```
When operational crisis or urgent escalation identified:

1. IMMEDIATE ASSESSMENT
- Quantify business impact (revenue, customer, reputation risk)
- Identify root cause analysis and contributing factors
- Map stakeholder impact and communication requirements
- Assess timeline sensitivity and decision urgency

2. RESPONSE OPTIONS
- Generate 2-3 response scenarios with trade-offs
- Estimate resource requirements for each option
- Model timeline and success probability
- Identify required executive decisions and approvals

3. IMPLEMENTATION PLAN
- Define specific actions with owners and deadlines
- Establish communication cascade requirements
- Set monitoring and measurement criteria
- Plan post-crisis review and lessons learned

4. STAKEHOLDER COMMUNICATION
- Draft executive team notification
- Prepare board escalation if required
- Create customer/partner communication if needed
- Plan internal organization communication

Format as crisis briefing with immediate actions, decision options, and implementation timeline.
```

## MCP Integration Patterns

### Asana MCP Integration
```python
# Example integration pattern for Asana data retrieval
def get_initiative_portfolio_data():
    """Retrieve comprehensive initiative data from Asana"""
    initiatives = []
    
    # Get all strategic initiative projects
    projects = asana_mcp.search_projects(tags=["strategic-initiative"])
    
    for project in projects:
        initiative_data = {
            'name': project.name,
            'status': project.status,
            'completion_rate': calculate_completion_rate(project),
            'budget_status': get_budget_performance(project),
            'resource_allocation': get_resource_data(project),
            'timeline_adherence': calculate_timeline_performance(project),
            'dependencies': get_cross_project_dependencies(project),
            'risks': extract_risk_indicators(project)
        }
        initiatives.append(initiative_data)
    
    return initiatives

def calculate_portfolio_health(initiatives):
    """Calculate overall portfolio health metrics"""
    health_scores = []
    for initiative in initiatives:
        score = weighted_health_score(
            timeline=initiative['timeline_adherence'],
            budget=initiative['budget_status'], 
            completion=initiative['completion_rate'],
            risk_level=initiative['risks']
        )
        health_scores.append(score)
    
    return {
        'overall_health': sum(health_scores) / len(health_scores),
        'red_count': len([s for s in health_scores if s < 60]),
        'yellow_count': len([s for s in health_scores if 60 <= s < 80]),
        'green_count': len([s for s in health_scores if s >= 80])
    }
```

### Filesystem MCP Integration
```python
def store_analysis_results(analysis_data, report_type):
    """Store generated analysis in organized file structure"""
    timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
    
    base_path = "/Operations/Generated-Reports/"
    
    if report_type == "executive_dashboard":
        file_path = f"{base_path}Executive-Dashboards/{timestamp}_portfolio_dashboard.md"
    elif report_type == "board_materials":
        file_path = f"{base_path}Board-Materials/{timestamp}_operational_review.md"
    elif report_type == "crisis_response":
        file_path = f"{base_path}Crisis-Response/{timestamp}_crisis_brief.md"
    
    filesystem_mcp.write_file(file_path, analysis_data)
    return file_path

def load_historical_data():
    """Load historical operational data for trend analysis"""
    historical_files = filesystem_mcp.list_files("/Operations/KPI-Data/")
    trend_data = []
    
    for file_path in historical_files:
        if file_path.endswith('.xlsx'):
            data = filesystem_mcp.read_excel(file_path)
            trend_data.append(process_historical_metrics(data))
    
    return combine_trend_analysis(trend_data)
```

## Workflow Orchestration

### Daily Morning Brief
```python
def generate_daily_brief():
    """Generate daily operational brief for executive team"""
    portfolio_data = get_initiative_portfolio_data()
    overnight_changes = detect_significant_changes(portfolio_data)
    resource_conflicts = identify_resource_issues(portfolio_data)
    
    brief = f"""
    # DAILY OPERATIONAL BRIEF - {today()}
    
    ## OVERNIGHT CHANGES
    {format_change_summary(overnight_changes)}
    
    ## TODAY'S PRIORITIES
    {generate_daily_priorities(portfolio_data)}
    
    ## RESOURCE ALERTS
    {format_resource_alerts(resource_conflicts)}
    
    ## EXECUTIVE DECISIONS NEEDED
    {identify_pending_decisions(portfolio_data)}
    """
    
    store_analysis_results(brief, "daily_brief")
    return brief
```

### Weekly Executive Sync
```python
def generate_weekly_exec_sync():
    """Generate weekly executive team sync materials"""
    portfolio_health = calculate_portfolio_health()
    cross_functional_issues = identify_alignment_gaps()
    upcoming_decisions = get_upcoming_decisions()
    
    sync_materials = f"""
    # WEEKLY EXECUTIVE SYNC - Week of {this_week()}
    
    ## PORTFOLIO HEALTH SUMMARY
    {format_portfolio_dashboard(portfolio_health)}
    
    ## CROSS-FUNCTIONAL COORDINATION NEEDS
    {format_alignment_requirements(cross_functional_issues)}
    
    ## DECISIONS REQUIRED THIS WEEK
    {format_decision_queue(upcoming_decisions)}
    
    ## NEXT WEEK PREVIEW
    {generate_forward_looking_analysis()}
    """
    
    return sync_materials
```

## Escalation Criteria & Thresholds

### Initiative Health Scoring
- **Green (80-100)**: On track, no executive intervention required
- **Yellow (60-79)**: Attention needed, executive awareness required  
- **Red (0-59)**: Immediate executive intervention required

### Escalation Triggers
1. **Timeline**: >2 weeks behind schedule
2. **Budget**: >10% over approved budget
3. **Resource**: Resource conflicts affecting >1 initiative
4. **Strategic**: Strategic value at risk >$100K
5. **Cross-functional**: Blocking issues requiring executive authority

### Automated Alerts
```python
def check_escalation_criteria(initiative_data):
    """Check if initiative meets escalation criteria"""
    alerts = []
    
    # Timeline escalation
    if initiative_data['weeks_behind_schedule'] > 2:
        alerts.append({
            'type': 'timeline',
            'severity': 'high',
            'message': f"Initiative {initiative_data['name']} is {initiative_data['weeks_behind_schedule']} weeks behind schedule"
        })
    
    # Budget escalation  
    if initiative_data['budget_variance_percent'] > 10:
        alerts.append({
            'type': 'budget',
            'severity': 'high', 
            'message': f"Initiative {initiative_data['name']} is {initiative_data['budget_variance_percent']}% over budget"
        })
    
    # Resource conflict escalation
    if initiative_data['resource_conflicts']:
        alerts.append({
            'type': 'resource',
            'severity': 'medium',
            'message': f"Initiative {initiative_data['name']} has resource conflicts requiring resolution"
        })
    
    return alerts
```

## Quality Assurance & Validation

### Data Validation Rules
1. **Completeness**: All strategic initiatives included in portfolio analysis
2. **Accuracy**: Financial data reconciled with official financial systems  
3. **Currency**: Analysis based on data <7 days old
4. **Consistency**: Metrics calculated using standardized methodologies

### Output Quality Checks
```python
def validate_analysis_output(analysis):
    """Validate analysis output meets quality standards"""
    validation_results = {
        'data_completeness': check_data_completeness(analysis),
        'metric_accuracy': validate_calculations(analysis),
        'recommendation_clarity': assess_recommendation_quality(analysis),
        'executive_readiness': evaluate_executive_appropriateness(analysis)
    }
    
    if all(validation_results.values()):
        return True, "Analysis meets quality standards"
    else:
        return False, f"Quality issues identified: {validation_results}"
```

## Performance Optimization

### Caching Strategy
- Cache portfolio data for 4 hours to reduce Asana API calls
- Store historical trend data locally for rapid access
- Pre-compute standard metrics during off-hours

### Resource Allocation Analysis Optimization
```python
def optimize_resource_analysis():
    """Optimized resource allocation calculation"""
    # Use cached department capacity data
    # Implement incremental calculation for large portfolios
    # Parallel processing for complex scenario modeling
    pass
```

## Security & Compliance

### Data Security
- All operational data processed locally through MCP connections
- No sensitive data transmitted to external services
- Access control through filesystem permissions
- Audit trail maintained for all analysis requests

### Executive Privacy
- Board materials marked with appropriate confidentiality levels
- Sensitive resource/personnel data anonymized when appropriate
- Role-based access to different analysis detail levels

## Troubleshooting & Support

### Common Issues
1. **Missing Asana Data**: Verify MCP connection and project access permissions
2. **Incomplete Analysis**: Check data freshness and completeness requirements
3. **Performance Issues**: Review caching configuration and data volume

### Diagnostic Commands
```python
def run_diagnostics():
    """Run system diagnostics for troubleshooting"""
    return {
        'asana_connectivity': test_asana_connection(),
        'filesystem_access': test_filesystem_permissions(), 
        'data_freshness': check_data_currency(),
        'cache_status': verify_cache_integrity()
    }
```