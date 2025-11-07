import express from 'express';
import validateRequest from '../../middleWares/validateRequest';
import { blogValidation } from './blog.validation';
import { blogController } from './blog.controller';
import { USER_ROLE } from '../user/user.constant';
import auth from '../../middleWares/auth';
const router = express.Router();

router.post(
  '/',
  validateRequest(blogValidation.createBlogValidationSchema),
  auth(USER_ROLE.student, USER_ROLE.tutor),
  blogController.createBlog,
);

router.get('/', blogController.getAllBlogs);
router.get(
  '/my-blogs',
  auth(USER_ROLE.student, USER_ROLE.tutor),
  blogController.getMyBlogs,
);
router.get('/:id', blogController.getSingleBlog);

router.delete(
  '/:id',
  auth(USER_ROLE.student, USER_ROLE.tutor),
  blogController.deleteBlog,
);

router.patch(
  '/:id',
  validateRequest(blogValidation.updateBlogValidationSchema),
  auth(USER_ROLE.student, USER_ROLE.tutor),
  blogController.updateBlog,
);

export const BlogRoutes = router;
