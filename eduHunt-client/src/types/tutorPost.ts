import { ITutor } from "./tutor";

export type ITutorPost = {
  _id: string;
  tutorId: ITutor;
  title: string;
  tutoringTime: string;
  numberOfStudent: string;
  class: string;
  daysPerWeek: string;
  thana: string;
  district: string;
  curriculum: "English" | "Bangla";
  subject: string;
  salary: number;
  createdAt?: Date;
  updatedAt?: Date;
};
