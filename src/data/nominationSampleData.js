/**
 * DEVELOPMENT-ONLY sample data for stakeholder testing of the nomination prototype.
 * Every value is clearly labelled as TEST DATA. These are NOT real IRSA applicants,
 * organisations or outcomes. Used only by the dev test panel (disabled in production builds).
 */
import { NOMINATION_CATEGORIES } from './nominationFormConfig';
import { createInitialData, emptyEvidenceItem, emptyIndicator, emptyPartner } from '../utils/nominationValidation';

const T = (s) => `[TEST DATA] ${s}`;

const baseFill = (categoryId) => {
  const d = createInitialData(categoryId);
  const today = new Date().toISOString().slice(0, 10);
  return {
    ...d,
    nominatorName: T('Sample Nominator'),
    nominatorRole: T('Programme Lead'),
    nominatorOrg: T('Sample Organisation'),
    nominatorEmail: 'test.nominator@example.org',
    nominatorPhone: '+91 90000 00000',
    nominatorRelationship: T('Programme lead'),
    nomineeLegalName: T('Sample Nominee Organisation'),
    applicantType: 'NGO / nonprofit',
    nomineeWebsite: 'https://example.org',
    nomineeAddress: T('Sample address, New Delhi, India'),
    primaryContact: { name: T('Sample Contact'), designation: T('Director'), email: 'test.contact@example.org', phone: '+91 90000 00001' },
    isPartnership: 'No',
    initiativeName: T('Sample Road Safety Initiative'),
    summary: T('Placeholder summary used only to demonstrate the form journey.'),
    problem: T('Placeholder problem statement for prototype testing.'),
    intervention: T('Placeholder description of the intervention and contribution.'),
    startDate: '2023-04-01',
    endDate: '2025-03-31',
    locations: T('Sample district, sample state'),
    beneficiaries: T('Pedestrians and two-wheeler riders'),
    activities: T('Placeholder activities and outputs.'),
    whatChanged: T('Placeholder outcome description.'),
    indicators: [
      { ...emptyIndicator(), metric: T('Indicator A'), baseline: '40', result: '55', unitPeriod: '% / 12 months', source: T('Sample survey') },
      { ...emptyIndicator(), metric: T('Indicator B'), notAvailable: true, naExplanation: T('Endline data collection not yet completed.') },
    ],
    measurement: T('Placeholder measurement method.'),
    limitations: T('Placeholder limitations.'),
    sustainability: T('Placeholder sustainability arrangements.'),
    replication: T('Placeholder replication requirements.'),
    strongestEvidence: [1, 2, 3].map((n) => ({ title: T(`Evidence ${n}`), description: T('Placeholder description'), reference: `test-evidence-${n}.pdf` })),
    evidenceItems: [
      { ...emptyEvidenceItem(), title: T('Sample evaluation report'), type: 'Project report / evaluation', period: '2023–2025', supports: 'Principal results claim (Q26)', shareable: 'No', url: 'https://example.org/test-report' },
      { ...emptyEvidenceItem(), title: T('Sample monitoring dashboard'), type: 'Monitoring data or dashboard', period: '2024', supports: 'Q27 indicators', shareable: 'Yes', url: 'https://example.org/test-dashboard' },
    ],
    declAccuracy: 'Yes', declAuthority: 'Yes', declVerify: 'Yes', declPublication: 'Yes', declPrivacy: 'Yes',
    signatoryName: T('Sample Signatory'),
    signatoryDesignation: T('Chief Executive'),
    signatoryDate: today,
    categoryAnswers: Object.fromEntries(
      NOMINATION_CATEGORIES.map((c) => [c.id, Object.fromEntries(c.questions.map((q, i) => [q.id, T(`Placeholder answer to ${c.name} question ${i + 1}.`)]))])
    ),
  };
};

export const TEST_SCENARIOS = [
  { id: 'self', label: 'Self-nomination (complete)', build: (cat) => ({ ...baseFill(cat), route: 'Self-nomination', nomineeConfirmed: 'Not applicable' }) },
  {
    id: 'third-party-no',
    label: 'Third-party, nominee confirmation = No',
    build: (cat) => ({
      ...baseFill(cat),
      route: 'Third-party nomination',
      nomineeConfirmed: 'No',
      nomineeConfirmationProcess: T('Nominee will be contacted by the nominator before the evaluation stage.'),
      nominatorRelationship: T('Independent nominator'),
    }),
  },
  {
    id: 'consortium-ongoing',
    label: 'Consortium + ongoing initiative',
    build: (cat) => ({
      ...baseFill(cat),
      route: 'Self-nomination',
      nomineeConfirmed: 'Not applicable',
      applicantType: 'Partnership / consortium',
      isPartnership: 'Yes',
      partners: [
        { ...emptyPartner(), name: T('Partner One'), role: T('Lead implementer'), contactName: T('Contact One'), contactEmail: 'p1@example.org', isLead: true },
        { ...emptyPartner(), name: T('Partner Two'), role: T('Data and evaluation'), contactName: T('Contact Two'), contactEmail: 'p2@example.org' },
      ],
      endDate: '',
      ongoing: true,
    }),
  },
];
