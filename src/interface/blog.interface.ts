import { Types } from "mongoose";
// db
// ###########################

export default interface IBlogDB {
  title: string;
  content: string;
  authorId: Types.ObjectId;
  tags: string[];
  slug: string;
  isPublished: boolean;
  isDeleted: boolean;
  createdBy: Types.ObjectId;
  updatedBy: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export default interface IBlogCreateDB {
  title: string;
  content: string;
  slug: string;
  authorId: Types.ObjectId;
  tags: string[];
  isPublished: boolean;
  isDeleted: boolean;
  createdBy: Types.ObjectId;
  updatedBy: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export default interface IBlogUpdateDB {
  title: string;
  content: string;
  slug: string;
  authorId: Types.ObjectId;
  tags: string[];
  updatedBy: Types.ObjectId;
  updatedAt: Date;
}

// Response
// #####################
export  interface IBlogResponse {
  _id: string;
  title: string;
  content: string;
  slug: string;
  authorId: string;
  tags: string[];
  isPublished: boolean;
  isDeleted: boolean;
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
}

// Request
//####################

export default interface IBlogCreateRequest {
  title: string;
  content: string;
  tags: string[];
}
export default interface IBlogUpdateRequest{
  title: string;
  content: string;
  tags: string[];
  slug:string;
}

export default interface IBlogDeleteRequest{
  _id:string;
}