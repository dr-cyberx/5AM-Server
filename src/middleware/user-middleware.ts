import { NextFunction, Request, Response } from 'express';
// import commonDBOperation from '../db/commonOperations';
// import userModal from '../model/user';

// const { findFromDB } = commonDBOperation;

const userMiddleWare = {
  isUserExist: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      //   const isUserExist = await findFromDB(userModal, { ...argObj }, false);
      //   console.log(isUserExist);
    } catch (err) {
      //   throw new Error('User already exist');
    }
  },

  customAuthValidator: (body: any) => {
    const keys: string[] = Object.keys(body);
    for (let index = 0; index < keys.length; index++) {
      switch (keys[index]) {
        case 'name':
          break;

        case 'countryCode':
          break;

        case 'phoneNumber':
          break;

        case 'email':
          break;

        case 'address':
          break;

        default:
          break;
      }
    }
  },
};

export default userMiddleWare;
