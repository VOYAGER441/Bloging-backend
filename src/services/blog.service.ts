// import Interface from "../interface/index";
// import { title } from "process";
import * as Interface from "../interface";
// import Interface from "../interface";
// import error from "../error";
import model from "../model";
import utils from "../utils";
// import blogJoi from "../validation/blogJoi";
// import utils from "../utils";
// import validation from "../validation";


async function getAllBlogPub(skip: number, limit: number) {
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
  const blogModel = new model.BlogModel();
   blogModel.init();

  let result = await blogModel.getDBModel().find({isDeleted:false}).skip(skip).limit(limit);
  return result;
}

// function for create blog
async function create(createReq: Interface.IBlogCreateRequest) {
  // const { error } = blogJoi.createBlog.validate({
  //   createReq,
  //   userId,
  // });

  // if (error) {
  //   throw new Error(error.details[0].message);
  // }

  let slug = await utils.generateUniqueSlug(createReq.title);
  console.log(slug);

  const data: Interface.IBlogCreateDB = {
    title: createReq.title,
    content: createReq.content,
    slug: slug,
    author: createReq.author,
    // authorId: utils.stringToObjectId(userId),
    tags: createReq.tags,
    isPublished: false,
    isDeleted: false,
    // createdBy: utils.stringToObjectId(userId),
    // updatedBy: utils.stringToObjectId(userId),
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
  // const { error } = blogJoi.checkAdmin.validate({
  //   userName,
  //   password,
  // });

  // // Throwing a validation error
  // if (error) {
  //   throw new Error(error.details[0].message);
  // }

  // console.log(utils.ADMIN_NAME,utils.SYSTEM_API_KEY);
  

  if(userName===utils.ADMIN_NAME&&password===utils.SYSTEM_API_KEY){
    return true;
  }
  else{
    return false;
  }
  
}

// function for get only top blog
async function getTopBlog(skip: number, limit: number) {
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
  const blogModel = new model.BlogModel();
   blogModel.init();
  let query={isTop:true,isDeleted:false}
  let result = await blogModel.getDBModel().find(query).skip(skip).limit(limit);
  return result;
};


// function for get blog data by slug;
async function getDataBySlug(slug:string) {
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
  const blogModel = new model.BlogModel();
   blogModel.init();
  let query={slug:slug,isDeleted:false}
  let result = await blogModel.getDBModel().findOne(query);
  return result;
}



export default {
  getAllBlogPub,
  create,
  checkAdmin,
  getTopBlog,
  getDataBySlug,
};