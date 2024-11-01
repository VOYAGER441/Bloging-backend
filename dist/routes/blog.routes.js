"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoute = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// import error from "../error";
const ErrorHandler_1 = require("../error/ErrorHandler");
const services_1 = __importDefault(require("../services"));
const utils_1 = __importDefault(require("../utils"));
// import middleware from "../middleware";
const route = express_1.default.Router();
exports.BlogRoute = route;
route.use(body_parser_1.default.json());
// public routes
// route for get all blogs
route.get("/getAll", async (req, res) => {
    try {
        const skip = Number(req.query.skip);
        const limit = Number(req.query.limit);
        console.log(skip, limit);
        const result = await services_1.default.blogService.getAllBlogPub(skip, limit);
        res.status(utils_1.default.HttpStatusCodes.OK).json(result);
    }
    catch (error) {
        (0, ErrorHandler_1.errorHandler)(error, res);
    }
});
// route for create blog
route.post("/create", /* middleware.authMiddleware ,*/ async (req, res) => {
    try {
        console.log('test1');
        let userId = req.headers['user-id'];
        const data = req.body;
        userId = utils_1.default.toString(userId);
        console.log(data);
        console.log(userId);
        await services_1.default.blogService.create(data, userId);
        res.status(utils_1.default.HttpStatusCodes.CREATED).json({ message: "Blog Create!!" });
    }
    catch (error) {
        // errorHandler(error, res);
        console.log(error);
    }
});
route.get("/check", async (req, res) => {
    try {
        let userName = String(req.query.userName);
        const password = String(req.query.password);
        // const limit: number = Number(req.query.limit);
        // console.log(skip, limit);
        userName = userName.toLowerCase();
        const result = await services_1.default.blogService.checkAdmin(userName, password);
        res.status(utils_1.default.HttpStatusCodes.OK).json(result);
    }
    catch (error) {
        console.error(error);
    }
});
//# sourceMappingURL=blog.routes.js.map