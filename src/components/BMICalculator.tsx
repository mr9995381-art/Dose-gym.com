import React, { useState } from 'react';
import { Calculator, RefreshCw, Info } from 'lucide-react';
import { BMIResult } from '../types';

export default function BMICalculator() {
  const [weight, setWeight] = useState<string>('75');
  const [height, setHeight] = useState<string>('175');
  const [result, setResult] = useState<BMIResult | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;

    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) return;

    const bmi = parseFloat((w / (h * h)).toFixed(1));
    let category: BMIResult['category'] = 'وزن مثالي';
    let color = 'text-green-400 bg-green-950/40 border-green-500/20';
    let advice = '';

    if (bmi < 18.5) {
      category = 'نقص الوزن';
      color = 'text-blue-400 bg-blue-950/40 border-blue-500/20';
      advice = 'جسمك يحتاج لزيادة الوزن وبناء كتلة عضلية صحية. ننصحك بالتركيز على تمارين المقاومة الثقيلة وتناول سعرات حرارية فائضة كافية. باقة الشهرين مثالية لمتابعة زيادة الوزن والكتلة البدنية مع الكباتن.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = 'وزن مثالي';
      color = 'text-emerald-400 bg-emerald-950/40 border-emerald-500/20';
      advice = 'صحتك البدنية ووزنك في النطاق الذهبي الممتاز! واظب على التدريب للحفاظ على اللياقة البدنية والكتلة العضلية وتحسين قدرة التحمل. باقة الشهر ستساعدك في الالتزام بجدولك التدريبي.';
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = 'وزن زائد';
      color = 'text-amber-400 bg-amber-950/40 border-amber-500/20';
      advice = 'لديك زيادة بسيطة في الوزن عن المعدل الطبيعي. التمارين الرياضية مع تقليل السعرات الحرارية سيعيد جسمك للياقة المطلوبة. ننصحك بتمارين الكارديو في صالتنا بجانب رفع الأثقال لشد الترهلات عاجلاً.';
    } else {
      category = 'سمنة مفرطة';
      color = 'text-red-400 bg-red-950/40 border-red-500/20';
      advice = 'من الضروري البدء ببرنامج تخسيس آمن ومحسوب بدقة فوراً لتقليل نسب الدهون حمايةً لقلبك ومفاصلك. نوفر في دوز جيم أحدث أجهزة حرق الدهون وكارديو عالمي مع مدربين متخصصين لتسريع خسارة الدهون بأمان.';
    }

    setResult({ bmi, category, color, advice });
  };

  const handleReset = () => {
    setWeight('75');
    setHeight('175');
    setResult(null);
  };

  return (
    <section id="bmi" className="py-24 bg-dark-900 relative overflow-hidden" dir="rtl">
      {/* Visual background details */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-dark-950/60 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-luxury-gold font-display font-black text-xs tracking-widest uppercase border-2 border-luxury-gold px-4 py-1.5 rounded-none inline-block">
            أدوات رياضية ذكية
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white mt-4 italic uppercase tracking-tighter">
            احسب مؤشر <span className="text-luxury-gold">كتلة جسمك (BMI)</span>
          </h2>
          <p className="text-gray-300 mt-4 text-sm sm:text-base max-w-xl mx-auto font-bold">
            أدخل طولك ووزنك الحاليين لمعرفة تصنيف جسمك الرياضي والحصول على النصيحة الذهبية من مدربينا للوصول لهدفك.
          </p>
          <div className="w-24 h-1.5 bg-luxury-gold mx-auto mt-4" />
        </div>

        {/* Calculator Card */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Inputs Form Block */}
          <div className="lg:col-span-5 bg-dark-950 border-2 border-dark-800 rounded-none p-8 flex flex-col justify-between text-right">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-luxury-gold p-2 rounded-none border border-black">
                  <Calculator className="h-5 w-5 text-black" />
                </div>
                <h3 className="text-xl font-black text-white font-display uppercase tracking-wider italic">أدخل بياناتك البدنية</h3>
              </div>

              <form onSubmit={calculateBMI} className="space-y-6">
                <div>
                  <label className="block text-sm font-black text-dark-300 mb-2">
                    الوزن الحالي بالكلغ (Kg):
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      required
                      min="10"
                      max="300"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="w-full bg-dark-900 border-2 border-dark-800 focus:border-luxury-gold rounded-none px-4 py-3.5 text-white font-mono text-lg focus:outline-none text-left pl-12"
                    />
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dark-400 font-bold text-sm">
                      Kg
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-black text-dark-300 mb-2">
                    الطول الحالي بالسنتيمتر (Cm):
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      required
                      min="50"
                      max="250"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="w-full bg-dark-900 border-2 border-dark-800 focus:border-luxury-gold rounded-none px-4 py-3.5 text-white font-mono text-lg focus:outline-none text-left pl-12"
                    />
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dark-400 font-bold text-sm">
                      Cm
                    </span>
                  </div>
                </div>

                <div className="flex gap-4 pt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-luxury-gold text-black font-black py-4 px-6 rounded-none hover:bg-white hover:text-black transition-colors cursor-pointer text-xs uppercase tracking-widest border-2 border-luxury-gold"
                  >
                    احسب الآن
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="bg-dark-900 border-2 border-dark-800 hover:border-white p-4 rounded-none text-dark-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <RefreshCw className="h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-8 border-t-2 border-dark-900 pt-4 text-xs text-dark-400 flex items-start gap-2.5 font-bold leading-normal">
              <Info className="h-4 w-4 text-luxury-gold flex-shrink-0 mt-0.5" />
              <p>
                مؤشر كتلة الجسم (BMI) هو صيغة رياضية معترف بها عالمياً لتقدير مستوى دهون الجسم وعلاقتها بالوزن، ويستخدم كدليل إرشادي أولي للصحة اللياقية.
              </p>
            </div>
          </div>

          {/* Results Block */}
          <div className="lg:col-span-7 bg-dark-950 border-2 border-dark-800 rounded-none p-8 flex flex-col justify-center items-center relative min-h-[350px]">
            {!result ? (
              <div className="text-center max-w-sm px-6 py-12">
                <div className="w-16 h-16 bg-dark-900 rounded-none flex items-center justify-center mx-auto mb-6 border-2 border-dark-800">
                  <Calculator className="h-8 w-8 text-dark-400" />
                </div>
                <h4 className="text-white font-black text-lg mb-2 uppercase tracking-wide">بانتظار البيانات...</h4>
                <p className="text-sm text-dark-400 leading-relaxed font-bold">
                  املأ الوزن والطول بالقيم الصحيحة، واضغط على زر "احسب الآن" لتظهر لك قراءات كتلة الجسم هنا فوراً مع توجيه مخصص.
                </p>
              </div>
            ) : (
              <div className="w-full text-right flex flex-col justify-between h-full">
                
                {/* Upper metrics */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 border-b-2 border-dark-800 pb-6">
                  <div>
                    <span className="text-xs text-dark-400 font-black uppercase tracking-wider">النتيجة الحالية</span>
                    <h4 className="text-2xl font-black text-white font-display mt-1 italic uppercase">تشخيص مؤشر كتلة جسمك</h4>
                  </div>
                  <div className={`px-4 py-2 rounded-none border-2 text-xs font-black font-display uppercase tracking-widest flex items-center gap-2 ${result.color}`}>
                    <span className="w-2.5 h-2.5 bg-current"></span>
                    {result.category}
                  </div>
                </div>

                {/* Score badge big view */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                  <div className="relative flex-shrink-0">
                    {/* Square score */}
                    <div className="w-32 h-32 rounded-none bg-black border-4 border-luxury-gold flex flex-col items-center justify-center shadow-xl">
                      <span className="text-4xl font-black text-white font-mono leading-none">{result.bmi}</span>
                      <span className="text-[10px] text-luxury-gold font-black uppercase tracking-widest mt-2">الدرجة</span>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-white font-black text-lg mb-2 font-display uppercase tracking-wider italic">توصية دوز جيم الرياضية:</h5>
                    <p className="text-sm text-dark-200 leading-relaxed font-bold">
                      {result.advice}
                    </p>
                  </div>
                </div>

                {/* Metric scale guide */}
                <div className="bg-dark-900 border-2 border-dark-800 rounded-none p-5">
                  <h6 className="text-xs text-dark-400 font-black uppercase tracking-widest mb-3">دليل مقياس BMI الطبيعي:</h6>
                  <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-black uppercase tracking-wide">
                    <div className="bg-blue-950/40 text-blue-400 border-2 border-blue-500/20 py-2.5 rounded-none">
                      <div>أقل من ١٨.٥</div>
                      <div className="mt-1 font-display">نقص وزن</div>
                    </div>
                    <div className="bg-emerald-950/40 text-emerald-400 border-2 border-emerald-500/20 py-2.5 rounded-none">
                      <div>١٨.٥ - ٢٤.٩</div>
                      <div className="mt-1 font-display">مثالي</div>
                    </div>
                    <div className="bg-amber-950/40 text-amber-400 border-2 border-amber-500/20 py-2.5 rounded-none">
                      <div>٢٥ - ٢٩.٩</div>
                      <div className="mt-1 font-display">وزن زائد</div>
                    </div>
                    <div className="bg-red-950/40 text-red-400 border-2 border-red-500/20 py-2.5 rounded-none">
                      <div>٣٠ فأكثر</div>
                      <div className="mt-1 font-display">سمنة مفرطة</div>
                    </div>
                  </div>
                </div>

              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
