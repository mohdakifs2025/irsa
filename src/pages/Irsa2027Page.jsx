import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { EIGHT_CONVERSATIONS } from '../data/irsa2027Data';

const EVENT_EXPERIENCES = [
  {
    title: "Road Safety & Safe Mobility Expo",
    desc: "A curated discovery exhibition featuring live vehicle safety demonstrations, advanced driver telematics, collision avoidance sensors, and emergency medical equipment.",
    image: "/images/convention-expo.jpg"
  },
  {
    title: "Startup Innovation Bootcamp",
    desc: "A competitive national platform giving high-potential road safety and mobility tech startups the opportunity to present to industry leaders and corporate venture funds.",
    image: "/images/tech-monitoring.jpg"
  },
  {
    title: "Student Engagement & Olympiad",
    desc: "The finale of the National Road Safety Olympiad, bringing youth ambassadors and educational institutions together to showcase student-led pedestrian and traffic safety solutions.",
    image: "/images/student-safety.jpg"
  },
  {
    title: "National Road Safety Awards",
    desc: "An evidence-based ceremony recognising outstanding contributions across automotive OEMs, corporate CSR programmes, technological innovations, and civil society.",
    image: "/images/awards-ceremony.jpg"
  }
];

export default function Irsa2027Page({ onOpenForm }) {
  return (
    <div className="bg-white pt-24 sm:pt-28 pb-16">
      
      {/* 1. HERO (BLACK BACKGROUND) */}
      <section className="bg-[#111111] text-white py-12 sm:py-16 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="eyebrow-label text-[#FFC629] font-bold">
                Proposed Convention 2027
              </span>

              <h1 className="hero-headline text-[#FFC629]">
                Securing India's{' '}
                <span className="text-white underline decoration-[#FFC629] decoration-4 underline-offset-8">
                  Mobility
                </span>{' '}
                Future
              </h1>

              <p className="text-lg font-medium text-white">
                “Safety at the Centre of Everything That Moves.”
              </p>

              <p className="body-copy text-neutral-200 max-w-xl">
                A planned landmark two-day national convening bringing together government, automotive leaders, CSR decision-makers, innovators, and educators to deliberate on India's road safety roadmap.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <CTAButton to="/registration" variant="primary">
                  Register Your Interest
                </CTAButton>
                <CTAButton to="/awards" variant="outline-white">
                  Explore Awards
                </CTAButton>
              </div>

              {/* Event Metadata Cards */}
              <div className="pt-4 flex flex-wrap gap-5 text-xs text-neutral-200 font-medium border-t border-neutral-800">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#FFC629] stroke-[2.5]" />
                  <span>January 2027 (Proposed)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#FFC629] stroke-[2.5]" />
                  <span>New Delhi, India</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#FFC629] stroke-[2.5]" />
                  <span>Proposed 2-Day Programme</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-lg overflow-hidden border border-neutral-800 shadow-md bg-[#181A1E]">
                <img 
                  src="/images/convention-expo.jpg" 
                  alt="IRSA Convention 2027 venue and expo hall" 
                  className="w-full h-[360px] sm:h-[400px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. EVENT OVERVIEW (YELLOW BACKGROUND) */}
      <section className="bg-[#FFC629] text-[#111111] py-16 sm:py-20 border-b border-black/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <SectionHeader
            eyebrow="Convening Scope"
            title="A Multi-Stakeholder National Platform"
            subtitle="Bridging policy, capital, technology, and public compliance to achieve measurable reductions in road fatalities."
            theme="yellow"
          />

          <div className="space-y-4 body-copy text-neutral-900 font-medium">
            <p>
              The proposed IRSA Convention 2027 expands the initial 2025 platform to encompass the wider transition towards electric vehicles, autonomous safety systems, high-speed expressway corridors, and integrated emergency trauma response.
            </p>
            <p>
              Over two intensive days, the convention will host eight thematic panel dialogues, an active mobility exhibition, corporate case study showcases, youth educational challenges, and the national road safety awards.
            </p>
          </div>
        </div>
      </section>

      {/* 3. TWO-DAY PROGRAMME (WHITE BACKGROUND) */}
      <section className="bg-white py-16 sm:py-20 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="Proposed Agenda Architecture"
            title="Two-Day Programme Structure"
            subtitle="Structured around two complementary themes to bridge institutional policy and frontline execution."
            theme="white"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Day 1 Panel */}
            <div className="editorial-card p-8 space-y-4 border-t-4 border-t-[#FFC629]">
              <div className="flex items-center justify-between">
                <span className="eyebrow-label text-xs">
                  Day 1 Proposed Focus
                </span>
                <span className="text-xs font-mono font-medium text-neutral-400">
                  Programme Track 1
                </span>
              </div>

              <h3 className="section-heading text-2xl text-[#111111]">
                Policy, Industry &amp; Solutions
              </h3>

              <p className="body-copy text-sm sm:text-base">
                Focuses on governance frameworks, vehicular safety standards, inter-ministerial coordination, strategic CSR funding, and system-wide accountability.
              </p>

              <div className="pt-2 border-t border-neutral-100 text-xs font-semibold text-neutral-800">
                Four Thematic Morning and Afternoon Dialogues
              </div>
            </div>

            {/* Day 2 Panel */}
            <div className="editorial-card p-8 space-y-4 border-t-4 border-t-[#111111]">
              <div className="flex items-center justify-between">
                <span className="eyebrow-label text-xs">
                  Day 2 Proposed Focus
                </span>
                <span className="text-xs font-mono font-medium text-neutral-400">
                  Programme Track 2
                </span>
              </div>

              <h3 className="section-heading text-2xl text-[#111111]">
                Innovation, Action &amp; Recognition
              </h3>

              <p className="body-copy text-sm sm:text-base">
                Deep dives into AI scaling, driver behaviour modification, Golden Hour trauma care networks, school safety initiatives, and the National Awards Ceremony.
              </p>

              <div className="pt-2 border-t border-neutral-100 text-xs font-semibold text-neutral-800">
                Four Thematic Sessions &amp; National Awards Ceremony
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. EIGHT THEMATIC PANEL DISCUSSIONS (BLACK BACKGROUND) */}
      <section className="bg-[#111111] text-white py-16 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="Working Thematic Dialogues"
            title="Eight Core Panel Dialogues"
            subtitle="Thematic areas in the working concept note. Titles, speakers, and final schedules remain subject to official confirmation."
            theme="dark"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EIGHT_CONVERSATIONS.map((session) => (
              <div key={session.id} className="editorial-card-yellow-bg p-6 flex flex-col justify-between border-t-4 border-t-black">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#111111] mb-2.5 font-bold">
                    <span className="uppercase tracking-wider">{session.day}</span>
                    <span className="bg-black text-[#FFC629] px-2 py-0.5 rounded text-[11px] font-bold">Session {session.code}</span>
                  </div>
                  <h4 className="card-heading text-[#111111] text-base font-bold">
                    {session.title}
                  </h4>
                  <p className="text-xs italic text-neutral-800 mt-1 font-semibold">
                    {session.subtitle}
                  </p>
                  <p className="body-copy text-neutral-900 text-xs mt-2.5 leading-relaxed font-normal">
                    {session.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. EVENT EXPERIENCES (WHITE BACKGROUND) */}
      <section className="bg-white py-16 sm:py-20 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="Convention Components"
            title="Curated Event Experiences"
            subtitle="Diverse engagement touchpoints showcasing technologies, startup pitches, youth programmes, and national recognition."
            theme="white"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EVENT_EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="editorial-card overflow-hidden flex flex-col sm:flex-row">
                <div className="sm:w-1/2 h-52 sm:h-auto bg-neutral-100">
                  <img 
                    src={exp.image} 
                    alt={exp.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="sm:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <h4 className="card-heading text-lg text-[#111111]">
                      {exp.title}
                    </h4>
                    <p className="body-copy text-xs sm:text-sm mt-2">
                      {exp.desc}
                    </p>
                  </div>
                  <div className="pt-4">
                    <Link
                      to="/registration"
                      className="text-xs font-semibold text-[#111111] hover:text-[#EBB21E] flex items-center gap-1 transition-colors"
                    >
                      <span>Register for Track</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. FINAL CTA (YELLOW BACKGROUND) */}
      <section className="bg-[#FFC629] text-[#111111] py-20 text-center border-t border-black/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <span className="eyebrow-label text-[#111111] font-bold">
            Be Part of the Convening
          </span>
          <h2 className="main-heading text-[#111111]">
            Secure Your Place at IRSA 2027
          </h2>
          <p className="body-copy text-neutral-900 font-medium">
            Register your interest today to receive convention dates, venue announcements, speaker updates, and participation pathways directly from the Secretariat.
          </p>
          <div className="pt-3 flex flex-wrap gap-4 justify-center items-center">
            <CTAButton to="/registration" variant="white">
              Register Your Interest
            </CTAButton>
            <CTAButton to="/awards" variant="dark">
              Explore Awards
            </CTAButton>
          </div>
        </div>
      </section>

    </div>
  );
}
