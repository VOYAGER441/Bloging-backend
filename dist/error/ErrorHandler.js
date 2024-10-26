"use strict";
// ErrorHandler.js
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
// Custom Error Type
// interface AppError {
//   isOperational: boolean;
//   statusCode: number;
//   status: string;
//   message: string;
// }
// Error Handler Function
const errorHandler = (err, res) => {
    if (err.isOperational) {
        // Operational error, send defined status and message
        return res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
    }
    // Non-operational errors, log it and send a generic message
    console.error('ERROR 💥:', err);
    res.status(500).json({
        status: 'error',
        message: 'Something went very wrong!',
    });
};
exports.errorHandler = errorHandler;
module.exports = exports.errorHandler;
//# sourceMappingURL=ErrorHandler.js.map