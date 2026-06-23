import { Award, Target, MessageSquare, Instagram, Phone } from 'lucide-react';
import { Coach } from '../types';

export default function Coaches() {
  const coach: Coach = {
    id: 'head-coach',
    name: 'كابتن محمود المصري',
    role: 'مالك الصالة والمدرب الرئيسي (Owner & Head Coach)',
    image: '/captain_mahmoud_stage_1782248400941.jpg',
    specialties: ['بناء الأجسام كلاسيك', 'التخسيس وتنشيف الدهون', 'التغذية والبرامج الرياضية المخصصة'],
    bio: 'كابتن محمود المصري هو الشغف والخبرة التي تقف خلف نجاح Dose Gym. كمدرب رئيسي وبطل كمال أجسام ذو مسيرة رياضية حافلة، يحرص بنفسه على متابعة كل بطل يدخل الصالة وتوجيهه التوجيه الصحيح للوصول للياقة المرغوبة وبناء عضلات قوية بطريقة علمية آمنة.',
  };

  const handleContactWhatsApp = () => {
    const textMessage = `مرحباً كابتن محمود المصري، أود الاستفسار عن باقات التدريب والمتابعة المباشرة معك في Dose Gym.`;
    const whatsappUrl = `https://wa.me/201093617418?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="coaches" className="py-24 bg-dark-950 relative overflow-hidden" dir="rtl">
      {/* Background visual spot lights */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-dark-900 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-luxury-gold font-display font-black text-xs tracking-widest uppercase border-2 border-luxury-gold px-4 py-1.5 rounded-none inline-block">
            المدرب الرئيسي للمقر
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white mt-4 italic uppercase tracking-tighter">
            تدرّب تحت إشراف <span className="text-luxury-gold">كابتن محمود المصري</span>
          </h2>
          <p className="text-gray-300 mt-4 text-sm sm:text-base max-w-xl mx-auto font-bold">
            لا تترك مسار عضلاتك للصدفة! احصل على إشراف وتدريب مباشر من الكابتن والمالك شخصياً داخل الصالة الرياضية
          </p>
          <div className="w-24 h-1.5 bg-luxury-gold mx-auto mt-4" />
        </div>

        {/* Coach Profile Card Block */}
        <div className="max-w-4xl mx-auto bg-dark-900 border-2 border-dark-800 hover:border-luxury-gold rounded-none overflow-hidden transition-all duration-300">
          <div className="grid md:grid-cols-12 gap-0">
            
            {/* Image section */}
            <div className="md:col-span-5 relative overflow-hidden aspect-[4/5] md:aspect-auto">
              <img
                src={coach.image}
                alt={coach.name}
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-102 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-dark-900 via-transparent to-transparent opacity-90" />
            </div>

            {/* Coach Information section */}
            <div className="md:col-span-7 p-8 sm:p-10 text-right flex flex-col justify-between">
              
              <div>
                {/* Header Tag */}
                <div className="flex items-center gap-2 text-luxury-gold text-xs font-black uppercase tracking-wider mb-2">
                  <Award className="h-4.5 w-4.5" />
                  <span>{coach.role}</span>
                </div>

                {/* Name */}
                <h3 className="text-3xl font-black text-white mb-4 font-display italic uppercase">
                  {coach.name}
                </h3>

                {/* Bio text */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-bold">
                  {coach.bio}
                </p>

                {/* Specialties tags */}
                <div className="space-y-2 mb-8">
                  <h4 className="text-xs font-black text-dark-300 uppercase tracking-widest">مجالات تخصص الكابتن:</h4>
                  <div className="flex flex-wrap gap-2 pt-1.5">
                    {coach.specialties.map((spec, idx) => (
                      <span
                        key={idx}
                        className="bg-black text-luxury-gold text-[10px] sm:text-xs font-black px-3 py-1.5 rounded-none border border-luxury-gold/30 uppercase tracking-wider"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action buttons inside Profile Card */}
              <div className="pt-6 border-t-2 border-dark-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-dark-400 flex items-center gap-1.5 font-bold">
                  <Target className="h-4 w-4 text-luxury-gold" />
                  مستعد لمساعدتك وتدريبك داخل الصالة يومياً
                </span>

                <button
                  onClick={handleContactWhatsApp}
                  className="w-full sm:w-auto bg-luxury-gold text-black font-black px-6 py-3.5 rounded-none hover:bg-white transition-colors cursor-pointer text-xs uppercase tracking-widest border-2 border-luxury-gold flex items-center justify-center gap-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  تحدث مع كابتن محمود مباشرة
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
