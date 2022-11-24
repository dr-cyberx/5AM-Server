import userModal from '../model/user';

const commonDBOperation = {
  findFromDB: async (
    modalName: typeof userModal,
    argObj: Object,
    allDocs: boolean
  ): Promise<any> => {
    if (allDocs) {
      return await modalName.find({ ...argObj });
    } else {
      return await modalName.findOne({ ...argObj });
    }
  },

  createOne: async (
    modalName: typeof userModal,
    argObj: Object
  ): Promise<any> => {
    const newItem = new modalName({ ...argObj });
    await newItem.save();
    return newItem;
  },

  updateOne: async (
    modelName: typeof userModal,
    filterObj: Object,
    argObj: Object,
    allDocs: boolean
  ): Promise<any> => {
    if (allDocs) {
      return await modelName.updateMany({ ...filterObj }, { ...argObj });
    } else {
      return await modelName.updateOne({ ...filterObj }, { ...argObj });
    }
  },

  deleteOne: async (
    modelName: typeof userModal,
    argObj: Object,
    allDocs: boolean
  ): Promise<any> => {
    if (allDocs) {
      return await modelName.deleteMany({ ...argObj });
    } else {
      return await modelName.deleteOne({ ...argObj });
    }
  },
};

export default commonDBOperation;
