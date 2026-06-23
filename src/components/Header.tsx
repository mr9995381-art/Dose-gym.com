import React, { useState, useEffect } from 'react';
import { Dumbbell, Menu, X, Phone, MessageSquare } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'من نحن', href: '#about' },
    { name: 'الباقات', href: '#plans' },
    { name: 'الجدول', href: '#schedule' },
    { name: 'الحاسبة الرياضية', href: '#bmi' },
    { name: 'المدرب', href: '#coaches' },
    { name: 'معرض الصور', href: '#gallery' },
    { name: 'آراء الأبطال', href: '#testimonials' },
    { name: 'الأسئلة الشائعة', href: '#faq' },
    { name: 'اتصل بنا', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppJoin = () => {
    const textMessage = 'مرحباً كابتن محمود المصري، أود الاستفسار عن عروض الاشتراك المتاحة والانضمام إلى Dose Gym!';
    const whatsappUrl = `https://wa.me/201093617418?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/95 backdrop-blur-md border-b-2 border-luxury-gold/15 py-3 shadow-lg'
          : 'bg-gradient-to-b from-dark-950/80 to-transparent py-5'
      }`}
      dir="rtl"
      id="app-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="bg-luxury-gold p-2 rounded-none border-2 border-black flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              <Dumbbell className="h-6 w-6 text-black transform -rotate-45" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-black tracking-tighter text-luxury-gold italic">
                DOSE<span className="text-white">GYM</span>
              </span>
              <span className="text-[9px] text-dark-300 tracking-[0.2em] font-black leading-none -mt-0.5 uppercase">
                باقة الفخامة والقوة
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-gray-300 hover:text-luxury-gold font-black text-xs uppercase tracking-widest transition-colors duration-200 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Call to Action and Contact */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:01093617418"
              className="flex items-center gap-2 text-dark-300 hover:text-luxury-gold text-xs font-black tracking-wider transition-colors duration-200"
            >
              <Phone className="h-4 w-4 text-luxury-gold" />
              <span className="font-mono">0109 361 7418</span>
            </a>
            <button
              onClick={handleWhatsAppJoin}
              className="px-6 py-2.5 border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black font-black text-xs uppercase tracking-widest transition-all duration-200 rounded-none cursor-pointer flex items-center gap-1.5"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              تواصل واتساب
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex xl:hidden items-center gap-3">
            <button
              onClick={handleWhatsAppJoin}
              className="bg-luxury-gold text-black font-black px-4 py-2 text-xs uppercase tracking-widest rounded-none border-2 border-luxury-gold"
            >
              تواصل
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              className="inline-flex items-center justify-center p-2 rounded-none text-dark-300 hover:text-luxury-gold hover:bg-dark-900 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen border-b-2 border-luxury-gold/15 bg-dark-900/98 backdrop-blur-lg' : 'max-h-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block px-4 py-3 rounded-none text-base font-black text-white hover:bg-dark-800 hover:text-luxury-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-dark-800 flex flex-col gap-3 px-4">
            <a
              href="tel:01093617418"
              className="flex items-center gap-3 text-dark-300 hover:text-luxury-gold text-base py-2"
            >
              <Phone className="h-5 w-5 text-luxury-gold" />
              <span className="font-mono">0109 361 7418</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
