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
  // Set to true once you paste your real Google Maps URLs and address
  // When false, the map section displays a helpful unconfigured state with setup guidance
  isConfigured: false,

  officeName: 'NEXOVIRA AI Solution Headquarters',
  
  // Replace with your physical office address
  address: '[ENTER YOUR OFFICE ADDRESS]',
  cityStateZip: 'Innovation District',
  country: 'Global Operations',

  // Paste your Google Maps <iframe> src URL here
  // Example: "https://www.google.com/maps/embed?pb=!1m18!1m12!..."
  embedUrl: '',

  // Paste your Google Maps direct location link for the "Get Directions" button
  // Example: "https://maps.app.goo.gl/..." or "https://www.google.com/maps/search/?api=1&query=..."
  directionsUrl: '',

  visitingHours: 'Monday – Friday: 9:00 AM – 6:00 PM',
  consultationNote: 'In-person consultations are available by appointment. For initial architectural discussions, we recommend booking a virtual consultation.'
};
