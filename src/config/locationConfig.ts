/**
 * ============================================================================
 * NEXOVIRA AI Solution - Office Location Configuration
 * ============================================================================
 * 
 * Update your office address, Google Maps embed URL, and Google Maps
 * directions link here. Once updated, the changes will immediately reflect
 * across the Contact page and "Our Location" section.
 * 
 * Instructions:
 * 1. Find your location on Google Maps (maps.google.com).
 * 2. Click "Share" -> "Embed a map" -> copy the URL from inside src="...".
 * 3. Paste that URL into `embedUrl` below.
 * 4. Copy the direct link from "Share" -> "Copy link" and paste into `directionsUrl`.
 * 5. Update `address` with your formatted street address.
 */

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
}

export const locationConfig: LocationConfig = {
  // Configured with verified Bengaluru office details
  isConfigured: true,

  officeName: 'NEXOVIRA AI Solution Headquarters',
  
  // Physical office address
  address: 'No. 15, 100 Feet Ring Road, BTM 2nd Stage, Kuvempu Nagar',
  cityStateZip: 'Bengaluru, Karnataka 560076',
  country: 'India',

  // Google Maps embed URL for iframe
  embedUrl: 'https://maps.google.com/maps?q=No.+15,+100+Feet+Ring+Road,+BTM+2nd+Stage,+Kuvempu+Nagar,+Bengaluru,+Karnataka+560076&t=&z=16&ie=UTF8&iwloc=&output=embed',

  // Google Maps direct location link for navigation
  directionsUrl: 'https://www.google.com/maps/search/?api=1&query=No.+15,+100+Feet+Ring+Road,+BTM+2nd+Stage,+Kuvempu+Nagar,+Bengaluru,+Karnataka+560076',

  visitingHours: 'Monday – Friday: 9:00 AM – 6:30 PM IST',
  consultationNote: 'In-person consultations and architecture discovery sessions are available by appointment at our Bengaluru office. For initial discussions, we also host direct virtual consultations.'
};
