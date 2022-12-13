import express, { Router } from 'express';
import authController from '../controller/authController';
import userMiddleWare from '../middleware/user-middleware';

const authRouter: Router = express.Router();

const { sendOtp, signupUser, verifyOtp } = authController;

authRouter.route('/sendOtp').post(userMiddleWare.isUserExist, sendOtp);
authRouter.route('/verifyOtp').post(userMiddleWare.isUserExist, verifyOtp);
authRouter.route('/signup').post(userMiddleWare.isUserExist, signupUser);

export default authRouter;
