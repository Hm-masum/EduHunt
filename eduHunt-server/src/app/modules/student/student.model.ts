import mongoose, { Schema } from 'mongoose';
import { TStudent } from './student.interface';

const studentSchema = new Schema<TStudent>({
  name: { type: String, required: true },
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'userId is required'],
    unique: true,
    ref: 'User',
  },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, required: true },
  thana: { type: String, required: true },
  district: { type: String, required: true },
  role: { type: String, enum: ['student', 'tutor', 'admin'] },
  gender: { type: String, enum: ['male', 'female'] },
  isActive: { type: Boolean, default: true },
});

export const Student = mongoose.model<TStudent>('Student', studentSchema);
