import { Request, Response } from 'express';
import userOperations from './authController';
import { globalErrorController } from './errController';
import { unKnownPathController } from './unKnownController';

const healthCheckRouter = (req: Request, res: Response): void => {
  res.status(200).json({ message: 'I am Healthy', status: 200 });
};

const { sendOtp, signupUser, verifyOtp } = userOperations;

export { sendOtp, signupUser, verifyOtp, globalErrorController, unKnownPathController, healthCheckRouter };
