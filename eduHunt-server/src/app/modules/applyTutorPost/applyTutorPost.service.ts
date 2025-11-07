import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { ApplyTutorPost } from './applyTutorPost.model';
import { TApplyTutorPost } from './applyTutorPost.interface';
import { Student } from '../student/student.model';
import { Tutor } from '../tutor/tutor.model';
import { TutorPost } from '../tutorPost/tutorPost.model';

const createApplyTutorPostIntoDB = async (
  payload: TApplyTutorPost,
  email: string,
) => {
  const isStudentExist = await Student.findOne({ email });
  if (!isStudentExist) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'You are not a student!');
  }

  const isTutorExist = await Tutor.findById(payload.tutorId);
  if (!isTutorExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Tutor not found');
  }

  const isTuitionExist = await TutorPost.findById(payload.tuitionId);
  if (!isTuitionExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Tuition not found');
  }

  const data = {
    ...payload,
    studentId: isStudentExist._id,
  };

  const result = await ApplyTutorPost.create(data);
  return result;
};

const getAllApplyTutorPostsFromDB = async () => {
  const result = await ApplyTutorPost.find()
    .populate('studentId')
    .populate('tutorId')
    .populate('tuitionId');
  return result;
};

const getApplyTutorPostsForStudent = async (email: string) => {
  const student = await Student.findOne({ email });
  if (!student) {
    throw new AppError(httpStatus.NOT_FOUND, 'Student not found');
  }

  const result = await ApplyTutorPost.find({ studentId: student._id })
    .populate('studentId')
    .populate('tutorId')
    .populate('tuitionId');
  return result;
};

const getApplyTutorPostsForTutor = async (email: string) => {
  const tutor = await Tutor.findOne({ email });
  if (!tutor) {
    throw new AppError(httpStatus.NOT_FOUND, 'Tutor not found');
  }

  const result = await ApplyTutorPost.find({ tutorId: tutor._id })
    .populate('studentId')
    .populate('tutorId')
    .populate('tuitionId');
  return result;
};

const getSingleApplyTutorPostFromDB = async (id: string) => {
  const result = await ApplyTutorPost.findById(id)
    .populate('studentId')
    .populate('tutorId')
    .populate('tuitionId');
  return result;
};

const updateApplyTutorPostFromDB = async (
  id: string,
  payload: Partial<TApplyTutorPost>,
) => {
  const isPostExist = await ApplyTutorPost.findById(id);
  if (!isPostExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Post is not found');
  }

  const result = await ApplyTutorPost.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteApplyTutorPostIntoDB = async (id: string) => {
  const isPostExist = await ApplyTutorPost.findById(id);
  if (!isPostExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Post is not found');
  }

  const result = await ApplyTutorPost.findByIdAndDelete(id, { new: true });
  return result;
};

export const ApplyTutorPostService = {
  createApplyTutorPostIntoDB,
  getAllApplyTutorPostsFromDB,
  getSingleApplyTutorPostFromDB,
  updateApplyTutorPostFromDB,
  deleteApplyTutorPostIntoDB,
  getApplyTutorPostsForStudent,
  getApplyTutorPostsForTutor,
};
