"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const database_1 = __importDefault(require("../database/database"));
class MODEL {
    constructor(collectionName, schema) {
        this.db = new database_1.default();
        this.collectionName = collectionName;
        this.dbModel = mongoose_1.default.model(collectionName, schema);
    }
    // init()
    async init() {
        await this.db?.init();
        this.connection = this.db?.getConnection();
    }
    // get dbModel
    getDBModel() {
        return this.dbModel;
    }
    // find one
    async findOne(query, projection) {
        if (!projection)
            projection = {};
        return await this.dbModel?.findOne(query, projection);
    }
    // find 
    async find(query, projection) {
        if (!projection)
            projection = {};
        return await this.dbModel?.findOne(query, projection);
    }
    // create
    async create(data) {
        let document = new this.dbModel(data);
        return await document.save(document);
    }
    // update
    async update(_id, data) {
        return await this.dbModel.updateOne({ _id }, data);
    }
    // update query
    async updateQuery(query, data) {
        return await this.dbModel.updateOne(query, data);
    }
    // hard delete
    async delete(_id) {
        return await this.dbModel.deleteOne({ _id });
    }
    // count
    async count(query) {
        return await this.dbModel.countDocuments(query);
    }
    close() {
        this.db?.close();
    }
}
exports.default = MODEL;
//# sourceMappingURL=model.js.map