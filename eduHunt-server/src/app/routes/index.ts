import { Router } from 'express';
import { BlogRoutes } from '../modules/blog/blog.route';
import { UserRoutes } from '../modules/user/user.route';
import { StudentRoutes } from '../modules/student/student.route';
import { TutorRoutes } from '../modules/tutor/tutor.route';
import { StudentPostRoutes } from '../modules/studentPost/studentPost.route';
import { TutorPostRoutes } from '../modules/tutorPost/tutorPost.route';
import { ApplyTutorPostRoutes } from '../modules/applyTutorPost/applyTutorPost.route';
import { ApplyStudentPostRoutes } from '../modules/applyStudentPost/applyStudentPost.route';
import { PaymentRoutes } from '../modules/PaymentManagement/payment.route';
import { MetaRoutes } from '../modules/meta/meta.routes';
import { AdminRoutes } from '../modules/admin/admin.routes';
const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/tutors',
    route: TutorRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/student-posts',
    route: StudentPostRoutes,
  },
  {
    path: '/tutor-posts',
    route: TutorPostRoutes,
  },
  {
    path: '/apply-tutor-post',
    route: ApplyTutorPostRoutes,
  },
  {
    path: '/apply-student-post',
    route: ApplyStudentPostRoutes,
  },
  {
    path: '/payment',
    route: PaymentRoutes,
  },
  {
    path: '/meta',
    route: MetaRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
