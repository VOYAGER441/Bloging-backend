import express from 'express';
import routes from './routes';
const cors = require('cors');

const app = express();
app.use(cors())
// const router = express.Router();
const PORT = process.env.PORT || 5001;

// Basic route using the router
app.get('/', (_req: any, res: { send: (arg0: string) => void; }) => {
    res.send('This is the Bit By Bits Backend server ');
});

// Use the router in the app
app.use('/Blog',routes.BlogRoute );

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});