import { NextFunction, Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import userModal from '../model/user';
import { commonResponseMessage, getRandomNumber, sendCommonResponse, sendOtp, stringifyIt } from '../utils';
import commonDBOperation from '../db/commonOperations';
import AppError from '../utils/appError';

const authOperations = {
  sendOtp: async (req: Request, res: Response, next: NextFunction, callback: Function, sendResp: typeof sendCommonResponse): Promise<void> => {
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

  verifyOtp: async (req: Request, res: Response, next: NextFunction, callback: Function, sendResp: typeof sendCommonResponse): Promise<void> => {
    try {
      if (req.isUserExist.length > 0) {
        const { phoneNumber, otp } = req.body;
        const findUser = await callback(userModal, { phoneNumber, otp });
        if (findUser[0].email) {
          await commonDBOperation.updateOne(userModal, { id: req.isUserExist[0].id }, { isPhoneVerified: true }, false);
          const token: string = sign(stringifyIt(findUser[0]), req.tokenSecret);
          return sendResp(res, 200, {
            message: commonResponseMessage.LOGIN_SUCCESS,
            error: false,
            token,
            data: findUser[0],
          });
        }
        return sendResp(res, 400, {
          message: commonResponseMessage.SUCCESS,
        });
      }
      return sendResp(res, 400, {
        message: commonResponseMessage.USER_NOT_EXIST,
      });
    } catch (err) {
      throw new Error(err);
    }
  },

  SignUp: async (req: Request, res: Response, next: NextFunction, callback: Function, sendResp: typeof sendCommonResponse): Promise<void> => {
    try {
      if (req.isUserExist.length > 0) {
        return next(new AppError(commonResponseMessage.USER_ALREADY_EXIST, 400));
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
      return next(new AppError(commonResponseMessage.SIGNUP_FAILED, 400));
    } catch (err) {
      return next(new AppError(commonResponseMessage.SOMETHING_WENT_WRONG, 500));
    }
  },
};

const restaurantAuth = {
  restaurantAuthSignIn: async (req: Request, res: Response, next: NextFunction) => {},
  restaurantAuthSignUp: async (req: Request, res: Response, next: NextFunction) => {},
};
export { authOperations, restaurantAuth };
