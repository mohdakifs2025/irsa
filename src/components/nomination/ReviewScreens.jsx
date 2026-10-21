import React from 'react';
import { Check, Pencil, AlertTriangle, CheckCircle2, FileText, Link2, RotateCcw, Info } from 'lucide-react';
import { FORM_STEPS, getCategory, getFamily, getSection } from '../../data/nominationFormConfig';
import { isVisible } from '../../utils/nominationValidation';
import { ProposedBadge } from './FormSections';

// ---------------------------------------------------------------------------
// Progress indicator
// ---------------------------------------------------------------------------
export function StepProgress({ current, maxReached, onJump }) {
  return (
    <nav aria-label="Nomination progress">
      <ol className="grid grid-cols-5 gap-1.5 sm:gap-3">
        {FORM_STEPS.map((s) => {
          const done = s.id < current;
          const active = s.id === current;
          const reachable = s.id <= maxReached;
          return (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => reachable && onJump(s.id)}
                disabled={!reachable}
                aria-current={active ? 'step' : undefined}
                className={`w-full text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC629] rounded ${reachable ? 'cursor-pointer' : 'cursor-not-allowed'}`}
              >
                <span className={`block h-1.5 rounded-full ${active || done ? 'bg-[#FFC629]' : 'bg-neutral-200'}`} />
                <span className="mt-2 flex items-center gap-1.5">
                  <span className={`w-5 h-5 shrink-0 rounded-full flex items-center justify-center text-[10px] font-bold ${active ? 'bg-[#111111] text-[#FFC629]' : done ? 'bg-[#FFC629] text-[#111111]' : 'bg-neutral-200 text-neutral-500'}`}>
                    {done ? <Check className="w-3 h-3" aria-hidden="true" /> : s.id}
                  </span>
                  <span className={`hidden md:block text-xs font-semibold leading-tight ${active ? 'text-[#111111]' : 'text-neutral-500'}`}>{s.short}</span>
                </span>
                <span className="sr-only">Step {s.id}: {s.title}{done ? ' (completed)' : ''}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

// ---------------------------------------------------------------------------
// Review helpers
// ---------------------------------------------------------------------------
const Missing = () => <span className="text-red-600 font-semibold">Missing — required</span>;
const NotProvided = () => <span className="text-neutral-400 italic">Not provided (optional)</span>;

const Row = ({ label, children }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 py-3 border-b border-neutral-100 last:border-0">
    <dt className="text-xs font-semibold text-neutral-500 leading-snug">{label}</dt>
    <dd className="sm:col-span-2 text-sm text-[#111111] whitespace-pre-wrap break-words">{children}</dd>
  </div>
);

const valueOrState = (v, required, missing) => {
  if (v === undefined || v === null || String(v).trim() === '') return required || missing ? <Missing /> : <NotProvided />;
  return v;
};

function ReviewGroup({ title, step, sectionAnchor, onEdit, children, missingCount }) {
  return (
    <section className="border border-neutral-200 rounded-lg">
      <header className="flex flex-wrap items-center justify-between gap-2 px-5 py-3 bg-neutral-50 border-b border-neutral-200 rounded-t-lg">
        <h3 className="text-sm sm:text-base font-bold text-[#111111] flex items-center gap-2">
          {title}
          {missingCount > 0 && <span className="text-[10px] font-bold uppercase bg-red-600 text-white px-1.5 py-0.5 rounded">{missingCount} missing</span>}
        </h3>
        <button
          type="button"
          onClick={() => onEdit(step, sectionAnchor)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded border border-neutral-300 hover:border-[#111111] bg-white cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC629]"
          aria-label={`Edit ${title}`}
        >
          <Pencil className="w-3.5 h-3.5" aria-hidden="true" /> Edit
        </button>
      </header>
      <dl className="px-5 py-1">{children}</dl>
    </section>
  );
}

const fmtDate = (d) => (d ? new Date(`${d}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '');

function renderSimpleField(f, data, errorMap) {
  const label = f.num ? `${f.num}. ${f.label}` : f.label;
  const missing = !!errorMap[f.id];
  let v = data[f.id];
  if (f.type === 'category') v = getCategory(v)?.name;
  if (f.type === 'date') v = fmtDate(v);
  return <Row key={f.id} label={label}>{valueOrState(v, false, missing)}</Row>;
}

const countMissing = (errorMap, prefixes) => Object.keys(errorMap).filter((k) => prefixes.some((p) => k === p || k.startsWith(`${p}.`))).length;

// ---------------------------------------------------------------------------
// Review step
// ---------------------------------------------------------------------------
export function ReviewStep({ data, errorMap, flags, onEdit }) {
  const cat = getCategory(data.categoryId);
  const sec = (id) => getSection(id).fields.filter((f) => isVisible(f, data));
  const ids = (id) => sec(id).map((f) => f.id);
  const simple = (id, only) =>
    sec(id)
      .filter((f) => !only || only.includes(f.num))
      .filter((f) => ['text', 'email', 'tel', 'url', 'textarea', 'date', 'radio', 'category'].includes(f.type))
      .map((f) => renderSimpleField(f, data, errorMap));

  const answers = cat ? data.categoryAnswers[cat.id] || {} : {};
  const missingTotal = Object.keys(errorMap).length;

  return (
    <div className="space-y-6">
      {missingTotal > 0 ? (
        <div className="flex items-start gap-3 rounded-md border border-red-300 bg-red-50 p-4 text-sm text-red-800" role="alert">
          <AlertTriangle className="w-5 h-5 shrink-0" aria-hidden="true" />
          <p><strong>{missingTotal} required or invalid {missingTotal === 1 ? 'item needs' : 'items need'} attention</strong> before you can submit. Use the Edit buttons to return to the relevant section.</p>
        </div>
      ) : (
        <div className="flex items-start gap-3 rounded-md border border-green-300 bg-green-50 p-4 text-sm text-green-800">
          <CheckCircle2 className="w-5 h-5 shrink-0" aria-hidden="true" />
          <p>All required fields are complete. Review your answers below, then submit the test nomination.</p>
        </div>
      )}

      {flags.length > 0 && (
        <div className="rounded-md border border-[#FFC629] bg-[#FFF8E1] p-4 text-sm">
          <p className="font-bold text-[#111111] mb-2 flex items-center gap-2"><Info className="w-4 h-4" aria-hidden="true" /> Responses flagged for IRSA review (no automatic decision is made)</p>
          <ul className="list-disc pl-5 space-y-1 text-neutral-800">{flags.map((f) => <li key={f}>{f}</li>)}</ul>
        </div>
      )}

      <ReviewGroup title="Nomination route and selected category" step={1} sectionAnchor="section-A1" onEdit={onEdit} missingCount={countMissing(errorMap, ids('A1'))}>
        {simple('A1')}
        {cat && <Row label="Award family">{getFamily(cat.familyId)?.name} {cat.proposed && <ProposedBadge className="ml-2 align-middle" />}</Row>}
      </ReviewGroup>

      <ReviewGroup title="Nominator details" step={1} sectionAnchor="section-A2" onEdit={onEdit} missingCount={countMissing(errorMap, ids('A2'))}>
        {simple('A2')}
      </ReviewGroup>

      <ReviewGroup title="Nominee / organisation details" step={1} sectionAnchor="section-A3" onEdit={onEdit} missingCount={countMissing(errorMap, [...ids('A3'), 'primaryContact'])}>
        {simple('A3')}
        <Row label="14. Primary contact name, designation, email and phone">
          {['name', 'designation', 'email', 'phone'].map((k) => (
            <span key={k} className="block">{valueOrState(data.primaryContact[k], true, !!errorMap[`primaryContact.${k}`])}</span>
          ))}
        </Row>
        {isVisible(getSection('A3').fields.find((f) => f.id === 'partners'), data) && (
          <Row label="16. Partners and their roles">
            {data.partners.filter((p) => p.name || p.role).length === 0 ? <NotProvided /> : (
              <ul className="space-y-1">
                {data.partners.filter((p) => p.name || p.role).map((p) => (
                  <li key={p.id}>
                    <strong>{p.name || '—'}</strong>{p.isLead ? ' (lead applicant)' : ''} — {p.role || 'role not stated'}
                    {(p.contactName || p.contactEmail) && <span className="text-neutral-500"> · {p.contactName} {p.contactEmail}</span>}
                  </li>
                ))}
              </ul>
            )}
          </Row>
        )}
      </ReviewGroup>

      <ReviewGroup title="Initiative profile" step={2} sectionAnchor="section-A4" onEdit={onEdit} missingCount={countMissing(errorMap, ['initiativeName', 'summary', 'problem', 'intervention', 'activities'])}>
        {simple('A4', [17, 18, 19, 20, 25])}
      </ReviewGroup>

      <ReviewGroup title="Dates, locations and beneficiaries" step={2} sectionAnchor="section-A4" onEdit={onEdit} missingCount={countMissing(errorMap, ['startDate', 'endDate', 'locations', 'beneficiaries'])}>
        {simple('A4', [21])}
        <Row label="22. Implementation end date / ongoing status">
          {data.ongoing ? 'Ongoing' : valueOrState(fmtDate(data.endDate), true, !!errorMap.endDate)}
          {errorMap.endDate && data.endDate && <span className="block text-red-600 text-xs">{errorMap.endDate}</span>}
        </Row>
        {simple('A4', [23, 24])}
      </ReviewGroup>

      <ReviewGroup title="Results and indicators" step={3} sectionAnchor="section-A5" onEdit={onEdit} missingCount={countMissing(errorMap, ['whatChanged', 'indicators', 'measurement', 'limitations', 'sustainability', 'replication'])}>
        {simple('A5', [26])}
        <Row label="27. Indicators">
          {data.indicators.filter((r) => r.metric).length === 0 ? <NotProvided /> : (
            <ul className="space-y-2">
              {data.indicators.filter((r) => r.metric).map((r) => (
                <li key={r.id} className="border-l-2 border-[#FFC629] pl-3">
                  <strong>{r.metric}</strong>
                  {r.notAvailable ? (
                    <span className="block text-neutral-600">Data not available — {r.naExplanation}</span>
                  ) : (
                    <span className="block text-neutral-600">Baseline: {r.baseline || '—'} · Result: {r.result || '—'} · {r.unitPeriod || '—'} · Source: {r.source || '—'}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </Row>
        {simple('A5', [28, 29, 30, 31])}
      </ReviewGroup>

      <ReviewGroup
        title={cat ? `Category-specific answers — ${cat.name}` : 'Category-specific answers'}
        step={3}
        sectionAnchor="section-CATEGORY"
        onEdit={onEdit}
        missingCount={countMissing(errorMap, cat ? [`categoryAnswers.${cat.id}`] : [])}
      >
        {cat ? (
          <>
            <p className="text-xs text-neutral-500 py-3 border-b border-neutral-100">
              Only answers for the currently selected category are shown and would be submitted. {cat.proposed && <ProposedBadge className="ml-1" />}
            </p>
            {cat.questions.map((q, i) => (
              <Row key={q.id} label={`${i + 1}. ${q.label}`}>{valueOrState(answers[q.id], q.required, !!errorMap[`categoryAnswers.${cat.id}.${q.id}`])}</Row>
            ))}
          </>
        ) : (
          <Row label="Category"><Missing /></Row>
        )}
      </ReviewGroup>

      <ReviewGroup title="Evidence entries and links" step={4} sectionAnchor="section-A6" onEdit={onEdit} missingCount={countMissing(errorMap, ['evidenceItems', 'strongestEvidence'])}>
        <Row label="32. Three strongest pieces of evidence">
          <ol className="list-decimal pl-5 space-y-1">
            {data.strongestEvidence.map((e, i) => (
              <li key={i}>
                {e.title ? <><strong>{e.title}</strong> — {e.description || <Missing />} <span className="text-neutral-500">[{e.reference || 'no file/link'}]</span></> : <Missing />}
              </li>
            ))}
          </ol>
        </Row>
        <Row label="A6. Evidence items">
          {data.evidenceItems.length === 0 ? <NotProvided /> : (
            <ul className="space-y-2">
              {data.evidenceItems.map((it) => (
                <li key={it.id} className="border-l-2 border-[#FFC629] pl-3">
                  <strong>{it.title || 'Untitled'}</strong> <span className="text-neutral-500">· {it.type || 'type not set'} · {it.period || 'period not set'}</span>
                  <span className="block text-neutral-600">Supports: {it.supports || '—'} · Publicly shareable: {it.shareable || '—'}</span>
                  {it.file && <span className="flex items-center gap-1 text-neutral-700"><FileText className="w-3.5 h-3.5" aria-hidden="true" /> {it.file.name} (local selection, not uploaded)</span>}
                  {it.url && <span className="flex items-center gap-1 text-neutral-700 break-all"><Link2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" /> {it.url}</span>}
                </li>
              ))}
            </ul>
          )}
        </Row>
      </ReviewGroup>

      <ReviewGroup title="Declarations and authorised signatory" step={4} sectionAnchor="section-A7" onEdit={onEdit} missingCount={countMissing(errorMap, [...ids('A7'), 'signatoryDesignation', 'signatoryDate'])}>
        {sec('A7').filter((f) => f.declaration).map((f) => (
          <Row key={f.id} label={`${f.num}. ${f.label}`}>
            {valueOrState(data[f.id], true, !!errorMap[f.id])}
            {data[f.id] && data[f.id] !== 'Yes' && <span className="ml-2 text-[10px] font-bold uppercase bg-[#FFC629] px-1.5 py-0.5 rounded">Flagged for review</span>}
          </Row>
        ))}
        <Row label="38. Name of authorised signatory">{valueOrState(data.signatoryName, true, !!errorMap.signatoryName)}</Row>
        <Row label="39. Designation and date">
          {valueOrState(data.signatoryDesignation, true, !!errorMap.signatoryDesignation)}
          <span className="block">{valueOrState(fmtDate(data.signatoryDate), true, !!errorMap.signatoryDate)}</span>
        </Row>
      </ReviewGroup>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Confirmation (simulated)
// ---------------------------------------------------------------------------
export function ConfirmationScreen({ reference, data, submittedAt, onStartNew }) {
  const cat = getCategory(data.categoryId);
  return (
    <div className="max-w-3xl mx-auto space-y-6" role="status" aria-live="polite">
      <div className="text-center space-y-3">
        <div className="mx-auto w-14 h-14 rounded-full bg-[#FFC629] flex items-center justify-center">
          <Check className="w-7 h-7 text-[#111111]" aria-hidden="true" />
        </div>
        <span className="inline-block text-[11px] font-bold uppercase tracking-wider bg-[#111111] text-[#FFC629] px-2.5 py-1 rounded">Prototype demonstration</span>
        <h2 className="text-2xl sm:text-3xl font-black text-[#111111] tracking-tight">Test nomination completed</h2>
        <p className="text-sm text-neutral-600">The simulated submission passed all form checks.</p>
      </div>

      <div className="border border-neutral-200 rounded-lg divide-y divide-neutral-100">
        <div className="p-5 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Prototype reference</span>
          <span className="font-mono text-lg font-bold text-[#111111] bg-[#FFF8E1] border border-[#FFC629] px-3 py-1 rounded">{reference}</span>
        </div>
        <dl className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div><dt className="text-xs text-neutral-500">Category</dt><dd className="font-semibold">{cat?.name} {cat?.proposed && <ProposedBadge className="ml-1 align-middle" />}</dd></div>
          <div><dt className="text-xs text-neutral-500">Award family</dt><dd className="font-semibold">{getFamily(cat?.familyId)?.name}</dd></div>
          <div><dt className="text-xs text-neutral-500">Initiative</dt><dd className="font-semibold">{data.initiativeName}</dd></div>
          <div><dt className="text-xs text-neutral-500">Nominee</dt><dd className="font-semibold">{data.nomineeLegalName}</dd></div>
          <div><dt className="text-xs text-neutral-500">Nomination route</dt><dd className="font-semibold">{data.route}</dd></div>
          <div><dt className="text-xs text-neutral-500">Simulated at</dt><dd className="font-semibold">{submittedAt}</dd></div>
          <div><dt className="text-xs text-neutral-500">Indicators</dt><dd className="font-semibold">{data.indicators.filter((r) => r.metric).length}</dd></div>
          <div><dt className="text-xs text-neutral-500">Evidence items</dt><dd className="font-semibold">{data.evidenceItems.length}</dd></div>
        </dl>
      </div>

      <div className="rounded-md border border-[#FFC629] bg-[#FFF8E1] p-4 text-sm text-[#111111] space-y-1.5">
        <p className="font-bold flex items-center gap-2"><AlertTriangle className="w-4 h-4" aria-hidden="true" /> This is a demonstration prototype</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>This submission has <strong>not</strong> been sent to IRSA and has not been officially received.</li>
          <li>No files have been uploaded to any server; only file names were recorded locally in this browser tab.</li>
          <li>No confirmation email has been sent.</li>
          <li>Completing this form does not indicate eligibility, shortlisting or award.</li>
        </ul>
      </div>

      <div className="flex justify-center">
        <button type="button" onClick={onStartNew} className="btn-primary cursor-pointer">
          <RotateCcw className="w-4 h-4" aria-hidden="true" /> Start a new test nomination
        </button>
      </div>
    </div>
  );
}
