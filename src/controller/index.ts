import userOperations from './authController';
import { globalErrorController } from './errController';
import { unKnownPathController } from './unKnownController';

const { sendOtp, signupUser, verifyOtp } = userOperations;

export { sendOtp, signupUser, verifyOtp, globalErrorController, unKnownPathController };
