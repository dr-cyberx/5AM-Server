import { Model } from 'mongoose';
import userModal from '../model/user';

const commonDBOperation = {
  findFromDB: async (modalName: typeof Model, argObj: any): Promise<any> => {
    console.log('arg obj -> ', { ...argObj });
    const user = await modalName.find({ ...argObj });
    return user;
  },

  createOne: async (modalName: typeof userModal, argObj: Object): Promise<any> => {
    const newItem = new modalName({ ...argObj });
    await newItem.save();
    return newItem;
  },

  updateOne: async (modelName: typeof Model, filterObj: any, argObj: any, allDocs: boolean): Promise<any> => {
    console.log('reached --> ', modelName, filterObj, argObj);
    if (allDocs) {
      console.log('reached --> ', modelName, filterObj, argObj);
      const res = await modelName.updateMany({ ...filterObj }, { ...argObj });
      return res;
    } else {
      console.log('reached --> ', modelName, filterObj, argObj);
      const res = await modelName.updateOne({ ...filterObj }, { ...argObj });
      return res;
    }
  },

  deleteOne: async (modelName: typeof userModal, argObj: Object, allDocs: boolean): Promise<any> => {
    if (allDocs) {
      return await modelName.deleteMany({ ...argObj });
    } else {
      return await modelName.deleteOne({ ...argObj });
    }
  },
};

export default commonDBOperation;
