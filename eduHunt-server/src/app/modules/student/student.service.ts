import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { Student } from './student.model';
import { TStudent } from './student.interface';
import { User } from '../user/user.model';
import { TUser } from '../user/user.interface';

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findById(id);
  return result;
};

const updateStudentFromDB = async (id: string, payload: Partial<TStudent>) => {
  const isStudentExist = await Student.findById(id);
  if (!isStudentExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Student is not found');
  }

  // user model update
  const userUpdateData: Partial<TUser> = {};
  if (payload.name) userUpdateData.name = payload.name;
  if (payload.image) userUpdateData.image = payload.image;

  if (Object.keys(userUpdateData).length > 0) {
    await User.findOneAndUpdate(
      { email: isStudentExist.email },
      userUpdateData,
      { new: true, runValidators: true },
    );
  }

  // student model update
  const result = await Student.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteStudentIntoDB = async (id: string) => {
  const isStudentExist = await Student.findById(id);
  if (!isStudentExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Student is not found');
  }

  const result = await Student.findByIdAndDelete(id, { new: true });
  return result;
};

export const StudentService = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  updateStudentFromDB,
  deleteStudentIntoDB,
};
