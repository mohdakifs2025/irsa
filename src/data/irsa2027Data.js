import { CONTENT_STATUS } from './siteData';

export const IRSA_2027_METADATA = {
  edition: "IRSA 2027",
  title: "SECURING INDIA'S MOBILITY FUTURE",
  eventLine: "2 DAYS. ONE MOBILITY ECOSYSTEM.",
  masterNarrative: "Everyone is convening on how India will move. IRSA convenes on whether it will move safely.",
  dates: "January 2027",
  location: "New Delhi, India",
  datesStatus: CONTENT_STATUS.PENDING,
  venueStatus: CONTENT_STATUS.PENDING,
  overview: "IRSA 2027 is a landmark two-day national convening bringing together the complete mobility ecosystem — policymakers, automotive leaders, CSR heads, researchers, civil society, and youth champions — to shape action-oriented solutions for road safety in India."
};

export const CONVENTIONS_DAYS = [
  {
    day: "DAY 1",
    theme: "POLICY, INDUSTRY & SOLUTIONS",
    focus: "Governance frameworks, vehicle safety standards, strategic CSR funding, and system-wide accountability.",
    status: CONTENT_STATUS.WORKING
  },
  {
    day: "DAY 2",
    theme: "INNOVATION, ACTION & RECOGNITION",
    focus: "AI & technology scaling, behavioral interventions, emergency care infrastructure, youth engagement, and national awards.",
    status: CONTENT_STATUS.WORKING
  }
];

// 8 Programmes from Page 26 of IRSA Brand Guidelines v1.0
export const EIGHT_PROGRAMMES = [
  {
    number: "01",
    title: "MINISTERIAL OPENING",
    subtext: "National agenda + Case Study Compendium",
    description: "Inaugural address laying out the national road safety roadmap and releasing the official case study compendium.",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    number: "02",
    title: "IRSA CHARTER",
    subtext: "Public commitment to safer mobility",
    description: "Signing of the multi-stakeholder declaration committing government, industry, and civil society to unified action.",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    number: "03",
    title: "MOBILITY EXPO",
    subtext: "Five curated zones + live demonstrations",
    description: "An active discovery zone displaying crash safety tech, driver telematics, smart helmets, and emergency care hardware.",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    number: "04",
    title: "EIGHT SESSIONS",
    subtext: "One question per session",
    description: "Eight focused thematic conversations addressing critical questions across policy, technology, CSR, and behavior.",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    number: "05",
    title: "INNOVATION CHALLENGE",
    subtext: "Six startup finalists + senior jury",
    description: "National pitch stage for high-potential mobility and road safety tech startups evaluated by industry leaders.",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    number: "06",
    title: "CASE STUDY + CSR",
    subtext: "Solutions for replication and adoption",
    description: "Showcasing scalable corporate CSR interventions and municipal safety projects ready for national adoption.",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    number: "07",
    title: "STUDENTS' PROGRAMME",
    subtext: "Olympiad finale + youth showcase",
    description: "National School Road Safety Olympiad finale and youth innovation exhibition showcasing student-led solutions.",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    number: "08",
    title: "NATIONAL AWARDS",
    subtext: "Eight evidence-led categories",
    description: "Prestigious national ceremony honoring outstanding contributions across corporate, public, and youth sectors.",
    status: CONTENT_STATUS.CONFIRMED
  }
];

// 8 Conversations from Page 28 of IRSA Brand Guidelines v1.0
export const EIGHT_CONVERSATIONS = [
  // DAY 1
  {
    id: "conv-1",
    day: "DAY 1",
    code: "01",
    title: "ROAD SAFETY IMPERATIVE",
    subtitle: "From commitment to coordinated action",
    description: "Evaluating national safety targets, inter-ministerial coordination, and moving from fragmented pledges to enforceable policy mandates.",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    id: "conv-2",
    day: "DAY 1",
    code: "02",
    title: "POLICY TO PRACTICE",
    subtitle: "What is actually moving the needle?",
    description: "Deep dive into real-world enforcement, black-spot remediation, infrastructure audit findings, and state-level implementation success stories.",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    id: "conv-3",
    day: "DAY 1",
    code: "03",
    title: "INDUSTRY & VEHICLE SAFETY",
    subtitle: "Safe roads begin before the drive",
    description: "Advancing crashworthiness standards, active safety systems (ADAS), commercial vehicle driver safety, and two-wheeler protection technology.",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    id: "conv-4",
    day: "DAY 1",
    code: "04",
    title: "CSR & CAPITAL",
    subtitle: "Funding what works",
    description: "Unlocking corporate social responsibility funds, impact bonds, and philanthropic investments to scale evidence-backed road safety interventions.",
    status: CONTENT_STATUS.CONFIRMED
  },
  // DAY 2
  {
    id: "conv-5",
    day: "DAY 2",
    code: "01",
    title: "FUTURE MOBILITY",
    subtitle: "Are we making the transition safe?",
    description: "Examining safety challenges in EV adoption, micro-mobility, autonomous systems, shared mobility platforms, and high-speed highway corridors.",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    id: "conv-6",
    day: "DAY 2",
    code: "02",
    title: "BEHAVIOUR & PEOPLE",
    subtitle: "From awareness to behaviour",
    description: "Psychological insights into road compliance, speeding, helmet/seatbelt adoption, driver fatigue management, and public education campaigns.",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    id: "conv-7",
    day: "DAY 2",
    code: "03",
    title: "TECHNOLOGY & INNOVATION",
    subtitle: "From pilot to scale",
    description: "Harnessing computer vision, IoT road sensors, intelligent traffic management systems, and telematics to eliminate road hazards.",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    id: "conv-8",
    day: "DAY 2",
    code: "04",
    title: "SYSTEMS & EMERGENCY RESPONSE",
    subtitle: "The last mile of safety",
    description: "Optimising Golden Hour response, emergency trauma care networks, bystander protection, and integrated dispatch systems.",
    status: CONTENT_STATUS.CONFIRMED
  }
];
