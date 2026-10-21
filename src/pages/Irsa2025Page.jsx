import React from 'react';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';
import StatCard from '../components/StatCard';
import Gallery from '../components/Gallery';
import { Calendar, MapPin } from 'lucide-react';
import { 
  IRSA_2025_DETAILS, 
  IRSA_2025_PANELS, 
  IRSA_2025_VOICES, 
  EVOLUTION_TIMELINE 
} from '../data/irsa2025Data';

export default function Irsa2025Page() {
  return (
    <div className="bg-white pt-24 sm:pt-28 pb-16">
      
      {/* 1. HERO (WHITE BACKGROUND) */}
      <section className="bg-white py-12 sm:py-16 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="eyebrow-label">
                Historical Foundation
              </span>

              <h1 className="hero-headline">
                Where the{' '}
                <span className="text-[#111111] underline decoration-[#FFC629] decoration-4 underline-offset-8">
                  Alliance
                </span>{' '}
                Began
              </h1>

              <p className="body-copy max-w-xl text-base sm:text-lg">
                On 24 March 2025 at Le Méridien Hotel in New Delhi, the inaugural convention established India's first unified, multi-stakeholder alliance dedicated to road safety.
              </p>

              {/* Verified Metadata */}
              <div className="pt-2 flex flex-wrap gap-6 text-xs text-neutral-600 font-medium">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#FFC629] stroke-[2.5]" />
                  <span>24 March 2025</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#FFC629] stroke-[2.5]" />
                  <span>Le Méridien Hotel, New Delhi</span>
                </div>
              </div>

              <div className="pt-3">
                <CTAButton to="/irsa-2027" variant="primary">
                  Look Ahead to IRSA 2027
                </CTAButton>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-lg overflow-hidden border border-neutral-200 shadow-sm bg-neutral-50 p-6 flex items-center justify-center">
                <img 
                  src="/images/irsa-2025-partners.jpg" 
                  alt="IRSA 2025 Participant and Partner Ecosystem" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. EVENT HIGHLIGHTS — STAT CARDS (YELLOW BACKGROUND) */}
      <section className="bg-[#FFC629] text-[#111111] py-16 sm:py-20 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="Confirmed Highlights"
            title="Verified 2025 Outcomes"
            subtitle="Documented metrics from the inaugural convention report."
            theme="yellow"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {IRSA_2025_DETAILS.stats.map((stat, idx) => (
              <StatCard
                key={idx}
                value={stat.value}
                label={stat.label}
                subtext="Confirmed 2025 Benchmark"
                highlight={idx === 0}
                theme="yellow"
              />
            ))}
          </div>

        </div>
      </section>

      {/* 3. FOUR PANEL DISCUSSIONS (BLACK BACKGROUND) */}
      <section className="bg-[#111111] text-white py-16 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="Convention Proceedings"
            title="Four Panel Discussions"
            subtitle="The documented panel titles and focal inquiry areas from the official IRSA 2025 report."
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {IRSA_2025_PANELS.map((p) => (
              <div key={p.id} className="editorial-card-yellow-bg p-8 space-y-3 border-t-4 border-t-black">
                <div className="flex items-center justify-between text-xs font-mono text-[#111111]">
                  <span className="text-[#111111] font-bold">PANEL {p.number}</span>
                  <span className="font-bold text-white bg-black px-2 py-0.5 rounded shadow-xs">DOCUMENTED</span>
                </div>
                <h3 className="card-heading text-lg text-[#111111] font-bold">
                  {p.title}
                </h3>
                <p className="body-copy text-neutral-900 text-sm leading-relaxed">
                  {p.summary}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. EVENT VOICES & REFLECTIONS (WHITE BACKGROUND) */}
      <section className="bg-white py-16 sm:py-20 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="Institutional Reflections"
            title="Voices from the 2025 Convention"
            subtitle="Verified perspectives captured in the post-convention proceedings."
            theme="white"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {IRSA_2025_VOICES.map((v, idx) => (
              <div key={idx} className="editorial-card p-8 space-y-4 border-l-4 border-l-[#FFC629]">
                <p className="body-copy italic text-base text-[#111111]">
                  "{v.quote}"
                </p>
                <div className="pt-2 border-t border-neutral-100">
                  <span className="font-bold text-sm text-[#111111] block">
                    {v.author}
                  </span>
                  <span className="text-xs text-neutral-500">
                    {v.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. PHOTO GALLERY (BLACK BACKGROUND) */}
      <section className="bg-[#111111] text-white py-16 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="Visual Record"
            title="Convention Photographic Gallery"
            subtitle="Archival moments from the inaugural road safety convention in New Delhi."
            theme="dark"
          />

          <Gallery theme="dark" />

        </div>
      </section>

      {/* 6. FROM 2025 TO 2027 EVOLUTION (YELLOW BACKGROUND) */}
      <section className="bg-[#FFC629] text-[#111111] py-16 sm:py-20 border-t border-black/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="Platform Progression"
            title="From 2025 to 2027"
            subtitle="Building upon the foundation of the first convention to expand impact across India."
            centered={true}
            theme="yellow"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {EVOLUTION_TIMELINE.map((item, idx) => (
              <div key={idx} className="editorial-card-yellow p-8 space-y-3">
                <span className="text-2xl font-bold font-display text-white bg-black px-3 py-1 rounded inline-block">
                  {item.year}
                </span>
                <h4 className="card-heading text-lg text-[#111111] pt-2">
                  {item.title}
                </h4>
                <p className="body-copy text-neutral-800 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <CTAButton to="/irsa-2027" variant="white">
              Discover IRSA 2027 Plans
            </CTAButton>
          </div>

        </div>
      </section>

    </div>
  );
}
