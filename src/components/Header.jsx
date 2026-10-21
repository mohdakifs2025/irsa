import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { SITE_METADATA } from '../data/siteData';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About IRSA', path: '/about' },
  { name: 'IRSA 2027', path: '/irsa-2027' },
  { name: 'Registration', path: '/registration' },
  { name: 'Awards', path: '/awards' },
  { name: 'IRSA 2025', path: '/irsa-2025' },
  { name: 'Contact', path: '/contact' },
];

export default function Header({ onOpenForm }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      
      {/* 1. Announcement Strip — White Background, Black Text, Yellow Border */}
      <div className="bg-white border-b border-[#FFC629] text-[#111111] py-1.5 px-4 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 sm:gap-4 flex-wrap text-center">
          <span>IRSA Convention 2027</span>
          <span className="text-neutral-300">|</span>
          <span>January 2027</span>
          <span className="text-neutral-300">|</span>
          <span>New Delhi</span>
          <span className="text-neutral-300">|</span>
          <Link 
            to="/registration" 
            className="font-semibold text-[#111111] underline decoration-[#FFC629] decoration-2 underline-offset-2 hover:text-[#EBB21E] transition-colors"
          >
            Register Your Interest
          </Link>
        </div>
      </div>

      {/* 2. Main Navigation — White Background, Subtle Border */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo and Wordmark */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src={SITE_METADATA.logoUrl} 
                alt="IRSA Logo" 
                className="h-10 w-auto object-contain" 
              />
              <div className="flex flex-col leading-none">
                <span className="font-bold text-lg text-[#111111] tracking-tight">
                  IRSA
                </span>
                <span className="text-[10px] tracking-wider uppercase text-neutral-500 font-medium mt-0.5">
                  India Road Safety Alliance
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="hidden lg:flex items-center space-x-7 list-none m-0 p-0">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `relative py-2 text-[14.5px] font-medium transition-colors ${
                        isActive
                          ? 'text-[#111111] font-semibold'
                          : 'text-[#4B5563] hover:text-[#111111]'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{link.name}</span>
                        {isActive && (
                          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFC629] rounded-full" />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Register Now CTA Button */}
            <div className="flex items-center space-x-3">
              <Link
                to="/registration"
                className="hidden sm:inline-flex items-center justify-center bg-[#FFC629] text-[#111111] font-semibold text-xs uppercase tracking-wider px-4 py-2.5 rounded-md hover:bg-[#EBB21E] transition-colors shadow-sm"
              >
                Register Now
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#111111] hover:bg-neutral-100 rounded-md transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-neutral-200 px-4 pt-2 pb-6 space-y-1 shadow-md">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `block py-2.5 px-3 rounded-md text-sm font-medium ${
                    isActive 
                      ? 'bg-neutral-100 text-[#111111] font-semibold border-l-2 border-[#FFC629]' 
                      : 'text-[#4B5563] hover:text-[#111111] hover:bg-neutral-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-3">
              <Link
                to="/registration"
                className="w-full flex items-center justify-center bg-[#FFC629] text-[#111111] font-semibold text-xs uppercase tracking-wider py-3 rounded-md shadow-sm"
              >
                Register Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
