import express, { Request, Response } from "express";
import bodyParser from "body-parser";
// import error from "../error";
import { errorHandler } from "../error/ErrorHandler";
import services from "../services";
import utils from "../utils";

import * as Interface from "../interface";
// import middleware from "../middleware";

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
route.post("/create",/* middleware.authMiddleware ,*/  async (req: Request, res: Response) => {
  try {
console.log('test1');

    let userId=req.headers['user-id'];
    const data: Interface.IBlogCreateRequest = req.body;
    userId=utils.toString(userId);

    console.log(data);
    console.log(userId);
    

    await services.blogService.create(data,userId);
    res.status(utils.HttpStatusCodes.CREATED).json({message:"Blog Create!!"});
  } catch (error) {
    // errorHandler(error, res);
    console.log(error);
    
  }
});

route.get("/check", async (req: Request, res: Response) => {
  try {
    let userName: string = String(req.query.userName);
    const password: string = String(req.query.password);
    // const limit: number = Number(req.query.limit);

    // console.log(skip, limit);
    userName=userName.toLowerCase()
    const result = await services.blogService.checkAdmin(userName, password);
    res.status(utils.HttpStatusCodes.OK).json(result);
  } catch (error) {
    console.error(error);
    
  }
});


export { route as BlogRoute };
