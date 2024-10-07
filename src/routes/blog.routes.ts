import express, { Request, Response } from "express";
import bodyParser from "body-parser";
// import error from "../error";
import { errorHandler } from "../error/ErrorHandler";
import services from "../services";
import utils from "../utils";

import * as Interface from "../interface";

const route = express.Router();
route.use(bodyParser.json());

// public routes
// route for get all blogs
route.get("/getAll", async (req: Request, res: Response) => {
  try {
    const skip: number = Number(req.query.skip);
    const limit: number = Number(req.query.limit);

    console.log(skip, limit);
    const result = await services.blogService.getAllBlogPub(skip, limit);
    res.status(utils.HttpStatusCodes.OK).json(result);
  } catch (error) {
    errorHandler(error, res);
  }
});

// route for create blog
route.post("/create", async (req: Request, res: Response) => {
  try {
    const data: Interface.IBlogCreateRequest = req.body;

    await services.blogService.create(data);
    res.status(utils.HttpStatusCodes.CREATED).json({message:"Blog Create!!"});
  } catch (error) {
    errorHandler(error, res);
  }
});

export { route as BlogRoute };
