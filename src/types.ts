export interface ProjectMetric {
  label: string;
  value: string;
  detail?: string;
}

export interface SchemaField {
  stage: string;
  field: string;
  purpose: string;
}

export interface PipelineCategory {
  sector: string;
  leads: string;
  companies: string[];
  operationalBottleneck: string;
}

export interface DiagnosticCase {
  client: string;
  sector: string;
  clientUrl?: string;
  bottleneck: string;
  solution: string;
}

export interface OutcomeItem {
  title: string;
  detail: string;
}

export interface CaseStudy {
  problem: string;
  constraints: string[];
  architectureDiagram?: string[];
  technicalDecisions: { choice: string; why: string }[];
  implementationDetails: string[];
  evaluation: { task: string; metric: string; score: string; notes?: string }[];
  failureModesAndLimitations: string[];
  nextIterations: string[];
  dataSchemaTable?: SchemaField[];
  pipelineBreakdown?: PipelineCategory[];
  diagnosticCaseStudies?: DiagnosticCase[];
  tangibleOutcomes?: OutcomeItem[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  shortDescription: string;
  badge?: string;
  technologies: string[];
  metrics: ProjectMetric[];
  githubUrl?: string;
  demoUrl?: string;
  liveTrackerUrl?: string;
  deliverableUrl?: string;
  websiteUrl?: string;
  paperUrl?: string;
  isCenterpiece?: boolean;
  caseStudy?: CaseStudy;
}

export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  location: string;
  contributions: string[];
  techStack: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  affiliation?: string;
  period: string;
  gpa?: string;
  details?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  validUntil?: string;
  link?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
