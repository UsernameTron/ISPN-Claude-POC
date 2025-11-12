const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, AlignmentType,
        WidthType, BorderStyle, ShadingType, VerticalAlign, LevelFormat, HeadingLevel } = require('docx');
const fs = require('fs');

const tableBorder = { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' };
const cellBorders = { top: tableBorder, bottom: tableBorder, left: tableBorder, right: tableBorder };

const executives = [
  {
    name: 'Jeff Neblett',
    title: 'President & CEO',
    challenge: 'Spends 15-20 hours weekly on board preparation, competitive analysis, and M&A due diligence instead of strategic leadership. Manual data synthesis delays critical decisions and limits strategic thinking capacity.',
    solution: 'Claude AI as Strategic Decision Intelligence layer: automated board materials preparation, real-time competitive intelligence synthesis, M&A deal analysis acceleration, and executive communication automation.',
    impact: [
      'Board preparation time reduced from 20 hours to 2 hours monthly',
      'Real-time competitive intelligence replacing 8-hour manual research',
      'M&A deal analysis accelerated by 60-70%',
      'Strategic decision velocity increased 3-4x'
    ],
    roi: {
      annual: '$1.2M-1.5M',
      time: '15-20 hrs/week',
      payback: '3 days',
      percentage: '15,000%'
    },
    nextSteps: [
      'Week 1-2: Configure Claude with Filesystem and Asana MCPs',
      'Week 3-4: Pilot board materials automation for next board meeting',
      'Week 5-6: Deploy competitive intelligence monitoring',
      'Month 2+: Optimize and expand to M&A analysis workflows'
    ]
  },
  {
    name: 'Scott Lauber',
    title: 'Chief Technology Officer',
    challenge: 'Spends 10+ hours weekly on code reviews, 8+ hours on documentation, and struggles with architecture analysis across growing codebase. Manual processes create bottlenecks in development velocity and technical decision-making.',
    solution: 'Claude AI for Code Review & Documentation Automation: intelligent code analysis, automated technical documentation generation, architecture recommendations, security vulnerability detection, and onboarding acceleration.',
    impact: [
      'Code review time reduced from 10 hours to 2 hours weekly',
      'Technical documentation auto-generated and always current',
      'Architecture analysis providing real-time recommendations',
      'Security vulnerabilities detected proactively',
      'New developer onboarding accelerated by 50%'
    ],
    roi: {
      annual: '$850K-1.2M',
      time: '15-20 hrs/week',
      payback: '5 days',
      percentage: '10,000%+'
    },
    nextSteps: [
      'Week 1-2: Set up Claude with Git, Filesystem, and documentation access',
      'Week 3-4: Pilot code review automation on 2-3 recent PRs',
      'Week 5-6: Generate documentation for critical systems',
      'Month 2+: Expand to architecture analysis and security scanning'
    ]
  },
  {
    name: 'Charlie Brenneman',
    title: 'Senior Vice President, Operations & Strategic Initiatives',
    challenge: 'Spends 30+ hours weekly on operational data gathering, portfolio synthesis, and manual reporting instead of strategic transformation. Manages 15-25 concurrent initiatives with limited visibility into dependencies and risks.',
    solution: 'Claude AI as Operational Intelligence Platform: automated portfolio synthesis, real-time initiative health monitoring, cross-functional alignment acceleration, dependency mapping, and automated board reporting.',
    impact: [
      'Portfolio synthesis reduced from 4 hours to 10 minutes daily',
      'Real-time visibility into all 15-25 strategic initiatives',
      'Cross-functional alignment meetings 85% more efficient',
      'Board reporting automated with continuous updates',
      'Strategic capacity increased from 5% to 40% of time'
    ],
    roi: {
      annual: '$2.5M+',
      time: '30 hrs/week',
      payback: '7 days',
      percentage: '5,000%+'
    },
    nextSteps: [
      'Week 1-2: Configure Asana, Salesforce, and Filesystem MCPs',
      'Week 3-4: Pilot automated portfolio synthesis for executive team',
      'Week 5-6: Deploy cross-initiative dependency mapping',
      'Month 2+: Automate board reporting and expand analytics'
    ]
  },
  {
    name: 'Ty Sorensen',
    title: 'VP Sales, Marketing & Customer Success',
    challenge: 'Sales forecast variance at ±18%, customer churn discovered reactively, and marketing content creation taking 3-4 weeks. Team spends 25-30 hours weekly on manual data analysis instead of revenue-generating activities.',
    solution: 'Claude AI for Revenue Operations Intelligence: predictive sales forecasting, customer health scoring with churn prevention, marketing content velocity acceleration (7x faster), and automated deal coaching.',
    impact: [
      'Forecast accuracy improved from ±18% to ±8%',
      'Proactive customer health monitoring preventing churn',
      'Marketing content velocity increased 7x (10-15 to 50-75 pieces/month)',
      'Deal coaching recommendations accelerating sales cycles',
      'Team productivity increased 60-70% through automation'
    ],
    roi: {
      annual: '$1.6M-2M',
      time: '25-30 hrs/week (team)',
      payback: '7 days',
      percentage: '4,500%+'
    },
    nextSteps: [
      'Week 1-2: Integrate Claude with HubSpot and Canva MCPs',
      'Week 3-4: Pilot forecast analysis for current quarter close',
      'Week 5-6: Deploy customer health scoring for top accounts',
      'Month 2+: Scale content automation and deal coaching'
    ]
  },
  {
    name: 'Bryon Gaddy',
    title: 'Controller',
    challenge: 'Month-end close takes 7 days with 40-50 hours of Controller time and 60-80 hours of team overtime. Manual reconciliation review, consolidation verification, and documentation preparation create bottlenecks and audit risks.',
    solution: 'Claude AI for Month-End Close Acceleration: automated reconciliation verification, real-time exception identification, consolidation workpaper analysis, and audit-ready documentation generation.',
    impact: [
      'Close cycle reduced from 7 days to 4 days (43% faster)',
      'Controller time reduced from 40-50 to 10-15 hours monthly',
      'Team overtime reduced by 70% (60-80 to <20 hours)',
      'Post-close adjustments reduced by 80%',
      'Audit cycle accelerated by 30%'
    ],
    roi: {
      annual: '$100K-160K',
      time: '30-40 hrs/month',
      payback: '14 days',
      percentage: '2,500%'
    },
    nextSteps: [
      'Week 1-2: Configure Filesystem and Asana MCPs for close process',
      'Week 3-4: Pilot reconciliation automation for next month-end',
      'Week 5-6: Deploy consolidation verification workflows',
      'Month 2+: Automate audit documentation and optimize process'
    ]
  }
];

async function createBrief(exec) {
  const doc = new Document({
    styles: {
      default: { document: { run: { font: 'Arial', size: 22 } } },
      paragraphStyles: [
        { id: 'Title', name: 'Title', basedOn: 'Normal',
          run: { size: 44, bold: true, color: '1C2833', font: 'Arial' },
          paragraph: { spacing: { before: 0, after: 120 }, alignment: AlignmentType.LEFT } },
        { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
          run: { size: 28, bold: true, color: '2E4053', font: 'Arial' },
          paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 0 } },
        { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
          run: { size: 24, bold: true, color: '2E4053', font: 'Arial' },
          paragraph: { spacing: { before: 180, after: 100 }, outlineLevel: 1 } }
      ]
    },
    numbering: {
      config: [{
        reference: 'bullet-list',
        levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }]
      }]
    },
    sections: [{
      properties: {
        page: { margin: { top: 720, right: 720, bottom: 720, left: 720 } }
      },
      children: [
        // Title
        new Paragraph({
          heading: HeadingLevel.TITLE,
          children: [new TextRun(`${exec.name}`)]
        }),
        new Paragraph({
          children: [new TextRun({ text: exec.title, size: 24, color: '5D6D7E', italics: true })],
          spacing: { after: 200 }
        }),

        // Challenge Section
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun('The Challenge')]
        }),
        new Paragraph({
          children: [new TextRun(exec.challenge)],
          spacing: { after: 180 }
        }),

        // Solution Section
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun('The Solution')]
        }),
        new Paragraph({
          children: [new TextRun(exec.solution)],
          spacing: { after: 180 }
        }),

        // Impact Section
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun('The Impact')]
        }),
        ...exec.impact.map(item => new Paragraph({
          numbering: { reference: 'bullet-list', level: 0 },
          children: [new TextRun(item)]
        })),
        new Paragraph({ children: [new TextRun('')], spacing: { after: 180 } }),

        // ROI Table
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun('ROI Summary')]
        }),
        new Table({
          columnWidths: [2340, 2340, 2340, 2340],
          margins: { top: 80, bottom: 80, left: 140, right: 140 },
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  borders: cellBorders,
                  width: { size: 2340, type: WidthType.DXA },
                  shading: { fill: '2E4053', type: ShadingType.CLEAR },
                  verticalAlign: VerticalAlign.CENTER,
                  children: [new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: 'Annual Value', bold: true, size: 20, color: 'FFFFFF' })]
                  })]
                }),
                new TableCell({
                  borders: cellBorders,
                  width: { size: 2340, type: WidthType.DXA },
                  shading: { fill: '2E4053', type: ShadingType.CLEAR },
                  children: [new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: 'Time Savings', bold: true, size: 20, color: 'FFFFFF' })]
                  })]
                }),
                new TableCell({
                  borders: cellBorders,
                  width: { size: 2340, type: WidthType.DXA },
                  shading: { fill: '2E4053', type: ShadingType.CLEAR },
                  children: [new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: 'Payback Period', bold: true, size: 20, color: 'FFFFFF' })]
                  })]
                }),
                new TableCell({
                  borders: cellBorders,
                  width: { size: 2340, type: WidthType.DXA },
                  shading: { fill: '2E4053', type: ShadingType.CLEAR },
                  children: [new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: 'ROI', bold: true, size: 20, color: 'FFFFFF' })]
                  })]
                })
              ]
            }),
            new TableRow({
              children: [
                new TableCell({
                  borders: cellBorders,
                  width: { size: 2340, type: WidthType.DXA },
                  children: [new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: exec.roi.annual, size: 22, bold: true, color: '2E7D32' })]
                  })]
                }),
                new TableCell({
                  borders: cellBorders,
                  width: { size: 2340, type: WidthType.DXA },
                  children: [new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun(exec.roi.time)]
                  })]
                }),
                new TableCell({
                  borders: cellBorders,
                  width: { size: 2340, type: WidthType.DXA },
                  children: [new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun(exec.roi.payback)]
                  })]
                }),
                new TableCell({
                  borders: cellBorders,
                  width: { size: 2340, type: WidthType.DXA },
                  children: [new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: exec.roi.percentage, bold: true, color: '1565C0' })]
                  })]
                })
              ]
            })
          ]
        }),

        // Next Steps Section
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun('Next Steps')],
          spacing: { before: 240 }
        }),
        ...exec.nextSteps.map(step => new Paragraph({
          numbering: { reference: 'bullet-list', level: 0 },
          children: [new TextRun(step)]
        }))
      ]
    }]
  });

  const buffer = await Packer.toBuffer(doc);
  const filename = `/Users/cpconnor/projects/ISPN-Claude-POC/executive-briefs/${exec.name.split(' ')[1]}-${exec.name.split(' ')[0]}-Brief.docx`;
  fs.writeFileSync(filename, buffer);
  console.log(`Created: ${filename}`);
}

async function createAllBriefs() {
  // Create directory if it doesn't exist
  if (!fs.existsSync('/Users/cpconnor/projects/ISPN-Claude-POC/executive-briefs')) {
    fs.mkdirSync('/Users/cpconnor/projects/ISPN-Claude-POC/executive-briefs', { recursive: true });
  }

  for (const exec of executives) {
    await createBrief(exec);
  }
  console.log('All executive briefs created successfully!');
}

createAllBriefs().catch(console.error);
