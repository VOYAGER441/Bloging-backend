// import { Types } from "mongoose";
// db
// ###########################

export  interface IBlogDB {
  title: string;
  content: string;
  author:string;
  // authorId: Types.ObjectId;
  tags: string[];
  links: string[];
  slug: string;
  isPublished: boolean;
  isDeleted: boolean;
  isTop:boolean;
  popUpText:string;
  category:string;
  thumbnail:string;
  // createdBy: Types.ObjectId;
  // updatedBy: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export  interface IBlogCreateDB {
  title: string;
  content: {
    heading:string,
    subheading:string,
    detailsContent:string
  };
  slug: string;
  author:string;
  // authorId: Types.ObjectId;
  tags: string[];
  links: string[];
  isPublished: boolean;
  isDeleted: boolean;
  isTop:boolean;
  popUpText:string;
  category:string;
  thumbnail:string;
  // createdBy: Types.ObjectId;
  // updatedBy: Types.ObjectId;
  // createdAt: Date;
  // updatedAt: Date;
}

export  interface IBlogUpdateDB {
  title: string;
  content: {
    heading:string,
    subheading:string,
    detailsContent:string
  };
  slug: string;
  author:string;
  // authorId: Types.ObjectId;
  tags: string[];
  links: string[];
  isTop:boolean;
  popUpText:string;
  category:string;
  thumbnail:string;
  // updatedBy: Types.ObjectId;
  updatedAt: Date;
}

// Response
// #####################
export  interface IBlogResponse {
  _id: string;
  title: string;
  content: {
    heading:string,
    subheading:string,
    detailsContent:string
  };
  slug: string;
  author:string;
  // authorId: string;
  tags: string[];
  links: string[];
  isPublished: boolean;
  isDeleted: boolean;
  isTop:boolean;
  popUpText:string;
  category:string;
  thumbnail:string;
  // createdBy: string;
  // updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
}

// Request
//####################

export  interface IBlogCreateRequest {
  title: string;
  content: {
    heading:string,
    subheading:string,
    detailsContent:string
  };
  tags: string[];
  links: string[];
  author:string;
  isTop:boolean;
  popUpText:string;
  category:string;
  thumbnail:string;
}
export  interface IBlogUpdateRequest{
  title: string;
  content: {
    heading:string,
    subheading:string,
    detailsContent:string
  };
  tags: string[];
  links: string[];
  slug:string;
  author:string;
  isTop:boolean;
  popUpText:string;
  category:string;
  thumbnail:string;
}

export  interface IBlogDeleteRequest{
  _id:string;
}


