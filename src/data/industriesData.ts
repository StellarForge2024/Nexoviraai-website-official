import { IndustryItem } from '../types';

export const industriesData: IndustryItem[] = [
  {
    id: 'real-estate',
    name: 'Real Estate & Property Management',
    tagline: 'Custom portals, listing synchronization, tenant management, and automated document processing.',
    overview: 'We develop software solutions for real estate agencies, asset managers, and property operators. From multi-portal MLS integrations to automated lease abstraction and tenant communication portals, our solutions simplify property workflows and accelerate transaction closings.',
    iconName: 'Building2',
    challenges: [
      'Disjointed property listings across multiple portals and local databases',
      'Manual parsing of lease documents, inspection reports, and compliance forms',
      'Slow tenant maintenance ticket routing and communication delays',
      'Scattered financial records across distinct rental portfolios'
    ],
    customSolutions: [
      {
        title: 'Centralized Property & Listing Portals',
        description: 'Single-source-of-truth platforms that synchronize property details, photos, and availability status across public portals and broker dashboards.'
      },
      {
        title: 'Automated Lease & Compliance Extraction',
        description: 'AI-assisted document utilities that extract expiration dates, rent escalation terms, and maintenance obligations from complex lease agreements.'
      },
      {
        title: 'Tenant & Owner Portals',
        description: 'Secure self-service environments for rent payments, maintenance request tracking, financial statements, and lease renewals.'
      }
    ],
    deliverableExamples: [
      'Multi-unit property management dashboards',
      'Interactive visual floorplan and vacancy maps',
      'Automated tenant maintenance triage agents',
      'Portfolio financial performance reporting engines'
    ]
  },
  {
    id: 'education',
    name: 'Education & Training',
    tagline: 'Learning management platforms, student portals, administrative automation, and knowledge assistants.',
    overview: 'We build digital platforms for educational institutions, corporate training providers, and specialized academies. Our systems streamline student enrollment, course material distribution, automated assessments, and administrative records.',
    iconName: 'GraduationCap',
    challenges: [
      'Clunky legacy LMS tools that frustrate students and create high dropout rates',
      'Heavy administrative overhead managing course registrations, grading, and certifications',
      'Instructors spending excessive hours answering repetitive syllabus queries',
      'Lack of granular visibility into student progress and engagement drop-offs'
    ],
    customSolutions: [
      {
        title: 'Custom Learning & Training Portals',
        description: 'Tailored course delivery platforms with interactive modules, progress tracking, multimedia streaming, and automated certification issuance.'
      },
      {
        title: 'Syllabus & Student Support AI Assistants',
        description: 'Grounded AI assistants that answer student inquiries about course policies, assignments, and prerequisites 24/7 with zero hallucinations.'
      },
      {
        title: 'Academic Administration & Enrollment Systems',
        description: 'Custom intake portals, automated tuition billing, instructor assignment workflows, and secure transcript repositories.'
      }
    ],
    deliverableExamples: [
      'Interactive student onboarding portals',
      'Automated grading and assessment rubrics',
      'Corporate compliance training tracking systems',
      'Executive education progress dashboards'
    ]
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce & Retail',
    tagline: 'B2B/B2C commerce applications, automated inventory sync, custom checkout flows, and customer service agents.',
    overview: 'We engineer high-performance commerce systems for retail brands, wholesale distributors, and multi-channel merchants. We specialize in custom web applications, multi-warehouse inventory synchronization, custom pricing logic, and automated support agents.',
    iconName: 'ShoppingCart',
    challenges: [
      'High cart abandonment caused by rigid, slow, or multi-step checkout processes',
      'Inventory count discrepancies between physical stores and online storefronts',
      'Inability to provide tiered B2B wholesale pricing and custom payment terms',
      'Support teams swamped with "Where is my order?" (WISMO) inquiries'
    ],
    customSolutions: [
      {
        title: 'B2B Wholesale & Distributor Portals',
        description: 'Tailored commerce portals supporting tiered wholesale pricing, purchase order uploads, minimum order quantities, and net-30 terms.'
      },
      {
        title: 'Real-Time Multi-Channel Inventory Sync',
        description: 'Resilient middleware synchronizing SKU counts across Shopify, marketplaces, POS terminals, and physical warehouse shelves.'
      },
      {
        title: 'Automated Order & Shipping Inquiries Agent',
        description: 'AI agents connected to shipping APIs and order databases that provide immediate tracking updates and handle routine return inquiries.'
      }
    ],
    deliverableExamples: [
      'High-speed headless e-commerce storefronts',
      'Custom B2B contract pricing engines',
      'Returns & exchange management portals',
      'Catalog data enrichment & formatting pipelines'
    ]
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    tagline: 'Client engagement portals, project tracking, automated billing, and internal knowledge search.',
    overview: 'We partner with law firms, consultancies, accounting practices, and technical advisory firms to eliminate administrative friction. Our solutions unify client intake, milestone tracking, timesheets, document sharing, and secure billing.',
    iconName: 'Briefcase',
    challenges: [
      'Scattered client communications across individual consultant email threads',
      'Manual generation of monthly client statements, invoices, and retainer reports',
      'Difficult knowledge discovery across decades of past deliverables and briefs',
      'High administrative time spent scheduling meetings and gathering intake requirements'
    ],
    customSolutions: [
      {
        title: 'Client Collaboration & Delivery Portals',
        description: 'Branded client hubs where engagements, deliverables, revision histories, and invoices are organized in a single secure environment.'
      },
      {
        title: 'Internal Precedent & Knowledge Search',
        description: 'Private semantic search engines that allow staff to search past legal briefs, proposals, and project templates in seconds.'
      },
      {
        title: 'Automated Client Intake & Scoping Systems',
        description: 'Dynamic onboarding forms that collect structured project criteria and automatically generate scoping drafts for review.'
      }
    ],
    deliverableExamples: [
      'White-label client engagement workspaces',
      'Time-tracking & billing reconciliation tools',
      'Proposal and contract assembly engines',
      'Internal knowledge base retrieval agents'
    ]
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industrial',
    tagline: 'Production scheduling, shop floor tracking, supplier coordination, and equipment maintenance logs.',
    overview: 'We develop specialized operational software and custom ERP modules for manufacturers and industrial fabricators. We build systems that bridge the gap between back-office orders and shop-floor execution.',
    iconName: 'Factory',
    challenges: [
      'Shop-floor tracking reliant on physical paper traveler sheets and whiteboards',
      'Material shortages discovered only when machine jobs are already queued',
      'Difficulty tracing quality inspection records back to specific raw material lots',
      'Complex custom orders requiring manual engineer-to-order calculations'
    ],
    customSolutions: [
      {
        title: 'Shop-Floor Job Dispatch & Progress Portals',
        description: 'Touch-friendly terminal interfaces for machine operators to log job starts, completion counts, scrap reasons, and run times.'
      },
      {
        title: 'Bill of Materials (BOM) & Inventory Management',
        description: 'Dynamic BOM tracking that checks raw material reserves before jobs enter the schedule, generating purchase orders for low-stock items.'
      },
      {
        title: 'Quality Control & Audit Trail Systems',
        description: 'Digital inspection forms capturing photos, measurements, and lot numbers with immutable audit logs for regulatory compliance.'
      }
    ],
    deliverableExamples: [
      'Machine uptime & production line dashboards',
      'Digital traveler sheets & operator tablets',
      'Supplier PO and receipt tracking platforms',
      'Predictive maintenance logbooks & alert systems'
    ]
  }
];
