export interface Role {
  id: string;
  title: string;
  company: string;
  location?: string;
  period: string;
  current?: boolean;
  summary: string;
  resumeSummary: {
    ba: string;
    qa: string;
  };
  tags: string[];
  icon: "briefcase" | "layout-dashboard" | "settings";
}

export const roles: Role[] = [
  {
    id: "analyst",
    title: "Analyst",
    company: "Wipro HR Services Pvt. Ltd.",
    location: "Noida, Uttar Pradesh",
    period: "Jan 2023 – Jan 2024",
    current: true,
    summary:
      "Owned requirements analysis and functional documentation for benefits, interfaces, and reporting modules, working closely with onshore stakeholders and QA teams. Balanced pre-UAT validation, SQL-based data checks, and centralized documentation to keep releases on schedule and reduce late-stage defects.",
    resumeSummary: {
      ba: "Leading data validation and requirement gathering for high-stake enterprise financial platforms.",
      qa: "Executing comprehensive test plans and ensuring data accuracy across enterprise-grade dashboards.",
    },
    tags: [
      "Requirements Analysis",
      "BRD / FRD Documentation",
      "SQL Data Validation",
      "Requirement Walkthroughs",
      "UAT Support",
      "SharePoint Documentation",
      "Stakeholder Collaboration",
      "Production Validation",
    ],
    icon: "briefcase",
  },
  {
    id: "associate-analyst",
    title: "Associate Analyst",
    company: "Wipro HR Services Pvt. Ltd.",
    location: "Noida, Uttar Pradesh",
    period: "Nov 2021 – Jan 2023",
    summary:
      "Owned test case design and execution across functional, regression, and integration cycles, translating business rules into structured test scenarios. Partnered with onshore teams on UAT and Agile sprint delivery while keeping defect turnaround and reporting accuracy on track.",
    resumeSummary: {
      ba: "Coordinated cross-functional teams to align business goals with technical deliverables.",
      qa: "Managed defect lifecycles and facilitated User Acceptance Testing with key business units.",
    },
    tags: [
      "Functional Testing",
      "Regression Testing",
      "Integration Testing",
      "Dashboard Validation",
      "Report Validation",
      "Jira",
      "Agile",
      "UAT Support",
    ],
    icon: "layout-dashboard",
  },
  {
    id: "setup-configuration-specialist",
    title: "Setup Configuration Specialist",
    company: "Wipro HR Services Pvt. Ltd.",
    location: "Noida, Uttar Pradesh",
    period: "Jun 2021 – Nov 2021",
    summary:
      "Validated client-specific system configurations and business rules through functional and GUI testing during benefits and enrollment platform setup. Documented results and verified post-configuration behavior to catch setup issues before they reached downstream QA cycles.",
    resumeSummary: {
      ba: "Optimized internal system configurations and verified feature deployment integrity.",
      qa: "Performed smoke and regression testing during large-scale system migration projects.",
    },
    tags: [
      "System Configuration",
      "Business Rule Validation",
      "GUI Testing",
      "Functional Testing",
      "Configuration Quality",
      "Benefits Platform Setup",
    ],
    icon: "settings",
  },
];

export const roleEvolution = [
  {
    icon: "settings" as const,
    title: "Configuration",
    description: "System logic & client setup foundation.",
  },
  {
    icon: "shield-check" as const,
    title: "Quality Assurance",
    description: "Defect tracking & system integrity mastery.",
  },
  {
    icon: "line-chart" as const,
    title: "Business Analysis",
    description: "Strategic requirements management.",
  },
  {
    icon: "handshake" as const,
    title: "Stakeholder Collaboration",
    description: "Cross-functional team alignment.",
  },
  {
    icon: "trending-up" as const,
    title: "Business Value Delivery",
    description: "Solutions that drive measurable impact.",
  },
];
