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
  address: 'Near Samrithi Memorial Academy, Chhittupur, Bhagwanpur',
  cityStateZip: 'Varanasi, Uttar Pradesh 221005',
  country: 'India',
  embedUrl: 'https://maps.google.com/maps?q=near+Samrithi+memorial+academy,+Chhittupur,+Bhagwanpur,+Varanasi,+Uttar+Pradesh+221005,+India&t=&z=15&ie=UTF8&iwloc=&output=embed',
  directionsUrl: 'https://www.google.com/maps/search/?api=1&query=near+Samrithi+memorial+academy,+Chhittupur,+Bhagwanpur,+Varanasi,+Uttar+Pradesh+221005,+India',
  visitingHours: 'Monday – Friday: 9:00 AM – 6:30 PM IST',
  consultationNote: 'In-person consultations and architecture discovery sessions are available by appointment at our Varanasi & Bengaluru offices. Virtual consultations are hosted daily.',
  
  offices: [
    {
      id: 'varanasi',
      tag: 'Headquarters',
      city: 'Varanasi',
      state: 'Uttar Pradesh',
      badge: 'Headquarters & Corporate Hub',
      officeName: 'NEXOVIRA AI Solution Headquarters',
      address: 'Near Samrithi Memorial Academy, Chhittupur, Bhagwanpur',
      landmarkArea: 'Chhittupur · Bhagwanpur',
      cityStateZip: 'Varanasi, Uttar Pradesh 221005',
      country: 'India',
      embedUrl: 'https://maps.google.com/maps?q=near+Samrithi+memorial+academy,+Chhittupur,+Bhagwanpur,+Varanasi,+Uttar+Pradesh+221005,+India&t=&z=15&ie=UTF8&iwloc=&output=embed',
      directionsUrl: 'https://www.google.com/maps/search/?api=1&query=near+Samrithi+memorial+academy,+Chhittupur,+Bhagwanpur,+Varanasi,+Uttar+Pradesh+221005,+India',
      visitingHours: 'Mon – Fri: 9:00 AM – 6:30 PM IST',
      note: 'Primary corporate headquarters, executive briefings, and strategic enterprise delivery hub.'
    },
    {
      id: 'bengaluru',
      tag: 'Development Hub',
      city: 'Bengaluru',
      state: 'Karnataka',
      badge: 'Tech & Engineering Center',
      officeName: 'NEXOVIRA AI Solution - Bengaluru Office',
      address: 'No. 15, 100 Feet Ring Road, BTM 2nd Stage, Kuvempu Nagar',
      landmarkArea: 'BTM 2nd Stage · Ring Road',
      cityStateZip: 'Bengaluru, Karnataka 560076',
      country: 'India',
      embedUrl: 'https://maps.google.com/maps?q=No.+15,+100+Feet+Ring+Road,+BTM+2nd+Stage,+Kuvempu+Nagar,+Bengaluru,+Karnataka+560076&t=&z=15&ie=UTF8&iwloc=&output=embed',
      directionsUrl: 'https://www.google.com/maps/search/?api=1&query=No.+15,+100+Feet+Ring+Road,+BTM+2nd+Stage,+Kuvempu+Nagar,+Bengaluru,+Karnataka+560076',
      visitingHours: 'Mon – Fri: 9:00 AM – 6:30 PM IST',
      note: 'Core software architecture, AI engineering, and product development center.'
    }
  ]
};
