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
  auth(USER_ROLE.student, USER_ROLE.tutor, USER_ROLE.admin),
  blogController.createBlog,
);

router.get('/', blogController.getAllBlogs);
router.get(
  '/my-blogs',
  auth(USER_ROLE.student, USER_ROLE.tutor, USER_ROLE.admin),
  blogController.getMyBlogs,
);
router.get('/:id', blogController.getSingleBlog);

router.delete(
  '/:id',
  auth(USER_ROLE.student, USER_ROLE.tutor, USER_ROLE.admin),
  blogController.deleteBlog,
);

router.patch(
  '/:id',
  validateRequest(blogValidation.updateBlogValidationSchema),
  auth(USER_ROLE.student, USER_ROLE.tutor, USER_ROLE.admin),
  blogController.updateBlog,
);

export const BlogRoutes = router;
