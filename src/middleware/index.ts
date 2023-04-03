import { NextFunction, Response, Request } from 'express';
import { userMiddleWare, restaurantMiddleWare } from './user-middleware';

const { customAuthValidator, isUserExist, deleteUnverifiedUser } = userMiddleWare;
const { isRestaurantExist } = restaurantMiddleWare;

const setTime = (req: Request, res: Response, next: NextFunction): void => {
  req.requestedTime = new Date().toISOString();
  next();
};

const setTokenSecret = (req: Request, res: Response, next: NextFunction): void => {
  req.tokenSecret = `${process.env.JWT_SECRET}`;
  next();
};

export { setTime, setTokenSecret, customAuthValidator, isUserExist, deleteUnverifiedUser, isRestaurantExist };
