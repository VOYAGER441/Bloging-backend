import { Types } from "mongoose";
// db
// ###########################

export interface IBlog {
  title: string;
  content: string;
  authorId: Types.ObjectId;
  tags: string[];
  isPublished: boolean;
  isDeleted: boolean;
  createdBy: Types.ObjectId;
  updatedBy: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface IBlogCreateDB {
  title: string;
  content: string;
  authorId: Types.ObjectId;
  tags: string[];
  isPublished: boolean;
  isDeleted: boolean;
  createdBy: Types.ObjectId;
  updatedBy: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface IBlogUpdateDB {
  title: string;
  content: string;
  authorId: Types.ObjectId;
  tags: string[];
  updatedBy: Types.ObjectId;
  updatedAt: Date;
}

// Response
// #####################
export interface IBlogResponse {
  _id: string;
  title: string;
  content: string;
  authorId: string;
  tags: string[];
  isPublished: boolean;
  isDeleted: boolean;
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
}
