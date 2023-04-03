import { authOperations, restaurantAuth } from './authDao';

const { SignUp, sendOtp, verifyOtp } = authOperations;
const { restaurantAuthSignIn, restaurantAuthSignUp } = restaurantAuth;

export { SignUp, sendOtp, verifyOtp, restaurantAuthSignIn, restaurantAuthSignUp };
