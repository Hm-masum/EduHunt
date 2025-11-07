import { model, Schema } from 'mongoose';
import { TApplyTutorPost } from './applyTutorPost.interface';

const ApplyTutorPostSchema = new Schema<TApplyTutorPost>({
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
    ref: 'TutorPost',
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

export const ApplyTutorPost = model<TApplyTutorPost>(
  'ApplyTutorPost',
  ApplyTutorPostSchema,
);
