import express from 'express';
import { ApplyTutorPostController } from './applyTutorPost.controller';
import auth from '../../middleWares/auth';
import { USER_ROLE } from '../user/user.constant';
const router = express.Router();

router.get(
  '/tutor',
  auth(USER_ROLE.tutor),
  ApplyTutorPostController.getApplyTutorPostForTutor,
);

router.get(
  '/student',
  auth(USER_ROLE.student),
  ApplyTutorPostController.getApplyTutorPostForStudent,
);

router.post(
  '/',
  auth(USER_ROLE.student),
  ApplyTutorPostController.createApplyTutorPost,
);

router.get('/', ApplyTutorPostController.getAllApplyTutorPosts);
router.get('/:id', ApplyTutorPostController.getSingleApplyTutorPost);
router.delete('/:id', ApplyTutorPostController.deleteApplyTutorPost);
router.patch('/:id', ApplyTutorPostController.updateApplyTutorPost);

export const ApplyTutorPostRoutes = router;
