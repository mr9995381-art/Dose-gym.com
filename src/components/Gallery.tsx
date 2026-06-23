import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const images: GalleryImage[] = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
      title: 'منطقة الأوزان الحرة والحديد المستورد',
      category: 'أجهزة القوة',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800',
      title: 'أحدث أجهزة الكارديو واللياقة البدنية',
      category: 'الكارديو',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
      title: 'أدوات التدريب الوظيفي والفتنس',
      category: 'اللياقة',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800',
      title: 'بيئة تدريب حماسية ورفقاء شغوفين',
      category: 'النشاط',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
      title: 'أجهزة عزل وعضلات مخصصة ومبتكرة',
      category: 'أجهزة القوة',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=800',
      title: 'مساحات تدريب منظمة ونظيفة بالكامل',
      category: 'الصالة',
    },
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % images.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-dark-950 relative overflow-hidden" dir="rtl">
      {/* Background Watermark decoration */}
      <div className="absolute left-10 top-1/4 flex flex-col justify-start items-start opacity-5 pointer-events-none select-none">
        <span className="text-[120px] font-black leading-none italic text-white tracking-tighter">GALLERY</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-luxury-gold font-display font-black text-xs tracking-widest uppercase border-2 border-luxury-gold px-4 py-1.5 rounded-none inline-block">
            معرض الصور
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white mt-4 italic uppercase tracking-tighter">
            جولة داخل <span className="text-luxury-gold">Dose Gym</span>
          </h2>
          <p className="text-gray-300 mt-4 text-sm sm:text-base max-w-xl mx-auto font-bold">
            شاهد بيئة التدريب الحماسية، خطوط الأجهزة المستوردة المبتكرة، والأجواء الفخمة المجهزة بالكامل لك في بولاق الدكرور
          </p>
          <div className="w-24 h-1.5 bg-luxury-gold mx-auto mt-4" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setSelectedIdx(idx)}
              className="relative aspect-video sm:aspect-[4/3] bg-dark-900 border-2 border-dark-800 hover:border-luxury-gold overflow-hidden group cursor-pointer transition-all duration-300"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6 text-right">
                <span className="text-luxury-gold font-black text-[10px] uppercase tracking-widest mb-1">
                  {img.category}
                </span>
                <h4 className="text-white font-black text-base sm:text-lg mb-2 font-display">
                  {img.title}
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-gray-300 font-bold border-t border-dark-800/80 pt-2">
                  <Maximize2 className="h-3.5 w-3.5 text-luxury-gold" />
                  <span>تكبير الصورة</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIdx(null)}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIdx(null)}
                className="absolute top-6 right-6 text-white hover:text-luxury-gold bg-dark-900 p-2.5 border-2 border-dark-800 hover:border-luxury-gold transition-all duration-200 z-50 cursor-pointer"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation controls */}
              <button
                onClick={handlePrev}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-luxury-gold bg-dark-900/60 p-3 border-2 border-dark-800 hover:border-luxury-gold transition-all duration-200 z-50 cursor-pointer hidden sm:block"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-luxury-gold bg-dark-900/60 p-3 border-2 border-dark-800 hover:border-luxury-gold transition-all duration-200 z-50 cursor-pointer hidden sm:block"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Central Box */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full max-h-[80vh] flex flex-col items-center justify-center"
              >
                <img
                  src={images[selectedIdx].url}
                  alt={images[selectedIdx].title}
                  className="max-w-full max-h-[70vh] object-contain border-4 border-luxury-gold shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                
                {/* Description bar */}
                <div className="mt-4 text-center max-w-xl">
                  <span className="text-luxury-gold text-xs font-black uppercase tracking-widest">
                    {images[selectedIdx].category}
                  </span>
                  <p className="text-white text-base sm:text-lg font-black font-display mt-1">
                    {images[selectedIdx].title}
                  </p>
                  <p className="text-dark-400 text-xs mt-2 font-bold">
                    صورة {selectedIdx + 1} من {images.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
