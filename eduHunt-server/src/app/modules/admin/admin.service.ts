import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { User } from '../user/user.model';
import { TUser } from '../user/user.interface';
import { Admin } from './admin.model';
import { TAdmin } from './admin.interface';

const getAllAdminsFromDB = async () => {
  const result = await Admin.find();
  return result;
};

const getSingleAdminFromDB = async (id: string) => {
  const result = await Admin.findById(id);
  return result;
};

const updateAdminFromDB = async (id: string, payload: Partial<TAdmin>) => {
  const isAdminExist = await Admin.findById(id);
  if (!isAdminExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Admin is not found');
  }

  const userUpdateData: Partial<TUser> = {};
  if (payload?.name) userUpdateData.name = payload?.name;
  if (payload?.image) userUpdateData.image = payload?.image;

  if (Object.keys(userUpdateData).length > 0) {
    await User.findOneAndUpdate(
      { email: isAdminExist.email },
      userUpdateData,
      { new: true, runValidators: true },
    );
  }

  const result = await Admin.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteAdminFromDB = async (id: string) => {
  const isAdminExist = await Admin.findById(id);
  if (!isAdminExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Admin is not found');
  }

  const result = await Admin.findByIdAndDelete(id, { new: true });
  return result;
};

export const AdminService = {
  getAllAdminsFromDB,
  getSingleAdminFromDB,
  updateAdminFromDB,
  deleteAdminFromDB,
};
