/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TLoginUser, TUser } from './user.interface';
import { User } from './user.model';
import { TStudent } from '../student/student.interface';
import { TTutor } from '../tutor/tutor.interface';
import { Student } from '../student/student.model';
import { Tutor } from '../tutor/tutor.model';
import mongoose from 'mongoose';
import { createToken } from './user.utils';
import config from '../../config';
import jwt, { JwtPayload } from 'jsonwebtoken';

const createStudentIntoDB = async (payload: TStudent) => {
  const existingUser = await User.isUserExistsEmail(payload.email);
  if (existingUser) {
    throw new AppError(httpStatus.BAD_REQUEST, 'User is already exist');
  }

  const userData: Partial<TUser> = {};
  userData.password = payload.password;
  userData.role = 'student';
  userData.email = payload.email;
  userData.image = payload.image;
  userData.name = payload.name;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const newUser = await User.create([userData], { session });

    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    payload.user = newUser[0]._id;

    const newStudent = await Student.create([payload], { session });

    if (!newStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create student');
    }

    await session.commitTransaction();
    await session.endSession();

    return newStudent;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

const createTutorIntoDB = async (payload: TTutor) => {
  const existingUser = await User.isUserExistsEmail(payload.email);
  if (existingUser) {
    throw new AppError(httpStatus.BAD_REQUEST, 'User is already exist');
  }

  const userData: Partial<TUser> = {};
  userData.password = payload.password;
  userData.role = 'tutor';
  userData.email = payload.email;
  userData.image = payload.image;
  userData.name = payload.name;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const newUser = await User.create([userData], { session });
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    payload.user = newUser[0]._id;

    const newStudent = await Tutor.create([payload], { session });
    if (!newStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create tutor');
    }

    await session.commitTransaction();
    await session.endSession();

    return newStudent;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

const loginUser = async (payload: TLoginUser) => {
  const user = await User.findOne({ email: payload.email }).select('+password');
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not Found! ');
  }

  const matchedPassword = await User.isPasswordMatched(
    payload?.password,
    user?.password,
  );
  if (!matchedPassword) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched! ');
  }

  const jwtPayload = {
    id: user?._id,
    name: user?.name,
    image: user?.image,
    email: user?.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
  };
};

const refreshToken = async (token: string) => {
  const decoded = jwt.verify(
    token,
    config.jwt_refresh_secret as string,
  ) as JwtPayload;

  const { email } = decoded;

  const user = await User.findOne({ email });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not Found! ');
  }

  const jwtPayload = {
    id: user?.id,
    name: user?.name,
    image: user?.image,
    email: user?.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return { accessToken };
};

const getMe = async (userId: string, role: string) => {
  let result = null;

  if (role === 'student') {
    result = await Student.findOne({ user: userId }).populate('user');
  }

  if (role === 'tutor') {
    result = await Tutor.findOne({ user: userId }).populate('user');
  }

  return result;
};

export const UserServices = {
  createStudentIntoDB,
  createTutorIntoDB,
  loginUser,
  refreshToken,
  getMe,
};
