import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, AlertTriangle, RotateCcw, Send, FlaskConical } from 'lucide-react';
import { FORM_STEPS, NOMINATION_CATEGORIES, PACK_STATUS_NOTE, getCategory } from '../../data/nominationFormConfig';
import { TEST_SCENARIOS } from '../../data/nominationSampleData';
import {
  createInitialData,
  errorsToMap,
  fieldDomId,
  getReviewFlags,
  validateAll,
  validateStep,
} from '../../utils/nominationValidation';
import { CategoryContext, CategorySection, CommonSection, ProposedBadge } from './FormSections';
import { ConfirmationScreen, ReviewStep, StepProgress } from './ReviewScreens';

const DRAFT_KEY = 'irsa27-nomination-prototype-draft';
const usedRefs = new Set();

const makeReference = () => {
  let ref;
  do {
    const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
    ref = `IRSA27-${Date.now().toString(36).toUpperCase().slice(-5)}${rand}`;
  } while (usedRefs.has(ref));
  usedRefs.add(ref);
  return ref;
};

// Draft lives in sessionStorage only (cleared when the tab closes). File contents are never stored.
const loadDraft = () => {
  try {
    const raw = sessionStorage.getItem(DRAFT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

function DevTestPanel({ categoryId, onCategory, onScenario, onReset }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-dashed border-neutral-400 rounded-lg bg-neutral-50 text-xs">
      <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} className="w-full flex items-center justify-between px-4 py-2.5 font-semibold cursor-pointer">
        <span className="flex items-center gap-2"><FlaskConical className="w-4 h-4" aria-hidden="true" /> Prototype test panel (development builds only)</span>
        <span className="text-neutral-500">{open ? 'Hide' : 'Show'}</span>
      </button>
      {open && (
        <div className="px-4 pb-4 space-y-3">
          <div>
            <p className="font-semibold mb-1.5">Jump to category question set</p>
            <div className="flex flex-wrap gap-1.5">
              {NOMINATION_CATEGORIES.map((c) => (
                <button key={c.id} type="button" onClick={() => onCategory(c.id)} className={`px-2 py-1 rounded border cursor-pointer ${categoryId === c.id ? 'bg-[#111111] text-[#FFC629] border-[#111111]' : 'bg-white border-neutral-300 hover:border-[#111111]'}`}>
                  {c.number}. {c.name}{c.proposed ? ' (proposed)' : ''}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold mb-1.5">Fill with labelled TEST DATA (keeps current category)</p>
            <div className="flex flex-wrap gap-1.5">
              {TEST_SCENARIOS.map((s) => (
                <button key={s.id} type="button" onClick={() => onScenario(s)} className="px-2 py-1 rounded border bg-white border-neutral-300 hover:border-[#111111] cursor-pointer">{s.label}</button>
              ))}
              <button type="button" onClick={onReset} className="px-2 py-1 rounded border bg-white border-red-300 text-red-700 hover:border-red-600 cursor-pointer">Reset form</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function NominationForm({ requestedCategory }) {
  const draft = useMemo(loadDraft, []);
  const [data, setData] = useState(draft?.data || createInitialData());
  const [step, setStep] = useState(draft?.step || 1);
  const [maxReached, setMaxReached] = useState(draft?.maxReached || 1);
  const [attempted, setAttempted] = useState({});
  const [submitted, setSubmitted] = useState(null);
  const [pendingAnchor, setPendingAnchor] = useState(null);
  const topRef = useRef(null);
  const summaryRef = useRef(null);

  // Persist draft (prototype-only, this tab only)
  useEffect(() => {
    if (submitted) return;
    try { sessionStorage.setItem(DRAFT_KEY, JSON.stringify({ data, step, maxReached })); } catch { /* ignore */ }
  }, [data, step, maxReached, submitted]);

  // Category chosen from an award card on the page
  useEffect(() => {
    if (requestedCategory?.id) setData((d) => ({ ...d, categoryId: requestedCategory.id }));
  }, [requestedCategory]);

  // Scroll to a section after an Edit jump, otherwise to the top of the form
  useEffect(() => {
    const el = pendingAnchor ? document.getElementById(pendingAnchor) : topRef.current;
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setPendingAnchor(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, submitted]);

  const setField = (id, value) => setData((d) => ({ ...d, [id]: value }));
  const setCategoryAnswer = (catId, qId, value) =>
    setData((d) => ({ ...d, categoryAnswers: { ...d.categoryAnswers, [catId]: { ...(d.categoryAnswers[catId] || {}), [qId]: value } } }));

  const stepErrors = useMemo(() => (step < 5 ? validateStep(step, data) : []), [step, data]);
  const allErrors = useMemo(() => validateAll(data), [data]);
  const visibleErrorList = attempted[step] ? stepErrors : [];
  const errorMap = errorsToMap(visibleErrorList);

  const focusFirst = (list) => {
    requestAnimationFrame(() => {
      summaryRef.current?.focus();
      const first = list[0] && document.getElementById(fieldDomId(list[0].key));
      if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  };

  const goTo = (s, anchor = null) => {
    setPendingAnchor(anchor);
    setStep(s);
    setMaxReached((m) => Math.max(m, s));
  };

  const handleContinue = () => {
    setAttempted((a) => ({ ...a, [step]: true }));
    if (stepErrors.length) { focusFirst(stepErrors); return; }
    goTo(step + 1);
  };

  const handleSubmit = () => {
    if (allErrors.length) {
      setAttempted({ 1: true, 2: true, 3: true, 4: true });
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    // Simulated submission — nothing leaves the browser.
    const finalData = { ...data, categoryAnswers: { [data.categoryId]: data.categoryAnswers[data.categoryId] } };
    setSubmitted({ reference: makeReference(), data: finalData, at: new Date().toLocaleString('en-IN') });
    try { sessionStorage.removeItem(DRAFT_KEY); } catch { /* ignore */ }
  };

  const reset = (categoryId = '') => {
    setData(createInitialData(categoryId));
    setStep(1); setMaxReached(1); setAttempted({}); setSubmitted(null);
    try { sessionStorage.removeItem(DRAFT_KEY); } catch { /* ignore */ }
  };

  const cat = getCategory(data.categoryId);
  const current = FORM_STEPS.find((s) => s.id === step);

  if (submitted) {
    return (
      <div ref={topRef} className="scroll-mt-32">
        <ConfirmationScreen reference={submitted.reference} data={submitted.data} submittedAt={submitted.at} onStartNew={() => reset()} />
      </div>
    );
  }

  return (
    <div ref={topRef} className="scroll-mt-32 space-y-6">
      {import.meta.env.DEV && (
        <DevTestPanel
          categoryId={data.categoryId}
          onCategory={(id) => setField('categoryId', id)}
          onScenario={(s) => { setData(s.build(data.categoryId || NOMINATION_CATEGORIES[0].id)); setAttempted({}); setMaxReached(5); }}
          onReset={() => reset()}
        />
      )}

      <div className="flex items-start gap-2 rounded-md border border-[#FFC629] bg-[#FFF8E1] p-3 text-xs text-[#111111] leading-relaxed">
        <AlertTriangle className="w-4 h-4 shrink-0 mt-px" aria-hidden="true" />
        <p>
          <strong>Internal feedback prototype.</strong> Nothing is sent to IRSA and no files are uploaded. Your draft is held only in this browser tab and is cleared when the tab is closed or the form is reset. {PACK_STATUS_NOTE}
        </p>
      </div>

      <StepProgress current={step} maxReached={maxReached} onJump={(s) => goTo(s)} />

      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-neutral-200 pb-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">Step {step} of {FORM_STEPS.length}</p>
          <h2 className="text-xl sm:text-2xl font-black text-[#111111] tracking-tight">{current.title}</h2>
        </div>
        {cat ? (
          <div className="text-right">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500">Selected category</p>
            <p className="text-sm font-bold text-[#111111]">{cat.name} {cat.proposed && <ProposedBadge className="ml-1 align-middle" />}</p>
          </div>
        ) : (
          <p className="text-xs text-neutral-500">No category selected yet</p>
        )}
      </div>

      {(visibleErrorList.length > 0 || (step === 5 && attempted[4] && allErrors.length > 0)) && (
        <div ref={summaryRef} tabIndex={-1} role="alert" className="rounded-md border border-red-300 bg-red-50 p-4 text-sm text-red-800 focus:outline-none focus:ring-2 focus:ring-red-400">
          <p className="font-bold mb-2">
            {step === 5 ? `Please resolve ${allErrors.length} item(s) before submitting.` : `Please correct ${visibleErrorList.length} item(s) to continue.`}
          </p>
          {step < 5 && (
            <ul className="list-disc pl-5 space-y-1 max-h-48 overflow-auto">
              {visibleErrorList.map((e) => (
                <li key={e.key}>
                  <a
                    href={`#${fieldDomId(e.key)}`}
                    onClick={(ev) => { ev.preventDefault(); const el = document.getElementById(fieldDomId(e.key)); el?.focus(); el?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }}
                    className="underline"
                  >
                    {e.label}: {e.message}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {step < 5 && current.sections.map((sid) =>
        sid === 'CATEGORY'
          ? <CategorySection key={sid} data={data} errors={errorMap} setCategoryAnswer={setCategoryAnswer} />
          : <CommonSection key={sid} sectionId={sid} data={data} errors={errorMap} setField={setField} />
      )}

      {step === 3 && cat && (
        <p className="text-xs text-neutral-500">
          Switching category (question 2, step 1) keeps answers for each category in this draft, but only the selected category's answers are submitted.
        </p>
      )}

      {step === 5 && (
        <>
          {cat && <CategoryContext category={cat} compact />}
          <ReviewStep data={data} errorMap={errorsToMap(allErrors)} flags={getReviewFlags(data)} onEdit={(s, anchor) => goTo(s, anchor)} />
        </>
      )}

      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 pt-4 border-t border-neutral-200">
        <div className="flex gap-3">
          {step > 1 && (
            <button type="button" onClick={() => goTo(step - 1)} className="btn-secondary cursor-pointer">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back
            </button>
          )}
          <button
            type="button"
            onClick={() => { if (window.confirm('Clear all answers in this test nomination?')) reset(); }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-[#111111] px-2 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" /> Reset
          </button>
        </div>
        {step < 4 && (
          <button type="button" onClick={handleContinue} className="btn-primary cursor-pointer">
            Continue <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        )}
        {step === 4 && (
          <button type="button" onClick={handleContinue} className="btn-primary cursor-pointer">
            Review nomination <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        )}
        {step === 5 && (
          <button type="button" onClick={() => { setAttempted((a) => ({ ...a, 4: true })); handleSubmit(); }} className="btn-primary cursor-pointer">
            <Send className="w-4 h-4" aria-hidden="true" /> Submit test nomination
          </button>
        )}
      </div>
    </div>
  );
}
