import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'ما هي مواعيد العمل الرسمية وفترات السيدات؟',
      answer: 'نحن نعمل طوال الأسبوع من السبت إلى الخميس من الساعة ١٠:٠٠ صباحاً حتى الساعة ٢:٠٠ بعد منتصف الليل، ويوم الجمعة من الساعة ٢:٠٠ ظهراً حتى الساعة ١١:٠٠ مساءً. كما تتوفر فترات مخصصة ومغلقة تماماً للسيدات لراحة وخصوصية تامة يومياً بالتنسيق مع الكابتن.',
    },
    {
      id: 2,
      question: 'كيف يمكنني الاشتراك والدفع لحجز عروض Dose Gym؟',
      answer: 'بناءً على سياسة الجيم وتسهيلاً على الأعضاء، لا يوجد أي نظام دفع إلكتروني أو اشتراك عن بعد. يمكنك حجز وتأكيد سعر الخصم عبر الضغط على أزرار التواصل المباشرة لتنتقل إلى محادثة واتساب معنا، ثم تفضل بزيارة مقرنا في يوسف مراد ببولاق الدكرور لإتمام الدفع كاش وتفعيل اشتراكك وبدء التدريب فوراً.',
    },
    {
      id: 3,
      question: 'هل توجد حصص فردية أو اشتراك يومي (زيارة واحدة)؟',
      answer: 'نعم بكل تأكيد! نوفر باقة "الحصة الواحدة" بقيمة ٥٠ جنيهاً فقط كزيارة تجريبية ليوم واحد، لتجربة مستوى الجيم وجودة الأجهزة الحرة والكارديو والتحدث مع المدربين قبل الالتزام باشتراك شهري.',
    },
    {
      id: 4,
      question: 'ما هي القواعد والالتزامات الأساسية داخل الصالة؟',
      answer: 'للحفاظ على بيئة رياضية نظيفة وآمنة وراقية للجميع، نلتزم بالقواعد التالية: إحضار فوطة شخصية نظيفة للاستخدام أثناء التمرين، ارتداء حذاء رياضي نظيف ومخصص للصالة فقط لمنع دخول الأتربة، وإعادة الأوزان والبارات وأقراص الحديد إلى أماكنها المخصصة فور الانتهاء من استخدامها لسلامة بقية الأعضاء.',
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-dark-950 relative overflow-hidden" dir="rtl">
      {/* Background Watermark decoration */}
      <div className="absolute right-10 bottom-12 flex flex-col justify-start items-start opacity-5 pointer-events-none select-none">
        <span className="text-[120px] font-black leading-none italic text-white tracking-tighter">QUESTIONS</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-luxury-gold font-display font-black text-xs tracking-widest uppercase border-2 border-luxury-gold px-4 py-1.5 rounded-none inline-block">
            الأسئلة الشائعة
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white mt-4 italic uppercase tracking-tighter">
            استفسارات <span className="text-luxury-gold">تهمك معرفتها</span>
          </h2>
          <p className="text-gray-300 mt-4 text-sm sm:text-base max-w-xl mx-auto font-bold">
            كل ما تود معرفته عن مواعيد التدريب، فترات السيدات، وطرق تأكيد وحجز الاشتراكات في دوز جيم
          </p>
          <div className="w-24 h-1.5 bg-luxury-gold mx-auto mt-4" />
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-dark-900 border-2 border-dark-800 hover:border-luxury-gold/50 transition-all duration-300 rounded-none"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-5 px-6 flex items-center justify-between gap-4 text-right cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3.5">
                    <HelpCircle className={`h-5 w-5 flex-shrink-0 transition-colors ${isOpen ? 'text-luxury-gold' : 'text-dark-400'}`} />
                    <span className="text-white font-black text-base sm:text-lg font-display">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-luxury-gold flex-shrink-0 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-60 border-t-2 border-dark-950 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 text-sm sm:text-base text-gray-300 leading-relaxed font-bold">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
