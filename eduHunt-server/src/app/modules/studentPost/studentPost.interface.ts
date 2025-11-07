import { Types } from 'mongoose';

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
  class: string;
  subject: string;
  daysPerWeek: string;
  salary: string;
};
