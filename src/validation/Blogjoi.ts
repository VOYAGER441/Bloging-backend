import Joi from "joi";

const getAllBlogPub = Joi.object({
  skip: Joi.number().required().min(0),
  limit: Joi.number().required().max(100),
});

const createBlog = Joi.object({
  createReq: Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    tags: Joi.required().required(),
  }),
});

export default {
  getAllBlogPub,
  createBlog,
};
