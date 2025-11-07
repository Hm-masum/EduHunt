import { Types } from 'mongoose';

export type TStudent = {
  name: string;
  fatherName: string;
  motherName: string;
  user: Types.ObjectId;
  password: string;
  gender: 'male' | 'female';
  role: 'student' | 'tutor' | 'admin';
  email: string;
  phone: string;
  image: string;
  thana: string;
  district: string;
  isActive?: boolean;
};
