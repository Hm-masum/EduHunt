import { Types } from 'mongoose';
import { IClassOptions } from '../../interface/classOptions';

export type TStudentPost = {
  studentId: Types.ObjectId;
  title: string;
  institute: string;
  tutoringTime: string;
  numberOfStudent: string;
  studentGender: 'male' | 'female';
  teacherGender: 'male' | 'female';
  thana: string;
  district: string;
  curriculum: 'English' | 'Bangla';
  class: IClassOptions;
  subject: string;
  daysPerWeek: string;
  salary: string;
};
