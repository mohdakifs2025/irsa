import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';
import FormContainer from '../components/FormContainer';
import PopCardModal from '../components/PopCardModal';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { MEMBERSHIP_TIERS, PARTICIPATION_OPTIONS } from '../data/registrationData';

export default function RegistrationPage({ onOpenForm }) {
  const [selectedTrack, setSelectedTrack] = useState(null);

  const handleApply = (trackName) => {
    if (onOpenForm) {
      onOpenForm(trackName, 'registration');
    } else {
      setSelectedTrack(trackName);
    }
  };

  return (
    <div className="bg-white pt-24 sm:pt-28 pb-16">
      
      {/* 1. HERO (WHITE BACKGROUND) */}
      <section className="bg-white py-12 sm:py-16 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="eyebrow-label">
              Participation Pathways
            </span>

            <h1 className="hero-headline">
              Find Your Place in the{' '}
              <span className="text-[#111111] underline decoration-[#FFC629] decoration-4 underline-offset-8">
                IRSA
              </span>{' '}
              Ecosystem
            </h1>

            <p className="body-copy text-base sm:text-lg">
              Whether as an alliance member, convention delegate, startup innovator, academic researcher, or solution exhibitor—explore the diverse pathways to contribute to safer roads in India.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PATHWAY 1: MEMBERSHIP (BLACK BACKGROUND) */}
      <section className="bg-[#111111] text-white py-16 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="Pathway 1"
            title="Alliance Membership"
            subtitle="Become part of the standing multi-stakeholder platform driving year-round road-safety interventions. Indicative tier categories are currently under secretariat review."
            theme="dark"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MEMBERSHIP_TIERS.map(tier => {
              const isFounding = tier.id === 'founding';
              return (
                <div 
                  key={tier.id}
                  className={`editorial-card-yellow-bg p-6 flex flex-col justify-between border-t-4 border-t-black ${
                    isFounding ? 'ring-2 ring-black/10' : ''
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111]">
                        {tier.id.toUpperCase()}
                      </span>
                      {isFounding && (
                        <span className="text-[11px] font-bold bg-black text-white px-2.5 py-0.5 rounded shadow-xs">
                          LEAD TIER
                        </span>
                      )}
                    </div>

                    <h4 className="card-heading text-lg text-[#111111] font-bold">
                      {tier.name}
                    </h4>

                    <div className="py-2.5 border-y border-black/15">
                      <div className="text-2xl font-extrabold text-[#111111]">
                        {tier.fee}
                      </div>
                      <span className="text-[11px] text-neutral-800 font-medium leading-tight block mt-0.5">
                        *Proposed annual contribution (Configurable)
                      </span>
                    </div>

                    <p className="body-copy text-neutral-900 text-xs sm:text-sm leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={() => handleApply(tier.name)}
                      className="w-full py-2.5 px-4 rounded-md text-xs font-bold text-white bg-[#111111] hover:bg-neutral-800 transition-colors cursor-pointer shadow-sm"
                    >
                      Enquire for Membership
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-xs text-neutral-400 mt-4 text-center">
            Note: All membership categories, contributions, and privileges are indicative working proposals subject to final secretariat ratification.
          </p>

        </div>
      </section>

      {/* 3. PATHWAY 2: PARTICIPATE IN PROGRAMMES (YELLOW BACKGROUND) */}
      <section className="bg-[#FFC629] text-[#111111] py-16 sm:py-20 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="Pathway 2"
            title="Convention Participation Tracks"
            subtitle="Engage through dedicated showcases, educational challenges, and technology bootcamps."
            theme="yellow"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PARTICIPATION_OPTIONS.map((track, idx) => (
              <div key={track.id} className="editorial-card-yellow p-6 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-neutral-500 uppercase block mb-1">
                    Option 0{idx + 1}
                  </span>
                  <h4 className="card-heading text-lg text-[#111111]">
                    {track.title}
                  </h4>
                  <p className="body-copy text-neutral-800 text-xs sm:text-sm mt-2">
                    {track.description}
                  </p>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => handleApply(track.title)}
                    className="text-xs font-semibold text-[#111111] hover:underline flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Register for This Track</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PATHWAY 3: EXHIBIT OR PARTNER (WHITE BACKGROUND) */}
      <section className="bg-white py-16 sm:py-20 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <SectionHeader
                eyebrow="Pathway 3"
                title="Exhibit or Institutional Partner"
                theme="white"
                className="mb-4"
              />

              <p className="body-copy">
                The IRSA Road Safety &amp; Safe Mobility Expo provides verified organisations the opportunity to present cutting-edge safety innovations, fleet telematics, crashworthiness systems, and public compliance initiatives directly to senior decision-makers.
              </p>

              <div className="space-y-2 text-sm text-neutral-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFC629] shrink-0" />
                  <span>Curated exhibition zones for automotive OEMs, tech startups, and NGOs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFC629] shrink-0" />
                  <span>Opportunities for live road-safety demonstrations and technology launches</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFC629] shrink-0" />
                  <span>Customised partnership arrangements coordinated through the secretariat</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleApply('Exhibition & Partnership')}
                  className="btn-primary text-xs py-3 px-6 cursor-pointer"
                >
                  Enquire to Exhibit / Partner
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-lg overflow-hidden border border-neutral-200 shadow-sm">
                <img 
                  src="/images/tech-monitoring.jpg" 
                  alt="Mobility exhibition and tech monitoring showcase" 
                  className="w-full h-[320px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. EMBEDDED DIRECT REGISTRATION FORM PANEL (BLACK BACKGROUND) */}
      <section className="bg-[#111111] py-16 sm:py-20 border-t border-neutral-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 sm:p-12 shadow-xl border border-neutral-200">
            <FormContainer
              formType="registration"
              title="Register Your Interest"
              subtitle="Please provide your organisation details below. Our secretariat team will follow up directly."
            />
          </div>
        </div>
      </section>

      {/* Fallback Pop Card Modal */}
      <PopCardModal
        isOpen={!!selectedTrack}
        onClose={() => setSelectedTrack(null)}
        title={selectedTrack ? `Register: ${selectedTrack}` : ''}
        track={selectedTrack || ''}
        formType="registration"
      />

    </div>
  );
}
