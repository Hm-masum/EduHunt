import { IStudent } from "./student";
import { IStudentPost } from "./studentPost";
import { ITutor } from "./tutor";
import { ITutorPost } from "./tutorPost";

export type IApplyStudentPost = {
  _id: string;
  studentId: IStudent;
  tutorId: ITutor;
  tuitionId: IStudentPost;
  paymentStatus?: boolean;
  selectStatus?: "pending" | "yes" | "no";
};

export type IApplyTutorPost = {
  _id: string;
  studentId: IStudent;
  tutorId: ITutor;
  tuitionId: ITutorPost;
  paymentStatus?: boolean;
  selectStatus?: "pending" | "yes" | "no";
};
