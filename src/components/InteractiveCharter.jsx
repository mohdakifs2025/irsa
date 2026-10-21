import React, { useState } from 'react';
import { Shield, ArrowDown } from 'lucide-react';

const INPUT_GROUPS = [
  { id: 'gov', label: 'GOVERNMENT', desc: 'Policy, safety mandates & regulatory standards' },
  { id: 'ind', label: 'INDUSTRY', desc: 'OEM crash safety, telematics & commercial fleet safety' },
  { id: 'mul', label: 'MULTILATERALS', desc: 'Global safety benchmarks & academic research' },
  { id: 'civ', label: 'CIVIL SOCIETY', desc: 'Grassroots advocacy & trauma emergency response' },
];

const OUTPUT_GROUPS = [
  { id: 'prg', label: 'PROGRAMMES', desc: 'Targeted road safety interventions & school safety zones' },
  { id: 'inn', label: 'INNOVATION', desc: 'AI road inspection, IoT sensors & startup accelerators' },
  { id: 'kno', label: 'KNOWLEDGE', desc: 'Policy briefs, case studies & blackspot remediation data' },
  { id: 'rec', label: 'RECOGNITION', desc: 'National Road Safety & Safe Mobility Awards' },
  { id: 'cnv', label: 'NATIONAL CONVENING', desc: 'Flagship biennial IRSA summit in New Delhi' },
];

export default function InteractiveCharter() {
  const [activeInput, setActiveInput] = useState(null);
  const [activeOutput, setActiveOutput] = useState(null);

  return (
    <div className="w-full editorial-card p-6 sm:p-10 bg-white border border-neutral-200 space-y-10">
      
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="eyebrow-label text-xs">
          Interactive Architecture
        </span>
        <h3 className="section-heading text-xl sm:text-2xl text-[#111111]">
          The IRSA Charter Framework
        </h3>
        <p className="body-copy text-xs sm:text-sm">
          Uniting diverse stakeholder inputs into cohesive national safety outputs.
        </p>
      </div>

      {/* Diagram Layout */}
      <div className="space-y-8">
        
        {/* Layer 1: Inputs */}
        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 text-center">
            Stakeholder Inputs
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {INPUT_GROUPS.map((group) => (
              <div
                key={group.id}
                onMouseEnter={() => setActiveInput(group.id)}
                onMouseLeave={() => setActiveInput(null)}
                className={`p-4 rounded-md border text-center transition-all cursor-pointer ${
                  activeInput === group.id
                    ? 'bg-[#FFC629] text-[#111111] border-[#FFC629] shadow-sm'
                    : 'bg-white text-[#111111] border-neutral-200 hover:border-[#111111]'
                }`}
              >
                <div className="font-semibold text-xs sm:text-sm tracking-wide">
                  {group.label}
                </div>
                <p className="text-[11px] sm:text-xs mt-1 text-neutral-600 leading-tight">
                  {group.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Down Arrow Flow */}
        <div className="flex justify-center text-[#FFC629]">
          <div className="w-8 h-8 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-[#111111]">
            <ArrowDown className="w-4 h-4 text-[#FFC629]" />
          </div>
        </div>

        {/* Layer 2: Core Charter Hub */}
        <div className="max-w-md mx-auto">
          <div className="bg-white border-2 border-[#111111] p-6 rounded-lg text-center shadow-sm relative overflow-hidden group">
            <div className="relative z-10 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-[#111111] tracking-widest bg-[#FFC629] px-2.5 py-0.5 rounded">
                CORE PLATFORM
              </span>
              <h4 className="card-heading text-2xl text-[#111111]">
                IRSA Charter
              </h4>
              <p className="body-copy text-xs">
                Action-oriented commitments for safer roads and safe mobility.
              </p>
            </div>
          </div>
        </div>

        {/* Down Arrow Flow */}
        <div className="flex justify-center text-[#FFC629]">
          <div className="w-8 h-8 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-[#111111]">
            <ArrowDown className="w-4 h-4 text-[#FFC629]" />
          </div>
        </div>

        {/* Layer 3: Strategic Outputs */}
        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 text-center">
            Strategic Outputs &amp; Impact
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {OUTPUT_GROUPS.map((group) => (
              <div
                key={group.id}
                onMouseEnter={() => setActiveOutput(group.id)}
                onMouseLeave={() => setActiveOutput(null)}
                className={`p-4 rounded-md border transition-all cursor-pointer ${
                  activeOutput === group.id
                    ? 'bg-[#FFC629] text-[#111111] border-[#FFC629] shadow-sm'
                    : 'bg-white text-[#111111] border-neutral-200 hover:border-[#111111]'
                }`}
              >
                <div className="font-semibold text-xs tracking-wider">
                  {group.label}
                </div>
                <p className="text-[11px] mt-1 text-neutral-600 leading-tight">
                  {group.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
