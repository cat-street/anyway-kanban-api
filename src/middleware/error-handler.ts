import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: any, _req: Request, res: Response, next: NextFunction) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500 ? 'Internal Server Error' : message,
  });
  next();
};

module.exports = { errorHandler };
