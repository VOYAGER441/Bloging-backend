import express from 'express';
import routes from './routes';
const cors = require('cors');
// import serverless from "serverless-http";
const app = express();
app.use(cors())
const router = express.Router();
const PORT = process.env.PORT || 5001;

// Basic route using the router
router.get('/', (_req, res) => {
    res.send('Hello World!');
});

// Use the router in the app
app.use('/Blog',routes.BlogRoute );
// app.use('/.netlify/functions/api/Blog', routes.BlogRoute);


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// app.use('./netlify/functions/api',router);
// module.exports.handler = serverless(app);
