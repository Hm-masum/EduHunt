import { Types } from 'mongoose';

export type TApplyTutorPost = {
  studentId: Types.ObjectId;
  tutorId: Types.ObjectId;
  tuitionId: Types.ObjectId;
  selectStatus?: 'pending' | 'yes' | 'no';
  paymentStatus?: boolean;
};
