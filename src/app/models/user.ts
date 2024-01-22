export interface User {
  id: number;
  first_name: string;
  last_name: string;
  middle_name: string;
  email: string;
  phone?: Phone;
  firebase_uid: string;
  locale?: any;
  lang: string;
  country: string;
  currency: string;
  measures: number;
  address: Address;
  created_at: string;
  updated_at: string;
}
export interface Address {
  full_address?: any;
  post_code: string;
  region: string;
  city: string;
  street: string;
  building: string;
  section?: any;
  apartment: string;
  buzz_code?: any;
  note?: any;
}
export interface Phone {
  country_code: string;
  phone_number: string;
}
