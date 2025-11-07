import { Types } from 'mongoose';

export interface IPayment {
  applicationId: string;
  tutorId: Types.ObjectId;
  studentId: Types.ObjectId;
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
  status: 'Pending' | 'Paid' | 'Shipped' | 'Completed' | 'Cancelled';
}
