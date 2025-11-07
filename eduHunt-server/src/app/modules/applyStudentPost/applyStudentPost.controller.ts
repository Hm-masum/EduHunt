import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ApplyStudentPostService } from './applyStudentPost.service';

const createApplyStudentPost = catchAsync(async (req, res) => {
  const { email } = req.user;
  const result = await ApplyStudentPostService.createApplyStudentPostIntoDB(
    req.body,
    email,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Apply Student Post created successfully',
    data: result,
  });
});

const getAllApplyStudentPosts = catchAsync(async (req, res) => {
  const result = await ApplyStudentPostService.getAllApplyStudentPostsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Apply Student Posts fetched successfully',
    data: result,
  });
});

const getSingleApplyStudentPost = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result =
    await ApplyStudentPostService.getSingleApplyStudentPostFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Apply Student Post fetched successfully',
    data: result,
  });
});

const getApplyStudentPostForTutor = catchAsync(async (req, res) => {
  const email = req.user.email;
  const result =
    await ApplyStudentPostService.getApplyStudentPostsForTutor(email);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Apply Student Post fetched successfully',
    data: result,
  });
});

const getApplyStudentPostForStudent = catchAsync(async (req, res) => {
  const email = req.user.email;
  const result =
    await ApplyStudentPostService.getApplyStudentPostsForStudent(email);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Apply Student Post fetched successfully',
    data: result,
  });
});

const updateApplyStudentPost = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ApplyStudentPostService.updateApplyStudentPostFromDB(
    id,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Apply Student Post updated successfully',
    data: result,
  });
});

const deleteApplyStudentPost = catchAsync(async (req, res) => {
  const { id } = req.params;
  await ApplyStudentPostService.deleteApplyStudentPostIntoDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Apply Student Post deleted successfully',
    data: [],
  });
});

export const ApplyStudentPostController = {
  createApplyStudentPost,
  getAllApplyStudentPosts,
  getSingleApplyStudentPost,
  getApplyStudentPostForTutor,
  getApplyStudentPostForStudent,
  updateApplyStudentPost,
  deleteApplyStudentPost,
};
