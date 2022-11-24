import { NextFunction, Response, Request } from 'express';

const setTime = (req: Request, res: Response, next: NextFunction): void => {
  req.requestedTime = new Date().toISOString();
  next();
};

export default setTime;
