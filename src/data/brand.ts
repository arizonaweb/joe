// Pro Az Web — brand configuration for ProAzWeb.com
export const SITE = {
  name: 'Pro Az Web',
  url: 'https://ProAzWeb.com',
  language: 'en',
};

export const BRAND = {
  name: 'PRO AZ WEB',
  artist: 'Pro Az Web',
  tagline: 'Premium web design for businesses ready to look established and convert more',
  positioning: 'Custom website design and development for founders, service businesses, and premium companies.',
  serviceArea: 'Phoenix · Arizona · Worldwide',
  studioAddress: 'Pro Az Web · Phoenix, AZ',
  instagramHandle: '@ProAzWeb',
  instagramUrl: 'https://www.instagram.com/ProAzWeb',
  whatsappUrl: 'https://wa.me/15551234567',
  facebookUrl: 'https://www.facebook.com/ProAzWeb',
  tiktokUrl: 'https://www.tiktok.com',
  phoneDisplay: '+1 (555) 123-4567',
  phoneE164: '+15551234567',
};

export const TEL_LINK = `tel:${BRAND.phoneE164}`;

export const SOCIAL_LINKS = [
  { label: 'Instagram', href: BRAND.instagramUrl, icon: 'instagram' },
  { label: 'WhatsApp', href: BRAND.whatsappUrl, icon: 'whatsapp' },
  { label: 'Facebook', href: BRAND.facebookUrl, icon: 'facebook' },
  { label: 'TikTok', href: BRAND.tiktokUrl, icon: 'tiktok' },
] as const;

export const buildSmsLink = (body: string) =>
  `sms:${BRAND.phoneE164}?body=${encodeURIComponent(body)}`;

export const IMAGES = {
  heroTriptych:
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80',
  poster:
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
  monogram:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=512&q=80',
  leatherBanner:
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
  artistCutout:
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
  headshot:
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80',
  lifestyle:
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
  tee: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  og: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80',
  fallbackSilk:
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
};

export const ABOUT = {
  quote: 'We create polished websites that help brands look credible and convert better.',
  accolade: 'Professional websites built for brands that expect quality.',
  story: [
    { text: 'Pro Az Web believes a website should feel as premium as the business behind it.' },
    { text: 'We design and build digital experiences that help founders and premium brands make a stronger first impression.' },
    { text: 'Our process combines strategy, modern design, and clean performance-first development to create a polished online presence.' },
    { text: 'Every site is tailored to the business, its audience, and the goals it wants to achieve.' },
  ] as { text: string; pull?: boolean }[],
};

export type ServiceId = 'strategy' | 'design' | 'build' | 'optimize' | 'support';

export interface Service {
  id: ServiceId;
  name: string;
  price: number;
  priceLabel: string;
  description: string;
  onSite: boolean;
  perPerson?: boolean;
  minPeople?: number;
}

export const SERVICES: Service[] = [
  {
    id: 'strategy',
    name: 'Brand Strategy',
    price: 1800,
    priceLabel: 'From $1.8k',
    description: 'Positioning, messaging, and conversion strategy for premium brands.',
    onSite: false,
  },
  {
    id: 'design',
    name: 'Luxury Design',
    price: 4200,
    priceLabel: 'From $4.2k',
    description: 'High-fidelity design and visual systems that feel premium.',
    onSite: false,
  },
  {
    id: 'build',
    name: 'Website Build',
    price: 6200,
    priceLabel: 'From $6.2k',
    description: 'Modern frontend development, CMS integration, and launch support.',
    onSite: false,
  },
  {
    id: 'optimize',
    name: 'Conversion Lift',
    price: 2400,
    priceLabel: 'From $2.4k',
    description: 'UX and copy improvements focused on increasing conversion quality.',
    onSite: false,
  },
  {
    id: 'support',
    name: 'Retainer Support',
    price: 1200,
    priceLabel: 'From $1.2k/mo',
    description: 'Ongoing design and optimization support.',
    onSite: false,
  },
];

export const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'contact', label: 'Contact' },
];

export const PRIMARY_EMAIL = 'hello@proazweb.com';
export const REQUEST_SUBJECT = 'Project request';
export const CTA_MESSAGE = `Hello Pro Az Web, I’d like to discuss a premium website project.`;

export const buildMailtoLink = (subject: string, body: string) =>
  `mailto:${PRIMARY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const SITE_COPY = {
  hero: 'We design digital experiences that feel as premium as the business behind them.',
  cta: 'Book a discovery call',
  secondary: 'View services',
};

export const CONTACT_LINKS = [
  { label: 'Email', href: buildMailtoLink(REQUEST_SUBJECT, CTA_MESSAGE) },
  { label: 'Call', href: TEL_LINK },
  { label: 'Text', href: buildSmsLink(CTA_MESSAGE) },
];

export const TRAVEL = {
  name: 'Global delivery',
  label: 'Remote-first',
  min: 0,
  max: 0,
};

export type TravelId = 'within' | 'outside' | 'unsure';

export const TRAVEL_OPTIONS: { id: TravelId; label: string }[] = [
  { id: 'within', label: 'Remote-first project' },
  { id: 'outside', label: 'Hybrid / on-site support' },
  { id: 'unsure', label: 'Not sure yet' },
];

export interface AddOn {
  id: string;
  name: string;
  price: number;
  description?: string;
  group: 'service' | 'package';
}

export const TREATMENTS: AddOn[] = [
  {
    id: 'brand-messaging',
    name: 'Brand messaging workshop',
    price: 950,
    description: 'Positioning and messaging clarity for premium services.',
    group: 'service',
  },
  {
    id: 'copywriting',
    name: 'Conversion copywriting',
    price: 1200,
    description: 'Copy that communicates value and converts the right clients.',
    group: 'service',
  },
  {
    id: 'ux-audit',
    name: 'UX & conversion audit',
    price: 1500,
    description: 'Identify friction and opportunities to improve conversion.',
    group: 'service',
  },
  {
    id: 'content-system',
    name: 'Content system setup',
    price: 1100,
    description: 'Scalable structure for content and brand storytelling.',
    group: 'service',
  },
];

export const MENU_OPTIONS: AddOn[] = [
  { id: 'prototype', name: 'Interactive prototype', price: 1200, group: 'package' },
  { id: 'seo-basics', name: 'SEO foundation', price: 1300, group: 'package' },
  { id: 'launch-support', name: 'Launch support', price: 900, group: 'package' },
];

export const ALL_ADDONS: AddOn[] = [...TREATMENTS, ...MENU_OPTIONS];

export const getService = (id: ServiceId) => SERVICES.find((s) => s.id === id)!;

export interface EstimateInput {
  serviceId: ServiceId;
  guests: number;
  addOnIds: string[];
  travel: TravelId;
}

export interface Estimate {
  base: number;
  addOnsPerPerson: number;
  people: number;
  subtotal: number;
  travelMin: number;
  travelMax: number;
  min: number;
  max: number;
  label: string;
}

export const formatRange = (min: number, max: number) =>
  min === max ? `$${min}` : `$${min}–${max}`;

export function calculateEstimate({ serviceId, guests, addOnIds, travel }: EstimateInput): Estimate {
  const service = getService(serviceId);
  const people = service.perPerson ? Math.max(service.minPeople ?? 1, guests) : 1;
  const addOnsPerPerson = ALL_ADDONS.filter((a) => addOnIds.includes(a.id)).reduce(
    (sum, a) => sum + a.price,
    0,
  );
  const subtotal = (service.price + addOnsPerPerson) * people;
  const applyTravel = service.onSite && travel === 'outside';
  const travelMin = applyTravel ? TRAVEL.min : 0;
  const travelMax = applyTravel ? TRAVEL.max : 0;
  const min = subtotal + travelMin;
  const max = subtotal + travelMax;
  return {
    base: service.price,
    addOnsPerPerson,
    people,
    subtotal,
    travelMin,
    travelMax,
    min,
    max,
    label: formatRange(min, max),
  };
}

export const ESTIMATE_NOTE = 'Estimate only. The final scope and investment are confirmed in the discovery call.';

export const DEFAULT_BRAND_THEME = {
  accent: '#7f6a52',
  brand: '#1d1a18',
  surface: '#f8f4ef',
};

export const SITE_TAGLINE = 'Premium websites for founder-led and premium businesses.';
export const finalNote = 'Designed for businesses ready to look established and convert better.';
export const QUOTE = 'The best digital experiences feel calm, elevated, and unmistakably clear.';
export const MISSION = 'Turn business value into a polished digital experience that earns trust.';
export const CONTACT_REASON = 'Tell us what you need and we’ll follow up with the next steps.';
export const submitTitle = 'Send project inquiry';

export default SITE;

