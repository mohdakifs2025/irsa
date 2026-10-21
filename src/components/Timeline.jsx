import React from 'react';

export default function Timeline({ steps = [] }) {
  return (
    <div className="relative border-l-2 border-[#FFC629] ml-4 sm:ml-6 space-y-8 py-2">
      {steps.map((item, idx) => (
        <div key={idx} className="relative pl-6 sm:pl-8 group">
          {/* Timeline Node Icon */}
          <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-white border-2 border-[#FFC629] flex items-center justify-center text-[#111111] text-xs font-bold font-mono shadow-sm">
            {item.step || item.year || idx + 1}
          </div>

          <div className="editorial-card p-5 sm:p-6 bg-white border border-neutral-200">
            <h4 className="card-heading text-base sm:text-lg text-[#111111]">
              {item.title}
            </h4>
            <p className="body-copy text-xs sm:text-sm mt-1.5">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
