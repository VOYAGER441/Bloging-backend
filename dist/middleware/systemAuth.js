"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const authMiddleware = (req, res, next) => {
    const apiKey = req.header('x-api-key');
    if (!apiKey) {
        res.status(403).json({ message: 'API key is required' });
        return; // Make sure we return to prevent further execution
    }
    if (apiKey !== process.env.SYSTEM_API_KEY) {
        res.status(401).json({ message: 'Invalid API key' });
        return; // Make sure we return to prevent further execution
    }
    // Call next() to proceed to the next middleware or route handler
    next();
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=systemAuth.js.map