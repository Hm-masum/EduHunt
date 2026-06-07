import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { MetaService } from './meta.service';

const fetchDashboardMetaData = catchAsync(async (req, res) => {
  const { email,role } = req.user;
  const result = await MetaService.fetchDashboardMetaData(email,role);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Dashboard metadata fetched successfully',
    data: result,
  });
});

export const MetaController = {
    fetchDashboardMetaData,
}