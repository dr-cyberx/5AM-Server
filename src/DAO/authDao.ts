import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import userModal from '../model/user';
import { commonResponseMessage } from '../utils/commonRespMessage';
import { sendCommonResponse } from '../utils/commonResponse';
import { getRandomNumber, stringifyIt } from '../utils';
import sendOtp from '../utils/twillio-methods';
import commonDBOperation from '../db/commonOperations';

const authOperations = {
  sendOtp: async (req: Request, res: Response, callback: Function, sendResp: typeof sendCommonResponse): Promise<void> => {
    try {
      if (req.isUserExist.length > 0) {
        const otp = getRandomNumber(9999);
        await sendOtp(req.body.phoneNumber, otp);
        await commonDBOperation.updateOne(userModal, { id: req.isUserExist[0].id }, { otp }, false);
        return sendResp(res, 200, {
          message: commonResponseMessage.OTP_SENT,
          error: false,
          data: {
            otp,
          },
        });
      }
      return sendResp(res, 400, {
        message: commonResponseMessage.USER_NOT_EXIST,
      });
    } catch (err) {
      throw new Error(err);
    }
  },

  verifyOtp: async (req: Request, res: Response, callback: Function, sendResp: typeof sendCommonResponse): Promise<void> => {
    try {
      if (req.isUserExist.length > 0) {
        const { phoneNumber, otp } = req.body;
        const findUser = await callback(userModal, { phoneNumber, otp });
        if (findUser[0].email) {
          const token: string = sign(stringifyIt(findUser[0]), req.tokenSecret);
          return sendResp(res, 200, {
            message: commonResponseMessage.LOGIN_SUCCESS,
            error: false,
            token,
            data: findUser[0],
          });
        }
        return sendResp(res, 400, {
          message: commonResponseMessage.LOGIN_FAILED,
        });
      }
      return sendResp(res, 400, {
        message: commonResponseMessage.USER_NOT_EXIST,
      });
    } catch (err) {
      throw new Error(err);
    }
  },

  SignUp: async (req: Request, res: Response, callback: Function, sendResp: typeof sendCommonResponse): Promise<void> => {
    try {
      if (req.isUserExist.length > 0) {
        return sendResp(res, 400, {
          message: commonResponseMessage.USER_ALREADY_EXIST,
        });
      }
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
      throw new Error(commonResponseMessage.SOMETHING_WENT_WRONG);
    }
  },
};

export default authOperations;
