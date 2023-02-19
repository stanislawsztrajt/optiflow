"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LostItemsService = void 0;
const exceptions_1 = require("@nestjs/common/exceptions");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const lost_items_schema_1 = require("./schemas/lost-items.schema");
let LostItemsService = class LostItemsService {
    constructor(lostItemModel) {
        this.lostItemModel = lostItemModel;
    }
    async create(createLostItemDto) {
        const createdLostItem = new this.lostItemModel(createLostItemDto);
        return await createdLostItem.save();
    }
    async findAll(query) {
        return await this.lostItemModel.find(query).exec();
    }
    async findOne(query) {
        return await this.lostItemModel.findById(query).exec();
    }
    async update(id, updateLostItemDto) {
        return await this.lostItemModel.findByIdAndUpdate(id, updateLostItemDto, { new: true }).exec();
    }
    async remove(id) {
        const removedLostItem = await this.lostItemModel.findByIdAndRemove(id).exec();
        if (!removedLostItem) {
            throw new exceptions_1.NotFoundException();
        }
        return removedLostItem;
    }
};
LostItemsService = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(lost_items_schema_1.LostItem.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LostItemsService);
exports.LostItemsService = LostItemsService;
//# sourceMappingURL=lost-items.service.js.map