import React, { useState } from 'react';
import { GALLERY_MOMENTS } from '../data/irsa2025Data';
import { Maximize2, X, Camera } from 'lucide-react';

export default function Gallery({ items = GALLERY_MOMENTS, limit, theme = 'white' }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const displayItems = limit ? items.slice(0, limit) : items;
  const isDark = theme === 'dark';

  // Curated imagery mapping
  const getImageForIndex = (index) => {
    const images = [
      '/images/stakeholder-meeting.jpg',
      '/images/convention-expo.jpg',
      '/images/awards-ceremony.jpg',
      '/images/student-safety.jpg',
      '/images/tech-monitoring.jpg',
      '/images/irsa-2025-partners.jpg'
    ];
    return images[index % images.length];
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage({ ...item, imageSrc: getImageForIndex(index) })}
            className={`${isDark ? 'editorial-card-dark' : 'editorial-card'} overflow-hidden group cursor-pointer flex flex-col justify-between`}
          >
            <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden">
              <img 
                src={getImageForIndex(index)} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className={`p-5 space-y-1 ${isDark ? 'bg-[#181A1E]' : 'bg-white'}`}>
              <span className={`text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded inline-block ${
                isDark ? 'bg-neutral-800 text-[#FFC629]' : 'text-[#111111] bg-neutral-100'
              }`}>
                {item.category}
              </span>
              <h4 className={`card-heading text-base group-hover:text-[#FFC629] transition-colors pt-1 ${
                isDark ? 'text-[#FFC629]' : 'text-[#111111]'
              }`}>
                {item.title}
              </h4>
              <p className={`body-copy text-xs leading-relaxed ${isDark ? 'text-neutral-200' : 'text-neutral-600'}`}>
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Clean White Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="relative max-w-2xl w-full bg-white p-6 sm:p-8 rounded-lg border border-neutral-200 shadow-2xl space-y-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-[#111111] bg-neutral-100 rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full aspect-video rounded-md overflow-hidden bg-neutral-100 border border-neutral-200">
              <img 
                src={selectedImage.imageSrc} 
                alt={selectedImage.title} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#111111] bg-[#FFC629]/20 px-2.5 py-0.5 rounded inline-block">
                {selectedImage.category}
              </span>
              <h3 className="section-heading text-xl text-[#111111] pt-1">
                {selectedImage.title}
              </h3>
              <p className="body-copy text-sm">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
