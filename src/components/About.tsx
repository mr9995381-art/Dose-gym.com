import { CheckCircle, Dumbbell, Award, ShieldAlert, Sparkles, CircleDollarSign } from 'lucide-react';

export default function About() {
  const features = [
    {
      title: 'أحدث الأجهزة الرياضية',
      description: 'نوفر باقة متميزة ومستوردة من أقوى أجهزة الحديد الحر وبناء الأجسام والكارديو لتلبية احتياجات كافة الأبطال.',
      icon: Dumbbell,
    },
    {
      title: 'مدرب محترف معتمد',
      description: 'تحت إشراف مباشر وتدريب متكامل من كابتن محمود المصري، بخبرته الطويلة في تعديل السلوك الرياضي وبناء الأجسام.',
      icon: Award,
    },
    {
      title: 'بيئة نظيفة وآمنة',
      description: 'نولي النظافة والتعقيم والتهوية الممتازة أولوية قصوى لتتمرن بارتياح تام وثقة كاملة في صالة راقية ومجهزة.',
      icon: Sparkles,
    },
    {
      title: 'تدريب داخل الجيم فقط',
      description: 'نركز كل جهودنا على التدريب الشخصي المباشر والمتابعة الحية داخل الصالة لضمان تصحيح الأداء والنتائج الحقيقية (لا يوجد تدريب أونلاين).',
      icon: ShieldAlert,
    },
    {
      title: 'أسعار مناسبة وعادلة',
      description: 'خطط اشتراكات مدروسة وخصومات حقيقية تناسب الجميع، مع إمكانية تجربة الصالة عبر باقة الزيارة الواحدة.',
      icon: CircleDollarSign,
    },
  ];

  return (
    <section id="about" className="py-24 bg-dark-900 relative overflow-hidden" dir="rtl">
      {/* Background radial overlays */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-dark-950/40 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-luxury-gold font-display font-black text-xs tracking-widest uppercase border-2 border-luxury-gold px-4 py-1.5 rounded-none inline-block">
            من نحن
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white mt-4 italic uppercase tracking-tighter">
            حول صالة <span className="text-luxury-gold">Dose Gym</span>
          </h2>
          <div className="w-24 h-1.5 bg-luxury-gold mx-auto mt-4" />
        </div>

        {/* About Main Content */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Text Column */}
          <div className="lg:col-span-7 space-y-6 text-right">
            <h3 className="text-2xl sm:text-3xl font-display font-black text-white leading-tight italic uppercase">
              Dose Gym هو خيارك الأقوى لبناء القوة واللياقة في بولاق الدكرور
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed font-bold">
              Dose Gym هو جيم احترافي تحت إشراف كابتن محمود المصري في بولاق الدكرور، يوفر أحدث الأجهزة الرياضية وبرامج تدريب قوية لبناء جسم رياضي وصحي.
            </p>

            <p className="text-dark-300 text-base leading-relaxed font-medium">
              نؤمن بأن بناء الجسم يحتاج إلى بيئة حماسية قوية وتوجيه حقيقي مباشر على أرض الواقع، لذلك ركزنا على توفير أفضل خطوط الأجهزة والأوزان الحرة مع الإشراف الرياضي المباشر لمرافقتك في كل تمرينة.
            </p>

            {/* Core Values check list */}
            <div className="grid sm:grid-cols-2 gap-3.5 pt-4">
              <div className="flex items-center gap-2.5 text-white">
                <CheckCircle className="h-5 w-5 text-luxury-gold flex-shrink-0" />
                <span className="text-sm font-black">أجهزة حديد حر مستوردة بالكامل</span>
              </div>
              <div className="flex items-center gap-2.5 text-white">
                <CheckCircle className="h-5 w-5 text-luxury-gold flex-shrink-0" />
                <span className="text-sm font-black">تحت إدارة كابتن محمود المصري شخصياً</span>
              </div>
              <div className="flex items-center gap-2.5 text-white">
                <CheckCircle className="h-5 w-5 text-luxury-gold flex-shrink-0" />
                <span className="text-sm font-black">تركيز كامل على التمرين الواقعي المباشر</span>
              </div>
              <div className="flex items-center gap-2.5 text-white">
                <CheckCircle className="h-5 w-5 text-luxury-gold flex-shrink-0" />
                <span className="text-sm font-black">تهوية ممتازة وبيئة خالية من الزحام الخانق</span>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-none overflow-hidden shadow-2xl border-2 border-dark-800">
              <img
                src="/src/assets/images/dose_gym_training_1782245477926.jpg"
                alt="كابتن محمود المصري يدرب في دوز جيم"
                className="w-full object-cover rounded-none transform hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              {/* Gold overlay elements */}
              <div className="absolute inset-0 border-2 border-luxury-gold/20 rounded-none pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Banner */}
            <div className="absolute -bottom-6 -right-6 bg-black border-2 border-luxury-gold rounded-none p-5 shadow-2xl flex items-center gap-4 max-w-xs">
              <div className="bg-luxury-gold p-3 rounded-none text-black font-black text-xl italic border border-black flex-shrink-0">
                ١٠٠٪
              </div>
              <div>
                <p className="text-sm font-black text-white leading-none">توجيه واقعي بطل</p>
                <p className="text-xs text-dark-400 mt-2 leading-normal font-bold">كل التمرينات تتم بمتابعة كابتن محمود المصري شخصياً</p>
              </div>
            </div>
          </div>

        </div>

        {/* Features list highlight */}
        <div className="text-center mb-10">
          <h3 className="text-xl font-black text-white font-display mb-2 uppercase tracking-wide">مميزات صالة دوز جيم</h3>
          <p className="text-xs text-dark-400 font-bold">لماذا يختارنا الرياضيون وأصحاب الطموح العالي في بولاق؟</p>
        </div>

        {/* Features Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-dark-950 border-2 border-dark-800 hover:border-luxury-gold rounded-none p-6 transition-all duration-300 text-right flex flex-col justify-between"
              >
                <div>
                  <div className="bg-luxury-gold w-12 h-12 rounded-none flex items-center justify-center mb-5 text-black font-black border border-black shadow-[3px_3px_0px_rgba(212,175,55,0.2)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-base font-black text-white mb-2 font-display uppercase tracking-wide">{item.title}</h4>
                  <p className="text-xs text-dark-300 leading-relaxed font-bold">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
