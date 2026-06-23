export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  badge?: string;
  features: string[];
  popular?: boolean;
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  image: string;
  specialties: string[];
  bio: string;
}

export interface GymClass {
  id: string;
  name: string;
  time: string;
  days: string[];
  trainer: string;
  intensity: 'مبتدئ' | 'متوسط' | 'متقدم';
  category: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface BMIResult {
  bmi: number;
  category: 'نقص الوزن' | 'وزن مثالي' | 'وزن زائد' | 'سمنة مفرطة';
  color: string;
  advice: string;
}
