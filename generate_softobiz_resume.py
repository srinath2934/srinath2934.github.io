import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

def generate_softobiz_style_resume(output_filename):
    # Proportional margins matching standard LaTeX / modern typography
    doc = SimpleDocTemplate(
        output_filename,
        pagesize=letter,
        leftMargin=30,
        rightMargin=30,
        topMargin=15,
        bottomMargin=15
    )

    styles = getSampleStyleSheet()

    # Fonts & Palette (Clean Academic Serif / Crisp Professional)
    header_name_style = ParagraphStyle(
        'HeaderName',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=18,
        leading=20,
        alignment=1,
        textColor=colors.HexColor("#111827")
    )

    header_sub_style = ParagraphStyle(
        'HeaderSub',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=9.2,
        leading=11.5,
        alignment=1,
        textColor=colors.HexColor("#1F2937")
    )

    header_contact_style = ParagraphStyle(
        'HeaderContact',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=8.2,
        leading=10.5,
        alignment=1,
        textColor=colors.HexColor("#374151")
    )

    section_heading_style = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=9.2,
        leading=10.5,
        textColor=colors.HexColor("#111827"),
        spaceBefore=2.5,
        spaceAfter=0.5
    )

    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=8.0,
        leading=9.8,
        textColor=colors.HexColor("#1F2937")
    )

    bullet_style = ParagraphStyle(
        'BulletCustom',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=8.0,
        leading=9.8,
        textColor=colors.HexColor("#1F2937"),
        leftIndent=9,
        firstLineIndent=-9,
        spaceAfter=0.8
    )

    entry_title_style = ParagraphStyle(
        'EntryTitle',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=9,
        leading=11,
        textColor=colors.HexColor("#111827")
    )

    entry_right_style = ParagraphStyle(
        'EntryRight',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=8.5,
        leading=11,
        alignment=2,
        textColor=colors.HexColor("#374151")
    )

    story = []

    # 1. NAME & TITLE
    story.append(Paragraph("Srinath S", header_name_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("AI Engineer | Agentic AI | LangGraph | MCP | Python", header_sub_style))
    story.append(Spacer(1, 2))
    contact_line = (
        "+91 7603967977 &nbsp;|&nbsp; "
        "srinath2934@gmail.com &nbsp;|&nbsp; "
        "<a href='https://linkedin.com/in/srinath29' color='#1D4ED8'><u>LinkedIn</u></a> &nbsp;|&nbsp; "
        "<a href='https://github.com/srinath2934' color='#1D4ED8'><u>GitHub</u></a> &nbsp;|&nbsp; "
        "Bengaluru, India"
    )
    story.append(Paragraph(contact_line, header_contact_style))
    story.append(Spacer(1, 3))

    # 2. PROFILE SUMMARY
    story.append(Paragraph("<b><u>Profile Summary</u></b>", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor("#111827"), spaceBefore=1, spaceAfter=3))
    summary_text = (
        "B.Tech Artificial Intelligence and Data Science graduate with strong CS fundamentals, DSA, and hands-on experience building "
        "agentic AI, RAG, NLP, and computer-vision systems. Built <b>ClosePilot</b>, a stateful 7-node LangGraph workflow with typed state, "
        "checkpointer-based Human-in-the-Loop (HITL) interrupts, safe pause/resume, Claude integration through MCP, structured-output validation, "
        "and a 14/14 passing Pytest suite. Also built <b>RepoChat</b>, a LangChain and FAISS retrieval system with automated response evaluation and "
        "LangSmith tracing. Portfolio & live project demos: <a href='https://srinath2934.github.io' color='#1D4ED8'><u>srinath2934.github.io</u></a>."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 3))

    # 3. PROFESSIONAL EXPERIENCE
    story.append(Paragraph("<b><u>Professional Experience</u></b>", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor("#111827"), spaceBefore=1, spaceAfter=3))
    
    exp_header = [
        [
            Paragraph("<b>Proitbridge</b> &nbsp;&nbsp;<i>Machine Learning Intern</i>", entry_title_style),
            Paragraph("Sep 2025 – Dec 2025", entry_right_style)
        ]
    ]
    t_exp = Table(exp_header, colWidths=[380, 160])
    t_exp.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(t_exp)
    story.append(Spacer(1, 2))

    story.append(Paragraph("• Engineered a Python-based CatBoost classification pipeline using pandas and NumPy to process 100+ features from a consumer dataset, predicting loan-default risk with <b>90% accuracy and 0.74 ROC-AUC</b>.", bullet_style))
    story.append(Paragraph("• Optimized feature-selection and hyperparameter-tuning scripts, containerizing preprocessing and inference modules for integration testing on <b>AWS EC2</b>.", bullet_style))
    story.append(Paragraph("• Implemented <b>SHAP-based interpretability modules</b> in Python to explain feature contributions and communicate applicant-level predictions to business stakeholders.", bullet_style))
    story.append(Spacer(1, 3))

    # 4. PROJECTS
    story.append(Paragraph("<b><u>Projects</u></b>", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor("#111827"), spaceBefore=1, spaceAfter=3))

    # P1: ClosePilot
    p1 = [
        [
            Paragraph("<b>ClosePilot — Multi-Agent AI Sales Copilot</b>", entry_title_style),
            Paragraph("<a href='https://github.com/srinath2934/closepilot' color='#1D4ED8'><u>github</u></a>", entry_right_style)
        ]
    ]
    t_p1 = Table(p1, colWidths=[460, 80])
    t_p1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(t_p1)
    story.append(Spacer(1, 1))
    story.append(Paragraph("• Built a 7-node stateful LangGraph workflow covering research, prioritization, strategy, communication, approval, action, and verification, with typed state, checkpointers, HITL interrupts, branching, and safe pause/resume.", bullet_style))
    story.append(Paragraph("• Integrated Claude through MCP for tool calling against a HubSpot CRM and implemented structured-output validation with read-after-write verification.", bullet_style))
    story.append(Paragraph("• Added LangSmith tracing for observability and verified reliability with a Pytest suite with <b>14/14 tests passing</b>.", bullet_style))
    story.append(Spacer(1, 2))

    # P2: Redrob
    p2 = [
        [
            Paragraph("<b>Redrob — Intelligent Candidate Ranking Engine</b>", entry_title_style),
            Paragraph("<a href='https://github.com/srinath2934' color='#1D4ED8'><u>github</u></a>", entry_right_style)
        ]
    ]
    t_p2 = Table(p2, colWidths=[460, 80])
    t_p2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(t_p2)
    story.append(Spacer(1, 1))
    story.append(Paragraph("• Built an offline, CPU-only hybrid ranking pipeline that ranked the top 100 candidates from a 100,000-candidate pool against job descriptions in <b>under 8 seconds of inference time</b>.", bullet_style))
    story.append(Paragraph("• Engineered a two-phase architecture with BAAI/BGE embeddings, vectorized retrieval, semantic similarity, skills, experience, and behavioral signals, producing deterministic rankings.", bullet_style))
    story.append(Paragraph("• Deployed an interactive Streamlit sandbox on Hugging Face Spaces with score breakdowns and CSV export for candidate filtering.", bullet_style))
    story.append(Spacer(1, 2))

    # P3: Semantic Ticket AI
    p3 = [
        [
            Paragraph("<b>Semantic AI Ticket Routing System</b>", entry_title_style),
            Paragraph("<a href='https://github.com/srinath2934/An-End-to-End-Semantic-AI-System-for-Automated-Support-Ticket-Handling' color='#1D4ED8'><u>github</u></a>", entry_right_style)
        ]
    ]
    t_p3 = Table(p3, colWidths=[460, 80])
    t_p3.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(t_p3)
    story.append(Spacer(1, 1))
    story.append(Paragraph("• Architected a Python backend processing <b>108,819 cleaned support tickets</b> for classification, team assignment, priority mapping, and resolution-time ETA prediction.", bullet_style))
    story.append(Paragraph("• Developed Sentence-BERT embedding pipelines with FAISS for semantic search, serving predictions through FastAPI with SQLite audit logging.", bullet_style))
    story.append(Paragraph("• Tracked model runs with Weights & Biases; achieved <b>81% priority accuracy, 80% action accuracy, and 7.73-hour mean absolute error for ETAs</b>. Co-authored an <b>IEEE ICIRCA 2026 paper</b>.", bullet_style))
    story.append(Spacer(1, 2))

    # P4: HazWaste / Vision & RepoChat
    p4 = [
        [
            Paragraph("<b>HazWaste Detection & RepoChat (GitHub RAG Assistant)</b>", entry_title_style),
            Paragraph("<a href='https://github.com/srinath2934/github-rag-chatbot' color='#1D4ED8'><u>github</u></a>", entry_right_style)
        ]
    ]
    t_p4 = Table(p4, colWidths=[460, 80])
    t_p4.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(t_p4)
    story.append(Spacer(1, 1))
    story.append(Paragraph("• Refined and optimized a YOLOv8/v9 computer-vision model wrapped in FastAPI (latency reduced from 3–5s to 110ms) and Dockerized to shrink deployment footprint by 55%.", bullet_style))
    story.append(Paragraph("• Built RepoChat: a modular Python RAG assistant using LangChain and FAISS to ingest, chunk, and index 1,000+ GitHub repository files with citation-backed grounding.", bullet_style))
    story.append(Spacer(1, 3))

    # 5. TECHNICAL SKILLS
    story.append(Paragraph("<b><u>Technical Skills</u></b>", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor("#111827"), spaceBefore=1, spaceAfter=3))

    skills_lines = [
        ("Context Engineering", "Layered context, context selectors and filters, token budgeting, summarisation/compaction, typed context schemas"),
        ("CS & Programming", "Python (async, typing, OOP), Data Structures & Algorithms, clean/idiomatic code, Git/GitHub, Linux"),
        ("Agent Orchestration", "LangGraph, state machines, checkpointers, HITL interrupts, branching/retries, multi-agent design, CrewAI (explored)"),
        ("LLM & Retrieval", "Anthropic Claude, OpenAI, MCP, prompt engineering, tool calling, structured output, FAISS, embeddings, ChromaDB"),
        ("Quality & Governance", "Pytest, LangSmith tracing, verification/validation patterns, grounded-output checks, auditability"),
        ("Deployment & ML", "FastAPI, Docker, AWS EC2, PyTorch, CatBoost, SHAP, Sentence-BERT, SQL, YOLOv9, OpenCV")
    ]
    for label, val in skills_lines:
        story.append(Paragraph(f"<b>{label}</b> – {val}", body_style))
    story.append(Spacer(1, 3))

    # 6. EDUCATION
    story.append(Paragraph("<b><u>Education</u></b>", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor("#111827"), spaceBefore=1, spaceAfter=3))

    edu_table = [
        [
            Paragraph("<b>B.Tech – Artificial Intelligence & Data Science</b> (GPA: 8.0 / 10)<br/>JCT College of Engineering and Technology, affiliated with Anna University", body_style),
            Paragraph("2022–2026", entry_right_style)
        ],
        [
            Paragraph("HSC – Mathur Boys Higher Secondary School, Tamil Nadu State Board", body_style),
            Paragraph("2022", entry_right_style)
        ]
    ]
    t_edu = Table(edu_table, colWidths=[460, 80])
    t_edu.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(t_edu)
    story.append(Spacer(1, 3))

    # 7. CERTIFICATIONS
    story.append(Paragraph("<b><u>Certifications</u></b>", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor("#111827"), spaceBefore=1, spaceAfter=3))

    cert_col1 = (
        "• <b>Oracle Certified Foundations Associate:</b> OCI 2023 AI Foundations (ID: 100662362OCI23AIFCA)<br/>"
        "• Foundation: Introduction to LangChain – Python — LangChain Academy (Jul 2026)<br/>"
        "• Introduction to Model Context Protocol — Anthropic"
    )
    cert_col2 = (
        "• Python (Intermediate) & SQL (Basic) Certification — HackerRank<br/>"
        "• Python for Data Science, AI & Development — IBM via Coursera<br/>"
        "• Databases and SQL for Data Science with Python — IBM via Coursera"
    )

    t_cert = Table([[Paragraph(cert_col1, body_style), Paragraph(cert_col2, body_style)]], colWidths=[270, 270])
    t_cert.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(t_cert)

    doc.build(story)
    print("Done generating Softobiz-style resume.")

if __name__ == "__main__":
    generate_softobiz_style_resume("d:/porfilio/public/Srinath_S_Resume.pdf")
