export interface Barbershop {
  id: string;
  name: string;
  owner_id: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  opening_time: string;
  closing_time: string;
  timezone: string;
  created_at: string;
  updated_at: string;
}

export interface Barber {
  id: string;
  barbershop_id: string;
  user_id: string;
  name: string;
  email?: string;
  phone?: string;
  bio?: string;
  avatar_url?: string;
  specialties: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: string;
  barbershop_id: string;
  name: string;
  description?: string;
  duration_minutes: number;
  base_price: number;
  is_active: boolean;
  icon_emoji?: string;
  created_at: string;
  updated_at: string;
}

export interface Booking {
  id: string;
  barbershop_id: string;
  barber_id: string;
  service_id: string;
  client_id: string;
  client_name: string;
  client_phone?: string;
  client_email?: string;
  booking_date: string;
  booking_time: string;
  duration_minutes: number;
  total_price: number;
  barber_commission?: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled' | 'no-show';
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface Client {
  id: string;
  barbershop_id: string;
  name: string;
  phone: string;
  email?: string;
  total_visits: number;
  total_spent: number;
  preferred_barber_id?: string;
  preferred_service_id?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}