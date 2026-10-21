import React from 'react';
import { AlertCircle } from 'lucide-react';
import { countWords, fieldDomId } from '../../utils/nominationValidation';

export const inputClass = (hasError) =>
  `w-full bg-white border ${hasError ? 'border-red-500' : 'border-neutral-300'} rounded px-3 py-2.5 text-sm text-[#111111] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#FFC629] focus:border-[#111111] transition-colors`;

export const RequiredMark = () => (
  <span className="text-red-600 ml-0.5" aria-hidden="true">*</span>
);

export function FieldError({ id, message }) {
  if (!message) return null;
  return (
    <p id={`${id}-error`} className="mt-1.5 flex items-start gap-1.5 text-xs font-medium text-red-600">
      <AlertCircle className="w-3.5 h-3.5 mt-px shrink-0" aria-hidden="true" />
      <span>{message}</span>
    </p>
  );
}

export function WordCount({ value, maxWords }) {
  const n = countWords(value);
  const over = maxWords && n > maxWords;
  return (
    <span className={`text-[11px] font-mono ${over ? 'text-red-600 font-bold' : 'text-neutral-500'}`} aria-live="polite">
      {n}{maxWords ? ` / ${maxWords}` : ''} words
    </span>
  );
}

/** Label + helper + error wrapper for a single control. */
export function FieldShell({ fieldKey, num, label, required, helper, error, children, counter, asGroup = false }) {
  const id = fieldDomId(fieldKey);
  const LabelTag = asGroup ? 'legend' : 'label';
  const Wrapper = asGroup ? 'fieldset' : 'div';
  return (
    <Wrapper className="space-y-2" {...(asGroup ? { id: `${id}-group` } : {})}>
      <div className="flex items-start justify-between gap-4">
        <LabelTag {...(!asGroup ? { htmlFor: id } : {})} className="block text-sm font-semibold text-[#111111] leading-snug">
          {num ? <span className="text-neutral-400 font-mono mr-1.5">{num}.</span> : null}
          {label}
          {required && <RequiredMark />}
          {required && <span className="sr-only"> (required)</span>}
        </LabelTag>
        {counter}
      </div>
      {helper && <p id={`${id}-help`} className="text-xs text-neutral-500 leading-relaxed">{helper}</p>}
      {children}
      <FieldError id={id} message={error} />
    </Wrapper>
  );
}

export const describedBy = (key, helper, error) => {
  const id = fieldDomId(key);
  return [helper ? `${id}-help` : null, error ? `${id}-error` : null].filter(Boolean).join(' ') || undefined;
};

export function TextInput({ fieldKey, value, onChange, type = 'text', error, helper, required, ...rest }) {
  return (
    <input
      id={fieldDomId(fieldKey)}
      type={type}
      value={value ?? ''}
      onChange={(e) => onChange(e.target.value)}
      aria-invalid={!!error}
      aria-required={required || undefined}
      aria-describedby={describedBy(fieldKey, helper, error)}
      className={inputClass(!!error)}
      {...rest}
    />
  );
}

export function TextArea({ fieldKey, value, onChange, error, helper, required, rows = 5, ...rest }) {
  return (
    <textarea
      id={fieldDomId(fieldKey)}
      rows={rows}
      value={value ?? ''}
      onChange={(e) => onChange(e.target.value)}
      aria-invalid={!!error}
      aria-required={required || undefined}
      aria-describedby={describedBy(fieldKey, helper, error)}
      className={`${inputClass(!!error)} resize-y leading-relaxed`}
      {...rest}
    />
  );
}

/** Radio group. First radio carries the field DOM id so error focus lands on it. */
export function RadioGroup({ fieldKey, name, options, value, onChange, error, columns = 3, compact = false }) {
  const id = fieldDomId(fieldKey);
  const grid = columns === 2 ? 'sm:grid-cols-2' : columns === 1 ? '' : 'sm:grid-cols-3';
  return (
    <div role="radiogroup" aria-invalid={!!error} className={`grid grid-cols-1 ${grid} gap-2`}>
      {options.map((opt, i) => {
        const checked = value === opt;
        return (
          <label
            key={opt}
            className={`flex items-center gap-2.5 cursor-pointer rounded border px-3 ${compact ? 'py-2' : 'py-2.5'} text-sm transition-colors ${
              checked ? 'border-[#111111] bg-[#FFF8E1] font-semibold' : error ? 'border-red-300 hover:border-neutral-500' : 'border-neutral-300 hover:border-neutral-500'
            } focus-within:ring-2 focus-within:ring-[#FFC629]`}
          >
            <input
              id={i === 0 ? id : undefined}
              type="radio"
              name={name || id}
              value={opt}
              checked={checked}
              onChange={() => onChange(opt)}
              className="accent-[#111111] w-4 h-4 shrink-0"
            />
            <span>{opt}</span>
          </label>
        );
      })}
    </div>
  );
}

export function SectionCard({ id, title, intro, children, badge }) {
  return (
    <section id={id} className="scroll-mt-32 border border-neutral-200 rounded-lg bg-white">
      <header className="px-5 sm:px-7 py-4 border-b border-neutral-200 bg-neutral-50 rounded-t-lg flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-base sm:text-lg font-bold text-[#111111] flex items-center gap-3">
          <span className="w-1 h-5 bg-[#FFC629] rounded-sm" aria-hidden="true" />
          {title}
        </h3>
        {badge}
      </header>
      <div className="px-5 sm:px-7 py-6 space-y-7">
        {intro}
        {children}
      </div>
    </section>
  );
}

export function SmallButton({ children, onClick, variant = 'ghost', icon: Icon, ...rest }) {
  const styles = {
    ghost: 'border border-neutral-300 bg-white hover:border-[#111111] text-[#111111]',
    danger: 'border border-transparent text-red-600 hover:bg-red-50',
    yellow: 'border border-[#FFC629] bg-[#FFC629] hover:bg-[#EBB21E] text-[#111111]',
  };
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC629] ${styles[variant]}`}
      {...rest}
    >
      {Icon && <Icon className="w-3.5 h-3.5" aria-hidden="true" />}
      {children}
    </button>
  );
}
