import { v4 as uuid } from "uuid";
import generateUniqueSlug from "./uniqueSlug";
import { ObjectId } from "mongodb";
// import { ObjectIdLike } from "bson";

const SYSTEM_API_KEY = process.env.SYSTEM_API_KEY || uuid();
console.log(SYSTEM_API_KEY);

export enum HttpStatusCodes {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,
  MOVED_PERMANENTLY = 301,
  FOUND = 302,
  NOT_MODIFIED = 304,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
}

const toString = (str: any) => {
  const result = str + "";
  return result;
};


const stringToObjectId = (id: string) => {
  return new ObjectId(id);
};

export default {
  SYSTEM_API_KEY,
  HttpStatusCodes,
  toString,
  generateUniqueSlug,
  stringToObjectId,
};
