import { Schema, model } from 'mongoose';
import { TTutorPost } from './tutorPost.interface';

const tutorPostSchema = new Schema<TTutorPost>(
  {
    tutorId: {
      type: Schema.Types.ObjectId,
      ref: 'Tutor',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    tutoringTime: {
      type: String,
      required: true,
    },
    numberOfStudent: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    daysPerWeek: {
      type: String,
      required: true,
    },
    thana: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },

    curriculum: {
      type: String,
      enum: ['English', 'Bangla'],
      default: 'Bangla',
    },
    subject: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const TutorPost = model<TTutorPost>('TutorPost', tutorPostSchema);
