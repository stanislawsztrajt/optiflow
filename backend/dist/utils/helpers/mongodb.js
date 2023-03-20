"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseObjectObjectId = exports.findOneByCollectionName = void 0;
const dotenv = require("dotenv");
const mongoose_1 = require("mongoose");
dotenv.config();
mongoose_1.default.connect(process.env.MONGODB_URI);
const connect = mongoose_1.default.connection;
const findOneByCollectionName = async (collectionName, query) => {
    const collectionModel = connect.db.collection(collectionName);
    return await collectionModel.findOne(query);
};
exports.findOneByCollectionName = findOneByCollectionName;
const parseObjectObjectId = (object) => {
    return JSON.parse(JSON.stringify(object));
};
exports.parseObjectObjectId = parseObjectObjectId;
//# sourceMappingURL=mongodb.js.map