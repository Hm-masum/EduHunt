import { model, Schema } from 'mongoose';
import { TApplyStudentPost } from './applyStudentPost.interface';

const ApplyStudentPostSchema = new Schema<TApplyStudentPost>({
  studentId: {
    type: Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  tutorId: {
    type: Schema.Types.ObjectId,
    ref: 'Tutor',
    required: true,
  },
  tuitionId: {
    type: Schema.Types.ObjectId,
    ref: 'StudentPost',
    required: true,
  },
  selectStatus: {
    type: String,
    enum: ['pending', 'yes', 'no'],
    default: 'pending',
  },
  paymentStatus: {
    type: Boolean,
    default: false,
  },
});

export const ApplyStudentPost = model<TApplyStudentPost>(
  'ApplyStudentPost',
  ApplyStudentPostSchema,
);
