import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

export default class DATABASE {
  connection: mongoose.Connection | undefined;

  constructor() {}
  async init() {
    if (mongoose.connection.readyState != 1) {
      if (process.env.NODE_ENV == "dev")
        console.log("😎 connecting to the DATABASE... 🤘");
      await mongoose.connect(MONGODB_URI);
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
