import { Types } from 'mongoose';
import { IClassOptions } from '../../interface/classOptions';

export type TTutorPost = {
  tutorId?: Types.ObjectId;
  title: string;
  tutoringTime: string;
  numberOfStudent: string;
  class: IClassOptions;
  daysPerWeek: string;
  thana: string;
  district: string;
  curriculum: 'English' | 'Bangla';
  subject: string;
  salary: number;
};

