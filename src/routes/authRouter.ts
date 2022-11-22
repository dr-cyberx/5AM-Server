import express, { Router } from 'express';
import authController from '../controller/authController';

const authRouter: Router = express.Router();

const { loginUser } = authController;

authRouter.route('/login').post(loginUser);

export default authRouter;
