import express, { Router } from 'express';
import { sendOtp, signupUser, verifyOtp } from '../controller';
import { isUserExist, deleteUnverifiedUser } from '../middleware';

const authRouter: Router = express.Router();

authRouter.route('/sendOtp').post(isUserExist, sendOtp);
authRouter.route('/verifyOtp').post(isUserExist, verifyOtp);
authRouter.route('/signup').post(deleteUnverifiedUser, isUserExist, signupUser);

export default authRouter;
