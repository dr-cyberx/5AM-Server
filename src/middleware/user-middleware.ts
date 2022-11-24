import { NextFunction, Request, Response } from 'express';
// import commonDBOperation from '../db/commonOperations';
// import userModal from '../model/user';

// const { findFromDB } = commonDBOperation;

const userMiddleWare = {
  isUserExist: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      //   const isUserExist = await findFromDB(userModal, { ...argObj }, false);
      //   console.log(isUserExist);
    } catch (err) {
      //   throw new Error('User already exist');
    }
  },
};

export default userMiddleWare;
