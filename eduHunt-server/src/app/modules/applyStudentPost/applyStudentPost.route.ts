import express from 'express';
import { ApplyStudentPostController } from './applyStudentPost.controller';
import auth from '../../middleWares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.get(
  '/student',
  auth(USER_ROLE.student),
  ApplyStudentPostController.getApplyStudentPostForStudent,
);
router.get(
  '/tutor',
  auth(USER_ROLE.tutor),
  ApplyStudentPostController.getApplyStudentPostForTutor,
);

router.post(
  '/',
  auth(USER_ROLE.tutor),
  ApplyStudentPostController.createApplyStudentPost,
);

router.get('/', ApplyStudentPostController.getAllApplyStudentPosts);
router.get('/:id', ApplyStudentPostController.getSingleApplyStudentPost);
router.delete('/:id', ApplyStudentPostController.deleteApplyStudentPost);
router.patch('/:id', ApplyStudentPostController.updateApplyStudentPost);

export const ApplyStudentPostRoutes = router;
