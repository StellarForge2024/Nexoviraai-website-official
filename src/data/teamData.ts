import { TeamMember } from '../types';

/**
 * Update names, bios, and optional portrait paths here.
 * Place photos in /public/team/ and set image to '/team/your-file.jpg'.
 */
export const teamMembers: TeamMember[] = [
  {
    id: 'krishna-upadhyay',
    name: 'Krishna Upadhyay',
    role: 'Founder',
    focus: 'Architecture, discovery, and client outcomes',
    bio: 'Krishna founded NEXOVIRA AI Solution to help businesses replace generic tools with software and AI that fit how they actually operate. He leads discovery, system architecture, and delivery across custom applications, digital platforms, and governed AI systems.',
    quote: 'Software should adapt to the business — not the other way around.',
    expertise: ['Solution Architecture', 'AI Strategy', 'Product Discovery', 'Client Partnership'],
    initials: 'KU',
    accent: 'blue',
  },
  {
    id: 'software-engineering',
    name: 'Aarav Sharma',
    role: 'Software Engineering Lead',
    focus: 'Custom applications, CRM, and ERP systems',
    bio: 'Aarav leads the engineering of maintainable business systems — from operational workflows to CRM and ERP modules. He focuses on clean data models, practical integrations, and codebases that clients fully own after launch.',
    quote: 'Durable software is built around real workflows, not feature checklists.',
    expertise: ['Custom Software', 'CRM / ERP', 'API Integrations', 'System Design'],
    initials: 'AS',
    accent: 'cyan',
  },
  {
    id: 'ai-systems',
    name: 'Isha Kapoor',
    role: 'AI Systems Lead',
    focus: 'Agents, grounded retrieval, and automation',
    bio: 'Isha designs AI agents and internal tools that stay grounded in client data, with clear guardrails and human review. Her work covers support assistants, document intelligence, and workflow automation that teams can trust in production.',
    quote: 'Useful AI is governed, measurable, and tied to a real operating problem.',
    expertise: ['AI Agents', 'RAG / Grounding', 'Process Automation', 'Evaluation'],
    initials: 'IK',
    accent: 'indigo',
  },
  {
    id: 'web-platforms',
    name: 'Rohan Desai',
    role: 'Web & Platform Lead',
    focus: 'Websites, portals, and micro-SaaS products',
    bio: 'Rohan builds fast, conversion-ready websites and multi-tenant platforms. He pairs clear interface design with solid authentication, billing, and content workflows so products can launch cleanly and scale without technical debt.',
    quote: 'A platform earns trust when it feels simple and behaves reliably.',
    expertise: ['Web Development', 'Micro-SaaS', 'UX Architecture', 'Performance'],
    initials: 'RD',
    accent: 'sky',
  },
  {
    id: 'data-intelligence',
    name: 'Meera Nair',
    role: 'Data Intelligence Lead',
    focus: 'Pipelines, reporting, and decision dashboards',
    bio: 'Meera turns fragmented operational data into reliable pipelines and leadership dashboards. She helps teams replace spreadsheet reconciliation with structured reporting they can query, trust, and act on every week.',
    quote: 'Decisions improve when the data path is clean from source to screen.',
    expertise: ['Data Pipelines', 'Business Intelligence', 'Reporting', 'Data Quality'],
    initials: 'MN',
    accent: 'teal',
  },
];
