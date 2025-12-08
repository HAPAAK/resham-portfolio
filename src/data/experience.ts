export type Experience = {
  id: string;
  title: string;
  company: string;
  companyUrl: string;
  period: string;
  responsibilities: string[];
};

export const experiences: Experience[] = [
  {
    id: "exp1",
    title: "Software Engineer",
    company: "Chargebee Inc. (Remote)",
    companyUrl: "https://www.chargebee.com",
    period: "August 2023 - Present",
    responsibilities: [
      `Co-designed and built a merchant risk-screening microservice to automate risk evaluation, 
      reducing manual review time from \<b\>days to minutes\</b\>. This enabled thousands of 
      automated daily assessments and eliminated manual provisioning bottlenecks.`,
      
      `Engineered an SFTP-based financial workflow (Account Updater & Chargeback Management) 
      leveraging \<b\>Quartz scheduling\</b\> and async queues to \<b\>automate reconciliation\</b\>, 
      significantly reducing payment failures and ensuring \<b\>uninterrupted recurring revenue streams\</b\>.`,
      
      `Integrated Razorpay OAuth into the payment infrastructure with automated token-refresh 
      workflows, enabling friction-free onboarding that cut setup time from a \<b\>14-day manual 
      process to an instant, self-service flow\</b\>.`,
      
      `Built a region-aware routing layer for \<b\>Adyen API\</b\> calls using the \<b\>Singleton design pattern\</b\>,
       ensuring payments are routed based on merchant business country (US/EU/UK) to satisfy data residency and compliance 
       requirements.`,
      
      `Co-engineered the API design and full-stack PCI SAQ-A \<b\>self-attestation feature\</b\> (Vue.js/Webhooks), 
      replacing a week-long manual workflow with an \<b\>instant self-service automation\</b\>.`,
      
      `Co-developed an \<b\>event-driven email notification framework\</b\> utilizing \<b\>Amazon SQS\</b\> 
      and Mustache templates to decouple critical events (disputes, chargebacks). Ensured \<b\>reliable, 
      at-least-once delivery\</b\> of financial alerts, enhancing operational transparency for \<b\>thousands 
      of merchants\</b\>.`,
      
      `Expanded the global payment footprint by integrating Direct Debit methods (ACH/BACS/SEPA) 
      and new gateways (Paystack), managing the full SDLC. These integrations enabled cross-continent 
      payment acceptance (US, EU, Africa), contributing to an estimated \<b\>$4M+\</b\> in new business pipeline.`,
      
      `Actively contributed to operational excellence by writing \<b\>E2E test suites\</b\>, managing 
      release cycles, and handling \<b\>on-call (ROTA) support\</b\>. Consistently supported the team 
      through \<b\>PR reviews\</b\>, technical documentation, and debugging/fixing \<b\>production bugs and CRIs\</b\>.`
    ],
  },
  {
    id: "exp2",
    title: "Software Engineer Intern",
    company: "Chargebee Inc. (Remote)",
    companyUrl: "https://www.chargebee.com",
    period: "January 2023 - July 2023",
    responsibilities: [
      `Co-developed an internal tool for <b>feature usage metrics and visibility </b>across configuration setting for 
      accounting integrations, empowering team to focus development on high impact areas <b>saving hours of manual analysis and 
      decision making.</b>`,

      `Co-developed a full-stack, SSO-enabled, <b>database-agnostic</b> internal data browser with IAM controls, significantly
      reducing provisioning time by over <b>90% (from hours to minutes)</b> and enabling engineering teams to access masked, 
      multi-database environments instantly. `
    ],
  }
];

