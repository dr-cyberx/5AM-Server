import { NextFunction, Request, Response } from 'express';
import { sendCommonResponse } from '../utils/commonResponse';

const authController = {
  loginUser: (req: Request, res: Response, next: NextFunction) => {
    console.log('function called ');
    return sendCommonResponse(res, 200, { message: 'Login path' });
  },
  signupUser: (req: Request, res: Response, next: NextFunction) => {
    console.log('function called ');
    return sendCommonResponse(res, 200, { message: 'Sign Up path' });
  },
};

export default authController;
