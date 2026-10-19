// Maison Atelier Studio — universal luxury brand system.
// This file is the single source of truth for the premium studio identity.

export const SITE = {
  name: 'Maison Atelier Studio',
  url: 'https://example.com',
  language: 'en',
};

export const BRAND = {
  name: 'MAISON ATELIER',
  artist: 'STUDIO',
  tagline: 'Luxury web design for ambitious brands',
  positioning: 'Strategy, design, and development for founders and premium businesses.',
  serviceArea: 'Worldwide · Remote-first',
  studioAddress: 'Remote-first studio · worldwide',
  instagramHandle: '@maisonatelierstudio',
  instagramUrl: 'https://www.instagram.com',
  whatsappUrl: 'https://wa.me/15551234567',
  facebookUrl: 'https://www.facebook.com',
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

export interface RetailItem {
  id: string;
  brand: string;
  name: string;
  description: string;
  image: string;
  href: string;
  cta: string;
}

export const RETAIL: RetailItem[] = [
  {
    id: 'atelier-retainer',
    brand: 'Maison Atelier',
    name: 'Creative Retainer',
    description: 'Ongoing design support for premium brands that need clarity, consistency, and momentum.',
    image: IMAGES.tee,
    href: 'https://example.com',
    cta: 'Book a discovery call',
  },
];

export const ABOUT = {
  quote: 'We believe the strongest brands feel effortless, elevated, and unmistakably clear.',
  accolade: 'Designing premium digital experiences for businesses that want to lead with confidence.',
  story: [
    { text: 'The best websites do more than look beautiful — they clarify positioning, build trust, and create momentum.' },
    { text: 'We design and build digital experiences for founders and premium businesses who need more than a template. They need a strategic partner who understands how to convert attention into loyalty.' },
    { text: 'Every project begins with context, clarity, and intent. We look beyond aesthetics to map what your audience needs, what your business is really selling, and how the website should carry that story.' },
    { text: 'The result is elegant, high-converting, and built to feel as premium as the business behind it.' },
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
    description: 'Messaging, audience clarity, and strategic positioning for premium brands.',
    onSite: false,
  },
  {
    id: 'design',
    name: 'Luxury Design',
    price: 4200,
    priceLabel: 'From $4.2k',
    description: 'Editorial, conversion-focused website design with a premium visual system.',
    onSite: false,
  },
  {
    id: 'build',
    name: 'Website Build',
    price: 6200,
    priceLabel: 'From $6.2k',
    description: 'High-end frontend development, integrations, CMS setup, and launch support.',
    onSite: false,
  },
  {
    id: 'optimize',
    name: 'Conversion Lift',
    price: 2400,
    priceLabel: 'From $2.4k',
    description: 'UX refinements, copy direction, and funnel improvements that drive clearer results.',
    onSite: false,
  },
  {
    id: 'support',
    name: 'Retainer Support',
    price: 1200,
    priceLabel: 'From $1.2k/mo',
    description: 'Ongoing optimization, content updates, and strategic design support.',
    onSite: false,
  },
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
    description: 'Positioning and messaging clarity for premium products and services.',
    group: 'service',
  },
  {
    id: 'copywriting',
    name: 'Conversion copywriting',
    price: 1200,
    description: 'Conversion-focused site copy for premium positioning and clarity.',
    group: 'service',
  },
  {
    id: 'ux-audit',
    name: 'UX & conversion audit',
    price: 1500,
    description: 'Identify friction, missed signals, and conversion opportunities.',
    group: 'service',
  },
  {
    id: 'content-system',
    name: 'Content system setup',
    price: 1100,
    description: 'Structured content framework for scalable brand communications.',
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

export const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'contact', label: 'Contact' },
];

export const ESTIMATE_NOTE = 'Estimate only. The final scope and investment are confirmed in the discovery call.';

export const STATUS_LABELS: Record<string, string> = {
  new: 'New',
  contacted: 'Contacted',
  confirmed: 'Confirmed',
  declined: 'Declined',
  completed: 'Completed',
};

export const BRAND_STATS = [
  { label: 'Luxury-first', value: 'Premium' },
  { label: 'Project model', value: 'Strategy + build' },
  { label: 'Turnaround', value: '4–8 weeks' },
];

export const PROCESS_STEPS = [
  'Discovery & positioning',
  'Design direction & UX',
  'Development & refinement',
  'Launch & optimization',
];

export const CASE_STUDIES = [
  {
    name: 'Luxury Hospitality',
    outcome: 'Elevated digital presence with clearer premium positioning and a stronger inquiry flow.',
  },
  {
    name: 'Boutique Consultancy',
    outcome: 'Sharper brand narrative and conversion-focused site that supported premium client acquisition.',
  },
  {
    name: 'Private Service Brand',
    outcome: 'More polished customer journey and a more confident presentation in premium market segments.',
  },
];

export const STUDIO_PROMISE = 'Premium design with strategic clarity for businesses that want to stand out.';

export const PRIMARY_EMAIL = 'hello@maisonatelierstudio.com';

export const REQUEST_SUBJECT = 'New project inquiry';

export const SITE_COPY = {
  hero: 'We design digital experiences that feel as premium as the business behind them.',
  cta: 'Book a discovery call',
  secondary: 'View services',
};

export const CTA_MESSAGE = `Hello Maison Atelier Studio, I’d like to discuss a premium website project.`;

export const buildMailtoLink = (subject: string, body: string) =>
  `mailto:${PRIMARY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const CONTACT_LINKS = [
  { label: 'Email', href: buildMailtoLink(REQUEST_SUBJECT, CTA_MESSAGE) },
  { label: 'Call', href: TEL_LINK },
  { label: 'Text', href: buildSmsLink(CTA_MESSAGE) },
];

export const DEFAULT_BRAND_THEME = {
  accent: '#7f6a52',
  brand: '#1d1a18',
  surface: '#f8f4ef',
};

export const BRAND_THEMES = {
  classic: DEFAULT_BRAND_THEME,
};

export const PREVIOUS_WORK = [
  'Luxury service brands',
  'Boutique consultancies',
  'Hospitality groups',
  'High-end personal brands',
  'Premium product businesses',
];

export const FAQ_ITEMS = [
  {
    question: 'What kinds of clients do you work with?',
    answer: 'Founders, premium service businesses, boutique brands, hospitality teams, and companies that want a refined, high-trust online presence.',
  },
  {
    question: 'Do you build custom websites?',
    answer: 'Yes. We design and build custom, strategic experiences rooted in clarity, premium positioning, and conversion goals.',
  },
  {
    question: 'Can you work with existing content or brand guidelines?',
    answer: 'Absolutely. We can build from an existing brand foundation, refine the story, and elevate what is already working.',
  },
];

export const CLIENT_OFFER = 'A polished website should feel like a premium sales experience — calm, elevated, and persuasive.';

export const RAPPORT_NOTE = 'We typically work with brands ready for a more premium digital presence and a clearer customer journey.';

export const WEBSITE_GOALS = [
  'Attract higher-value leads',
  'Clarify positioning and trust',
  'Increase conversion and inquiry quality',
  'Create a premium digital experience',
];

export const WORKFLOW_OPTIONS = [
  'Discovery & strategy',
  'Visual design system',
  'Full website build',
  'Launch & optimization',
];

export const CUSTOMER_TYPES = ['Founder-led brand', 'Luxury service business', 'Boutique consultancy', 'Creative studio'];

export const GOAL_OPTIONS = ['Lead generation', 'Brand refresh', 'New launch', 'Conversion optimization'];

export const OFFERING_OPTIONS = ['Website design', 'Website build', 'Strategy', 'Retainer support'];

export const ACCENT_COLORS = ['Warm ivory', 'Midnight', 'Pewter', 'Champagne'];

export const DESIGN_DIRECTIONS = ['Minimal luxury', 'Editorial', 'Modern premium', 'Confident and minimal'];

export const BUDGET_OPTIONS = ['Under $5k', '$5k–$10k', '$10k–$25k', '$25k+'];

export const TIMELINE_OPTIONS = ['ASAP', 'Within 1 month', '2–3 months', 'Flexible'];

export const DISCOVERY_QUESTION = 'What should the new site help you accomplish most?';

export const projectDefaults = {
  email: PRIMARY_EMAIL,
  phone: BRAND.phoneDisplay,
};

export const PREMIUM_INTAKE = {
  title: 'Discovery questionnaire',
  subtitle: 'Share a few details so we can understand the scope, goals, and fit before a discovery call.',
};

export const PREQUALIFICATION = {
  headline: 'We work with clients who value clarity, quality, and a premium online presence.',
  detail: 'This is best for businesses ready to invest in a refined digital experience with a strategic foundation.',
};

export const BRAND_GUIDE = {
  palette: ['Ivory', 'Espresso', 'Champagne', 'Warm stone'],
  tone: 'Refined, intentional, premium, modern, editorial',
};

export const REFINED_BRAND_SHORTHAND = 'Luxury without noise.';

export const CLIENT_TYPES = ['High-end brands', 'Founders', 'Boutique teams', 'Premium service providers'];

export const DESIGN_PILLARS = ['Clarity', 'Trust', 'Positioning', 'Conversion'];

export const THEME_OPTIONS = ['Luxury editorial', 'Modern minimal', 'High-trust premium'];

export const BRIEF_SUMMARY = 'A premium digital presence should feel intentional from the first glance to the final conversion step.';

export const AGENCY_VALUES = ['Premium aesthetics', 'Strategic clarity', 'Clean execution', 'Trust-building experience'];

export const LEAD_MESSAGE = 'Let’s design a premium digital presence that reflects the level of your business.';

export const CLIENT_PROFILE = 'Brands that want a polished, high-trust digital presence without a generic template feel.';

export const siteTheme = {
  accent: DEFAULT_BRAND_THEME.accent,
  brand: DEFAULT_BRAND_THEME.brand,
  surface: DEFAULT_BRAND_THEME.surface,
};

export const trackOptions = ['Brand strategy', 'Website design', 'Website build', 'Conversion optimization', 'Retainer support'];

export const WHY_US = [
  'We combine strategy with modern design execution.',
  'We work with premium positioning and high-trust messaging.',
  'We build experiences that tell your story with clarity and authority.',
];

export const discoveryMessage = 'We’ll review the details and follow up with the next steps.';

export const HOME_COPY = {
  close: 'Luxury without noise.',
};

export const workingStyle = 'Refined, strategic, conversion-aware, premium.';

export const SITE_TAGLINE = 'Luxury brand websites for founder-led and premium businesses.';

export const PROFESSIONAL_CAPABILITIES = [
  'Luxury branding',
  'Website strategy',
  'UI/UX design',
  'Frontend development',
  'Conversion optimization',
];

export const finalNote = 'This system is intentionally reusable and scalable for premium businesses of many kinds.';

export const QUOTE = 'The best digital experiences feel calm, elevated, and unmistakably clear.';

export const DISCOVERY_GOALS = ['Clear positioning', 'Premium visuals', 'Conversion-focused structure', 'Brand trust'];

export const SERVICE_BUNDLES = ['Brand + site', 'Full website', 'Growth partner'];

export const REQUEST_TYPE_OPTIONS = ['New website', 'Brand refresh', 'Landing page', 'Conversion optimization', 'Retainer'];

export const DELIVERY_MODE = ['Remote-first', 'Hybrid', 'On-site'];

export const CONTACT_REASON = 'Tell us what you need and we’ll follow up with the next steps.';

export const submitTitle = 'Send project inquiry';

export const SITE_INTENT = 'Premium websites for brands that want to feel elevated and credible from the first scroll.';

export const MISSION = 'Turn complex business value into a calm, refined digital experience that earns trust.';

export default SITE;

