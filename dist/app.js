"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const cors = require('cors');
// import serverless from "serverless-http";
const app = (0, express_1.default)();
app.use(cors());
const router = express_1.default.Router();
const PORT = process.env.PORT || 5001;
// Basic route using the router
router.get('/', (_req, res) => {
    res.send('Hello World!');
});
// Use the router in the app
app.use('/Blog', routes_1.default.BlogRoute);
// app.use('/.netlify/functions/api/Blog', routes.BlogRoute);
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// app.use('./netlify/functions/api',router);
// module.exports.handler = serverless(app);
//# sourceMappingURL=app.js.map