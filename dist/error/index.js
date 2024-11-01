"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("./AppError"));
const appErrors_1 = require("./appErrors");
const ErrorHandler_1 = require("./ErrorHandler");
exports.default = {
    appErrors: appErrors_1.appErrors,
    errorHandler: ErrorHandler_1.errorHandler,
    AppError: AppError_1.default
};
//# sourceMappingURL=index.js.map