import express, { Router } from 'express';
import { sendOtp, signupUser, verifyOtp } from '../controller';
import userMiddleWare from '../middleware/user-middleware';

const authRouter: Router = express.Router();

authRouter.route('/sendOtp').post(userMiddleWare.isUserExist, sendOtp);
authRouter.route('/verifyOtp').post(userMiddleWare.isUserExist, verifyOtp);
authRouter.route('/signup').post(userMiddleWare.isUserExist, signupUser);

export default authRouter;
