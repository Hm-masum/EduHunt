import express from 'express';
import { TutorController } from './tutor.controller';
import { USER_ROLE } from '../user/user.constant';
import auth from '../../middleWares/auth';

const router = express.Router();

router.get('/', TutorController.getAllTutors);
router.get('/:id', TutorController.getSingleTutor);
router.delete('/:id', TutorController.deleteTutor);
router.patch('/:id', auth(USER_ROLE.tutor), TutorController.updateTutor);

export const TutorRoutes = router;
