import { NextFunction, Request, Response } from 'express';
import authOperations from '../DAO/authDao';
import commonDBOperation from '../db/commonOperations';
import { commonResponseMessage } from '../utils/commonRespMessage';
import { sendCommonResponse } from '../utils/commonResponse';

const { createOne, findFromDB } = commonDBOperation;
const { SignUp, Login } = authOperations;

const userOperations = {
  loginUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Login(req, res, findFromDB, sendCommonResponse);
    } catch (err) {
      sendCommonResponse(res, 500, {
        message: commonResponseMessage.SOMETHING_WENT_WRONG,
        user: {},
      });
    }
  },
  signupUser: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      await SignUp(req, res, createOne, sendCommonResponse);
    } catch (err) {
      sendCommonResponse(res, 500, {
        message: commonResponseMessage.SOMETHING_WENT_WRONG,
        user: {},
      });
    }
  },
};

export default userOperations;
