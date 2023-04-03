import express, { Router, Request, Response } from 'express';
// import { isUserExist } from '../middleware';

const foodRouter: Router = express.Router();

foodRouter.route('/get_food/:foodId').get((req: Request, res: Response) => {
  res.json({
    message: `Lawda lo na mera ${req.params.foodId} haah !`,
  });
});

export default foodRouter;
