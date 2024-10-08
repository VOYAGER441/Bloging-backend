import { Schema } from "mongoose";
import collections from "../collection/collections";
import Models from "./model";



// define the schema
const BlogSchema=new Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    author:{type:String,default:"Mainak Banduri"},
    authorId:{type:Schema.Types.ObjectId,required:true},
    tags:{type:[String],required:true},
    slug:{type:String,required:true,unique:true},
    isPublished:{type:Boolean,default:false},
    isDeleted:{type:Boolean,default:false},
    createdBy:{type:Schema.Types.ObjectId,required:true},
    updatedBy:{type:Schema.Types.ObjectId,required:true},
    createAt:{type:Date,default:Date.now()},
    updatedAt:{type:Date,default:Date.now()}
},{versionKey:false})




export default class BlogModel extends Models{
   
    constructor(){
        super(collections.COLLECTION_BLOG,BlogSchema);
    }
}