import express, { Express, NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import authRouter from './routes/authRouter';
import productRouter from './routes/productRouter';

const app: Express = express();
const base_url: string = process.env.BASE_PATH;

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use((req: Request, res: Response, next: NextFunction) => {
  req.requestedTime = new Date().toISOString();
  next();
});

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use(`${base_url}/auth`, authRouter);
app.use(`${base_url}/products`, productRouter);

app.get(`${base_url}/ishealthy`, (req: Request, res: Response) => {
  res.status(200).json({ message: 'I am Healthy', status: 200 });
});

export default app;
