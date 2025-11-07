import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { Student } from '../student/student.model';
import { Tutor } from '../tutor/tutor.model';
import { TApplyStudentPost } from './applyStudentPost.interface';
import { ApplyStudentPost } from './applyStudentPost.model';
import { StudentPost } from '../studentPost/studentPost.model';

const createApplyStudentPostIntoDB = async (
  payload: TApplyStudentPost,
  email: string,
) => {
  const isStudentExist = await Student.findById(payload.studentId);
  if (!isStudentExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Student not found');
  }

  const isTutorExist = await Tutor.findOne({ email });
  if (!isTutorExist) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'You are not a tutor!');
  }

  const isTuitionExist = await StudentPost.findById(payload.tuitionId);
  if (!isTuitionExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Tuition not found');
  }

  const data = {
    ...payload,
    tutorId: isTutorExist._id,
  };

  const result = await ApplyStudentPost.create(data);
  return result;
};

const getAllApplyStudentPostsFromDB = async () => {
  const result = await ApplyStudentPost.find()
    .populate('studentId')
    .populate('tutorId')
    .populate('tuitionId');
  return result;
};

const getApplyStudentPostsForStudent = async (email: string) => {
  const student = await Student.findOne({ email });
  if (!student) {
    throw new AppError(httpStatus.NOT_FOUND, 'Student not found');
  }

  const result = await ApplyStudentPost.find({ studentId: student._id })
    .populate('studentId')
    .populate('tutorId')
    .populate('tuitionId');
  return result;
};

const getApplyStudentPostsForTutor = async (email: string) => {
  const tutor = await Tutor.findOne({ email });
  if (!tutor) {
    throw new AppError(httpStatus.NOT_FOUND, 'Tutor not found');
  }

  const result = await ApplyStudentPost.find({ tutorId: tutor._id })
    .populate('studentId')
    .populate('tutorId')
    .populate('tuitionId');
  return result;
};

const getSingleApplyStudentPostFromDB = async (id: string) => {
  const result = await ApplyStudentPost.findById(id)
    .populate('studentId')
    .populate('tutorId')
    .populate('tuitionId');
  return result;
};

const updateApplyStudentPostFromDB = async (
  id: string,
  payload: Partial<TApplyStudentPost>,
) => {
  const isPostExist = await ApplyStudentPost.findById(id);
  if (!isPostExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Post is not found');
  }

  const result = await ApplyStudentPost.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteApplyStudentPostIntoDB = async (id: string) => {
  const isPostExist = await ApplyStudentPost.findById(id);
  if (!isPostExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Post is not found');
  }

  const result = await ApplyStudentPost.findByIdAndDelete(id, { new: true });
  return result;
};

export const ApplyStudentPostService = {
  createApplyStudentPostIntoDB,
  getAllApplyStudentPostsFromDB,
  getApplyStudentPostsForStudent,
  getApplyStudentPostsForTutor,
  getSingleApplyStudentPostFromDB,
  updateApplyStudentPostFromDB,
  deleteApplyStudentPostIntoDB,
};
