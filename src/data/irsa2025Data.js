import { CONTENT_STATUS } from './siteData';

export const IRSA_2025_DETAILS = {
  title: "IRSA 2025 — FIRST ANNUAL CONVENTION",
  subtitle: "Where the Alliance Began",
  date: "24 March 2025",
  venue: "Le Méridien Hotel, New Delhi",
  organizer: "Established & Anchored by The Social Lab (TSL)",
  status: CONTENT_STATUS.CONFIRMED,
  stats: [
    { label: "PARTICIPANTS", value: "140+", icon: "Users" },
    { label: "CORPORATE ORGANISATIONS", value: "30+", icon: "Building" },
    { label: "SCHOOLS PARTICIPATING", value: "30+", icon: "GraduationCap" }
  ]
};

export const IRSA_2025_PANELS = [
  {
    id: "panel-1",
    number: "01",
    title: "Safe Systems Approach: A Holistic Framework for Road Safety",
    summary: "Deliberating on safe roads, safe speeds, safe vehicles, and safe road users as an interconnected system rather than isolated silos.",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    id: "panel-2",
    number: "02",
    title: "Saving Lives Together: Collaborating for Impact",
    summary: "Exploring multi-stakeholder partnerships between government, industry, and civil society to bridge implementation gaps and scale solutions.",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    id: "panel-3",
    number: "03",
    title: "Smart Technologies & Innovative Solutions for Safer Roads",
    summary: "Examining AI telematics, smart infrastructure monitoring, and advanced driver assistance systems tailored for Indian road conditions.",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    id: "panel-4",
    number: "04",
    title: "The Psychology of Compliance: Influencing Driver Behavior",
    summary: "Analyzing behavioral science, law enforcement efficacy, public campaigns, and community engagement to drive sustained behavioral change.",
    status: CONTENT_STATUS.CONFIRMED
  }
];

export const IRSA_2025_VOICES = [
  {
    quote: "Road safety cannot remain a fragmented effort. IRSA was established to unite policymakers, corporate leaders, and community changemakers under one actionable platform.",
    author: "Convening Secretariat",
    role: "The Social Lab (TSL)",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    quote: "Bringing 30+ corporate organisations and 30+ schools together in 2025 demonstrated that safety consciousness starts with education and corporate leadership.",
    author: "Delegate Reflection",
    role: "IRSA 2025 Participant",
    status: CONTENT_STATUS.CONFIRMED
  }
];

export const EVOLUTION_TIMELINE = [
  {
    year: "2025",
    title: "THE PLATFORM WAS ESTABLISHED",
    description: "Inaugural annual convention at Le Méridien, New Delhi, uniting 140+ participants across government, corporate leaders, academia, and schools.",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    year: "2027",
    title: "THE ECOSYSTEM EXPANDS",
    description: "Evolving into a comprehensive national platform featuring 8 thematic conversations, interactive expos, student olympiads, and national road safety awards.",
    status: CONTENT_STATUS.WORKING
  }
];

export const GALLERY_MOMENTS = [
  {
    id: "gal-1",
    title: "Inaugural Address & Lamp Lighting",
    category: "Convention Highlights",
    caption: "Dignitaries opening the First Annual Convention of IRSA in New Delhi.",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    id: "gal-2",
    title: "Panel Discussion: Safe Systems Approach",
    category: "Sessions",
    caption: "Experts deliberating holistic frameworks for road safety.",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    id: "gal-3",
    title: "Corporate & CSR Roundtable",
    category: "Collaboration",
    caption: "30+ corporate leaders outlining strategic CSR commitments for safer mobility.",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    id: "gal-4",
    title: "Youth & School Participation",
    category: "Education",
    caption: "Students and educators engaging in road safety awareness dialogues.",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    id: "gal-5",
    title: "Technology Showcase & Exhibits",
    category: "Innovation",
    caption: "Innovators demonstrating smart telematics and safety prototypes.",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    id: "gal-6",
    title: "Unveiling the IRSA Charter",
    category: "Declaration",
    caption: "Multi-stakeholder commitment to securing India's mobility future.",
    status: CONTENT_STATUS.CONFIRMED
  }
];
