import { TeamMember } from '../types';

/**
 * Update names, bios, and optional portrait paths here.
 * Place photos in /public/team/ and set image to '/team/your-file.jpg'.
 */
export const teamMembers: TeamMember[] = [
  {
    id: 'krishna-upadhyay',
    name: 'Krishna Upadhyay',
    role: 'Founder & Project Manager',
    focus: 'Strategic leadership, project governance, and client delivery',
    bio: 'Krishna founded NEXOVIRA AI Solution to bridge high-impact business strategy with practical, production-grade technology. He spearheads project management, system architecture, and overall client success — ensuring every solution delivers measurable ROI and seamless execution.',
    quote: 'Software should adapt to the business — not the other way around.',
    expertise: ['Project Management', 'Solution Architecture', 'AI Strategy', 'Client Partnership'],
    initials: 'KU',
    accent: 'blue',
    image: '/team/krishna-upadhyay.jpg',
  },
  {
    id: 'abhishek-soni',
    name: 'Abhishek Soni',
    role: 'Tech Lead',
    focus: 'Full-stack architecture, software engineering, and AI integration',
    bio: 'Abhishek leads technical architecture and engineering delivery at NEXOVIRA. With deep expertise across modern web ecosystems, scalable backend architectures, and intelligent workflows, he ensures codebases are resilient, performant, and built to scale.',
    quote: 'Great technology feels invisible — it simply solves the problem with precision.',
    expertise: ['Technical Leadership', 'Full-Stack Architecture', 'System Design', 'Performance & Scale'],
    initials: 'AS',
    accent: 'cyan',
    image: '/team/abhishek-soni.jpg',
  },
  {
    id: 'saurabh-durge',
    name: 'Saurabh Durge',
    role: 'Sales Executive',
    focus: 'Client acquisition, business growth, and enterprise solutions',
    bio: 'Saurabh drives business expansion and strategic client partnerships at NEXOVIRA. He collaborates closely with prospective clients to understand their operational bottlenecks and aligns NEXOVIRA’s tailored AI and software capabilities with their growth objectives.',
    quote: 'True sales is about solving real client challenges and building enduring trust.',
    expertise: ['Client Acquisition', 'Solution Consultation', 'Enterprise Partnerships', 'Market Strategy'],
    initials: 'SD',
    accent: 'teal',
    image: '/team/saurabh-durge.jpg',
  },
  {
    id: 'abhishek-upadhyay',
    name: 'Abhishek Upadhyay',
    role: 'Digital Marketing Executive',
    focus: 'Brand growth, digital campaigns, and market positioning',
    bio: 'Abhishek drives NEXOVIRA’s brand visibility, organic outreach, and digital marketing strategy. He leverages performance data, search optimization, and targeted messaging to connect enterprises and innovators with NEXOVIRA’s technological solutions.',
    quote: 'Effective marketing turns authentic technical capability into impactful market leadership.',
    expertise: ['Digital Strategy', 'Brand Positioning', 'Growth Marketing', 'Campaign Analytics'],
    initials: 'AU',
    accent: 'indigo',
    image: '/team/abhishek-upadhyay.jpg',
  },
];
