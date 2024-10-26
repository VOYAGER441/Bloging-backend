"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import Interface from "../interface";
// import error from "../error";
const model_1 = __importDefault(require("../model"));
const utils_1 = __importDefault(require("../utils"));
// import blogJoi from "../validation/blogJoi";
// import utils from "../utils";
// import validation from "../validation";
async function getAllBlogPub(skip, limit) {
    // Here use joi library to validate value
    // const { error } = blogJoi.getAllBlogPub.validate({
    //   skip,
    //   limit,
    // });
    // // Throwing a validation error
    // if (error) {
    //   throw new Error(error.details[0].message);
    // }
    // call the mongo model and init it
    const blogModel = new model_1.default.BlogModel();
    blogModel.init();
    let result = await blogModel.getDBModel().find().skip(skip).limit(limit);
    return result;
}
// function for create blog
async function create(createReq, userId) {
    // const { error } = blogJoi.createBlog.validate({
    //   createReq,
    //   userId,
    // });
    // if (error) {
    //   throw new Error(error.details[0].message);
    // }
    // let slug = await utils.generateUniqueSlug(title);
    // console.log(slug);
    const data = {
        title: createReq.title,
        content: createReq.content,
        slug: createReq.title,
        author: createReq.author,
        authorId: utils_1.default.stringToObjectId(userId),
        tags: createReq.tags,
        isPublished: false,
        isDeleted: false,
        createdBy: utils_1.default.stringToObjectId(userId),
        updatedBy: utils_1.default.stringToObjectId(userId),
        isTop: createReq.isTop,
        popUpText: createReq.popUpText,
        category: createReq.category,
        thumbnail: createReq.thumbnail
    };
    console.log(data);
    let blog = new model_1.default.BlogModel();
    await blog.init();
    let result = await blog.getDBModel().create(data);
    return result;
}
// function for check admin
async function checkAdmin(userName, password) {
    // Here use joi library to validate value
    // const { error } = blogJoi.checkAdmin.validate({
    //   userName,
    //   password,
    // });
    // // Throwing a validation error
    // if (error) {
    //   throw new Error(error.details[0].message);
    // }
    // console.log(utils.ADMIN_NAME,utils.SYSTEM_API_KEY);
    if (userName === utils_1.default.ADMIN_NAME && password === utils_1.default.SYSTEM_API_KEY) {
        return true;
    }
    else {
        return false;
    }
}
exports.default = {
    getAllBlogPub,
    create,
    checkAdmin
};
//# sourceMappingURL=blog.service.js.map