import React from 'react';

export default function SectionHeader({
  eyebrow,
  title,
  highlightWord,
  subtitle,
  centered = false,
  theme = 'white', // 'white' | 'dark' | 'yellow'
  className = ""
}) {
  const isDark = theme === 'dark';
  const isYellow = theme === 'yellow';

  return (
    <div className={`mb-10 sm:mb-14 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <div className="mb-3">
          <span 
            className={`eyebrow-label ${
              isDark ? 'text-[#FFC629] font-bold' : 
              isYellow ? 'text-[#111111] font-bold' : 
              'text-[#111111] font-semibold'
            }`}
          >
            {eyebrow}
          </span>
        </div>
      )}
      
      <h2 className={`section-heading ${
        isDark ? 'text-[#FFC629] font-bold' : 
        isYellow ? 'text-[#111111] font-black' : 
        'text-[#111111]'
      }`}>
        {title}
        {highlightWord && (
          <span className={`ml-2 ${
            isDark 
              ? 'text-white underline decoration-[#FFC629] decoration-4 underline-offset-4' 
              : isYellow 
              ? 'text-white underline decoration-black decoration-4 underline-offset-4' 
              : 'text-[#111111] underline decoration-[#FFC629] decoration-4 underline-offset-4'
          }`}>
            {highlightWord}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className={`body-copy mt-3.5 ${
          isDark ? 'text-neutral-200' : 
          isYellow ? 'text-neutral-900 font-medium' : 
          'text-neutral-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
