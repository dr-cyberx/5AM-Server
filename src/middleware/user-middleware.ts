import { NextFunction, Request, Response } from 'express';
import userModal from '../model/user';
import commonDBOperation from '../db/commonOperations';
import { commonResponseMessage } from '../utils/commonRespMessage';
// import commonDBOperation from '../db/commonOperations';
// import userModal from '../model/user';

// const { findFromDB } = commonDBOperation;

const userMiddleWare = {
  isUserExist: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const isUserExist = await commonDBOperation.findFromDB(userModal, { ...req.body });
      req.isUserExist = isUserExist;
      next();
    } catch (err) {
      throw new Error(commonResponseMessage.SOMETHING_WENT_WRONG);
    }
  },

  customAuthValidator: (body: any) => {
    const credKeys: string[] = Object.keys(body);
    const invalidKeys: string[] = [];
    for (let index = 0; index < credKeys.length; index++) {
      if (credKeys[index] === null || credKeys[index] === '' || credKeys[index] === undefined) {
        invalidKeys.push(credKeys[index]);
      }
    }
  },
};

export default userMiddleWare;
