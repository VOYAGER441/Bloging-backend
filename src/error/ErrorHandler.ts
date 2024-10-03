// ErrorHandler.js

const appErrors = require('./appErrors');

// import AppError from "./appError";
// Global Error Handler Middleware

const errorHandler = (err: { isOperational: any; statusCode: any; status: any; message: any; }, _req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { status: any; message: any; }): void; new(): any; }; }; }, _next: any) => {
  // If the error is one of our predefined operational errors, use its status code and message
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }

  // For non-operational errors or unexpected issues, log the error and respond with a generic message
  console.error('ERROR 💥', err);

  res.status(500).json({
    status: 'error',
    message: 'Something went very wrong!',
  });
};

module.exports = errorHandler;
