import { Response } from 'express';
import { commonResponseMessage } from './commonRespMessage';

interface IresObj {
  message?: commonResponseMessage | string;
  error?: boolean;
  token?: string;
  data?: Object;
  stack?: any;
  err?: any;
}

export const sendCommonResponse = (res: Response, status: number = 500, resObj: IresObj = {}): void => {
  res.status(status).json({
    data: {
      message: commonResponseMessage.SOMETHING_WENT_WRONG,
      error: true,
      data: {},
      token: '',
      ...resObj,
    },
  });
};
