import React from 'react';
import { Shield } from 'lucide-react';
import { CONFIRMED_PARTNERS } from '../data/siteData';

export default function LogoMarquee() {
  const marqueeItems = [...CONFIRMED_PARTNERS, ...CONFIRMED_PARTNERS];

  return (
    <div className="w-full overflow-hidden bg-white py-6 border-y border-neutral-200 relative">
      {/* Side Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex space-x-5 animate-marquee whitespace-nowrap items-center">
        {marqueeItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="inline-flex items-center space-x-3 bg-white border border-neutral-200 px-4 py-2.5 rounded-md text-[#111111] hover:border-[#111111] transition-all"
          >
            <div className="w-7 h-7 rounded bg-[#FFC629] flex items-center justify-center text-[#111111] font-bold text-xs shrink-0">
              <Shield className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#111111]">
                {item.logoText || item.name}
              </span>
              <span className="text-[10px] text-neutral-500 font-medium">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
