import { NextFunction, Request, Response } from 'express';
import AppError from '../utils/appError';

export const unKnownPathController = (req: Request, res: Response, next: NextFunction): void => next(new AppError(`Can't find ${req.originalUrl} on the server!`, 404));
