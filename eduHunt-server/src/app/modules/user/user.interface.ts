/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';

export type TUser = {
  name: string;
  email: string;
  image: string;
  password: string;
  isActive?: boolean;
  role: 'student' | 'tutor' | 'admin';
};

export type TLoginUser = {
  email: string;
  password: string;
};

export type TUserRole = keyof typeof USER_ROLE;

export interface UserModel extends Model<TUser> {
  isUserExistsEmail(email: string): Promise<TUser>;
  isPasswordMatched(password: string, hashedPassword: string): Promise<boolean>;
}
