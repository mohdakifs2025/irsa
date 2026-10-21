import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollRevealObserver from './components/ScrollRevealObserver';
import PopCardModal from './components/PopCardModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Irsa2027Page from './pages/Irsa2027Page';
import RegistrationPage from './pages/RegistrationPage';
import AwardsPage from './pages/AwardsPage';
import Irsa2025Page from './pages/Irsa2025Page';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [popCardState, setPopCardState] = useState({
    isOpen: false,
    track: '',
    formType: 'registration'
  });

  const handleOpenForm = (track = '', formType = 'registration') => {
    setPopCardState({
      isOpen: true,
      track,
      formType
    });
  };

  const handleCloseForm = () => {
    setPopCardState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <Router>
      <ScrollToTop />
      <ScrollRevealObserver />
      <div className="min-h-screen bg-white text-[#111111] flex flex-col font-sans selection:bg-[#FFC629] selection:text-[#111111]">
        <Header onOpenForm={handleOpenForm} />
        
        <main className="flex-grow bg-white">
          <Routes>
            <Route path="/" element={<HomePage onOpenForm={handleOpenForm} />} />
            <Route path="/about" element={<AboutPage onOpenForm={handleOpenForm} />} />
            <Route path="/irsa-2027" element={<Irsa2027Page onOpenForm={handleOpenForm} />} />
            <Route path="/registration" element={<RegistrationPage onOpenForm={handleOpenForm} />} />
            <Route path="/awards" element={<AwardsPage onOpenForm={handleOpenForm} />} />
            <Route path="/irsa-2025" element={<Irsa2025Page onOpenForm={handleOpenForm} />} />
            <Route path="/contact" element={<ContactPage onOpenForm={handleOpenForm} />} />
            <Route path="*" element={<HomePage onOpenForm={handleOpenForm} />} />
          </Routes>
        </main>

        <Footer onOpenForm={handleOpenForm} />

        {/* Global Application Pop Card Modal */}
        <PopCardModal
          isOpen={popCardState.isOpen}
          onClose={handleCloseForm}
          track={popCardState.track}
          formType={popCardState.formType}
        />
      </div>
    </Router>
  );
}
