export interface SkillCategory {
  id: string;
  icon: "layout-dashboard" | "database" | "bar-chart-3" | "shield-check" | "workflow";
  title: string;
  subtitle: string;
  description: string;
  competencies: string[];
  tools: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "business-analysis",
    icon: "layout-dashboard",
    title: "Business Analysis",
    subtitle: "Requirements engineering and functional documentation expertise.",
    description:
      "Translate business needs into structured functional requirements throughout the software development lifecycle. Experienced in bridging the gap between non-technical stakeholders and engineering teams.",
    competencies: [
      "BRD/FRD/SRS",
      "Gap Analysis",
      "Functional Flows",
      "Acceptance Criteria",
      "Traceability Matrix",
    ],
    tools: ["Jira", "Confluence", "Lucidchart"],
  },
  {
    id: "data-sql",
    icon: "database",
    title: "Data & SQL",
    subtitle: "Complex query design and data integrity validation.",
    description:
      "Ensure business-critical data accuracy through SQL analysis, backend validation, and ETL verification. Specialized in comparative analysis and large-scale data mapping.",
    competencies: [
      "SQL Development",
      "ETL Validation",
      "Backend Verification",
      "Data Mapping",
    ],
    tools: ["MySQL", "PostgreSQL", "AQT/ATE"],
  },
  {
    id: "reporting-bi",
    icon: "bar-chart-3",
    title: "Reporting & BI",
    subtitle: "Visual insights and business intelligence solution validation.",
    description:
      "Validate dashboards, reports, and KPIs to ensure reliable business insights. Expert in DAX testing and automated reporting verification processes.",
    competencies: ["KPI Validation", "DAX Testing", "Visual QA"],
    tools: ["Power BI", "Tableau", "Excel (VBA)"],
  },
  {
    id: "quality-assurance",
    icon: "shield-check",
    title: "Quality Assurance",
    subtitle: "Systematic software testing and defect management lifecycle.",
    description:
      "Support software quality through structured testing and UAT support. Expert in mapping business requirements to test cases for full coverage.",
    competencies: ["Regression Testing", "UAT Support", "Defect Triage"],
    tools: ["Jira Service Hub", "HP ALM"],
  },
  {
    id: "methodologies",
    icon: "workflow",
    title: "Methodologies",
    subtitle: "Agile, Scrum, and standard software development lifecycles.",
    description:
      "Practical application of Agile frameworks and traditional SDLC models to ensure on-time project delivery and scope management.",
    competencies: ["Scrum Rituals", "Sprint Planning", "Product Backlog"],
    tools: ["Agile", "Waterfall"],
  },
];

export const professionalStrengths = [
  {
    title: "Requirements Engineering",
    description:
      "Bridging the gap between stakeholder vision and technical execution through detailed documentation.",
  },
  {
    title: "Business Process Analysis",
    description:
      "Optimizing operational efficiency by identifying bottlenecks and modeling improved workflows.",
  },
  {
    title: "Stakeholder Management",
    description:
      "Facilitating alignment across cross-functional teams to ensure successful project delivery.",
  },
  {
    title: "Data Validation",
    description:
      "Maintaining rigorous data integrity standards through systematic verification and analysis.",
  },
  {
    title: "Analytical Problem Solving",
    description:
      "Deconstructing complex business challenges into actionable technical requirements.",
  },
  {
    title: "Cross-functional Collaboration",
    description:
      "Leading communication between business units and IT to drive unified outcomes.",
  },
];
