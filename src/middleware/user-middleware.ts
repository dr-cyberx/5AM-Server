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
      const phoneNumberAndEmail: { email?: string; phoneNumber?: string } = {};
      if (req.body?.email) {
        phoneNumberAndEmail.email = req.body.email;
      }
      if (req.body?.phoneNumber) {
        phoneNumberAndEmail.phoneNumber = req.body.phoneNumber;
      }
      const isUserExist = await commonDBOperation.findFromDB(userModal, { ...phoneNumberAndEmail });
      req.isUserExist = isUserExist;
      next();
    } catch (err) {
      throw new Error(commonResponseMessage.SOMETHING_WENT_WRONG);
    }
  },

  deleteUnverifiedUser: (req: Request, res: Response, next: NextFunction): void => {
    try {
      commonDBOperation
        .deleteRecord(userModal, { isPhoneVerified: false }, true)
        .then(() => {
          next();
        })
        .catch(() => {
          throw new Error(commonResponseMessage.UNVERIFED_USER_DELETE_FAIL);
        });
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
