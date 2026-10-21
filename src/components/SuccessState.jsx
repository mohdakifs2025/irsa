import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import CTAButton from './CTAButton';

export default function SuccessState({
  title = "Registration Received",
  message = "Thank you for registering your interest in the India Road Safety Alliance.",
  subtext = "Our secretariat will review your submission and contact you regarding the next steps.",
  onReset
}) {
  return (
    <div className="bg-white p-8 sm:p-12 rounded-lg border border-neutral-200 text-center space-y-6 max-w-xl mx-auto">
      
      <div className="w-16 h-16 rounded-full bg-[#FFC629]/20 border-2 border-[#FFC629] flex items-center justify-center mx-auto text-[#111111]">
        <CheckCircle2 className="w-9 h-9 stroke-[2.2]" />
      </div>

      <div className="space-y-2">
        <span className="eyebrow-label text-xs">
          Submission Logged
        </span>
        <h3 className="section-heading text-2xl sm:text-3xl text-[#111111]">
          {title}
        </h3>
        <p className="text-base text-neutral-800 font-medium">
          {message}
        </p>
        <p className="text-xs sm:text-sm text-neutral-500 max-w-md mx-auto">
          {subtext}
        </p>
      </div>

      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
        {onReset && (
          <button
            onClick={onReset}
            className="btn-secondary text-xs py-2.5 px-4"
          >
            Submit Another Response
          </button>
        )}
        <CTAButton to="/" variant="primary" className="text-xs py-2.5 px-5">
          Return to Homepage
        </CTAButton>
      </div>

      <div className="pt-3 border-t border-neutral-100 text-[11.5px] text-neutral-400">
        Secretariat: The Social Lab (TSL) | New Delhi, India
      </div>
    </div>
  );
}
