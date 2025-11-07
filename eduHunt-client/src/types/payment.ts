import { IStudent } from "./student";
import { ITutor } from "./tutor";

export type IPayment = {
  _id: string;
  applicationId: string;
  tutorId: ITutor;
  studentId: IStudent;
  salary?: number;
  transaction: {
    id: string;
    transactionStatus: string;
    bank_status: string;
    sp_code: string;
    sp_message: string;
    method: string;
    date_time: string;
  };
  status: "Pending" | "Paid" | "Shipped" | "Completed" | "Cancelled";
};
