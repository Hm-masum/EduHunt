import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { Tutor } from './tutor.model';
import { TTutor } from './tutor.interface';
import { TUser } from '../user/user.interface';
import { User } from '../user/user.model';
import QueryBuilder from '../../builder/QueryBuilder';
import { tutorSearchableFields } from './tutor.constant';

const getAllTutorsFromDB = async (query: Record<string, unknown>) => {
  const tutorQuery = new QueryBuilder(Tutor.find(), query)
    .search(tutorSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await tutorQuery.modelQuery;
  const meta = await tutorQuery.countTotal();
  return {
    meta,
    data: result,
  };
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
