import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { Payment } from './payment.model';
import { orderUtils } from './payment.utils';
import { ApplyStudentPost } from '../applyStudentPost/applyStudentPost.model';
import { ApplyTutorPost } from '../applyTutorPost/applyTutorPost.model';
import { StudentPost } from '../studentPost/studentPost.model';
import { Student } from '../student/student.model';
import { TutorPost } from '../tutorPost/tutorPost.model';
import { Tutor } from '../tutor/tutor.model';

const createPaymentIntoDB = async (
  payload: { applicationId: string },
  client_ip: string,
) => {
  if (!payload?.applicationId) {
    throw new AppError(httpStatus.NOT_ACCEPTABLE, 'Payment is not specified');
  }

  const tutorApplication = await ApplyStudentPost.findById(
    payload.applicationId,
  );
  const studentApplication = await ApplyTutorPost.findById(
    payload.applicationId,
  );

  let application;
  let tuition;
  let student;

  if (tutorApplication) {
    application = tutorApplication;
    tuition = await StudentPost.findById(application.tuitionId);
    student = await Student.findById(application.studentId);
  } else if (studentApplication) {
    application = studentApplication;
    tuition = await TutorPost.findById(application.tuitionId);
    student = await Student.findById(application.studentId);
  } else {
    throw new AppError(httpStatus.BAD_REQUEST, 'Application is not found');
  }

  const paymentData = {
    ...payload,
    studentId: application?.studentId,
    tutorId: application?.tutorId,
    salary: tuition?.salary,
  };

  let order = await Payment.create(paymentData);

  // payment integration
  const shurjopayPayload = {
    amount: tuition?.salary,
    order_id: order._id,
    currency: 'BDT',
    customer_name: student?.name,
    customer_address: student?.thana,
    customer_email: student?.email,
    customer_phone: String(student?.phone),
    customer_city: student?.district,
    client_ip,
  };

  const payment = await orderUtils.makePaymentAsync(shurjopayPayload);

  if (payment?.transactionStatus) {
    order = await order.updateOne({
      transaction: {
        id: payment.sp_order_id,
        transactionStatus: payment.transactionStatus,
      },
    });
  }

  return payment.checkout_url;
};

const verifyPayment = async (order_id: string) => {
  const verifiedPayment = await orderUtils.verifyPaymentAsync(order_id);

  const paymentApplication = await Payment.findOne({
    'transaction.id': order_id,
  });

  const tutorApplication = await ApplyStudentPost.findById(
    paymentApplication?.applicationId,
  );

  const studentApplication = await ApplyTutorPost.findById(
    paymentApplication?.applicationId,
  );

  if (tutorApplication) {
    await ApplyStudentPost.findByIdAndUpdate(tutorApplication._id, {
      paymentStatus: true,
    });
  } else if (studentApplication) {
    await ApplyTutorPost.findByIdAndUpdate(studentApplication._id, {
      paymentStatus: true,
    });
  }

  if (verifiedPayment.length) {
    await Payment.findOneAndUpdate(
      {
        'transaction.id': order_id,
      },
      {
        'transaction.bank_status': verifiedPayment[0].bank_status,
        'transaction.sp_code': verifiedPayment[0].sp_code,
        'transaction.sp_message': verifiedPayment[0].sp_message,
        'transaction.transactionStatus': verifiedPayment[0].transaction_status,
        'transaction.method': verifiedPayment[0].method,
        'transaction.date_time': verifiedPayment[0].date_time,
        status:
          verifiedPayment[0].bank_status == 'Success'
            ? 'Paid'
            : verifiedPayment[0].bank_status == 'Failed'
              ? 'Pending'
              : verifiedPayment[0].bank_status == 'Cancel'
                ? 'Cancelled'
                : '',
      },
    );
  }

  return verifiedPayment;
};

const getAllOrderFromDB = async () => {
  const result = await Payment.find().populate('studentId').populate('tutorId');
  return result;
};

const getPaymentHistoryForStudent = async (userId: string) => {
  const student = await Student.findOne({ user: userId });
  const result = await Payment.find({ studentId: student?._id })
    .populate('studentId')
    .populate('tutorId');
  return result;
};

const getPaymentHistoryForTutor = async (userId: string) => {
  const tutor = await Tutor.findOne({ user: userId });

  const result = await Payment.find({ tutorId: tutor?._id })
    .populate('studentId')
    .populate('tutorId');
  return result;
};

const deletePaymentHistory = async (id: string) => {
  const res = await Payment.findByIdAndDelete(id);
};

export const PaymentServices = {
  createPaymentIntoDB,
  verifyPayment,
  getAllOrderFromDB,
  getPaymentHistoryForStudent,
  getPaymentHistoryForTutor,
  deletePaymentHistory,
};
