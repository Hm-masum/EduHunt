import mongoose, { Schema } from 'mongoose';
import { TTutor } from './tutor.interface';

const tutorSchema = new Schema<TTutor>({
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

  education: {
    graduationCurriculum: { type: String },
    graduationSubject: { type: String },
    graduationInstitute: { type: String },
    graduationPassingYear: { type: String },
    graduationResult: { type: String },

    higherSecondaryCurriculum: { type: String },
    higherSecondaryGroup: { type: String },
    higherSecondaryInstitute: { type: String },
    higherSecondaryPassingYear: { type: String },
    higherSecondaryResult: { type: String },

    secondaryCurriculum: { type: String },
    secondaryGroup: { type: String },
    secondaryInstitute: { type: String },
    secondaryPassingYear: { type: String },
    secondaryResult: { type: String },
  },
});

export const Tutor = mongoose.model<TTutor>('Tutor', tutorSchema);
