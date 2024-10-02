import mongoose from "mongoose";
// const mongoose = require('mongoose');

const database = () => {
  mongoose
    .connect(process.env.MONGODB_URI + "")
    .then(() => {
      console.log("Connected to MongoDB using Mongoose");
    })
    .catch((err) => {
      console.error("Connection error", err);
    });
};

export default database;