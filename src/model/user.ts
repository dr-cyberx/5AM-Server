import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'User name is required!'],
    },
    profileImage: {
      type: String,
      required: [true, 'Profile image is required'],
    },
    countryCode: {
      type: String,
      required: [true, 'Country code is requried'],
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    isPhoneVerified: {
      type: Boolean,
      requried: true,
      default: false,
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
