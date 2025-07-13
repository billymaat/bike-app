export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  phone: string;
  emergencyContact: {
    firstName: string;
    lastName: string;
    relationship: string;
    phone: string;
  } | null;
}