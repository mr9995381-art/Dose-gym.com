import { useState } from 'react';
import { Clock, Users, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { GymClass } from '../types';

export default function Schedule() {
  const [activeDay, setActiveDay] = useState<string>('all');

  const operationalHours = [
    {
      title: 'فترة الرجال (Men\'s Shift)',
      time: 'من ٢ ظهراً حتى ٢ بعد منتصف الليل (يومياً)',
      days: 'السبت إلى الخميس',
      note: 'متاح كافة الأجهزة والمدربين على مدار الساعة لخدمتكم.',
      badge: 'متاح للرجال',
    },
    {
      title: 'فترة السيدات (Ladies-Only Shift)',
      time: 'من ١٠ صباحاً حتى ٢ ظهراً (يومياً)',
      days: 'السبت إلى الخميس',
      note: 'خصوصية وأمان تام %100 مع كابتن سيدات متخصصة لمتابعة التمارين.',
      badge: 'مغلق تماماً للرجال - خصوصية تامة',
    },
    {
      title: 'يوم الجمعة (Friday Hours)',
      time: 'من ٢ ظهراً حتى ١١ مساءً',
      days: 'الجمعة فقط',
      note: 'فترة تدريب مفتوحة ومتاحة للجميع للاستعداد للأسبوع الجديد.',
      badge: 'مفتوح للجميع',
    },
  ];

  const classes: GymClass[] = [
    {
      id: 'c-1',
      name: 'تدريب حديد وقوة بدنية',
      time: '06:00 مساءً - 07:30 مساءً',
      days: ['السبت', 'الاثنين', 'الأربعاء'],
      trainer: 'كابتن أحمد الهواري',
      intensity: 'متوسط',
      category: 'قوة وعضلات',
    },
    {
      id: 'c-2',
      name: 'حرق دهون وكارديو مكثف',
      time: '08:00 مساءً - 09:00 مساءً',
      days: ['الأحد', 'الثلاثاء', 'الخميس'],
      trainer: 'كابتن محمود الصاوي',
      intensity: 'متقدم',
      category: 'تخسيس ولياقة',
    },
    {
      id: 'c-3',
      name: 'تمارين الكروس فت واللياقة',
      time: '05:00 مساءً - 06:00 مساءً',
      days: ['السبت', 'الأحد', 'الثلاثاء'],
      trainer: 'كابتن كريم فراج',
      intensity: 'مبتدئ',
      category: 'كروس فت',
    },
  ];

  const weekdays = ['الكل', 'السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'];

  const filteredClasses = activeDay === 'الكل' || activeDay === 'all'
    ? classes
    : classes.filter(c => c.days.includes(activeDay));

  return (
    <section id="schedule" className="py-24 bg-dark-900 relative overflow-hidden" dir="rtl">
      {/* Visual background touches */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-dark-950/50 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-luxury-gold font-display font-black text-xs tracking-widest uppercase border-2 border-luxury-gold px-4 py-1.5 rounded-none inline-block">
            مواعيد التدريب والأنشطة
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white mt-4 italic uppercase tracking-tighter">
            تنظيم مواعيد <span className="text-luxury-gold">العمل والحصص</span>
          </h2>
          <p className="text-gray-300 mt-4 text-sm sm:text-base max-w-xl mx-auto font-bold">
            مواعيد مريحة ومنظمة تضمن لك تدريب آمن في الوقت المفضل لديك، مع فترات خاصة ومغلقة تماماً للسيدات لراحة تامة.
          </p>
          <div className="w-24 h-1.5 bg-luxury-gold mx-auto mt-4" />
        </div>

        {/* Operating Hours Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto">
          {operationalHours.map((hour, idx) => (
            <div
              key={idx}
              className="bg-dark-950 border-2 border-dark-800 hover:border-luxury-gold rounded-none p-6 transition-all duration-300 text-right flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black text-black bg-luxury-gold px-3 py-1 rounded-none border border-black uppercase tracking-wider">
                    {hour.badge}
                  </span>
                  <Clock className="h-5 w-5 text-luxury-gold" />
                </div>
                
                <h3 className="text-xl font-black text-white mb-2 font-display uppercase tracking-wide italic">
                  {hour.title}
                </h3>
                
                <p className="text-sm font-bold text-gray-300 font-mono mb-1">
                  📅 {hour.days}
                </p>
                <p className="text-lg font-black text-white font-mono mb-4">
                  🕒 {hour.time}
                </p>
                <p className="text-xs text-dark-400 leading-relaxed font-bold">
                  {hour.note}
                </p>
              </div>

              {idx === 1 && (
                <div className="mt-4 pt-3 border-t-2 border-dark-800 flex items-center gap-1.5 text-red-400 text-xs font-bold uppercase tracking-wider">
                  <ShieldAlert className="h-4 w-4 flex-shrink-0" />
                  <span>دخول السيدات فقط، الصالة مغلقة تماماً للرجال.</span>
                </div>
              )}
              {idx !== 1 && (
                <div className="mt-4 pt-3 border-t-2 border-dark-800 flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                  <span>المدربون متواجدون لمساعدتك فوراً.</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Classes Timetable */}
        <div className="bg-dark-950 border-2 border-dark-800 rounded-none p-8 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-display uppercase tracking-wider italic">جدول الحصص والتوجيه الجماعي</h3>
              <p className="text-xs sm:text-sm text-dark-400 mt-1 font-bold">توجيه جماعي مجاني متضمن مع باقات الاشتراك الشهري</p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-1 bg-dark-900 border-2 border-dark-800 rounded-none p-1 w-full md:w-auto overflow-x-auto">
              {weekdays.map((day) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day === 'الكل' ? 'all' : day)}
                  className={`px-3 py-1.5 rounded-none text-xs font-black whitespace-nowrap transition-colors cursor-pointer ${
                    (activeDay === 'all' && day === 'الكل') || activeDay === day
                      ? 'bg-luxury-gold text-black'
                      : 'text-dark-300 hover:text-white'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Classes list */}
          <div className="grid gap-4">
            {filteredClasses.length === 0 ? (
              <div className="text-center py-12 text-dark-400 font-bold">
                لا يوجد حصص مخصصة لهذا اليوم المختار، الصالة مفتوحة للتدريب الحر المعتاد.
              </div>
            ) : (
              filteredClasses.map((c) => (
                <div
                  key={c.id}
                  className="bg-dark-900 hover:bg-dark-850 border-2 border-dark-800 hover:border-luxury-gold rounded-none p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all duration-200 text-right"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-luxury-gold text-black font-black px-4 py-3 rounded-none border border-black font-display flex items-center justify-center flex-shrink-0 w-20 text-center text-xs uppercase tracking-wider">
                      {c.category}
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white font-display italic uppercase">{c.name}</h4>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-xs text-dark-400 font-bold">
                        <span className="font-mono text-gray-300">⏰ {c.time}</span>
                        <span>•</span>
                        <span>مع: <strong className="text-white">{c.trainer}</strong></span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          🏋️‍♂️ مستوى الصعوبة: 
                          <strong className="text-luxury-gold font-black">{c.intensity}</strong>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Day tags */}
                  <div className="flex flex-wrap gap-1.5 self-end md:self-auto">
                    {c.days.map((day, index) => (
                      <span
                        key={index}
                        className="bg-dark-950 text-dark-300 font-black text-[10px] px-2.5 py-1 rounded-none border border-dark-800 uppercase tracking-widest"
                      >
                        {day}
                      </span>
                    ))}
                  </div>

                </div>
              ))
            )}
          </div>

          <div className="mt-8 border-t-2 border-dark-800 pt-6 flex items-center gap-2.5 text-xs text-dark-400 font-bold">
            <Users className="h-5 w-5 text-luxury-gold flex-shrink-0" />
            <p className="leading-relaxed">
              جميع الحصص الجماعية مجانية بالكامل للمشتركين. يرجى التنسيق مع الكابتن المسؤول قبل موعد الحصة بـ ١٥ دقيقة لحجز مكانك.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
