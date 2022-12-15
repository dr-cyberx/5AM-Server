import { NextFunction, Request, Response } from 'express';
import { sendCommonResponse } from '../utils/commonResponse';

export const unKnownPathController = (req: Request, res: Response, next: NextFunction): void => {
  return sendCommonResponse(res, 500, {
    message: `Can't find ${req.originalUrl} on the server!`,
  });
};
