export type Skill = {
  name: string;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export const skillDescription = "List of the technologies and tools I've worked with to engineer solutions."

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages and Frameworks",
    skills: [
      { name: "Java" },
      { name: "Python"},
      { name: "Spring Boot"},
      { name: "JavaScript"},
      { name: "TypeScript"},
      { name: "Vue.js"},
      { name: "Node.js"},
      { name: "HTML"},
      { name: "CSS"},
      { name: "SQL"},
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Microservices"},
      { name: "REST API's"},
      { name: "Database Design"},
      { name: "Webhooks"},
      { name: "Quartz Scheduler"},
      { name: "SFTP"},
      { name: "PrismaORM"},
    ],
  },
  {
    category: "Tools and Utilities",
    skills: [
      { name: "Git"},
      { name: "Splunk"},
      { name: "SonarQube"},
      { name: "Snyk"},
      { name: "VS Code"},
      { name: "Postman"},
      { name: "Jira"},
      { name: "Confluence"},
    ],
  },
  {
    category: "Cloud and Infrastructure",
    skills: [
        { name: "Docker"},
      { name: "AWS"},
      { name: "MySQL"},
      { name: "PostgreSQL"},
      { name: "MongoDB"},
      { name: "GitHub Actions (CI/CD)"},
      { name: "SQL"},
      { name: "SNS"},
      { name: "SQS"},
    ],
  },
  {
    category: "Payments and Fintech",
    skills: [
      { name: "Payment Gateways (Stripe, Adyen, etc.)"},
      { name: "Direct Debit"},
      { name: "Delayed Capture"},
      { name: "Chargebacks"},
      { name: "Account Updater"},
      { name: "Risk and merchant screening"},
      { name: "Tokenisation"},
      { name: "Compliance and Governance"},
      { name: "Payment Reconciliation"},

    ],
  },
];

