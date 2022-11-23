import express, { Router } from 'express';
import authController from '../controller/authController';

const authRouter: Router = express.Router();

const { loginUser, signupUser } = authController;

authRouter.route('/login').post(loginUser);
authRouter.route('/signup').post(signupUser);

export default authRouter;
