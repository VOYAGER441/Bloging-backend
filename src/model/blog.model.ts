import { Schema } from "mongoose";
import collections from "../collection/collections";
import Models from "./model";

const content = new Schema(
    {
      heading: { type: String, required: true },
      subheading: { type: String, required: true },
      detailsContent: { type: String, required: true },
    },
    { _id: false } 
  );
  
// define the schema
const BlogSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: content, required: true },
    author: { type: String, default: "Mainak Banduri" },
    authorId: { type: Schema.Types.ObjectId, required: true },
    tags: { type: [String], required: true },
    slug: { type: String, required: true, unique: true },
    isPublished: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    isTop: { type: Boolean, default: false },
    popUpText: { type: String, required: true },
    category: { type: String, required: true },
    thumbnail: {
      type: String,
      default:
        "https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    createdBy: { type: Schema.Types.ObjectId, required: true },
    updatedBy: { type: Schema.Types.ObjectId, required: true },
    createAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

export default class BlogModel extends Models {
  constructor() {
    super(collections.COLLECTION_BLOG, BlogSchema);
  }
}