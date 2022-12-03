import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import userModal from '../model/user';
import { commonResponseMessage } from '../utils/commonRespMessage';
import { sendCommonResponse } from '../utils/commonResponse';
import { stringifyIt } from '../utils/jsonHelperr';

const authOperations = {
  Login: async (req: Request, res: Response, callback: Function, sendResp: typeof sendCommonResponse): Promise<void> => {
    try {
      const user = await callback(userModal, { ...req.body });
      if (user.email) {
        const token: string = sign(stringifyIt({ ...req.body }), req.tokenSecret);
        return sendResp(res, 200, {
          message: commonResponseMessage.LOGIN_SUCCESS,
          error: false,
          token,
          data: user,
        });
      }
      return sendResp(res, 400, {
        message: commonResponseMessage.LOGIN_FAILED,
      });
    } catch (err) {
      throw new Error(err);
    }
  },

  SignUp: async (req: Request, res: Response, callback: Function, sendResp: typeof sendCommonResponse): Promise<void> => {
    try {
      const newUser = await callback(userModal, { ...req.body });
      if (newUser.email) {
        const token: string = sign(stringifyIt({ ...req.body }), req.tokenSecret);
        return sendResp(res, 200, {
          message: commonResponseMessage.SIGNUP_SUCCESS,
          error: false,
          token,
          data: newUser,
        });
      }
      return sendResp(res, 400, {
        message: commonResponseMessage.SIGNUP_FAILED,
      });
    } catch (err) {
      throw new Error(err);
    }
  },
};

export default authOperations;
