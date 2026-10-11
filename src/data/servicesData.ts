import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'software-development',
    slug: 'software-development',
    title: 'Software Development',
    tagline: 'Custom software engineered around your exact operational workflows and business objectives.',
    shortDesc: 'Custom software designed around business requirements, including enterprise applications, internal operational tools, backend architectures, modernization, and ongoing maintenance.',
    overview: 'NEXOVIRA AI Solution engineers custom software tailored directly to your organization’s operational realities. We avoid generic, one-size-fits-all frameworks in favor of robust, secure systems built to automate repetitive operations, connect fragmented software tools, and scale predictably with your business growth.',
    iconName: 'Code2',
    businessProblems: [
      'Disjointed commercial tools that fail to reflect your unique operating methods',
      'Legacy software causing performance bottlenecks, security vulnerabilities, and maintenance headaches',
      'Fragmented data silos across departmental systems requiring manual double-entry',
      'Off-the-shelf software carrying costly subscription models for features your team never uses',
      'Lack of internal engineering bandwidth to build and maintain mission-critical proprietary tools'
    ],
    keyCapabilities: [
      {
        title: 'Business & Enterprise Applications',
        description: 'Bespoke systems built to support complex workflows, cross-departmental coordination, and enterprise-scale transaction processing.',
        deliverables: ['Custom domain logic architecture', 'Role-based access & multi-tenant permissions', 'Comprehensive audit logs and compliance controls']
      },
      {
        title: 'Internal Tools & Operational Systems',
        description: 'Focused internal applications that eliminate manual spreadsheets, accelerate field staff operations, and streamline approval hierarchies.',
        deliverables: ['Custom back-office portals', 'Operational task & workflow dispatchers', 'Automated approval engines']
      },
      {
        title: 'Backend Development & API Integrations',
        description: 'Resilient server-side architectures, microservices, and unified API layers connecting third-party platforms with proprietary systems.',
        deliverables: ['High-throughput REST & GraphQL APIs', 'Secure third-party API orchestrations', 'Database schema optimization and indexing']
      },
      {
        title: 'Modernization of Existing Software',
        description: 'Systematic refactoring and migration of legacy codebases into modern, cloud-native stacks without interrupting active business operations.',
        deliverables: ['Legacy database and logic migration', 'Monolith to modular service decoupling', 'Cloud infrastructure modernizations']
      },
      {
        title: 'Maintenance & Ongoing Improvements',
        description: 'Structured software support agreements ensuring system security, uptime monitoring, bug resolution, and feature evolutions.',
        deliverables: ['Proactive security patches and dependency updates', 'Performance audits and latency reduction', 'Dedicated technical issue resolution SLAs']
      }
    ],
    exampleUseCases: [
      {
        title: 'Operations Orchestration Portal',
        scenario: 'A multi-location logistics provider was tracking dispatches across four disconnected spreadsheets and manual phone calls.',
        solution: 'Built a unified operations platform integrating real-time route assignments, vehicle telemetry, and instant status updates for dispatchers.'
      },
      {
        title: 'Legacy Monolith Refactor',
        scenario: 'A financial consultancy was constrained by an aging desktop application unable to interface with modern cloud accounting services.',
        solution: 'Engineered a modern web-based backend architecture with automated data synchronization and bank-grade data security protocols.'
      }
    ],
    businessBenefits: [
      { metric: 'Custom Alignment', benefit: 'Software structured exactly to your team’s operating habits, eliminating training friction.' },
      { metric: 'Zero Bloat', benefit: 'You pay only for the exact capabilities and database models your organization utilizes.' },
      { metric: 'Full Ownership', benefit: 'Direct ownership of proprietary business logic and digital property without recurring per-seat penalties.' }
    ],
    developmentApproach: [
      { step: '01', title: 'Operational Audit', description: 'We map out current friction points, data flows, and departmental bottlenecks before writing code.' },
      { step: '02', title: 'Modular Architecture', description: 'Designing scalable database schemas and decoupled service boundaries for long-term stability.' },
      { step: '03', title: 'Milestone Execution', description: 'Regular bi-weekly demonstration sprints so your stakeholders validate actual features as they emerge.' },
      { step: '04', title: 'Hardened Deployment', description: 'Automated CI/CD deployment pipelines, exhaustive integration testing, and comprehensive operational documentation.' }
    ],
    faqs: [
      {
        question: 'Do we own the source code and intellectual property after completion?',
        answer: 'Yes. Upon project completion and fulfillment of agreed terms, full intellectual property and source code ownership transfer to your business.'
      },
      {
        question: 'Can you work with our existing technical infrastructure and servers?',
        answer: 'Yes. We architect solutions to deploy into your cloud provider of choice (AWS, Google Cloud, Azure) or on-premises servers based on your compliance needs.'
      },
      {
        question: 'How do you handle ongoing maintenance after launch?',
        answer: 'We provide structured post-launch support windows, continuous monitoring, and flexible monthly maintenance retainers for continuous improvements.'
      }
    ]
  },
  {
    id: 'web-development',
    slug: 'web-development',
    title: 'Web Development',
    tagline: 'High-performance web platforms, corporate websites, and secure digital portals built for speed and conversion.',
    shortDesc: 'Professional websites and custom web applications designed for usability, speed, search engine presence, client self-service, and scalable business growth.',
    overview: 'NEXOVIRA AI Solution develops web applications and commercial websites engineered for rapid load times, intuitive user experiences, and seamless business workflows. From customer self-service portals to scalable web applications, our digital products balance aesthetic clarity with rigorous technical engineering.',
    iconName: 'Globe',
    businessProblems: [
      'Sluggish websites with poor responsiveness causing high bounce rates and lost customer inquiries',
      'Inflexible website templates that cannot support bespoke client portals, calculators, or interactive tools',
      'Disjointed customer onboarding journeys that require manual team interventions',
      'Security risks stemming from unmaintained plugins and generic content management setups',
      'Inadequate mobile experiences failing customers across smartphones and tablet viewports'
    ],
    keyCapabilities: [
      {
        title: 'Corporate & Business Websites',
        description: 'Authoritative, cleanly branded web platforms that communicate your value proposition, showcase services, and convert qualified inbound interest.',
        deliverables: ['Custom design systems & responsive layouts', 'SEO-engineered markup & meta architectures', 'Fast global CDN delivery & Core Web Vitals compliance']
      },
      {
        title: 'Custom Web Applications',
        description: 'Interactive web software providing deep utility, computational workflows, and multi-step processes directly in modern browsers.',
        deliverables: ['Single-page application (SPA) architecture', 'State-managed user interaction flows', 'Asynchronous data fetching & offline caching']
      },
      {
        title: 'E-commerce Platforms',
        description: 'B2B and B2C commerce architectures engineered for frictionless checkout, real-time inventory checking, and custom catalog filtering.',
        deliverables: ['Secure payment gateway integrations', 'Dynamic pricing rules & discount logic', 'Order management and fulfillment webhooks']
      },
      {
        title: 'Customer & Employee Portals',
        description: 'Authenticated environments allowing customers to view project statuses, manage account invoices, or allowing staff to access internal files.',
        deliverables: ['Multi-factor authentication (MFA)', 'Self-service document downloads & submissions', 'Granular role-based page visibility']
      },
      {
        title: 'Interactive Dashboards',
        description: 'Rich graphical interfaces featuring dynamic data tables, filtering controls, and responsive visual charts built with modern client libraries.',
        deliverables: ['Real-time data visualization components', 'Exportable reporting modules (CSV/PDF)', 'Custom filtering & faceted search']
      },
      {
        title: 'Responsive Design & Performance Optimization',
        description: 'Pixel-perfect rendering across desktop, tablet, and mobile displays with asset compression, server-side caching, and sub-second load times.',
        deliverables: ['Mobile-first layout engineering', 'Image and asset optimization pipelines', 'Accessibility (WCAG AA) compliance verification']
      }
    ],
    exampleUseCases: [
      {
        title: 'Client Collaboration & Billing Portal',
        scenario: 'A consulting firm spent dozens of weekly hours emailing project drafts, revision notes, and invoice PDFs back and forth.',
        solution: 'Developed a secure client portal where clients review milestone deliverables, submit structured feedback, and pay invoices online.'
      },
      {
        title: 'High-Conversion B2B Platform',
        scenario: 'An industrial equipment supplier had an outdated catalog with no search filtering, leading to phone-line overload for basic specs.',
        solution: 'Launched a modern web application featuring instant parametric search, spec sheet downloads, and automated quote generation.'
      }
    ],
    businessBenefits: [
      { metric: 'Sub-Second Speed', benefit: 'Optimized rendering pipelines ensure minimal bounce rates and superior user retention.' },
      { metric: 'Cross-Device Precision', benefit: 'Consistent brand presentation and effortless functionality across all desktop and mobile screen sizes.' },
      { metric: 'Lead Velocity', benefit: 'Clear user journeys and accessible call-to-actions turn passive web traffic into verified inquiries.' }
    ],
    developmentApproach: [
      { step: '01', title: 'Information Architecture', description: 'Structuring wireframes, user journeys, and navigational hierarchy based on core visitor intents.' },
      { step: '02', title: 'Component Engineering', description: 'Crafting clean, accessible React and Tailwind CSS components adhering to strict design standards.' },
      { step: '03', title: 'Integration & Testing', description: 'Connecting forms, portals, authentication, and APIs with cross-browser regression testing.' },
      { step: '04', title: 'Performance Audit & Launch', description: 'Lighthouse score verification, security review, domain SSL configuration, and zero-downtime deployment.' }
    ],
    faqs: [
      {
        question: 'What web frameworks and technologies do you use?',
        answer: 'We prioritize modern, robust stacks including React, TypeScript, Tailwind CSS, Node.js, and server-rendered architectures tailored to the performance profile of each project.'
      },
      {
        question: 'Can you integrate our existing third-party marketing tools and CRM?',
        answer: 'Yes. We seamlessly integrate web forms, lead captures, and customer portals with systems like HubSpot, Salesforce, Stripe, and custom REST endpoints.'
      },
      {
        question: 'Will our team be able to update site copy and announcements?',
        answer: 'We configure intuitive content management integrations or structured data files so your team can make routine updates without touching production code.'
      }
    ]
  },
  {
    id: 'data-intelligence',
    slug: 'data-intelligence',
    title: 'Data Intelligence',
    tagline: 'Transforming scattered business data into coherent pipelines, automated reports, and actionable operational insights.',
    shortDesc: 'End-to-end data solutions: collection, cleaning, ETL pipelines, business intelligence dashboards, automated reporting, and decision-support analytics.',
    overview: 'NEXOVIRA AI Solution helps businesses bridge the gap between raw data generation and strategic decision-making. We construct reliable data ingestion pipelines, cleanse fragmented data sources, and build intuitive business intelligence interfaces that give leadership teams continuous visibility into organizational performance.',
    iconName: 'BarChart3',
    businessProblems: [
      'Critical business metrics locked away across separate software applications, POS systems, and spreadsheets',
      'Finance and operations staff spending hours every week manually compiling recurring reports',
      'Dirty, duplicate, or inconsistent records compromising reporting accuracy and customer communications',
      'Delayed visibility into revenue, customer retention, or operational costs preventing timely interventions',
      'Lack of clear visual dashboards for department leads and executive decision-makers'
    ],
    keyCapabilities: [
      {
        title: 'Data Collection, Integration & Cleaning',
        description: 'Automated data ingestion from databases, third-party APIs, and legacy files, standardized through systematic cleansing and deduplication rules.',
        deliverables: ['Custom ETL/ELT pipelines', 'Deduplication and normalization scripts', 'Schema validation and data integrity monitoring']
      },
      {
        title: 'Business Intelligence Dashboards',
        description: 'Executive and operational dashboards delivering real-time metrics, drill-down filtering, and clear visual summaries of key performance indicators.',
        deliverables: ['Role-tailored KPI views', 'Interactive visual charts & trend analysis', 'Cross-source data aggregation models']
      },
      {
        title: 'Automated Reporting',
        description: 'Scheduled report generation engines that deliver polished daily, weekly, or monthly summaries straight to stakeholder inboxes or Slack channels.',
        deliverables: ['Automated email digest generation', 'PDF/Spreadsheet export generators', 'Alert triggers for operational anomalies']
      },
      {
        title: 'Data Analytics & Visualization',
        description: 'Deep analytical models highlighting seasonal trends, cohort retention, cost drivers, and customer lifetime value distributions.',
        deliverables: ['Customer cohort analysis', 'Revenue velocity & margin analysis', 'Operational throughput visualizations']
      },
      {
        title: 'Data Pipelines & Workflow Automation',
        description: 'Fault-tolerant background pipelines running continuous data synchronization between production databases, data warehouses, and analytics tools.',
        deliverables: ['Event-driven pipeline triggers', 'Warehouse schemas (PostgreSQL / BigQuery / Snowflake)', 'Failover and retry alerting mechanisms']
      },
      {
        title: 'Insights that Support Business Decisions',
        description: 'Structured metric frameworks designed to help executives answer specific commercial questions rather than staring at raw numbers.',
        deliverables: ['Executive briefing dashboards', 'Predictive demand forecasts', 'Resource allocation insight summaries']
      }
    ],
    exampleUseCases: [
      {
        title: 'Unified Multi-Channel Revenue Hub',
        scenario: 'An e-commerce business sold through three online marketplaces plus retail stores, leaving leadership guessing weekly cash position.',
        solution: 'Built an automated data pipeline consolidating daily transactions into an executive dashboard with net margin breakdowns by product channel.'
      },
      {
        title: 'Field Service Performance Analytics',
        scenario: 'A maintenance firm could not easily pinpoint which service territories suffered the longest resolution delays.',
        solution: 'Deployed an interactive operations dashboard showing regional technician response times, first-visit completion rates, and parts expenditure.'
      }
    ],
    businessBenefits: [
      { metric: 'Single Source of Truth', benefit: 'Eliminates departmental disputes by standardizing calculation definitions across the organization.' },
      { metric: 'Zero Manual Compilations', benefit: 'Frees administrative and finance talent from repetitive copy-pasting and formatting cycles.' },
      { metric: 'Proactive Alerting', benefit: 'Immediate detection of revenue dips, inventory shortages, or cost spikes before they compound.' }
    ],
    developmentApproach: [
      { step: '01', title: 'Data Source Audit', description: 'Reviewing all databases, third-party platforms, APIs, and export schemas across your business.' },
      { step: '02', title: 'Pipeline & Schema Design', description: 'Establishing clean ingestion jobs, transformation logic, and warehouse tables for reliable queries.' },
      { step: '03', title: 'Dashboard Interface Build', description: 'Developing clear visual interfaces with responsive filters, data grids, and tabular precision.' },
      { step: '04', title: 'Verification & Delivery', description: 'Reconciling outputs against historical source data and training your team on custom query filters.' }
    ],
    faqs: [
      {
        question: 'Can you connect with our existing databases and SaaS tools?',
        answer: 'Yes. We build integrations across SQL databases (PostgreSQL, MySQL, SQL Server), cloud warehouses, and third-party APIs like Stripe, Shopify, QuickBooks, and HubSpot.'
      },
      {
        question: 'How do you ensure data security during ETL processing?',
        answer: 'All pipeline code adheres to strict encryption in transit (TLS) and at rest, scoped API key authentication, and isolated environment permissions.'
      },
      {
        question: 'What if our source data is messy or contains duplicate entries?',
        answer: 'Data cleaning is an integral step. We program deterministic validation, deduplication rules, and schema normalizers that scrub bad data during ingestion.'
      }
    ]
  },
  {
    id: 'crm-erp-development',
    slug: 'crm-erp-development',
    title: 'CRM & ERP Development',
    tagline: 'Custom CRM and ERP systems engineered around your exact sales cycles, operations, and personnel workflows.',
    shortDesc: 'Tailored platforms for lead management, sales pipelines, operations coordination, inventory tracking, HR, and finance modules, configured to your precise business requirements.',
    overview: 'NEXOVIRA AI Solution engineers custom Customer Relationship Management (CRM) and Enterprise Resource Planning (ERP) systems built strictly around your operational logic. Rather than forcing your staff to contort their daily routines into rigid commercial suites, every feature, module, pipeline, and integration is selected and designed according to your exact business specifications.',
    iconName: 'Layers',
    businessProblems: [
      'Expensive per-user software licensing fees for commercial CRM/ERP suites where 70% of features sit untouched',
      'Sales reps struggling with bloated interfaces that require excessive data entry and slow down follow-ups',
      'Operational disconnect between customer acquisition, inventory fulfillment, and finance invoicing',
      'Off-the-shelf software failing to support specialized manufacturing steps, job ticketing, or service tiers',
      'Inability to customize data models, resulting in critical operational details stored in external notes'
    ],
    keyCapabilities: [
      {
        title: 'Lead & Customer Management',
        description: 'Comprehensive contact histories, activity logging, customer categorization, and communication tracking tailored to your client relationships.',
        deliverables: ['Custom lead qualification criteria', 'Unified customer interaction timelines', 'Account segmentation and tier tagging']
      },
      {
        title: 'Sales Pipelines & Follow-ups',
        description: 'Intuitive kanban and list pipeline views, automated stage progression rules, quote creation, and follow-up reminders for sales personnel.',
        deliverables: ['Interactive visual deal pipelines', 'Automated follow-up task dispatching', 'Deal win/loss reporting and probability weighting']
      },
      {
        title: 'Workflow Automation & Reporting',
        description: 'Custom business logic triggers that advance projects, notify responsible staff, and generate executive summaries automatically.',
        deliverables: ['Conditional action triggers', 'Automated internal notification routing', 'Pipeline velocity and conversion analytics']
      },
      {
        title: 'Employee & HR Management',
        description: 'Modular personnel modules including staff directory, role assignments, shift scheduling, credential tracking, and PTO requests.',
        deliverables: ['Staff directory & permission scoping', 'Time tracking and milestone logging', 'Role-specific operational dashboard views']
      },
      {
        title: 'Inventory & Operational Management',
        description: 'Real-time stock level monitoring, supplier tracking, purchase order generation, and fulfillment status updates across locations.',
        deliverables: ['Multi-location inventory tracking', 'Automated low-stock reorder thresholds', 'Warehouse pick-pack-ship status tracking']
      },
      {
        title: 'Finance-Related Modules & Integrations',
        description: 'Billing workflows, invoice generation, payment status synchronizations, and accounting software hooks configured to your payment terms.',
        deliverables: ['Automated invoice drafting and tracking', 'Payment gateway & accounting software sync', 'Accounts receivable aging summaries']
      }
    ],
    exampleUseCases: [
      {
        title: 'Specialized Contractor ERP',
        scenario: 'A specialty commercial contractor struggled with estimate calculations, crew scheduling, and supplier billing handled in separate silos.',
        solution: 'Engineered a unified ERP combining custom project quoting, crew calendar dispatching, material purchase orders, and client billing.'
      },
      {
        title: 'High-Touch B2B Sales CRM',
        scenario: 'A B2B distributor found standard CRM software overly complicated, resulting in reps skipping notes and missing key renewal dates.',
        solution: 'Built a lightweight, streamlined CRM focused specifically on contract expiration alerts, quote generation, and one-click activity logs.'
      }
    ],
    businessBenefits: [
      { metric: 'Zero Per-Seat Fees', benefit: 'Scale your team without watching your monthly software bill multiply with every new hire.' },
      { metric: 'Exact Fit Workflow', benefit: 'Every field, button, and status reflects your company’s proven operations, not generic templates.' },
      { metric: 'Unified Data Core', benefit: 'Sales, operations, and billing teams operate on a single platform, eliminating inter-departmental blind spots.' }
    ],
    developmentApproach: [
      { step: '01', title: 'Workflow Mapping', description: 'Documenting every step in your sales cycle, fulfillment journey, and back-office management.' },
      { step: '02', title: 'Modular Schema Setup', description: 'Selecting only the exact modules, fields, and permissions required for your team’s operations.' },
      { step: '03', title: 'Iterative Departmental Testing', description: 'Reviewing module prototypes with actual sales reps, operations leads, and billing staff.' },
      { step: '04', title: 'Migration & Go-Live', description: 'Migrating legacy historical records, configuring security permissions, and conducting role-based onboarding.' }
    ],
    faqs: [
      {
        question: 'How do you determine which modules to include in our system?',
        answer: 'During initial discovery, we evaluate your active operations. We only build the modules your team actually needs—such as sales pipeline, job ticketing, or inventory—ensuring a clean, focused system.'
      },
      {
        question: 'Can we import our existing leads, customer data, and order history?',
        answer: 'Yes. We conduct data mapping and sanitization routines to safely migrate your historical records into the new relational database.'
      },
      {
        question: 'Can we add new modules or fields in the future as our business expands?',
        answer: 'Absolutely. We design the database architecture and modular UI components so additional departments, workflows, or integrations can be seamlessly introduced.'
      }
    ]
  },
  {
    id: 'ai-agents',
    slug: 'ai-agents',
    title: 'Personal & Enterprise AI Agents',
    tagline: 'Autonomous and assisted AI agents engineered with strict access controls, human review, and business integrations.',
    shortDesc: 'AI assistants and autonomous agents designed for team productivity, sales qualification, customer support, internal knowledge discovery, and workflow automation.',
    overview: 'NEXOVIRA AI Solution engineers purpose-built AI agents that carry out focused business tasks. Far from generic chatbots, our enterprise agents integrate directly with your company’s approved data sources, business APIs, and communication channels. We build every agent with rigorous access controls, context guardrails, and human-in-the-loop oversight to ensure reliable, auditable performance.',
    iconName: 'Bot',
    businessProblems: [
      'Customer support teams overwhelmed by high volumes of routine, repetitive inquiries',
      'Sales reps losing momentum while manually researching inbound leads and writing initial outreach',
      'Staff wasting valuable time searching across fragmented documentation, wikis, and policy manuals',
      'Executive and administrative time consumed by repetitive meeting synthesis and task coordination',
      'Concerns regarding data privacy, hallucination risks, and uncontrolled AI behavior in business environments'
    ],
    keyCapabilities: [
      {
        title: 'Personal Productivity Assistants',
        description: 'Context-aware assistants configured for executives and specialists to synthesize project briefs, draft correspondence, and organize action items.',
        deliverables: ['Custom prompt profiles & style guidelines', 'Task breakdown and action-item extraction', 'Calendar and agenda synchronization']
      },
      {
        title: 'AI Sales & Customer Support Agents',
        description: 'Trained agents that engage web visitors, answer product queries against verified documentation, qualify prospect intent, and route meetings.',
        deliverables: ['Verified knowledge-base grounding', 'Structured qualification question flows', 'CRM lead creation & escalation triggers']
      },
      {
        title: 'Internal Knowledge Assistants',
        description: 'Secure, retrieval-augmented assistants that provide staff with instant, source-cited answers from company SOPs, handbooks, and archives.',
        deliverables: ['Retrieval-Augmented Generation (RAG) architecture', 'Source reference attribution for every answer', 'Role-based document access restrictions']
      },
      {
        title: 'Research & Task Assistants',
        description: 'Specialized agents that monitor industry feeds, summarize competitive data, extract insights from filings, and prepare structured briefs.',
        deliverables: ['Automated web & document research pipelines', 'Structured comparative summaries', 'Exportable briefing reports']
      },
      {
        title: 'Business Workflow Automation',
        description: 'Multi-step agents that execute business actions across software tools, such as creating support tickets, updating records, or filing logs.',
        deliverables: ['Tool-calling and function execution integrations', 'Deterministic business logic validation', 'Automated error handling and retries']
      },
      {
        title: 'Approved Business Tool & Data Integrations',
        description: 'Secure API bridges linking agents with approved corporate tools (Slack, Teams, CRMs, databases) under strict authentication protocols.',
        deliverables: ['Encrypted API credentials storage', 'Fine-grained scope permissions', 'Air-gapped sensitive data exclusions']
      }
    ],
    exampleUseCases: [
      {
        title: 'Tier-1 Customer Support Resolution Agent',
        scenario: 'A digital service provider received 400+ weekly customer tickets asking identical questions about account settings and billing cycles.',
        solution: 'Engineered an AI support agent resolving 62% of common inquiries instantly using verified knowledge bases, escalating complex edge cases to human reps.'
      },
      {
        title: 'Internal Engineering & Operations SOP Agent',
        scenario: 'A distributed team struggled to find current compliance guidelines across 300+ shared documents, leading to protocol drift.',
        solution: 'Deployed a private knowledge agent in their internal workspace that answers compliance questions with exact page references and revision dates.'
      }
    ],
    businessBenefits: [
      { metric: '24/7 Responsiveness', benefit: 'Instant initial answers for customers and prospects regardless of time zone or staff availability.' },
      { metric: 'Human-in-the-Loop Control', benefit: 'Critical actions require human confirmation before sending messages or altering databases.' },
      { metric: 'Strict Data Isolation', benefit: 'Enterprise guardrails ensure proprietary data is never used to train public third-party foundation models.' }
    ],
    developmentApproach: [
      { step: '01', title: 'Task Definition & Guardrails', description: 'Defining the agent’s exact scope, allowable actions, forbidden topics, and escalation criteria.' },
      { step: '02', title: 'Knowledge Grounding', description: 'Ingesting and vectorizing authoritative company documentation with source verification.' },
      { step: '03', title: 'Tool Integration & Security', description: 'Connecting approved software APIs with strict token scoping and human approval triggers.' },
      { step: '04', title: 'Supervised Evaluation', description: 'Simulating hundreds of edge-case scenarios to evaluate answer accuracy and boundary adherence.' }
    ],
    faqs: [
      {
        question: 'How do you prevent AI agents from hallucinating or providing incorrect answers?',
        answer: 'We implement Retrieval-Augmented Generation (RAG) with strict system guardrails instructing the agent to only answer using provided, verified documents. If information is not in the approved corpus, the agent states so and escalates to a human.'
      },
      {
        question: 'Is our company data used to train public AI models?',
        answer: 'No. We utilize enterprise API agreements and private instances where your prompts, documents, and data are never used for model training or retained by public providers.'
      },
      {
        question: 'Can the agent trigger real actions like booking meetings or updating our CRM?',
        answer: 'Yes. Through structured tool calling and API endpoints, agents can create CRM deals, send webhook alerts, and schedule meetings based on your approval rules.'
      }
    ]
  },
  {
    id: 'custom-ai-tools',
    slug: 'custom-ai-tools',
    title: 'Custom AI Tools',
    tagline: 'Purpose-built AI applications solving high-friction operational bottlenecks with precision.',
    shortDesc: 'Purpose-built applications: intelligent document processing, semantic search, automated content workflows, analytical tools, and AI integrated into existing software.',
    overview: 'NEXOVIRA AI Solution designs and builds custom AI tools engineered to solve specific operational challenges. Whether extracting structured data from unstructured contracts, creating semantic search engines across technical catalogs, or adding AI capabilities to your existing software, we engineer purpose-built solutions that deliver measurable utility.',
    iconName: 'Cpu',
    businessProblems: [
      'Employees spending hours manually reading invoices, contracts, or inspection forms to extract key numbers',
      'Keyword search in company archives returning irrelevant results or missing synonyms and intent',
      'Repetitive writing, formatting, or summarization tasks draining technical and creative team capacity',
      'Valuable business data trapped in static PDFs, scanned receipts, and image attachments',
      'Existing software lacking modern AI capabilities, requiring manual export-import workarounds'
    ],
    keyCapabilities: [
      {
        title: 'Document Processing & Information Extraction',
        description: 'Automated extraction of structured tabular data, dates, line items, and terms from PDFs, contracts, invoices, and inspection forms.',
        deliverables: ['Multi-format document parsing (PDF, TIFF, DOCX)', 'Structured JSON output validation', 'Automated anomaly and discrepancy flagging']
      },
      {
        title: 'Knowledge Search & Conversational Interfaces',
        description: 'Semantic vector search engines that understand query intent, industry jargon, and conceptual relationships rather than exact keywords.',
        deliverables: ['Vector database architecture (pgvector / Pinecone)', 'Hybrid keyword + semantic search ranking', 'Intuitive search query interfaces']
      },
      {
        title: 'Content & Research Workflows',
        description: 'Structured workflows that draft technical briefs, generate catalog descriptions, or summarize regulatory updates based on defined templates.',
        deliverables: ['Template-driven content generators', 'Multi-document comparative synthesis', 'Automated tone and style validation']
      },
      {
        title: 'AI-Assisted Analysis',
        description: 'Analytical utilities that scan datasets or text corpora to identify sentiment trends, customer churn risk indicators, or quality anomalies.',
        deliverables: ['Customer feedback categorization', 'Text clustering & trend identification', 'Operational risk scoring models']
      },
      {
        title: 'Repetitive Task Automation',
        description: 'Background AI microservices that parse inbound email attachments, categorize incoming support requests, or validate incoming vendor files.',
        deliverables: ['Email-to-database parsing pipelines', 'Automated classification engines', 'Exception queuing for human review']
      },
      {
        title: 'AI Features Integrated into Existing Software',
        description: 'Embedding purpose-built AI endpoints, auto-complete widgets, and smart categorization directly into your legacy software via clean APIs.',
        deliverables: ['Lightweight drop-in UI components', 'Secure microservice API endpoints', 'Latency-optimized caching layers']
      }
    ],
    exampleUseCases: [
      {
        title: 'Automated Invoice & Packing Slip Parser',
        scenario: 'A regional logistics supplier processed 500+ vendor invoices weekly, manually keying line items into their accounting system.',
        solution: 'Built a specialized document extraction tool that extracts line items, validates tax calculations, and outputs clean ledger entries.'
      },
      {
        title: 'Semantic Parts Catalog Search',
        scenario: 'A machinery parts distributor’s customers struggled to find replacement components using legacy keyword search.',
        solution: 'Implemented a semantic search engine matching colloquial customer descriptions and symptom descriptions with exact component SKUs.'
      }
    ],
    businessBenefits: [
      { metric: '90% Processing Speedup', benefit: 'Convert hours of manual transcription and reading into near-instant automated extractions.' },
      { metric: 'High Accuracy', benefit: 'Deterministic post-validation rules ensure extracted values reconcile mathematically.' },
      { metric: 'Seamless Integration', benefit: 'Embeds cleanly into your existing workflows without forcing your team to learn separate tools.' }
    ],
    developmentApproach: [
      { step: '01', title: 'Data & Output Definition', description: 'Analyzing your sample documents, schemas, and required output data formats.' },
      { step: '02', title: 'Model & Pipeline Selection', description: 'Selecting the optimal vision, language, and embedding architectures for speed and cost.' },
      { step: '03', title: 'Validation Logic Engineering', description: 'Building deterministic business logic checks that catch errors before downstream storage.' },
      { step: '04', title: 'Integration & Deployment', description: 'Packaging into clean APIs or web interfaces with automated processing queues.' }
    ],
    faqs: [
      {
        question: 'What types of documents can your custom AI tools process?',
        answer: 'We build extractors for PDFs, scanned images, Word documents, spreadsheets, invoices, receipts, legal contracts, and industry-specific forms.'
      },
      {
        question: 'Can you integrate these AI features into our current web software or CRM?',
        answer: 'Yes. We expose clean REST or GraphQL endpoints and provide drop-in frontend components that connect directly with your existing software stack.'
      },
      {
        question: 'How do you handle edge cases where document quality is poor?',
        answer: 'We incorporate confidence scoring. When document quality or optical clarity falls below a safe threshold, the record is flagged for human review.'
      }
    ]
  },
  {
    id: 'micro-saas-development',
    slug: 'micro-saas-development',
    title: 'Micro-SaaS Development',
    tagline: 'Focused, revenue-generating software products engineered for targeted niches from MVP to scale.',
    shortDesc: 'Focused software products built to solve specific problems for a defined audience: MVP planning, subscription billing, multi-tenant dashboards, and admin panels.',
    overview: 'NEXOVIRA AI Solution designs and develops focused Micro-SaaS products. We partner with founders and business leaders to turn targeted problem-solving concepts into production-grade web applications equipped with subscription billing, user account management, tenant isolation, and administrative controls.',
    iconName: 'Sparkles',
    businessProblems: [
      'Founders losing months building boilerplate features instead of validating their core product value',
      'Over-engineered architectures resulting in excessive cloud hosting costs before product-market fit',
      'Complex billing and subscription management integrations causing security and payment failure risks',
      'Lack of administrative controls to manage users, monitor usage metrics, and handle account upgrades',
      'Unreliable codebases that fail when initial customer acquisition spikes'
    ],
    keyCapabilities: [
      {
        title: 'Product Planning & MVP Development',
        description: 'Distilling complex product visions into high-impact, launch-ready Minimum Viable Products (MVPs) built for rapid market validation.',
        deliverables: ['Scoping & feature prioritization roadmaps', 'Fast-cycle MVP engineering', 'Production-ready cloud architecture']
      },
      {
        title: 'User Accounts & Dashboards',
        description: 'Frictionless authentication, user profile management, workspace organization, and intuitive customer dashboards.',
        deliverables: ['Social & email passwordless authentication', 'Multi-tenant team workspaces', 'Custom user configuration settings']
      },
      {
        title: 'Subscription & Billing Integrations',
        description: 'Complete monetization infrastructure including Stripe integration, recurring tiers, usage-based metering, and customer billing portals.',
        deliverables: ['Stripe Checkout & Customer Portal integration', 'Tiered subscription access enforcement', 'Automated invoice generation and tax handling']
      },
      {
        title: 'Admin Panels & Back-Office Controls',
        description: 'Powerful internal back-office portals for monitoring user growth, managing customer accounts, and debugging system states.',
        deliverables: ['User impersonation & account support tools', 'Subscription & MRR monitoring dashboards', 'System-wide feature flag controls']
      },
      {
        title: 'Integrations & Automation',
        description: 'Connecting your SaaS product with third-party webhooks, marketing analytics, customer support widgets, and transactional email systems.',
        deliverables: ['Transactional email setups (Resend / Postmark)', 'Outbound customer webhook engines', 'Product analytics tracking setup']
      },
      {
        title: 'Product Maintenance & Improvements',
        description: 'Ongoing technical stewardship covering feature iterations, database indexing, uptime monitoring, and infrastructure scaling.',
        deliverables: ['Continuous performance profiling', 'Iterative user-feedback feature releases', 'Zero-downtime database migrations']
      }
    ],
    exampleUseCases: [
      {
        title: 'Niche Real Estate Compliance SaaS',
        scenario: 'A real estate specialist identified that property managers needed an automated tool to track municipal safety certifications.',
        solution: 'Engineered a targeted Micro-SaaS allowing managers to upload properties, receive automatic expiration warnings, and generate compliance packets.'
      },
      {
        title: 'B2B Creative Asset Converter',
        scenario: 'A digital agency founder spotted a recurring need for e-commerce brands to format product photography for multiple marketplaces.',
        solution: 'Built an MVP Micro-SaaS with Stripe subscription tiers, batch image processing, and instant multi-channel exports.'
      }
    ],
    businessBenefits: [
      { metric: 'Rapid Time-to-Market', benefit: 'Launch a tested, production-grade product in weeks rather than spending half a year on boilerplate.' },
      { metric: 'Monetization Ready', benefit: 'Built-in payment processing, recurring billing, and plan upgrades from day one.' },
      { metric: 'Scalable Architecture', benefit: 'Modern cloud-native foundation ready to handle growing customer tenants without rewrites.' }
    ],
    developmentApproach: [
      { step: '01', title: 'Scope & User Flow', description: 'Pinpointing the single core problem your product solves and eliminating non-essential bloat.' },
      { step: '02', title: 'Boilerplate & Core Build', description: 'Implementing auth, multi-tenant databases, billing, and the proprietary business logic.' },
      { step: '03', title: 'Billing & Security Testing', description: 'Rigorous testing of webhook lifecycles, payment failures, tier restrictions, and permissions.' },
      { step: '04', title: 'Launch & Metrics Setup', description: 'Deploying to high-availability infrastructure with monitoring and transactional email active.' }
    ],
    faqs: [
      {
        question: 'How quickly can an MVP Micro-SaaS be designed and launched?',
        answer: 'Depending on the functional complexity of your core proprietary feature, most focused MVPs are engineered, tested, and live within 4 to 8 weeks.'
      },
      {
        question: 'Which billing systems do you support?',
        answer: 'We primarily implement Stripe, utilizing Stripe Checkout, Billing, and the Customer Portal for PCI-compliant subscription management, but can adapt to Lemon Squeezy or Paddle.'
      },
      {
        question: 'Do we retain full ownership of the SaaS platform and user database?',
        answer: 'Yes. You own 100% of the code, intellectual property, infrastructure accounts, and customer database without ongoing royalty claims.'
      }
    ]
  }
];

export const getServiceBySlug = (slug: string): ServiceItem | undefined => {
  return servicesData.find(s => s.slug === slug || s.id === slug);
};
