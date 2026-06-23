import { motion } from 'motion/react';
import { Award, Zap, Users, Sparkles, ChevronDown, MessageSquare } from 'lucide-react';

export default function Hero() {
  const stats = [
    { value: '١+', label: 'كابتن محمود المصري', icon: Award },
    { value: '٥٠٠م²', label: 'صالة رياضية واسعة', icon: Sparkles },
    { value: '١٠٠٪', label: 'توجيه ونتائج واقعية', icon: Users },
    { value: '٢٤/٧', label: 'متابعة داخل الصالة', icon: Zap },
  ];

  const handleWhatsAppRedirect = () => {
    const textMessage = 'مرحباً كابتن محمود المصري، أود الاستفسار عن عروض الاشتراك والبدء في Dose Gym!';
    const whatsappUrl = `https://wa.me/201093617418?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleLearnMoreScroll = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-950 pt-20"
      dir="rtl"
    >
      {/* Background Image with Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1920"
          alt="Premium luxury gym interior at Dose Gym"
          className="w-full h-full object-cover scale-105 filter brightness-35 contrast-105"
          referrerPolicy="no-referrer"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/70 to-dark-950/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/90 via-transparent to-dark-950/10" />
        {/* Gold Light Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-luxury-gold-dark/10 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 pb-24">
        
        {/* Visual Brand Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-dark-900 border-2 border-luxury-gold px-6 py-2.5 mb-6 rounded-none"
        >
          <span className="w-2.5 h-2.5 bg-luxury-gold animate-pulse"></span>
          <span className="text-luxury-gold font-display text-xs sm:text-sm font-black uppercase tracking-widest">
            Dose Gym – تحت إشراف كابتن محمود المصري
          </span>
        </motion.div>

        {/* Logo Text & Sub-logo Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 flex flex-col items-center justify-center gap-3"
        >
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-luxury-gold shadow-[0_0_35px_rgba(212,175,55,0.35)] overflow-hidden">
            <img
              src="/dose_gym_logo_1782248414630.jpg"
              alt="Dose Gym Logo"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-display text-4xl sm:text-6xl font-black tracking-tighter text-luxury-gold italic mt-2">
            DOSE<span className="text-white">GYM</span>
          </span>
          <div className="text-gray-400 text-sm sm:text-base font-bold tracking-widest mt-1">
            تحت إدارة وإشراف: <strong className="text-white">كابتن محمود المصري</strong>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-tight mb-6 max-w-4xl mx-auto italic tracking-tighter uppercase"
        >
          حوّل جسمك <br />
          إلى <span className="text-luxury-gold">أقوى نسخة منك</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-300 text-lg sm:text-xl max-w-xl mx-auto mb-10 font-bold leading-relaxed tracking-wide"
        >
          تدريب احترافي – نتائج حقيقية – بيئة قوية
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 relative z-20"
        >
          <button
            onClick={handleWhatsAppRedirect}
            className="w-full sm:w-auto bg-luxury-gold text-black font-black text-base sm:text-lg px-10 py-4.5 uppercase tracking-wider hover:bg-white hover:text-black transition-colors rounded-none cursor-pointer flex items-center justify-center gap-2.5 border-2 border-luxury-gold"
          >
            <MessageSquare className="h-5 w-5" />
            تواصل الآن عبر واتساب
          </button>
          
          <button
            onClick={handleLearnMoreScroll}
            className="w-full sm:w-auto bg-transparent hover:bg-white/5 border-2 border-white text-white font-black text-base sm:text-lg px-10 py-4.5 uppercase tracking-wider transition-colors rounded-none cursor-pointer"
          >
            من نحن وتفاصيل الجيم
          </button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto border-t-2 border-dark-800 pt-10"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="bg-dark-900 border-2 border-dark-800 rounded-none p-5 hover:border-luxury-gold transition-all duration-300 flex items-center gap-4 text-right"
              >
                <div className="bg-luxury-gold/10 p-3 rounded-none flex-shrink-0 border border-luxury-gold/20">
                  <Icon className="h-6 w-6 text-luxury-gold" />
                </div>
                <div>
                  <div className="font-display text-xl sm:text-2xl font-black text-white italic leading-tight">{stat.value}</div>
                  <div className="text-dark-400 text-[10px] sm:text-xs font-black uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>

      {/* Big Watermark text layer background */}
      <div className="absolute left-12 bottom-0 top-0 flex flex-col justify-center items-end opacity-[0.03] pointer-events-none select-none">
        <span className="text-[140px] sm:text-[180px] lg:text-[220px] font-black leading-none italic text-white tracking-tighter">
          DOSE
        </span>
      </div>

      {/* Down Scroll Anchor */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
        <span className="text-dark-500 text-[10px] mb-1 tracking-wider uppercase font-black">اسحب لأسفل</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="h-5 w-5 text-luxury-gold" />
        </motion.div>
      </div>
    </section>
  );
}
