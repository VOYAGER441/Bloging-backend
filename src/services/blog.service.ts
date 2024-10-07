// import Interface from "../interface/index";
import * as Interface from "../interface";
// import Interface from "../interface";
// import error from "../error";
import model from "../model";
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
async function create(createReq: Interface.IBlogCreateRequest) {
  const { error } = validation.blogJoi.getAllBlogPub.validate({
    createReq,
  });

  // const data:Interface.IBlogCreateDB(


  // )

  // Throwing a validation error
  if (error) {
    throw new Error(error.details[0].message);
  }
}

export default {
  getAllBlogPub,
  create,
};
