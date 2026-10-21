import React from 'react';
import AnimatedCounter from './AnimatedCounter';

export default function StatCard({ value, unit, label, subtext, highlight = false, theme = 'white' }) {
  const isDark = theme === 'dark';
  const isYellow = theme === 'yellow';

  // If value contains a '+' suffix directly (e.g. "140+"), split it
  const stringValue = String(value);
  const hasPlusSuffix = stringValue.endsWith('+');
  const cleanValue = hasPlusSuffix ? stringValue.slice(0, -1) : value;
  const effectiveUnit = unit || (hasPlusSuffix ? '+' : '');

  let cardClasses = 'stat-card editorial-card p-6 sm:p-8 flex flex-col justify-between';
  if (isDark) {
    cardClasses = `stat-card editorial-card-dark p-6 sm:p-8 flex flex-col justify-between ${highlight ? 'border-t-4 border-t-[#FFC629]' : ''}`;
  } else if (isYellow) {
    cardClasses = `stat-card editorial-card-yellow p-6 sm:p-8 flex flex-col justify-between ${highlight ? 'border-t-4 border-t-black' : ''}`;
  } else {
    cardClasses = `stat-card editorial-card p-6 sm:p-8 flex flex-col justify-between ${highlight ? 'border-t-4 border-t-[#FFC629]' : ''}`;
  }

  return (
    <div className={cardClasses}>
      <div>
        <div className="flex items-baseline space-x-1">
          <span className={`font-bold text-4xl sm:text-5xl tracking-tight ${isDark ? 'text-white' : 'text-[#111111]'}`}>
            <AnimatedCounter value={cleanValue} />
          </span>
          {effectiveUnit && (
            <span className={`text-xl sm:text-2xl font-semibold ml-1 ${isDark ? 'text-[#FFC629]' : 'text-[#111111]'}`}>
              {effectiveUnit}
            </span>
          )}
        </div>
        
        <p className={`mt-3 text-sm sm:text-base font-medium leading-snug ${isDark ? 'text-neutral-200' : 'text-neutral-800'}`}>
          {label}
        </p>
      </div>

      {subtext && (
        <div className={`mt-4 pt-3 text-xs ${isDark ? 'border-t border-neutral-800 text-neutral-400' : 'border-t border-neutral-100 text-neutral-500'}`}>
          {subtext}
        </div>
      )}
    </div>
  );
}
