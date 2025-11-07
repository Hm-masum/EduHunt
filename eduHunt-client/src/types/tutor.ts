import { IUser } from "./user";

export type ITutor = {
  _id: string;
  name: string;
  fatherName: string;
  motherName: string;
  user?: IUser;
  password: string;
  gender: "male" | "female";
  role: "student" | "tutor" | "admin";
  email: string;
  phone: string;
  image: string;
  thana: string;
  district: string;

  education?: {
    graduationCurriculum?: string;
    graduationInstitute?: string;
    graduationSubject?: string;
    graduationPassingYear?: string;
    graduationResult?: string;

    higherSecondaryCurriculum?: string;
    higherSecondaryGroup?: string;
    higherSecondaryInstitute?: string;
    higherSecondaryPassingYear?: string;
    higherSecondaryResult?: string;

    secondaryCurriculum?: string;
    secondaryGroup?: string;
    secondaryInstitute?: string;
    secondaryPassingYear?: string;
    secondaryResult?: string;
  };
  isActive?: boolean;
};
