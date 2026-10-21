import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_METADATA } from '../data/siteData';

export default function Footer({ onOpenForm }) {
  return (
    <footer className="bg-white border-t border-neutral-200 text-[#111111] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-neutral-200">
          
          {/* Institutional Brand Info (Cols 1-2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group inline-block">
              <img 
                src={SITE_METADATA.logoUrl} 
                alt="IRSA Logo" 
                className="h-11 w-auto object-contain" 
              />
              <div className="flex flex-col leading-none">
                <span className="font-bold text-xl text-[#111111] tracking-tight">
                  IRSA
                </span>
                <span className="text-[10px] tracking-wider uppercase text-neutral-500 font-medium mt-0.5">
                  India Road Safety Alliance
                </span>
              </div>
            </Link>

            <p className="text-sm text-neutral-600 leading-relaxed max-w-md">
              A multi-stakeholder platform uniting government, industry leaders, CSR decision-makers, researchers, and civil society to advance safer roads and secure India's mobility future.
            </p>

            {/* The Social Lab Acknowledgement */}
            <div className="pt-2">
              <span className="inline-flex items-center text-xs font-medium text-neutral-700 bg-neutral-100 border border-neutral-200 px-3 py-1.5 rounded-md">
                Established &amp; Anchored by <strong className="text-[#111111] ml-1">The Social Lab (TSL)</strong> in 2025
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#111111] border-b border-neutral-100 pb-2">
              Website Routes
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600 list-none p-0 m-0">
              <li><Link to="/" className="hover:text-[#111111] hover:underline decoration-[#FFC629] decoration-2 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#111111] hover:underline decoration-[#FFC629] decoration-2 transition-colors">About IRSA</Link></li>
              <li><Link to="/irsa-2027" className="hover:text-[#111111] hover:underline decoration-[#FFC629] decoration-2 transition-colors">IRSA 2027 Convention</Link></li>
              <li><Link to="/registration" className="hover:text-[#111111] hover:underline decoration-[#FFC629] decoration-2 transition-colors">Registration &amp; Membership</Link></li>
              <li><Link to="/awards" className="hover:text-[#111111] hover:underline decoration-[#FFC629] decoration-2 transition-colors">National Awards</Link></li>
              <li><Link to="/irsa-2025" className="hover:text-[#111111] hover:underline decoration-[#FFC629] decoration-2 transition-colors">IRSA 2025 Archive</Link></li>
              <li><Link to="/contact" className="hover:text-[#111111] hover:underline decoration-[#FFC629] decoration-2 transition-colors">Secretariat Contact</Link></li>
            </ul>
          </div>

          {/* Convention & Participation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#111111] border-b border-neutral-100 pb-2">
              Convention &amp; Secretariat
            </h4>
            <div className="space-y-2 text-sm text-neutral-600">
              <p>
                <strong className="text-[#111111] block">IRSA Convention 2027</strong>
                January 2027 | New Delhi
              </p>
              <p className="text-xs text-neutral-500">
                Exact dates and venue will be shared with registered delegates upon confirmation.
              </p>
              <div className="pt-2">
                <Link
                  to="/registration"
                  className="inline-flex items-center text-xs font-semibold text-[#111111] bg-[#FFC629] px-3.5 py-1.5 rounded-md hover:bg-[#EBB21E] transition-colors"
                >
                  Register Your Interest →
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-3">
          <div>
            © {new Date().getFullYear()} India Road Safety Alliance (IRSA). All rights reserved.
          </div>
          <div className="text-center sm:text-right">
            IRSA is an industry-led convening platform. It is not a government authority, statutory body or regulator.
          </div>
        </div>

      </div>
    </footer>
  );
}
