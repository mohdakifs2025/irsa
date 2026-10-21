import React from 'react';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';
import { 
  Building2, 
  Car, 
  Coins, 
  Globe, 
  Users, 
  Zap, 
  GraduationCap, 
  Newspaper,
  CheckCircle2
} from 'lucide-react';

const STAKEHOLDERS = [
  { title: "Government & Public Agencies", desc: "Policy frameworks, safety standards, regulatory enforcement, and infrastructure guidelines.", icon: Building2 },
  { title: "Automotive & Mobility OEMs", desc: "Vehicle crashworthiness, active safety (ADAS), commercial transport, and EV innovation.", icon: Car },
  { title: "CSR & Corporate Philanthropy", desc: "Strategic deployment of social responsibility capital into evidence-backed road safety interventions.", icon: Coins },
  { title: "Multilaterals & Think Tanks", desc: "Global development agencies, technical research bodies, and benchmark knowledge institutions.", icon: Globe },
  { title: "Civil Society & Implementers", desc: "Grassroots NGOs, emergency responders, survivor networks, and community advocacy groups.", icon: Users },
  { title: "Startups & Technology", desc: "AI video road audits, IoT vehicle telematics, collision avoidance sensors, and smart emergency dispatch.", icon: Zap },
  { title: "Schools & Youth Groups", desc: "Road safety educational curricula, school transport safety zones, and student ambassadors.", icon: GraduationCap },
  { title: "Media & Awareness Leaders", desc: "Communication campaigns, behaviour change messaging, and public advocacy.", icon: Newspaper }
];

const WORKING_PILLARS = [
  { code: "01", title: "Policy Advocacy", desc: "Inter-ministerial dialogue, safety regulation compliance, and national road safety standardisation." },
  { code: "02", title: "CSR Mobilisation", desc: "Unlocking corporate philanthropy and impact funding for high-priority road safety projects." },
  { code: "03", title: "Technology & Innovation", desc: "Scaling AI, telematics, computer vision, and indigenous startup solutions for accident prevention." },
  { code: "04", title: "Data & Evidence", desc: "Accident blackspot audits, crash data analytics, and verified intervention studies." },
  { code: "05", title: "State-Level Action", desc: "Grassroots enforcement, driver compliance training, and district-level trauma response systems." }
];

export default function AboutPage({ onOpenForm }) {
  return (
    <div className="bg-white pt-24 sm:pt-28 pb-16">
      
      {/* 1. HERO (WHITE BACKGROUND) */}
      <section className="bg-white py-12 sm:py-16 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="eyebrow-label">
                About the Alliance
              </span>

              <h1 className="hero-headline">
                One Ecosystem.{' '}
                <span className="text-[#111111] underline decoration-[#FFC629] decoration-4 underline-offset-8">
                  One Platform.
                </span>
              </h1>

              <p className="body-copy max-w-xl text-base sm:text-lg">
                The India Road Safety Alliance (IRSA) convenes leaders from government, automotive, technology, CSR, and civil society to turn fragmented road-safety efforts into a unified national movement.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <CTAButton to="/registration" variant="primary">
                  Join the Alliance
                </CTAButton>
                <CTAButton to="/irsa-2027" variant="secondary">
                  IRSA 2027 Convention
                </CTAButton>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-lg overflow-hidden border border-neutral-200 shadow-sm bg-neutral-50">
                <img 
                  src="/images/stakeholder-meeting.jpg" 
                  alt="IRSA stakeholders meeting" 
                  className="w-full h-[340px] sm:h-[380px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHAT IS IRSA & WHY IRSA (BLACK BACKGROUND) */}
      <section className="bg-[#111111] text-white py-16 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            <div className="editorial-card-yellow-bg p-8 sm:p-10 space-y-4 border-t-4 border-t-black">
              <div className="flex items-center justify-between">
                <span className="eyebrow-label text-[#111111] font-bold text-xs tracking-wider">
                  Platform Identity
                </span>
                <span className="text-[11px] font-semibold uppercase bg-white text-[#111111] px-2.5 py-0.5 rounded shadow-xs">
                  TSL Initiative
                </span>
              </div>
              <h3 className="section-heading text-[#111111]">
                What is IRSA?
              </h3>
              <p className="body-copy text-neutral-900 text-sm sm:text-base leading-relaxed">
                Established by <strong className="text-black font-bold">The Social Lab (TSL) in 2025</strong>, IRSA is an industry-led, multi-stakeholder convening alliance. It serves as an action-oriented forum bridging the gap between high-level policy mandates and ground-level execution.
              </p>
              <p className="body-copy text-neutral-900 text-sm sm:text-base leading-relaxed">
                IRSA is not a statutory body, government regulator, or government authority; it operates as an independent public-interest platform fostering collaboration, knowledge creation, and scalable interventions.
              </p>
            </div>

            <div className="editorial-card-yellow-bg p-8 sm:p-10 space-y-4 border-t-4 border-t-black">
              <div className="flex items-center justify-between">
                <span className="eyebrow-label text-[#111111] font-bold text-xs tracking-wider">
                  The National Need
                </span>
                <span className="text-[11px] font-semibold uppercase bg-white text-[#111111] px-2.5 py-0.5 rounded shadow-xs">
                  Mandate
                </span>
              </div>
              <h3 className="section-heading text-[#111111]">
                Why IRSA?
              </h3>
              <p className="body-copy text-neutral-900 text-sm sm:text-base leading-relaxed">
                Road safety in India represents a major public health, social, and economic imperative. Isolated awareness drives cannot address the full complexity of modern mobility alone.
              </p>
              <p className="body-copy text-neutral-900 text-sm sm:text-base leading-relaxed">
                IRSA bridges stakeholders who typically operate in silos—aligning highway infrastructure authorities, automotive manufacturers, CSR funders, technological innovators, emergency hospitals, and enforcement teams to achieve measurable safety outcomes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION (YELLOW BACKGROUND) */}
      <section className="bg-[#FFC629] text-[#111111] py-16 sm:py-20 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="Strategic Compass"
            title="Vision and Mission"
            subtitle="Working institutional goals guiding the alliance's multi-stakeholder convenings."
            theme="yellow"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="editorial-card-yellow p-8 space-y-3 border-t-4 border-t-black">
              <h4 className="card-heading text-xl text-[#111111]">
                Working Vision
              </h4>
              <p className="body-copy text-neutral-900 text-sm sm:text-base">
                To help build a zero-preventable-fatality mobility future in India where safety is fundamentally engineered into every vehicle, road network, regulatory policy, and daily transit choice.
              </p>
            </div>

            <div className="editorial-card-yellow p-8 space-y-3 border-t-4 border-t-black">
              <h4 className="card-heading text-xl text-[#111111]">
                Working Mission
              </h4>
              <p className="body-copy text-neutral-900 text-sm sm:text-base">
                To convene leaders across the mobility ecosystem, facilitate evidence-backed road safety programmes, scale grassroots innovations, and recognise institutional excellence to protect human lives.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. CORE PILLARS (WHITE BACKGROUND) */}
      <section className="bg-white py-16 sm:py-20 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="Strategic Architecture"
            title="Five Working Strategic Pillars"
            subtitle="Guiding framework derived from the alliance's working concept material."
            theme="white"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {WORKING_PILLARS.map((pillar) => (
              <div key={pillar.code} className="editorial-card p-6 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-neutral-400 font-mono block mb-2">
                    {pillar.code}
                  </span>
                  <h4 className="card-heading text-base text-[#111111]">
                    {pillar.title}
                  </h4>
                  <p className="body-copy text-xs sm:text-sm mt-2.5">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. IRSA CHARTER (BLACK BACKGROUND) */}
      <section className="bg-[#111111] text-white py-16 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="editorial-card-yellow-bg p-8 sm:p-12 border-t-4 border-t-black">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="eyebrow-label text-[#111111] font-bold">
                  The Alliance Commitment
                </span>
                <span className="text-[11px] font-semibold uppercase bg-white text-[#111111] px-2.5 py-0.5 rounded shadow-xs">
                  Standing Accord
                </span>
              </div>

              <h3 className="section-heading text-[#111111]">
                The IRSA Charter
              </h3>

              <p className="body-copy text-neutral-900 leading-relaxed font-normal">
                The IRSA Charter serves as a voluntary commitment to safer mobility signed by member organisations. It articulates a shared pledge between public institutions, corporates, and civil society to collaborate on verifiable safety projects.
              </p>

              <p className="body-copy text-sm text-neutral-800 leading-relaxed font-normal">
                Participation in the Charter brings organisations into standing roundtables, research working groups, and annual knowledge-sharing convenings. Specific project partnerships and membership terms remain configurable under secretariat guidance.
              </p>

              <div className="pt-2">
                <CTAButton to="/registration" variant="dark">
                  Sign the Charter
                </CTAButton>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. STAKEHOLDER ECOSYSTEM — CLEAN WHITE CARDS (WHITE BACKGROUND) */}
      <section className="bg-white py-16 sm:py-20 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="Multi-Stakeholder Representation"
            title="Eight Core Stakeholder Groups"
            subtitle="Bringing together every segment of the mobility value chain to solve road safety collaboratively."
            theme="white"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STAKEHOLDERS.map((stk, idx) => {
              const Icon = stk.icon;
              return (
                <div key={idx} className="editorial-card p-6 space-y-3">
                  <div className="w-11 h-11 rounded-md bg-[#FFC629]/10 border-2 border-[#FFC629] flex items-center justify-center text-[#FFC629]">
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <h4 className="card-heading text-base text-[#111111]">
                    {stk.title}
                  </h4>
                  <p className="body-copy text-xs sm:text-sm">
                    {stk.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. FINAL CTA (YELLOW BACKGROUND) */}
      <section className="bg-[#FFC629] text-[#111111] py-20 text-center border-t border-black/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <span className="eyebrow-label text-[#111111] font-bold">
            Engage with the Alliance
          </span>
          <h2 className="main-heading text-[#111111]">
            Join the Movement for Safer Mobility
          </h2>
          <p className="body-copy text-neutral-900 font-medium">
            Explore institutional membership, contribute to working groups, or connect with the IRSA Secretariat to support ongoing initiatives.
          </p>
          <div className="pt-3 flex flex-wrap gap-4 justify-center items-center">
            <CTAButton to="/registration" variant="white">
              Explore Membership
            </CTAButton>
            <CTAButton to="/contact" variant="dark">
              Contact Secretariat
            </CTAButton>
          </div>
        </div>
      </section>

    </div>
  );
}
