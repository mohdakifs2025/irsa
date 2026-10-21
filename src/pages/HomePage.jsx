import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';
import StatCard from '../components/StatCard';
import AnimatedCounter from '../components/AnimatedCounter';
import { CONFIRMED_PARTNERS } from '../data/siteData';

export default function HomePage({ onOpenForm }) {
  return (
    <div className="bg-white pt-24 sm:pt-28 pb-16">
      
      {/* 1. HERO SECTION — DYNAMIC DIAGONAL SPLIT WITH SHARP FACETED CUTS & FLOATING METRICS BAR */}
      <section className="relative bg-white text-[#111111] overflow-hidden border-b border-neutral-200">
        
        {/* DESKTOP HERO LAYOUT (lg+) */}
        <div className="hidden lg:block relative h-[560px] xl:h-[600px] w-full">
          
          {/* Main Content Column (Anchored strictly to the left edge with generous breathing room) */}
          <div className="relative z-10 w-full pl-6 sm:pl-10 lg:pl-16 xl:pl-20 pr-4 pt-10 xl:pt-14 pb-32 flex">
            <div className="w-full max-w-[390px] xl:max-w-[420px] space-y-4 xl:space-y-5">
              
              {/* Eyebrow with Solid Yellow Accent Bar */}
              <div className="flex items-center gap-3">
                <span className="w-7 h-[3.5px] bg-[#FFC629] rounded-sm inline-block" />
                <span className="text-[11.5px] xl:text-xs font-bold uppercase tracking-[0.18em] text-neutral-800">
                  INDIAN ROAD SAFETY ALLIANCE
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[38px] xl:text-[46px] font-black tracking-tight text-[#111111] leading-[1.08]">
                Securing India’s <br />
                <span className="text-[#FFC629]">Mobility</span> Future
              </h1>

              {/* Body Description */}
              <p className="text-neutral-600 text-sm xl:text-[15px] leading-relaxed font-normal max-w-[380px]">
                Bringing India's road-safety and mobility ecosystem together to turn shared responsibility into collective action.
              </p>

              {/* CTA Action Buttons */}
              <div className="pt-1 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/registration"
                  className="inline-flex items-center gap-2 bg-[#FFC629] hover:bg-[#EBB21E] text-[#111111] font-bold text-xs sm:text-sm px-5 xl:px-6 py-2.5 xl:py-3 rounded shadow-sm transition-all hover:shadow hover:-translate-y-0.5"
                >
                  <span>Register Your Interest</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </Link>

                <Link
                  to="/irsa-2027"
                  className="inline-flex items-center gap-2 bg-white hover:bg-neutral-50 text-[#111111] border border-neutral-300 font-semibold text-xs sm:text-sm px-5 xl:px-6 py-2.5 xl:py-3 rounded shadow-sm transition-all hover:border-neutral-400 hover:-translate-y-0.5"
                >
                  <span>Explore IRSA 2027</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                </Link>
              </div>

              {/* Bottom Metadata */}
              <div className="pt-1 flex items-center gap-3.5 text-xs text-neutral-800 font-semibold">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#FFC629] stroke-[2.5]" />
                  <span>January 2027 (Proposed)</span>
                </div>
                <span className="text-neutral-300">|</span>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FFC629] stroke-[2.5]" />
                  <span>New Delhi, India</span>
                </div>
              </div>

              {/* Decorative 5x4 Dot Matrix (Bottom Left) */}
              <div className="pt-2">
                <div className="grid grid-cols-5 gap-2.5 w-fit opacity-40">
                  {[...Array(20)].map((_, i) => (
                    <span key={i} className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Side Highway Photo Container — Crisp diagonal clip with clear white separation */}
          <div 
            className="absolute inset-y-0 right-0 w-[56%] xl:w-[58%] overflow-hidden pointer-events-none"
            style={{
              clipPath: 'polygon(17.5% 0%, 100% 0%, 100% 100%, 2.1% 100%)'
            }}
          >
            <img
              src="/images/hero-expressway-hd.jpg"
              alt="Expressway mobility and road safety infrastructure in India"
              className="w-full h-full object-cover object-[center_32%]"
            />
            {/* Subtle atmospheric vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent" />
          </div>

          {/* Clean, Razor-Sharp Vector Geometric Layers (True to Reference Mockup) */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-10" 
            preserveAspectRatio="none" 
            viewBox="0 0 1000 600"
          >
            {/* 1. Secondary Light Yellow / Cream Facet Slice (Upper Left) */}
            <polygon 
              points="460,0 492,0 455,260 431,200" 
              fill="#FFE68C" 
              opacity="0.9"
            />

            {/* 2. Primary Solid IRSA Yellow Stripe (#FFC629) — Perfectly Parallel & Crisp */}
            <polygon 
              points="492,0 534,0 448,600 406,600" 
              fill="#FFC629" 
            />

            {/* 3. Bottom-Right Yellow Triangular Corner Wedge */}
            <polygon 
              points="1000,420 1000,600 962,600" 
              fill="#FFC629" 
            />
          </svg>

          {/* Floating Bottom Metrics Banner with Angled Left Edge */}
          <div 
            className="absolute bottom-0 left-[29%] xl:left-[32%] right-0 z-20"
            style={{ filter: 'drop-shadow(0 -8px 24px rgba(0, 0, 0, 0.08))' }}
          >
            <div 
              className="bg-white border-t border-neutral-100 py-4 xl:py-5 pl-12 xl:pl-14 pr-8 flex items-center justify-between"
              style={{
                clipPath: 'polygon(36px 0%, 100% 0%, 100% 100%, 0% 100%)'
              }}
            >
              <div className="flex items-center gap-7 xl:gap-11">
                {/* Metric 1: 1.72 lakh in Red */}
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl xl:text-4xl font-black text-[#E53E3E] tracking-tight leading-none">
                      <AnimatedCounter value={1.72} />
                    </span>
                    <span className="text-lg xl:text-2xl font-black text-[#E53E3E] leading-none">
                      lakh
                    </span>
                  </div>
                  <p className="text-xs xl:text-[13px] text-neutral-600 font-medium leading-snug mt-1 max-w-[185px]">
                    Lives lost on Indian roads in 2023.
                  </p>
                </div>

                {/* Vertical Divider */}
                <div className="w-px h-10 bg-neutral-200 self-center" />

                {/* Metric 2: 50% in Yellow */}
                <div className="flex flex-col">
                  <div className="flex items-baseline">
                    <span className="text-3xl xl:text-4xl font-black text-[#FFC629] tracking-tight leading-none">
                      <AnimatedCounter value={50} />%
                    </span>
                  </div>
                  <p className="text-xs xl:text-[13px] text-neutral-600 font-medium leading-snug mt-1 max-w-[205px]">
                    India's commitment to reduce road deaths by 2030.
                  </p>
                </div>

                {/* Vertical Divider */}
                <div className="w-px h-10 bg-neutral-200 self-center" />

                {/* Metric 3: 2 days in Black */}
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl xl:text-4xl font-black text-[#111111] tracking-tight leading-none">
                      <AnimatedCounter value={2} />
                    </span>
                    <span className="text-lg xl:text-2xl font-black text-[#111111] leading-none">
                      days
                    </span>
                  </div>
                  <p className="text-xs xl:text-[13px] text-neutral-600 font-medium leading-snug mt-1 max-w-[235px]">
                    Eight sessions, a mobility expo, the IRSA Charter and the National Awards.
                  </p>
                </div>
              </div>

              {/* Decorative Subtle Diagonal Hatching Pattern on Far Right */}
              <div 
                className="w-24 xl:w-36 h-12 opacity-35 self-center"
                style={{
                  background: 'repeating-linear-gradient(45deg, transparent, transparent 5px, #94A3B8 5px, #94A3B8 6.5px)'
                }}
              />
            </div>
          </div>

        </div>

        {/* MOBILE & TABLET HERO LAYOUT (< lg) */}
        <div className="lg:hidden flex flex-col">
          
          {/* Top Content Area */}
          <div className="px-5 sm:px-8 pt-8 pb-8 space-y-5">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-7 h-1 bg-[#FFC629] rounded-sm inline-block" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-800">
                INDIAN ROAD SAFETY ALLIANCE
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#111111] leading-[1.12]">
              Securing India’s <br />
              <span className="text-[#FFC629]">Mobility</span> Future
            </h1>

            {/* Description */}
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-normal">
              Bringing India's road-safety and mobility ecosystem together to turn shared responsibility into collective action.
            </p>

            {/* CTA Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-3">
              <Link
                to="/registration"
                className="inline-flex items-center gap-2 bg-[#FFC629] hover:bg-[#EBB21E] text-[#111111] font-bold text-sm px-5 py-3 rounded shadow-sm"
              >
                <span>Register Your Interest</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
              <Link
                to="/irsa-2027"
                className="inline-flex items-center gap-2 bg-white hover:bg-neutral-50 text-[#111111] border border-neutral-300 font-semibold text-sm px-5 py-3 rounded shadow-sm"
              >
                <span>Explore IRSA 2027</span>
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </Link>
            </div>

            {/* Metadata */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-neutral-800 font-semibold">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#FFC629] stroke-[2.5]" />
                <span>January 2027 (Proposed)</span>
              </div>
              <span className="text-neutral-300">|</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FFC629] stroke-[2.5]" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Highway Photo */}
          <div className="relative w-full h-56 sm:h-72 overflow-hidden border-y border-neutral-200">
            <img
              src="/images/hero-expressway-hd.jpg"
              alt="Expressway mobility and road safety infrastructure in India"
              className="w-full h-full object-cover object-center"
            />
            {/* Top yellow accent strip */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FFC629]" />
          </div>

          {/* Bottom 3 Metrics Grid */}
          <div className="bg-white px-5 sm:px-8 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
            <div className="pt-3 sm:pt-0 sm:pr-4">
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-black text-[#E53E3E] tracking-tight">
                  <AnimatedCounter value={1.72} />
                </span>
                <span className="text-xl font-black text-[#E53E3E]">lakh</span>
              </div>
              <p className="text-xs text-neutral-600 font-medium leading-snug mt-1">
                Lives lost on Indian roads in 2023.
              </p>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-4">
              <div className="flex items-baseline">
                <span className="text-3xl font-black text-[#FFC629] tracking-tight">
                  <AnimatedCounter value={50} />%
                </span>
              </div>
              <p className="text-xs text-neutral-600 font-medium leading-snug mt-1">
                India's commitment to reduce road deaths by 2030.
              </p>
            </div>

            <div className="pt-4 sm:pt-0 sm:pl-4">
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-black text-[#111111] tracking-tight">
                  <AnimatedCounter value={2} />
                </span>
                <span className="text-xl font-black text-[#111111]">days</span>
              </div>
              <p className="text-xs text-neutral-600 font-medium leading-snug mt-1">
                Eight sessions, a mobility expo, the IRSA Charter and the National Awards.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* 2. IRSA AT A GLANCE — STATISTICS LAYOUT (YELLOW BACKGROUND) */}
      <section className="bg-[#FFC629] text-[#111111] py-16 sm:py-20 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="Platform Highlights"
            title="Convening Evidence and Impact"
            subtitle="Anchored in documented historical achievements and structured towards the future of safe mobility."
            theme="yellow"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              value="140" 
              unit="+" 
              label="Convened Participants" 
              subtext="IRSA 2025 Historical Baseline"
              highlight={true}
              theme="yellow"
            />
            <StatCard 
              value="30" 
              unit="+" 
              label="Corporate Organisations" 
              subtext="Automotive, CSR & Industry Stakeholders"
              theme="yellow"
            />
            <StatCard 
              value="30" 
              unit="+" 
              label="Schools & Institutions" 
              subtext="Youth Road Safety Education Network"
              theme="yellow"
            />
            <StatCard 
              value="8" 
              label="Thematic Panel Dialogues" 
              subtext="IRSA 2027 Proposed Programme Architecture"
              theme="yellow"
            />
          </div>

        </div>
      </section>

      {/* 3. ABOUT IRSA — TWO-COLUMN EDITORIAL (BLACK BACKGROUND) */}
      <section className="bg-[#111111] text-white py-16 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-lg overflow-hidden border border-neutral-800 shadow-md bg-[#181A1E]">
                <img 
                  src="/images/stakeholder-meeting.jpg" 
                  alt="Roundtable consultation on road safety" 
                  className="w-full h-[360px] sm:h-[400px] object-cover"
                />
                <div className="p-3.5 bg-[#181A1E] border-t border-neutral-800 text-xs text-neutral-300">
                  Multisectoral dialogue uniting policymakers, industry, and civil society.
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <SectionHeader
                eyebrow="About The Alliance"
                title="One Platform for Safer Mobility"
                theme="dark"
                className="mb-6"
              />

              <div className="space-y-4 body-copy text-neutral-300">
                <p>
                  Established by <strong className="text-white">The Social Lab (TSL) in 2025</strong>, the India Road Safety Alliance is an industry-led, multi-stakeholder platform uniting government agencies, automotive manufacturers, CSR decision-makers, researchers, and civil society organisations.
                </p>
                <p>
                  Rather than isolated awareness drives, IRSA creates systemic coherence—connecting vehicle engineering, highway design, emergency trauma care, CSR capital, and public compliance under one collaborative framework.
                </p>
                <p>
                  2025 established the platform. The upcoming 2027 edition expands the conversation to the future of mobility in India.
                </p>
              </div>

              <div className="pt-2">
                <CTAButton to="/about" variant="primary">
                  Discover IRSA
                </CTAButton>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. IRSA 2027 FEATURE — PROMINENT EVENT PROFILE (WHITE BACKGROUND) */}
      <section className="bg-white py-16 sm:py-20 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="editorial-card p-8 sm:p-12 border border-neutral-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <span className="eyebrow-label">
                  Proposed Next Edition
                </span>

                <h3 className="main-heading">
                  IRSA Convention 2027
                </h3>

                <p className="body-copy">
                  Theme: <strong className="text-[#111111]">“Securing India's Mobility Future: Safety at the Centre of Everything That Moves.”</strong>
                </p>

                <p className="body-copy text-sm sm:text-base">
                  A planned two-day national convening in New Delhi bringing together ministerial leaders, corporate executives, innovators, and educators for focused dialogues, an active mobility expo, startup showcases, and national recognition.
                </p>

                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <CTAButton to="/irsa-2027" variant="primary">
                    Explore the Convention
                  </CTAButton>
                  <CTAButton to="/registration" variant="secondary">
                    Register Interest
                  </CTAButton>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-lg overflow-hidden border border-neutral-200">
                  <img 
                    src="/images/convention-expo.jpg" 
                    alt="IRSA 2027 mobility expo exhibition hall" 
                    className="w-full h-[280px] sm:h-[320px] object-cover"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 5. WAYS TO PARTICIPATE — THREE VISUALLY DISTINCT PANELS (BLACK BACKGROUND) */}
      <section className="bg-[#111111] text-white py-16 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="Engagement Pathways"
            title="Ways to Participate in IRSA"
            subtitle="Multiple avenues designed for organisations, innovators, educators, and leaders across the mobility spectrum."
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Panel 1 */}
            <div className="editorial-card-yellow-bg p-6 flex flex-col justify-between border-t-4 border-t-black">
              <div>
                <div className="h-44 rounded-md overflow-hidden mb-5 bg-[#1F2228] border border-black/10">
                  <img 
                    src="/images/stakeholder-meeting.jpg" 
                    alt="Join the Alliance" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="card-heading text-[#111111] text-lg font-bold">
                  Join the Alliance
                </h4>
                <p className="body-copy text-neutral-900 text-sm mt-2 leading-relaxed">
                  Sign the IRSA Charter and participate in roundtables, working groups, research benchmarks, and year-round collaborative programmes.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  to="/registration"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#111111] hover:bg-neutral-800 px-3.5 py-2 rounded shadow-xs transition-colors"
                >
                  <span>Explore Membership</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Panel 2 */}
            <div className="editorial-card-yellow-bg p-6 flex flex-col justify-between border-t-4 border-t-black">
              <div>
                <div className="h-44 rounded-md overflow-hidden mb-5 bg-[#1F2228] border border-black/10">
                  <img 
                    src="/images/convention-expo.jpg" 
                    alt="Participate in the Convention" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="card-heading text-[#111111] text-lg font-bold">
                  Participate in the Convention
                </h4>
                <p className="body-copy text-neutral-900 text-sm mt-2 leading-relaxed">
                  Attend thematic panels, register student delegations for the National Road Safety Olympiad, or present corporate case studies.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  to="/registration"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#111111] hover:bg-neutral-800 px-3.5 py-2 rounded shadow-xs transition-colors"
                >
                  <span>Participate in 2027</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Panel 3 */}
            <div className="editorial-card-yellow-bg p-6 flex flex-col justify-between border-t-4 border-t-black">
              <div>
                <div className="h-44 rounded-md overflow-hidden mb-5 bg-[#1F2228] border border-black/10">
                  <img 
                    src="/images/tech-monitoring.jpg" 
                    alt="Exhibit or Partner" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="card-heading text-[#111111] text-lg font-bold">
                  Exhibit or Partner
                </h4>
                <p className="body-copy text-neutral-900 text-sm mt-2 leading-relaxed">
                  Showcase active road-safety technologies, telematics, trauma dispatch systems, and infrastructure innovations in the mobility expo.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  to="/registration"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#111111] hover:bg-neutral-800 px-3.5 py-2 rounded shadow-xs transition-colors"
                >
                  <span>Partner With IRSA</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. AWARDS FEATURE — ELEGANT EDITORIAL PRESENTATION (YELLOW BACKGROUND) */}
      <section className="bg-[#FFC629] text-[#111111] py-16 sm:py-20 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <SectionHeader
                eyebrow="Proposed Recognition Platform"
                title="Recognising Leadership, Impact & Innovation"
                theme="yellow"
                className="mb-6"
              />

              <p className="body-copy text-neutral-900 font-medium">
                The proposed Road Safety &amp; Safe Mobility Awards aim to celebrate verified outcomes across vehicle engineering, behavioural interventions, strategic CSR capital, and scalable technological innovations.
              </p>

              <div className="space-y-3 pt-1 text-sm text-neutral-900 font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                  <span>Four configurable award categories spanning OEMs, CSR, and Startups</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                  <span>Independent multi-stakeholder jury evaluation methodology</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                  <span>Proposed recognition ceremony during the IRSA 2027 Convention</span>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap gap-4">
                <CTAButton to="/awards" variant="white">
                  Explore the Awards
                </CTAButton>
                <CTAButton to="/registration" variant="dark">
                  Nominate Now
                </CTAButton>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-lg overflow-hidden border-2 border-black/20 shadow-md">
                <img 
                  src="/images/awards-ceremony.jpg" 
                  alt="National road safety awards ceremony" 
                  className="w-full h-[360px] sm:h-[400px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. IRSA 2025 ARCHIVE — HISTORICAL EVENT (WHITE BACKGROUND) */}
      <section className="bg-white py-16 sm:py-20 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="rounded-lg overflow-hidden border border-neutral-200 shadow-sm">
                <img 
                  src="/images/irsa-2025-partners.jpg" 
                  alt="IRSA 2025 participant ecosystem" 
                  className="w-full h-auto object-contain bg-white p-4"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <SectionHeader
                eyebrow="Historical Benchmark"
                title="Where the Alliance Began: IRSA 2025"
                theme="white"
                className="mb-6"
              />

              <div className="space-y-3 body-copy">
                <p>
                  On <strong className="text-[#111111]">24 March 2025</strong> at Le Méridien, New Delhi, the inaugural convention brought together over 140 participants representing more than 30 corporates and 30 educational institutions.
                </p>
                <p>
                  The historical convention featured four documented panel discussions focusing on the Safe Systems Approach, collaborative action, smart safety technologies, and compliance psychology.
                </p>
              </div>

              <div className="pt-2">
                <CTAButton to="/irsa-2025" variant="secondary">
                  Explore IRSA 2025 Archive
                </CTAButton>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. FINAL CALL TO ACTION (BLACK BACKGROUND) */}
      <section className="bg-[#111111] text-white py-20 sm:py-24 border-t border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <span className="eyebrow-label text-[#FFC629] font-bold">
            National Mobility Future
          </span>

          <h2 className="main-heading text-[#FFC629]">
            SAFER ROADS. SAFER MOBILITY.{' '}
            <span className="text-white underline decoration-[#FFC629] decoration-4 underline-offset-8">
              SHARED RESPONSIBILITY.
            </span>
          </h2>

          <p className="body-copy text-neutral-200 max-w-2xl mx-auto">
            Join leaders from government, automotive manufacturing, corporate philanthropy, and civil society shaping collaborative road-safety solutions.
          </p>

          <div className="pt-4 flex flex-wrap gap-4 justify-center items-center">
            <CTAButton to="/registration" variant="primary">
              Register Your Interest
            </CTAButton>
            <CTAButton to="/contact" variant="outline-white">
              Contact the Secretariat
            </CTAButton>
          </div>

        </div>
      </section>

    </div>
  );
}
