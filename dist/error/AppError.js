"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode || 500;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true; // Marks this as an operational error
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = AppError;
module.exports = AppError;
//# sourceMappingURL=AppError.js.map