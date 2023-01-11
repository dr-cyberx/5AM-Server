import { NextFunction, Request, Response } from 'express';
import { sendOtp, verifyOtp, SignUp } from '../DAO';
import commonDBOperation from '../db/commonOperations';
// import userModal from '../model/user';
import { catchAsync, sendCommonResponse } from '../utils';

const { createOne, findFromDB } = commonDBOperation;

const userOperations = {
  sendOtp: catchAsync(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    await sendOtp(req, res, next, findFromDB, sendCommonResponse);
  }),
  verifyOtp: catchAsync(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    await verifyOtp(req, res, next, findFromDB, sendCommonResponse);
  }),
  signupUser: catchAsync(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    await SignUp(req, res, next, createOne, sendCommonResponse);
  }),
};

export default userOperations;
