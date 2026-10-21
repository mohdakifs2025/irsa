import React, { useState } from 'react';
import { Plus, Trash2, FileText, Link2, Paperclip, X, Info } from 'lucide-react';
import { EVIDENCE_GUIDANCE, EVIDENCE_TYPES, PROTOTYPE_POLICY } from '../../data/nominationFormConfig';
import { emptyEvidenceItem, emptyIndicator, emptyPartner, fieldDomId } from '../../utils/nominationValidation';
import { FieldError, RadioGroup, SmallButton, TextArea, TextInput, inputClass } from './FormControls';

const MiniLabel = ({ htmlFor, children, required }) => (
  <label htmlFor={htmlFor} className="block text-xs font-semibold text-neutral-700 mb-1">
    {children}
    {required && <span className="text-red-600 ml-0.5" aria-hidden="true">*</span>}
  </label>
);

const updateRow = (rows, index, patch) => rows.map((r, i) => (i === index ? { ...r, ...patch } : r));

// ---------------------------------------------------------------------------
// Q16 — Partners (lead applicant + named partner contacts)
// ---------------------------------------------------------------------------
export function PartnersList({ value, onChange, errors }) {
  const rows = value || [];
  return (
    <div className="space-y-3">
      {rows.map((p, i) => {
        const k = (f) => `partners.${i}.${f}`;
        return (
          <div key={p.id} className="border border-neutral-200 rounded-md p-4 space-y-3 bg-neutral-50/50">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Partner {i + 1}</span>
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer">
                  <input
                    type="radio"
                    name="lead-applicant"
                    checked={!!p.isLead}
                    onChange={() => onChange(rows.map((r, j) => ({ ...r, isLead: j === i })))}
                    className="accent-[#111111]"
                  />
                  Lead applicant
                </label>
                {rows.length > 1 && (
                  <SmallButton variant="danger" icon={Trash2} onClick={() => onChange(rows.filter((_, j) => j !== i))} aria-label={`Remove partner ${i + 1}`}>
                    Remove
                  </SmallButton>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <MiniLabel htmlFor={fieldDomId(k('name'))}>Partner organisation</MiniLabel>
                <TextInput fieldKey={k('name')} value={p.name} onChange={(v) => onChange(updateRow(rows, i, { name: v }))} />
              </div>
              <div>
                <MiniLabel htmlFor={fieldDomId(k('role'))}>Role in the initiative</MiniLabel>
                <TextInput fieldKey={k('role')} value={p.role} onChange={(v) => onChange(updateRow(rows, i, { role: v }))} />
              </div>
              <div>
                <MiniLabel htmlFor={fieldDomId(k('contactName'))}>Named partner contact</MiniLabel>
                <TextInput fieldKey={k('contactName')} value={p.contactName} onChange={(v) => onChange(updateRow(rows, i, { contactName: v }))} />
              </div>
              <div>
                <MiniLabel htmlFor={fieldDomId(k('contactEmail'))}>Contact email</MiniLabel>
                <TextInput fieldKey={k('contactEmail')} type="email" value={p.contactEmail} error={errors[k('contactEmail')]} onChange={(v) => onChange(updateRow(rows, i, { contactEmail: v }))} />
                <FieldError id={fieldDomId(k('contactEmail'))} message={errors[k('contactEmail')]} />
              </div>
            </div>
          </div>
        );
      })}
      <SmallButton icon={Plus} onClick={() => onChange([...rows, emptyPartner()])}>Add partner</SmallButton>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Q27 — Indicator table (responsive: stacked cards on mobile, 5-column grid on desktop)
// ---------------------------------------------------------------------------
const INDICATOR_COLS = [
  { key: 'metric', label: 'Indicator / metric' },
  { key: 'baseline', label: 'Baseline' },
  { key: 'result', label: 'Result achieved' },
  { key: 'unitPeriod', label: 'Unit and period' },
  { key: 'source', label: 'Data source / evidence' },
];

export function IndicatorTable({ value, onChange, errors }) {
  const rows = value || [];
  return (
    <div className="space-y-3">
      <div className="hidden lg:grid grid-cols-5 gap-3 px-4 text-[11px] font-bold uppercase tracking-wider text-neutral-500">
        {INDICATOR_COLS.map((c) => <span key={c.key}>{c.label}</span>)}
      </div>
      {rows.map((row, i) => {
        const k = (f) => `indicators.${i}.${f}`;
        return (
          <div key={row.id} className="border border-neutral-200 rounded-md p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Indicator {i + 1}</span>
              {rows.length > 1 && (
                <SmallButton variant="danger" icon={Trash2} onClick={() => onChange(rows.filter((_, j) => j !== i))} aria-label={`Remove indicator ${i + 1}`}>
                  Remove
                </SmallButton>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {INDICATOR_COLS.map((c) => (
                <div key={c.key}>
                  <label htmlFor={fieldDomId(k(c.key))} className="lg:sr-only block text-xs font-semibold text-neutral-700 mb-1">{c.label}</label>
                  <TextInput
                    fieldKey={k(c.key)}
                    value={row[c.key]}
                    error={errors[k(c.key)]}
                    disabled={row.notAvailable && c.key !== 'metric'}
                    placeholder={row.notAvailable && c.key !== 'metric' ? 'Not available' : ''}
                    onChange={(v) => onChange(updateRow(rows, i, { [c.key]: v }))}
                  />
                  <FieldError id={fieldDomId(k(c.key))} message={errors[k(c.key)]} />
                </div>
              ))}
            </div>
            <label className="inline-flex items-center gap-2 text-xs font-semibold cursor-pointer">
              <input
                type="checkbox"
                checked={row.notAvailable}
                onChange={(e) => onChange(updateRow(rows, i, { notAvailable: e.target.checked }))}
                className="accent-[#111111] w-4 h-4"
              />
              Data not available for this indicator
            </label>
            {row.notAvailable && (
              <div>
                <MiniLabel htmlFor={fieldDomId(k('naExplanation'))} required>Explain why the data is not available</MiniLabel>
                <TextArea fieldKey={k('naExplanation')} rows={2} value={row.naExplanation} error={errors[k('naExplanation')]} onChange={(v) => onChange(updateRow(rows, i, { naExplanation: v }))} />
                <FieldError id={fieldDomId(k('naExplanation'))} message={errors[k('naExplanation')]} />
              </div>
            )}
          </div>
        );
      })}
      <SmallButton icon={Plus} onClick={() => onChange([...rows, emptyIndicator()])}>Add indicator row</SmallButton>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Q32 — Three strongest pieces of evidence
// ---------------------------------------------------------------------------
export function StrongestEvidence({ value, onChange, errors }) {
  const rows = value || [];
  return (
    <div className="space-y-3">
      {rows.map((row, i) => {
        const k = (f) => `strongestEvidence.${i}.${f}`;
        return (
          <div key={i} className="border border-neutral-200 rounded-md p-4 grid grid-cols-1 md:grid-cols-12 gap-3">
            <div className="md:col-span-12 text-xs font-bold uppercase tracking-wider text-neutral-500">Evidence {i + 1}</div>
            <div className="md:col-span-4">
              <MiniLabel htmlFor={fieldDomId(k('title'))} required>Title</MiniLabel>
              <TextInput fieldKey={k('title')} value={row.title} error={errors[k('title')]} required onChange={(v) => onChange(updateRow(rows, i, { title: v }))} />
              <FieldError id={fieldDomId(k('title'))} message={errors[k('title')]} />
            </div>
            <div className="md:col-span-5">
              <MiniLabel htmlFor={fieldDomId(k('description'))} required>Brief description</MiniLabel>
              <TextInput fieldKey={k('description')} value={row.description} error={errors[k('description')]} required onChange={(v) => onChange(updateRow(rows, i, { description: v }))} />
              <FieldError id={fieldDomId(k('description'))} message={errors[k('description')]} />
            </div>
            <div className="md:col-span-3">
              <MiniLabel htmlFor={fieldDomId(k('reference'))} required>File / link</MiniLabel>
              <TextInput fieldKey={k('reference')} value={row.reference} error={errors[k('reference')]} required placeholder="File name or URL" onChange={(v) => onChange(updateRow(rows, i, { reference: v }))} />
              <FieldError id={fieldDomId(k('reference'))} message={errors[k('reference')]} />
            </div>
          </div>
        );
      })}
      <p className="text-xs text-neutral-500">Tip: you can reference an item added in section A6 by its title.</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// A6 — Evidence items (local file selection only; nothing is uploaded)
// ---------------------------------------------------------------------------
const formatSize = (b) => (b > 1024 * 1024 ? `${(b / 1024 / 1024).toFixed(1)} MB` : `${Math.max(1, Math.round(b / 1024))} KB`);

function EvidenceItem({ item, index, onPatch, onRemove, errors }) {
  const [fileError, setFileError] = useState('');
  const k = (f) => `evidenceItems.${index}.${f}`;

  const handleFile = (e) => {
    const f = e.target.files?.[0];
    e.target.value = '';
    if (!f) return;
    const ext = `.${f.name.split('.').pop().toLowerCase()}`;
    if (!PROTOTYPE_POLICY.acceptedFileExtensions.includes(ext)) {
      setFileError(`File type ${ext} is not accepted in this prototype.`);
      return;
    }
    if (f.size > PROTOTYPE_POLICY.maxFileSizeMB * 1024 * 1024) {
      setFileError(`File exceeds the ${PROTOTYPE_POLICY.maxFileSizeMB} MB prototype limit.`);
      return;
    }
    setFileError('');
    // Only metadata is kept in memory. The file is never read, stored or transmitted.
    onPatch({ file: { name: f.name, size: f.size, type: f.type || ext } });
  };

  const sourceLabel = item.file && item.url ? 'File and URL' : item.file ? 'Local file selected' : item.url ? 'URL' : 'No source yet';

  return (
    <div className="border border-neutral-200 rounded-md p-4 sm:p-5 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Evidence item {index + 1}</span>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-semibold bg-neutral-100 text-neutral-700 px-2 py-1 rounded">Source: {sourceLabel}</span>
          <SmallButton variant="danger" icon={Trash2} onClick={onRemove} aria-label={`Remove evidence item ${index + 1}`}>Remove</SmallButton>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <MiniLabel htmlFor={fieldDomId(k('title'))} required>Evidence title</MiniLabel>
          <TextInput fieldKey={k('title')} value={item.title} error={errors[k('title')]} onChange={(v) => onPatch({ title: v })} />
          <FieldError id={fieldDomId(k('title'))} message={errors[k('title')]} />
        </div>
        <div>
          <MiniLabel htmlFor={fieldDomId(k('type'))} required>Evidence type</MiniLabel>
          <select id={fieldDomId(k('type'))} value={item.type} onChange={(e) => onPatch({ type: e.target.value })} aria-invalid={!!errors[k('type')]} className={inputClass(!!errors[k('type')])}>
            <option value="">Select evidence type…</option>
            <optgroup label="Recommended">
              {EVIDENCE_GUIDANCE.recommended.map((t) => <option key={t}>{t}</option>)}
            </optgroup>
            <optgroup label="Optional">
              {EVIDENCE_GUIDANCE.optional.map((t) => <option key={t}>{t}</option>)}
            </optgroup>
          </select>
          <FieldError id={fieldDomId(k('type'))} message={errors[k('type')]} />
        </div>
        <div>
          <MiniLabel htmlFor={fieldDomId(k('period'))} required>Date / period covered</MiniLabel>
          <TextInput fieldKey={k('period')} value={item.period} error={errors[k('period')]} placeholder="e.g. Apr 2024 – Mar 2025" onChange={(v) => onPatch({ period: v })} />
          <FieldError id={fieldDomId(k('period'))} message={errors[k('period')]} />
        </div>
        <div>
          <MiniLabel htmlFor={fieldDomId(k('supports'))} required>Which claim or criterion it supports</MiniLabel>
          <TextInput fieldKey={k('supports')} value={item.supports} error={errors[k('supports')]} placeholder="e.g. Principal results claim (Q26)" onChange={(v) => onPatch({ supports: v })} />
          <FieldError id={fieldDomId(k('supports'))} message={errors[k('supports')]} />
        </div>
      </div>

      <fieldset>
        <legend className="block text-xs font-semibold text-neutral-700 mb-1">Is it publicly shareable?<span className="text-red-600 ml-0.5" aria-hidden="true">*</span></legend>
        <div className="max-w-xs">
          <RadioGroup fieldKey={k('shareable')} name={`shareable-${item.id}`} options={['Yes', 'No']} columns={2} compact value={item.shareable} error={errors[k('shareable')]} onChange={(v) => onPatch({ shareable: v })} />
        </div>
        <FieldError id={fieldDomId(k('shareable'))} message={errors[k('shareable')]} />
      </fieldset>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <span className="block text-xs font-semibold text-neutral-700 mb-1">File (local selection only)</span>
          {item.file ? (
            <div className="flex items-center justify-between gap-2 border border-neutral-300 rounded px-3 py-2.5 text-sm bg-[#FFF8E1]">
              <span className="flex items-center gap-2 min-w-0">
                <FileText className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span className="truncate font-medium">{item.file.name}</span>
                <span className="text-xs text-neutral-500 shrink-0">{formatSize(item.file.size)}</span>
              </span>
              <button type="button" onClick={() => onPatch({ file: null })} className="p-1 rounded hover:bg-black/5 cursor-pointer" aria-label={`Clear file ${item.file.name}`}>
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <label className="flex items-center gap-2 border border-dashed border-neutral-400 rounded px-3 py-2.5 text-sm cursor-pointer hover:border-[#111111] focus-within:ring-2 focus-within:ring-[#FFC629]">
              <Paperclip className="w-4 h-4" aria-hidden="true" />
              <span>Choose file…</span>
              <input type="file" className="sr-only" accept={PROTOTYPE_POLICY.acceptedFileExtensions.join(',')} onChange={handleFile} />
            </label>
          )}
          {fileError && <p className="mt-1.5 text-xs font-medium text-red-600" role="alert">{fileError}</p>}
        </div>
        <div>
          <label htmlFor={fieldDomId(k('url'))} className="block text-xs font-semibold text-neutral-700 mb-1">
            <Link2 className="inline w-3.5 h-3.5 mr-1" aria-hidden="true" />Evidence URL
          </label>
          <TextInput fieldKey={k('url')} type="url" value={item.url} error={errors[k('url')]} placeholder="https://" onChange={(v) => onPatch({ url: v })} />
          <FieldError id={fieldDomId(k('url'))} message={errors[k('url')]} />
        </div>
      </div>
    </div>
  );
}

export function EvidenceItems({ value, onChange, errors }) {
  const items = value || [];
  return (
    <div className="space-y-5" id={fieldDomId('evidenceItems')} tabIndex={-1}>
      <div className="rounded-md border border-neutral-200 bg-neutral-50 p-4 sm:p-5 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs leading-relaxed">
        <div>
          <p className="font-bold uppercase tracking-wider text-[11px] text-[#111111] mb-1.5">Required</p>
          <p className="text-neutral-700">{EVIDENCE_GUIDANCE.required}</p>
          <p className="mt-2 text-[11px] text-neutral-500 italic">Enforcement of this rule is a pending IRSA policy decision.</p>
        </div>
        <div>
          <p className="font-bold uppercase tracking-wider text-[11px] text-[#111111] mb-1.5">Recommended</p>
          <ul className="list-disc pl-4 space-y-0.5 text-neutral-700">{EVIDENCE_GUIDANCE.recommended.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
        <div>
          <p className="font-bold uppercase tracking-wider text-[11px] text-[#111111] mb-1.5">Optional</p>
          <ul className="list-disc pl-4 space-y-0.5 text-neutral-700">{EVIDENCE_GUIDANCE.optional.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
      </div>

      <div className="flex items-start gap-2 rounded-md border border-[#FFC629] bg-[#FFF8E1] p-3 text-xs text-[#111111]">
        <Info className="w-4 h-4 shrink-0 mt-px" aria-hidden="true" />
        <p>
          <strong>Prototype only:</strong> files are not uploaded. Selecting a file records only its name, type and size in this browser tab for demonstration.
          Prototype limits: max {PROTOTYPE_POLICY.maxFileSizeMB} MB; {PROTOTYPE_POLICY.acceptedFileExtensions.join(', ')} (final limits pending approval).
        </p>
      </div>

      {items.length === 0 && <p className="text-sm text-neutral-500">No evidence items added yet.</p>}
      {items.map((item, i) => (
        <EvidenceItem
          key={item.id}
          item={item}
          index={i}
          errors={errors}
          onPatch={(patch) => onChange(updateRow(items, i, patch))}
          onRemove={() => onChange(items.filter((_, j) => j !== i))}
        />
      ))}
      <SmallButton variant="yellow" icon={Plus} onClick={() => onChange([...items, emptyEvidenceItem()])}>Add evidence item</SmallButton>
      <FieldError id={fieldDomId('evidenceItems')} message={errors.evidenceItems} />
    </div>
  );
}

export { EVIDENCE_TYPES };
