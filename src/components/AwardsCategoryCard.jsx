import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function AwardsCategoryCard({
  code,
  name,
  tag,
  shortDescription,
  eligibility,
  onNominate
}) {
  return (
    <div className="editorial-card p-6 sm:p-8 flex flex-col justify-between bg-white">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-neutral-400">
            Category {code}
          </span>
          {tag && (
            <span className="text-[11px] font-semibold uppercase bg-neutral-100 text-[#111111] px-2.5 py-0.5 rounded">
              {tag}
            </span>
          )}
        </div>

        <h3 className="card-heading text-lg sm:text-xl text-[#111111]">
          {name}
        </h3>

        <p className="body-copy text-sm leading-relaxed">
          {shortDescription}
        </p>

        {eligibility && (
          <div className="pt-3 border-t border-neutral-100">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 block">
              Eligibility
            </span>
            <p className="body-copy text-xs mt-0.5">
              {eligibility}
            </p>
          </div>
        )}
      </div>

      <div className="pt-6 mt-4 border-t border-neutral-100">
        <button
          onClick={onNominate}
          className="w-full py-3 px-4 rounded-md text-xs font-semibold uppercase tracking-wider bg-[#FFC629] text-[#111111] hover:bg-[#EBB21E] transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
        >
          <span>Nominate in this Category</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
