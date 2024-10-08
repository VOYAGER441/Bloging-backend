// import Interface from "../interface/index";
// import { title } from "process";
import * as Interface from "../interface";
// import Interface from "../interface";
// import error from "../error";
import model from "../model";
import utils from "../utils";
// import utils from "../utils";
import validation from "../validation";

async function getAllBlogPub(skip: number, limit: number) {
  // Here use joi library to validate value
  const { error } = validation.blogJoi.getAllBlogPub.validate({
    skip,
    limit,
  });

  // Throwing a validation error
  if (error) {
    throw new Error(error.details[0].message);
  }

  // call the mongo model and init it
  const blogModel = new model.BlogModel();
  blogModel.init();

  let result = await blogModel.getDBModel().find().skip(skip).limit(limit);
  return result;
}

// function for create blog
async function create(createReq: Interface.IBlogCreateRequest, userId: string) {
  const { error } = validation.blogJoi.createBlog.validate({
    createReq,
    userId,
  });

  if (error) {
    throw new Error(error.details[0].message);
  }

  // let slug = await utils.generateUniqueSlug(title);
  // console.log(slug);
  
  const data: Interface.IBlogCreateDB = {
    title: createReq.title,
    content: createReq.content,
    slug: createReq.title,
    author: createReq.author,
    authorId: utils.stringToObjectId(createReq.author),
    tags: createReq.tags,
    isPublished: false,
    isDeleted: false,
    createdBy: utils.stringToObjectId(userId),
    updatedBy: utils.stringToObjectId(userId),
  };
  console.log(data);
  

  let blog = new model.BlogModel();

  let result = await blog.create(data);

  return result;
}

export default {
  getAllBlogPub,
  create,
};
