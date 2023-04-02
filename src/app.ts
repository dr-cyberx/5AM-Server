import express, { Express } from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import { setTime, setTokenSecret } from './middleware';
import { unKnownPathController } from './controller/unKnownController';
import { globalErrorController } from './controller/errController';
import { authRouter, productRouter } from './routes';
import { healthCheckRouter } from './controller';

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

app.get(`${BASE_URL}/ishealthy`, healthCheckRouter);

// ----------------Routes-----------------------

app.use(`${BASE_URL}/auth`, authRouter);
app.use(`${BASE_URL}/food`, productRouter);

app.all('*', unKnownPathController);

app.use(globalErrorController);

export default app;
