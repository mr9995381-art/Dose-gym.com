import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, Dumbbell, Instagram } from 'lucide-react';

export default function Footer() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) return;

    // Direct WhatsApp redirect on message form submit
    const textMessage = `مرحباً كابتن محمود المصري، أنا ${name} (رقم تليفوني: ${phone}). لدي استفسار: ${message}`;
    const whatsappUrl = `https://wa.me/201093617418?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, '_blank');

    setName('');
    setPhone('');
    setMessage('');
  };

  return (
    <footer id="contact" className="bg-dark-950 border-t-4 border-luxury-gold pt-24 pb-8 relative overflow-hidden" dir="rtl">
      
      {/* Light spots */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Contact form & maps grid */}
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b-2 border-dark-900">
          
          {/* Quick contact and message form (col-span-7) */}
          <div className="lg:col-span-7 space-y-8 text-right">
            <div>
              <span className="text-luxury-gold font-display font-black text-xs tracking-widest uppercase border-2 border-luxury-gold px-4 py-1.5 rounded-none inline-block">
                تواصل معنا
              </span>
              <h2 className="text-4xl sm:text-5xl font-display font-black text-white mt-4 italic uppercase tracking-tighter">
                هل لديك أي <span className="text-luxury-gold">استفسارات أو أسئلة؟</span>
              </h2>
              <p className="text-gray-300 mt-2 text-sm sm:text-base font-bold">
                يسعدنا الرد على جميع استفساراتكم حول الاشتراكات والمواعيد وخدمات صالة دوز جيم الرياضية. اكتب رسالتك وسنقوم بالرد المباشر معك عبر واتساب.
              </p>
            </div>

            {/* Form */}
            <div className="bg-dark-900 border-2 border-dark-800 rounded-none p-6 sm:p-8">
              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black text-dark-200 mb-1.5 uppercase tracking-wide">الاسم الكريم:</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="مثال: أحمد جمال"
                      className="w-full bg-dark-950 border-2 border-dark-800 focus:border-luxury-gold rounded-none px-4 py-3 text-white focus:outline-none text-right text-sm font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-dark-200 mb-1.5 uppercase tracking-wide">رقم تليفونك:</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="مثال: 010xxxxxxxx"
                      className="w-full bg-dark-950 border-2 border-dark-800 focus:border-luxury-gold rounded-none px-4 py-3 text-white focus:outline-none text-left pl-4 text-sm font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black text-dark-200 mb-1.5 uppercase tracking-wide">استفسارك أو رسالتك:</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="اكتب هنا استفسارك حول المتابعة التدريبية، أوقات معينة، أو عروض الاشتراكات..."
                    className="w-full bg-dark-950 border-2 border-dark-800 focus:border-luxury-gold rounded-none px-4 py-3 text-white focus:outline-none text-right text-sm leading-relaxed font-bold"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-luxury-gold text-black font-black px-8 py-3.5 rounded-none border-2 border-luxury-gold hover:bg-white hover:text-black hover:border-white transition-colors cursor-pointer flex items-center justify-center gap-2 self-end text-xs uppercase tracking-widest"
                >
                  <Send className="h-4 w-4" />
                  <span>أرسل الاستفسار عبر واتساب</span>
                </button>
              </form>
            </div>
          </div>

          {/* Location details & Real Map Embed (col-span-5) */}
          <div className="lg:col-span-5 space-y-6 text-right">
            <div>
              <h3 className="text-xl font-black text-white font-display mb-2 uppercase tracking-wide italic">مقرنا واتصالاتنا المباشرة</h3>
              <p className="text-xs text-dark-400 font-bold">شرفنا بالزيارة وتعرّف على الصالة والأجهزة والمدربين على الطبيعة.</p>
            </div>

            {/* Quick stats items */}
            <div className="space-y-4">
              
              <div className="flex items-start gap-4 bg-dark-900/40 p-4 rounded-none border-2 border-dark-800">
                <div className="bg-luxury-gold text-black p-2.5 rounded-none border border-black flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-black text-sm">عنوان دوز جيم:</h4>
                  <p className="text-xs text-dark-300 mt-1 font-bold leading-relaxed">
                    يوسف مراد، بولاق الدكرور، الجيزة، مصر.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-dark-900/40 p-4 rounded-none border-2 border-dark-800">
                <div className="bg-luxury-gold text-black p-2.5 rounded-none border border-black flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-black text-sm">الاتصال السريع والواتساب:</h4>
                  <a href="tel:01093617418" className="text-xs text-luxury-gold font-mono mt-1 hover:underline block" dir="ltr">
                    +20 109 361 7418
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-dark-900/40 p-4 rounded-none border-2 border-dark-800">
                <div className="bg-luxury-gold text-black p-2.5 rounded-none border border-black flex-shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-black text-sm">أوقات العمل المعتادة:</h4>
                  <p className="text-xs text-dark-300 mt-1 leading-relaxed font-bold">
                    من السبت إلى الخميس (١٠:٠٠ ص حتى ٢:٠٠ ص) <br />
                    الجمعة (٢:٠٠ م حتى ١١:٠٠ م)
                  </p>
                </div>
              </div>

            </div>

            {/* Premium Google Map Embed Component */}
            <div className="bg-dark-900 border-2 border-dark-800 rounded-none p-4 overflow-hidden relative">
              <div className="h-52 rounded-none bg-dark-950 relative overflow-hidden border-2 border-dark-850">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13817.519069415553!2d31.18524458852352!3d30.0259837965561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145846fa01b3f9ff%3A0xeae3e843ec11ba18!2z2KjZiNmE2KfZgiDYp9mE2K_Zg9ix2YjYs9mB2Iwg2KfZhNis2YrYstmH!5e0!3m2!1sar!2seg!4v1700000000000!5m2!1sar!2seg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="موقع دوز جيم في بولاق الدكرور"
                ></iframe>
              </div>
              <div className="flex justify-between items-center mt-3 px-1 font-bold">
                <span className="text-[10px] text-dark-400 font-bold">الموقع الرسمي للجيم على الخريطة</span>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-luxury-gold font-bold hover:text-white"
                >
                  افتح في خرائط Google ←
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Lower row - quick details & copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo brand */}
          <div className="flex items-center gap-3 font-bold">
            <div className="bg-luxury-gold text-black p-2 rounded-none border border-black">
              <Dumbbell className="h-5 w-5 transform -rotate-45" />
            </div>
            <span className="font-display text-xl font-black text-white italic tracking-tighter">
              DOSE<span className="text-luxury-gold">GYM</span>
            </span>
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/dose.gym"
              target="_blank"
              rel="noreferrer"
              className="bg-dark-900 hover:bg-white text-dark-300 hover:text-black p-3 rounded-none transition-all border-2 border-dark-800"
              title="انستغرام دوز جيم"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          {/* Small Copyright details */}
          <div className="text-xs text-dark-400 font-bold">
            تحت إشراف كابتن محمود المصري.
          </div>

        </div>

        {/* Absolute Bottom - Premium Developer Credits & Formal Copyright */}
        <div className="mt-12 pt-8 border-t border-dark-900 text-center flex flex-col items-center justify-center">
          <div className="text-luxury-gold opacity-60 tracking-widest text-lg font-black select-none max-w-md mx-auto">
            ━━━━━━━━━━━━━━━━━━
          </div>
          
          <div className="text-xs text-dark-400 font-bold tracking-wider my-2">
            &copy; 2026 Dose Gym. All Rights Reserved.
          </div>
          
          <a
            href="https://wa.me/201146780736"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center gap-1.5 transition-colors cursor-pointer select-none py-1 px-4 border border-transparent hover:border-luxury-gold/10 hover:bg-dark-900/50"
            title="تواصل مع المطور عمر أحمد"
          >
            <div className="text-sm font-black text-white group-hover:text-luxury-gold transition-colors flex items-center gap-1">
              تصميم وتطوير <span className="text-luxury-gold underline underline-offset-4 decoration-luxury-gold/40">عمر أحمد</span>
            </div>
            <div className="text-xs text-luxury-gold/90 font-bold group-hover:text-white transition-colors">
              واتساب: <span className="font-mono">01146780736</span>
            </div>
          </a>
          
          <div className="text-luxury-gold opacity-60 tracking-widest text-lg font-black select-none max-w-md mx-auto mt-2">
            ━━━━━━━━━━━━━━━━━━
          </div>
        </div>

      </div>
    </footer>
  );
}
