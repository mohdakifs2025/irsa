/**
 * IRSA Global Site Data
 * Strict adherence to IRSA Brand Guidelines v1.0 (07 October 2026)
 */

export const CONTENT_STATUS = {
  CONFIRMED: 'confirmed',
  WORKING: 'working',
  PENDING: 'pending',
};

export const SITE_METADATA = {
  name: "INDIA ROAD SAFETY ALLIANCE",
  acronym: "IRSA",
  logoUrl: "/images/irsa-logo.png",
  anchoredBy: "The Social Lab (TSL)",
  anchoredByFull: "Established & Anchored by The Social Lab (TSL) in 2025",
  theme: "SECURING INDIA'S MOBILITY FUTURE",
  eventLine: "2 DAYS. ONE MOBILITY ECOSYSTEM.",
  masterNarrative: "Everyone is convening on how India will move. IRSA convenes on whether it will move safely.",
  tagline: "Safety at the Centre of Everything That Moves.",
  currentEdition: "IRSA 2027",
  currentEditionDate: "January 2027 | New Delhi",
  dateStatus: CONTENT_STATUS.PENDING,
};

export const BRAND_HERO_METRICS = [
  { value: "1.72 LAKH", label: "LIVES LOST ON INDIAN ROADS IN 2023", subtext: "Source: MoRTH 2023 Report", color: "#FECC2D" },
  { value: "50%", label: "INDIA'S 2030 ROAD-DEATH REDUCTION COMMITMENT", subtext: "National Target", color: "#FECC2D" },
  { value: "2 DAYS", label: "8 SESSIONS • EXPO • CHARTER • AWARDS", subtext: "National Convening", color: "#FECC2D" }
];

export const CONFIRMED_PARTNERS = [
  { name: "Ministry of Road Transport & Highways (MoRTH)", category: "Government & Policy", logoText: "MoRTH" },
  { name: "National Highways Authority of India (NHAI)", category: "Public Infrastructure", logoText: "NHAI" },
  { name: "NITI Aayog", category: "Policy Think Tank", logoText: "NITI Aayog" },
  { name: "Hyundai Motor India", category: "Automotive OEM", logoText: "HYUNDAI" },
  { name: "Mahindra Rise", category: "Automotive & Mobility", logoText: "MAHINDRA" },
  { name: "inDrive", category: "Mobility Platform", logoText: "INDRIVE" },
  { name: "Diageo India", category: "CSR & Safety", logoText: "DIAGEO" },
  { name: "Kia Motors India", category: "Automotive OEM", logoText: "KIA" },
  { name: "ISWAI", category: "Industry Alliance", logoText: "ISWAI" },
  { name: "BMW India Foundation", category: "CSR & Mobility", logoText: "BMW FOUNDATION" },
  { name: "Hero MotoCorp", category: "Two-Wheeler Safety", logoText: "HERO" },
  { name: "Pernod Ricard India Foundation", category: "CSR & Education", logoText: "PERNOD RICARD" },
  { name: "UN-Habitat", category: "Multilateral Agency", logoText: "UN-HABITAT" },
  { name: "Tadpole EV", category: "EV Tech Innovation", logoText: "TADPOLE EV" },
  { name: "Bacardi India", category: "CSR & Safety", logoText: "BACARDI" },
  { name: "Awiros AI", category: "AI Road Audits", logoText: "AWIROS" },
  { name: "PepsiCo India", category: "Corporate CSR", logoText: "PEPSICO" },
  { name: "PVR INOX", category: "Media & Awareness", logoText: "PVR INOX" },
  { name: "TRIP Centre (IIT Delhi)", category: "Research & Academia", logoText: "TRIP CENTRE IIT DELHI" },
  { name: "Maruti Suzuki", category: "Automotive OEM", logoText: "MARUTI SUZUKI" },
  { name: "Toyota India", category: "Automotive OEM", logoText: "TOYOTA" },
  { name: "Nayara Energy", category: "Energy & Infrastructure", logoText: "NAYARA ENERGY" },
  { name: "Honda Motor", category: "Two-Wheeler Safety", logoText: "HONDA" },
  { name: "Honda Cars India", category: "Automotive OEM", logoText: "HONDA CARS" },
  { name: "Swiggy", category: "Fleet & Delivery Safety", logoText: "SWIGGY" },
  { name: "Ashok Leyland", category: "Commercial Vehicles", logoText: "ASHOK LEYLAND" },
  { name: "Uber India", category: "Ride-Hail Safety", logoText: "UBER" },
  { name: "Bira 91", category: "Corporate Responsibility", logoText: "BIRA 91" },
  { name: "Castrol India", category: "Fleet Safety", logoText: "CASTROL" },
  { name: "Bharat Petroleum (BPCL)", category: "Public Sector Energy", logoText: "BHARAT PETROLEUM" },
  { name: "AB InBev", category: "CSR & Impact", logoText: "AB INBEV" },
  { name: "Apollo Tyres", category: "Vehicle Components", logoText: "APOLLO TYRES" },
  { name: "SGS India", category: "Safety Testing & Audit", logoText: "SGS" }
];

export const ECOSYSTEM_STAKEHOLDERS = [
  {
    id: "govt",
    title: "Government & Public Agencies",
    description: "Policy frameworks, regulatory standards, enforcement strategies, and infrastructure safety mandates.",
    iconName: "Building2",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    id: "automotive",
    title: "Automotive & Mobility Industry",
    description: "OEMs, Tier-1 suppliers, electric vehicle manufacturers, telematics, and active safety technology innovators.",
    iconName: "Car",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    id: "csr",
    title: "CSR & Funders",
    description: "Corporate foundations, impact investors, and philanthropic capital deploying resources into high-impact road safety initiatives.",
    iconName: "Coins",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    id: "multilateral",
    title: "Multilaterals & Knowledge Institutions",
    description: "Global development banks, international safety agencies, research bodies, and policy think tanks.",
    iconName: "Globe",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    id: "civil-society",
    title: "Civil Society & Implementers",
    description: "Grassroots NGOs, emergency care responders, road safety advocates, and community action networks.",
    iconName: "Users",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    id: "startups",
    title: "Startups & Innovators",
    description: "AI road inspection platforms, IoT sensor devices, driver monitoring systems, and smart helmet pioneers.",
    iconName: "Zap",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    id: "education",
    title: "Schools & Youth",
    description: "Educators, student leaders, and school transport safety networks embedding road safety literacy from early ages.",
    iconName: "GraduationCap",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    id: "media",
    title: "Media & Communications",
    description: "Journalists, campaign strategists, digital creators, and broadcasting networks amplifying awareness.",
    iconName: "Newspaper",
    status: CONTENT_STATUS.CONFIRMED
  }
];

export const HARYANA_IMPACT_STATS = [
  { value: "657", label: "FEWER CRASHES", subtext: "In 2024 compared to 2023 in Haryana", status: CONTENT_STATUS.CONFIRMED },
  { value: "279", label: "FEWER DEATHS", subtext: "In 2024 compared to 2023 in Haryana", status: CONTENT_STATUS.CONFIRMED },
  { value: "6.3%", label: "DECLINE IN ACCIDENTS", subtext: "Statewide accident reduction", status: CONTENT_STATUS.CONFIRMED },
  { value: "5.6%", label: "DECLINE IN FATALITIES", subtext: "Statewide fatality reduction", status: CONTENT_STATUS.CONFIRMED }
];

export const MEDIA_NEWS_ITEMS = [
  {
    id: "media-1",
    publication: "Mobility & Safety Review",
    date: "March 2025",
    headline: "The Social Lab Launches India Road Safety Alliance in New Delhi",
    summary: "Over 140 delegates assemble to establish a unified multi-stakeholder platform for safer roads.",
    url: "#",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    id: "media-2",
    publication: "National Transport Journal",
    date: "April 2025",
    headline: "Safe Systems Approach Takes Center Stage at Inaugural IRSA Convention",
    summary: "Industry leaders and experts call for shift from fragmented awareness campaigns to collaborative systemic action.",
    url: "#",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    id: "media-3",
    publication: "CSR & Impact Digest",
    date: "June 2025",
    headline: "Funding What Works: How Corporate India is Mobilising Resources for Road Safety",
    summary: "IRSA 2027 roadmap highlights strategic CSR investment as a crucial engine for emergency response and youth education.",
    url: "#",
    status: CONTENT_STATUS.WORKING
  }
];

export const CONTACT_CONFIG = {
  address: "IRSA Secretariat / The Social Lab (TSL), New Delhi, India",
  email: "secretariat@irsa.in (Configurable)",
  phone: "+91 (0) 11-XXXX-XXXX (Configurable)",
  status: CONTENT_STATUS.PENDING
};
