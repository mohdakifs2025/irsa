import { CONTENT_STATUS } from './siteData';

export const MEMBERSHIP_TIERS = [
  {
    id: "founding",
    name: "FOUNDING MEMBER",
    fee: "₹5 LAKHS",
    note: "Proposed Commercial Term",
    description: "For lead industry players seeking strategic steering role, high-level advisory panel seat, and marquee exhibition placement.",
    features: [
      "Steering Advisory Group Representation",
      "Prime Exhibition Space at IRSA 2027 Expo",
      "Co-branding across all IRSA National Reports",
      "Exclusive CSR Collaboration Access"
    ],
    status: CONTENT_STATUS.WORKING
  },
  {
    id: "strategic",
    name: "STRATEGIC MEMBER",
    fee: "₹2 LAKHS",
    note: "Proposed Commercial Term",
    description: "For corporate organisations, OEM suppliers, and tech enterprises driving active road safety initiatives.",
    features: [
      "Thematic Panel Speaking Opportunity",
      "Standard Exhibition Booth at IRSA 2027",
      "Publication of Corporate Safety Case Study",
      "Access to IRSA Knowledge Network"
    ],
    status: CONTENT_STATUS.WORKING
  },
  {
    id: "associate",
    name: "ASSOCIATE MEMBER",
    fee: "₹1 LAKH",
    note: "Proposed Commercial Term",
    description: "For mid-size companies, research institutes, and technology startups seeking active ecosystem integration.",
    features: [
      "Delegate Passes for IRSA 2027 Convention",
      "Branding in Event Directory",
      "Participation in Regional Working Groups",
      "Networking Sessions Access"
    ],
    status: CONTENT_STATUS.WORKING
  },
  {
    id: "govt-ngo",
    name: "GOVERNMENT & NGOS",
    fee: "NO FEE",
    note: "Subject to Application Review",
    description: "For government ministries, public enforcement agencies, academic institutions, and registered non-profits.",
    features: [
      "Complimentary Delegate Passes",
      "Civil Society Pavilion Participation",
      "Case Study & Project Showcase Access",
      "Policy Knowledge Exchange"
    ],
    status: CONTENT_STATUS.WORKING
  }
];

export const PARTICIPATION_OPTIONS = [
  {
    id: "case-study",
    title: "CASE STUDY SHOWCASE",
    description: "Present verified road safety interventions, accident reduction studies, or infrastructure audits before national experts.",
    status: CONTENT_STATUS.WORKING
  },
  {
    id: "startup-bootcamp",
    title: "STARTUP BOOTCAMP",
    description: "Pitch early-stage road safety technology, AI computer vision, or telematics prototypes to impact investors and automakers.",
    status: CONTENT_STATUS.WORKING
  },
  {
    id: "student-prog",
    title: "STUDENT PROGRAMME",
    description: "University and youth innovations tackling road safety, vehicle engineering, driver distraction, or emergency care.",
    status: CONTENT_STATUS.WORKING
  },
  {
    id: "olympiad",
    title: "NATIONAL ROAD SAFETY OLYMPIAD",
    description: "National school and college competition encouraging young minds to develop campaign concepts and safety models.",
    status: CONTENT_STATUS.WORKING
  },
  {
    id: "csr-showcase",
    title: "CSR PROJECT SHOWCASE",
    description: "Display corporate social responsibility projects focused on driver training, emergency response, or school zone safety.",
    status: CONTENT_STATUS.WORKING
  }
];

export const EXHIBIT_PARTNER_INFO = {
  title: "EXHIBIT / PARTNER AT IRSA 2027",
  subtitle: "An Active Discovery Zone for Next-Generation Mobility Safety",
  description: "The IRSA 2027 Exhibition is designed as an interactive discovery environment rather than a passive branding backdrop. Demonstrations include active safety tech, driver monitoring systems, vehicle crash test innovations, and emergency medical equipment.",
  status: CONTENT_STATUS.WORKING
};
