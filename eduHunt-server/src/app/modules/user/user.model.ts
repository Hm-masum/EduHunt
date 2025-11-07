/* eslint-disable @typescript-eslint/no-this-alias */
import { model, Schema } from 'mongoose';
import { TUser, UserModel } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

const userSchema = new Schema<TUser, UserModel>(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      validate: {
        validator: function (value: string) {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
        },
        message: '{VALUE} is not valid email',
      },
      unique: true,
    },
    image: { type: String, required: true },
    password: { type: String, required: true, select: 0 },
    role: { type: String, enum: ['student', 'tutor', 'admin'] },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

userSchema.statics.isPasswordMatched = async function (
  password,
  hashedPassword,
) {
  return await bcrypt.compare(password, hashedPassword);
};

userSchema.statics.isUserExistsEmail = async function (email: string) {
  return await User.findOne({ email }).select('+password');
};

export const User = model<TUser, UserModel>('User', userSchema);
