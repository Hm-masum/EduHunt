import express from 'express';
import { StudentPostController } from './studentPost.controller';
import auth from '../../middleWares/auth';
import { USER_ROLE } from '../user/user.constant';
const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.student),
  StudentPostController.createStudentPost,
);

router.get(
  '/my-posts',
  auth(USER_ROLE.student),
  StudentPostController.getMyStudentPosts,
);
router.get('/', StudentPostController.getAllStudentPosts);
router.get('/:id', StudentPostController.getSingleStudentPost);

router.delete(
  '/:id',
  auth(USER_ROLE.student,USER_ROLE.admin),
  StudentPostController.deleteStudentPost,
);

router.patch(
  '/:id',
  auth(USER_ROLE.student),
  StudentPostController.updateStudentPost,
);

export const StudentPostRoutes = router;
