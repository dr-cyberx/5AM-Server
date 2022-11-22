import { NextFunction, Request, Response } from 'express';

const authController = {
  loginUser: (req: Request, res: Response, next: NextFunction) => {
    res
      .status(200)
      .json({ name: req.body.name, message: 'fetched successfully!' });
  },
};

export default authController;
