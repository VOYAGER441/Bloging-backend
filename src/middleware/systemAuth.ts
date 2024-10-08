// authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
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

export { authMiddleware};
