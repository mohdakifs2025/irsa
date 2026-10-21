import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';
import NominationForm from '../components/nomination/NominationForm';
import { ProposedBadge } from '../components/nomination/FormSections';
import { NOMINATION_PROCESS_STEPS } from '../data/awardsData';
import { AWARD_FAMILIES, NOMINATION_CATEGORIES } from '../data/nominationFormConfig';

export default function AwardsPage({ onOpenForm }) {
  const [requestedCategory, setRequestedCategory] = useState(null);

  const scrollToForm = () => document.getElementById('nominate')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const handleNominate = (categoryId) => {
    if (categoryId) setRequestedCategory({ id: categoryId, nonce: Date.now() });
    scrollToForm();
  };

  return (
    <div className="bg-white pt-24 sm:pt-28 pb-16">
      
      {/* 1. HERO SECTION (BLACK BACKGROUND) */}
      <section className="bg-[#111111] text-white py-12 sm:py-16 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="eyebrow-label text-[#FFC629] font-bold">
                National Recognition Platform
              </span>

              <h1 className="hero-headline text-[#FFC629]">
                Recognising Leadership,{' '}
                <span className="text-white underline decoration-[#FFC629] decoration-4 underline-offset-8">
                  Impact
                </span>{' '}
                &amp; Innovation
              </h1>

              <p className="body-copy text-neutral-200 max-w-xl text-base sm:text-lg">
                The proposed IRSA Road Safety &amp; Safe Mobility Awards aim to acknowledge meaningful, verifiable contributions toward reducing road fatalities and advancing safe mobility in India.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => handleNominate()}
                  className="btn-primary text-xs py-3 px-6 cursor-pointer"
                >
                  Submit a Nomination
                </button>
                <CTAButton to="/registration" variant="outline-white">
                  Alliance Membership
                </CTAButton>
              </div>

              <p className="text-xs text-neutral-400 pt-2 font-mono">
                *Note: Award categories, jury composition, and eligibility rules represent working proposals subject to final secretariat ratification.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-lg overflow-hidden border border-neutral-800 shadow-md bg-[#181A1E]">
                <img 
                  src="/images/awards-ceremony.jpg" 
                  alt="Road safety awards ceremony celebration" 
                  className="w-full h-[340px] sm:h-[380px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PROPOSED AWARD FAMILIES & CATEGORIES (WHITE BACKGROUND) */}
      <section className="bg-white py-16 sm:py-20 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="Proposed Categories"
            title="Four Award Families, Eight Categories"
            subtitle="Working draft structure for internal review. Final category definitions, eligibility rules and criteria require IRSA approval."
            theme="white"
          />

          <div className="space-y-10">
            {AWARD_FAMILIES.map((fam) => (
              <div key={fam.id}>
                <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-4 flex items-center gap-3">
                  <span className="w-6 h-1 bg-[#FFC629] rounded-sm" aria-hidden="true" />
                  {fam.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {NOMINATION_CATEGORIES.filter((c) => c.familyId === fam.id).map((cat) => (
                    <div key={cat.id} className="editorial-card p-6 flex flex-col justify-between gap-5">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono text-xs font-bold text-neutral-400">Category {String(cat.number).padStart(2, '0')}</span>
                          {cat.proposed && <ProposedBadge />}
                        </div>
                        <h4 className="card-heading text-lg text-[#111111]">{cat.name}</h4>
                        <p className="body-copy text-sm text-neutral-600">{cat.purpose}</p>
                        <p className="pt-3 border-t border-neutral-100 text-xs text-neutral-500">
                          <strong className="text-neutral-700">Especially assesses:</strong> {cat.assesses}
                        </p>
                      </div>
                      <button
                        onClick={() => handleNominate(cat.id)}
                        className="w-full py-3 px-4 bg-[#FFC629] text-[#111111] font-semibold text-xs uppercase tracking-wider rounded hover:bg-[#EBB21E] transition-colors cursor-pointer"
                      >
                        Nominate in this Category
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2b. NOMINATION FORM PROTOTYPE */}
      <section id="nominate" className="bg-white py-16 sm:py-20 border-b border-neutral-200 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Nomination Form · Prototype"
            title="IRSA 2027 Awards Nomination"
            subtitle="One common nomination form plus the category-specific section for your selected category. Estimated completion time: 20–30 minutes, excluding time needed to gather supporting evidence."
            theme="white"
          />
          <NominationForm requestedCategory={requestedCategory} />
        </div>
      </section>

      {/* 3. PROPOSED NOMINATION PROCESS (YELLOW BACKGROUND) */}
      <section className="bg-[#FFC629] text-[#111111] py-16 sm:py-20 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="Proposed Process"
            title="Six-Stage Evaluation Framework"
            subtitle="Proposed transparent process designed to evaluate submissions based on measurable outcomes and verified data."
            theme="yellow"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NOMINATION_PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="editorial-card-yellow p-6 space-y-2">
                <span className="text-xs font-mono font-bold text-white bg-black px-2 py-0.5 rounded inline-block">
                  Stage {step.step}
                </span>
                <h4 className="card-heading text-base text-[#111111]">
                  {step.title}
                </h4>
                <p className="body-copy text-neutral-800 text-xs sm:text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. FINAL CTA (BLACK BACKGROUND) */}
      <section className="bg-[#111111] text-white py-20 text-center border-t border-neutral-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <span className="eyebrow-label text-[#FFC629] font-bold">
            Enquire &amp; Nominate
          </span>
          <h2 className="main-heading text-[#FFC629]">
            Showcase Measurable Road Safety Impact
          </h2>
          <p className="body-copy text-neutral-200">
            Register your organisation's interest to receive nomination criteria, evaluation guidelines, and submission timelines upon official release.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 justify-center items-center">
            <button
              onClick={() => onOpenForm?.('General Awards Enquiry', 'awards')}
              className="btn-primary text-xs py-3 px-6 cursor-pointer"
            >
              Enquire for Awards
            </button>
            <CTAButton to="/contact" variant="outline-white">
              Contact Secretariat
            </CTAButton>
          </div>
        </div>
      </section>

    </div>
  );
}
