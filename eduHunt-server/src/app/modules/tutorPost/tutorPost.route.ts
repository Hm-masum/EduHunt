import express from 'express';
import { TutorPostController } from './tutorPost.controller';
import auth from '../../middleWares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post('/', auth(USER_ROLE.tutor), TutorPostController.createTutorPost);

router.get('/', TutorPostController.getAllTutorPosts);

router.get(
  '/my-posts',
  auth(USER_ROLE.tutor),
  TutorPostController.getMyTutorPosts,
);
router.get('/:id', TutorPostController.getSingleTutorPost);

router.delete(
  '/:id',
  auth(USER_ROLE.tutor),
  TutorPostController.deleteTutorPost,
);

router.patch(
  '/:id',
  auth(USER_ROLE.tutor),
  TutorPostController.updateTutorPost,
);

export const TutorPostRoutes = router;
