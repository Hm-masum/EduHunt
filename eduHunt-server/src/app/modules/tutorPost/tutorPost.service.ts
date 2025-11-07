import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { TutorPost } from './tutorPost.model';
import { TTutorPost } from './tutorPost.interface';

import { Tutor } from '../tutor/tutor.model';

const createTutorPostIntoDB = async (payload: TTutorPost, userId: string) => {
  const isUserExist = await Tutor.findOne({ user: userId });
  if (!isUserExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'User is not found');
  }

  const data = {
    ...payload,
    tutorId: isUserExist._id,
  };

  const result = await TutorPost.create(data);
  return result;
};

const getAllTutorPostsFromDB = async () => {
  const result = await TutorPost.find().populate('tutorId');
  return result;
};

const getMyTutorPostsFromDB = async (tutorId: string) => {
  const result = await TutorPost.find({ tutorId: tutorId }).populate('tutorId');
  return result;
};

const getSingleTutorPostFromDB = async (id: string) => {
  const isPostExist = await TutorPost.findById(id);
  if (!isPostExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Post is not found');
  }

  const result = await TutorPost.findById(id).populate('tutorId');
  return result;
};

const updateTutorPostFromDB = async (
  id: string,
  payload: Partial<TTutorPost>,
) => {
  const isPostExist = await TutorPost.findById(id);
  if (!isPostExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Post is not found');
  }

  const result = await TutorPost.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteTutorPostIntoDB = async (id: string) => {
  const isPostExist = await TutorPost.findById(id);
  if (!isPostExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Post is not found');
  }

  const result = await TutorPost.findByIdAndDelete(id, { new: true });
  return result;
};

export const TutorPostService = {
  createTutorPostIntoDB,
  getAllTutorPostsFromDB,
  getMyTutorPostsFromDB,
  getSingleTutorPostFromDB,
  updateTutorPostFromDB,
  deleteTutorPostIntoDB,
};
