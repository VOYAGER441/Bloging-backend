import Joi from "joi";

const getAllBlogPub = Joi.object({
  skip: Joi.number().required().min(0),
  limit: Joi.number().required().max(100),
});
const checkAdmin = Joi.object({
  userName: Joi.string().required(),
  password: Joi.string().required(),
});

const createBlog = Joi.object({
  createReq: Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    tags: Joi.required().required(),
    author:Joi.string().required()
  }),
  userId:Joi.string().required()
});

export default {
  getAllBlogPub,
  createBlog,
  checkAdmin
};
