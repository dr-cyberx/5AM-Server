import { NextFunction, Request, Response } from 'express';
import authOperations from '../DAO/authDao';
import commonDBOperation from '../db/commonOperations';
import { sendCommonResponse } from '../utils/commonResponse';

const { createOne, findFromDB } = commonDBOperation;
const { SignUp, sendOtp, verifyOtp } = authOperations;

const userOperations = {
  sendOtp: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await sendOtp(req, res, findFromDB, sendCommonResponse);
    } catch (err) {
      sendCommonResponse(res, 500);
    }
  },
  verifyOtp: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await verifyOtp(req, res, findFromDB, sendCommonResponse);
    } catch (err) {
      sendCommonResponse(res, 500);
    }
  },
  signupUser: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await SignUp(req, res, createOne, sendCommonResponse);
    } catch (err) {
      sendCommonResponse(res, 500);
    }
  },
};

export default userOperations;
