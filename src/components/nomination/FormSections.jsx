import React, { useState } from 'react';
import { AlertTriangle, ChevronDown, ClipboardList, ShieldAlert } from 'lucide-react';
import {
  AWARD_FAMILIES,
  NOMINATION_CATEGORIES,
  PRIVACY_PLACEHOLDER,
  PROPOSED_CATEGORY_NOTE,
  getCategory,
  getFamily,
  getSection,
} from '../../data/nominationFormConfig';
import { fieldDomId, isVisible } from '../../utils/nominationValidation';
import { FieldShell, RadioGroup, SectionCard, TextArea, TextInput, WordCount, inputClass, FieldError } from './FormControls';
import { EvidenceItems, IndicatorTable, PartnersList, StrongestEvidence } from './RepeatableFields';

export const ProposedBadge = ({ className = '' }) => (
  <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-[#111111] text-[#FFC629] px-2 py-0.5 rounded ${className}`}>
    Proposed · provisional
  </span>
);

// ---------------------------------------------------------------------------
// Category selector (Q2) with family / purpose context
// ---------------------------------------------------------------------------
export function CategoryContext({ category, compact = false }) {
  if (!category) return null;
  const family = getFamily(category.familyId);
  return (
    <div className="rounded-md border border-neutral-200 bg-neutral-50 p-4 space-y-2 text-sm">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">{family?.name}</span>
        {category.proposed && <ProposedBadge />}
      </div>
      <p className="font-semibold text-[#111111]">{category.name}</p>
      <p className="text-neutral-700 leading-relaxed"><strong>Category purpose:</strong> {category.purpose}</p>
      {!compact && <p className="text-neutral-700 leading-relaxed"><strong>What this category especially assesses:</strong> {category.assesses}</p>}
      {category.proposed && (
        <p className="flex items-start gap-1.5 text-xs text-[#7A5600] bg-[#FFF8E1] border border-[#FFC629] rounded p-2">
          <AlertTriangle className="w-3.5 h-3.5 mt-px shrink-0" aria-hidden="true" />
          {PROPOSED_CATEGORY_NOTE}
        </p>
      )}
    </div>
  );
}

function CategorySelector({ field, value, onChange, error }) {
  return (
    <div className="space-y-3">
      <select
        id={fieldDomId(field.id)}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-required="true"
        className={inputClass(!!error)}
      >
        <option value="">Select a category…</option>
        {AWARD_FAMILIES.map((fam) => (
          <optgroup key={fam.id} label={fam.name}>
            {NOMINATION_CATEGORIES.filter((c) => c.familyId === fam.id).map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}{c.proposed ? ' (proposed)' : ''}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
      <CategoryContext category={getCategory(value)} />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Generic field renderer (driven by COMMON_SECTIONS config)
// ---------------------------------------------------------------------------
function PrivacyPlaceholder() {
  const [open, setOpen] = useState(false);
  return (
    <div className="text-xs">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="inline-flex items-center gap-1 font-semibold underline decoration-[#FFC629] decoration-2 underline-offset-2 cursor-pointer"
      >
        IRSA privacy notice (prototype placeholder)
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      {open && <p className="mt-2 p-3 rounded border border-dashed border-neutral-400 bg-neutral-50 text-neutral-700 leading-relaxed">{PRIVACY_PLACEHOLDER}</p>}
    </div>
  );
}

export function FieldRenderer({ field, data, errors, setField }) {
  const err = errors[field.id];
  const common = { fieldKey: field.id, num: field.num, label: field.label, required: field.required, helper: field.helper };

  switch (field.type) {
    case 'category':
      return (
        <FieldShell {...common} error={err}>
          <CategorySelector field={field} value={data.categoryId} error={err} onChange={(v) => setField('categoryId', v)} />
        </FieldShell>
      );
    case 'radio':
      if (field.declaration) {
        return (
          <FieldShell {...common} helper={null} error={err} asGroup>
            <p className="text-sm text-neutral-700 leading-relaxed border-l-2 border-[#FFC629] pl-3">{field.statement}</p>
            {field.privacy && <PrivacyPlaceholder />}
            <RadioGroup fieldKey={field.id} options={field.options} value={data[field.id]} error={err} onChange={(v) => setField(field.id, v)} compact />
            {data[field.id] && data[field.id] !== 'Yes' && (
              <p className="flex items-center gap-1.5 text-xs font-medium text-[#7A5600]">
                <ShieldAlert className="w-3.5 h-3.5" aria-hidden="true" /> This response will be flagged for IRSA review.
              </p>
            )}
          </FieldShell>
        );
      }
      return (
        <FieldShell {...common} error={err} asGroup>
          <RadioGroup fieldKey={field.id} options={field.options} columns={field.columns} value={data[field.id]} error={err} onChange={(v) => setField(field.id, v)} />
        </FieldShell>
      );
    case 'textarea':
      return (
        <FieldShell {...common} error={err} counter={<WordCount value={data[field.id]} maxWords={field.maxWords} />}>
          <TextArea fieldKey={field.id} rows={field.rows || 5} value={data[field.id]} error={err} helper={field.helper} required={field.required} onChange={(v) => setField(field.id, v)} />
        </FieldShell>
      );
    case 'contactGroup': {
      const c = data.primaryContact;
      const sub = [
        { k: 'name', label: 'Name', type: 'text' },
        { k: 'designation', label: 'Designation', type: 'text' },
        { k: 'email', label: 'Email', type: 'email' },
        { k: 'phone', label: 'Phone (with country code)', type: 'tel', placeholder: '+91 98765 43210' },
      ];
      return (
        <FieldShell {...common} asGroup>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {sub.map((s) => {
              const key = `primaryContact.${s.k}`;
              return (
                <div key={s.k}>
                  <label htmlFor={fieldDomId(key)} className="block text-xs font-semibold text-neutral-700 mb-1">{s.label}<span className="text-red-600 ml-0.5" aria-hidden="true">*</span></label>
                  <TextInput fieldKey={key} type={s.type} placeholder={s.placeholder} value={c[s.k]} error={errors[key]} required onChange={(v) => setField('primaryContact', { ...c, [s.k]: v })} />
                  <FieldError id={fieldDomId(key)} message={errors[key]} />
                </div>
              );
            })}
          </div>
        </FieldShell>
      );
    }
    case 'partners':
      return (
        <FieldShell {...common} asGroup>
          <PartnersList value={data.partners} errors={errors} onChange={(v) => setField('partners', v)} />
        </FieldShell>
      );
    case 'endDate':
      return (
        <FieldShell {...common} error={errors.endDate}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="sm:w-60">
              <TextInput fieldKey="endDate" type="date" value={data.endDate} min={data.startDate || undefined} disabled={data.ongoing} error={errors.endDate} helper={field.helper} onChange={(v) => setField('endDate', v)} />
            </div>
            <label className="inline-flex items-center gap-2 text-sm font-medium cursor-pointer">
              <input
                type="checkbox"
                checked={data.ongoing}
                onChange={(e) => { setField('ongoing', e.target.checked); if (e.target.checked) setField('endDate', ''); }}
                className="accent-[#111111] w-4 h-4"
              />
              This initiative is ongoing
            </label>
          </div>
        </FieldShell>
      );
    case 'date':
      return (
        <FieldShell {...common} error={err}>
          <div className="sm:w-60">
            <TextInput fieldKey={field.id} type="date" value={data[field.id]} error={err} helper={field.helper} required={field.required} onChange={(v) => setField(field.id, v)} />
          </div>
        </FieldShell>
      );
    case 'indicators':
      return (
        <FieldShell {...common} asGroup>
          <IndicatorTable value={data.indicators} errors={errors} onChange={(v) => setField('indicators', v)} />
        </FieldShell>
      );
    case 'strongestEvidence':
      return (
        <FieldShell {...common} asGroup>
          <StrongestEvidence value={data.strongestEvidence} errors={errors} onChange={(v) => setField('strongestEvidence', v)} />
        </FieldShell>
      );
    case 'evidenceItems':
      return <EvidenceItems value={data.evidenceItems} errors={errors} onChange={(v) => setField('evidenceItems', v)} />;
    case 'designationDate':
      return (
        <FieldShell {...common} asGroup>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor={fieldDomId('signatoryDesignation')} className="block text-xs font-semibold text-neutral-700 mb-1">Designation<span className="text-red-600 ml-0.5" aria-hidden="true">*</span></label>
              <TextInput fieldKey="signatoryDesignation" value={data.signatoryDesignation} error={errors.signatoryDesignation} required onChange={(v) => setField('signatoryDesignation', v)} />
              <FieldError id={fieldDomId('signatoryDesignation')} message={errors.signatoryDesignation} />
            </div>
            <div>
              <label htmlFor={fieldDomId('signatoryDate')} className="block text-xs font-semibold text-neutral-700 mb-1">Date<span className="text-red-600 ml-0.5" aria-hidden="true">*</span></label>
              <TextInput fieldKey="signatoryDate" type="date" value={data.signatoryDate} error={errors.signatoryDate} required onChange={(v) => setField('signatoryDate', v)} />
              <FieldError id={fieldDomId('signatoryDate')} message={errors.signatoryDate} />
            </div>
          </div>
        </FieldShell>
      );
    default:
      return (
        <FieldShell {...common} error={err}>
          <TextInput fieldKey={field.id} type={field.type} placeholder={field.placeholder} autoComplete={field.autoComplete} value={data[field.id]} error={err} helper={field.helper} required={field.required} onChange={(v) => setField(field.id, v)} />
        </FieldShell>
      );
  }
}

// ---------------------------------------------------------------------------
// Section renderers
// ---------------------------------------------------------------------------
export function CommonSection({ sectionId, data, errors, setField }) {
  const section = getSection(sectionId);
  return (
    <SectionCard id={`section-${sectionId}`} title={section.title}>
      {section.fields.filter((f) => isVisible(f, data)).map((f) => (
        <FieldRenderer key={f.id} field={f} data={data} errors={errors} setField={setField} />
      ))}
    </SectionCard>
  );
}

export function CategorySection({ data, errors, setCategoryAnswer }) {
  const cat = getCategory(data.categoryId);
  if (!cat) {
    return (
      <SectionCard id="section-CATEGORY" title="Category-specific questions">
        <p className="text-sm text-neutral-600">Select an award category in step 1 (question 2) to load its five category-specific questions.</p>
      </SectionCard>
    );
  }
  const answers = data.categoryAnswers[cat.id] || {};
  return (
    <SectionCard
      id="section-CATEGORY"
      title={`Category Nomination Form ${cat.number}: ${cat.name}`}
      badge={cat.proposed ? <ProposedBadge /> : null}
      intro={
        <div className="space-y-4">
          <CategoryContext category={cat} />
          <p className="text-xs text-neutral-500 italic">{cat.intro}</p>
        </div>
      }
    >
      {cat.questions.map((q, i) => {
        const key = `categoryAnswers.${cat.id}.${q.id}`;
        return (
          <FieldShell key={key} fieldKey={key} num={i + 1} label={q.label} required={q.required} helper={q.helper} error={errors[key]} counter={<WordCount value={answers[q.id]} maxWords={q.maxWords} />}>
            <TextArea fieldKey={key} rows={5} value={answers[q.id]} error={errors[key]} helper={q.helper} required={q.required} onChange={(v) => setCategoryAnswer(cat.id, q.id, v)} />
          </FieldShell>
        );
      })}

      <div className="rounded-md border border-neutral-200 p-4 sm:p-5">
        <p className="flex items-center gap-2 text-sm font-bold text-[#111111] mb-2">
          <ClipboardList className="w-4 h-4 text-[#111111]" aria-hidden="true" /> Suggested supporting evidence
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-700">
          {cat.evidence.map((e) => <li key={e}>{e}</li>)}
        </ul>
        <p className="mt-3 text-xs text-neutral-500">Add these as evidence items in step 4 (A6).</p>
      </div>
    </SectionCard>
  );
}
