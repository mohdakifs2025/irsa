import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function RegistrationCard({
  title,
  fee,
  note,
  description,
  features = [],
  ctaText = "Apply Now",
  onSelect,
  highlight = false
}) {
  return (
    <div className={`editorial-card p-6 sm:p-8 flex flex-col justify-between bg-white ${
      highlight ? 'border-t-4 border-t-[#FFC629]' : ''
    }`}>
      <div className="space-y-5">
        <div>
          {note && (
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
              {note}
            </span>
          )}
          <h3 className="card-heading text-xl text-[#111111] mt-3">
            {title}
          </h3>
          {fee && (
            <div className="mt-2 text-2xl font-bold text-[#111111]">
              {fee}
            </div>
          )}
          <p className="body-copy text-xs sm:text-sm mt-2">
            {description}
          </p>
        </div>

        {features.length > 0 && (
          <div className="space-y-2.5 pt-4 border-t border-neutral-100">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 block">
              Included Benefits
            </span>
            <ul className="space-y-2 list-none p-0 m-0">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-xs text-neutral-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFC629] shrink-0 mr-2 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="pt-6 mt-6 border-t border-neutral-100">
        <button
          onClick={onSelect}
          className={`w-full py-3 px-4 rounded-md text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm ${
            highlight
              ? 'bg-[#FFC629] text-[#111111] hover:bg-[#EBB21E]'
              : 'bg-neutral-100 text-[#111111] hover:bg-[#FFC629]'
          }`}
        >
          <span>{ctaText}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
