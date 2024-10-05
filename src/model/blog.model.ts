import { Schema, model } from "mongoose";
import collections from "../collection/collections";
import Models from "./model";



// define the schema
const BlogSchema=new Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    authorId:{type:Schema.Types.ObjectId,required:true},
    tags:{type:[String],required:true},
    slug:{type:String,required:true},
    isPublished:{type:Boolean,default:false},
    isDeleted:{type:Boolean,default:false},
    createdBy:{type:Schema.Types.ObjectId,required:true},
    updatedBy:{type:Schema.Types.ObjectId,required:true},
    createAt:{type:Date,default:Date.now()},
    updatedAt:{type:Date,default:Date.now()}
},{versionKey:false})



// Create the actual Mongoose model
const BlogMongooseModel =  model(collections.COLLECTION_BLOG, BlogSchema);

export default class BlogModel extends Models{
    constructor(){
        super(BlogMongooseModel);
    }
}