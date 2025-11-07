import express from 'express';
import { StudentController } from './student.controller';
import auth from '../../middleWares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.get('/', StudentController.getAllStudents);
router.get('/:id', StudentController.getSingleStudent);
router.delete('/:id', StudentController.deleteStudent);
router.patch('/:id', auth(USER_ROLE.student), StudentController.updateStudent);

export const StudentRoutes = router;
