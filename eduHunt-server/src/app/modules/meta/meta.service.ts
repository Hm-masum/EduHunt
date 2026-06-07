import { ApplyStudentPost } from "../applyStudentPost/applyStudentPost.model";
import { ApplyTutorPost } from "../applyTutorPost/applyTutorPost.model";
import { Payment } from "../PaymentManagement/payment.model";
import { Student } from "../student/student.model";
import { StudentPost } from "../studentPost/studentPost.model";
import { Tutor } from "../tutor/tutor.model";
import { TutorPost } from "../tutorPost/tutorPost.model";
import { USER_ROLE } from "../user/user.constant";


const fetchDashboardMetaData = async (email: string, role: string) => {
  let metaData;
  switch (role) {
    case USER_ROLE.admin:
      metaData = await getAdminMetaData();
      break;
    case USER_ROLE.tutor:
      metaData = await getTutorMetaData(email);
      break;
    case USER_ROLE.student:
      metaData = await getStudentMetaData(email);
      break;
    default:
      throw new Error("Invalid user role");
  }
  return metaData;
};

const getAdminMetaData = async () => {
  const [
    studentCount,
    tutorCount,
    studentPostCount,
    tutorPostCount,
    paymentCount,
    applyStudentPostCount,
    applyTutorPostCount,
  ] = await Promise.all([
    Student.countDocuments(),
    Tutor.countDocuments(),
    StudentPost.countDocuments(),
    TutorPost.countDocuments(),
    Payment.countDocuments(),
    ApplyStudentPost.countDocuments(),
    ApplyTutorPost.countDocuments(),
  ]);

  const totalRevenueResult = await Payment.aggregate([
    { $match: { status: "Paid" } },
    { $group: { _id: null, totalAmount: { $sum: "$salary" } } },
  ]);

  const totalRevenue = totalRevenueResult[0]?.totalAmount || 0;


  return {
    studentCount,
    tutorCount,
    studentPostCount,
    tutorPostCount,
    paymentCount,
    applyStudentPostCount,
    applyTutorPostCount,
    totalRevenue,
  };
};

const getTutorMetaData = async (email: string) => {
  const tutorData = await Tutor.findOne({ email });
  if (!tutorData) throw new Error("Tutor not found");

  const tutorId = tutorData._id;

  const [
    tutorPostCount,
    applyStudentPostCount,
    applyTutorPostCount,
  ] = await Promise.all([
    TutorPost.countDocuments({ tutorId }),
    ApplyStudentPost.countDocuments({ tutorId }),
    ApplyTutorPost.countDocuments({ tutorId }),
  ]);

  const totalRevenueResult = await Payment.aggregate([
    { $match: { tutorId, status: "Paid" } },
    { $group: { _id: null, totalAmount: { $sum: "$salary" } } },
  ]);

  const totalRevenue = totalRevenueResult[0]?.totalAmount || 0;

  return {
    myPosts: tutorPostCount,
    myApplications: applyStudentPostCount,
    totalApplicationsOfMyPosts: applyTutorPostCount,
    totalRevenue,
  };
};

const getStudentMetaData = async (email: string) => {
  const studentData = await Student.findOne({ email });
  if (!studentData) throw new Error("Student not found");

  const studentId = studentData._id;

  const [
    studentPostCount,
    applyTutorPostCount,
    applyStudentPostCount,
  ] = await Promise.all([
    StudentPost.countDocuments({ studentId }),
    ApplyTutorPost.countDocuments({ studentId }),
    ApplyStudentPost.countDocuments({ studentId }),
  ]);

  const totalPaymentsResult = await Payment.aggregate([
    { $match: { studentId, status: "Paid" } },
    { $group: { _id: null, totalAmount: { $sum: "$salary" } } },
  ]);
  const totalPayments = totalPaymentsResult[0]?.totalAmount || 0;


  return {
    myPosts: studentPostCount,
    myApplications: applyTutorPostCount,
    totalApplicationsOfMyPosts: applyStudentPostCount,
    totalPayments,
  };
};


export const MetaService = {
  fetchDashboardMetaData,
};