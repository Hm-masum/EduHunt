import express from 'express';
import auth from '../../middleWares/auth';
import { USER_ROLE } from '../user/user.constant';
import { AdminController } from './admin.controller';

const router = express.Router();

router.get('/', AdminController.getAllAdmins);
router.get('/:id', AdminController.getSingleAdmin);
router.delete('/:id',auth(USER_ROLE.admin), AdminController.deleteAdmin);
router.patch('/:id', auth(USER_ROLE.admin), AdminController.updateAdmin);

export const AdminRoutes = router;
