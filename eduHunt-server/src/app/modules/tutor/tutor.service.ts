import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { Tutor } from './tutor.model';
import { TTutor } from './tutor.interface';
import { TUser } from '../user/user.interface';
import { User } from '../user/user.model';

const getAllTutorsFromDB = async () => {
  const result = await Tutor.find();
  return result;
};

const getSingleTutorFromDB = async (id: string) => {
  const result = await Tutor.findById(id);
  return result;
};

const updateTutorFromDB = async (id: string, payload: Partial<TTutor>) => {
  const isTutorExist = await Tutor.findById(id);
  if (!isTutorExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Tutor is not found');
  }

  // user model update
  const userUpdateData: Partial<TUser> = {};
  if (payload.name) userUpdateData.name = payload.name;
  if (payload.image) userUpdateData.image = payload.image;

  if (Object.keys(userUpdateData).length > 0) {
    await User.findOneAndUpdate({ email: isTutorExist.email }, userUpdateData, {
      new: true,
      runValidators: true,
    });
  }

  // tutor model update
  const result = await Tutor.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteTutorIntoDB = async (id: string) => {
  const isTutorExist = await Tutor.findById(id);
  if (!isTutorExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Tutor is not found');
  }

  const result = await Tutor.findByIdAndDelete(id, { new: true });
  return result;
};

export const TutorService = {
  getAllTutorsFromDB,
  getSingleTutorFromDB,
  updateTutorFromDB,
  deleteTutorIntoDB,
};
