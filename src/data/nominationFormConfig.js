/**
 * IRSA 2027 AWARDS NOMINATION FORM — CENTRAL CONFIGURATION (PROTOTYPE)
 * ---------------------------------------------------------------------
 * Source of truth: "IRSA 2027 Awards Nomination Forms Pack" (working draft for internal review).
 * Question wording, required markers (*) and word limits are preserved from the pack.
 * Edit this file to revise questions, helper text, limits, categories or evidence guidance
 * after stakeholder feedback. No component needs to change for content edits.
 */

// ---------------------------------------------------------------------------
// Prototype policy switches (pending IRSA decisions — do NOT treat as approved rules)
// ---------------------------------------------------------------------------
export const PROTOTYPE_POLICY = {
  // Pack: "Required: at least one supporting document or evidence link for the principal results claim, where available."
  // Strict enforcement is a pending policy decision. 'warn' = flag in review only; 'enforce' = block progression; 'off' = ignore.
  principalEvidenceRule: 'warn',
  // Pack describes "suggested word limits" phrased as "Maximum N words".
  // true = block progression when exceeded; false = show warning only.
  enforceWordLimits: true,
  // Local file-selection guidance enforced by this prototype only (final limits pending approval).
  maxFileSizeMB: 10,
  acceptedFileExtensions: ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.csv', '.ppt', '.pptx', '.jpg', '.jpeg', '.png', '.mp4'],
};

export const PACK_STATUS_NOTE =
  'Working draft for internal review. Final category definitions, weights, eligibility rules, deadlines and legal/privacy wording require IRSA approval before publication.';

// ---------------------------------------------------------------------------
// Award architecture: 4 families, 8 categories
// ---------------------------------------------------------------------------
export const AWARD_FAMILIES = [
  { id: 'leadership', name: 'IRSA Leadership Awards' },
  { id: 'impact', name: 'IRSA Impact Awards' },
  { id: 'innovation', name: 'IRSA Safe Mobility Innovation Award' },
  { id: 'implementation', name: 'IRSA Implementation & Collaboration Awards' },
];

const CATEGORY_INTRO = 'Complete the common nomination form first. This conditional section should appear only when this category is selected.';

export const NOMINATION_CATEGORIES = [
  {
    id: 'industry-leadership',
    number: 1,
    familyId: 'leadership',
    name: 'Industry Leadership in Safe Mobility',
    proposed: false,
    purpose:
      'Recognises industry organisations that demonstrate leadership in making mobility safer through products, systems, operations, standards, consumer safety or sustained business practice.',
    assesses: 'Leadership beyond minimum compliance, institutionalised change and credible safety outcomes.',
    questions: [
      { id: 'q1', label: 'What meaningful change did the organisation introduce in its products, systems, operations, standards or business practices to improve mobility safety?', required: true, maxWords: 200, helper: 'Maximum 200 words. Identify what changed and when.' },
      { id: 'q2', label: 'How did this go beyond minimum legal or regulatory compliance?', required: true, helper: 'Describe the additional action, investment, standard or practice and why it matters.' },
      { id: 'q3', label: 'What evidence demonstrates improved safety or reduced risk?', required: true, helper: 'Provide quantitative indicators where available, baseline and measurement method.' },
      { id: 'q4', label: 'How has the change been institutionalised?', required: true, helper: 'Explain policies, operating procedures, accountability, audits or leadership ownership.' },
      { id: 'q5', label: 'What is the potential for adoption by other organisations in the industry?', required: true, helper: 'State what is transferable and any conditions needed for adoption.' },
    ],
    evidence: [
      'Revised policies / operating standards or audit evidence',
      'Product, vehicle, fleet or operational safety data',
      'Before-and-after risk or performance indicators',
      'Evidence of institutionalisation and replication potential',
    ],
  },
  {
    id: 'public-leadership',
    number: 2,
    familyId: 'leadership',
    name: 'Public Leadership in Road Safety',
    proposed: false,
    purpose: 'Recognises public institutions translating road-safety priorities into measurable institutional or on-ground action.',
    assesses: 'Policy-to-practice execution and measurable public outcomes.',
    questions: [
      { id: 'q1', label: 'What policy, institutional practice, enforcement mechanism or public-road-safety intervention did the institution lead or change?', required: true, maxWords: 200, helper: 'Maximum 200 words.' },
      { id: 'q2', label: 'How was the initiative translated into on-ground implementation?', required: true, helper: 'Describe ownership, implementation geography, coordination and delivery milestones.' },
      { id: 'q3', label: 'How was road-safety data used to identify priorities and guide decisions?', required: true, helper: 'Identify datasets, analysis or evidence used.' },
      { id: 'q4', label: 'What measurable public outcomes resulted?', required: true, helper: 'Include indicators, time period, source and any baseline comparison.' },
      { id: 'q5', label: 'How has the initiative been institutionalised, sustained or made replicable?', required: true, helper: 'Explain policy/process integration, resources and potential for other jurisdictions.' },
    ],
    evidence: [
      'Government orders / policy documents',
      'Implementation or enforcement records',
      'Official datasets and outcome comparisons',
      'Monitoring, audit or replication documentation',
    ],
  },
  {
    id: 'csr-impact',
    number: 3,
    familyId: 'impact',
    name: 'CSR Impact for Road Safety',
    proposed: false,
    purpose: 'Recognises CSR programmes where corporate investment translates into demonstrable, sustained and replicable road-safety outcomes.',
    assesses: 'Attributable outcomes and value generated from CSR investment; expenditure and reach alone are insufficient.',
    questions: [
      { id: 'q1', label: 'What road-safety problem did the CSR programme address, and why was this intervention selected?', required: true, maxWords: 200, helper: 'Maximum 200 words.' },
      { id: 'q2', label: 'What was the CSR contribution, and what role did implementation partners play?', required: true, helper: 'State the programme period, funding/other contribution where disclosable, and roles. Financial details should be limited to what the applicant is authorised to disclose.' },
      { id: 'q3', label: 'What measurable outcomes were achieved beyond expenditure, activity counts or beneficiary reach?', required: true, helper: 'Provide outcome indicators, baseline, result, period and source.' },
      { id: 'q4', label: 'How do you attribute the reported outcomes to the programme?', required: true, helper: 'Explain the contribution pathway, evaluation design if any, other contributing factors and limitations.' },
      { id: 'q5', label: 'What evidence demonstrates value, sustainability and potential for replication?', required: true, helper: 'Explain why the intervention merits continued or wider adoption.' },
    ],
    evidence: [
      'CSR project reports and monitoring data',
      'Evaluation / impact assessment reports',
      'Outcome and beneficiary data with methods',
      'Partner documentation and sustainability evidence',
    ],
  },
  {
    id: 'behaviour-change',
    number: 4,
    familyId: 'impact',
    name: 'Behaviour Change & Safer Road Users',
    proposed: false,
    purpose: 'Recognises interventions demonstrating meaningful improvement in the behaviour or safety practices of road users.',
    assesses: 'Measured behavioural change rather than awareness, attendance or reach alone.',
    questions: [
      { id: 'q1', label: 'Which specific road-user behaviour or safety practice was the intervention designed to change?', required: true, helper: 'For example: helmet or seatbelt use, speed, distraction, pedestrian behaviour or safe fleet practices.' },
      { id: 'q2', label: 'What was the baseline behaviour, and how was it measured?', required: true, helper: 'Describe sample, location, method, dates and limitations.' },
      { id: 'q3', label: 'What changed after the intervention?', required: true, helper: 'Provide the observed change, comparison period and data source.' },
      { id: 'q4', label: 'How do you know the observed change was associated with the intervention?', required: true, helper: 'Explain measurement design, comparison group if available, and other possible influences.' },
      { id: 'q5', label: 'Was the behaviour change sustained?', required: true, helper: 'Provide follow-up results or explain how sustained change will be assessed.' },
    ],
    evidence: [
      'Baseline and follow-up observational surveys',
      'Helmet/seatbelt compliance or speed/distraction data',
      'Evaluation methodology and sample details',
      'Follow-up evidence on sustained behaviour',
    ],
  },
  {
    id: 'technology-innovation',
    number: 5,
    familyId: 'innovation',
    name: 'Technology & Innovation for Safer Mobility',
    proposed: false,
    purpose: 'Recognises technologies, products or innovative approaches that have moved beyond an idea and demonstrated real-world application or safety value.',
    assesses: 'Real-world deployment, performance and demonstrated safety value.',
    questions: [
      { id: 'q1', label: 'What technology, product or innovative approach has been developed or adapted to address a road-safety problem?', required: true, helper: "Describe the problem and the solution's distinct contribution." },
      { id: 'q2', label: 'Where and for how long has it been deployed in a real-world setting?', required: true, helper: 'Include deployment dates, users/sites and operational status. Concept-only solutions should not be presented as deployed.' },
      { id: 'q3', label: 'What performance metrics or safety outcomes demonstrate its value?', required: true, helper: 'Include technical or safety metrics, baseline/comparator if available and evidence source.' },
      { id: 'q4', label: 'How have effectiveness, reliability and safety claims been tested or validated?', required: true, helper: 'Identify testing methods, pilots, independent validation or limitations.' },
      { id: 'q5', label: 'What are the constraints and requirements for replication or wider deployment?', required: true, helper: 'Describe integration, infrastructure, cost/resource needs if known and lessons learned.' },
    ],
    evidence: [
      'Deployment records and real-world pilot results',
      'Technical validation, testing or reliability reports',
      'Performance dashboards and safety outcome metrics',
      'Documentation of constraints and deployment requirements',
    ],
  },
  {
    id: 'implementation-excellence',
    number: 6,
    familyId: 'implementation',
    name: 'Implementation Excellence',
    proposed: false,
    purpose: 'Recognises programmes where the quality of design, delivery, monitoring, adaptation and execution is itself exemplary.',
    assesses: 'Delivery quality, management discipline and the ability to adapt implementation based on evidence.',
    questions: [
      { id: 'q1', label: 'How was the road-safety problem assessed before the intervention was designed?', required: true, helper: 'Describe the needs assessment, data or stakeholder consultation.' },
      { id: 'q2', label: 'What delivery model, implementation plan and governance mechanisms were used?', required: true, helper: 'Explain roles, milestones, quality assurance and risk management.' },
      { id: 'q3', label: 'How were quality, progress, risks and outcomes monitored?', required: true, helper: 'Identify the monitoring tools, indicators, review frequency and accountability.' },
      { id: 'q4', label: 'What adaptations were made during implementation, and what evidence informed them?', required: true, helper: 'Provide an example of a challenge, response and resulting improvement.' },
      { id: 'q5', label: 'What makes the delivery model effective, sustainable and replicable?', required: true, helper: 'Explain lessons, institutional ownership and conditions for replication.' },
    ],
    evidence: [
      'Needs assessment and implementation plan',
      'Monitoring framework, milestone reports and quality checks',
      'Risk registers or documented adaptations',
      'Sustainability and replication plan',
    ],
  },
  {
    id: 'multi-stakeholder',
    number: 7,
    familyId: 'implementation',
    name: 'Multi-Stakeholder Impact',
    proposed: false,
    purpose: 'Recognises programmes in which multiple stakeholder groups collaborate to create an outcome difficult for one actor to achieve alone.',
    assesses: 'Quality of collaboration, clear governance and demonstrable collective outcomes.',
    questions: [
      { id: 'q1', label: 'Which stakeholders participated, and what specific role did each play?', required: true, helper: 'List each partner, contribution, resources/expertise and accountable lead.' },
      { id: 'q2', label: 'How were responsibilities, decision-making and accountability organised?', required: true, helper: 'Describe governance, coordination, escalation and decision records.' },
      { id: 'q3', label: 'What did the partnership achieve that individual stakeholders would have struggled to achieve independently?', required: true, helper: 'Explain the value created by collaboration, not simply the number of partners.' },
      { id: 'q4', label: "What evidence demonstrates the collective outcome and each partner's contribution?", required: true, helper: 'Provide shared results and explain attribution where feasible.' },
      { id: 'q5', label: 'How will the collaboration continue, and can the model be replicated?', required: true, helper: 'Describe continuation commitments, governance and conditions for replication.' },
    ],
    evidence: [
      'Partnership agreements / MoUs',
      'Governance or coordination records',
      'Joint implementation reports and collective outcome data',
      'Partner confirmation and continuation commitments',
    ],
  },
  {
    id: 'education-capacity',
    number: 8,
    familyId: 'implementation',
    name: 'Road Safety Education & Capacity Building',
    proposed: true,
    purpose:
      'Proposed category recognising structured education, training and capacity-building initiatives that strengthen road-safety knowledge, skills and institutional capability, with evidence of application.',
    assesses: 'Learning and capacity applied in practice. This is distinct from Behaviour Change, which focuses on measured road-user behaviour.',
    questions: [
      { id: 'q1', label: 'Who was trained or educated, and what knowledge, skills or institutional capability was the programme designed to improve?', required: true, helper: 'Describe target groups, learning objectives and needs assessment.' },
      { id: 'q2', label: 'How was the curriculum or training approach developed to address the identified need?', required: true, helper: 'Explain content design, delivery method, trainer capability and accessibility.' },
      { id: 'q3', label: 'How were learning gains measured?', required: true, helper: 'For example: pre/post assessments, practical demonstrations, competency checks or institutional capability reviews.' },
      { id: 'q4', label: 'What evidence shows that participants or institutions applied the learning in practice?', required: true, helper: 'Provide follow-up evidence, observed practice, improved procedures or documented use of skills.' },
      { id: 'q5', label: 'How will the training model be sustained, extended or replicated?', required: true, helper: 'Describe trainer capacity, institutional ownership, materials and continuation plan.' },
    ],
    evidence: [
      'Curriculum and training materials',
      'Attendance/completion records and trainer qualifications',
      'Pre/post assessment or practical competency results',
      'Follow-up evidence of application in practice and sustainability',
    ],
  },
].map((c) => ({ ...c, intro: CATEGORY_INTRO }));

export const PROPOSED_CATEGORY_NOTE =
  'Proposed category — provisional. Category structure, eligibility rules, qualifying project period, scoring criteria and weights are not yet approved by IRSA.';

export const getCategory = (id) => NOMINATION_CATEGORIES.find((c) => c.id === id) || null;
export const getFamily = (id) => AWARD_FAMILIES.find((f) => f.id === id) || null;

// ---------------------------------------------------------------------------
// Option lists
// ---------------------------------------------------------------------------
export const YES_NO_NA = ['Yes', 'No', 'Not applicable'];

export const APPLICANT_TYPES = [
  'Company / industry organisation',
  'Government / public institution',
  'NGO / nonprofit',
  'Startup / technology provider',
  'School / college / training institution',
  'Research / academic institution',
  'Partnership / consortium',
  'Individual',
  'Other',
];

// A6 guidance, grouped exactly as the pack describes
export const EVIDENCE_GUIDANCE = {
  required: 'At least one supporting document or evidence link for the principal results claim, where available.',
  recommended: [
    'Project report / evaluation',
    'Monitoring data or dashboard',
    'Baseline and endline evidence',
    'Official orders or policy documents where relevant',
    'Technical validation where relevant',
    'Partnership documentation where relevant',
  ],
  optional: ['Photographs', 'Short videos', 'Media coverage', 'Public reports', 'Other supporting material'],
};

export const EVIDENCE_TYPES = [...EVIDENCE_GUIDANCE.recommended, ...EVIDENCE_GUIDANCE.optional];

// ---------------------------------------------------------------------------
// Part A — Common Nomination Form (sections A1–A7)
// Field types: text | email | tel | url | textarea | date | radio | select
// Special types: category | contactGroup | partners | endDate | indicators | strongestEvidence | evidenceItems | designationDate
// ---------------------------------------------------------------------------
export const COMMON_SECTIONS = [
  {
    id: 'A1',
    title: 'A1. Nomination route and category',
    fields: [
      { id: 'route', num: 1, label: 'How is this nomination being submitted?', type: 'radio', required: true, options: ['Self-nomination', 'Third-party nomination'] },
      { id: 'categoryId', num: 2, label: 'Select the award category', type: 'category', required: true, helper: 'The relevant category-specific section is displayed after selection.' },
      {
        id: 'nomineeConfirmed', num: 3, type: 'radio', required: true, options: YES_NO_NA,
        label: 'If this is a third-party nomination, has the nominee been informed and agreed to be nominated?',
        helper: 'If not yet, explain the confirmation process. Nominee confirmation should be completed before final evaluation.',
      },
      {
        id: 'nomineeConfirmationProcess', type: 'textarea', required: true, rows: 3,
        label: 'Explain the confirmation process',
        helper: 'If not yet, explain the confirmation process. Nominee confirmation should be completed before final evaluation.',
        showIf: (d) => d.nomineeConfirmed === 'No',
      },
    ],
  },
  {
    id: 'A2',
    title: 'A2. Nominator details',
    fields: [
      { id: 'nominatorName', num: 4, label: "Nominator's full name", type: 'text', required: true, autoComplete: 'name' },
      { id: 'nominatorRole', num: 5, label: 'Designation / role', type: 'text', required: true, autoComplete: 'organization-title' },
      { id: 'nominatorOrg', num: 6, label: 'Organisation', type: 'text', required: true, autoComplete: 'organization' },
      { id: 'nominatorEmail', num: 7, label: 'Official email address', type: 'email', required: true, helper: 'Use an email monitored during the evaluation period.', autoComplete: 'email' },
      { id: 'nominatorPhone', num: 8, label: 'Contact number with country code', type: 'tel', required: true, placeholder: '+91 98765 43210', autoComplete: 'tel' },
      { id: 'nominatorRelationship', num: 9, label: 'Relationship to the nominee / initiative', type: 'text', required: true, helper: 'For example: programme lead, partner, funder, public official, researcher or independent nominator.' },
    ],
  },
  {
    id: 'A3',
    title: 'A3. Nominee / applicant organisation',
    fields: [
      { id: 'nomineeLegalName', num: 10, label: 'Legal name of nominee organisation / institution / individual', type: 'text', required: true },
      { id: 'applicantType', num: 11, label: 'Applicant / nominee type', type: 'radio', required: true, options: APPLICANT_TYPES, columns: 2 },
      { id: 'applicantTypeOther', label: 'Please specify applicant / nominee type', type: 'text', required: true, showIf: (d) => d.applicantType === 'Other' },
      { id: 'nomineeWebsite', num: 12, label: 'Website URL', type: 'url', required: false, placeholder: 'https://' },
      { id: 'nomineeAddress', num: 13, label: 'Registered / official address', type: 'textarea', required: true, rows: 3 },
      { id: 'primaryContact', num: 14, label: 'Primary contact name, designation, email and phone', type: 'contactGroup', required: true },
      { id: 'isPartnership', num: 15, label: 'Is the nomination submitted on behalf of a partnership or consortium?', type: 'radio', required: true, options: YES_NO_NA },
      {
        id: 'partners', num: 16, label: 'If yes, list the partners and their roles', type: 'partners', required: false,
        helper: 'For multi-stakeholder nominations, identify a lead applicant and named partner contacts.',
        showIf: (d) => d.isPartnership === 'Yes' || d.applicantType === 'Partnership / consortium',
      },
    ],
  },
  {
    id: 'A4',
    title: 'A4. Initiative profile',
    fields: [
      { id: 'initiativeName', num: 17, label: 'Name of the initiative / project / institutional practice', type: 'text', required: true },
      { id: 'summary', num: 18, label: 'Short summary of the initiative', type: 'textarea', required: true, maxWords: 150, helper: 'Maximum 150 words. State the problem, intervention, who it served and the most important result.' },
      { id: 'problem', num: 19, label: 'What road-safety problem did the initiative address, and what evidence established the need?', type: 'textarea', required: true, maxWords: 200, helper: 'Maximum 200 words. Distinguish the problem statement from the activities subsequently delivered.' },
      { id: 'intervention', num: 20, label: "Describe the intervention and the nominee's specific contribution", type: 'textarea', required: true, maxWords: 250, helper: 'Maximum 250 words. Explain what the nominee led, funded, designed, implemented or changed.' },
      { id: 'startDate', num: 21, label: 'Implementation start date', type: 'date', required: true },
      { id: 'endDate', num: 22, label: 'Implementation end date / ongoing status', type: 'endDate', required: true, helper: 'Enter an end date, or select "This initiative is ongoing".' },
      { id: 'locations', num: 23, label: 'Locations covered', type: 'textarea', required: true, rows: 3, helper: 'List states, districts, cities or sites in India. Explain if coverage is national or multi-state.' },
      { id: 'beneficiaries', num: 24, label: 'Who were the intended beneficiaries / road-user groups?', type: 'textarea', required: true, rows: 3, helper: 'For example: pedestrians, schoolchildren, two-wheeler riders, drivers, fleet workers or enforcement personnel.' },
      { id: 'activities', num: 25, label: 'What were the principal activities and outputs?', type: 'textarea', required: true, maxWords: 200, helper: 'Maximum 200 words. Outputs include what was delivered; they are not by themselves proof of outcomes.' },
    ],
  },
  {
    id: 'A5',
    title: 'A5. Results, evidence and sustainability',
    fields: [
      { id: 'whatChanged', num: 26, label: 'What changed as a result of the initiative?', type: 'textarea', required: true, maxWords: 250, helper: 'Maximum 250 words. Report outcomes, not only activities or people reached. Include the period over which change was measured.' },
      { id: 'indicators', num: 27, label: 'Add the most important indicators.', type: 'indicators', required: false, helper: "Use one row per indicator; add rows as needed. If data for an indicator is not available, tick 'Not available' and explain." },
      { id: 'measurement', num: 28, label: 'How were results measured and verified?', type: 'textarea', required: true, maxWords: 200, helper: 'Maximum 200 words. Name the method, data source, sample/coverage where relevant, and who conducted the measurement.' },
      { id: 'limitations', num: 29, label: 'What limitations or other factors should the jury consider when interpreting the results?', type: 'textarea', required: true, maxWords: 150, helper: 'Maximum 150 words. Applicants should be transparent about attribution limits, missing data or contextual factors.' },
      { id: 'sustainability', num: 30, label: 'How will the initiative or its results be sustained?', type: 'textarea', required: true, maxWords: 150, helper: 'Maximum 150 words. Describe ownership, resources, policy/process integration or follow-up arrangements.' },
      { id: 'replication', num: 31, label: 'What would another organisation or geography need to replicate this approach?', type: 'textarea', required: true, maxWords: 150, helper: 'Maximum 150 words. Identify enabling conditions, costs/resources if known, and lessons learned.' },
      { id: 'strongestEvidence', num: 32, label: 'What are the three strongest pieces of evidence supporting this nomination?', type: 'strongestEvidence', required: true, helper: 'Provide a title, brief description and file/link for each. Do not upload confidential personal data unless necessary and authorised.' },
    ],
  },
  {
    id: 'A6',
    title: 'A6. Evidence uploads and links',
    fields: [
      { id: 'evidenceItems', label: 'Evidence items', type: 'evidenceItems', required: false },
    ],
  },
  {
    id: 'A7',
    title: 'A7. Declarations and consent',
    fields: [
      { id: 'declAccuracy', num: 33, label: 'Accuracy of information', type: 'radio', declaration: true, required: true, options: YES_NO_NA, statement: 'I confirm that, to the best of my knowledge, the information submitted is accurate and not knowingly misleading.' },
      { id: 'declAuthority', num: 34, label: 'Authority to submit', type: 'radio', declaration: true, required: true, options: YES_NO_NA, statement: 'I confirm that I am authorised to submit this nomination and share the attached material for evaluation.' },
      { id: 'declVerify', num: 35, label: 'Permission to verify', type: 'radio', declaration: true, required: true, options: YES_NO_NA, statement: 'I understand that IRSA may seek clarification and verify material claims with the applicant or relevant sources.' },
      { id: 'declPublication', num: 36, label: 'Publication permission', type: 'radio', declaration: true, required: true, options: YES_NO_NA, statement: 'I understand that shortlisted or winning entries may be invited to provide an approved summary, quotation, photograph or case study for IRSA communications. Any specific consent and permissions will be confirmed before publication.' },
      { id: 'declPrivacy', num: 37, label: 'Data and privacy notice acknowledgement', type: 'radio', declaration: true, privacy: true, required: true, options: YES_NO_NA, statement: 'I acknowledge the IRSA privacy notice describing how submission data will be used, accessed, retained and contacted about.' },
      { id: 'signatoryName', num: 38, label: 'Name of authorised signatory', type: 'text', required: true },
      { id: 'signatory', num: 39, label: 'Designation and date', type: 'designationDate', required: true },
    ],
  },
];

// Prototype privacy placeholder — NOT an approved IRSA privacy notice.
export const PRIVACY_PLACEHOLDER =
  'PROTOTYPE PLACEHOLDER — The final website form must link to an approved IRSA privacy notice describing how submission data will be used, accessed, retained and contacted about. That notice has not yet been approved, and this text is not a privacy policy. No data entered in this prototype is sent to IRSA.';

// ---------------------------------------------------------------------------
// Steps of the applicant journey
// ---------------------------------------------------------------------------
export const FORM_STEPS = [
  { id: 1, short: 'Nomination', title: 'Nomination and applicant details', sections: ['A1', 'A2', 'A3'] },
  { id: 2, short: 'Initiative', title: 'Initiative profile and implementation details', sections: ['A4'] },
  { id: 3, short: 'Results', title: 'Results, evidence and category-specific questions', sections: ['A5', 'CATEGORY'] },
  { id: 4, short: 'Evidence & declarations', title: 'Evidence records, declarations and signatory details', sections: ['A6', 'A7'] },
  { id: 5, short: 'Review', title: 'Review, edit and submit', sections: [] },
];

export const getSection = (id) => COMMON_SECTIONS.find((s) => s.id === id);
