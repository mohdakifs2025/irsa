import React from 'react';
import SectionHeader from '../components/SectionHeader';
import FormContainer from '../components/FormContainer';
import { MapPin, Mail, Phone, Building } from 'lucide-react';
import { CONTACT_CONFIG } from '../data/siteData';

export default function ContactPage() {
  return (
    <div className="bg-white pt-24 sm:pt-28 pb-16">
      
      {/* 1. HERO (WHITE BACKGROUND) */}
      <section className="bg-white py-12 sm:py-16 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="eyebrow-label">
              Secretariat Secretariat
            </span>

            <h1 className="hero-headline">
              Let's Move Towards{' '}
              <span className="text-[#111111] underline decoration-[#FFC629] decoration-4 underline-offset-8">
                Safer
              </span>{' '}
              Mobility
            </h1>

            <p className="body-copy text-base sm:text-lg">
              For queries regarding institutional membership, IRSA Convention 2027 attendance, exhibition partnerships, awards nominations, or research collaboration, contact the IRSA Secretariat below.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SECRETARIAT COORDINATES (BLACK BACKGROUND) */}
      <section className="bg-[#111111] text-white py-16 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Institutional Coordinates"
            title="Secretariat Office"
            subtitle="Anchored in New Delhi by The Social Lab (TSL) to coordinate nationwide alliance activities."
            theme="dark"
            className="mb-10"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="editorial-card-yellow-bg p-6 sm:p-7 flex flex-col justify-between border-t-4 border-t-black">
              <div>
                <div className="w-12 h-12 rounded-lg bg-black text-[#FFC629] flex items-center justify-center mb-4 shadow-xs">
                  <Building className="w-5 h-5 stroke-[2.2]" />
                </div>
                <h4 className="card-heading text-[#111111] text-base font-bold">
                  Convening Body
                </h4>
                <p className="body-copy text-neutral-900 text-xs sm:text-sm mt-1 leading-snug">
                  The Social Lab (TSL) — Anchoring Secretariat for IRSA
                </p>
              </div>
            </div>

            <div className="editorial-card-yellow-bg p-6 sm:p-7 flex flex-col justify-between border-t-4 border-t-black">
              <div>
                <div className="w-12 h-12 rounded-lg bg-black text-[#FFC629] flex items-center justify-center mb-4 shadow-xs">
                  <MapPin className="w-5 h-5 stroke-[2.2]" />
                </div>
                <h4 className="card-heading text-[#111111] text-base font-bold">
                  Secretariat Location
                </h4>
                <p className="body-copy text-neutral-900 text-xs sm:text-sm mt-1 leading-snug">
                  New Delhi, India
                </p>
                <span className="text-[11px] text-neutral-800 font-mono block mt-1.5 font-medium">
                  (Institutional Secretariat Office)
                </span>
              </div>
            </div>

            <div className="editorial-card-yellow-bg p-6 sm:p-7 flex flex-col justify-between border-t-4 border-t-black">
              <div>
                <div className="w-12 h-12 rounded-lg bg-black text-[#FFC629] flex items-center justify-center mb-4 shadow-xs">
                  <Mail className="w-5 h-5 stroke-[2.2]" />
                </div>
                <h4 className="card-heading text-[#111111] text-base font-bold">
                  Official Email
                </h4>
                <p className="body-copy text-neutral-900 text-xs sm:text-sm mt-1 leading-snug">
                  {CONTACT_CONFIG.email}
                </p>
                <span className="text-[11px] text-neutral-800 font-mono block mt-1.5 font-medium">
                  *Configurable institutional inbox
                </span>
              </div>
            </div>

            <div className="editorial-card-yellow-bg p-6 sm:p-7 flex flex-col justify-between border-t-4 border-t-black">
              <div>
                <div className="w-12 h-12 rounded-lg bg-black text-[#FFC629] flex items-center justify-center mb-4 shadow-xs">
                  <Phone className="w-5 h-5 stroke-[2.2]" />
                </div>
                <h4 className="card-heading text-[#111111] text-base font-bold">
                  Direct Telephone
                </h4>
                <p className="body-copy text-neutral-900 text-xs sm:text-sm mt-1 leading-snug">
                  {CONTACT_CONFIG.phone}
                </p>
                <span className="text-[11px] text-neutral-800 font-mono block mt-1.5 font-medium">
                  *Configurable secretariat contact
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DIRECT ENQUIRY FORM (YELLOW BACKGROUND) */}
      <section className="bg-[#FFC629] text-[#111111] py-16 sm:py-20 border-t border-black/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Direct Enquiry"
            title="Send an Institutional Message"
            subtitle="Submit your query directly to the IRSA Secretariat team."
            centered={true}
            theme="yellow"
            className="mb-8"
          />

          <div className="bg-white rounded-lg p-8 sm:p-12 shadow-xl border border-neutral-200 text-[#111111]">
            <FormContainer
              formType="contact"
              title="Secretariat Enquiry"
              subtitle="Please provide your organisation details below. Our team will respond shortly."
            />
          </div>
        </div>
      </section>

    </div>
  );
}
