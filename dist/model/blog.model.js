"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const collections_1 = __importDefault(require("../collection/collections"));
const model_1 = __importDefault(require("./model"));
const content = new mongoose_1.Schema({
    heading: { type: String, required: true },
    subheading: { type: String, required: true },
    detailsContent: { type: String, required: true },
}, { _id: false });
// define the schema
const BlogSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    content: { type: content, required: true },
    author: { type: String, default: "Mainak Banduri" },
    authorId: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    tags: { type: [String], required: true },
    slug: { type: String, required: true, unique: true },
    isPublished: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    isTop: { type: Boolean, default: false },
    popUpText: { type: String, required: true },
    category: { type: String, required: true },
    thumbnail: {
        type: String,
        default: "https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    createdBy: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    updatedBy: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    createAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
}, { versionKey: false });
class BlogModel extends model_1.default {
    constructor() {
        super(collections_1.default.COLLECTION_BLOG, BlogSchema);
    }
}
exports.default = BlogModel;
//# sourceMappingURL=blog.model.js.map