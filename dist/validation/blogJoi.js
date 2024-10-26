"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const getAllBlogPub = joi_1.default.object({
    skip: joi_1.default.number().required().min(0),
    limit: joi_1.default.number().required().max(100),
});
const checkAdmin = joi_1.default.object({
    userName: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
});
const createBlog = joi_1.default.object({
    createReq: joi_1.default.object({
        title: joi_1.default.string().required(),
        content: joi_1.default.string().required(),
        tags: joi_1.default.required().required(),
        author: joi_1.default.string().required()
    }),
    userId: joi_1.default.string().required()
});
exports.default = {
    getAllBlogPub,
    createBlog,
    checkAdmin
};
//# sourceMappingURL=blogJoi.js.map