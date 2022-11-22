import express, { Express, NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import path from 'path';
import authRouter from './routes/authRouter';
import productRouter from './routes/productRouter';

const app: Express = express();
const BASE_URL: string = process.env.BASE_PATH;

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use((req: Request, res: Response, next: NextFunction) => {
  req.requestedTime = new Date().toISOString();
  next();
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(`${BASE_URL}/auth`, authRouter);
app.use(`${BASE_URL}/products`, productRouter);

app.get(`${BASE_URL}/ishealthy`, (req: Request, res: Response) => {
  res.status(200).json({ message: 'I am Healthy', status: 200 });
});

export default app;
