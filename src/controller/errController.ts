import { ErrorRequestHandler } from 'express';
import { sendCommonResponse } from '../utils/commonResponse';

export const globalErrorController: ErrorRequestHandler = (err, req, res, next): void => {
  const statusCode: number = err.statusCode || 500;
  const message: string = err.message || 'Something went wrong!';

  if (process.env.NODE_ENV === 'development') {
    return sendCommonResponse(res, statusCode, {
      message,
      stack: err.stack,
      err,
    });
  } else if (process.env.NODE_ENV === 'production') {
    return sendCommonResponse(res, statusCode, {
      message,
    });
  }
};
