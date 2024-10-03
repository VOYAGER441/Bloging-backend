import { Model, Document, FilterQuery, UpdateQuery, ObjectId, PipelineStage } from 'mongoose';

export class MongooseOperations<T extends Document> {
  private model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  // Create a new document
  async create(data: Partial<T>): Promise<T> {
    try {
      const newDocument = new this.model(data);
      return await newDocument.save();
    } catch (error) {
      throw new Error(`Error creating document: ${error}`);
    }
  }

  // Find documents with optional filter, returning lean documents
  async find(filter: FilterQuery<T> = {}): Promise<Document<T>[]> {
    try {
      return await this.model.find(filter).lean().exec();
    } catch (error) {
      throw new Error(`Error finding documents: ${error}`);
    }
  }

  // Find one document by filter
  async findOne(filter: FilterQuery<T>): Promise<T | null> {
    try {
      return await this.model.findOne(filter).exec();
    } catch (error) {
      throw new Error(`Error finding document: ${error}`);
    }
  }

  // Update one document by filter and data
  async updateOne(filter: FilterQuery<T>, updateData: UpdateQuery<T>): Promise<T | null> {
    try {
      return await this.model.findOneAndUpdate(filter, updateData, { new: true }).exec();
    } catch (error) {
      throw new Error(`Error updating document: ${error}`);
    }
  }

  // Delete one document by filter
  async deleteOne(filter: FilterQuery<T>): Promise<T | null> {
    try {
      return await this.model.findOneAndDelete(filter).exec();
    } catch (error) {
      throw new Error(`Error deleting document: ${error}`);
    }
  }

  // Aggregation example
  async aggregate(pipeline: PipelineStage[]): Promise<any[]> {
    try {
      return await this.model.aggregate(pipeline).exec();
    } catch (error) {
      throw new Error(`Error running aggregation: ${error}`);
    }
  }
}
