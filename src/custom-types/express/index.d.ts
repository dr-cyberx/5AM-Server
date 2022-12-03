declare namespace Express {
  interface Request {
    requestedTime: string;
    tokenSecret: string;
  }
}
