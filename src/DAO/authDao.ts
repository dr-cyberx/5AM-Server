import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import userModal from '../model/user';
import { commonResponseMessage } from '../utils/commonRespMessage';
import { sendCommonResponse } from '../utils/commonResponse';

const authOperations = {
  Login: async (
    req: Request,
    res: Response,
    callback: Function,
    sendResp: typeof sendCommonResponse
  ) => {
    try {
      const user = await callback(userModal, { ...req.body });
      if (user.email) {
        const token: string = sign(
          JSON.stringify({ ...req.body }),
          `${process.env.JWT_SECRET}`
        );
        sendResp(res, 200, {
          message: commonResponseMessage.LOGIN_SUCCESS,
          error: false,
          token,
          user,
        });
      }
      sendResp(res, 400, {
        message: commonResponseMessage.LOGIN_FAILED,
        newUser: {},
      });
    } catch (err) {}
  },
  SignUp: async (
    req: Request,
    res: Response,
    callback: Function,
    sendResp: typeof sendCommonResponse
  ) => {
    try {
      const newUser = await callback(userModal, { ...req.body });
      if (newUser.email) {
        const token: string = sign(
          JSON.stringify({ ...req.body }),
          `${process.env.JWT_SECRET}`
        );
        sendResp(res, 200, {
          message: commonResponseMessage.SIGNUP_SUCCESS,
          error: false,
          token,
          newUser,
        });
      }
      sendResp(res, 400, {
        message: commonResponseMessage.SIGNUP_FAILED,
        newUser: {},
      });
    } catch (err) {
      sendResp(res, 500, {
        message: commonResponseMessage.SOMETHING_WENT_WRONG,
        newUser: {},
      });
    }
  },
};

export default authOperations;
