import express, { Express, Request, Response } from 'express';
import morgan from 'morgan';
import path from 'path';
import setTime from './middleware/time';
// import userMiddleWare from './middleware/user-middleware';
import authRouter from './routes/authRouter';
import productRouter from './routes/productRouter';

const app: Express = express();
const BASE_URL: string = process.env.BASE_PATH;

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(setTime);

app.use(`${BASE_URL}/auth`, authRouter);
// app.use(userMiddleWare.isUserExist);
app.use(`${BASE_URL}/products`, productRouter);

app.get(`${BASE_URL}/ishealthy`, (req: Request, res: Response) => {
  res.status(200).json({ message: 'I am Healthy', status: 200 });
});

export default app;
