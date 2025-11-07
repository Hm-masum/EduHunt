import { IUser } from "./user";

export type IStudent = {
  _id: string;
  name: string;
  fatherName: string;
  motherName: string;
  user?: IUser;
  password: string;
  gender: "male" | "female";
  role: "student";
  email: string;
  phone: string;
  image: string;
  thana: string;
  district: string;
  isActive?: boolean;
};
