import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function EventCard({ code, day, title, subtitle, description, category, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="editorial-card p-6 sm:p-7 flex flex-col justify-between hover:border-[#111111] transition-colors group cursor-pointer bg-white"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          {code && (
            <span className="text-xs font-mono font-bold text-[#111111] bg-neutral-100 px-2 py-0.5 rounded">
              Session {code}
            </span>
          )}
          {day && (
            <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">
              {day}
            </span>
          )}
          {category && (
            <span className="text-[11px] font-semibold uppercase text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded">
              {category}
            </span>
          )}
        </div>

        <h3 className="card-heading text-base sm:text-lg text-[#111111] leading-snug">
          {title}
        </h3>
        
        {subtitle && (
          <p className="text-xs text-neutral-600 italic mt-1 font-medium">
            {subtitle}
          </p>
        )}

        <p className="body-copy text-xs sm:text-sm mt-3 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-600 group-hover:text-[#111111] transition-colors">
        <span>View Details</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </div>
    </div>
  );
}
