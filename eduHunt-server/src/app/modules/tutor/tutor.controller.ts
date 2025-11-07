import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { TutorService } from './tutor.service';

const getAllTutors = catchAsync(async (req, res) => {
  const result = await TutorService.getAllTutorsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tutors fetched successfully',
    data: result,
  });
});

const getSingleTutor = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await TutorService.getSingleTutorFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tutor fetched successfully',
    data: result,
  });
});

const updateTutor = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await TutorService.updateTutorFromDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tutor updated successfully',
    data: result,
  });
});

const deleteTutor = catchAsync(async (req, res) => {
  const { id } = req.params;
  await TutorService.deleteTutorIntoDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tutor deleted successfully',
    data: [],
  });
});

export const TutorController = {
  getAllTutors,
  getSingleTutor,
  updateTutor,
  deleteTutor,
};
