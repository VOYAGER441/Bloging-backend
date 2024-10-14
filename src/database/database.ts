import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";
console.log(MONGODB_URI);

export default class DATABASE {
  connection: mongoose.Connection | undefined;

  constructor() {}

  async init() {
    if (mongoose.connection.readyState != 1) {
      if (process.env.NODE_ENV == "dev")
        console.log("😎 connecting to the DATABASE... 🤘");
      await mongoose.connect("mongodb+srv://mainak407:BlogDb%40345@cluster0.vxmxn.mongodb.net/Blog" )
        .catch(err => {
          console.error("MongoDB connection error:", err);
        });
    }
    this.connection = mongoose.connection;
  }

  getConnection() {
    return this.connection;
  }
  close() {
    this.connection?.close();
  }
}
