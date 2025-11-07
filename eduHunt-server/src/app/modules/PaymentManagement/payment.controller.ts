import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { PaymentServices } from './payment.service';

const createPayment = catchAsync(async (req, res) => {
  const body = req.body;
  const result = await PaymentServices.createPaymentIntoDB(body, req.ip!);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Payment created successfully',
    data: result,
  });
});

const verifyPayment = catchAsync(async (req, res) => {
  const result = await PaymentServices.verifyPayment(
    req.query.order_id as string,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Payment verified successfully',
    data: result,
  });
});

const getAllPayment = catchAsync(async (req, res) => {
  const result = await PaymentServices.getAllOrderFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Payment Retrieve successfully',
    data: result,
  });
});

const getPaymentHistoryForTutor = catchAsync(async (req, res) => {
  const id = req.user.id;
  const result = await PaymentServices.getPaymentHistoryForTutor(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tutor Payment Retrieve successfully',
    data: result,
  });
});

const getPaymentHistoryForStudent = catchAsync(async (req, res) => {
  const id = req.user.id;
  const result = await PaymentServices.getPaymentHistoryForStudent(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Payment Retrieve successfully',
    data: result,
  });
});

const deletePayment = catchAsync(async (req, res) => {
  const { id } = req.params;
  await PaymentServices.deletePaymentHistory(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Payment deleted successfully',
    data: [],
  });
});

export const PaymentController = {
  createPayment,
  getAllPayment,
  verifyPayment,
  getPaymentHistoryForStudent,
  getPaymentHistoryForTutor,
  deletePayment,
};
