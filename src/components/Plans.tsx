import { Check } from 'lucide-react';
import { MembershipPlan } from '../types';

export default function Plans() {
  const plans: MembershipPlan[] = [
    {
      id: 'session',
      name: 'الحصة الواحدة',
      price: 50,
      period: 'دخول يوم واحد',
      features: [
        'دخول لمرة واحدة لتجربة الصالة',
        'استخدام كافة أجهزة الحديد والكارديو',
        'مناسب للتجربة واختبار الأجواء',
        'توجيه أساسي سريع عند الدخول',
      ],
    },
    {
      id: '1-month',
      name: 'اشتراك شهر',
      price: 450,
      period: 'شهر كامل',
      popular: false,
      features: [
        'استخدام كامل لكافة الأجهزة المستوردة',
        'منطقة الكارديو واللياقة المتكاملة',
        'متابعة داخل الجيم فقط من الكباتن',
        'متاح يومياً خلال ساعات العمل الرسمية',
      ],
    },
    {
      id: '2-months',
      name: 'اشتراك شهرين',
      price: 850,
      period: 'شهرين كاملين',
      badge: 'أفضل قيمة',
      popular: true,
      features: [
        'استخدام كامل لكافة الأجهزة بلا قيود',
        'منطقة الكارديو والأوزان الحرة المتميزة',
        'متابعة مستمرة ودائمة داخل الجيم',
        'أقوى توفير مالي وأعلى قيمة اشتراك',
        'مراجعة مستمرة للقياسات والوزن',
      ],
    },
  ];

  const handleSelectPlan = (plan: MembershipPlan) => {
    const textMessage = `مرحباً كابتن محمود المصري، أود الاستفسار وحجز عرض باقة: ${plan.name} (${plan.price} جنيه / ${plan.period}) في Dose Gym.`;
    const whatsappUrl = `https://wa.me/201093617418?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCustomConsultation = () => {
    const textMessage = `مرحباً كابتن محمود المصري، أود الحصول على استشارة بدنية مجانية والاستفسار عن تفاصيل التدريب في Dose Gym.`;
    const whatsappUrl = `https://wa.me/201093617418?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="plans" className="py-24 bg-dark-950 relative overflow-hidden" dir="rtl">
      {/* Background Watermark decoration */}
      <div className="absolute right-12 top-10 flex flex-col justify-start items-start opacity-5 pointer-events-none select-none">
        <span className="text-[120px] font-black leading-none italic text-white tracking-tighter">PRICING</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-luxury-gold font-display font-black text-xs tracking-widest uppercase border-2 border-luxury-gold px-4 py-1.5 rounded-none inline-block">
            أسعار الاشتراكات والعروض
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white mt-4 italic uppercase tracking-tighter">
            اختر باقة <span className="text-luxury-gold">الاشتراك المناسبة لك</span>
          </h2>
          <p className="text-gray-300 mt-4 text-sm sm:text-base max-w-xl mx-auto font-bold">
            أسعار واضحة وعادلة بدون رسوم مخفية، تواصل معنا مباشرة لحجز مكانك وبدء التمرين اليوم
          </p>
          <div className="w-24 h-1.5 bg-luxury-gold mx-auto mt-4" />
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan) => {
            return (
              <div
                key={plan.id}
                className={`relative rounded-none p-8 flex flex-col justify-between transition-all duration-300 text-right ${
                  plan.popular
                    ? 'bg-dark-900 border-4 border-luxury-gold shadow-[0_10px_30px_rgba(212,175,55,0.15)] md:scale-105 z-10'
                    : 'bg-dark-900 border-2 border-dark-800 hover:border-luxury-gold'
                }`}
              >
                {/* Popular / Savings Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-luxury-gold text-black font-black px-6 py-2 rounded-none text-xs font-display border-2 border-black tracking-widest uppercase">
                    العرض الأكثر طلباً 🔥
                  </div>
                )}
                {plan.badge && !plan.popular && (
                  <div className="absolute top-4 left-4 bg-red-950 border-2 border-red-500 text-red-400 font-black px-3 py-1 rounded-none text-xs tracking-wider">
                    {plan.badge}
                  </div>
                )}

                {/* Card Top */}
                <div>
                  <div className="mb-6 flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-black text-white font-display mb-1 italic">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-dark-400 font-bold uppercase tracking-wider">باقة {plan.period}</p>
                    </div>
                    {plan.badge && plan.popular && (
                      <span className="bg-luxury-gold/20 border-2 border-luxury-gold text-luxury-gold text-xs font-black px-3 py-1 rounded-none">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="mb-8 pb-6 border-b-2 border-dark-800 flex items-baseline gap-1">
                    <span className="text-5xl sm:text-6xl font-black text-white font-display tracking-tighter italic">
                      {plan.price}
                    </span>
                    <span className="text-xl text-luxury-gold font-black mr-1">جنيه</span>
                    <span className="text-xs text-dark-400 font-bold mr-1">/ {plan.period}</span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <div className="bg-luxury-gold/15 p-1 rounded-none border border-luxury-gold/30 flex-shrink-0 mt-0.5">
                          <Check className="h-3.5 w-3.5 text-luxury-gold" />
                        </div>
                        <span className="text-gray-300 font-bold leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Button */}
                <button
                  onClick={() => handleSelectPlan(plan)}
                  className={`w-full py-4 px-6 rounded-none font-black text-xs uppercase tracking-widest transition-all duration-200 text-center border-2 cursor-pointer ${
                    plan.popular
                      ? 'bg-luxury-gold text-black border-luxury-gold hover:bg-white hover:text-black hover:border-white'
                      : 'bg-transparent text-white border-white hover:bg-white hover:text-black'
                  }`}
                >
                  {plan.id === 'session' ? 'استفسر واحجز حصة سريعة' : 'تواصل للاشتراك في الباقة'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Custom Guarantee notice below plans */}
        <div className="mt-16 bg-dark-900 border-2 border-dark-800 rounded-none p-6 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-right">
          <div className="flex items-center gap-4">
            <div className="text-3xl font-display">💡</div>
            <div>
              <h4 className="text-white font-black text-base">هل تفضل الدفع كاش في الصالة؟</h4>
              <p className="text-sm text-dark-300 mt-1 leading-relaxed font-bold">
                يمكنك الضغط على أي باقة لإرسال رسالة مباشرة للكابتن وحجز العرض، ثم إتمام الدفع نقداً عند زيارتك الأولى لمقر الجيم في بولاق الدكرور.
              </p>
            </div>
          </div>
          <button
            onClick={handleCustomConsultation}
            className="text-luxury-gold font-black text-xs uppercase tracking-widest hover:text-white transition-colors cursor-pointer border-b-2 border-luxury-gold pb-0.5"
          >
            طلب استشارة بدنية مجاناً ←
          </button>
        </div>

      </div>
    </section>
  );
}
