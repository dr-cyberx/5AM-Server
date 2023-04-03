declare namespace Express {
  interface Request {
    requestedTime: string;
    tokenSecret: string;
    isUserExist: Array<{ [key: string]: string | number }>;
  }
}
