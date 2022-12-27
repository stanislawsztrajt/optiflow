import * as dotenv from 'dotenv';
import mongoose, { FilterQuery } from 'mongoose';
dotenv.config();

mongoose.connect(process.env.MONGODB_URI);
const connect = mongoose.connection;

export const findOneByCollectionName = async (
  collectionName: string,
  query: FilterQuery<unknown>,
) => {
  const collectionModel = connect.db.collection(collectionName);
  return await collectionModel.findOne(query);
};

export const parseObjectObjectId = (object: object) => {
  return JSON.parse(JSON.stringify(object));
};
