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
    content: Joi.object({
      heading: Joi.string().required(),
      subheading: Joi.string().required(),
      detailsContent: Joi.string().required(),
    }).required(),
    tags: Joi.array().items(Joi.string()).required(),
    author: Joi.string().required(),
    isTop: Joi.boolean().required(),
    popUpText: Joi.string().required(),
    category: Joi.string().required(),
    thumbnail: Joi.string().required(),
  }),
  userId: Joi.string().required(),
});

export default {
  getAllBlogPub,
  createBlog,
  checkAdmin,
};
