import express, { Router } from 'express';
import { restaurantSignIn, restaurantSignUp, sendOtp, signupUser, verifyOtp } from '../controller';
import { isUserExist, deleteUnverifiedUser, isRestaurantExist } from '../middleware';

const authRouter: Router = express.Router();

authRouter.route('/sendOtp').post(isUserExist, sendOtp);
authRouter.route('/verifyOtp').post(isUserExist, verifyOtp);
authRouter.route('/signup').post(deleteUnverifiedUser, isUserExist, signupUser);

// restaurant signUp and signIn
authRouter.route('/Restaurant_signup').post(restaurantSignUp);
authRouter.route('/Restaurant_signin').post(isRestaurantExist, restaurantSignIn);

export default authRouter;
