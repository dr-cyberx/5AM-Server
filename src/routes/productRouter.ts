import express, { Router, Request, Response } from 'express';
// import { isUserExist } from '../middleware';

const foodRouter: Router = express.Router();

foodRouter.route('/get_food/:foodId').get((req: Request, res: Response) => {
  res.json({
    message: `Food ID ${req.params.foodId} !`,
  });
});

export default foodRouter;
