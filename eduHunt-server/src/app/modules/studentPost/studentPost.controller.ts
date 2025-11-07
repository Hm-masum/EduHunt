import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StudentPostService } from './studentPost.service';

const createStudentPost = catchAsync(async (req, res) => {
  const { id } = req.user;
  const result = await StudentPostService.createStudentPostIntoDB(req.body, id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Post created successfully',
    data: result,
  });
});

const getAllStudentPosts = catchAsync(async (req, res) => {
  const result = await StudentPostService.getAllStudentPostsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Posts fetched successfully',
    data: result,
  });
});

const getSingleStudentPost = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await StudentPostService.getSingleStudentPostFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Post fetched successfully',
    data: result,
  });
});

const getMyStudentPosts = catchAsync(async (req, res) => {
  const { id } = req.user;
  const result = await StudentPostService.getMyStudentPostsFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Post fetched successfully',
    data: result,
  });
});

const updateStudentPost = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await StudentPostService.updateStudentPostFromDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Post updated successfully',
    data: result,
  });
});

const deleteStudentPost = catchAsync(async (req, res) => {
  const { id } = req.params;
  await StudentPostService.deleteStudentPostIntoDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Post deleted successfully',
    data: [],
  });
});

export const StudentPostController = {
  createStudentPost,
  getAllStudentPosts,
  getMyStudentPosts,
  getSingleStudentPost,
  updateStudentPost,
  deleteStudentPost,
};
