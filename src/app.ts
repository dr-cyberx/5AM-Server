import express, { Express, Request, Response } from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import { setTime, setTokenSecret } from './middleware';
import authRouter from './routes/authRouter';
import productRouter from './routes/productRouter';
import { unKnownPathController } from './controller/unKnownController';
import { globalErrorController } from './controller/errController';

const app: Express = express();
const BASE_URL: string = process.env.BASE_PATH;

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// --------------Middlewares------------------

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(setTime, setTokenSecret);

// -------------Health Check--------------------

app.get(`${BASE_URL}/ishealthy`, (req: Request, res: Response) => {
  res.status(200).json({ message: 'I am Healthy', status: 200 });
});

// ----------------Routes-----------------------

app.use(`${BASE_URL}/auth`, authRouter);
app.use(`${BASE_URL}/products`, productRouter);

app.all('*', unKnownPathController);

app.use(globalErrorController);

export default app;
