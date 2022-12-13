export const stringifyIt = (obj: any): string => JSON.stringify(obj);
export const parseIt = (obj: any): any => JSON.parse(obj);
export const getRandomNumber = (length: number): number => Math.floor(1000 + Math.random() * length);
