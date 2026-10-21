import {
  COMMON_SECTIONS,
  FORM_STEPS,
  PROTOTYPE_POLICY,
  getCategory,
  getSection,
} from '../data/nominationFormConfig';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
export const countWords = (text = '') => {
  const t = String(text).trim();
  return t ? t.split(/\s+/).length : 0;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+\d[\d\s\-()]{6,18}$/; // must include country code, e.g. +91 ...

export const isValidEmail = (v) => EMAIL_RE.test(String(v).trim());
export const isValidPhone = (v) => PHONE_RE.test(String(v).trim());
export const isValidUrl = (v) => {
  try {
    const u = new URL(String(v).trim());
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch {
    return false;
  }
};

const blank = (v) => v === undefined || v === null || String(v).trim() === '';

export const fieldDomId = (key) => `nf-${String(key).replace(/\./g, '-')}`;

let rowSeq = 0;
export const newRowId = () => `row-${Date.now().toString(36)}-${(rowSeq++).toString(36)}`;

// ---------------------------------------------------------------------------
// Initial state
// ---------------------------------------------------------------------------
export const emptyIndicator = () => ({ id: newRowId(), metric: '', baseline: '', result: '', unitPeriod: '', source: '', notAvailable: false, naExplanation: '' });
export const emptyPartner = () => ({ id: newRowId(), name: '', role: '', contactName: '', contactEmail: '', isLead: false });
export const emptyEvidenceItem = () => ({ id: newRowId(), title: '', type: '', period: '', supports: '', shareable: '', url: '', file: null });
export const emptyStrongEvidence = () => ({ title: '', description: '', reference: '' });

export const createInitialData = (categoryId = '') => ({
  route: '', categoryId, nomineeConfirmed: '', nomineeConfirmationProcess: '',
  nominatorName: '', nominatorRole: '', nominatorOrg: '', nominatorEmail: '', nominatorPhone: '', nominatorRelationship: '',
  nomineeLegalName: '', applicantType: '', applicantTypeOther: '', nomineeWebsite: '', nomineeAddress: '',
  primaryContact: { name: '', designation: '', email: '', phone: '' },
  isPartnership: '', partners: [emptyPartner()],
  initiativeName: '', summary: '', problem: '', intervention: '', startDate: '', endDate: '', ongoing: false,
  locations: '', beneficiaries: '', activities: '',
  whatChanged: '', indicators: [emptyIndicator()], measurement: '', limitations: '', sustainability: '', replication: '',
  strongestEvidence: [emptyStrongEvidence(), emptyStrongEvidence(), emptyStrongEvidence()],
  evidenceItems: [],
  declAccuracy: '', declAuthority: '', declVerify: '', declPublication: '', declPrivacy: '',
  signatoryName: '', signatoryDesignation: '', signatoryDate: '',
  categoryAnswers: {},
});

export const isVisible = (field, data) => (field.showIf ? field.showIf(data) : true);

// ---------------------------------------------------------------------------
// Field-level validation
// ---------------------------------------------------------------------------
const wordLimitError = (value, maxWords) =>
  maxWords && PROTOTYPE_POLICY.enforceWordLimits && countWords(value) > maxWords
    ? `Exceeds the maximum of ${maxWords} words (currently ${countWords(value)}).`
    : null;

const validateField = (field, data, push) => {
  const label = field.num ? `${field.num}. ${field.label}` : field.label;
  const v = data[field.id];
  const req = field.required;

  switch (field.type) {
    case 'contactGroup': {
      const c = v || {};
      if (req && blank(c.name)) push('primaryContact.name', 'Enter the primary contact name.', label);
      if (req && blank(c.designation)) push('primaryContact.designation', 'Enter the primary contact designation.', label);
      if (blank(c.email)) { if (req) push('primaryContact.email', 'Enter the primary contact email.', label); }
      else if (!isValidEmail(c.email)) push('primaryContact.email', 'Enter a valid email address, e.g. name@organisation.org.', label);
      if (blank(c.phone)) { if (req) push('primaryContact.phone', 'Enter the primary contact phone number.', label); }
      else if (!isValidPhone(c.phone)) push('primaryContact.phone', 'Include the country code, e.g. +91 98765 43210.', label);
      return;
    }
    case 'partners': {
      (v || []).forEach((p, i) => {
        if (!blank(p.contactEmail) && !isValidEmail(p.contactEmail)) push(`partners.${i}.contactEmail`, `Partner ${i + 1}: enter a valid email address.`, label);
      });
      return;
    }
    case 'endDate': {
      if (data.ongoing) return;
      if (blank(data.endDate)) { if (req) push('endDate', 'Enter an end date or select "This initiative is ongoing".', label); return; }
      if (!blank(data.startDate) && data.endDate < data.startDate) push('endDate', 'The end date cannot be before the start date.', label);
      return;
    }
    case 'indicators': {
      (v || []).forEach((row, i) => {
        const touched = ['metric', 'baseline', 'result', 'unitPeriod', 'source', 'naExplanation'].some((k) => !blank(row[k])) || row.notAvailable;
        if (!touched) return;
        if (blank(row.metric)) push(`indicators.${i}.metric`, `Indicator ${i + 1}: name the indicator / metric.`, label);
        if (row.notAvailable && blank(row.naExplanation)) push(`indicators.${i}.naExplanation`, `Indicator ${i + 1}: explain why data is not available.`, label);
      });
      return;
    }
    case 'strongestEvidence': {
      (v || []).forEach((row, i) => {
        if (blank(row.title)) push(`strongestEvidence.${i}.title`, `Evidence ${i + 1}: enter a title.`, label);
        if (blank(row.description)) push(`strongestEvidence.${i}.description`, `Evidence ${i + 1}: enter a brief description.`, label);
        if (blank(row.reference)) push(`strongestEvidence.${i}.reference`, `Evidence ${i + 1}: enter a file name or link.`, label);
      });
      return;
    }
    case 'evidenceItems': {
      (v || []).forEach((item, i) => {
        const n = `Evidence item ${i + 1}`;
        if (blank(item.title)) push(`evidenceItems.${i}.title`, `${n}: enter an evidence title.`, 'A6. Evidence uploads and links');
        if (blank(item.type)) push(`evidenceItems.${i}.type`, `${n}: select an evidence type.`, 'A6. Evidence uploads and links');
        if (blank(item.period)) push(`evidenceItems.${i}.period`, `${n}: enter the date / period covered.`, 'A6. Evidence uploads and links');
        if (blank(item.supports)) push(`evidenceItems.${i}.supports`, `${n}: state which claim or criterion it supports.`, 'A6. Evidence uploads and links');
        if (blank(item.shareable)) push(`evidenceItems.${i}.shareable`, `${n}: indicate whether it is publicly shareable.`, 'A6. Evidence uploads and links');
        if (!item.file && blank(item.url)) push(`evidenceItems.${i}.url`, `${n}: select a file or enter a URL.`, 'A6. Evidence uploads and links');
        else if (!blank(item.url) && !isValidUrl(item.url)) push(`evidenceItems.${i}.url`, `${n}: enter a valid URL starting with https://.`, 'A6. Evidence uploads and links');
      });
      if (PROTOTYPE_POLICY.principalEvidenceRule === 'enforce' && (v || []).length === 0) {
        push('evidenceItems', 'Add at least one supporting document or evidence link for the principal results claim.', 'A6. Evidence uploads and links');
      }
      return;
    }
    case 'designationDate': {
      if (req && blank(data.signatoryDesignation)) push('signatoryDesignation', 'Enter the signatory designation.', label);
      if (req && blank(data.signatoryDate)) push('signatoryDate', 'Enter the date.', label);
      return;
    }
    default:
      break;
  }

  if (blank(v)) {
    if (req) push(field.id, field.type === 'radio' || field.type === 'category' ? 'Select an option.' : 'This field is required.', label);
    return;
  }
  if (field.type === 'email' && !isValidEmail(v)) push(field.id, 'Enter a valid email address, e.g. name@organisation.org.', label);
  if (field.type === 'url' && !isValidUrl(v)) push(field.id, 'Enter a valid URL starting with https://.', label);
  if (field.type === 'tel' && !isValidPhone(v)) push(field.id, 'Include the country code, e.g. +91 98765 43210.', label);
  const w = wordLimitError(v, field.maxWords);
  if (w) push(field.id, w, label);
};

export const validateCategory = (data, push) => {
  const cat = getCategory(data.categoryId);
  if (!cat) return;
  const answers = data.categoryAnswers[cat.id] || {};
  cat.questions.forEach((q, i) => {
    const key = `categoryAnswers.${cat.id}.${q.id}`;
    const label = `Category Q${i + 1}. ${q.label}`;
    if (blank(answers[q.id])) { if (q.required) push(key, 'This field is required.', label); return; }
    const w = wordLimitError(answers[q.id], q.maxWords);
    if (w) push(key, w, label);
  });
};

export const validateSection = (sectionId, data) => {
  const errors = [];
  const push = (key, message, label) => errors.push({ key, message, label });
  if (sectionId === 'CATEGORY') validateCategory(data, push);
  else getSection(sectionId).fields.filter((f) => isVisible(f, data)).forEach((f) => validateField(f, data, push));
  return errors;
};

export const validateStep = (stepId, data) => {
  const step = FORM_STEPS.find((s) => s.id === stepId);
  return step.sections.flatMap((s) => validateSection(s, data));
};

export const validateAll = (data) => FORM_STEPS.flatMap((s) => validateStep(s.id, data));

export const errorsToMap = (list) => list.reduce((m, e) => (m[e.key] ? m : { ...m, [e.key]: e.message }), {});

// Responses that should be surfaced for IRSA review (no automatic rejection is applied)
export const getReviewFlags = (data) => {
  const flags = [];
  getSection('A7').fields.filter((f) => f.declaration).forEach((f) => {
    if (data[f.id] && data[f.id] !== 'Yes') flags.push(`Declaration ${f.num} (${f.label}) answered "${data[f.id]}" — flagged for IRSA review.`);
  });
  if (data.nomineeConfirmed === 'No') flags.push('Third-party nominee has not yet confirmed agreement — confirmation should be completed before final evaluation.');
  if (PROTOTYPE_POLICY.principalEvidenceRule === 'warn' && data.evidenceItems.length === 0)
    flags.push('No A6 evidence items added. The pack requires at least one supporting document or evidence link for the principal results claim "where available" — enforcement is a pending policy decision.');
  return flags;
};

// Keep the full section list accessible to other modules
export { COMMON_SECTIONS };
