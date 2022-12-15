import { ErrorRequestHandler } from 'express';
import { sendCommonResponse } from '../utils/commonResponse';

export const globalErrorController: ErrorRequestHandler = (err, req, res, next): void => {
  console.log(err);
  return sendCommonResponse(res, 500, {
    message: 'Something went wrong!',
  });
};
