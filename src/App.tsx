import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, Instagram, Dumbbell } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Plans from './components/Plans';
import Schedule from './components/Schedule';
import BMICalculator from './components/BMICalculator';
import Coaches from './components/Coaches';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate premium loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] bg-dark-950 flex flex-col items-center justify-center"
          >
            <div className="text-center relative">
              {/* Spinner logo ring */}
              <div className="relative w-24 h-24 mb-6 mx-auto">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                  className="absolute inset-0 border-4 border-dark-800 border-t-4 border-t-luxury-gold rounded-full"
                />
                <div className="absolute inset-2 rounded-full overflow-hidden">
                  <img
                    src="/src/assets/images/dose_gym_logo_1782248414630.jpg"
                    alt="Dose Gym Loading Logo"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              
              {/* Pulsing brand text */}
              <motion.h1
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="font-display text-4xl font-black text-luxury-gold tracking-widest italic"
              >
                DOSE<span className="text-white">GYM</span>
              </motion.h1>
              <p className="text-xs text-dark-400 font-bold tracking-widest uppercase mt-2">
                باقة الفخامة والقوة – كابتن محمود المصري
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-dark-950 min-h-screen text-dark-100 selection:bg-luxury-gold selection:text-dark-950 relative" dir="rtl">
        
        {/* Premium Luxury Grid Overlay */}
        <div className="fixed inset-0 pointer-events-none z-40 bg-[radial-gradient(#d4af37_0.4px,transparent_0.4px)] [background-size:24px_24px] opacity-[0.015]" />

        {/* Header Navigation */}
        <Header />

        {/* Hero Welcome Banner */}
        <Hero />

        {/* About Us section */}
        <About />

        {/* Membership and pricing tables */}
        <Plans />

        {/* Schedules and working hours details */}
        <Schedule />

        {/* Real-time BMI fitness calculator */}
        <BMICalculator />

        {/* Trainer Section (Only Captain Mahmoud El-Masry) */}
        <Coaches />

        {/* Photo Gallery with Interactive Lightbox */}
        <Gallery />

        {/* Real Customer Success Stories and Testimonials */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Contact info, google map & message proxy */}
        <Footer />

        {/* FLOATING ACTION ACTION BUTTONS (WhatsApp, Instagram, direct Call) */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
          
          {/* WhatsApp Floating CTA */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={`https://wa.me/201093617418?text=${encodeURIComponent('مرحباً كابتن محمود المصري، أود الاستفسار عن باقات التدريب وعروض الاشتراك المتاحة في Dose Gym.')}`}
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 bg-emerald-600 text-white rounded-none border-2 border-white shadow-2xl flex items-center justify-center transition-colors hover:bg-emerald-500 cursor-pointer group relative"
            title="تواصل معنا عبر واتساب"
          >
            <MessageCircle className="h-6 w-6" />
            <span className="absolute right-16 bg-black text-white text-xs font-black px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-luxury-gold pointer-events-none">
              🟢 واتساب: 01093617418
            </span>
          </motion.a>

          {/* Instagram Floating CTA */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.instagram.com/dose.gym"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white rounded-none border-2 border-white shadow-2xl flex items-center justify-center transition-colors cursor-pointer group relative"
            title="تابعنا على إنستغرام"
          >
            <Instagram className="h-6 w-6" />
            <span className="absolute right-16 bg-black text-white text-xs font-black px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-luxury-gold pointer-events-none">
              📸 إنستغرام: dose.gym
            </span>
          </motion.a>

          {/* Call Floating CTA */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="tel:01093617418"
            className="w-14 h-14 bg-luxury-gold text-black rounded-none border-2 border-white shadow-2xl flex items-center justify-center transition-colors hover:bg-white cursor-pointer group relative"
            title="اتصل بنا هاتفياً"
          >
            <Phone className="h-6 w-6" />
            <span className="absolute right-16 bg-black text-white text-xs font-black px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-luxury-gold pointer-events-none">
              📞 اتصل الآن: 01093617418
            </span>
          </motion.a>

        </div>

      </div>
    </>
  );
}
