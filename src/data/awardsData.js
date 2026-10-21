import { CONTENT_STATUS } from './siteData';

export const AWARDS_METADATA = {
  title: "IRSA ROAD SAFETY & SAFE MOBILITY AWARDS",
  edition: "IRSA 2027",
  subtitle: "RECOGNISING LEADERSHIP, IMPACT & INNOVATION",
  positioning: "Honoring meaningful contributions across industry, public institutions, CSR, innovation, implementation and collaboration.",
  status: CONTENT_STATUS.CONFIRMED
};

// 4 Official Award Categories from Page 14 & Page 29 of IRSA Brand Guidelines v1.0
export const AWARD_CATEGORIES = [
  {
    id: "cat-01",
    code: "01",
    name: "ROAD SAFETY LEADERSHIP — AUTOMOTIVE & MOBILITY",
    tag: "OEMs & Fleet Operators",
    shortDescription: "Recognising OEMs, tyre & component companies, fleets, and transit operators integrating advanced vehicle crashworthiness, ADAS, and driver safety protocols.",
    eligibility: "Open to OEMs, component suppliers, commercial fleet managers, and transit operators.",
    overallFocus: "Safer vehicles and operations",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    id: "cat-02",
    code: "02",
    name: "RESPONSIBLE MOBILITY & BEHAVIOUR CHANGE",
    tag: "Campaigns & Education",
    shortDescription: "Honoring campaigns, behavioral science interventions, public enforcement programs, and school education initiatives driving sustained driver and pedestrian compliance.",
    eligibility: "Open to corporates, brands, foundations, NGOs, and public institutions.",
    overallFocus: "Responsible mobility and behaviour change",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    id: "cat-03",
    code: "03",
    name: "CSR IMPACT — ROAD SAFETY",
    tag: "CSR & Philanthropy",
    shortDescription: "Acknowledging high-impact corporate social responsibility programs that demonstrate verified reductions in road accidents, injuries, or Golden Hour emergency response times.",
    eligibility: "Open to corporate CSR programs, corporate foundations, and implementing NGO partners.",
    overallFocus: "Measurable road-safety outcomes",
    status: CONTENT_STATUS.CONFIRMED
  },
  {
    id: "cat-04",
    code: "04",
    name: "SAFE MOBILITY INNOVATION — SOLUTIONS THAT CAN SCALE",
    tag: "Startups & Tech",
    shortDescription: "Highlighting innovative AI road audit software, IoT collision avoidance hardware, smart telematics, and trauma care dispatch solutions ready for national scale.",
    eligibility: "Open to tech startups, research labs, universities, and solution providers.",
    overallFocus: "Innovative solutions that can scale",
    status: CONTENT_STATUS.CONFIRMED
  }
];

export const NOMINATION_PROCESS_STEPS = [
  { step: "01", title: "SELECT CATEGORY", description: "Choose the award category best matching your project or initiative.", status: CONTENT_STATUS.CONFIRMED },
  { step: "02", title: "COMPLETE NOMINATION", description: "Fill in organizational details, project objective, and measurable impact metrics.", status: CONTENT_STATUS.CONFIRMED },
  { step: "03", title: "SUBMIT", description: "Submit your online application prior to the entry deadline.", status: CONTENT_STATUS.CONFIRMED },
  { step: "04", title: "REVIEW", description: "Independent jury panel reviews submissions against rigorous evaluation criteria.", status: CONTENT_STATUS.CONFIRMED },
  { step: "05", title: "SHORTLIST", description: "Shortlisted finalists are announced and notified for final presentation.", status: CONTENT_STATUS.CONFIRMED },
  { step: "06", title: "RECOGNITION", description: "Winners honored at the prestigious IRSA 2027 National Awards Ceremony.", status: CONTENT_STATUS.CONFIRMED }
];
