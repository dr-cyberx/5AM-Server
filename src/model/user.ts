import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    countryCode: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    address: [
      {
        type: String,
        required: false,
      },
    ],
    otp: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const userModal = model('User', userSchema);

export default userModal;
