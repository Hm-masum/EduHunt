import { IStudent } from "./student";

export type IStudentPost = {
  _id: string;
  studentId: IStudent;
  title: string;
  institute: string;
  tutoringTime: string;
  numberOfStudent: string;
  studentGender: "male" | "female";
  teacherGender: "male" | "female";
  thana: string;
  district: string;
  curriculum: "English" | "Bangla";
  class: string;
  subject: string;
  daysPerWeek: string;
  salary: string;
  createdAt?: Date;
  updatedAt?: Date;
};
