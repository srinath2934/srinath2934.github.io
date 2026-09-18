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

    # 4. PROJECTS (3 FLAGSHIP SYSTEMS)
    story.append(Paragraph("<b><u>Selected Engineering Projects</u></b>", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor("#111827"), spaceBefore=1, spaceAfter=3))

    # Project 1: ClosePilot
    p1 = [
        [
            Paragraph("<b>ClosePilot — Enterprise Multi-Agent AI Sales Copilot</b>", entry_title_style),
            Paragraph("<a href='https://github.com/srinath2934/closepilot' color='#1D4ED8'><u>github</u></a> &nbsp;|&nbsp; <a href='https://closepilot-app.onrender.com' color='#1D4ED8'><u>live demo</u></a>", entry_right_style)
        ]
    ]
    t_p1 = Table(p1, colWidths=[420, 120])
    t_p1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(t_p1)
    story.append(Spacer(1, 1))
    story.append(Paragraph("• Architected a stateful <b>7-node LangGraph multi-agent system</b> (Research, Prioritize, Strategy, Communication, Approval, Action, Verification) with typed Pydantic v2 schemas and checkpointer memory for thread-level state persistence.", bullet_style))
    story.append(Paragraph("• Standardized CRM tool execution via <b>Model Context Protocol (MCP)</b> for HubSpot; enforced hard <b>Human-in-the-Loop (HITL) interrupt gates</b> (<font name='Courier'>interrupt_before=['approval']</font>) to eliminate unauthorized autonomous CRM writes.", bullet_style))
    story.append(Paragraph("• Built deterministic deal priority ranking (<font name='Courier'>Stage + Value + Inactivity - Penalties</font>) with zero LLM variance; integrated Claude/NVIDIA LLM reasoning, LangSmith waterfall tracing, and verified reliability with a <b>14/14 passing Pytest suite</b>.", bullet_style))
    story.append(Spacer(1, 2.5))

    # Project 2: Semantic Ticket AI
    p2 = [
        [
            Paragraph("<b>Semantic AI Support Ticket Intelligence Platform</b>", entry_title_style),
            Paragraph("<a href='https://github.com/srinath2934/An-End-to-End-Semantic-AI-System-for-Automated-Support-Ticket-Handling' color='#1D4ED8'><u>github</u></a> &nbsp;|&nbsp; <font color='#111827'><b>IEEE ICIRCA 2026</b></font>", entry_right_style)
        ]
    ]
    t_p2 = Table(p2, colWidths=[380, 160])
    t_p2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(t_p2)
    story.append(Spacer(1, 1))
    story.append(Paragraph("• Engineered an operational triage backend processing <b>108,819 enterprise support tickets</b> across 4 multi-task outputs: category classification, routing queue, priority level, and resolution-time (ETA) regression.", bullet_style))
    story.append(Paragraph("• Implemented 384-dimensional <b>Sentence-BERT (all-MiniLM-L6-v2)</b> embeddings and <b>FAISS vector indexing</b> for sub-150ms semantic search over historical resolutions, preventing keyword-miss routing bottlenecks.", bullet_style))
    story.append(Paragraph("• Achieved <b>81% priority accuracy, 80% action accuracy, and 7.73-hour MAE on resolution ETA</b>; served via FastAPI with SQLite audit logging and co-authored a peer-reviewed paper accepted at <b>IEEE ICIRCA 2026</b>.", bullet_style))
    story.append(Spacer(1, 2.5))

    # Project 3: RepoChat
    p3 = [
        [
            Paragraph("<b>RepoChat — Semantic Repository Intelligence System (RAG)</b>", entry_title_style),
            Paragraph("<a href='https://github.com/srinath2934/github-rag-chatbot' color='#1D4ED8'><u>github</u></a>", entry_right_style)
        ]
    ]
    t_p3 = Table(p3, colWidths=[460, 80])
    t_p3.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(t_p3)
    story.append(Spacer(1, 1))
    story.append(Paragraph("• Built an enterprise RAG assistant that semantically parses, chunks, and indexes <b>1,000+ files per repository</b> (benchmarked on React and LangChain) into ChromaDB with <b>&lt;300ms vector retrieval latency</b>.", bullet_style))
    story.append(Paragraph("• Engineered AST-aware semantic code chunking to preserve class and function scopes; integrated <b>Groq LPU (Llama 3.3 70B)</b> with exact line-number citations, achieving <b>~95% code-grounded accuracy and &lt;2% hallucination rate</b>.", bullet_style))
    story.append(Paragraph("• Built a responsive Streamlit interface with session-state memory, vector store caching, visual repository browsing, and automated response evaluation.", bullet_style))
    story.append(Spacer(1, 3))

    # 5. TECHNICAL SKILLS
    story.append(Paragraph("<b><u>Technical Skills</u></b>", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor("#111827"), spaceBefore=1, spaceAfter=3))

    skills_lines = [
        ("Machine Learning & AML", "Supervised/Unsupervised Learning, Exploratory Data Analysis (EDA), Data Cleaning, Feature Engineering, Classification, Regression, CatBoost, scikit-learn, SHAP, Hyperparameter Tuning"),
        ("Deep Learning & NLP", "PyTorch, Natural Language Processing (NLP), Sentence-BERT (SBERT), Vectorization, Tokenization & Chunking, Text Preprocessing, YOLOv9/v8, OpenCV, Multi-Head Architectures"),
        ("LLMs & Retrieval (RAG)", "Large Language Models (LLMs), Claude, OpenAI, Groq LPU, RAG Pipelines, FAISS Vector Indexing, ChromaDB, BAAI/BGE Embeddings, Context Compaction, Token Budgeting, Citations"),
        ("Agentic Orchestration", "LangGraph (v0.2+), State Machines, Typed State, Checkpointers, Human-in-the-Loop (HITL), MCP (Model Context Protocol), Tool Calling, Multi-Agent Workflows, CrewAI (explored)"),
        ("Data Science & Systems", "Python 3.10+ (async, typing, OOP), SQL (PostgreSQL, SQLite, MySQL), pandas, NumPy, Data Structures & Algorithms, FastAPI, Docker, AWS EC2, LangSmith Tracing, Pytest")
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
