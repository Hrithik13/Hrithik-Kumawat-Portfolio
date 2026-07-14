export type ResumeVariant = "ba" | "qa";

export interface ResumeHighlight {
  icon: "line-chart" | "users" | "file-text" | "database" | "gauge" | "bar-chart-3" | "check-square" | "history" | "shield-check";
  title: string;
  description: string;
}

export interface ResumeContent {
  label: string;
  shortLabel: string;
  summary: string;
  highlights: ResumeHighlight[];
  coreExpertise: string[];
  previewTitle: string;
  previewDescription: string;
  pdfPath: string;
  pdfFileName: string;
}

export const resumes: Record<ResumeVariant, ResumeContent> = {
  ba: {
    label: "Business Analyst Resume",
    shortLabel: "Business Analyst",
    summary:
      "Business Analyst with 3+ years of experience in enterprise IT environments specializing in requirements analysis, stakeholder collaboration, SQL-based validation, functional documentation and supporting successful software delivery.",
    highlights: [
      {
        icon: "line-chart",
        title: "Requirements Analysis",
        description:
          "Deconstructing complex business needs into actionable technical specifications.",
      },
      {
        icon: "users",
        title: "Stakeholder Collaboration",
        description:
          "Bridging the gap between business leaders and engineering teams effectively.",
      },
      {
        icon: "file-text",
        title: "BRD / FRD / SRS",
        description:
          "Crafting comprehensive documentation that drives alignment and clarity.",
      },
      {
        icon: "database",
        title: "SQL & Data Validation",
        description:
          "Ensuring data integrity through complex querying and systematic verification.",
      },
      {
        icon: "gauge",
        title: "Agile Delivery",
        description:
          "Facilitating Scrum ceremonies and maintaining a healthy product backlog.",
      },
      {
        icon: "bar-chart-3",
        title: "Power BI & Reporting",
        description:
          "Transforming raw data into visual narratives for executive decision making.",
      },
    ],
    coreExpertise: [
      "Business Analysis",
      "Requirements Documentation",
      "Stakeholder Management",
      "SQL",
      "Power BI",
      "Requirements Traceability",
    ],
    previewTitle: "Business Analyst Portfolio Resume",
    previewDescription:
      "This version emphasizes my ability to define scope, manage stakeholders, and design functional solutions. Ideal for product management, business analysis, and systems analyst roles.",
    pdfPath: "/resumes/hrithik-kumawat-ba.pdf",
    pdfFileName: "Hrithik-Kumawat-Business-Analyst-Resume.pdf",
  },
  qa: {
    label: "QA Analyst Resume",
    shortLabel: "QA Analyst",
    summary:
      "QA Analyst with 3+ years of experience in enterprise software testing, manual testing, SQL validation, dashboard testing and end-to-end quality assurance within Agile environments.",
    highlights: [
      {
        icon: "check-square",
        title: "Manual Testing",
        description:
          "Extensive experience in exploratory, ad-hoc, and UI testing protocols.",
      },
      {
        icon: "shield-check",
        title: "Functional Testing",
        description:
          "Verifying system features against business requirements with high precision.",
      },
      {
        icon: "history",
        title: "Regression Testing",
        description:
          "Ensuring new features don't break existing system stability.",
      },
      {
        icon: "database",
        title: "SQL Validation",
        description:
          "Back-end verification of database entries and data migrations.",
      },
      {
        icon: "gauge",
        title: "Jira",
        description:
          "Advanced defect tracking, story mapping, and sprint management proficiency.",
      },
      {
        icon: "users",
        title: "UAT",
        description:
          "Coordinating user acceptance cycles to ensure business readiness.",
      },
    ],
    coreExpertise: [
      "Manual Testing",
      "Regression Testing",
      "Integration Testing",
      "SQL Validation",
      "Defect Management",
      "Jira Proficiency",
    ],
    previewTitle: "QA Analyst Portfolio Resume",
    previewDescription:
      "This version emphasizes my testing rigor, defect management, and end-to-end quality ownership. Ideal for QA analyst and test engineering roles.",
    pdfPath: "/resumes/hrithik-kumawat-qa.pdf",
    pdfFileName: "Hrithik-Kumawat-QA-Analyst-Resume.pdf",
  },
};

export const coreExpertiseLevels: Record<ResumeVariant, { label: string; level: number }[]> = {
  ba: [
    { label: "Business Analysis", level: 95 },
    { label: "Requirements Documentation", level: 90 },
    { label: "Stakeholder Management", level: 88 },
    { label: "SQL", level: 82 },
    { label: "Power BI", level: 80 },
    { label: "Requirements Traceability", level: 85 },
  ],
  qa: [
    { label: "Manual Testing", level: 95 },
    { label: "Regression Testing", level: 90 },
    { label: "Integration Testing", level: 85 },
    { label: "SQL Validation", level: 82 },
    { label: "Defect Management", level: 88 },
    { label: "Jira Proficiency", level: 90 },
  ],
};

export const continuousLearningTags = [
  "Business Analysis",
  "Advanced SQL",
  "Power BI",
  "Data Analytics",
  "Business Intelligence",
  "Problem Solving",
];

export const resumeEducation = {
  degree: "Bachelor of Technology",
  field: "Computer Science & Engineering",
  graduated: "Graduated 2021",
};
