import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ApplyTutorPostService } from './applyTutorPost.service';

const createApplyTutorPost = catchAsync(async (req, res) => {
  const { email } = req.user;
  const result = await ApplyTutorPostService.createApplyTutorPostIntoDB(
    req.body,
    email,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Apply Tutor Post created successfully',
    data: result,
  });
});

const getAllApplyTutorPosts = catchAsync(async (req, res) => {
  const result = await ApplyTutorPostService.getAllApplyTutorPostsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Apply Tutor Posts fetched successfully',
    data: result,
  });
});

const getSingleApplyTutorPost = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ApplyTutorPostService.getSingleApplyTutorPostFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Apply Tutor Post fetched successfully',
    data: result,
  });
});

const getApplyTutorPostForTutor = catchAsync(async (req, res) => {
  const { email } = req.user;
  const result = await ApplyTutorPostService.getApplyTutorPostsForTutor(email);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Apply Tutor Post fetched successfully',
    data: result,
  });
});

const getApplyTutorPostForStudent = catchAsync(async (req, res) => {
  const { email } = req.user;
  const result =
    await ApplyTutorPostService.getApplyTutorPostsForStudent(email);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Apply Tutor Post fetched successfully',
    data: result,
  });
});

const updateApplyTutorPost = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ApplyTutorPostService.updateApplyTutorPostFromDB(
    id,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Apply Tutor Post updated successfully',
    data: result,
  });
});

const deleteApplyTutorPost = catchAsync(async (req, res) => {
  const { id } = req.params;
  await ApplyTutorPostService.deleteApplyTutorPostIntoDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Apply Tutor Post deleted successfully',
    data: [],
  });
});

export const ApplyTutorPostController = {
  createApplyTutorPost,
  getAllApplyTutorPosts,
  getSingleApplyTutorPost,
  getApplyTutorPostForTutor,
  getApplyTutorPostForStudent,
  updateApplyTutorPost,
  deleteApplyTutorPost,
};
