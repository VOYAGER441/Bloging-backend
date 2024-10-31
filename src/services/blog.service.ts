// import Interface from "../interface/index";
// import { title } from "process";
// import blogJoi from "src/validation/blogJoi";
import * as Interface from "../interface";
// import Interface from "../interface";
// import error from "../error";
import model from "../model";
import utils from "../utils";
// import blogJoi from "../validation/blogJoi";
// import utils from "../utils";
import validation from "../validation";


async function getAllBlogPub(skip: number, limit: number) {
  // Here use joi library to validate value
  const { error } = validation.blogJoi.getAllBlogPub.validate({
    skip,
    limit,
  });

  // // Throwing a validation error
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
  const { error } =  validation.blogJoi.createBlog.validate({
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
    authorId: utils.stringToObjectId(userId),
    tags: createReq.tags,
    isPublished: false,
    isDeleted: false,
    createdBy: utils.stringToObjectId(userId),
    updatedBy: utils.stringToObjectId(userId),
    isTop: createReq.isTop,
    popUpText: createReq.popUpText,
    category: createReq.category,
    thumbnail: createReq.thumbnail
  };
  console.log(data);

  let blog = new model.BlogModel();
  await blog.init();
  let result = await blog.getDBModel().create(data);

  return result;
}


// function for check admin
async function checkAdmin(userName: string, password: string) {
  // Here use joi library to validate value
  const { error } =  validation.blogJoi.checkAdmin.validate({
    userName,
    password,
  });

  // Throwing a validation error
  if (error) {
    throw new Error(error.details[0].message);
  }

  // console.log(utils.ADMIN_NAME,utils.SYSTEM_API_KEY);
  

  if(userName===utils.ADMIN_NAME&&password===utils.SYSTEM_API_KEY){
    return true;
  }
  else{
    return false;
  }
  
}

export default {
  getAllBlogPub,
  create,
  checkAdmin
};
