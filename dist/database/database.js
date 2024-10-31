"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MONGODB_URI = process.env.MONGODB_URI || "";
// console.log(MONGODB_URI);
/* "mongodb+srv://mainak407:BlogDb%40345@cluster0.vxmxn.mongodb.net/Blog" */
class DATABASE {
    constructor() { }
    async init() {
        if (mongoose_1.default.connection.readyState != 1) {
            if (process.env.NODE_ENV == "dev")
                console.log("😎 connecting to the DATABASE... 🤘");
            await mongoose_1.default.connect(MONGODB_URI)
                .catch(err => {
                console.error("MongoDB connection error:", err);
            });
        }
        this.connection = mongoose_1.default.connection;
    }
    getConnection() {
        return this.connection;
    }
    close() {
        this.connection?.close();
    }
}
exports.default = DATABASE;
//# sourceMappingURL=database.js.map