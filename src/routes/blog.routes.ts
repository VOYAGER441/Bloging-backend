import express,{ Request,Response } from "express";
// import Interface from "../interface";
import bodyParser from "body-parser";
// import error from "../error";
import { errorHandler } from "../error/ErrorHandler";
import services from "../services";

const route=express.Router();
route.use(bodyParser.json());

// public routes
// route for get all blogs
route.get("/getAll",async(req:Request,res:Response)=>{
    try {
        const skip=req.query.skip;
        const limit=req.query.limit;
        console.log(skip,limit);
        const result=services.blogService.getAllBlogPub(skip,limit)

    } catch (error) {
        errorHandler(error,res)
    }
});


export  {route as BlogRoute};