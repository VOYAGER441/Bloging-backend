import Joi from "joi";


const getAllBlogPub=Joi.object({
    skip:Joi.number().required().min(0),
    limit:Joi.number().required().max(100)
});






export default{
    getAllBlogPub,
}
