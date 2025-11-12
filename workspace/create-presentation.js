const pptxgen = require('pptxgenjs');
const sharp = require('sharp');
const html2pptx = require('/Users/cpconnor/.claude/skills/pptx/scripts/html2pptx.js');
const fs = require('fs');

async function createGradient(filename, color1, color2) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="562.5">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${color1}"/>
        <stop offset="100%" style="stop-color:${color2}"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
  </svg>`;

  await sharp(Buffer.from(svg)).png().toFile(filename);
  return filename;
}

async function createPresentation() {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'ISPN';
  pptx.title = 'ISPN Claude POC Board Presentation';

  // Create gradient backgrounds
  await createGradient('workspace/gradient-dark.png', '#1C2833', '#2E4053');
  await createGradient('workspace/gradient-accent.png', '#2E4053', '#AAB7B8');

  // Slide 1: Title
  const slide1 = pptx.addSlide();
  slide1.background = { path: 'workspace/gradient-dark.png' };
  slide1.addText('ISPN Claude POC', {
    x: 0.5, y: 1.5, w: 9, h: 1.2,
    fontSize: 48, bold: true, color: 'FFFFFF', align: 'center'
  });
  slide1.addText('Board Presentation', {
    x: 0.5, y: 2.8, w: 9, h: 0.8,
    fontSize: 28, color: 'AAB7B8', align: 'center'
  });
  slide1.addText('Transforming Executive Operations Through AI-Powered Intelligence', {
    x: 0.5, y: 3.8, w: 9, h: 0.5,
    fontSize: 18, color: 'F4F6F6', align: 'center'
  });

  // Slide 2: Executive Summary
  const slide2 = pptx.addSlide();
  slide2.addText('Executive Summary', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 36, bold: true, color: '1C2833'
  });
  slide2.addText([
    { text: 'The Opportunity: ', options: { bold: true } },
    { text: 'Deploy Claude AI across five key executive roles to automate operational workflows, accelerate decision-making, and free 100+ hours weekly of senior leadership time.' }
  ], { x: 0.5, y: 1.2, w: 9, h: 0.6, fontSize: 16, color: '2E4053' });

  slide2.addText('Key Benefits:', {
    x: 0.5, y: 2.0, w: 9, h: 0.4,
    fontSize: 18, bold: true, color: '1C2833'
  });
  slide2.addText([
    '• $7.8M+ total annual value creation across all executives',
    '• 3-7 day payback period on initial investment',
    '• 30-70% time savings on operational workflows',
    '• Real-time intelligence replacing manual data synthesis',
    '• Accelerated strategic initiative velocity by 30-40%'
  ], {
    x: 0.8, y: 2.5, w: 8.5, h: 2.2,
    fontSize: 14, color: '2E4053', bullet: true
  });

  // Slide 3: The Opportunity
  const slide3 = pptx.addSlide();
  slide3.addText('The Opportunity', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 36, bold: true, color: '1C2833'
  });
  slide3.addText([
    { text: 'Current State Challenge:\n', options: { bold: true } },
    { text: 'Executive leadership spends 40-60% of time on operational data mechanics rather than strategic decision-making. Manual workflows create delays, reactive responses, and missed opportunities.' }
  ], { x: 0.5, y: 1.2, w: 9, h: 1.2, fontSize: 14, color: '2E4053' });

  slide3.addText([
    { text: 'Proposed Solution:\n', options: { bold: true } },
    { text: 'Claude AI as executive intelligence layer across five critical roles, automating data synthesis, enabling predictive analytics, and accelerating cross-functional alignment.' }
  ], { x: 0.5, y: 2.6, w: 9, h: 1.2, fontSize: 14, color: '2E4053' });

  // Slide 4: Jeff Neblett - President & CEO
  const slide4 = pptx.addSlide();
  slide4.addText('Jeff Neblett - President & CEO', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 32, bold: true, color: '1C2833'
  });

  slide4.addShape(pptx.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.2, h: 3.2,
    fill: { color: 'F4F6F6' }
  });
  slide4.addText('Use Case: Strategic Decision Intelligence', {
    x: 0.7, y: 1.4, w: 3.8, h: 0.4,
    fontSize: 16, bold: true, color: '1C2833'
  });
  slide4.addText([
    '• Board preparation time: 20 hrs → 2 hrs',
    '• Real-time competitive intelligence synthesis',
    '• M&A deal analysis acceleration',
    '• Executive communication automation'
  ], {
    x: 0.9, y: 1.9, w: 3.6, h: 2.2,
    fontSize: 12, color: '2E4053', bullet: true
  });

  slide4.addShape(pptx.shapes.RECTANGLE, {
    x: 5.2, y: 1.2, w: 4.3, h: 3.2,
    fill: { color: 'E3F2FD' }
  });
  slide4.addText('ROI Impact', {
    x: 5.4, y: 1.4, w: 3.9, h: 0.4,
    fontSize: 16, bold: true, color: '1C2833'
  });
  slide4.addText([
    { text: 'Annual Value: ', options: { bold: true } },
    { text: '$1.2M-1.5M' }
  ], { x: 5.6, y: 1.9, w: 3.7, h: 0.4, fontSize: 14, color: '2E4053' });
  slide4.addText([
    { text: 'Time Savings: ', options: { bold: true } },
    { text: '15-20 hrs/week' }
  ], { x: 5.6, y: 2.4, w: 3.7, h: 0.4, fontSize: 14, color: '2E4053' });
  slide4.addText([
    { text: 'Payback Period: ', options: { bold: true } },
    { text: '3 days' }
  ], { x: 5.6, y: 2.9, w: 3.7, h: 0.4, fontSize: 14, color: '2E4053' });
  slide4.addText([
    { text: 'ROI: ', options: { bold: true } },
    { text: '15,000%' }
  ], { x: 5.6, y: 3.4, w: 3.7, h: 0.4, fontSize: 14, color: '2E4053' });

  // Slide 5: Scott Lauber - President & CFO
  const slide5 = pptx.addSlide();
  slide5.addText('Scott Lauber - President & CFO', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 32, bold: true, color: '1C2833'
  });

  slide5.addShape(pptx.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.2, h: 3.2,
    fill: { color: 'F4F6F6' }
  });
  slide5.addText('Use Case: Code Review & Documentation Automation', {
    x: 0.7, y: 1.4, w: 3.8, h: 0.4,
    fontSize: 16, bold: true, color: '1C2833'
  });
  slide5.addText([
    '• Code review time: 10 hrs → 2 hrs/week',
    '• Auto-generated technical documentation',
    '• Architecture analysis & recommendations',
    '• Security vulnerability detection'
  ], {
    x: 0.9, y: 1.9, w: 3.6, h: 2.2,
    fontSize: 12, color: '2E4053', bullet: true
  });

  slide5.addShape(pptx.shapes.RECTANGLE, {
    x: 5.2, y: 1.2, w: 4.3, h: 3.2,
    fill: { color: 'E3F2FD' }
  });
  slide5.addText('ROI Impact', {
    x: 5.4, y: 1.4, w: 3.9, h: 0.4,
    fontSize: 16, bold: true, color: '1C2833'
  });
  slide5.addText([
    { text: 'Annual Value: ', options: { bold: true } },
    { text: '$850K-1.2M' }
  ], { x: 5.6, y: 1.9, w: 3.7, h: 0.4, fontSize: 14, color: '2E4053' });
  slide5.addText([
    { text: 'Time Savings: ', options: { bold: true } },
    { text: '15-20 hrs/week' }
  ], { x: 5.6, y: 2.4, w: 3.7, h: 0.4, fontSize: 14, color: '2E4053' });
  slide5.addText([
    { text: 'Payback Period: ', options: { bold: true } },
    { text: '5 days' }
  ], { x: 5.6, y: 2.9, w: 3.7, h: 0.4, fontSize: 14, color: '2E4053' });
  slide5.addText([
    { text: 'ROI: ', options: { bold: true } },
    { text: '10,000%+' }
  ], { x: 5.6, y: 3.4, w: 3.7, h: 0.4, fontSize: 14, color: '2E4053' });

  // Slide 6: Charlie Brenneman - SVP Operations
  const slide6 = pptx.addSlide();
  slide6.addText('Charlie Brenneman - SVP Operations & Strategic Initiatives', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, bold: true, color: '1C2833'
  });

  slide6.addShape(pptx.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.2, h: 3.2,
    fill: { color: 'F4F6F6' }
  });
  slide6.addText('Use Case: Operational Intelligence Platform', {
    x: 0.7, y: 1.4, w: 3.8, h: 0.4,
    fontSize: 16, bold: true, color: '1C2833'
  });
  slide6.addText([
    '• Portfolio synthesis: 4 hrs → 10 min daily',
    '• Real-time initiative health monitoring',
    '• Cross-functional alignment acceleration',
    '• Automated board reporting'
  ], {
    x: 0.9, y: 1.9, w: 3.6, h: 2.2,
    fontSize: 12, color: '2E4053', bullet: true
  });

  slide6.addShape(pptx.shapes.RECTANGLE, {
    x: 5.2, y: 1.2, w: 4.3, h: 3.2,
    fill: { color: 'E3F2FD' }
  });
  slide6.addText('ROI Impact', {
    x: 5.4, y: 1.4, w: 3.9, h: 0.4,
    fontSize: 16, bold: true, color: '1C2833'
  });
  slide6.addText([
    { text: 'Annual Value: ', options: { bold: true } },
    { text: '$2.5M+' }
  ], { x: 5.6, y: 1.9, w: 3.7, h: 0.4, fontSize: 14, color: '2E4053' });
  slide6.addText([
    { text: 'Time Savings: ', options: { bold: true } },
    { text: '30 hrs/week' }
  ], { x: 5.6, y: 2.4, w: 3.7, h: 0.4, fontSize: 14, color: '2E4053' });
  slide6.addText([
    { text: 'Payback Period: ', options: { bold: true } },
    { text: '7 days' }
  ], { x: 5.6, y: 2.9, w: 3.7, h: 0.4, fontSize: 14, color: '2E4053' });
  slide6.addText([
    { text: 'ROI: ', options: { bold: true } },
    { text: '5,000%+' }
  ], { x: 5.6, y: 3.4, w: 3.7, h: 0.4, fontSize: 14, color: '2E4053' });

  // Slide 7: Ty Sorensen - VP Sales/Marketing/CS
  const slide7 = pptx.addSlide();
  slide7.addText('Ty Sorensen - VP Sales/Marketing/Customer Success', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, bold: true, color: '1C2833'
  });

  slide7.addShape(pptx.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.2, h: 3.2,
    fill: { color: 'F4F6F6' }
  });
  slide7.addText('Use Case: Revenue Operations Intelligence', {
    x: 0.7, y: 1.4, w: 3.8, h: 0.4,
    fontSize: 16, bold: true, color: '1C2833'
  });
  slide7.addText([
    '• Forecast accuracy: ±18% → ±8%',
    '• Predictive customer health scoring',
    '• Marketing content velocity 7x increase',
    '• Proactive churn prevention'
  ], {
    x: 0.9, y: 1.9, w: 3.6, h: 2.2,
    fontSize: 12, color: '2E4053', bullet: true
  });

  slide7.addShape(pptx.shapes.RECTANGLE, {
    x: 5.2, y: 1.2, w: 4.3, h: 3.2,
    fill: { color: 'E3F2FD' }
  });
  slide7.addText('ROI Impact', {
    x: 5.4, y: 1.4, w: 3.9, h: 0.4,
    fontSize: 16, bold: true, color: '1C2833'
  });
  slide7.addText([
    { text: 'Annual Value: ', options: { bold: true } },
    { text: '$1.6M-2M' }
  ], { x: 5.6, y: 1.9, w: 3.7, h: 0.4, fontSize: 14, color: '2E4053' });
  slide7.addText([
    { text: 'Time Savings: ', options: { bold: true } },
    { text: '25-30 hrs/week (team)' }
  ], { x: 5.6, y: 2.4, w: 3.7, h: 0.4, fontSize: 14, color: '2E4053' });
  slide7.addText([
    { text: 'Payback Period: ', options: { bold: true } },
    { text: '7 days' }
  ], { x: 5.6, y: 2.9, w: 3.7, h: 0.4, fontSize: 14, color: '2E4053' });
  slide7.addText([
    { text: 'ROI: ', options: { bold: true } },
    { text: '4,500%+' }
  ], { x: 5.6, y: 3.4, w: 3.7, h: 0.4, fontSize: 14, color: '2E4053' });

  // Slide 8: Bryon Gaddy - Controller
  const slide8 = pptx.addSlide();
  slide8.addText('Bryon Gaddy - Controller', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 32, bold: true, color: '1C2833'
  });

  slide8.addShape(pptx.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.2, h: 3.2,
    fill: { color: 'F4F6F6' }
  });
  slide8.addText('Use Case: Month-End Close Acceleration', {
    x: 0.7, y: 1.4, w: 3.8, h: 0.4,
    fontSize: 16, bold: true, color: '1C2833'
  });
  slide8.addText([
    '• Close cycle: 7 days → 4 days',
    '• Automated reconciliation verification',
    '• Real-time exception identification',
    '• Audit-ready documentation generation'
  ], {
    x: 0.9, y: 1.9, w: 3.6, h: 2.2,
    fontSize: 12, color: '2E4053', bullet: true
  });

  slide8.addShape(pptx.shapes.RECTANGLE, {
    x: 5.2, y: 1.2, w: 4.3, h: 3.2,
    fill: { color: 'E3F2FD' }
  });
  slide8.addText('ROI Impact', {
    x: 5.4, y: 1.4, w: 3.9, h: 0.4,
    fontSize: 16, bold: true, color: '1C2833'
  });
  slide8.addText([
    { text: 'Annual Value: ', options: { bold: true } },
    { text: '$100K-160K' }
  ], { x: 5.6, y: 1.9, w: 3.7, h: 0.4, fontSize: 14, color: '2E4053' });
  slide8.addText([
    { text: 'Time Savings: ', options: { bold: true } },
    { text: '30-40 hrs/month' }
  ], { x: 5.6, y: 2.4, w: 3.7, h: 0.4, fontSize: 14, color: '2E4053' });
  slide8.addText([
    { text: 'Payback Period: ', options: { bold: true } },
    { text: '14 days' }
  ], { x: 5.6, y: 2.9, w: 3.7, h: 0.4, fontSize: 14, color: '2E4053' });
  slide8.addText([
    { text: 'ROI: ', options: { bold: true } },
    { text: '2,500%' }
  ], { x: 5.6, y: 3.4, w: 3.7, h: 0.4, fontSize: 14, color: '2E4053' });

  // Slide 9: Comparison Matrix
  const slide9 = pptx.addSlide();
  slide9.addText('Executive Impact Comparison', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 36, bold: true, color: '1C2833'
  });

  const matrixData = [
    [
      { text: 'Executive', options: { fill: { color: '1C2833' }, color: 'FFFFFF', bold: true } },
      { text: 'Annual Value', options: { fill: { color: '1C2833' }, color: 'FFFFFF', bold: true } },
      { text: 'Time Savings', options: { fill: { color: '1C2833' }, color: 'FFFFFF', bold: true } },
      { text: 'Payback', options: { fill: { color: '1C2833' }, color: 'FFFFFF', bold: true } }
    ],
    ['Jeff Neblett (CEO)', '$1.2M-1.5M', '15-20 hrs/wk', '3 days'],
    ['Scott Lauber (President & CFO)', '$850K-1.2M', '15-20 hrs/wk', '5 days'],
    ['Charlie Brenneman (Ops)', '$2.5M+', '30 hrs/wk', '7 days'],
    ['Ty Sorensen (Sales)', '$1.6M-2M', '25-30 hrs/wk', '7 days'],
    ['Bryon Gaddy (Finance)', '$100K-160K', '30-40 hrs/mo', '14 days']
  ];

  slide9.addTable(matrixData, {
    x: 0.5, y: 1.3, w: 9, h: 2.8,
    colW: [2.8, 2, 2, 2.2],
    border: { pt: 1, color: 'CCCCCC' },
    align: 'center',
    valign: 'middle',
    fontSize: 13
  });

  // Slide 10: Total ROI
  const slide10 = pptx.addSlide();
  slide10.addText('Total ROI Analysis', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 36, bold: true, color: '1C2833'
  });

  slide10.addShape(pptx.shapes.RECTANGLE, {
    x: 0.5, y: 1.3, w: 4.3, h: 1.2,
    fill: { color: 'E8F5E9' }
  });
  slide10.addText('Total Annual Value Creation', {
    x: 0.7, y: 1.5, w: 3.9, h: 0.3,
    fontSize: 14, bold: true, color: '1C2833'
  });
  slide10.addText('$7.8M - $8.4M', {
    x: 0.7, y: 1.9, w: 3.9, h: 0.5,
    fontSize: 36, bold: true, color: '2E7D32'
  });

  slide10.addShape(pptx.shapes.RECTANGLE, {
    x: 5.2, y: 1.3, w: 4.3, h: 1.2,
    fill: { color: 'FFF9C4' }
  });
  slide10.addText('Total Investment (Year 1)', {
    x: 5.4, y: 1.5, w: 3.9, h: 0.3,
    fontSize: 14, bold: true, color: '1C2833'
  });
  slide10.addText('$125K - $175K', {
    x: 5.4, y: 1.9, w: 3.9, h: 0.5,
    fontSize: 36, bold: true, color: 'F57C00'
  });

  slide10.addShape(pptx.shapes.RECTANGLE, {
    x: 2.5, y: 2.7, w: 5, h: 1.5,
    fill: { color: 'E3F2FD' }
  });
  slide10.addText('Net ROI (Year 1)', {
    x: 2.7, y: 2.9, w: 4.6, h: 0.3,
    fontSize: 16, bold: true, color: '1C2833'
  });
  slide10.addText('5,000% - 6,000%', {
    x: 2.7, y: 3.3, w: 4.6, h: 0.7,
    fontSize: 42, bold: true, color: '1565C0'
  });

  // Slide 11: Strategic Advantage
  const slide11 = pptx.addSlide();
  slide11.addText('Strategic Advantages', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 36, bold: true, color: '1C2833'
  });

  slide11.addText('Competitive Differentiation', {
    x: 0.5, y: 1.2, w: 4.4, h: 0.4,
    fontSize: 18, bold: true, color: '1C2833'
  });
  slide11.addText([
    '• Decision velocity 3-4x faster than competitors',
    '• Real-time market intelligence vs reactive analysis',
    '• Strategic initiative execution velocity +30-40%',
    '• Board-level visibility unprecedented in industry'
  ], {
    x: 0.7, y: 1.7, w: 4.2, h: 1.8,
    fontSize: 13, color: '2E4053', bullet: true
  });

  slide11.addText('Organizational Transformation', {
    x: 5.0, y: 1.2, w: 4.5, h: 0.4,
    fontSize: 18, bold: true, color: '1C2833'
  });
  slide11.addText([
    '• Executives focus on strategy vs operations',
    '• Data-driven decisions replace intuition',
    '• Cross-functional alignment accelerated',
    '• Predictive capabilities vs reactive firefighting'
  ], {
    x: 5.2, y: 1.7, w: 4.3, h: 1.8,
    fontSize: 13, color: '2E4053', bullet: true
  });

  // Slide 12: Security & Compliance
  const slide12 = pptx.addSlide();
  slide12.addText('Security & Compliance', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 36, bold: true, color: '1C2833'
  });

  slide12.addText('Data Security', {
    x: 0.5, y: 1.2, w: 4.4, h: 0.4,
    fontSize: 18, bold: true, color: '1C2833'
  });
  slide12.addText([
    '• Enterprise-grade Claude deployment',
    '• Zero data retention by Anthropic',
    '• SOC 2 Type II certified infrastructure',
    '• End-to-end encryption in transit and at rest'
  ], {
    x: 0.7, y: 1.7, w: 4.2, h: 1.8,
    fontSize: 13, color: '2E4053', bullet: true
  });

  slide12.addText('Compliance & Governance', {
    x: 5.0, y: 1.2, w: 4.5, h: 0.4,
    fontSize: 18, bold: true, color: '1C2833'
  });
  slide12.addText([
    '• GDPR and CCPA compliant',
    '• Complete audit trail of all AI interactions',
    '• Human oversight on critical decisions',
    '• Regular security audits and monitoring'
  ], {
    x: 5.2, y: 1.7, w: 4.3, h: 1.8,
    fontSize: 13, color: '2E4053', bullet: true
  });

  // Slide 13: Implementation Plan
  const slide13 = pptx.addSlide();
  slide13.addText('Implementation Roadmap', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 36, bold: true, color: '1C2833'
  });

  const timeline = [
    ['Phase 1: Foundation (Weeks 1-2)', 'Technical setup, MCP integrations, pilot training'],
    ['Phase 2: Executive Pilots (Weeks 3-6)', 'Deploy to CEO & CTO, validate value, refine workflows'],
    ['Phase 3: Scale (Weeks 7-10)', 'Deploy to remaining executives, optimize processes'],
    ['Phase 4: Optimization (Weeks 11+)', 'Continuous improvement, expand use cases, measure ROI']
  ];

  timeline.forEach((phase, idx) => {
    const y = 1.3 + (idx * 0.75);
    slide13.addShape(pptx.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.65,
      fill: { color: idx === 0 ? '1C2833' : (idx === 1 ? '2E4053' : (idx === 2 ? '5D6D7E' : 'AAB7B8')) }
    });
    slide13.addText(phase[0], {
      x: 0.7, y: y + 0.08, w: 8.6, h: 0.25,
      fontSize: 14, bold: true, color: 'FFFFFF'
    });
    slide13.addText(phase[1], {
      x: 0.7, y: y + 0.35, w: 8.6, h: 0.25,
      fontSize: 11, color: 'FFFFFF'
    });
  });

  // Slide 14: Success Metrics
  const slide14 = pptx.addSlide();
  slide14.addText('Success Metrics & KPIs', {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 36, bold: true, color: '1C2833'
  });

  const metricsData = [
    [
      { text: 'Metric', options: { fill: { color: '1C2833' }, color: 'FFFFFF', bold: true } },
      { text: 'Baseline', options: { fill: { color: '1C2833' }, color: 'FFFFFF', bold: true } },
      { text: 'Target (6 mo)', options: { fill: { color: '1C2833' }, color: 'FFFFFF', bold: true } }
    ],
    ['Executive time on strategy', '10-20%', '40-50%'],
    ['Decision cycle time', '2-3 weeks', '3-5 days'],
    ['Board forecast accuracy', '±15-20%', '±5-8%'],
    ['Strategic initiative velocity', 'Baseline', '+30-40%'],
    ['Close cycle time', '7 days', '4 days']
  ];

  slide14.addTable(metricsData, {
    x: 1.0, y: 1.3, w: 8, h: 2.8,
    colW: [3.5, 2.25, 2.25],
    border: { pt: 1, color: 'CCCCCC' },
    align: 'center',
    valign: 'middle',
    fontSize: 13
  });

  // Slide 15: Recommendation
  const slide15 = pptx.addSlide();
  slide15.background = { path: 'workspace/gradient-dark.png' };
  slide15.addText('Recommendation', {
    x: 0.5, y: 1.2, w: 9, h: 0.8,
    fontSize: 42, bold: true, color: 'FFFFFF', align: 'center'
  });
  slide15.addText('Approve Phase 1 implementation across five executive roles', {
    x: 1.0, y: 2.2, w: 8, h: 0.6,
    fontSize: 20, color: 'AAB7B8', align: 'center'
  });
  slide15.addText([
    { text: 'Investment: ', options: { bold: true } },
    { text: '$125K-175K Year 1  |  ' },
    { text: 'Return: ', options: { bold: true } },
    { text: '$7.8M-8.4M  |  ' },
    { text: 'Payback: ', options: { bold: true } },
    { text: '3-7 days' }
  ], {
    x: 1.0, y: 3.0, w: 8, h: 0.4,
    fontSize: 16, color: 'F4F6F6', align: 'center'
  });

  // Save presentation
  await pptx.writeFile({ fileName: '/Users/cpconnor/projects/ISPN-Claude-POC/ISPN-Claude-POC-Board-Presentation.pptx' });
  console.log('Board presentation created successfully!');
}

createPresentation().catch(console.error);
