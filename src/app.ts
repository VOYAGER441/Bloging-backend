// server.js
import express from 'express';

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 5000;

// Basic route using the router
// router.get('/', (_req, res) => {
//     res.send('Hello World!');
// });

// Use the router in the app
app.use('/', router);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
