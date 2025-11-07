import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { StudentPost } from './studentPost.model';
import { TStudentPost } from './studentPost.interface';
import { Student } from '../student/student.model';

const createStudentPostIntoDB = async (
  payload: TStudentPost,
  userId: string,
) => {
  const isUserExist = await Student.findOne({ user: userId });
  if (!isUserExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'User is not found');
  }

  const data = {
    ...payload,
    studentId: isUserExist._id,
  };
  const result = await StudentPost.create(data);
  return result;
};

const getAllStudentPostsFromDB = async () => {
  const result = await StudentPost.find().populate('studentId');
  return result;
};

const getMyStudentPostsFromDB = async (studentId: string) => {
  const result = await StudentPost.find({ studentId: studentId }).populate(
    'studentId',
  );
  return result;
};

const getSingleStudentPostFromDB = async (id: string) => {
  const isPostExist = await StudentPost.findById(id);
  if (!isPostExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Post is not found');
  }
  const result = await StudentPost.findById(id).populate('studentId');
  return result;
};

const updateStudentPostFromDB = async (
  id: string,
  payload: Partial<TStudentPost>,
) => {
  const isPostExist = await StudentPost.findById(id);
  if (!isPostExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Post is not found');
  }

  const result = await StudentPost.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteStudentPostIntoDB = async (id: string) => {
  const isPostExist = await StudentPost.findById(id);
  if (!isPostExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Post is not found');
  }

  const result = await StudentPost.findByIdAndDelete(id, { new: true });
  return result;
};

export const StudentPostService = {
  createStudentPostIntoDB,
  getAllStudentPostsFromDB,
  getMyStudentPostsFromDB,
  getSingleStudentPostFromDB,
  updateStudentPostFromDB,
  deleteStudentPostIntoDB,
};
