import express from 'express';
import auth from '../../middleWares/auth';
import { USER_ROLE } from '../user/user.constant';
import { PaymentController } from './payment.controller';
const router = express.Router();

router.post(
  '/create-payment',
  auth(USER_ROLE.student),
  PaymentController.createPayment,
);

router.get('/verify', PaymentController.verifyPayment);

router.get('/all-payment', PaymentController.getAllPayment);

router.get(
  '/payment-history-student',
  auth(USER_ROLE.student),
  PaymentController.getPaymentHistoryForStudent,
);

router.get(
  '/payment-history-tutor',
  auth(USER_ROLE.tutor),
  PaymentController.getPaymentHistoryForTutor,
);

router.delete(
  '/:id',
  auth(USER_ROLE.tutor, USER_ROLE.student),
  PaymentController.deletePayment,
);

export const PaymentRoutes = router;
