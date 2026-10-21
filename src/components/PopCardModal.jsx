import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import FormContainer from './FormContainer';

export default function PopCardModal({
  isOpen,
  onClose,
  title = "Register Your Interest",
  track = "",
  formType = "registration"
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="relative max-w-2xl w-full bg-white text-[#111111] p-6 sm:p-10 border border-neutral-200 rounded-lg shadow-2xl max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-[#111111] hover:bg-neutral-100 rounded-full transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <FormContainer
          formType={formType}
          selectedTrack={track}
          title={title}
          subtitle={`Submit your details for ${track || 'IRSA Convention 2027'}.`}
        />
      </div>
    </div>
  );
}
