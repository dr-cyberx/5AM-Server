import mongoose from 'mongoose';

export const connectDB = async (uri: string): Promise<any> => {
  return await new Promise((resolve, reject) => {
    mongoose
      .connect(uri)
      .then(() => {
        resolve('Connected to DB Successfully!');
      })
      .catch(() => {
        reject(new Error('Failed to Connect to DB!'));
      });
  });
};
