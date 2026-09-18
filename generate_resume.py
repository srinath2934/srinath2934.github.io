import os
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super(NumberedCanvas, self).__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_number(num_pages)
            super(NumberedCanvas, self).showPage()
        super(NumberedCanvas, self).save()

    def draw_page_number(self, page_count):
        # We target a clean 1-page resume
        pass

def build_pdf(filename):
    # Standard 0.45-inch margins for modern 1-page ATS resumes
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=32,
        rightMargin=32,
        topMargin=28,
        bottomMargin=28
    )

    styles = getSampleStyleSheet()
    
    # Custom Typography Palette
    primary_color = colors.HexColor("#0F172A")    # Deep Slate
    accent_color = colors.HexColor("#1E3A8A")     # Professional Navy Blue
    text_color = colors.HexColor("#1E293B")       # Dark Charcoal
    muted_color = colors.HexColor("#475569")      # Medium Slate
    border_color = colors.HexColor("#CBD5E1")     # Light Slate Border

    # Styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=22,
        textColor=primary_color,
        alignment=1 # Center
    )

    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        textColor=accent_color,
        alignment=1
    )

    contact_style = ParagraphStyle(
        'DocContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        textColor=muted_color,
        alignment=1
    )

    section_header_style = ParagraphStyle(
        'SectionHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        textColor=primary_color,
        spaceBefore=7,
        spaceAfter=3
    )

    body_style = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=text_color
    )

    bullet_style = ParagraphStyle(
        'BulletItem',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=text_color,
        leftIndent=11,
        firstLineIndent=-11,
        spaceAfter=2
    )

    item_title_style = ParagraphStyle(
        'ItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.2,
        leading=12,
        textColor=primary_color
    )

    item_right_style = ParagraphStyle(
        'ItemRight',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=muted_color,
        alignment=2 # Right
    )

    story = []

    # 1. Header & Contact
    story.append(Paragraph("SRINATH S", title_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("AI Engineer | Agentic AI (LangGraph / MCP) | RAG Systems | Machine Learning", subtitle_style))
    story.append(Spacer(1, 2))
    contact_text = (
        "Bengaluru, Karnataka, India &nbsp;|&nbsp; "
        "+91 7603967977 &nbsp;|&nbsp; "
        "srinath2934@gmail.com &nbsp;|&nbsp; "
        "<a href='https://linkedin.com/in/srinath29' color='#1E3A8A'>linkedin.com/in/srinath29</a> &nbsp;|&nbsp; "
        "<a href='https://github.com/srinath2934' color='#1E3A8A'>github.com/srinath2934</a> &nbsp;|&nbsp; "
        "<a href='https://srinath2934.github.io' color='#1E3A8A'>srinath2934.github.io</a>"
    )
    story.append(Paragraph(contact_text, contact_style))
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=0.8, color=border_color, spaceBefore=2, spaceAfter=4))

    # 2. Professional Summary
    story.append(Paragraph("PROFESSIONAL SUMMARY", section_header_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=border_color, spaceBefore=1, spaceAfter=3))
    summary_text = (
        "B.Tech Artificial Intelligence and Data Science graduate specialized in building production-oriented <b>agentic AI, "
        "retrieval-augmented generation (RAG), and NLP systems</b>. Shipped <b>ClosePilot</b>, an enterprise 7-node LangGraph workflow "
        "with Model Context Protocol (MCP) tool calling, Claude/NVIDIA LLM reasoning, Human-in-the-Loop gates, and a 14/14 passing Pytest suite. "
        "Architected semantic support-ticket intelligence processing <b>108,819 tickets</b> with SBERT and FAISS, co-authoring an <b>IEEE ICIRCA 2026 paper</b>. "
        "Hands-on with Python, async programming, Pydantic v2 schemas, FastAPI, Docker, and AWS EC2 deployment."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 4))

    # 3. Work Experience
    story.append(Paragraph("WORK EXPERIENCE", section_header_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=border_color, spaceBefore=1, spaceAfter=3))
    
    exp_table_data = [
        [
            Paragraph("<b>Proitbridge</b> &nbsp;—&nbsp; Machine Learning Intern", item_title_style),
            Paragraph("Sep 2025 – Dec 2025", item_right_style)
        ]
    ]
    t = Table(exp_table_data, colWidths=[380, 168])
    t.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('TOPPADDING', (0,0), (-1,-1), 0)]))
    story.append(t)

    story.append(Paragraph("• Built an end-to-end loan default risk classification pipeline using <b>CatBoost, pandas, and NumPy</b> across 100+ consumer features, achieving <b>90% accuracy and 0.74 ROC-AUC</b> with hyperparameter optimization.", bullet_style))
    story.append(Paragraph("• Containerized data preprocessing, model inference, and feature engineering modules using <b>Docker</b>; deployed on <b>AWS EC2</b> for reproducible automated integration testing.", bullet_style))
    story.append(Paragraph("• Integrated <b>SHAP (Explainable AI)</b> modules to generate local and global feature attribution reports, communicating risk factor drivers to executive business stakeholders.", bullet_style))
    story.append(Spacer(1, 4))

    # 4. Featured Projects
    story.append(Paragraph("SELECTED ENGINEERING PROJECTS", section_header_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=border_color, spaceBefore=1, spaceAfter=3))

    # Project 1: ClosePilot
    p1_header = [
        [
            Paragraph("<b>ClosePilot — Multi-Agent AI Sales Copilot</b> (LangGraph, MCP, Claude/NVIDIA, FastAPI, Supabase, Docker)", item_title_style),
            Paragraph("<a href='https://github.com/srinath2934/closepilot' color='#1E3A8A'><b>[GitHub Repo]</b></a>", item_right_style)
        ]
    ]
    t1 = Table(p1_header, colWidths=[430, 118])
    t1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('TOPPADDING', (0,0), (-1,-1), 0)]))
    story.append(t1)
    story.append(Paragraph("• Engineered a stateful <b>7-node LangGraph multi-agent workflow</b> (Research, Prioritize, Strategy, Drafter, Approval, Action, Verification) with Pydantic typed state, checkpointer memory, and safe pause/resume.", bullet_style))
    story.append(Paragraph("• Integrated <b>Model Context Protocol (MCP)</b> to standardize CRM tool calling with HubSpot; enforced strict <b>Human-in-the-Loop (HITL) gates</b> (interrupt_before=['approval']) to guarantee zero unauthorized external CRM writes.", bullet_style))
    story.append(Paragraph("• Implemented a zero-hallucination deterministic deal priority scoring formula; added <b>LangSmith waterfall tracing</b> and verified end-to-end system reliability with a <b>14/14 passing Pytest suite</b>.", bullet_style))
    story.append(Spacer(1, 2))

    # Project 2: Semantic Support Ticket AI
    p2_header = [
        [
            Paragraph("<b>Semantic AI Ticket Intelligence Platform</b> (Sentence-BERT, FAISS, scikit-learn, FastAPI, React)", item_title_style),
            Paragraph("<a href='https://github.com/srinath2934/An-End-to-End-Semantic-AI-System-for-Automated-Support-Ticket-Handling' color='#1E3A8A'><b>[IEEE ICIRCA 2026]</b></a>", item_right_style)
        ]
    ]
    t2 = Table(p2_header, colWidths=[410, 138])
    t2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('TOPPADDING', (0,0), (-1,-1), 0)]))
    story.append(t2)
    story.append(Paragraph("• Architected a production-grade multi-task support ticket triage system processing <b>108,819 cleaned enterprise tickets</b> into 4 structured targets: category classification, routing queue, priority level, and resolution ETA.", bullet_style))
    story.append(Paragraph("• Implemented 384-dimensional <b>Sentence-BERT (all-MiniLM-L6-v2)</b> embeddings paired with <b>FAISS vector indexing</b> for sub-150ms semantic retrieval of relevant historical ticket resolutions.", bullet_style))
    story.append(Paragraph("• Achieved <b>81% priority accuracy, 80% action accuracy, and 7.73-hour MAE on ETA regression</b>; built FastAPI endpoints with SQLite audit logging and co-authored an accepted paper at <b>IEEE ICIRCA 2026</b>.", bullet_style))
    story.append(Spacer(1, 2))

    # Project 3: RepoChat
    p3_header = [
        [
            Paragraph("<b>RepoChat — Semantic Repository Intelligence System</b> (LangChain, ChromaDB, Groq LPU, Streamlit)", item_title_style),
            Paragraph("<a href='https://github.com/srinath2934/github-rag-chatbot' color='#1E3A8A'><b>[GitHub Repo]</b></a>", item_right_style)
        ]
    ]
    t3 = Table(p3_header, colWidths=[430, 118])
    t3.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('TOPPADDING', (0,0), (-1,-1), 0)]))
    story.append(t3)
    story.append(Paragraph("• Built an enterprise RAG assistant that semantically parses, chunks, and indexes <b>1,000+ files per repository</b> (benchmarked on React and LangChain) into ChromaDB with <b>&lt;300ms vector retrieval latency</b>.", bullet_style))
    story.append(Paragraph("• Engineered AST-aware semantic code chunking and grounded generation with <b>Groq Llama 3.3 70B</b>; enforced exact line-number citations resulting in <b>~95% factual accuracy and &lt;2% hallucination rate</b>.", bullet_style))
    story.append(Spacer(1, 2))

    # Project 4: Redrob Ranking & YOLOv9 CV
    p4_header = [
        [
            Paragraph("<b>Redrob Candidate Ranking Engine & YOLOv9 Vision API</b> (BAAI/BGE, Vector Retrieval, PyTorch, YOLOv9)", item_title_style),
            Paragraph("Hugging Face & Docker", item_right_style)
        ]
    ]
    t4 = Table(p4_header, colWidths=[410, 138])
    t4.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('TOPPADDING', (0,0), (-1,-1), 0)]))
    story.append(t4)
    story.append(Paragraph("• <b>Redrob Engine:</b> Precomputed BAAI/BGE dense embeddings for a <b>100,000-candidate pool</b>, ranking top 100 profiles against job descriptions in <b>&lt;8s on CPU-only infrastructure</b> with deterministic tie-breaking.", bullet_style))
    story.append(Paragraph("• <b>YOLOv9 Vision Service:</b> Containerized YOLOv9 hazard detection in FastAPI, caching weights to drop latency from <b>3–5s to 110ms (30x faster)</b> and reducing Docker image footprint by <b>55% (4.5GB to 1.9GB)</b> on AWS EC2.", bullet_style))
    story.append(Spacer(1, 4))

    # 5. Technical Skills
    story.append(Paragraph("TECHNICAL SKILLS", section_header_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=border_color, spaceBefore=1, spaceAfter=3))
    
    skills_data = [
        [
            Paragraph("<b>Agentic AI & LLMs:</b>", item_title_style),
            Paragraph("LangGraph (v0.2+), State Machines, Checkpointers, Human-in-the-Loop (HITL), Model Context Protocol (MCP), Anthropic Claude, OpenAI, Groq LPU, Prompt Engineering, Structured Output (Pydantic v2)", body_style)
        ],
        [
            Paragraph("<b>Retrieval & Context:</b>", item_title_style),
            Paragraph("RAG Architectures, Sentence-BERT (SBERT), FAISS, ChromaDB, BAAI/BGE Embeddings, Semantic Search, Context Compaction, Token Budgeting, Line-level Source Attribution", body_style)
        ],
        [
            Paragraph("<b>ML & Data Science:</b>", item_title_style),
            Paragraph("PyTorch, CatBoost, scikit-learn, SHAP (Explainable AI), Multi-Task Classification, Time-to-Resolution Regression, YOLOv9/v8, OpenCV, pandas, NumPy, SQL (PostgreSQL, SQLite, MySQL)", body_style)
        ],
        [
            Paragraph("<b>Engineering & Cloud:</b>", item_title_style),
            Paragraph("Python 3.10+ (async/await, typing, OOP), FastAPI, Uvicorn, Docker, Docker Compose, AWS EC2, AWS S3, LangSmith Tracing, Pytest (14/14 tests), React + Vite, Git, Linux / Bash", body_style)
        ]
    ]
    st = Table(skills_data, colWidths=[120, 428])
    st.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1.5),
        ('TOPPADDING', (0,0), (-1,-1), 1.5),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0)
    ]))
    story.append(st)
    story.append(Spacer(1, 4))

    # 6. Education & Certifications
    story.append(Paragraph("EDUCATION & CERTIFICATIONS", section_header_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=border_color, spaceBefore=1, spaceAfter=3))

    edu_cert_data = [
        [
            Paragraph("<b>B.Tech, Artificial Intelligence & Data Science</b> (GPA: 8.0 / 10)<br/>JCT College of Engineering & Technology, Anna University", body_style),
            Paragraph("2022 – 2026<br/>Coimbatore, India", item_right_style)
        ]
    ]
    et = Table(edu_cert_data, colWidths=[380, 168])
    et.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('BOTTOMPADDING', (0,0), (-1,-1), 2), ('TOPPADDING', (0,0), (-1,-1), 0), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(et)

    certs_text = (
        "<b>Verified Credentials:</b> "
        "• <b>Oracle Certified Foundations Associate:</b> OCI 2023 AI Foundations (ID: 100662362OCI23AIFCA, Valid to 2026) &nbsp;|&nbsp; "
        "• <b>Anthropic:</b> Introduction to Model Context Protocol (MCP) &nbsp;|&nbsp; "
        "• <b>LangChain Academy:</b> Introduction to LangChain &nbsp;|&nbsp; "
        "• <b>HackerRank:</b> Python (Intermediate) & SQL (Basic) &nbsp;|&nbsp; "
        "• <b>IBM:</b> Python for Data Science & AI, Databases and SQL with Python (Honors)"
    )
    story.append(Paragraph(certs_text, body_style))

    # Build Document
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Successfully generated clean ATS-optimized resume at {filename}")

if __name__ == "__main__":
    out_path = "d:/porfilio/public/Srinath_S_AI_ML_Engineer_Resume.pdf"
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    build_pdf(out_path)
