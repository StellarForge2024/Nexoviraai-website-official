/**
 * ============================================================================
 * NEXOVIRA AI Solution - Office Location Configuration
 * ============================================================================
 */

export interface OfficeLocation {
  id: string;
  tag: string;
  city: string;
  state: string;
  badge: string;
  officeName: string;
  address: string;
  landmarkArea: string;
  cityStateZip: string;
  country: string;
  embedUrl: string;
  directionsUrl: string;
  visitingHours: string;
  note: string;
}

export interface LocationConfig {
  isConfigured: boolean;
  officeName: string;
  address: string;
  cityStateZip: string;
  country: string;
  embedUrl: string;
  directionsUrl: string;
  visitingHours: string;
  phone?: string;
  consultationNote: string;
  offices: OfficeLocation[];
}

export const locationConfig: LocationConfig = {
  isConfigured: true,
  officeName: 'NEXOVIRA AI Solution Headquarters',
  address: 'No. 15, 100 Feet Ring Road, BTM 2nd Stage, Kuvempu Nagar',
  cityStateZip: 'Bengaluru, Karnataka 560076',
  country: 'India',
  embedUrl: 'https://maps.google.com/maps?q=No.+15,+100+Feet+Ring+Road,+BTM+2nd+Stage,+Kuvempu+Nagar,+Bengaluru,+Karnataka+560076&t=&z=15&ie=UTF8&iwloc=&output=embed',
  directionsUrl: 'https://www.google.com/maps/search/?api=1&query=No.+15,+100+Feet+Ring+Road,+BTM+2nd+Stage,+Kuvempu+Nagar,+Bengaluru,+Karnataka+560076',
  visitingHours: 'Monday – Friday: 9:00 AM – 6:30 PM IST',
  consultationNote: 'In-person consultations and architecture discovery sessions are available by appointment at our Bengaluru & Bhopal offices. Virtual consultations are hosted daily.',
  
  offices: [
    {
      id: 'bengaluru',
      tag: 'Headquarters',
      city: 'Bengaluru',
      state: 'Karnataka',
      badge: 'Headquarters & Tech Center',
      officeName: 'NEXOVIRA AI Solution Headquarters',
      address: 'No. 15, 100 Feet Ring Road, BTM 2nd Stage, Kuvempu Nagar',
      landmarkArea: 'BTM 2nd Stage · Ring Road',
      cityStateZip: 'Bengaluru, Karnataka 560076',
      country: 'India',
      embedUrl: 'https://maps.google.com/maps?q=No.+15,+100+Feet+Ring+Road,+BTM+2nd+Stage,+Kuvempu+Nagar,+Bengaluru,+Karnataka+560076&t=&z=15&ie=UTF8&iwloc=&output=embed',
      directionsUrl: 'https://www.google.com/maps/search/?api=1&query=No.+15,+100+Feet+Ring+Road,+BTM+2nd+Stage,+Kuvempu+Nagar,+Bengaluru,+Karnataka+560076',
      visitingHours: 'Mon – Fri: 9:00 AM – 6:30 PM IST',
      note: 'Primary architecture, client discovery, and strategic enterprise delivery hub.'
    },
    {
      id: 'bhopal',
      tag: 'Development Hub',
      city: 'Bhopal',
      state: 'Madhya Pradesh',
      badge: 'Development & Operations Office',
      officeName: 'NEXOVIRA AI Solution - Bhopal Office',
      address: 'MP Nagar, Amar Vihar, Lalita Nagar, Kolar Rd, Gehun Kheda',
      landmarkArea: 'Kolar Road · Lalita Nagar',
      cityStateZip: 'Bhopal, Madhya Pradesh 462042',
      country: 'India',
      embedUrl: 'https://maps.google.com/maps?q=MP+Nagar,+Amar+Vihar,+Lalita+Nagar,+Kolar+Rd,+Gehun+Kheda,+Bhopal,+Madhya+Pradesh+462042&t=&z=14&ie=UTF8&iwloc=&output=embed',
      directionsUrl: 'https://www.google.com/maps/search/?api=1&query=MP+Nagar,+Amar+Vihar,+Lalita+Nagar,+Kolar+Rd,+Gehun+Kheda,+Bhopal,+Madhya+Pradesh+462042',
      visitingHours: 'Mon – Fri: 9:30 AM – 6:00 PM IST',
      note: 'Regional operations, software engineering, and partner discovery center.'
    }
  ]
};
