import { FilterQuery } from 'mongoose';
export declare const findOneByCollectionName: (collectionName: string, query: FilterQuery<unknown>) => Promise<import("mongodb").WithId<import("bson").Document>>;
export declare const parseObjectObjectId: (object: object) => any;
