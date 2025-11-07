import { Types } from 'mongoose';

export type TTutorPost = {
  tutorId?: Types.ObjectId;
  title: string;
  tutoringTime: string;
  numberOfStudent: string;
  class: string;
  daysPerWeek: string;
  thana: string;
  district: string;
  curriculum: 'English' | 'Bangla';
  subject: string;
  salary: number;
};
