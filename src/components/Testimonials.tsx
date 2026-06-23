import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number;
  period: string;
  achievement: string;
}

export default function Testimonials() {
  const reviews: Testimonial[] = [
    {
      id: 1,
      name: 'أحمد رأفت',
      comment: 'جيم ممتاز جداً، الأجهزة كلها مستوردة وحالتها ممتازة كأنها جديدة. كابتن محمود المصري متابع معايا بنفسه في الصالة بضمير وبيرشدني لكل التمارين الصح وبدأت أشوف نتايج واضحة جداً في جسمي خلال أول شهرين.',
      rating: 5,
      period: 'مشترك منذ ٦ أشهر',
      achievement: 'بناء ٨ كيلو كتلة عضلية صافية 💪',
    },
    {
      id: 2,
      name: 'كريم عبد العزيز',
      comment: 'المكان مريح ونظيف جداً وفيه التزام كامل بالتعقيم والتهوية. المدربين متعاونين جداً والأسعار في متناول الجميع مقارنة بالخدمات الفخمة والأجهزة المتطورة الموجودة. أنصح أي حد في بولاق ينضم بدون تردد.',
      rating: 5,
      period: 'مشترك منذ ٣ أشهر',
      achievement: 'خسارة ١٢ كيلو من الدهون الزائدة 🔥',
    },
    {
      id: 3,
      name: 'عمرو الجزار',
      comment: 'أفضل جيم في المنطقة بلا منازع. الأجهزة هنا متكاملة ومفيش زحمة خانقة والناس كلها محترمة. كابتن محمود المصري قمة في الأخلاق والمهنية والخبرة وبيعمل برامج تدريب بطلة فعلاً.',
      rating: 5,
      period: 'مشترك منذ سنة',
      achievement: 'تطوير قوة التحمل واللياقة البدنية الكاملة ⚡',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-dark-900 relative overflow-hidden" dir="rtl">
      {/* Visual background overlays */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-dark-950/40 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-luxury-gold font-display font-black text-xs tracking-widest uppercase border-2 border-luxury-gold px-4 py-1.5 rounded-none inline-block">
            آراء الأبطال المشتركين
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white mt-4 italic uppercase tracking-tighter">
            قصص نجاح عملائنا <span className="text-luxury-gold">في Dose Gym</span>
          </h2>
          <p className="text-gray-300 mt-4 text-sm sm:text-base max-w-xl mx-auto font-bold">
            نحن فخورون بكوننا جزءاً من رحلة مئات الأبطال نحو التغيير وبناء جسم قوي وصحي. استمع إلى تجاربهم الواقعية
          </p>
          <div className="w-24 h-1.5 bg-luxury-gold mx-auto mt-4" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-dark-950 border-2 border-dark-800 hover:border-luxury-gold p-8 rounded-none transition-all duration-300 flex flex-col justify-between relative text-right"
            >
              {/* Quote Icon decoration */}
              <div className="absolute top-6 left-6 text-luxury-gold/10">
                <Quote className="h-12 w-12 transform scale-x-[-1]" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-bold mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* User info footer inside card */}
              <div className="border-t-2 border-dark-900 pt-4 flex flex-col gap-1">
                <h4 className="text-white font-black text-base font-display">
                  {rev.name}
                </h4>
                <div className="flex justify-between items-center text-xs mt-1">
                  <span className="text-dark-400 font-bold">{rev.period}</span>
                  <span className="text-luxury-gold font-black bg-luxury-gold/10 border border-luxury-gold/20 px-2 py-0.5 rounded-none">
                    {rev.achievement}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
