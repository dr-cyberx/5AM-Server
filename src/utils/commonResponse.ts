import { Response } from 'express';

export const sendCommonResponse = (
  res: Response,
  status: number,
  resObj: any
): void => {
  res.status(status).json({ ...resObj });
};
