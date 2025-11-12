from reportlab.lib.pagesizes import landscape
from reportlab.lib.units import inch
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
import os

# 4"x6" in landscape orientation (6" width x 4" height)
CARD_WIDTH = 6 * inch
CARD_HEIGHT = 4 * inch

executives = [
    {
        'name': 'Jeff Neblett',
        'title': 'President & CEO',
        'mcps': [
            'Filesystem MCP (board materials, competitive analysis)',
            'Asana MCP (strategic initiatives tracking)',
            'Web Search (competitive intelligence)'
        ],
        'skills': [
            'Internal Communications (executive memos)',
            'DOCX (board presentations and reports)',
            'XLSX (financial analysis)'
        ],
        'top_prompts': [
            '"Prepare board materials for next meeting using latest data"',
            '"Analyze competitive landscape for [company/sector]"',
            '"Summarize strategic initiative portfolio status"'
        ],
        'support': 'IT Support: support@ispn.com | Claude Help: docs.claude.com'
    },
    {
        'name': 'Scott Lauber',
        'title': 'President & CFO',
        'mcps': [
            'Filesystem MCP (codebase access)',
            'GitHub MCP (repository management)',
            'Brave Search (technical research)'
        ],
        'skills': [
            'None required (built-in code capabilities)',
            'DOCX (technical documentation)',
            'Algorithmic Art (architecture diagrams)'
        ],
        'top_prompts': [
            '"Review this pull request and provide feedback"',
            '"Generate documentation for [system/module]"',
            '"Analyze architecture of [component] and suggest improvements"'
        ],
        'support': 'IT Support: support@ispn.com | Claude Help: docs.claude.com'
    },
    {
        'name': 'Charlie Brenneman',
        'title': 'SVP Operations',
        'mcps': [
            'Asana MCP (initiative portfolio tracking)',
            'Filesystem MCP (operational data)',
            'Slack MCP (team communications)'
        ],
        'skills': [
            'XLSX (operational metrics analysis)',
            'DOCX (board reports)',
            'PPTX (executive presentations)'
        ],
        'top_prompts': [
            '"Synthesize portfolio status across all initiatives"',
            '"Identify cross-initiative dependencies and risks"',
            '"Generate executive operational intelligence brief"'
        ],
        'support': 'IT Support: support@ispn.com | Claude Help: docs.claude.com'
    },
    {
        'name': 'Ty Sorensen',
        'title': 'VP Sales/Marketing/CS',
        'mcps': [
            'HubSpot MCP (CRM and customer data)',
            'Canva MCP (marketing content creation)',
            'Slack MCP (team notifications)'
        ],
        'skills': [
            'XLSX (sales forecast analysis)',
            'PPTX (sales decks)',
            'DOCX (proposals and contracts)'
        ],
        'top_prompts': [
            '"Analyze sales forecast and identify at-risk deals"',
            '"Generate customer health scores and churn alerts"',
            '"Create sales deck customized for [prospect/industry]"'
        ],
        'support': 'IT Support: support@ispn.com | Claude Help: docs.claude.com'
    },
    {
        'name': 'Bryon Gaddy',
        'title': 'Controller',
        'mcps': [
            'Filesystem MCP (financial workpapers)',
            'Asana MCP (close task tracking)',
            'Slack MCP (exception alerts)'
        ],
        'skills': [
            'XLSX (reconciliation analysis)',
            'DOCX (audit documentation)',
            'PDF (report generation)'
        ],
        'top_prompts': [
            '"Analyze reconciliations and flag exceptions"',
            '"Verify consolidation workpapers for accuracy"',
            '"Generate audit documentation for [account/period]"'
        ],
        'support': 'IT Support: support@ispn.com | Claude Help: docs.claude.com'
    }
]

def create_reference_card(exec_data, filename):
    c = canvas.Canvas(filename, pagesize=landscape((CARD_WIDTH, CARD_HEIGHT)))

    # Define colors
    header_color = HexColor('#1C2833')
    accent_color = HexColor('#2E4053')
    text_color = HexColor('#000000')

    # Header background
    c.setFillColor(header_color)
    c.rect(0, CARD_HEIGHT - 0.8*inch, CARD_WIDTH, 0.8*inch, fill=1, stroke=0)

    # Name and Title
    c.setFillColor(HexColor('#FFFFFF'))
    c.setFont('Helvetica-Bold', 16)
    c.drawString(0.3*inch, CARD_HEIGHT - 0.45*inch, exec_data['name'])
    c.setFont('Helvetica', 11)
    c.drawString(0.3*inch, CARD_HEIGHT - 0.65*inch, exec_data['title'])

    # Content area
    y = CARD_HEIGHT - 1.1*inch

    # MCPs Enabled
    c.setFillColor(accent_color)
    c.setFont('Helvetica-Bold', 11)
    c.drawString(0.3*inch, y, 'MCPs Enabled:')
    y -= 0.2*inch

    c.setFillColor(text_color)
    c.setFont('Helvetica', 9)
    for mcp in exec_data['mcps']:
        c.drawString(0.4*inch, y, f'• {mcp}')
        y -= 0.15*inch

    y -= 0.1*inch

    # Skills to Use
    c.setFillColor(accent_color)
    c.setFont('Helvetica-Bold', 11)
    c.drawString(0.3*inch, y, 'Skills to Use:')
    y -= 0.2*inch

    c.setFillColor(text_color)
    c.setFont('Helvetica', 9)
    for skill in exec_data['skills']:
        c.drawString(0.4*inch, y, f'• {skill}')
        y -= 0.15*inch

    y -= 0.1*inch

    # Top 3 Prompts
    c.setFillColor(accent_color)
    c.setFont('Helvetica-Bold', 11)
    c.drawString(0.3*inch, y, 'Top 3 Prompts for Your Role:')
    y -= 0.2*inch

    c.setFillColor(text_color)
    c.setFont('Helvetica', 8)
    for i, prompt in enumerate(exec_data['top_prompts'], 1):
        # Wrap long prompts
        if len(prompt) > 70:
            words = prompt.split()
            line1 = f'{i}. '
            line2 = '   '
            for word in words:
                if len(line1 + word) < 70:
                    line1 += word + ' '
                else:
                    line2 += word + ' '
            c.drawString(0.4*inch, y, line1.strip())
            y -= 0.12*inch
            if line2.strip():
                c.drawString(0.4*inch, y, line2.strip())
                y -= 0.12*inch
        else:
            c.drawString(0.4*inch, y, f'{i}. {prompt}')
            y -= 0.15*inch

    # Footer with support contact
    c.setFillColor(HexColor('#5D6D7E'))
    c.setFont('Helvetica', 7)
    c.drawString(0.3*inch, 0.2*inch, exec_data['support'])

    # Border
    c.setStrokeColor(HexColor('#CCCCCC'))
    c.setLineWidth(1)
    c.rect(0.1*inch, 0.1*inch, CARD_WIDTH - 0.2*inch, CARD_HEIGHT - 0.2*inch, fill=0, stroke=1)

    c.save()

def main():
    # Create directory
    output_dir = '/Users/cpconnor/projects/ISPN-Claude-POC/quick-reference-cards'
    os.makedirs(output_dir, exist_ok=True)

    # Create reference card for each executive
    for exec_data in executives:
        last_name = exec_data['name'].split()[1]
        first_name = exec_data['name'].split()[0]
        filename = f'{output_dir}/{last_name}-{first_name}-Quick-Reference.pdf'
        create_reference_card(exec_data, filename)
        print(f'Created: {filename}')

    print('All quick reference cards created successfully!')

if __name__ == '__main__':
    main()
