# ISPN EXECUTIVE POC - SEQUENTIAL EXECUTION PROMPTS

## PHASE 1: RESOURCE INVENTORY & VERIFICATION

### Prompt 1.1 - MCP & Skills Audit
```
Execute Pre-Response Protocol. List all currently enabled MCPs, Connectors, and Skills in this Claude Desktop instance. Organize by category. Identify any gaps for the 5 ISPN executives. Output to: `/Users/cpconnor/projects/ISPN-Claude-POC/00-RESOURCE-AUDIT.md`
```

### Prompt 1.2 - Verify Anthropic Sources
```
Verify you can access these Anthropic documentation sources: https://docs.anthropic.com, https://docs.claude.com, https://www.anthropic.com. Confirm no other sources will be cited. Document available MCP and Skills information from these sources only.
```

---

## PHASE 2: LINKEDIN PROFILE ANALYSIS (ALL 5 EXECUTIVES)

### Prompt 2.1 - Jeff Neblett (CEO)
```
Access https://www.linkedin.com/in/jeffersonneblett. Extract complete profile: title, tenure, career progression, skills, education, professional summary, technical sophistication (1-5). Identify strategic priorities and pain points for a CEO. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Neblett-Jeff/01-profile.md`
```

### Prompt 2.2 - Scott Lauber (President & CFO)
```
Access https://www.linkedin.com/in/scott-lauber. Extract complete profile: title, tenure, career progression, skills, education, professional summary, technical sophistication (1-5). Identify strategic priorities and pain points for President/CFO. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Lauber-Scott/01-profile.md`
```

### Prompt 2.3 - Charlie Brenneman (Senior VP)
```
Access https://www.linkedin.com/in/charlieispn. Extract complete profile: title, tenure, career progression, skills, education, professional summary, technical sophistication (1-5). Identify strategic priorities and pain points for Senior VP. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Brenneman-Charlie/01-profile.md`
```

### Prompt 2.4 - Ty Sorensen (VP Sales/Marketing/CS)
```
Access https://www.linkedin.com/in/tysorensen-revenue. Extract complete profile: title, tenure, career progression, skills, education, professional summary, technical sophistication (1-5). Identify strategic priorities and pain points for VP Sales/Marketing/Customer Success. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Sorensen-Ty/01-profile.md`
```

### Prompt 2.5 - Bryon Gaddy (Controller)
```
Access https://www.linkedin.com/in/bryon-gaddy-cpa-37200b19. Extract complete profile: title, tenure, career progression, CPA credentials, skills, education, professional summary, technical sophistication (1-5). Identify strategic priorities and pain points for Controller. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Gaddy-Bryon/01-profile.md`
```

---

## PHASE 3: INDIVIDUAL EXECUTIVE DOCUMENTATION

### EXECUTIVE 1: JEFF NEBLETT (CEO)

**Prompt 3.1.1 - Neblett Role Analysis**
```
Using Neblett's profile, create comprehensive role analysis: strategic responsibilities, day-to-day activities, executive pain points (specific), strategic goals. Reference ISPN context (K-12, rural broadband, 165+ tech center employees). Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Neblett-Jeff/02-role-analysis.md`
```

**Prompt 3.1.2 - Neblett Skills Mapping**
```
Map minimum 4 Claude Skills to Neblett's CEO needs. For each: explain relevance, specific use case, quantified value, MCP integration. Choose from available skills. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Neblett-Jeff/03-skills-mapping.md`
```

**Prompt 3.1.3 - Neblett MCP Recommendations**
```
Recommend minimum 2 MCPs for Neblett. For each: executive problem solved, business value, specific use case, integration power, security posture. Prioritize strategic leverage. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Neblett-Jeff/04-mcp-recommendations.md`
```

**Prompt 3.1.4 - Neblett Use Case**
```
Create complete executive use case for Neblett following template in master prompt. Include: strategic challenge, solution narrative with specific scenario, strategic impact with ROI, "what makes this possible" in executive language, 5-minute test drive. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Neblett-Jeff/05-use-case.md`
```

**Prompt 3.1.5 - Neblett Demo Script**
```
Create facilitated demonstration script for Neblett. Include: pre-demo setup, 15-minute demo flow (opening, problem, transformation, impact, Q&A), success criteria, backup plans, post-demo actions. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Neblett-Jeff/06-demo-script.md`
```

**Prompt 3.1.6 - Neblett Value Metrics**
```
Quantify Neblett's ROI: time savings analysis (current vs future state), quality improvements, strategic impact, complete ROI calculation (investment vs return), 30-day success metrics, scaling economics. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Neblett-Jeff/07-value-metrics.md`
```

**Prompt 3.1.7 - Neblett Integration Stack**
```
Document complete technical stack for Neblett: required MCPs (setup instructions), required Skills, integration combinations, security/compliance, troubleshooting, maintenance schedule. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Neblett-Jeff/08-integration-stack.md`
```

---

### EXECUTIVE 2: SCOTT LAUBER (PRESIDENT & CFO)

**Prompt 3.2.1 - Lauber Role Analysis**
```
Using Lauber's profile, create comprehensive role analysis: strategic responsibilities (financial + operational), day-to-day activities, executive pain points (CFO-specific), strategic goals. Reference ISPN financial operations. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Lauber-Scott/02-role-analysis.md`
```

**Prompt 3.2.2 - Lauber Skills Mapping**
```
Map minimum 4 Claude Skills to Lauber's President/CFO needs. Prioritize xlsx-advanced, pdf-advanced, financial analysis skills. For each: explain relevance, specific use case, quantified value, MCP integration. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Lauber-Scott/03-skills-mapping.md`
```

**Prompt 3.2.3 - Lauber MCP Recommendations**
```
Recommend minimum 2 MCPs for Lauber (likely Filesystem + Asana for financial/operational data). For each: executive problem solved, business value, specific use case, integration power, security posture. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Lauber-Scott/04-mcp-recommendations.md`
```

**Prompt 3.2.4 - Lauber Use Case**
```
Create complete executive use case for Lauber focusing on board reporting, financial forecasting, or operational dashboards. Follow template: strategic challenge, solution narrative, strategic impact with ROI, executive language explanation, 5-minute test drive. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Lauber-Scott/05-use-case.md`
```

**Prompt 3.2.5 - Lauber Demo Script**
```
Create facilitated demonstration script for Lauber. Focus on financial data synthesis, board presentation generation. Include: pre-demo setup, 15-minute demo flow, success criteria, backup plans. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Lauber-Scott/06-demo-script.md`
```

**Prompt 3.2.6 - Lauber Value Metrics**
```
Quantify Lauber's ROI with emphasis on financial reporting time savings, forecast accuracy, board prep efficiency. Include complete ROI calculation and scaling economics. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Lauber-Scott/07-value-metrics.md`
```

**Prompt 3.2.7 - Lauber Integration Stack**
```
Document complete technical stack for Lauber: required MCPs, required Skills (emphasis on financial analysis), integration combinations, security/compliance, troubleshooting. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Lauber-Scott/08-integration-stack.md`
```

---

### EXECUTIVE 3: CHARLIE BRENNEMAN (SENIOR VP)

**Prompt 3.3.1 - Brenneman Role Analysis**
```
Using Brenneman's profile, create comprehensive role analysis: strategic responsibilities (operations, initiatives), day-to-day activities, executive pain points (SVP-specific), strategic goals. Reference ISPN operational scope. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Brenneman-Charlie/02-role-analysis.md`
```

**Prompt 3.3.2 - Brenneman Skills Mapping**
```
Map minimum 4 Claude Skills to Brenneman's SVP needs. Prioritize project visibility, initiative tracking, cross-functional coordination skills. For each: explain relevance, specific use case, quantified value, MCP integration. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Brenneman-Charlie/03-skills-mapping.md`
```

**Prompt 3.3.3 - Brenneman MCP Recommendations**
```
Recommend minimum 2 MCPs for Brenneman (likely Asana + Slack for operational oversight). For each: executive problem solved, business value, specific use case, integration power, security posture. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Brenneman-Charlie/04-mcp-recommendations.md`
```

**Prompt 3.3.4 - Brenneman Use Case**
```
Create complete executive use case for Brenneman focusing on operational dashboards, initiative tracking, or cross-functional alignment. Follow template with strategic narrative. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Brenneman-Charlie/05-use-case.md`
```

**Prompt 3.3.5 - Brenneman Demo Script**
```
Create facilitated demonstration script for Brenneman. Focus on project portfolio visibility, operational metrics synthesis. Include complete demo flow and success criteria. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Brenneman-Charlie/06-demo-script.md`
```

**Prompt 3.3.6 - Brenneman Value Metrics**
```
Quantify Brenneman's ROI with emphasis on operational visibility, resource allocation efficiency, initiative velocity. Include complete ROI calculation. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Brenneman-Charlie/07-value-metrics.md`
```

**Prompt 3.3.7 - Brenneman Integration Stack**
```
Document complete technical stack for Brenneman: required MCPs, required Skills, integration combinations for operational oversight, security/compliance. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Brenneman-Charlie/08-integration-stack.md`
```

---

### EXECUTIVE 4: TY SORENSEN (VP SALES/MARKETING/CS)

**Prompt 3.4.1 - Sorensen Role Analysis**
```
Using Sorensen's profile, create comprehensive role analysis: strategic responsibilities (revenue, customer success), day-to-day activities, executive pain points (VP Sales-specific), strategic goals. Reference ISPN's K-12/rural broadband market. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Sorensen-Ty/02-role-analysis.md`
```

**Prompt 3.4.2 - Sorensen Skills Mapping**
```
Map minimum 4 Claude Skills to Sorensen's VP Sales/Marketing/CS needs. Prioritize presentation creation, marketing content, customer analysis skills. For each: explain relevance, specific use case, quantified value, MCP integration. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Sorensen-Ty/03-skills-mapping.md`
```

**Prompt 3.4.3 - Sorensen MCP Recommendations**
```
Recommend minimum 2 MCPs for Sorensen (likely Canva + Slack for marketing/sales enablement). For each: executive problem solved, business value, specific use case, integration power. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Sorensen-Ty/04-mcp-recommendations.md`
```

**Prompt 3.4.4 - Sorensen Use Case**
```
Create complete executive use case for Sorensen focusing on sales forecasting, customer health monitoring, or marketing content creation. Follow template with revenue-focused narrative. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Sorensen-Ty/05-use-case.md`
```

**Prompt 3.4.5 - Sorensen Demo Script**
```
Create facilitated demonstration script for Sorensen. Focus on sales pipeline analysis, customer success dashboards, or marketing material generation. Include complete demo flow. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Sorensen-Ty/06-demo-script.md`
```

**Prompt 3.4.6 - Sorensen Value Metrics**
```
Quantify Sorensen's ROI with emphasis on revenue acceleration, forecast accuracy, customer retention, marketing efficiency. Include complete ROI calculation. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Sorensen-Ty/07-value-metrics.md`
```

**Prompt 3.4.7 - Sorensen Integration Stack**
```
Document complete technical stack for Sorensen: required MCPs, required Skills, integration combinations for sales/marketing operations, security/compliance. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Sorensen-Ty/08-integration-stack.md`
```

---

### EXECUTIVE 5: BRYON GADDY (CONTROLLER)

**Prompt 3.5.1 - Gaddy Role Analysis**
```
Using Gaddy's profile, create comprehensive role analysis: strategic responsibilities (financial controls, compliance), day-to-day activities, executive pain points (Controller-specific), strategic goals. Reference CPA requirements and audit readiness. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Gaddy-Bryon/02-role-analysis.md`
```

**Prompt 3.5.2 - Gaddy Skills Mapping**
```
Map minimum 4 Claude Skills to Gaddy's Controller needs. Prioritize xlsx-advanced, pdf-advanced, compliance documentation skills. For each: explain relevance, specific use case, quantified value, MCP integration. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Gaddy-Bryon/03-skills-mapping.md`
```

**Prompt 3.5.3 - Gaddy MCP Recommendations**
```
Recommend minimum 2 MCPs for Gaddy (likely Filesystem + Asana for financial data and compliance tracking). For each: executive problem solved, business value, specific use case, security posture (critical for Controller). Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Gaddy-Bryon/04-mcp-recommendations.md`
```

**Prompt 3.5.4 - Gaddy Use Case**
```
Create complete executive use case for Gaddy focusing on month-end close, audit preparation, or compliance reporting. Follow template with financial control focus. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Gaddy-Bryon/05-use-case.md`
```

**Prompt 3.5.5 - Gaddy Demo Script**
```
Create facilitated demonstration script for Gaddy. Focus on financial reconciliation, audit documentation, or compliance reporting. Include complete demo flow emphasizing accuracy. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Gaddy-Bryon/06-demo-script.md`
```

**Prompt 3.5.6 - Gaddy Value Metrics**
```
Quantify Gaddy's ROI with emphasis on close cycle reduction, audit efficiency, compliance accuracy, error elimination. Include complete ROI calculation. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Gaddy-Bryon/07-value-metrics.md`
```

**Prompt 3.5.7 - Gaddy Integration Stack**
```
Document complete technical stack for Gaddy: required MCPs, required Skills, integration combinations for financial controls, security/compliance (comprehensive for Controller role). Create: `/Users/cpconnor/projects/ISPN-Claude-POC/stakeholder-profiles/Gaddy-Bryon/08-integration-stack.md`
```

---

## PHASE 4: CONSOLIDATED DELIVERABLES

**Prompt 4.1 - Executive Summary**
```
Create 1-page executive summary for board: the opportunity, strategic value for ISPN, investment vs ROI projection (organization-wide), competitive advantage gained. Executive language only. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/EXECUTIVE-SUMMARY.md`
```

**Prompt 4.2 - Executive Comparison Matrix**
```
Create comparison table for all 5 executives: top MCPs, top skills, primary use case (one-liner), time saved/week, strategic impact, individual ROI. Show synergies across leadership team. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/EXECUTIVE-COMPARISON-MATRIX.md`
```

**Prompt 4.3 - Demonstration Sequence**
```
Recommend demonstration order for all 5 executives with rationale. Include: who goes first and why, dependencies between demos, overall rollout strategy, timeline. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/DEMONSTRATION-SEQUENCE.md`
```

**Prompt 4.4 - Total ROI Analysis**
```
Calculate organization-wide ROI: combined time savings (all 5 executives), combined quality improvements, strategic capacity gained, total investment, total return, aggregate ROI, payback period. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/TOTAL-ROI-ANALYSIS.md`
```

**Prompt 4.5 - Implementation Roadmap**
```
Create 30/60/90 day implementation plan: Week 1-4 (pilot setup), Week 5-8 (full executive deployment), Week 9-12 (measurement and expansion planning). Include milestones, resources required, success criteria. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/IMPLEMENTATION-ROADMAP.md`
```

---

## PHASE 5: PRESENTATION MATERIALS

**Prompt 5.1 - Board Presentation**
```
Using pptx-advanced skill, create 15-slide board presentation: (1) Title, (2) Executive Summary, (3) The Opportunity, (4-8) One slide per executive with use case + ROI, (9) Comparison Matrix, (10) Total ROI, (11) Strategic Advantage, (12) Security/Compliance, (13) Implementation Plan, (14) Success Metrics, (15) Recommendation. Save to: `/Users/cpconnor/projects/ISPN-Claude-POC/ISPN-Claude-POC-Board-Presentation.pptx`
```

**Prompt 5.2 - Executive One-Pagers**
```
Using docx-advanced skill, create 5 individual one-page briefs (one per executive): name/title, their challenge, their solution, their impact, next steps. Professional formatting. Save as: `[LastName]-[FirstName]-Brief.docx` in `/Users/cpconnor/projects/ISPN-Claude-POC/executive-briefs/`
```

**Prompt 5.3 - Quick Reference Cards**
```
Create pocket-sized quick reference guides for each executive: "Your Claude Desktop Setup" - which MCPs enabled, which skills to use, top 3 prompts for your role, support contact. Format for printing 4"x6". Save as PDFs in `/Users/cpconnor/projects/ISPN-Claude-POC/quick-reference-cards/`
```

---

## PHASE 6: FINAL REVIEW

**Prompt 6.1 - Quality Check**
```
Review all deliverables against quality standards in master prompt: zero jargon check, ROI credibility check, ISPN-specific examples check, Anthropic-only sources check, demonstration viability check. Create quality report: `/Users/cpconnor/projects/ISPN-Claude-POC/QUALITY-REVIEW.md`
```

**Prompt 6.2 - Project Summary**
```
Create final project summary: what was delivered (inventory all files), key insights per executive, recommended demonstration order, total organizational ROI, next steps for Pete. Create: `/Users/cpconnor/projects/ISPN-Claude-POC/PROJECT-SUMMARY.md`
```

---

## EXECUTION NOTES

- Copy/paste each prompt sequentially
- Wait for completion before next prompt
- Each prompt creates specific file(s)
- If prompt fails, troubleshoot that step before proceeding
- All files save to `/Users/cpconnor/projects/ISPN-Claude-POC/`
- Total estimated completion: 40-50 prompts
- Estimated total time: 3-4 hours (depending on thinking/generation time)