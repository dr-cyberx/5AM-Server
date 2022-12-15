import { catchAsync } from './catchAsync';
import { commonResponseMessage } from './commonRespMessage';
import { sendCommonResponse } from './commonResponse';
import { sendOtp } from './twillio-methods';

const stringifyIt = (obj: any): string => JSON.stringify(obj);
const parseIt = (obj: any): any => JSON.parse(obj);
const getRandomNumber = (length: number): number => Math.floor(1000 + Math.random() * length);

export { stringifyIt, parseIt, getRandomNumber, catchAsync, commonResponseMessage, sendCommonResponse, sendOtp };
