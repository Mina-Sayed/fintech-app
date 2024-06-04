import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

// Custom error class
/**
 * Represents an HTTP error with a specific status code.
 */
class HttpError extends Error {
  public statusCode: number;

  /**
   * Creates a new instance of the HttpError class.
   * @param message - The error message.
   * @param statusCode - The HTTP status code associated with the error.
   */
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorHandler = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  logger.error(`[${req.method}] ${req.url} >> StatusCode:: ${statusCode}, Message:: ${message}`);

  res.status(statusCode).json({ message });
};

export default HttpError;
