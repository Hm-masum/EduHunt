import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { TutorPostService } from './tutorPost.service';

const createTutorPost = catchAsync(async (req, res) => {
  const { id } = req.user;
  const result = await TutorPostService.createTutorPostIntoDB(req.body, id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tutor Post created successfully',
    data: result,
  });
});

const getAllTutorPosts = catchAsync(async (req, res) => {
  const result = await TutorPostService.getAllTutorPostsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tutor Posts fetched successfully',
    data: result,
  });
});

const getMyTutorPosts = catchAsync(async (req, res) => {
  const { id } = req.user;
  const result = await TutorPostService.getMyTutorPostsFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tutor Posts fetched successfully',
    data: result,
  });
});

const getSingleTutorPost = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await TutorPostService.getSingleTutorPostFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tutor Post fetched successfully',
    data: result,
  });
});

const updateTutorPost = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await TutorPostService.updateTutorPostFromDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tutor Post updated successfully',
    data: result,
  });
});

const deleteTutorPost = catchAsync(async (req, res) => {
  const { id } = req.params;
  await TutorPostService.deleteTutorPostIntoDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tutor Post deleted successfully',
    data: [],
  });
});

export const TutorPostController = {
  createTutorPost,
  getAllTutorPosts,
  getMyTutorPosts,
  getSingleTutorPost,
  updateTutorPost,
  deleteTutorPost,
};
